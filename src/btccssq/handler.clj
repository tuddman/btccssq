(ns btccssq.handler
  (:require [compojure.core :refer [defroutes]]
            [btccssq.routes.home :refer [home-routes]]
            [btccssq.routes.order :refer [order-routes]]
            [btccssq.routes.latest :refer [latest-routes]]
            [btccssq.models.schema :as schema]
            [noir.util.middleware :as middleware]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [com.postspectacular.rotor :as rotor]
            [selmer.parser :as parser]
            [environ.core :refer [env]]
            [btccssq.routes.cljsexample :refer [cljs-routes]]
            [clojure.edn :as edn]
            [org.httpkit.server :as httpkit]
            [btccssq.middleware :refer [wrap-timbre]]
            [clj-time.local :as lt]
            [taoensso.timbre :as timbre
             :refer (trace debug info warn error fatal spy with-log-level)]
            [ring.util.response :refer [file-response]]))


(def channels (atom []))

(defn async-handler [ring-request]
  ;; unified API for WebSocket and HTTP long polling/streaming
  (httpkit/with-channel ring-request channel    ; get the channel
    (if (httpkit/websocket? channel)            ; if you want to distinguish them
      (httpkit/on-receive channel (fn [raw]     ; two way communication
                                    (let [data (edn/read-string raw)
                                          name (:name data)
                                          msg  (:msg data)]
                                      (info "WebSocket: " data)
                                      (if (not (seq (filter #(= % channel) @channels)))
                                        (swap! channels #(conj %1 channel)))
                                      (doseq [c @channels]
                                        (httpkit/send!
                                         c (pr-str {:msg msg
                                                    :name name
                                                    :timestamp (.toString (lt/local-now))}))))))
      (httpkit/send! channel {:status 200
                              :headers {"Content-Type" "text/plain"}
                              :body    "Long polling?"}))))


(defroutes
  app-routes
  (route/resources "/async" [] async-handler) ;; asynchronous(long polling)
  (route/resources "/") ; {:root "resources"})
  (route/not-found "Not Found"))


(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []
  (timbre/set-config!
    [:appenders :rotor]
    {:min-level :info,
     :enabled? true,
     :async? false,
     :max-message-per-msecs nil,
     :fn rotor/append})
  (timbre/set-config!
    [:shared-appender-config :rotor]
    {:path "btccssq.log", :max-size (* 512 1024), :backlog 10})
  (if (env :selmer-dev) (parser/cache-off!))
  (timbre/info "btccssq started successfully"))
  #_(schema/create-tables)

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (timbre/info "btccssq is shutting down..."))



(defn template-error-page [handler]
  (if (env :selmer-dev)
    (fn [request]
      (try
        (handler request)
        (catch
          clojure.lang.ExceptionInfo
          ex
          (let [{:keys [type error-template], :as data} (ex-data ex)]
            (if (= :selmer-validation-error type)
              {:status 500, :body (parser/render error-template data)}
              (throw ex))))))
    handler))

(def app
 (middleware/app-handler
   [cljs-routes home-routes order-routes app-routes latest-routes]
   :middleware
   [template-error-page]
   :access-rules
   []
   :formats
   [:json-kw]))


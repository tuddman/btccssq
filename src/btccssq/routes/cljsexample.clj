(ns btccssq.routes.cljsexample
  (:require [compojure.core :refer :all]
            [noir.response :as response]
            [btccssq.views.layout :as layout]))

(def messages
  (atom
    [{:message "Hello world"
      :user    "Foo"}
     {:message "Ajax is fun"
      :user    "Bar"}]))

(defroutes cljs-routes
  (GET "/cljsexample" [message user] (layout/render "cljsexample.html"))
  (GET "/messages" [] (response/json @messages))
  (POST "/add-message" [message user]
        (response/json
          (swap! messages conj {:message message :user user}))))

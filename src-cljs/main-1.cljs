(ns btccssq.main
  (:require [ajax.core :refer [GET POST]]
            [domina :refer [value by-id destroy-children! append!]]
            [domina.events :refer [listen!]]
            [dommy.template :as template]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))


#_(defn widget [data owner]
  (om/component
    (dom/div nil "Hello NYC!")))

#_(om/root {} widget (.getElementById js/document "some-id"))


#_(defn render-message [{:keys [message user]}]
  [:li [:p {:id user} message " - " user]])

#_(defn render-messages [messages]
  (let [messages-div (by-id "messages")]
    (destroy-children! messages-div)
    (->> messages
         (map render-message)
         (into [:ul])
         template/node
         (append! messages-div))))

#_(defn add-message [_]
  (POST "/add-message"
        {:params {:message (value (by-id "message"))
                  :user    (value (by-id "user"))}
         :handler render-messages}))

#_(defn ^:export init []
  (GET "/messages" {:handler render-messages})
  (listen! (by-id "send") :click add-message))

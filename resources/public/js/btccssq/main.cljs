(ns btccssq.main

  (:require [cljs.core.async :as async :refer [put! chan dropping-buffer]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]
            [goog.style :as gstyle])
  (:import [goog.ui IdGenerator]
           [goog.events EventType]))

(defn widget [data owner]
  (om/component
    (dom/div nil "Hello world!")))

(om/root {} widget (.getElementById js/document "some-id"))


(defn render-message [{:keys [message user]}]
  [:li [:p {:id user} message " - " user]])

(defn render-messages [messages]
  (let [messages-div (by-id "messages")]
    (destroy-children! messages-div)
    (->> messages
         (map render-message)
         (into [:ul])
         template/node
         (append! messages-div))))

(defn add-message [_]
  (POST "/add-message"
        {:params {:message (value (by-id "message"))
                  :user    (value (by-id "user"))}
         :handler render-messages}))

(defn ^:export init []
  (GET "/messages" {:handler render-messages})
  (listen! (by-id "send") :click add-message))

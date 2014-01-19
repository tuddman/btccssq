(ns btccssq.routes.order
  (:use compojure.core)
  (:require [btccssq.views.layout :as layout]
            [btccssq.util :as util]
            [btccssq.models.db :as db]))

(defn order-page [& [satoshiid quantity price error]]
  (layout/render "order.html" {
                               :error  error
                               :orders (db/get-orders)}))

#_(defn about-page []
  (layout/render "about.html"))


(defn save-order [satoshiid quantity price]
  (cond

    (empty? satoshiid)
    (order-page satoshiid quantity price "No id")

    (empty? quantity)
    (order-page satoshiid quantity price "No quantity")

    (empty? price)
    (order-page satoshiid quantity price "No price")

    :else
    (do
      (db/save-order satoshiid quantity price)
      (order-page))))

(defroutes order-routes
  (GET "/" [] (order-page))
  (POST "/" [satoshiid quantity price] (save-order satoshiid quantity price)))

(ns btccssq.routes.order
  (:use compojure.core)
  (:require [btccssq.views.layout :as layout]
            [btccssq.models.db :as db]))




(defn order-page [& [satoshiid quantity price error]]
  (layout/render "order.html" {
                               :error  error
                               :orders (db/get-orders-from-mongo "bids")}))



(defn save-bid-order-to-mongo [satoshiid quantity price]
    (cond

    (empty? satoshiid)
    (order-page satoshiid quantity price "No id")

    (empty? quantity)
    (order-page satoshiid quantity price "No quantity")

    (empty? price)
    (order-page satoshiid quantity price "No price")
    :else
    (do
      (db/save-bid-order-to-mongo satoshiid quantity price)
      (order-page))))

(defn save-ask-order-to-mongo [satoshiid quantity price]
    (cond

    (empty? satoshiid)
    (order-page satoshiid quantity price "No id")

    (empty? quantity)
    (order-page satoshiid quantity price "No quantity")

    (empty? price)
    (order-page satoshiid quantity price "No price")
    :else
    (do
      (db/save-ask-order-to-mongo satoshiid quantity price)
      (order-page))))



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
  (POST "/" [satoshiid quantity price] (save-bid-order-to-mongo satoshiid quantity price)))

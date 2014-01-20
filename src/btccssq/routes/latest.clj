(ns btccssq.routes.latest
  (:use compojure.core)
  (:require [btccssq.views.layout :as layout]
            [btccssq.models.db :as db]))



(defn latest-page [& [buyerid quantity sellerid price magic error]]
  (layout/render "latest.html" {
                               :error  error
                               :txs (db/get-coll-from-mongo "transactions")}))

(defn save-transaction-to-mongo [buyerid quantity sellerid price magic]
    (cond

    (empty? buyerid)
    (latest-page buyerid quantity sellerid price magic "No buyer id")

    (empty? quantity)
    (latest-page buyerid quantity sellerid price magic "No quantity")

    (empty? sellerid)
    (latest-page buyerid quantity sellerid price magic "No seller id")

    (empty? price)
    (latest-page buyerid quantity sellerid price magic "No price")

    (empty? magic)
    (latest-page buyerid quantity sellerid price magic "Nice Try")
    :else
    (do
      (db/save-transaction-to-mongo buyerid quantity sellerid price)
      (latest-page))))

(defroutes latest-routes
  (GET "/" [] (latest-page))
  (POST "/" [buyerid quantity sellerid price magic] (save-transaction-to-mongo buyerid quantity sellerid price)))


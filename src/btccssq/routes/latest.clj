(ns btccssq.routes.latest
  (:use compojure.core)
  (:require [btccssq.views.layout :as layout]
            [btccssq.models.db :as db]))


(defn latest-page [& [buyerid quantity sellerid price error]]
  (layout/render "latest.html" {
                               :error  error
                               :txs (db/get-coll-from-mongo "transactions")}))

(defroutes latest-routes
  (GET "/" [] (latest-page))
  (POST "/" [buyerid quantity sellerid price] (db/save-transaction-to-mongo buyerid quantity sellerid price)))
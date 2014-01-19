(ns btccssq.models.db
  (:use korma.core
        [korma.db :only (defdb)])
  (:require [btccssq.models.schema :as schema]))

(defdb db schema/db-spec)

(defentity orders)

(defn save-order
  [satoshiid quantity price]
  (insert orders
          (values {:satoshiid satoshiid
                   :quantity quantity
                   :price price
                   :timestamp (new java.util.Date)})))

(defn get-orders []
  (select orders))

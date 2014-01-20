(ns btccssq.models.db
  (:use korma.core
        [korma.db :only (defdb)])
  (:require [btccssq.models.schema :as schema]
            [monger.core :as mg]
            [monger.collection :as mc])
  (:import [org.bson.types ObjectId]
           [com.mongodb DB WriteConcern]))

(defdb db schema/db-spec)

(defentity orders)

;; MONGO DB SECTION

;; Now connect to MongoDB. If db doesn't exist, it will be created.

(mg/connect!)
(mg/set-db! (mg/get-db "btccssq"))

(defn save-bid-order-to-mongo
"alt way to store orders. this stores order into mongo collection"
  [satoshiid quantity price]
    (mc/insert "bids" { :_id (ObjectId.) :SATOSHIID satoshiid :QUANTITY quantity :PRICE price }))


(defn save-ask-order-to-mongo
"alt way to store orders. this stores order into mongo collection"
  [satoshiid quantity price]
    (mc/insert "asks" { :_id (ObjectId.) :SATOSHIID satoshiid :QUANTITY quantity :PRICE price }))

(defn get-coll-from-mongo 
  [coll-name]
  (mc/find-maps (str coll-name)))

(defn save-transaction-to-mongo
  [buyerid quantity sellerid price]
  (mc/insert "transactions" { :_id (ObjectId.) :BUYERID buyerid :SELLERID sellerid :QUANTITY quantity :PRICE price }))

;; END - MONDO DB SECTION

(defn save-order
  [satoshiid quantity price]
  (insert orders
          (values {:satoshiid satoshiid
                   :quantity quantity
                   :price price
                   :timestamp (new java.util.Date)})))

(defn get-orders []
  (select orders))

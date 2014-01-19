(ns btccssq.models.schema
  (:require [clojure.java.jdbc :as sql]
            [noir.io :as io]))

(def db-store "site.db")

(def db-spec {:classname "org.h2.Driver"
              :subprotocol "h2"
              :subname (str (io/resource-path) db-store)
              :user "sa"
              :password ""
              :naming {:keys clojure.string/upper-case
                       :fields clojure.string/upper-case}})

(defn initialized?
  "checks to see if the database schema is present"
  []
  (.exists (new java.io.File (str (io/resource-path) db-store ".h2.db"))))

(defn create-orders-table []
  (sql/with-connection
    db-spec
    (sql/create-table
      :orders
      [:id "INTEGER PRIMARY KEY AUTO_INCREMENT"]
      [:timestamp :timestamp]
      [:satoshiid "varchar(30)"]
      [:quantity "varchar(30)"]
      [:price "varchar(30)"])
      [:side "varchar(10)"]
    (sql/do-commands
      "CREATE INDEX timestamp_index ON orders (timestamp)")))

(defn create-tables
  "creates the database tables used by the application"
  []
  (create-orders-table))

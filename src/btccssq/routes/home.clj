(ns btccssq.routes.home
  (:use compojure.core)
  (:require [btccssq.views.layout :as layout]
            [btccssq.util :as util]
            [btccssq.models.db :as db]))

(defn home-page [& []]
  (layout/render "home.html"
                 {:orders (db/get-coll-from-mongo "bids")}))

(defn about-page []
  (layout/render "about.html"))

(defn update-page []
  (layout/render "update.html"))

(defn order-page []
  (layout/render "order.html"))

(defn order2-page []
  (layout/render "order2.html"))

(defn latest-page []
  (layout/render "latest.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page))
  (GET "/update" [] (update-page))
  (GET "/order" [] (order-page))
  (GET "/order2" [] (order2-page))
  (GET "/latest" [] (latest-page)))

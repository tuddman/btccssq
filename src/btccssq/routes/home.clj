(ns btccssq.routes.home
  (:use compojure.core)
  (:require [btccssq.views.layout :as layout]
            [btccssq.util :as util]))

(defn home-page []
  (layout/render
    "home.html" {}))

(defn about-page []
  (layout/render "about.html"))


(defn update-page []
  (layout/render "update.html"))


(defn order-page []
  (layout/render "order.html"))


(defn order2-page []
  (layout/render "order2.html"))



(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page))
  (GET "/update" [] (update-page))
  (GET "/order" [] (order-page))
  (GET "/order2" [] (order2-page)))
(ns btccssq.routes.mobile
  (:require [compojure.core :refer :all]
            [noir.response :as response]
            [btccssq.views.layout :as layout]))


(def orders
  (atom
    [{:satoshi-id "0001"
      :side    "BUY"}
     {:qnty 1
      :price  810}]))

(defroutes mobile-routes
  (GET "/orderbook" [] (response/json @orders))
  (POST "/add-order" [satoshi-id side qnty price]
        (response/json
          (swap! orders conj {:satoshi-id satoshi-id :side side :qnty qnty :price price}))))

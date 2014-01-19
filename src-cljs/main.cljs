(ns btccssq.main
  (:require [ajax.core :refer [GET POST]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [domina :refer [value by-id destroy-children! append!]]))


#_(defn widget [data owner]
  (om/component
    (dom/div nil "Hello NYC!")))

(ns colour-life.core
    (:require [react]
              [react-dom]
              [sablono.core :as sab :include-macros true]))

(enable-console-print!)

(println "This text is printed from src/colour-life/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn hello-world [state]
  (sab/html [:div
             [:h1 (:text @state)]
             [:h3 "Edit this and watch it change!"]]))

(js/ReactDOM.render
 (hello-world app-state)
 (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

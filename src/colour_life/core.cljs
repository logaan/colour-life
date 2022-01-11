(ns colour-life.core
    (:require [react]
              [react-dom]
              [cljsjs.create-react-class]
              [tonejs]
              [sablono.core :as sab :include-macros true]))

;; General helper funtions
(defn log [v]
  (println (str v))
  v)

;; Core game of life stuff
(defn neighbours [[x y]]
  #{[(dec x) (dec y)] [   x    (dec y)] [(inc x) (dec y)]
    [(dec x)    y   ]                   [(inc x)    y   ]
    [(dec x) (inc y)] [   x    (inc y)] [(inc x) (inc y)]})

(defn neighbour-count [population point]
  (->> (neighbours point) (filter population) count))

(defn is-alive? [population point]
  (condp = (neighbour-count population point)
    3 true
    2 (contains? population point)
    false))

(defn tick [population]
  (let [potentially-alive (into #{} (mapcat neighbours population))]
    (->> potentially-alive
         (filter #(is-alive? population %))
         (into #{}))))

(def blinker-horizontal
  #{[1 2] [2 2] [3 2]})

(def blinker-vertical
  #{[2 1] [2 2] [2 3]})

(assert (= blinker-vertical (tick blinker-horizontal)))

;; Music
(def notes
  ["A" "Bb" "B" "C" "C#" "D" "D#" "E" "F" "F#" "G" "Ab"])

(defn cells->notes [cells]
  (into #{}
        (for [[x y] cells]
          (str (notes x) (dec y) ))))

;; App state
(defonce app-state
  (atom {:colours {:red #{[1 2] [2 2] [3 2]}
                   :blue #{[7 6] [7 7] [7 8]}}
         :interval nil}))

;; Controllers
(def clock-speed 500)

(defonce synth (-> (new js/Tone.PolySynth) (.toMaster)))

(defn step []
  (let [reds (get-in @app-state [:colours :red])
        blues (get-in @app-state [:colours :blue])
        cells (concat reds blues)
        notes (cells->notes cells)]
    (println notes)

    (.triggerAttackRelease synth (clj->js notes) "8n"))

  (swap! app-state
         #(-> (update-in % [:colours :red] tick)
               (update-in [:colours :blue] tick))))

(defn play []
  (let [interval (js/setInterval step clock-speed)]
    (swap! app-state assoc :interval interval)))

(defn stop []
  (js/clearInterval (:interval @app-state)))

;; Views
(defn colour [board point]
  (cond
    (get-in board [:colours :red point]) :red
    (get-in board [:colours :blue point]) :blue
    :else :grey))

(defn cell [board point]
  [:td {:key (str point)
        :style {:background-color (colour board point)
                :color (colour board point)
                :width "1em"
                :height "1em"}}])

(defn colour-of-life [state]
  (let [board @state]
    (sab/html
     [:div
      [:h1 "Colour of Life"]
      [:button {:on-click step} "Step"]
      [:button {:on-click play} "Play"]
      [:button {:on-click stop} "Stop"]
      [:table
       [:thead
        [:tr
         [:td]
         (for [note notes]
           [:td {:key (str note)} note])]]
       [:tbody
       (for [y (range 0 12)]
         [:tr {:key y}
          [:td (dec y)]
          (for [x (range 0 12)]
            (cell board [x y]))])]]])))

;; React interop and boostrapping
(def class
  (js/createReactClass
   #js {:render #(colour-of-life app-state)}))

(def component
  (js/ReactDOM.render
   (js/React.createElement class #js {})
   (. js/document (getElementById "app"))))

(add-watch app-state :force-update #(.forceUpdate component))

(ns colour-life.core
  (:require [react]
            [react-dom]
            [cljsjs.create-react-class]
            [tonejs]
            [cljs.pprint]
            [sablono.core :as sab :include-macros true]))

;; Core game of life stuff
(defn neighbours [[x y]]
  #{[(dec x) (dec y)] [   x    (dec y)] [(inc x) (dec y)]
    [(dec x)    y   ]                   [(inc x)    y   ]
    [(dec x) (inc y)] [   x    (inc y)] [(inc x) (inc y)]})

(defn is-alive? [neighbour-count was-alive?]
  (condp = neighbour-count
    3 true
    2 was-alive?
    false))

(defn tick [population]
  (let [potentially-alive (mapcat neighbours population)
        neighbour-count   (frequencies potentially-alive)]
    (->> potentially-alive
         (filter #(is-alive? (neighbour-count %)
                             (contains? population %)))
         (into #{}))))

;; Music
(def notes
  ["A" "Bb" "B" "C" "C#" "D" "D#" "E" "F" "F#" "G" "Ab"])

(defn cells->notes [cells]
  (into #{}
        (for [[x y] cells]
          (str (notes (mod x 12)) (dec (mod y 12)) ))))

;; App state
(def initial
  {:cells {"red" #{       [1 0]
                     [2 1]
                     [0 2] [1 2] [2 2]}
             "blue" #{[6 2] [7 2] [8 2]}}
   :interval nil
   :draw-colour "red"
   :drawing false})

(defonce app-state
  (atom initial))

;; Controllers
(def clock-speed 400)

(defonce synth (-> (new js/Tone.PolySynth) (.toMaster)))

(defn step []
  (let [reds (get-in @app-state [:cells "red"])
        blues (get-in @app-state [:cells "blue"])
        cells (concat reds blues)
        notes (cells->notes cells)]
    (.triggerAttackRelease synth (clj->js notes) "8n")

    (swap! app-state
           #(-> (update-in % [:cells "red"] tick)
                (update-in [:cells "blue"] tick)))))

(defn play []
  (let [interval (js/setInterval step clock-speed)]
    (swap! app-state assoc :interval interval)))

(defn pause []
  (js/clearInterval (:interval @app-state)))

(defn toggle-cell [point]
  (swap! app-state
         (fn [state]
           (update-in state [:cells (:draw-colour state)]
                      (fn [population]
                        (if (contains? population point)
                          (disj population point)
                          (conj population point)))))))

(defn set-colour [colour]
  (swap! app-state assoc :draw-colour colour))

(defn reset []
  (pause)
  (reset! app-state initial))

;; Views
(defn colour [board point]
  (let [red? (get-in board [:cells "red" point])
        blue? (get-in board [:cells "blue" point])]
    (cond
      (and red? blue?) "purple"
      red? "red"
      blue? "blue"
      :else "#DDD")))

(defn start-drawing [point]
  (toggle-cell point)
  (swap! app-state assoc :drawing true))

(defn stop-drawing []
  (swap! app-state assoc :drawing false))

(defn draw [point]
  (if (:drawing @app-state)
    (toggle-cell point)))

(defn cell [board point]
  [:td {:key (str point)
        :on-mouse-down (fn [e]
                         (start-drawing point)
                         (.preventDefault e))
        :on-mouse-over #(draw point)
        :style {:background-color (colour board point)
                :color (colour board point)
                :width "1.5em"
                :height "1.5em"}}])

(defn colour-of-life [state]
  (let [board @state]
    (sab/html
     [:div {:on-mouse-up #(stop-drawing)}
      [:h1 "Colour of Life"]
      [:p [:a {:href "https://github.com/logaan/colour-life/blob/main/src/colour_life/core.cljs"}
           "Source code on Github"]]
      [:p
       "Click on a cell to draw in: "
       [:label
        [:input {:type :radio
                 :name "colour"
                 :value "red"
                 :on-click #(set-colour "red")
                 :checked (= "red" (:draw-colour board))}]
        "Red"]
       [:label
        [:input {:type :radio
                 :name "colour"
                 :value "blue"
                 :on-click #(set-colour "blue")
                 :checked (= "blue" (:draw-colour board))}]
        "Blue"]]
      [:table {:style {:user-select "none"}}
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
             (cell board [x y]))])]]
      [:p
       [:button {:on-click step} "Step"] -
       [:button {:on-click play} "Play"]
       [:button {:on-click pause} "Pause"] -
       [:button {:on-click reset} "Reset"]]
      [:pre
       [:code
        (with-out-str (cljs.pprint/pprint board))]]])))

;; React interop and boostrapping
(def class
  (js/createReactClass
   #js {:render #(colour-of-life app-state)}))

(def component
  (js/ReactDOM.render
   (js/React.createElement class #js {})
   (. js/document (getElementById "app"))))

(add-watch app-state :force-update #(.forceUpdate component))

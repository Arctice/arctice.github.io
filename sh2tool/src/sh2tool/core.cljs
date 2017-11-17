(ns sh2tool.core
  (:require [clojure.string :as str]))

(def available-words ["DAMN" "DARK" "DOSE" "DOWN" "DULL" "DUST" "DUSK" "HELL" "HELP" "KILL" "LOSE" "LOVE" "LOCK" "LUCK" "MAMA" "MIST" "NULL" "OPEN" "OVER" "TIME" "TOWN"])

(defn combination-filter [key]
  (fn [word]
    (loop [key key word word]
      (if (or (empty? word)
               (empty? key))
        true
        (if (= (first key)
               (first word))
          false
          (recur (rest key) (rest word))
          )))
    ))
(defn filter-solutions [key]
  (filter (combination-filter key) available-words))

(defn list-render [words]
  (apply str (map #(str "<li>" % "</li>") words)))
(defn render-possible-solutions []
  (aset (js/document.getElementById "possible-solutions-list") "innerHTML"
        (list-render
         (filter-solutions
          (str/upper-case
           (aget (js/document.getElementById "init-combination")
                 "value"))))))

(aset
 (js/document.getElementById "init-combination")
 "oninput" render-possible-solutions)

(render-possible-solutions)

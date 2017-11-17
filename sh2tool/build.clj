(require '[cljs.build.api :as b])

(println "Building ...")

(let [start (System/nanoTime)]
  (b/build "src"
    {:main 'sh2tool.core
     :output-to "main.js"
     :output-dir "out"
     :verbose true
     :source-paths ["src"]
     :asset-path "sh2tool/out"
     :optimizations :advanced
     :closure-warnings {:check-types :warning}}
)
  (println "... done. Elapsed" (/ (- (System/nanoTime) start) 1e9) "seconds"))

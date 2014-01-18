(defproject
  btccssq
  "0.1.0-SNAPSHOT"
  :repl-options
  {:init-ns btccssq.repl}
  :dependencies
  [[ring-server "0.3.1"]
   [domina "1.0.2"]
   [markdown-clj "0.9.40"]
   [environ "0.4.0"]
   [com.taoensso/timbre "2.7.1"]
   [prismatic/dommy "0.1.2"]
   [org.clojure/clojurescript "0.0-2127"]
   [com.taoensso/tower "2.0.1"]
   [org.clojure/clojure "1.5.1"]
   [cljs-ajax "0.2.2"]
   [compojure "1.1.6"]
   [selmer "0.5.8"]
   [lib-noir "0.7.9"]
   [com.postspectacular/rotor "0.1.0"]]

    :cljsbuild {
    :builds {
             :dev {
                   :source-paths ["src-cljs"]
                   :compiler {:output-to "resources/public/js/cljs.js"
                              :output-dir "resources/public/js"
                              :optimizations :none
                              :pretty-print true
                              :source-map "resources/public/js/cljs.js.map"}}
             :prod {
                    :source-paths ["src-cljs"]
                    :compiler {:output-to "resources/public/js-min/cljs-min.js"
                               :output-dir "resources/public/js-min"
                               :optimizations :advanced
                               :pretty-print false
                               :source-map "resources/public/js-min/cljs-min.js.map"}}}}

  :ring
  {:handler btccssq.handler/app,
   :init btccssq.handler/init,
   :destroy btccssq.handler/destroy}
  :profiles
  {:uberjar {:aot :all},
   :production
   {:ring
    {:open-browser? false, :stacktraces? false, :auto-reload? false}},
   :dev
   {:dependencies [[ring-mock "0.1.5"] [ring/ring-devel "1.2.1"]],
    :env {:selmer-dev true}}}
  :url
  "http://example.com/FIXME"
  :plugins
  [[lein-ring "0.8.10"]
   [lein-environ "0.4.0"]
   [lein-cljsbuild "0.3.3"]]
  :description
  "FIXME: write description"
  :min-lein-version "2.0.0")

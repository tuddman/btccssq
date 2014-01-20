// Compiled by ClojureScript 0.0-2138
goog.provide('btccssq.util');
goog.require('cljs.core');
btccssq.util.format_date = (function format_date(ts){var d = (new Date(Date.parse(ts)));var Y = d.getFullYear();var M = (1 + d.getMonth());var D = d.getDate();var h = d.getHours();var m = d.getMinutes();var s = d.getSeconds();return [cljs.core.str(Y),cljs.core.str("-"),cljs.core.str(M),cljs.core.str("-"),cljs.core.str(D),cljs.core.str(" "),cljs.core.str(h),cljs.core.str(":"),cljs.core.str(m),cljs.core.str(":"),cljs.core.str(s)].join('');
});

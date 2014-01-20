// Compiled by ClojureScript 0.0-2138
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){return sel.cljs$core$IFn$_invoke$arity$2(domina.css.root_element(),expr);
});
var sel__2 = (function (base,expr){if(typeof domina.css.t13251 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.css.t13251 = (function (expr,base,sel,meta13252){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta13252 = meta13252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t13251.cljs$lang$type = true;
domina.css.t13251.cljs$lang$ctorStr = "domina.css/t13251";
domina.css.t13251.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"domina.css/t13251");
});
domina.css.t13251.prototype.domina$DomContent$ = true;
domina.css.t13251.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__13246_SHARP_){return domina.normalize_seq(goog.dom.query(self__.expr,p1__13246_SHARP_));
}),domina.nodes(self__.base));
});
domina.css.t13251.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__13247_SHARP_){return domina.normalize_seq(goog.dom.query(self__.expr,p1__13247_SHARP_));
}),domina.nodes(self__.base))));
});
domina.css.t13251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13253){var self__ = this;
var _13253__$1 = this;return self__.meta13252;
});
domina.css.t13251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13253,meta13252__$1){var self__ = this;
var _13253__$1 = this;return (new domina.css.t13251(self__.expr,self__.base,self__.sel,meta13252__$1));
});
domina.css.__GT_t13251 = (function __GT_t13251(expr__$1,base__$1,sel__$1,meta13252){return (new domina.css.t13251(expr__$1,base__$1,sel__$1,meta13252));
});
}
return (new domina.css.t13251(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sel.cljs$core$IFn$_invoke$arity$1 = sel__1;
sel.cljs$core$IFn$_invoke$arity$2 = sel__2;
return sel;
})()
;

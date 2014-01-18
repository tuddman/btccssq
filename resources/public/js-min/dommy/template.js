// Compiled by ClojureScript 0.0-2127
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj14213 = {};return obj14213;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3385__auto__ = this$;if(and__3385__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3385__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4005__auto__ = (((this$ == null))?null:this$);return (function (){var or__3397__auto__ = (dommy.template._elem[goog.typeOf(x__4005__auto__)]);if(or__3397__auto__)
{return or__3397__auto__;
} else
{var or__3397__auto____$1 = (dommy.template._elem["_"]);if(or__3397__auto____$1)
{return or__3397__auto____$1;
} else
{throw cljs.core.missing_protocol("PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name(node_key);var base_idx = dommy.template.next_css_index(node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((cljs.core.constant$keyword$59)?node_str:null)));var node = (cljs.core.truth_((dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1 ? dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1(tag) : dommy.template._PLUS_svg_tags_PLUS_.call(null,tag)))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_14216 = node_str.substring(base_idx);while(true){
var next_idx_14217 = dommy.template.next_css_index(str_14216,1);var frag_14218 = (((next_idx_14217 >= 0))?str_14216.substring(0,next_idx_14217):str_14216);var G__14215_14219 = frag_14218.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__14215_14219))
{node.setAttribute("id",frag_14218.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__14215_14219))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_14218.substring(1));
} else
{if(cljs.core.constant$keyword$59)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_14218.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_14217 >= 0))
{{
var G__14220 = str_14216.substring(next_idx_14217);
str_14216 = G__14220;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([node_data], 0)))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.cljs$core$IFn$_invoke$arity$2(document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14226 = data;if(G__14226)
{var bit__4028__auto__ = null;if(cljs.core.truth_((function (){var or__3397__auto__ = bit__4028__auto__;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return G__14226.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14226.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__14226);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__14226);
}
})())
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_(data))
{var seq__14227_14231 = cljs.core.seq(data);var chunk__14228_14232 = null;var count__14229_14233 = 0;var i__14230_14234 = 0;while(true){
if((i__14230_14234 < count__14229_14233))
{var child_14235 = chunk__14228_14232.cljs$core$IIndexed$_nth$arity$2(null,i__14230_14234);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_14235);
{
var G__14236 = seq__14227_14231;
var G__14237 = chunk__14228_14232;
var G__14238 = count__14229_14233;
var G__14239 = (i__14230_14234 + 1);
seq__14227_14231 = G__14236;
chunk__14228_14232 = G__14237;
count__14229_14233 = G__14238;
i__14230_14234 = G__14239;
continue;
}
} else
{var temp__4092__auto___14240 = cljs.core.seq(seq__14227_14231);if(temp__4092__auto___14240)
{var seq__14227_14241__$1 = temp__4092__auto___14240;if(cljs.core.chunked_seq_QMARK_(seq__14227_14241__$1))
{var c__4126__auto___14242 = cljs.core.chunk_first(seq__14227_14241__$1);{
var G__14243 = cljs.core.chunk_rest(seq__14227_14241__$1);
var G__14244 = c__4126__auto___14242;
var G__14245 = cljs.core.count(c__4126__auto___14242);
var G__14246 = 0;
seq__14227_14231 = G__14243;
chunk__14228_14232 = G__14244;
count__14229_14233 = G__14245;
i__14230_14234 = G__14246;
continue;
}
} else
{var child_14247 = cljs.core.first(seq__14227_14241__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_14247);
{
var G__14248 = cljs.core.next(seq__14227_14241__$1);
var G__14249 = null;
var G__14250 = 0;
var G__14251 = 0;
seq__14227_14231 = G__14248;
chunk__14228_14232 = G__14249;
count__14229_14233 = G__14250;
i__14230_14234 = G__14251;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(cljs.core.constant$keyword$59)
{return dommy.template.throw_unable_to_make_node(data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14253 = data;if(G__14253)
{var bit__4028__auto__ = null;if(cljs.core.truth_((function (){var or__3397__auto__ = bit__4028__auto__;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return G__14253.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14253.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__14253);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__14253);
}
})())
{return dommy.template._elem(data);
} else
{return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1(data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__14254){var vec__14274 = p__14254;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14274,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14274,1,null);var children = cljs.core.nthnext(vec__14274,2);var n = dommy.template.base_element(tag_name);var attrs = (((cljs.core.map_QMARK_(maybe_attrs)) && (!((function (){var G__14276 = maybe_attrs;if(G__14276)
{var bit__4028__auto__ = null;if(cljs.core.truth_((function (){var or__3397__auto__ = bit__4028__auto__;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return G__14276.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14276.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__14276);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__14276);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__14277_14293 = cljs.core.seq(attrs);var chunk__14278_14294 = null;var count__14279_14295 = 0;var i__14280_14296 = 0;while(true){
if((i__14280_14296 < count__14279_14295))
{var vec__14281_14297 = chunk__14278_14294.cljs$core$IIndexed$_nth$arity$2(null,i__14280_14296);var k_14298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14281_14297,0,null);var v_14299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14281_14297,1,null);var G__14282_14300 = k_14298;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$99,G__14282_14300))
{var seq__14283_14301 = cljs.core.seq(v_14299);var chunk__14284_14302 = null;var count__14285_14303 = 0;var i__14286_14304 = 0;while(true){
if((i__14286_14304 < count__14285_14303))
{var c_14305 = chunk__14284_14302.cljs$core$IIndexed$_nth$arity$2(null,i__14286_14304);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_14305);
{
var G__14306 = seq__14283_14301;
var G__14307 = chunk__14284_14302;
var G__14308 = count__14285_14303;
var G__14309 = (i__14286_14304 + 1);
seq__14283_14301 = G__14306;
chunk__14284_14302 = G__14307;
count__14285_14303 = G__14308;
i__14286_14304 = G__14309;
continue;
}
} else
{var temp__4092__auto___14310 = cljs.core.seq(seq__14283_14301);if(temp__4092__auto___14310)
{var seq__14283_14311__$1 = temp__4092__auto___14310;if(cljs.core.chunked_seq_QMARK_(seq__14283_14311__$1))
{var c__4126__auto___14312 = cljs.core.chunk_first(seq__14283_14311__$1);{
var G__14313 = cljs.core.chunk_rest(seq__14283_14311__$1);
var G__14314 = c__4126__auto___14312;
var G__14315 = cljs.core.count(c__4126__auto___14312);
var G__14316 = 0;
seq__14283_14301 = G__14313;
chunk__14284_14302 = G__14314;
count__14285_14303 = G__14315;
i__14286_14304 = G__14316;
continue;
}
} else
{var c_14317 = cljs.core.first(seq__14283_14311__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_14317);
{
var G__14318 = cljs.core.next(seq__14283_14311__$1);
var G__14319 = null;
var G__14320 = 0;
var G__14321 = 0;
seq__14283_14301 = G__14318;
chunk__14284_14302 = G__14319;
count__14285_14303 = G__14320;
i__14286_14304 = G__14321;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$98,G__14282_14300))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_14299);
} else
{if(cljs.core.constant$keyword$59)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_14298,v_14299);
} else
{}
}
}
{
var G__14322 = seq__14277_14293;
var G__14323 = chunk__14278_14294;
var G__14324 = count__14279_14295;
var G__14325 = (i__14280_14296 + 1);
seq__14277_14293 = G__14322;
chunk__14278_14294 = G__14323;
count__14279_14295 = G__14324;
i__14280_14296 = G__14325;
continue;
}
} else
{var temp__4092__auto___14326 = cljs.core.seq(seq__14277_14293);if(temp__4092__auto___14326)
{var seq__14277_14327__$1 = temp__4092__auto___14326;if(cljs.core.chunked_seq_QMARK_(seq__14277_14327__$1))
{var c__4126__auto___14328 = cljs.core.chunk_first(seq__14277_14327__$1);{
var G__14329 = cljs.core.chunk_rest(seq__14277_14327__$1);
var G__14330 = c__4126__auto___14328;
var G__14331 = cljs.core.count(c__4126__auto___14328);
var G__14332 = 0;
seq__14277_14293 = G__14329;
chunk__14278_14294 = G__14330;
count__14279_14295 = G__14331;
i__14280_14296 = G__14332;
continue;
}
} else
{var vec__14287_14333 = cljs.core.first(seq__14277_14327__$1);var k_14334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14287_14333,0,null);var v_14335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14287_14333,1,null);var G__14288_14336 = k_14334;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$99,G__14288_14336))
{var seq__14289_14337 = cljs.core.seq(v_14335);var chunk__14290_14338 = null;var count__14291_14339 = 0;var i__14292_14340 = 0;while(true){
if((i__14292_14340 < count__14291_14339))
{var c_14341 = chunk__14290_14338.cljs$core$IIndexed$_nth$arity$2(null,i__14292_14340);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_14341);
{
var G__14342 = seq__14289_14337;
var G__14343 = chunk__14290_14338;
var G__14344 = count__14291_14339;
var G__14345 = (i__14292_14340 + 1);
seq__14289_14337 = G__14342;
chunk__14290_14338 = G__14343;
count__14291_14339 = G__14344;
i__14292_14340 = G__14345;
continue;
}
} else
{var temp__4092__auto___14346__$1 = cljs.core.seq(seq__14289_14337);if(temp__4092__auto___14346__$1)
{var seq__14289_14347__$1 = temp__4092__auto___14346__$1;if(cljs.core.chunked_seq_QMARK_(seq__14289_14347__$1))
{var c__4126__auto___14348 = cljs.core.chunk_first(seq__14289_14347__$1);{
var G__14349 = cljs.core.chunk_rest(seq__14289_14347__$1);
var G__14350 = c__4126__auto___14348;
var G__14351 = cljs.core.count(c__4126__auto___14348);
var G__14352 = 0;
seq__14289_14337 = G__14349;
chunk__14290_14338 = G__14350;
count__14291_14339 = G__14351;
i__14292_14340 = G__14352;
continue;
}
} else
{var c_14353 = cljs.core.first(seq__14289_14347__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_14353);
{
var G__14354 = cljs.core.next(seq__14289_14347__$1);
var G__14355 = null;
var G__14356 = 0;
var G__14357 = 0;
seq__14289_14337 = G__14354;
chunk__14290_14338 = G__14355;
count__14291_14339 = G__14356;
i__14292_14340 = G__14357;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$98,G__14288_14336))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_14335);
} else
{if(cljs.core.constant$keyword$59)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_14334,v_14335);
} else
{}
}
}
{
var G__14358 = cljs.core.next(seq__14277_14327__$1);
var G__14359 = null;
var G__14360 = 0;
var G__14361 = 0;
seq__14277_14293 = G__14358;
chunk__14278_14294 = G__14359;
count__14279_14295 = G__14360;
i__14280_14296 = G__14361;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like(children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element(this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element(this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e14362){if((e14362 instanceof ReferenceError))
{var __14363 = e14362;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$59)
{throw e14362;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__14365 = data;if(G__14365)
{var bit__4028__auto__ = null;if(cljs.core.truth_((function (){var or__3397__auto__ = bit__4028__auto__;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return G__14365.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14365.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__14365);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__14365);
}
})())
{return dommy.template._elem(data);
} else
{return dommy.template.throw_unable_to_make_node(data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq(Array.prototype.slice.call(parent.childNodes));
});

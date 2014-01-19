// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj9869 = {};return obj9869;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3397__auto__ = this$;if(and__3397__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3397__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3409__auto__ = (dommy.template._elem[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (dommy.template._elem["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
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
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name(node_key);var base_idx = dommy.template.next_css_index(node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((cljs.core.constant$keyword$60)?node_str:null)));var node = (cljs.core.truth_((dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1 ? dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1(tag) : dommy.template._PLUS_svg_tags_PLUS_.call(null,tag)))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_9872 = node_str.substring(base_idx);while(true){
var next_idx_9873 = dommy.template.next_css_index(str_9872,1);var frag_9874 = (((next_idx_9873 >= 0))?str_9872.substring(0,next_idx_9873):str_9872);var G__9871_9875 = frag_9874.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__9871_9875))
{node.setAttribute("id",frag_9874.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__9871_9875))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_9874.substring(1));
} else
{if(cljs.core.constant$keyword$60)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_9874.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_9873 >= 0))
{{
var G__9876 = str_9872.substring(next_idx_9873);
str_9872 = G__9876;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__9882 = data;if(G__9882)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__9882.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9882.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__9882);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__9882);
}
})())
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_(data))
{var seq__9883_9887 = cljs.core.seq(data);var chunk__9884_9888 = null;var count__9885_9889 = 0;var i__9886_9890 = 0;while(true){
if((i__9886_9890 < count__9885_9889))
{var child_9891 = chunk__9884_9888.cljs$core$IIndexed$_nth$arity$2(null,i__9886_9890);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_9891);
{
var G__9892 = seq__9883_9887;
var G__9893 = chunk__9884_9888;
var G__9894 = count__9885_9889;
var G__9895 = (i__9886_9890 + 1);
seq__9883_9887 = G__9892;
chunk__9884_9888 = G__9893;
count__9885_9889 = G__9894;
i__9886_9890 = G__9895;
continue;
}
} else
{var temp__4092__auto___9896 = cljs.core.seq(seq__9883_9887);if(temp__4092__auto___9896)
{var seq__9883_9897__$1 = temp__4092__auto___9896;if(cljs.core.chunked_seq_QMARK_(seq__9883_9897__$1))
{var c__4151__auto___9898 = cljs.core.chunk_first(seq__9883_9897__$1);{
var G__9899 = cljs.core.chunk_rest(seq__9883_9897__$1);
var G__9900 = c__4151__auto___9898;
var G__9901 = cljs.core.count(c__4151__auto___9898);
var G__9902 = 0;
seq__9883_9887 = G__9899;
chunk__9884_9888 = G__9900;
count__9885_9889 = G__9901;
i__9886_9890 = G__9902;
continue;
}
} else
{var child_9903 = cljs.core.first(seq__9883_9897__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_9903);
{
var G__9904 = cljs.core.next(seq__9883_9897__$1);
var G__9905 = null;
var G__9906 = 0;
var G__9907 = 0;
seq__9883_9887 = G__9904;
chunk__9884_9888 = G__9905;
count__9885_9889 = G__9906;
i__9886_9890 = G__9907;
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
{if(cljs.core.constant$keyword$60)
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__9909 = data;if(G__9909)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__9909.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9909.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__9909);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__9909);
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
dommy.template.compound_element = (function compound_element(p__9910){var vec__9930 = p__9910;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9930,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9930,1,null);var children = cljs.core.nthnext(vec__9930,2);var n = dommy.template.base_element(tag_name);var attrs = (((cljs.core.map_QMARK_(maybe_attrs)) && (!((function (){var G__9932 = maybe_attrs;if(G__9932)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__9932.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9932.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__9932);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__9932);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__9933_9949 = cljs.core.seq(attrs);var chunk__9934_9950 = null;var count__9935_9951 = 0;var i__9936_9952 = 0;while(true){
if((i__9936_9952 < count__9935_9951))
{var vec__9937_9953 = chunk__9934_9950.cljs$core$IIndexed$_nth$arity$2(null,i__9936_9952);var k_9954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9937_9953,0,null);var v_9955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9937_9953,1,null);var G__9938_9956 = k_9954;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$101,G__9938_9956))
{var seq__9939_9957 = cljs.core.seq(v_9955);var chunk__9940_9958 = null;var count__9941_9959 = 0;var i__9942_9960 = 0;while(true){
if((i__9942_9960 < count__9941_9959))
{var c_9961 = chunk__9940_9958.cljs$core$IIndexed$_nth$arity$2(null,i__9942_9960);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_9961);
{
var G__9962 = seq__9939_9957;
var G__9963 = chunk__9940_9958;
var G__9964 = count__9941_9959;
var G__9965 = (i__9942_9960 + 1);
seq__9939_9957 = G__9962;
chunk__9940_9958 = G__9963;
count__9941_9959 = G__9964;
i__9942_9960 = G__9965;
continue;
}
} else
{var temp__4092__auto___9966 = cljs.core.seq(seq__9939_9957);if(temp__4092__auto___9966)
{var seq__9939_9967__$1 = temp__4092__auto___9966;if(cljs.core.chunked_seq_QMARK_(seq__9939_9967__$1))
{var c__4151__auto___9968 = cljs.core.chunk_first(seq__9939_9967__$1);{
var G__9969 = cljs.core.chunk_rest(seq__9939_9967__$1);
var G__9970 = c__4151__auto___9968;
var G__9971 = cljs.core.count(c__4151__auto___9968);
var G__9972 = 0;
seq__9939_9957 = G__9969;
chunk__9940_9958 = G__9970;
count__9941_9959 = G__9971;
i__9942_9960 = G__9972;
continue;
}
} else
{var c_9973 = cljs.core.first(seq__9939_9967__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_9973);
{
var G__9974 = cljs.core.next(seq__9939_9967__$1);
var G__9975 = null;
var G__9976 = 0;
var G__9977 = 0;
seq__9939_9957 = G__9974;
chunk__9940_9958 = G__9975;
count__9941_9959 = G__9976;
i__9942_9960 = G__9977;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$100,G__9938_9956))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_9955);
} else
{if(cljs.core.constant$keyword$60)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_9954,v_9955);
} else
{}
}
}
{
var G__9978 = seq__9933_9949;
var G__9979 = chunk__9934_9950;
var G__9980 = count__9935_9951;
var G__9981 = (i__9936_9952 + 1);
seq__9933_9949 = G__9978;
chunk__9934_9950 = G__9979;
count__9935_9951 = G__9980;
i__9936_9952 = G__9981;
continue;
}
} else
{var temp__4092__auto___9982 = cljs.core.seq(seq__9933_9949);if(temp__4092__auto___9982)
{var seq__9933_9983__$1 = temp__4092__auto___9982;if(cljs.core.chunked_seq_QMARK_(seq__9933_9983__$1))
{var c__4151__auto___9984 = cljs.core.chunk_first(seq__9933_9983__$1);{
var G__9985 = cljs.core.chunk_rest(seq__9933_9983__$1);
var G__9986 = c__4151__auto___9984;
var G__9987 = cljs.core.count(c__4151__auto___9984);
var G__9988 = 0;
seq__9933_9949 = G__9985;
chunk__9934_9950 = G__9986;
count__9935_9951 = G__9987;
i__9936_9952 = G__9988;
continue;
}
} else
{var vec__9943_9989 = cljs.core.first(seq__9933_9983__$1);var k_9990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9943_9989,0,null);var v_9991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9943_9989,1,null);var G__9944_9992 = k_9990;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$101,G__9944_9992))
{var seq__9945_9993 = cljs.core.seq(v_9991);var chunk__9946_9994 = null;var count__9947_9995 = 0;var i__9948_9996 = 0;while(true){
if((i__9948_9996 < count__9947_9995))
{var c_9997 = chunk__9946_9994.cljs$core$IIndexed$_nth$arity$2(null,i__9948_9996);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_9997);
{
var G__9998 = seq__9945_9993;
var G__9999 = chunk__9946_9994;
var G__10000 = count__9947_9995;
var G__10001 = (i__9948_9996 + 1);
seq__9945_9993 = G__9998;
chunk__9946_9994 = G__9999;
count__9947_9995 = G__10000;
i__9948_9996 = G__10001;
continue;
}
} else
{var temp__4092__auto___10002__$1 = cljs.core.seq(seq__9945_9993);if(temp__4092__auto___10002__$1)
{var seq__9945_10003__$1 = temp__4092__auto___10002__$1;if(cljs.core.chunked_seq_QMARK_(seq__9945_10003__$1))
{var c__4151__auto___10004 = cljs.core.chunk_first(seq__9945_10003__$1);{
var G__10005 = cljs.core.chunk_rest(seq__9945_10003__$1);
var G__10006 = c__4151__auto___10004;
var G__10007 = cljs.core.count(c__4151__auto___10004);
var G__10008 = 0;
seq__9945_9993 = G__10005;
chunk__9946_9994 = G__10006;
count__9947_9995 = G__10007;
i__9948_9996 = G__10008;
continue;
}
} else
{var c_10009 = cljs.core.first(seq__9945_10003__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_10009);
{
var G__10010 = cljs.core.next(seq__9945_10003__$1);
var G__10011 = null;
var G__10012 = 0;
var G__10013 = 0;
seq__9945_9993 = G__10010;
chunk__9946_9994 = G__10011;
count__9947_9995 = G__10012;
i__9948_9996 = G__10013;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$100,G__9944_9992))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_9991);
} else
{if(cljs.core.constant$keyword$60)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_9990,v_9991);
} else
{}
}
}
{
var G__10014 = cljs.core.next(seq__9933_9983__$1);
var G__10015 = null;
var G__10016 = 0;
var G__10017 = 0;
seq__9933_9949 = G__10014;
chunk__9934_9950 = G__10015;
count__9935_9951 = G__10016;
i__9936_9952 = G__10017;
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
}catch (e10018){if((e10018 instanceof ReferenceError))
{var __10019 = e10018;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$60)
{throw e10018;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__10021 = data;if(G__10021)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__10021.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10021.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__10021);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__10021);
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

// Compiled by ClojureScript 0.0-2127
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj8894 = {};return obj8894;
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
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
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
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_8897 = node_str.substring(base_idx);while(true){
var next_idx_8898 = dommy.template.next_css_index.call(null,str_8897,1);var frag_8899 = (((next_idx_8898 >= 0))?str_8897.substring(0,next_idx_8898):str_8897);var G__8896_8900 = frag_8899.charAt(0);if(cljs.core._EQ_.call(null,"#",G__8896_8900))
{node.setAttribute("id",frag_8899.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__8896_8900))
{dommy.attrs.add_class_BANG_.call(null,node,frag_8899.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_8899.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_8898 >= 0))
{{
var G__8901 = str_8897.substring(next_idx_8898);
str_8897 = G__8901;
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
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__8907 = data;if(G__8907)
{var bit__4028__auto__ = null;if(cljs.core.truth_((function (){var or__3397__auto__ = bit__4028__auto__;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return G__8907.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8907.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8907);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8907);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__8908_8912 = cljs.core.seq.call(null,data);var chunk__8909_8913 = null;var count__8910_8914 = 0;var i__8911_8915 = 0;while(true){
if((i__8911_8915 < count__8910_8914))
{var child_8916 = cljs.core._nth.call(null,chunk__8909_8913,i__8911_8915);__GT_document_fragment.call(null,result_frag,child_8916);
{
var G__8917 = seq__8908_8912;
var G__8918 = chunk__8909_8913;
var G__8919 = count__8910_8914;
var G__8920 = (i__8911_8915 + 1);
seq__8908_8912 = G__8917;
chunk__8909_8913 = G__8918;
count__8910_8914 = G__8919;
i__8911_8915 = G__8920;
continue;
}
} else
{var temp__4092__auto___8921 = cljs.core.seq.call(null,seq__8908_8912);if(temp__4092__auto___8921)
{var seq__8908_8922__$1 = temp__4092__auto___8921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8908_8922__$1))
{var c__4126__auto___8923 = cljs.core.chunk_first.call(null,seq__8908_8922__$1);{
var G__8924 = cljs.core.chunk_rest.call(null,seq__8908_8922__$1);
var G__8925 = c__4126__auto___8923;
var G__8926 = cljs.core.count.call(null,c__4126__auto___8923);
var G__8927 = 0;
seq__8908_8912 = G__8924;
chunk__8909_8913 = G__8925;
count__8910_8914 = G__8926;
i__8911_8915 = G__8927;
continue;
}
} else
{var child_8928 = cljs.core.first.call(null,seq__8908_8922__$1);__GT_document_fragment.call(null,result_frag,child_8928);
{
var G__8929 = cljs.core.next.call(null,seq__8908_8922__$1);
var G__8930 = null;
var G__8931 = 0;
var G__8932 = 0;
seq__8908_8912 = G__8929;
chunk__8909_8913 = G__8930;
count__8910_8914 = G__8931;
i__8911_8915 = G__8932;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__8934 = data;if(G__8934)
{var bit__4028__auto__ = null;if(cljs.core.truth_((function (){var or__3397__auto__ = bit__4028__auto__;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return G__8934.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8934.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8934);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8934);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__8935){var vec__8955 = p__8935;var tag_name = cljs.core.nth.call(null,vec__8955,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__8955,1,null);var children = cljs.core.nthnext.call(null,vec__8955,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__8957 = maybe_attrs;if(G__8957)
{var bit__4028__auto__ = null;if(cljs.core.truth_((function (){var or__3397__auto__ = bit__4028__auto__;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return G__8957.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8957.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8957);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8957);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__8958_8974 = cljs.core.seq.call(null,attrs);var chunk__8959_8975 = null;var count__8960_8976 = 0;var i__8961_8977 = 0;while(true){
if((i__8961_8977 < count__8960_8976))
{var vec__8962_8978 = cljs.core._nth.call(null,chunk__8959_8975,i__8961_8977);var k_8979 = cljs.core.nth.call(null,vec__8962_8978,0,null);var v_8980 = cljs.core.nth.call(null,vec__8962_8978,1,null);var G__8963_8981 = k_8979;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__8963_8981))
{var seq__8964_8982 = cljs.core.seq.call(null,v_8980);var chunk__8965_8983 = null;var count__8966_8984 = 0;var i__8967_8985 = 0;while(true){
if((i__8967_8985 < count__8966_8984))
{var c_8986 = cljs.core._nth.call(null,chunk__8965_8983,i__8967_8985);dommy.attrs.add_class_BANG_.call(null,n,c_8986);
{
var G__8987 = seq__8964_8982;
var G__8988 = chunk__8965_8983;
var G__8989 = count__8966_8984;
var G__8990 = (i__8967_8985 + 1);
seq__8964_8982 = G__8987;
chunk__8965_8983 = G__8988;
count__8966_8984 = G__8989;
i__8967_8985 = G__8990;
continue;
}
} else
{var temp__4092__auto___8991 = cljs.core.seq.call(null,seq__8964_8982);if(temp__4092__auto___8991)
{var seq__8964_8992__$1 = temp__4092__auto___8991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8964_8992__$1))
{var c__4126__auto___8993 = cljs.core.chunk_first.call(null,seq__8964_8992__$1);{
var G__8994 = cljs.core.chunk_rest.call(null,seq__8964_8992__$1);
var G__8995 = c__4126__auto___8993;
var G__8996 = cljs.core.count.call(null,c__4126__auto___8993);
var G__8997 = 0;
seq__8964_8982 = G__8994;
chunk__8965_8983 = G__8995;
count__8966_8984 = G__8996;
i__8967_8985 = G__8997;
continue;
}
} else
{var c_8998 = cljs.core.first.call(null,seq__8964_8992__$1);dommy.attrs.add_class_BANG_.call(null,n,c_8998);
{
var G__8999 = cljs.core.next.call(null,seq__8964_8992__$1);
var G__9000 = null;
var G__9001 = 0;
var G__9002 = 0;
seq__8964_8982 = G__8999;
chunk__8965_8983 = G__9000;
count__8966_8984 = G__9001;
i__8967_8985 = G__9002;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__8963_8981))
{dommy.attrs.add_class_BANG_.call(null,n,v_8980);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_8979,v_8980);
} else
{}
}
}
{
var G__9003 = seq__8958_8974;
var G__9004 = chunk__8959_8975;
var G__9005 = count__8960_8976;
var G__9006 = (i__8961_8977 + 1);
seq__8958_8974 = G__9003;
chunk__8959_8975 = G__9004;
count__8960_8976 = G__9005;
i__8961_8977 = G__9006;
continue;
}
} else
{var temp__4092__auto___9007 = cljs.core.seq.call(null,seq__8958_8974);if(temp__4092__auto___9007)
{var seq__8958_9008__$1 = temp__4092__auto___9007;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8958_9008__$1))
{var c__4126__auto___9009 = cljs.core.chunk_first.call(null,seq__8958_9008__$1);{
var G__9010 = cljs.core.chunk_rest.call(null,seq__8958_9008__$1);
var G__9011 = c__4126__auto___9009;
var G__9012 = cljs.core.count.call(null,c__4126__auto___9009);
var G__9013 = 0;
seq__8958_8974 = G__9010;
chunk__8959_8975 = G__9011;
count__8960_8976 = G__9012;
i__8961_8977 = G__9013;
continue;
}
} else
{var vec__8968_9014 = cljs.core.first.call(null,seq__8958_9008__$1);var k_9015 = cljs.core.nth.call(null,vec__8968_9014,0,null);var v_9016 = cljs.core.nth.call(null,vec__8968_9014,1,null);var G__8969_9017 = k_9015;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__8969_9017))
{var seq__8970_9018 = cljs.core.seq.call(null,v_9016);var chunk__8971_9019 = null;var count__8972_9020 = 0;var i__8973_9021 = 0;while(true){
if((i__8973_9021 < count__8972_9020))
{var c_9022 = cljs.core._nth.call(null,chunk__8971_9019,i__8973_9021);dommy.attrs.add_class_BANG_.call(null,n,c_9022);
{
var G__9023 = seq__8970_9018;
var G__9024 = chunk__8971_9019;
var G__9025 = count__8972_9020;
var G__9026 = (i__8973_9021 + 1);
seq__8970_9018 = G__9023;
chunk__8971_9019 = G__9024;
count__8972_9020 = G__9025;
i__8973_9021 = G__9026;
continue;
}
} else
{var temp__4092__auto___9027__$1 = cljs.core.seq.call(null,seq__8970_9018);if(temp__4092__auto___9027__$1)
{var seq__8970_9028__$1 = temp__4092__auto___9027__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8970_9028__$1))
{var c__4126__auto___9029 = cljs.core.chunk_first.call(null,seq__8970_9028__$1);{
var G__9030 = cljs.core.chunk_rest.call(null,seq__8970_9028__$1);
var G__9031 = c__4126__auto___9029;
var G__9032 = cljs.core.count.call(null,c__4126__auto___9029);
var G__9033 = 0;
seq__8970_9018 = G__9030;
chunk__8971_9019 = G__9031;
count__8972_9020 = G__9032;
i__8973_9021 = G__9033;
continue;
}
} else
{var c_9034 = cljs.core.first.call(null,seq__8970_9028__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9034);
{
var G__9035 = cljs.core.next.call(null,seq__8970_9028__$1);
var G__9036 = null;
var G__9037 = 0;
var G__9038 = 0;
seq__8970_9018 = G__9035;
chunk__8971_9019 = G__9036;
count__8972_9020 = G__9037;
i__8973_9021 = G__9038;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__8969_9017))
{dommy.attrs.add_class_BANG_.call(null,n,v_9016);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9015,v_9016);
} else
{}
}
}
{
var G__9039 = cljs.core.next.call(null,seq__8958_9008__$1);
var G__9040 = null;
var G__9041 = 0;
var G__9042 = 0;
seq__8958_8974 = G__9039;
chunk__8959_8975 = G__9040;
count__8960_8976 = G__9041;
i__8961_8977 = G__9042;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
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
}catch (e9043){if((e9043 instanceof ReferenceError))
{var __9044 = e9043;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9043;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__9046 = data;if(G__9046)
{var bit__4028__auto__ = null;if(cljs.core.truth_((function (){var or__3397__auto__ = bit__4028__auto__;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return G__9046.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9046.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9046);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9046);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map
// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj7676 = {};return obj7676;
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
{var str_7679 = node_str.substring(base_idx);while(true){
var next_idx_7680 = dommy.template.next_css_index.call(null,str_7679,1);var frag_7681 = (((next_idx_7680 >= 0))?str_7679.substring(0,next_idx_7680):str_7679);var G__7678_7682 = frag_7681.charAt(0);if(cljs.core._EQ_.call(null,"#",G__7678_7682))
{node.setAttribute("id",frag_7681.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__7678_7682))
{dommy.attrs.add_class_BANG_.call(null,node,frag_7681.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_7681.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_7680 >= 0))
{{
var G__7683 = str_7679.substring(next_idx_7680);
str_7679 = G__7683;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__7689 = data;if(G__7689)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__7689.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7689.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7689);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7689);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__7690_7694 = cljs.core.seq.call(null,data);var chunk__7691_7695 = null;var count__7692_7696 = 0;var i__7693_7697 = 0;while(true){
if((i__7693_7697 < count__7692_7696))
{var child_7698 = cljs.core._nth.call(null,chunk__7691_7695,i__7693_7697);__GT_document_fragment.call(null,result_frag,child_7698);
{
var G__7699 = seq__7690_7694;
var G__7700 = chunk__7691_7695;
var G__7701 = count__7692_7696;
var G__7702 = (i__7693_7697 + 1);
seq__7690_7694 = G__7699;
chunk__7691_7695 = G__7700;
count__7692_7696 = G__7701;
i__7693_7697 = G__7702;
continue;
}
} else
{var temp__4092__auto___7703 = cljs.core.seq.call(null,seq__7690_7694);if(temp__4092__auto___7703)
{var seq__7690_7704__$1 = temp__4092__auto___7703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7690_7704__$1))
{var c__4151__auto___7705 = cljs.core.chunk_first.call(null,seq__7690_7704__$1);{
var G__7706 = cljs.core.chunk_rest.call(null,seq__7690_7704__$1);
var G__7707 = c__4151__auto___7705;
var G__7708 = cljs.core.count.call(null,c__4151__auto___7705);
var G__7709 = 0;
seq__7690_7694 = G__7706;
chunk__7691_7695 = G__7707;
count__7692_7696 = G__7708;
i__7693_7697 = G__7709;
continue;
}
} else
{var child_7710 = cljs.core.first.call(null,seq__7690_7704__$1);__GT_document_fragment.call(null,result_frag,child_7710);
{
var G__7711 = cljs.core.next.call(null,seq__7690_7704__$1);
var G__7712 = null;
var G__7713 = 0;
var G__7714 = 0;
seq__7690_7694 = G__7711;
chunk__7691_7695 = G__7712;
count__7692_7696 = G__7713;
i__7693_7697 = G__7714;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__7716 = data;if(G__7716)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__7716.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7716.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7716);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7716);
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
dommy.template.compound_element = (function compound_element(p__7717){var vec__7737 = p__7717;var tag_name = cljs.core.nth.call(null,vec__7737,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__7737,1,null);var children = cljs.core.nthnext.call(null,vec__7737,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__7739 = maybe_attrs;if(G__7739)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__7739.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7739.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7739);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7739);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__7740_7756 = cljs.core.seq.call(null,attrs);var chunk__7741_7757 = null;var count__7742_7758 = 0;var i__7743_7759 = 0;while(true){
if((i__7743_7759 < count__7742_7758))
{var vec__7744_7760 = cljs.core._nth.call(null,chunk__7741_7757,i__7743_7759);var k_7761 = cljs.core.nth.call(null,vec__7744_7760,0,null);var v_7762 = cljs.core.nth.call(null,vec__7744_7760,1,null);var G__7745_7763 = k_7761;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__7745_7763))
{var seq__7746_7764 = cljs.core.seq.call(null,v_7762);var chunk__7747_7765 = null;var count__7748_7766 = 0;var i__7749_7767 = 0;while(true){
if((i__7749_7767 < count__7748_7766))
{var c_7768 = cljs.core._nth.call(null,chunk__7747_7765,i__7749_7767);dommy.attrs.add_class_BANG_.call(null,n,c_7768);
{
var G__7769 = seq__7746_7764;
var G__7770 = chunk__7747_7765;
var G__7771 = count__7748_7766;
var G__7772 = (i__7749_7767 + 1);
seq__7746_7764 = G__7769;
chunk__7747_7765 = G__7770;
count__7748_7766 = G__7771;
i__7749_7767 = G__7772;
continue;
}
} else
{var temp__4092__auto___7773 = cljs.core.seq.call(null,seq__7746_7764);if(temp__4092__auto___7773)
{var seq__7746_7774__$1 = temp__4092__auto___7773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7746_7774__$1))
{var c__4151__auto___7775 = cljs.core.chunk_first.call(null,seq__7746_7774__$1);{
var G__7776 = cljs.core.chunk_rest.call(null,seq__7746_7774__$1);
var G__7777 = c__4151__auto___7775;
var G__7778 = cljs.core.count.call(null,c__4151__auto___7775);
var G__7779 = 0;
seq__7746_7764 = G__7776;
chunk__7747_7765 = G__7777;
count__7748_7766 = G__7778;
i__7749_7767 = G__7779;
continue;
}
} else
{var c_7780 = cljs.core.first.call(null,seq__7746_7774__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7780);
{
var G__7781 = cljs.core.next.call(null,seq__7746_7774__$1);
var G__7782 = null;
var G__7783 = 0;
var G__7784 = 0;
seq__7746_7764 = G__7781;
chunk__7747_7765 = G__7782;
count__7748_7766 = G__7783;
i__7749_7767 = G__7784;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__7745_7763))
{dommy.attrs.add_class_BANG_.call(null,n,v_7762);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_7761,v_7762);
} else
{}
}
}
{
var G__7785 = seq__7740_7756;
var G__7786 = chunk__7741_7757;
var G__7787 = count__7742_7758;
var G__7788 = (i__7743_7759 + 1);
seq__7740_7756 = G__7785;
chunk__7741_7757 = G__7786;
count__7742_7758 = G__7787;
i__7743_7759 = G__7788;
continue;
}
} else
{var temp__4092__auto___7789 = cljs.core.seq.call(null,seq__7740_7756);if(temp__4092__auto___7789)
{var seq__7740_7790__$1 = temp__4092__auto___7789;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7740_7790__$1))
{var c__4151__auto___7791 = cljs.core.chunk_first.call(null,seq__7740_7790__$1);{
var G__7792 = cljs.core.chunk_rest.call(null,seq__7740_7790__$1);
var G__7793 = c__4151__auto___7791;
var G__7794 = cljs.core.count.call(null,c__4151__auto___7791);
var G__7795 = 0;
seq__7740_7756 = G__7792;
chunk__7741_7757 = G__7793;
count__7742_7758 = G__7794;
i__7743_7759 = G__7795;
continue;
}
} else
{var vec__7750_7796 = cljs.core.first.call(null,seq__7740_7790__$1);var k_7797 = cljs.core.nth.call(null,vec__7750_7796,0,null);var v_7798 = cljs.core.nth.call(null,vec__7750_7796,1,null);var G__7751_7799 = k_7797;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__7751_7799))
{var seq__7752_7800 = cljs.core.seq.call(null,v_7798);var chunk__7753_7801 = null;var count__7754_7802 = 0;var i__7755_7803 = 0;while(true){
if((i__7755_7803 < count__7754_7802))
{var c_7804 = cljs.core._nth.call(null,chunk__7753_7801,i__7755_7803);dommy.attrs.add_class_BANG_.call(null,n,c_7804);
{
var G__7805 = seq__7752_7800;
var G__7806 = chunk__7753_7801;
var G__7807 = count__7754_7802;
var G__7808 = (i__7755_7803 + 1);
seq__7752_7800 = G__7805;
chunk__7753_7801 = G__7806;
count__7754_7802 = G__7807;
i__7755_7803 = G__7808;
continue;
}
} else
{var temp__4092__auto___7809__$1 = cljs.core.seq.call(null,seq__7752_7800);if(temp__4092__auto___7809__$1)
{var seq__7752_7810__$1 = temp__4092__auto___7809__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7752_7810__$1))
{var c__4151__auto___7811 = cljs.core.chunk_first.call(null,seq__7752_7810__$1);{
var G__7812 = cljs.core.chunk_rest.call(null,seq__7752_7810__$1);
var G__7813 = c__4151__auto___7811;
var G__7814 = cljs.core.count.call(null,c__4151__auto___7811);
var G__7815 = 0;
seq__7752_7800 = G__7812;
chunk__7753_7801 = G__7813;
count__7754_7802 = G__7814;
i__7755_7803 = G__7815;
continue;
}
} else
{var c_7816 = cljs.core.first.call(null,seq__7752_7810__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7816);
{
var G__7817 = cljs.core.next.call(null,seq__7752_7810__$1);
var G__7818 = null;
var G__7819 = 0;
var G__7820 = 0;
seq__7752_7800 = G__7817;
chunk__7753_7801 = G__7818;
count__7754_7802 = G__7819;
i__7755_7803 = G__7820;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__7751_7799))
{dommy.attrs.add_class_BANG_.call(null,n,v_7798);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_7797,v_7798);
} else
{}
}
}
{
var G__7821 = cljs.core.next.call(null,seq__7740_7790__$1);
var G__7822 = null;
var G__7823 = 0;
var G__7824 = 0;
seq__7740_7756 = G__7821;
chunk__7741_7757 = G__7822;
count__7742_7758 = G__7823;
i__7743_7759 = G__7824;
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
}catch (e7825){if((e7825 instanceof ReferenceError))
{var __7826 = e7825;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7825;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__7828 = data;if(G__7828)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__7828.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7828.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7828);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7828);
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
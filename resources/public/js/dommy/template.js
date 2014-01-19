// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj6735 = {};return obj6735;
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
{var str_6738 = node_str.substring(base_idx);while(true){
var next_idx_6739 = dommy.template.next_css_index.call(null,str_6738,1);var frag_6740 = (((next_idx_6739 >= 0))?str_6738.substring(0,next_idx_6739):str_6738);var G__6737_6741 = frag_6740.charAt(0);if(cljs.core._EQ_.call(null,"#",G__6737_6741))
{node.setAttribute("id",frag_6740.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__6737_6741))
{dommy.attrs.add_class_BANG_.call(null,node,frag_6740.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_6740.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_6739 >= 0))
{{
var G__6742 = str_6738.substring(next_idx_6739);
str_6738 = G__6742;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__6748 = data;if(G__6748)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__6748.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6748.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6748);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6748);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__6749_6753 = cljs.core.seq.call(null,data);var chunk__6750_6754 = null;var count__6751_6755 = 0;var i__6752_6756 = 0;while(true){
if((i__6752_6756 < count__6751_6755))
{var child_6757 = cljs.core._nth.call(null,chunk__6750_6754,i__6752_6756);__GT_document_fragment.call(null,result_frag,child_6757);
{
var G__6758 = seq__6749_6753;
var G__6759 = chunk__6750_6754;
var G__6760 = count__6751_6755;
var G__6761 = (i__6752_6756 + 1);
seq__6749_6753 = G__6758;
chunk__6750_6754 = G__6759;
count__6751_6755 = G__6760;
i__6752_6756 = G__6761;
continue;
}
} else
{var temp__4092__auto___6762 = cljs.core.seq.call(null,seq__6749_6753);if(temp__4092__auto___6762)
{var seq__6749_6763__$1 = temp__4092__auto___6762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6749_6763__$1))
{var c__4151__auto___6764 = cljs.core.chunk_first.call(null,seq__6749_6763__$1);{
var G__6765 = cljs.core.chunk_rest.call(null,seq__6749_6763__$1);
var G__6766 = c__4151__auto___6764;
var G__6767 = cljs.core.count.call(null,c__4151__auto___6764);
var G__6768 = 0;
seq__6749_6753 = G__6765;
chunk__6750_6754 = G__6766;
count__6751_6755 = G__6767;
i__6752_6756 = G__6768;
continue;
}
} else
{var child_6769 = cljs.core.first.call(null,seq__6749_6763__$1);__GT_document_fragment.call(null,result_frag,child_6769);
{
var G__6770 = cljs.core.next.call(null,seq__6749_6763__$1);
var G__6771 = null;
var G__6772 = 0;
var G__6773 = 0;
seq__6749_6753 = G__6770;
chunk__6750_6754 = G__6771;
count__6751_6755 = G__6772;
i__6752_6756 = G__6773;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__6775 = data;if(G__6775)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__6775.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6775.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6775);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6775);
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
dommy.template.compound_element = (function compound_element(p__6776){var vec__6796 = p__6776;var tag_name = cljs.core.nth.call(null,vec__6796,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__6796,1,null);var children = cljs.core.nthnext.call(null,vec__6796,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__6798 = maybe_attrs;if(G__6798)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__6798.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6798.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6798);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6798);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__6799_6815 = cljs.core.seq.call(null,attrs);var chunk__6800_6816 = null;var count__6801_6817 = 0;var i__6802_6818 = 0;while(true){
if((i__6802_6818 < count__6801_6817))
{var vec__6803_6819 = cljs.core._nth.call(null,chunk__6800_6816,i__6802_6818);var k_6820 = cljs.core.nth.call(null,vec__6803_6819,0,null);var v_6821 = cljs.core.nth.call(null,vec__6803_6819,1,null);var G__6804_6822 = k_6820;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6804_6822))
{var seq__6805_6823 = cljs.core.seq.call(null,v_6821);var chunk__6806_6824 = null;var count__6807_6825 = 0;var i__6808_6826 = 0;while(true){
if((i__6808_6826 < count__6807_6825))
{var c_6827 = cljs.core._nth.call(null,chunk__6806_6824,i__6808_6826);dommy.attrs.add_class_BANG_.call(null,n,c_6827);
{
var G__6828 = seq__6805_6823;
var G__6829 = chunk__6806_6824;
var G__6830 = count__6807_6825;
var G__6831 = (i__6808_6826 + 1);
seq__6805_6823 = G__6828;
chunk__6806_6824 = G__6829;
count__6807_6825 = G__6830;
i__6808_6826 = G__6831;
continue;
}
} else
{var temp__4092__auto___6832 = cljs.core.seq.call(null,seq__6805_6823);if(temp__4092__auto___6832)
{var seq__6805_6833__$1 = temp__4092__auto___6832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6805_6833__$1))
{var c__4151__auto___6834 = cljs.core.chunk_first.call(null,seq__6805_6833__$1);{
var G__6835 = cljs.core.chunk_rest.call(null,seq__6805_6833__$1);
var G__6836 = c__4151__auto___6834;
var G__6837 = cljs.core.count.call(null,c__4151__auto___6834);
var G__6838 = 0;
seq__6805_6823 = G__6835;
chunk__6806_6824 = G__6836;
count__6807_6825 = G__6837;
i__6808_6826 = G__6838;
continue;
}
} else
{var c_6839 = cljs.core.first.call(null,seq__6805_6833__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6839);
{
var G__6840 = cljs.core.next.call(null,seq__6805_6833__$1);
var G__6841 = null;
var G__6842 = 0;
var G__6843 = 0;
seq__6805_6823 = G__6840;
chunk__6806_6824 = G__6841;
count__6807_6825 = G__6842;
i__6808_6826 = G__6843;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6804_6822))
{dommy.attrs.add_class_BANG_.call(null,n,v_6821);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6820,v_6821);
} else
{}
}
}
{
var G__6844 = seq__6799_6815;
var G__6845 = chunk__6800_6816;
var G__6846 = count__6801_6817;
var G__6847 = (i__6802_6818 + 1);
seq__6799_6815 = G__6844;
chunk__6800_6816 = G__6845;
count__6801_6817 = G__6846;
i__6802_6818 = G__6847;
continue;
}
} else
{var temp__4092__auto___6848 = cljs.core.seq.call(null,seq__6799_6815);if(temp__4092__auto___6848)
{var seq__6799_6849__$1 = temp__4092__auto___6848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6799_6849__$1))
{var c__4151__auto___6850 = cljs.core.chunk_first.call(null,seq__6799_6849__$1);{
var G__6851 = cljs.core.chunk_rest.call(null,seq__6799_6849__$1);
var G__6852 = c__4151__auto___6850;
var G__6853 = cljs.core.count.call(null,c__4151__auto___6850);
var G__6854 = 0;
seq__6799_6815 = G__6851;
chunk__6800_6816 = G__6852;
count__6801_6817 = G__6853;
i__6802_6818 = G__6854;
continue;
}
} else
{var vec__6809_6855 = cljs.core.first.call(null,seq__6799_6849__$1);var k_6856 = cljs.core.nth.call(null,vec__6809_6855,0,null);var v_6857 = cljs.core.nth.call(null,vec__6809_6855,1,null);var G__6810_6858 = k_6856;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6810_6858))
{var seq__6811_6859 = cljs.core.seq.call(null,v_6857);var chunk__6812_6860 = null;var count__6813_6861 = 0;var i__6814_6862 = 0;while(true){
if((i__6814_6862 < count__6813_6861))
{var c_6863 = cljs.core._nth.call(null,chunk__6812_6860,i__6814_6862);dommy.attrs.add_class_BANG_.call(null,n,c_6863);
{
var G__6864 = seq__6811_6859;
var G__6865 = chunk__6812_6860;
var G__6866 = count__6813_6861;
var G__6867 = (i__6814_6862 + 1);
seq__6811_6859 = G__6864;
chunk__6812_6860 = G__6865;
count__6813_6861 = G__6866;
i__6814_6862 = G__6867;
continue;
}
} else
{var temp__4092__auto___6868__$1 = cljs.core.seq.call(null,seq__6811_6859);if(temp__4092__auto___6868__$1)
{var seq__6811_6869__$1 = temp__4092__auto___6868__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6811_6869__$1))
{var c__4151__auto___6870 = cljs.core.chunk_first.call(null,seq__6811_6869__$1);{
var G__6871 = cljs.core.chunk_rest.call(null,seq__6811_6869__$1);
var G__6872 = c__4151__auto___6870;
var G__6873 = cljs.core.count.call(null,c__4151__auto___6870);
var G__6874 = 0;
seq__6811_6859 = G__6871;
chunk__6812_6860 = G__6872;
count__6813_6861 = G__6873;
i__6814_6862 = G__6874;
continue;
}
} else
{var c_6875 = cljs.core.first.call(null,seq__6811_6869__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6875);
{
var G__6876 = cljs.core.next.call(null,seq__6811_6869__$1);
var G__6877 = null;
var G__6878 = 0;
var G__6879 = 0;
seq__6811_6859 = G__6876;
chunk__6812_6860 = G__6877;
count__6813_6861 = G__6878;
i__6814_6862 = G__6879;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6810_6858))
{dommy.attrs.add_class_BANG_.call(null,n,v_6857);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6856,v_6857);
} else
{}
}
}
{
var G__6880 = cljs.core.next.call(null,seq__6799_6849__$1);
var G__6881 = null;
var G__6882 = 0;
var G__6883 = 0;
seq__6799_6815 = G__6880;
chunk__6800_6816 = G__6881;
count__6801_6817 = G__6882;
i__6802_6818 = G__6883;
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
}catch (e6884){if((e6884 instanceof ReferenceError))
{var __6885 = e6884;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6884;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__6887 = data;if(G__6887)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__6887.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6887.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6887);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6887);
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
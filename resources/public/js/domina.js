// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_8113 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_8114 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_8115 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_8114,table_section_wrapper_8114,opt_wrapper_8113,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_8115,table_section_wrapper_8114,cell_wrapper_8115,opt_wrapper_8113,table_section_wrapper_8114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_8114]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3397__auto__ = div.firstChild;if(cljs.core.truth_(and__3397__auto__))
{return div.firstChild.childNodes;
} else
{return and__3397__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__8120 = cljs.core.seq.call(null,tbody);var chunk__8121 = null;var count__8122 = 0;var i__8123 = 0;while(true){
if((i__8123 < count__8122))
{var child = cljs.core._nth.call(null,chunk__8121,i__8123);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__8124 = seq__8120;
var G__8125 = chunk__8121;
var G__8126 = count__8122;
var G__8127 = (i__8123 + 1);
seq__8120 = G__8124;
chunk__8121 = G__8125;
count__8122 = G__8126;
i__8123 = G__8127;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8120);if(temp__4092__auto__)
{var seq__8120__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8120__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__8120__$1);{
var G__8128 = cljs.core.chunk_rest.call(null,seq__8120__$1);
var G__8129 = c__4151__auto__;
var G__8130 = cljs.core.count.call(null,c__4151__auto__);
var G__8131 = 0;
seq__8120 = G__8128;
chunk__8121 = G__8129;
count__8122 = G__8130;
i__8123 = G__8131;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__8120__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__8132 = cljs.core.next.call(null,seq__8120__$1);
var G__8133 = null;
var G__8134 = 0;
var G__8135 = 0;
seq__8120 = G__8132;
chunk__8121 = G__8133;
count__8122 = G__8134;
i__8123 = G__8135;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__8137 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__8137,0,null);var start_wrap = cljs.core.nth.call(null,vec__8137,1,null);var end_wrap = cljs.core.nth.call(null,vec__8137,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__8138 = wrapper.lastChild;
var G__8139 = (level - 1);
wrapper = G__8138;
level = G__8139;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3397__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3397__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3397__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj8141 = {};return obj8141;
})();
domina.nodes = (function nodes(content){if((function (){var and__3397__auto__ = content;if(and__3397__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3397__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4030__auto__ = (((content == null))?null:content);return (function (){var or__3409__auto__ = (domina.nodes[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (domina.nodes["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3397__auto__ = nodeseq;if(and__3397__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3397__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4030__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3409__auto__ = (domina.single_node[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (domina.single_node["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3397__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3397__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3397__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__8142){
var mesg = cljs.core.seq(arglist__8142);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__8143){
var mesg = cljs.core.seq(arglist__8143);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__8144){
var contents = cljs.core.seq(arglist__8144);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__8145_SHARP_){return p1__8145_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__8146_SHARP_,p2__8147_SHARP_){return goog.dom.insertChildAt(p1__8146_SHARP_,p2__8147_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__8149_SHARP_,p2__8148_SHARP_){return goog.dom.insertSiblingBefore(p2__8148_SHARP_,p1__8149_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__8151_SHARP_,p2__8150_SHARP_){return goog.dom.insertSiblingAfter(p2__8150_SHARP_,p1__8151_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__8153_SHARP_,p2__8152_SHARP_){return goog.dom.replaceNode(p2__8152_SHARP_,p1__8153_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__8158_8162 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8159_8163 = null;var count__8160_8164 = 0;var i__8161_8165 = 0;while(true){
if((i__8161_8165 < count__8160_8164))
{var n_8166 = cljs.core._nth.call(null,chunk__8159_8163,i__8161_8165);goog.style.setStyle(n_8166,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8167 = seq__8158_8162;
var G__8168 = chunk__8159_8163;
var G__8169 = count__8160_8164;
var G__8170 = (i__8161_8165 + 1);
seq__8158_8162 = G__8167;
chunk__8159_8163 = G__8168;
count__8160_8164 = G__8169;
i__8161_8165 = G__8170;
continue;
}
} else
{var temp__4092__auto___8171 = cljs.core.seq.call(null,seq__8158_8162);if(temp__4092__auto___8171)
{var seq__8158_8172__$1 = temp__4092__auto___8171;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8158_8172__$1))
{var c__4151__auto___8173 = cljs.core.chunk_first.call(null,seq__8158_8172__$1);{
var G__8174 = cljs.core.chunk_rest.call(null,seq__8158_8172__$1);
var G__8175 = c__4151__auto___8173;
var G__8176 = cljs.core.count.call(null,c__4151__auto___8173);
var G__8177 = 0;
seq__8158_8162 = G__8174;
chunk__8159_8163 = G__8175;
count__8160_8164 = G__8176;
i__8161_8165 = G__8177;
continue;
}
} else
{var n_8178 = cljs.core.first.call(null,seq__8158_8172__$1);goog.style.setStyle(n_8178,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8179 = cljs.core.next.call(null,seq__8158_8172__$1);
var G__8180 = null;
var G__8181 = 0;
var G__8182 = 0;
seq__8158_8162 = G__8179;
chunk__8159_8163 = G__8180;
count__8160_8164 = G__8181;
i__8161_8165 = G__8182;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8183){
var content = cljs.core.first(arglist__8183);
arglist__8183 = cljs.core.next(arglist__8183);
var name = cljs.core.first(arglist__8183);
var value = cljs.core.rest(arglist__8183);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__8188_8192 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8189_8193 = null;var count__8190_8194 = 0;var i__8191_8195 = 0;while(true){
if((i__8191_8195 < count__8190_8194))
{var n_8196 = cljs.core._nth.call(null,chunk__8189_8193,i__8191_8195);n_8196.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8197 = seq__8188_8192;
var G__8198 = chunk__8189_8193;
var G__8199 = count__8190_8194;
var G__8200 = (i__8191_8195 + 1);
seq__8188_8192 = G__8197;
chunk__8189_8193 = G__8198;
count__8190_8194 = G__8199;
i__8191_8195 = G__8200;
continue;
}
} else
{var temp__4092__auto___8201 = cljs.core.seq.call(null,seq__8188_8192);if(temp__4092__auto___8201)
{var seq__8188_8202__$1 = temp__4092__auto___8201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8188_8202__$1))
{var c__4151__auto___8203 = cljs.core.chunk_first.call(null,seq__8188_8202__$1);{
var G__8204 = cljs.core.chunk_rest.call(null,seq__8188_8202__$1);
var G__8205 = c__4151__auto___8203;
var G__8206 = cljs.core.count.call(null,c__4151__auto___8203);
var G__8207 = 0;
seq__8188_8192 = G__8204;
chunk__8189_8193 = G__8205;
count__8190_8194 = G__8206;
i__8191_8195 = G__8207;
continue;
}
} else
{var n_8208 = cljs.core.first.call(null,seq__8188_8202__$1);n_8208.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8209 = cljs.core.next.call(null,seq__8188_8202__$1);
var G__8210 = null;
var G__8211 = 0;
var G__8212 = 0;
seq__8188_8192 = G__8209;
chunk__8189_8193 = G__8210;
count__8190_8194 = G__8211;
i__8191_8195 = G__8212;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__8213){
var content = cljs.core.first(arglist__8213);
arglist__8213 = cljs.core.next(arglist__8213);
var name = cljs.core.first(arglist__8213);
var value = cljs.core.rest(arglist__8213);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__8218_8222 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8219_8223 = null;var count__8220_8224 = 0;var i__8221_8225 = 0;while(true){
if((i__8221_8225 < count__8220_8224))
{var n_8226 = cljs.core._nth.call(null,chunk__8219_8223,i__8221_8225);n_8226.removeAttribute(cljs.core.name.call(null,name));
{
var G__8227 = seq__8218_8222;
var G__8228 = chunk__8219_8223;
var G__8229 = count__8220_8224;
var G__8230 = (i__8221_8225 + 1);
seq__8218_8222 = G__8227;
chunk__8219_8223 = G__8228;
count__8220_8224 = G__8229;
i__8221_8225 = G__8230;
continue;
}
} else
{var temp__4092__auto___8231 = cljs.core.seq.call(null,seq__8218_8222);if(temp__4092__auto___8231)
{var seq__8218_8232__$1 = temp__4092__auto___8231;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8218_8232__$1))
{var c__4151__auto___8233 = cljs.core.chunk_first.call(null,seq__8218_8232__$1);{
var G__8234 = cljs.core.chunk_rest.call(null,seq__8218_8232__$1);
var G__8235 = c__4151__auto___8233;
var G__8236 = cljs.core.count.call(null,c__4151__auto___8233);
var G__8237 = 0;
seq__8218_8222 = G__8234;
chunk__8219_8223 = G__8235;
count__8220_8224 = G__8236;
i__8221_8225 = G__8237;
continue;
}
} else
{var n_8238 = cljs.core.first.call(null,seq__8218_8232__$1);n_8238.removeAttribute(cljs.core.name.call(null,name));
{
var G__8239 = cljs.core.next.call(null,seq__8218_8232__$1);
var G__8240 = null;
var G__8241 = 0;
var G__8242 = 0;
seq__8218_8222 = G__8239;
chunk__8219_8223 = G__8240;
count__8220_8224 = G__8241;
i__8221_8225 = G__8242;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__8244 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__8244,0,null);var v = cljs.core.nth.call(null,vec__8244,1,null);if(cljs.core.truth_((function (){var and__3397__auto__ = k;if(cljs.core.truth_(and__3397__auto__))
{return v;
} else
{return and__3397__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__8245_SHARP_){var attr = attrs__$1.item(p1__8245_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__8252_8258 = cljs.core.seq.call(null,styles);var chunk__8253_8259 = null;var count__8254_8260 = 0;var i__8255_8261 = 0;while(true){
if((i__8255_8261 < count__8254_8260))
{var vec__8256_8262 = cljs.core._nth.call(null,chunk__8253_8259,i__8255_8261);var name_8263 = cljs.core.nth.call(null,vec__8256_8262,0,null);var value_8264 = cljs.core.nth.call(null,vec__8256_8262,1,null);domina.set_style_BANG_.call(null,content,name_8263,value_8264);
{
var G__8265 = seq__8252_8258;
var G__8266 = chunk__8253_8259;
var G__8267 = count__8254_8260;
var G__8268 = (i__8255_8261 + 1);
seq__8252_8258 = G__8265;
chunk__8253_8259 = G__8266;
count__8254_8260 = G__8267;
i__8255_8261 = G__8268;
continue;
}
} else
{var temp__4092__auto___8269 = cljs.core.seq.call(null,seq__8252_8258);if(temp__4092__auto___8269)
{var seq__8252_8270__$1 = temp__4092__auto___8269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8252_8270__$1))
{var c__4151__auto___8271 = cljs.core.chunk_first.call(null,seq__8252_8270__$1);{
var G__8272 = cljs.core.chunk_rest.call(null,seq__8252_8270__$1);
var G__8273 = c__4151__auto___8271;
var G__8274 = cljs.core.count.call(null,c__4151__auto___8271);
var G__8275 = 0;
seq__8252_8258 = G__8272;
chunk__8253_8259 = G__8273;
count__8254_8260 = G__8274;
i__8255_8261 = G__8275;
continue;
}
} else
{var vec__8257_8276 = cljs.core.first.call(null,seq__8252_8270__$1);var name_8277 = cljs.core.nth.call(null,vec__8257_8276,0,null);var value_8278 = cljs.core.nth.call(null,vec__8257_8276,1,null);domina.set_style_BANG_.call(null,content,name_8277,value_8278);
{
var G__8279 = cljs.core.next.call(null,seq__8252_8270__$1);
var G__8280 = null;
var G__8281 = 0;
var G__8282 = 0;
seq__8252_8258 = G__8279;
chunk__8253_8259 = G__8280;
count__8254_8260 = G__8281;
i__8255_8261 = G__8282;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__8289_8295 = cljs.core.seq.call(null,attrs);var chunk__8290_8296 = null;var count__8291_8297 = 0;var i__8292_8298 = 0;while(true){
if((i__8292_8298 < count__8291_8297))
{var vec__8293_8299 = cljs.core._nth.call(null,chunk__8290_8296,i__8292_8298);var name_8300 = cljs.core.nth.call(null,vec__8293_8299,0,null);var value_8301 = cljs.core.nth.call(null,vec__8293_8299,1,null);domina.set_attr_BANG_.call(null,content,name_8300,value_8301);
{
var G__8302 = seq__8289_8295;
var G__8303 = chunk__8290_8296;
var G__8304 = count__8291_8297;
var G__8305 = (i__8292_8298 + 1);
seq__8289_8295 = G__8302;
chunk__8290_8296 = G__8303;
count__8291_8297 = G__8304;
i__8292_8298 = G__8305;
continue;
}
} else
{var temp__4092__auto___8306 = cljs.core.seq.call(null,seq__8289_8295);if(temp__4092__auto___8306)
{var seq__8289_8307__$1 = temp__4092__auto___8306;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8289_8307__$1))
{var c__4151__auto___8308 = cljs.core.chunk_first.call(null,seq__8289_8307__$1);{
var G__8309 = cljs.core.chunk_rest.call(null,seq__8289_8307__$1);
var G__8310 = c__4151__auto___8308;
var G__8311 = cljs.core.count.call(null,c__4151__auto___8308);
var G__8312 = 0;
seq__8289_8295 = G__8309;
chunk__8290_8296 = G__8310;
count__8291_8297 = G__8311;
i__8292_8298 = G__8312;
continue;
}
} else
{var vec__8294_8313 = cljs.core.first.call(null,seq__8289_8307__$1);var name_8314 = cljs.core.nth.call(null,vec__8294_8313,0,null);var value_8315 = cljs.core.nth.call(null,vec__8294_8313,1,null);domina.set_attr_BANG_.call(null,content,name_8314,value_8315);
{
var G__8316 = cljs.core.next.call(null,seq__8289_8307__$1);
var G__8317 = null;
var G__8318 = 0;
var G__8319 = 0;
seq__8289_8295 = G__8316;
chunk__8290_8296 = G__8317;
count__8291_8297 = G__8318;
i__8292_8298 = G__8319;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__8324_8328 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8325_8329 = null;var count__8326_8330 = 0;var i__8327_8331 = 0;while(true){
if((i__8327_8331 < count__8326_8330))
{var node_8332 = cljs.core._nth.call(null,chunk__8325_8329,i__8327_8331);goog.dom.classes.add(node_8332,class$);
{
var G__8333 = seq__8324_8328;
var G__8334 = chunk__8325_8329;
var G__8335 = count__8326_8330;
var G__8336 = (i__8327_8331 + 1);
seq__8324_8328 = G__8333;
chunk__8325_8329 = G__8334;
count__8326_8330 = G__8335;
i__8327_8331 = G__8336;
continue;
}
} else
{var temp__4092__auto___8337 = cljs.core.seq.call(null,seq__8324_8328);if(temp__4092__auto___8337)
{var seq__8324_8338__$1 = temp__4092__auto___8337;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8324_8338__$1))
{var c__4151__auto___8339 = cljs.core.chunk_first.call(null,seq__8324_8338__$1);{
var G__8340 = cljs.core.chunk_rest.call(null,seq__8324_8338__$1);
var G__8341 = c__4151__auto___8339;
var G__8342 = cljs.core.count.call(null,c__4151__auto___8339);
var G__8343 = 0;
seq__8324_8328 = G__8340;
chunk__8325_8329 = G__8341;
count__8326_8330 = G__8342;
i__8327_8331 = G__8343;
continue;
}
} else
{var node_8344 = cljs.core.first.call(null,seq__8324_8338__$1);goog.dom.classes.add(node_8344,class$);
{
var G__8345 = cljs.core.next.call(null,seq__8324_8338__$1);
var G__8346 = null;
var G__8347 = 0;
var G__8348 = 0;
seq__8324_8328 = G__8345;
chunk__8325_8329 = G__8346;
count__8326_8330 = G__8347;
i__8327_8331 = G__8348;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__8353_8357 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8354_8358 = null;var count__8355_8359 = 0;var i__8356_8360 = 0;while(true){
if((i__8356_8360 < count__8355_8359))
{var node_8361 = cljs.core._nth.call(null,chunk__8354_8358,i__8356_8360);goog.dom.classes.remove(node_8361,class$);
{
var G__8362 = seq__8353_8357;
var G__8363 = chunk__8354_8358;
var G__8364 = count__8355_8359;
var G__8365 = (i__8356_8360 + 1);
seq__8353_8357 = G__8362;
chunk__8354_8358 = G__8363;
count__8355_8359 = G__8364;
i__8356_8360 = G__8365;
continue;
}
} else
{var temp__4092__auto___8366 = cljs.core.seq.call(null,seq__8353_8357);if(temp__4092__auto___8366)
{var seq__8353_8367__$1 = temp__4092__auto___8366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8353_8367__$1))
{var c__4151__auto___8368 = cljs.core.chunk_first.call(null,seq__8353_8367__$1);{
var G__8369 = cljs.core.chunk_rest.call(null,seq__8353_8367__$1);
var G__8370 = c__4151__auto___8368;
var G__8371 = cljs.core.count.call(null,c__4151__auto___8368);
var G__8372 = 0;
seq__8353_8357 = G__8369;
chunk__8354_8358 = G__8370;
count__8355_8359 = G__8371;
i__8356_8360 = G__8372;
continue;
}
} else
{var node_8373 = cljs.core.first.call(null,seq__8353_8367__$1);goog.dom.classes.remove(node_8373,class$);
{
var G__8374 = cljs.core.next.call(null,seq__8353_8367__$1);
var G__8375 = null;
var G__8376 = 0;
var G__8377 = 0;
seq__8353_8357 = G__8374;
chunk__8354_8358 = G__8375;
count__8355_8359 = G__8376;
i__8356_8360 = G__8377;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__8382_8386 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8383_8387 = null;var count__8384_8388 = 0;var i__8385_8389 = 0;while(true){
if((i__8385_8389 < count__8384_8388))
{var node_8390 = cljs.core._nth.call(null,chunk__8383_8387,i__8385_8389);goog.dom.classes.toggle(node_8390,class$);
{
var G__8391 = seq__8382_8386;
var G__8392 = chunk__8383_8387;
var G__8393 = count__8384_8388;
var G__8394 = (i__8385_8389 + 1);
seq__8382_8386 = G__8391;
chunk__8383_8387 = G__8392;
count__8384_8388 = G__8393;
i__8385_8389 = G__8394;
continue;
}
} else
{var temp__4092__auto___8395 = cljs.core.seq.call(null,seq__8382_8386);if(temp__4092__auto___8395)
{var seq__8382_8396__$1 = temp__4092__auto___8395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8382_8396__$1))
{var c__4151__auto___8397 = cljs.core.chunk_first.call(null,seq__8382_8396__$1);{
var G__8398 = cljs.core.chunk_rest.call(null,seq__8382_8396__$1);
var G__8399 = c__4151__auto___8397;
var G__8400 = cljs.core.count.call(null,c__4151__auto___8397);
var G__8401 = 0;
seq__8382_8386 = G__8398;
chunk__8383_8387 = G__8399;
count__8384_8388 = G__8400;
i__8385_8389 = G__8401;
continue;
}
} else
{var node_8402 = cljs.core.first.call(null,seq__8382_8396__$1);goog.dom.classes.toggle(node_8402,class$);
{
var G__8403 = cljs.core.next.call(null,seq__8382_8396__$1);
var G__8404 = null;
var G__8405 = 0;
var G__8406 = 0;
seq__8382_8386 = G__8403;
chunk__8383_8387 = G__8404;
count__8384_8388 = G__8405;
i__8385_8389 = G__8406;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_8415__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__8411_8416 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8412_8417 = null;var count__8413_8418 = 0;var i__8414_8419 = 0;while(true){
if((i__8414_8419 < count__8413_8418))
{var node_8420 = cljs.core._nth.call(null,chunk__8412_8417,i__8414_8419);goog.dom.classes.set(node_8420,classes_8415__$1);
{
var G__8421 = seq__8411_8416;
var G__8422 = chunk__8412_8417;
var G__8423 = count__8413_8418;
var G__8424 = (i__8414_8419 + 1);
seq__8411_8416 = G__8421;
chunk__8412_8417 = G__8422;
count__8413_8418 = G__8423;
i__8414_8419 = G__8424;
continue;
}
} else
{var temp__4092__auto___8425 = cljs.core.seq.call(null,seq__8411_8416);if(temp__4092__auto___8425)
{var seq__8411_8426__$1 = temp__4092__auto___8425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8411_8426__$1))
{var c__4151__auto___8427 = cljs.core.chunk_first.call(null,seq__8411_8426__$1);{
var G__8428 = cljs.core.chunk_rest.call(null,seq__8411_8426__$1);
var G__8429 = c__4151__auto___8427;
var G__8430 = cljs.core.count.call(null,c__4151__auto___8427);
var G__8431 = 0;
seq__8411_8416 = G__8428;
chunk__8412_8417 = G__8429;
count__8413_8418 = G__8430;
i__8414_8419 = G__8431;
continue;
}
} else
{var node_8432 = cljs.core.first.call(null,seq__8411_8426__$1);goog.dom.classes.set(node_8432,classes_8415__$1);
{
var G__8433 = cljs.core.next.call(null,seq__8411_8426__$1);
var G__8434 = null;
var G__8435 = 0;
var G__8436 = 0;
seq__8411_8416 = G__8433;
chunk__8412_8417 = G__8434;
count__8413_8418 = G__8435;
i__8414_8419 = G__8436;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__8441_8445 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8442_8446 = null;var count__8443_8447 = 0;var i__8444_8448 = 0;while(true){
if((i__8444_8448 < count__8443_8447))
{var node_8449 = cljs.core._nth.call(null,chunk__8442_8446,i__8444_8448);goog.dom.setTextContent(node_8449,value);
{
var G__8450 = seq__8441_8445;
var G__8451 = chunk__8442_8446;
var G__8452 = count__8443_8447;
var G__8453 = (i__8444_8448 + 1);
seq__8441_8445 = G__8450;
chunk__8442_8446 = G__8451;
count__8443_8447 = G__8452;
i__8444_8448 = G__8453;
continue;
}
} else
{var temp__4092__auto___8454 = cljs.core.seq.call(null,seq__8441_8445);if(temp__4092__auto___8454)
{var seq__8441_8455__$1 = temp__4092__auto___8454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8441_8455__$1))
{var c__4151__auto___8456 = cljs.core.chunk_first.call(null,seq__8441_8455__$1);{
var G__8457 = cljs.core.chunk_rest.call(null,seq__8441_8455__$1);
var G__8458 = c__4151__auto___8456;
var G__8459 = cljs.core.count.call(null,c__4151__auto___8456);
var G__8460 = 0;
seq__8441_8445 = G__8457;
chunk__8442_8446 = G__8458;
count__8443_8447 = G__8459;
i__8444_8448 = G__8460;
continue;
}
} else
{var node_8461 = cljs.core.first.call(null,seq__8441_8455__$1);goog.dom.setTextContent(node_8461,value);
{
var G__8462 = cljs.core.next.call(null,seq__8441_8455__$1);
var G__8463 = null;
var G__8464 = 0;
var G__8465 = 0;
seq__8441_8445 = G__8462;
chunk__8442_8446 = G__8463;
count__8443_8447 = G__8464;
i__8444_8448 = G__8465;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__8470_8474 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8471_8475 = null;var count__8472_8476 = 0;var i__8473_8477 = 0;while(true){
if((i__8473_8477 < count__8472_8476))
{var node_8478 = cljs.core._nth.call(null,chunk__8471_8475,i__8473_8477);goog.dom.forms.setValue(node_8478,value);
{
var G__8479 = seq__8470_8474;
var G__8480 = chunk__8471_8475;
var G__8481 = count__8472_8476;
var G__8482 = (i__8473_8477 + 1);
seq__8470_8474 = G__8479;
chunk__8471_8475 = G__8480;
count__8472_8476 = G__8481;
i__8473_8477 = G__8482;
continue;
}
} else
{var temp__4092__auto___8483 = cljs.core.seq.call(null,seq__8470_8474);if(temp__4092__auto___8483)
{var seq__8470_8484__$1 = temp__4092__auto___8483;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8470_8484__$1))
{var c__4151__auto___8485 = cljs.core.chunk_first.call(null,seq__8470_8484__$1);{
var G__8486 = cljs.core.chunk_rest.call(null,seq__8470_8484__$1);
var G__8487 = c__4151__auto___8485;
var G__8488 = cljs.core.count.call(null,c__4151__auto___8485);
var G__8489 = 0;
seq__8470_8474 = G__8486;
chunk__8471_8475 = G__8487;
count__8472_8476 = G__8488;
i__8473_8477 = G__8489;
continue;
}
} else
{var node_8490 = cljs.core.first.call(null,seq__8470_8484__$1);goog.dom.forms.setValue(node_8490,value);
{
var G__8491 = cljs.core.next.call(null,seq__8470_8484__$1);
var G__8492 = null;
var G__8493 = 0;
var G__8494 = 0;
seq__8470_8474 = G__8491;
chunk__8471_8475 = G__8492;
count__8472_8476 = G__8493;
i__8473_8477 = G__8494;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3397__auto__ = allows_inner_html_QMARK_;if(and__3397__auto__)
{var and__3397__auto____$1 = (function (){var or__3409__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3397__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3397__auto____$1;
}
} else
{return and__3397__auto__;
}
})()))
{var value_8505 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__8501_8506 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8502_8507 = null;var count__8503_8508 = 0;var i__8504_8509 = 0;while(true){
if((i__8504_8509 < count__8503_8508))
{var node_8510 = cljs.core._nth.call(null,chunk__8502_8507,i__8504_8509);node_8510.innerHTML = value_8505;
{
var G__8511 = seq__8501_8506;
var G__8512 = chunk__8502_8507;
var G__8513 = count__8503_8508;
var G__8514 = (i__8504_8509 + 1);
seq__8501_8506 = G__8511;
chunk__8502_8507 = G__8512;
count__8503_8508 = G__8513;
i__8504_8509 = G__8514;
continue;
}
} else
{var temp__4092__auto___8515 = cljs.core.seq.call(null,seq__8501_8506);if(temp__4092__auto___8515)
{var seq__8501_8516__$1 = temp__4092__auto___8515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8501_8516__$1))
{var c__4151__auto___8517 = cljs.core.chunk_first.call(null,seq__8501_8516__$1);{
var G__8518 = cljs.core.chunk_rest.call(null,seq__8501_8516__$1);
var G__8519 = c__4151__auto___8517;
var G__8520 = cljs.core.count.call(null,c__4151__auto___8517);
var G__8521 = 0;
seq__8501_8506 = G__8518;
chunk__8502_8507 = G__8519;
count__8503_8508 = G__8520;
i__8504_8509 = G__8521;
continue;
}
} else
{var node_8522 = cljs.core.first.call(null,seq__8501_8516__$1);node_8522.innerHTML = value_8505;
{
var G__8523 = cljs.core.next.call(null,seq__8501_8516__$1);
var G__8524 = null;
var G__8525 = 0;
var G__8526 = 0;
seq__8501_8506 = G__8523;
chunk__8502_8507 = G__8524;
count__8503_8508 = G__8525;
i__8504_8509 = G__8526;
continue;
}
}
} else
{}
}
break;
}
}catch (e8500){if((e8500 instanceof Error))
{var e_8527 = e8500;domina.replace_children_BANG_.call(null,content,value_8505);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8500;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3397__auto__ = bubble;if(cljs.core.truth_(and__3397__auto__))
{return (value == null);
} else
{return and__3397__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3409__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__8534_8538 = cljs.core.seq.call(null,children);var chunk__8535_8539 = null;var count__8536_8540 = 0;var i__8537_8541 = 0;while(true){
if((i__8537_8541 < count__8536_8540))
{var child_8542 = cljs.core._nth.call(null,chunk__8535_8539,i__8537_8541);frag.appendChild(child_8542);
{
var G__8543 = seq__8534_8538;
var G__8544 = chunk__8535_8539;
var G__8545 = count__8536_8540;
var G__8546 = (i__8537_8541 + 1);
seq__8534_8538 = G__8543;
chunk__8535_8539 = G__8544;
count__8536_8540 = G__8545;
i__8537_8541 = G__8546;
continue;
}
} else
{var temp__4092__auto___8547 = cljs.core.seq.call(null,seq__8534_8538);if(temp__4092__auto___8547)
{var seq__8534_8548__$1 = temp__4092__auto___8547;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8534_8548__$1))
{var c__4151__auto___8549 = cljs.core.chunk_first.call(null,seq__8534_8548__$1);{
var G__8550 = cljs.core.chunk_rest.call(null,seq__8534_8548__$1);
var G__8551 = c__4151__auto___8549;
var G__8552 = cljs.core.count.call(null,c__4151__auto___8549);
var G__8553 = 0;
seq__8534_8538 = G__8550;
chunk__8535_8539 = G__8551;
count__8536_8540 = G__8552;
i__8537_8541 = G__8553;
continue;
}
} else
{var child_8554 = cljs.core.first.call(null,seq__8534_8548__$1);frag.appendChild(child_8554);
{
var G__8555 = cljs.core.next.call(null,seq__8534_8548__$1);
var G__8556 = null;
var G__8557 = 0;
var G__8558 = 0;
seq__8534_8538 = G__8555;
chunk__8535_8539 = G__8556;
count__8536_8540 = G__8557;
i__8537_8541 = G__8558;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__8528_SHARP_,p2__8529_SHARP_){return f.call(null,p1__8528_SHARP_,p2__8529_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3397__auto__ = obj;if(cljs.core.truth_(and__3397__auto__))
{var and__3397__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3397__auto____$1)
{return obj.length;
} else
{return and__3397__auto____$1;
}
} else
{return and__3397__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__8560 = list_thing;if(G__8560)
{var bit__4053__auto__ = (G__8560.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__8560.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8560.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8560);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8560);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__8561 = content;if(G__8561)
{var bit__4053__auto__ = (G__8561.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__8561.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8561.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8561);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8561);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__8562 = content;if(G__8562)
{var bit__4053__auto__ = (G__8562.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__8562.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8562.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8562);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8562);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map
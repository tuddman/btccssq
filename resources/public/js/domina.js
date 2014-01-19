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
var opt_wrapper_7172 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_7173 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_7174 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_7173,table_section_wrapper_7173,opt_wrapper_7172,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_7174,table_section_wrapper_7173,cell_wrapper_7174,opt_wrapper_7172,table_section_wrapper_7173,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_7173]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3397__auto__ = div.firstChild;if(cljs.core.truth_(and__3397__auto__))
{return div.firstChild.childNodes;
} else
{return and__3397__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__7179 = cljs.core.seq.call(null,tbody);var chunk__7180 = null;var count__7181 = 0;var i__7182 = 0;while(true){
if((i__7182 < count__7181))
{var child = cljs.core._nth.call(null,chunk__7180,i__7182);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7183 = seq__7179;
var G__7184 = chunk__7180;
var G__7185 = count__7181;
var G__7186 = (i__7182 + 1);
seq__7179 = G__7183;
chunk__7180 = G__7184;
count__7181 = G__7185;
i__7182 = G__7186;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7179);if(temp__4092__auto__)
{var seq__7179__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7179__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__7179__$1);{
var G__7187 = cljs.core.chunk_rest.call(null,seq__7179__$1);
var G__7188 = c__4151__auto__;
var G__7189 = cljs.core.count.call(null,c__4151__auto__);
var G__7190 = 0;
seq__7179 = G__7187;
chunk__7180 = G__7188;
count__7181 = G__7189;
i__7182 = G__7190;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__7179__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7191 = cljs.core.next.call(null,seq__7179__$1);
var G__7192 = null;
var G__7193 = 0;
var G__7194 = 0;
seq__7179 = G__7191;
chunk__7180 = G__7192;
count__7181 = G__7193;
i__7182 = G__7194;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__7196 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__7196,0,null);var start_wrap = cljs.core.nth.call(null,vec__7196,1,null);var end_wrap = cljs.core.nth.call(null,vec__7196,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__7197 = wrapper.lastChild;
var G__7198 = (level - 1);
wrapper = G__7197;
level = G__7198;
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
domina.DomContent = (function (){var obj7200 = {};return obj7200;
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
log_debug.cljs$lang$applyTo = (function (arglist__7201){
var mesg = cljs.core.seq(arglist__7201);
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
log.cljs$lang$applyTo = (function (arglist__7202){
var mesg = cljs.core.seq(arglist__7202);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__7203){
var contents = cljs.core.seq(arglist__7203);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__7204_SHARP_){return p1__7204_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__7205_SHARP_,p2__7206_SHARP_){return goog.dom.insertChildAt(p1__7205_SHARP_,p2__7206_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7208_SHARP_,p2__7207_SHARP_){return goog.dom.insertSiblingBefore(p2__7207_SHARP_,p1__7208_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7210_SHARP_,p2__7209_SHARP_){return goog.dom.insertSiblingAfter(p2__7209_SHARP_,p1__7210_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__7212_SHARP_,p2__7211_SHARP_){return goog.dom.replaceNode(p2__7211_SHARP_,p1__7212_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__7217_7221 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7218_7222 = null;var count__7219_7223 = 0;var i__7220_7224 = 0;while(true){
if((i__7220_7224 < count__7219_7223))
{var n_7225 = cljs.core._nth.call(null,chunk__7218_7222,i__7220_7224);goog.style.setStyle(n_7225,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7226 = seq__7217_7221;
var G__7227 = chunk__7218_7222;
var G__7228 = count__7219_7223;
var G__7229 = (i__7220_7224 + 1);
seq__7217_7221 = G__7226;
chunk__7218_7222 = G__7227;
count__7219_7223 = G__7228;
i__7220_7224 = G__7229;
continue;
}
} else
{var temp__4092__auto___7230 = cljs.core.seq.call(null,seq__7217_7221);if(temp__4092__auto___7230)
{var seq__7217_7231__$1 = temp__4092__auto___7230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7217_7231__$1))
{var c__4151__auto___7232 = cljs.core.chunk_first.call(null,seq__7217_7231__$1);{
var G__7233 = cljs.core.chunk_rest.call(null,seq__7217_7231__$1);
var G__7234 = c__4151__auto___7232;
var G__7235 = cljs.core.count.call(null,c__4151__auto___7232);
var G__7236 = 0;
seq__7217_7221 = G__7233;
chunk__7218_7222 = G__7234;
count__7219_7223 = G__7235;
i__7220_7224 = G__7236;
continue;
}
} else
{var n_7237 = cljs.core.first.call(null,seq__7217_7231__$1);goog.style.setStyle(n_7237,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7238 = cljs.core.next.call(null,seq__7217_7231__$1);
var G__7239 = null;
var G__7240 = 0;
var G__7241 = 0;
seq__7217_7221 = G__7238;
chunk__7218_7222 = G__7239;
count__7219_7223 = G__7240;
i__7220_7224 = G__7241;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7242){
var content = cljs.core.first(arglist__7242);
arglist__7242 = cljs.core.next(arglist__7242);
var name = cljs.core.first(arglist__7242);
var value = cljs.core.rest(arglist__7242);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__7247_7251 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7248_7252 = null;var count__7249_7253 = 0;var i__7250_7254 = 0;while(true){
if((i__7250_7254 < count__7249_7253))
{var n_7255 = cljs.core._nth.call(null,chunk__7248_7252,i__7250_7254);n_7255.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7256 = seq__7247_7251;
var G__7257 = chunk__7248_7252;
var G__7258 = count__7249_7253;
var G__7259 = (i__7250_7254 + 1);
seq__7247_7251 = G__7256;
chunk__7248_7252 = G__7257;
count__7249_7253 = G__7258;
i__7250_7254 = G__7259;
continue;
}
} else
{var temp__4092__auto___7260 = cljs.core.seq.call(null,seq__7247_7251);if(temp__4092__auto___7260)
{var seq__7247_7261__$1 = temp__4092__auto___7260;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7247_7261__$1))
{var c__4151__auto___7262 = cljs.core.chunk_first.call(null,seq__7247_7261__$1);{
var G__7263 = cljs.core.chunk_rest.call(null,seq__7247_7261__$1);
var G__7264 = c__4151__auto___7262;
var G__7265 = cljs.core.count.call(null,c__4151__auto___7262);
var G__7266 = 0;
seq__7247_7251 = G__7263;
chunk__7248_7252 = G__7264;
count__7249_7253 = G__7265;
i__7250_7254 = G__7266;
continue;
}
} else
{var n_7267 = cljs.core.first.call(null,seq__7247_7261__$1);n_7267.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7268 = cljs.core.next.call(null,seq__7247_7261__$1);
var G__7269 = null;
var G__7270 = 0;
var G__7271 = 0;
seq__7247_7251 = G__7268;
chunk__7248_7252 = G__7269;
count__7249_7253 = G__7270;
i__7250_7254 = G__7271;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__7272){
var content = cljs.core.first(arglist__7272);
arglist__7272 = cljs.core.next(arglist__7272);
var name = cljs.core.first(arglist__7272);
var value = cljs.core.rest(arglist__7272);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__7277_7281 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7278_7282 = null;var count__7279_7283 = 0;var i__7280_7284 = 0;while(true){
if((i__7280_7284 < count__7279_7283))
{var n_7285 = cljs.core._nth.call(null,chunk__7278_7282,i__7280_7284);n_7285.removeAttribute(cljs.core.name.call(null,name));
{
var G__7286 = seq__7277_7281;
var G__7287 = chunk__7278_7282;
var G__7288 = count__7279_7283;
var G__7289 = (i__7280_7284 + 1);
seq__7277_7281 = G__7286;
chunk__7278_7282 = G__7287;
count__7279_7283 = G__7288;
i__7280_7284 = G__7289;
continue;
}
} else
{var temp__4092__auto___7290 = cljs.core.seq.call(null,seq__7277_7281);if(temp__4092__auto___7290)
{var seq__7277_7291__$1 = temp__4092__auto___7290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7277_7291__$1))
{var c__4151__auto___7292 = cljs.core.chunk_first.call(null,seq__7277_7291__$1);{
var G__7293 = cljs.core.chunk_rest.call(null,seq__7277_7291__$1);
var G__7294 = c__4151__auto___7292;
var G__7295 = cljs.core.count.call(null,c__4151__auto___7292);
var G__7296 = 0;
seq__7277_7281 = G__7293;
chunk__7278_7282 = G__7294;
count__7279_7283 = G__7295;
i__7280_7284 = G__7296;
continue;
}
} else
{var n_7297 = cljs.core.first.call(null,seq__7277_7291__$1);n_7297.removeAttribute(cljs.core.name.call(null,name));
{
var G__7298 = cljs.core.next.call(null,seq__7277_7291__$1);
var G__7299 = null;
var G__7300 = 0;
var G__7301 = 0;
seq__7277_7281 = G__7298;
chunk__7278_7282 = G__7299;
count__7279_7283 = G__7300;
i__7280_7284 = G__7301;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__7303 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__7303,0,null);var v = cljs.core.nth.call(null,vec__7303,1,null);if(cljs.core.truth_((function (){var and__3397__auto__ = k;if(cljs.core.truth_(and__3397__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__7304_SHARP_){var attr = attrs__$1.item(p1__7304_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__7311_7317 = cljs.core.seq.call(null,styles);var chunk__7312_7318 = null;var count__7313_7319 = 0;var i__7314_7320 = 0;while(true){
if((i__7314_7320 < count__7313_7319))
{var vec__7315_7321 = cljs.core._nth.call(null,chunk__7312_7318,i__7314_7320);var name_7322 = cljs.core.nth.call(null,vec__7315_7321,0,null);var value_7323 = cljs.core.nth.call(null,vec__7315_7321,1,null);domina.set_style_BANG_.call(null,content,name_7322,value_7323);
{
var G__7324 = seq__7311_7317;
var G__7325 = chunk__7312_7318;
var G__7326 = count__7313_7319;
var G__7327 = (i__7314_7320 + 1);
seq__7311_7317 = G__7324;
chunk__7312_7318 = G__7325;
count__7313_7319 = G__7326;
i__7314_7320 = G__7327;
continue;
}
} else
{var temp__4092__auto___7328 = cljs.core.seq.call(null,seq__7311_7317);if(temp__4092__auto___7328)
{var seq__7311_7329__$1 = temp__4092__auto___7328;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7311_7329__$1))
{var c__4151__auto___7330 = cljs.core.chunk_first.call(null,seq__7311_7329__$1);{
var G__7331 = cljs.core.chunk_rest.call(null,seq__7311_7329__$1);
var G__7332 = c__4151__auto___7330;
var G__7333 = cljs.core.count.call(null,c__4151__auto___7330);
var G__7334 = 0;
seq__7311_7317 = G__7331;
chunk__7312_7318 = G__7332;
count__7313_7319 = G__7333;
i__7314_7320 = G__7334;
continue;
}
} else
{var vec__7316_7335 = cljs.core.first.call(null,seq__7311_7329__$1);var name_7336 = cljs.core.nth.call(null,vec__7316_7335,0,null);var value_7337 = cljs.core.nth.call(null,vec__7316_7335,1,null);domina.set_style_BANG_.call(null,content,name_7336,value_7337);
{
var G__7338 = cljs.core.next.call(null,seq__7311_7329__$1);
var G__7339 = null;
var G__7340 = 0;
var G__7341 = 0;
seq__7311_7317 = G__7338;
chunk__7312_7318 = G__7339;
count__7313_7319 = G__7340;
i__7314_7320 = G__7341;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__7348_7354 = cljs.core.seq.call(null,attrs);var chunk__7349_7355 = null;var count__7350_7356 = 0;var i__7351_7357 = 0;while(true){
if((i__7351_7357 < count__7350_7356))
{var vec__7352_7358 = cljs.core._nth.call(null,chunk__7349_7355,i__7351_7357);var name_7359 = cljs.core.nth.call(null,vec__7352_7358,0,null);var value_7360 = cljs.core.nth.call(null,vec__7352_7358,1,null);domina.set_attr_BANG_.call(null,content,name_7359,value_7360);
{
var G__7361 = seq__7348_7354;
var G__7362 = chunk__7349_7355;
var G__7363 = count__7350_7356;
var G__7364 = (i__7351_7357 + 1);
seq__7348_7354 = G__7361;
chunk__7349_7355 = G__7362;
count__7350_7356 = G__7363;
i__7351_7357 = G__7364;
continue;
}
} else
{var temp__4092__auto___7365 = cljs.core.seq.call(null,seq__7348_7354);if(temp__4092__auto___7365)
{var seq__7348_7366__$1 = temp__4092__auto___7365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7348_7366__$1))
{var c__4151__auto___7367 = cljs.core.chunk_first.call(null,seq__7348_7366__$1);{
var G__7368 = cljs.core.chunk_rest.call(null,seq__7348_7366__$1);
var G__7369 = c__4151__auto___7367;
var G__7370 = cljs.core.count.call(null,c__4151__auto___7367);
var G__7371 = 0;
seq__7348_7354 = G__7368;
chunk__7349_7355 = G__7369;
count__7350_7356 = G__7370;
i__7351_7357 = G__7371;
continue;
}
} else
{var vec__7353_7372 = cljs.core.first.call(null,seq__7348_7366__$1);var name_7373 = cljs.core.nth.call(null,vec__7353_7372,0,null);var value_7374 = cljs.core.nth.call(null,vec__7353_7372,1,null);domina.set_attr_BANG_.call(null,content,name_7373,value_7374);
{
var G__7375 = cljs.core.next.call(null,seq__7348_7366__$1);
var G__7376 = null;
var G__7377 = 0;
var G__7378 = 0;
seq__7348_7354 = G__7375;
chunk__7349_7355 = G__7376;
count__7350_7356 = G__7377;
i__7351_7357 = G__7378;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__7383_7387 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7384_7388 = null;var count__7385_7389 = 0;var i__7386_7390 = 0;while(true){
if((i__7386_7390 < count__7385_7389))
{var node_7391 = cljs.core._nth.call(null,chunk__7384_7388,i__7386_7390);goog.dom.classes.add(node_7391,class$);
{
var G__7392 = seq__7383_7387;
var G__7393 = chunk__7384_7388;
var G__7394 = count__7385_7389;
var G__7395 = (i__7386_7390 + 1);
seq__7383_7387 = G__7392;
chunk__7384_7388 = G__7393;
count__7385_7389 = G__7394;
i__7386_7390 = G__7395;
continue;
}
} else
{var temp__4092__auto___7396 = cljs.core.seq.call(null,seq__7383_7387);if(temp__4092__auto___7396)
{var seq__7383_7397__$1 = temp__4092__auto___7396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7383_7397__$1))
{var c__4151__auto___7398 = cljs.core.chunk_first.call(null,seq__7383_7397__$1);{
var G__7399 = cljs.core.chunk_rest.call(null,seq__7383_7397__$1);
var G__7400 = c__4151__auto___7398;
var G__7401 = cljs.core.count.call(null,c__4151__auto___7398);
var G__7402 = 0;
seq__7383_7387 = G__7399;
chunk__7384_7388 = G__7400;
count__7385_7389 = G__7401;
i__7386_7390 = G__7402;
continue;
}
} else
{var node_7403 = cljs.core.first.call(null,seq__7383_7397__$1);goog.dom.classes.add(node_7403,class$);
{
var G__7404 = cljs.core.next.call(null,seq__7383_7397__$1);
var G__7405 = null;
var G__7406 = 0;
var G__7407 = 0;
seq__7383_7387 = G__7404;
chunk__7384_7388 = G__7405;
count__7385_7389 = G__7406;
i__7386_7390 = G__7407;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__7412_7416 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7413_7417 = null;var count__7414_7418 = 0;var i__7415_7419 = 0;while(true){
if((i__7415_7419 < count__7414_7418))
{var node_7420 = cljs.core._nth.call(null,chunk__7413_7417,i__7415_7419);goog.dom.classes.remove(node_7420,class$);
{
var G__7421 = seq__7412_7416;
var G__7422 = chunk__7413_7417;
var G__7423 = count__7414_7418;
var G__7424 = (i__7415_7419 + 1);
seq__7412_7416 = G__7421;
chunk__7413_7417 = G__7422;
count__7414_7418 = G__7423;
i__7415_7419 = G__7424;
continue;
}
} else
{var temp__4092__auto___7425 = cljs.core.seq.call(null,seq__7412_7416);if(temp__4092__auto___7425)
{var seq__7412_7426__$1 = temp__4092__auto___7425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7412_7426__$1))
{var c__4151__auto___7427 = cljs.core.chunk_first.call(null,seq__7412_7426__$1);{
var G__7428 = cljs.core.chunk_rest.call(null,seq__7412_7426__$1);
var G__7429 = c__4151__auto___7427;
var G__7430 = cljs.core.count.call(null,c__4151__auto___7427);
var G__7431 = 0;
seq__7412_7416 = G__7428;
chunk__7413_7417 = G__7429;
count__7414_7418 = G__7430;
i__7415_7419 = G__7431;
continue;
}
} else
{var node_7432 = cljs.core.first.call(null,seq__7412_7426__$1);goog.dom.classes.remove(node_7432,class$);
{
var G__7433 = cljs.core.next.call(null,seq__7412_7426__$1);
var G__7434 = null;
var G__7435 = 0;
var G__7436 = 0;
seq__7412_7416 = G__7433;
chunk__7413_7417 = G__7434;
count__7414_7418 = G__7435;
i__7415_7419 = G__7436;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__7441_7445 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7442_7446 = null;var count__7443_7447 = 0;var i__7444_7448 = 0;while(true){
if((i__7444_7448 < count__7443_7447))
{var node_7449 = cljs.core._nth.call(null,chunk__7442_7446,i__7444_7448);goog.dom.classes.toggle(node_7449,class$);
{
var G__7450 = seq__7441_7445;
var G__7451 = chunk__7442_7446;
var G__7452 = count__7443_7447;
var G__7453 = (i__7444_7448 + 1);
seq__7441_7445 = G__7450;
chunk__7442_7446 = G__7451;
count__7443_7447 = G__7452;
i__7444_7448 = G__7453;
continue;
}
} else
{var temp__4092__auto___7454 = cljs.core.seq.call(null,seq__7441_7445);if(temp__4092__auto___7454)
{var seq__7441_7455__$1 = temp__4092__auto___7454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7441_7455__$1))
{var c__4151__auto___7456 = cljs.core.chunk_first.call(null,seq__7441_7455__$1);{
var G__7457 = cljs.core.chunk_rest.call(null,seq__7441_7455__$1);
var G__7458 = c__4151__auto___7456;
var G__7459 = cljs.core.count.call(null,c__4151__auto___7456);
var G__7460 = 0;
seq__7441_7445 = G__7457;
chunk__7442_7446 = G__7458;
count__7443_7447 = G__7459;
i__7444_7448 = G__7460;
continue;
}
} else
{var node_7461 = cljs.core.first.call(null,seq__7441_7455__$1);goog.dom.classes.toggle(node_7461,class$);
{
var G__7462 = cljs.core.next.call(null,seq__7441_7455__$1);
var G__7463 = null;
var G__7464 = 0;
var G__7465 = 0;
seq__7441_7445 = G__7462;
chunk__7442_7446 = G__7463;
count__7443_7447 = G__7464;
i__7444_7448 = G__7465;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_7474__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__7470_7475 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7471_7476 = null;var count__7472_7477 = 0;var i__7473_7478 = 0;while(true){
if((i__7473_7478 < count__7472_7477))
{var node_7479 = cljs.core._nth.call(null,chunk__7471_7476,i__7473_7478);goog.dom.classes.set(node_7479,classes_7474__$1);
{
var G__7480 = seq__7470_7475;
var G__7481 = chunk__7471_7476;
var G__7482 = count__7472_7477;
var G__7483 = (i__7473_7478 + 1);
seq__7470_7475 = G__7480;
chunk__7471_7476 = G__7481;
count__7472_7477 = G__7482;
i__7473_7478 = G__7483;
continue;
}
} else
{var temp__4092__auto___7484 = cljs.core.seq.call(null,seq__7470_7475);if(temp__4092__auto___7484)
{var seq__7470_7485__$1 = temp__4092__auto___7484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7470_7485__$1))
{var c__4151__auto___7486 = cljs.core.chunk_first.call(null,seq__7470_7485__$1);{
var G__7487 = cljs.core.chunk_rest.call(null,seq__7470_7485__$1);
var G__7488 = c__4151__auto___7486;
var G__7489 = cljs.core.count.call(null,c__4151__auto___7486);
var G__7490 = 0;
seq__7470_7475 = G__7487;
chunk__7471_7476 = G__7488;
count__7472_7477 = G__7489;
i__7473_7478 = G__7490;
continue;
}
} else
{var node_7491 = cljs.core.first.call(null,seq__7470_7485__$1);goog.dom.classes.set(node_7491,classes_7474__$1);
{
var G__7492 = cljs.core.next.call(null,seq__7470_7485__$1);
var G__7493 = null;
var G__7494 = 0;
var G__7495 = 0;
seq__7470_7475 = G__7492;
chunk__7471_7476 = G__7493;
count__7472_7477 = G__7494;
i__7473_7478 = G__7495;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__7500_7504 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7501_7505 = null;var count__7502_7506 = 0;var i__7503_7507 = 0;while(true){
if((i__7503_7507 < count__7502_7506))
{var node_7508 = cljs.core._nth.call(null,chunk__7501_7505,i__7503_7507);goog.dom.setTextContent(node_7508,value);
{
var G__7509 = seq__7500_7504;
var G__7510 = chunk__7501_7505;
var G__7511 = count__7502_7506;
var G__7512 = (i__7503_7507 + 1);
seq__7500_7504 = G__7509;
chunk__7501_7505 = G__7510;
count__7502_7506 = G__7511;
i__7503_7507 = G__7512;
continue;
}
} else
{var temp__4092__auto___7513 = cljs.core.seq.call(null,seq__7500_7504);if(temp__4092__auto___7513)
{var seq__7500_7514__$1 = temp__4092__auto___7513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7500_7514__$1))
{var c__4151__auto___7515 = cljs.core.chunk_first.call(null,seq__7500_7514__$1);{
var G__7516 = cljs.core.chunk_rest.call(null,seq__7500_7514__$1);
var G__7517 = c__4151__auto___7515;
var G__7518 = cljs.core.count.call(null,c__4151__auto___7515);
var G__7519 = 0;
seq__7500_7504 = G__7516;
chunk__7501_7505 = G__7517;
count__7502_7506 = G__7518;
i__7503_7507 = G__7519;
continue;
}
} else
{var node_7520 = cljs.core.first.call(null,seq__7500_7514__$1);goog.dom.setTextContent(node_7520,value);
{
var G__7521 = cljs.core.next.call(null,seq__7500_7514__$1);
var G__7522 = null;
var G__7523 = 0;
var G__7524 = 0;
seq__7500_7504 = G__7521;
chunk__7501_7505 = G__7522;
count__7502_7506 = G__7523;
i__7503_7507 = G__7524;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__7529_7533 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7530_7534 = null;var count__7531_7535 = 0;var i__7532_7536 = 0;while(true){
if((i__7532_7536 < count__7531_7535))
{var node_7537 = cljs.core._nth.call(null,chunk__7530_7534,i__7532_7536);goog.dom.forms.setValue(node_7537,value);
{
var G__7538 = seq__7529_7533;
var G__7539 = chunk__7530_7534;
var G__7540 = count__7531_7535;
var G__7541 = (i__7532_7536 + 1);
seq__7529_7533 = G__7538;
chunk__7530_7534 = G__7539;
count__7531_7535 = G__7540;
i__7532_7536 = G__7541;
continue;
}
} else
{var temp__4092__auto___7542 = cljs.core.seq.call(null,seq__7529_7533);if(temp__4092__auto___7542)
{var seq__7529_7543__$1 = temp__4092__auto___7542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7529_7543__$1))
{var c__4151__auto___7544 = cljs.core.chunk_first.call(null,seq__7529_7543__$1);{
var G__7545 = cljs.core.chunk_rest.call(null,seq__7529_7543__$1);
var G__7546 = c__4151__auto___7544;
var G__7547 = cljs.core.count.call(null,c__4151__auto___7544);
var G__7548 = 0;
seq__7529_7533 = G__7545;
chunk__7530_7534 = G__7546;
count__7531_7535 = G__7547;
i__7532_7536 = G__7548;
continue;
}
} else
{var node_7549 = cljs.core.first.call(null,seq__7529_7543__$1);goog.dom.forms.setValue(node_7549,value);
{
var G__7550 = cljs.core.next.call(null,seq__7529_7543__$1);
var G__7551 = null;
var G__7552 = 0;
var G__7553 = 0;
seq__7529_7533 = G__7550;
chunk__7530_7534 = G__7551;
count__7531_7535 = G__7552;
i__7532_7536 = G__7553;
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
{var value_7564 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__7560_7565 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7561_7566 = null;var count__7562_7567 = 0;var i__7563_7568 = 0;while(true){
if((i__7563_7568 < count__7562_7567))
{var node_7569 = cljs.core._nth.call(null,chunk__7561_7566,i__7563_7568);node_7569.innerHTML = value_7564;
{
var G__7570 = seq__7560_7565;
var G__7571 = chunk__7561_7566;
var G__7572 = count__7562_7567;
var G__7573 = (i__7563_7568 + 1);
seq__7560_7565 = G__7570;
chunk__7561_7566 = G__7571;
count__7562_7567 = G__7572;
i__7563_7568 = G__7573;
continue;
}
} else
{var temp__4092__auto___7574 = cljs.core.seq.call(null,seq__7560_7565);if(temp__4092__auto___7574)
{var seq__7560_7575__$1 = temp__4092__auto___7574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7560_7575__$1))
{var c__4151__auto___7576 = cljs.core.chunk_first.call(null,seq__7560_7575__$1);{
var G__7577 = cljs.core.chunk_rest.call(null,seq__7560_7575__$1);
var G__7578 = c__4151__auto___7576;
var G__7579 = cljs.core.count.call(null,c__4151__auto___7576);
var G__7580 = 0;
seq__7560_7565 = G__7577;
chunk__7561_7566 = G__7578;
count__7562_7567 = G__7579;
i__7563_7568 = G__7580;
continue;
}
} else
{var node_7581 = cljs.core.first.call(null,seq__7560_7575__$1);node_7581.innerHTML = value_7564;
{
var G__7582 = cljs.core.next.call(null,seq__7560_7575__$1);
var G__7583 = null;
var G__7584 = 0;
var G__7585 = 0;
seq__7560_7565 = G__7582;
chunk__7561_7566 = G__7583;
count__7562_7567 = G__7584;
i__7563_7568 = G__7585;
continue;
}
}
} else
{}
}
break;
}
}catch (e7559){if((e7559 instanceof Error))
{var e_7586 = e7559;domina.replace_children_BANG_.call(null,content,value_7564);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7559;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__7593_7597 = cljs.core.seq.call(null,children);var chunk__7594_7598 = null;var count__7595_7599 = 0;var i__7596_7600 = 0;while(true){
if((i__7596_7600 < count__7595_7599))
{var child_7601 = cljs.core._nth.call(null,chunk__7594_7598,i__7596_7600);frag.appendChild(child_7601);
{
var G__7602 = seq__7593_7597;
var G__7603 = chunk__7594_7598;
var G__7604 = count__7595_7599;
var G__7605 = (i__7596_7600 + 1);
seq__7593_7597 = G__7602;
chunk__7594_7598 = G__7603;
count__7595_7599 = G__7604;
i__7596_7600 = G__7605;
continue;
}
} else
{var temp__4092__auto___7606 = cljs.core.seq.call(null,seq__7593_7597);if(temp__4092__auto___7606)
{var seq__7593_7607__$1 = temp__4092__auto___7606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7593_7607__$1))
{var c__4151__auto___7608 = cljs.core.chunk_first.call(null,seq__7593_7607__$1);{
var G__7609 = cljs.core.chunk_rest.call(null,seq__7593_7607__$1);
var G__7610 = c__4151__auto___7608;
var G__7611 = cljs.core.count.call(null,c__4151__auto___7608);
var G__7612 = 0;
seq__7593_7597 = G__7609;
chunk__7594_7598 = G__7610;
count__7595_7599 = G__7611;
i__7596_7600 = G__7612;
continue;
}
} else
{var child_7613 = cljs.core.first.call(null,seq__7593_7607__$1);frag.appendChild(child_7613);
{
var G__7614 = cljs.core.next.call(null,seq__7593_7607__$1);
var G__7615 = null;
var G__7616 = 0;
var G__7617 = 0;
seq__7593_7597 = G__7614;
chunk__7594_7598 = G__7615;
count__7595_7599 = G__7616;
i__7596_7600 = G__7617;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__7587_SHARP_,p2__7588_SHARP_){return f.call(null,p1__7587_SHARP_,p2__7588_SHARP_);
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
{if((function (){var G__7619 = list_thing;if(G__7619)
{var bit__4053__auto__ = (G__7619.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__7619.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7619.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7619);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7619);
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
{if((function (){var G__7620 = content;if(G__7620)
{var bit__4053__auto__ = (G__7620.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__7620.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7620.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7620);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7620);
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
{if((function (){var G__7621 = content;if(G__7621)
{var bit__4053__auto__ = (G__7621.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__7621.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7621.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7621);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7621);
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
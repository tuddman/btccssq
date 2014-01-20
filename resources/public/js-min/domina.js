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
var opt_wrapper_10020 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_10021 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_10022 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$7,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_10021,table_section_wrapper_10021,opt_wrapper_10020,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_10022,table_section_wrapper_10021,cell_wrapper_10022,opt_wrapper_10020,table_section_wrapper_10021,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_10021]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3397__auto__ = div.firstChild;if(cljs.core.truth_(and__3397__auto__))
{return div.firstChild.childNodes;
} else
{return and__3397__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__10027 = cljs.core.seq(tbody);var chunk__10028 = null;var count__10029 = 0;var i__10030 = 0;while(true){
if((i__10030 < count__10029))
{var child = chunk__10028.cljs$core$IIndexed$_nth$arity$2(null,i__10030);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__10031 = seq__10027;
var G__10032 = chunk__10028;
var G__10033 = count__10029;
var G__10034 = (i__10030 + 1);
seq__10027 = G__10031;
chunk__10028 = G__10032;
count__10029 = G__10033;
i__10030 = G__10034;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10027);if(temp__4092__auto__)
{var seq__10027__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10027__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__10027__$1);{
var G__10035 = cljs.core.chunk_rest(seq__10027__$1);
var G__10036 = c__4151__auto__;
var G__10037 = cljs.core.count(c__4151__auto__);
var G__10038 = 0;
seq__10027 = G__10035;
chunk__10028 = G__10036;
count__10029 = G__10037;
i__10030 = G__10038;
continue;
}
} else
{var child = cljs.core.first(seq__10027__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__10039 = cljs.core.next(seq__10027__$1);
var G__10040 = null;
var G__10041 = 0;
var G__10042 = 0;
seq__10027 = G__10039;
chunk__10028 = G__10040;
count__10029 = G__10041;
i__10030 = G__10042;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__10044 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10044,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10044,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10044,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__10045 = wrapper.lastChild;
var G__10046 = (level - 1);
wrapper = G__10045;
level = G__10046;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3397__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3397__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3397__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj10048 = {};return obj10048;
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
{throw cljs.core.missing_protocol("DomContent.nodes",content);
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
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3397__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__10049){
var mesg = cljs.core.seq(arglist__10049);
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
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__10050){
var mesg = cljs.core.seq(arglist__10050);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__10051){
var contents = cljs.core.seq(arglist__10051);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10052_SHARP_){return p1__10052_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__10053_SHARP_,p2__10054_SHARP_){return goog.dom.insertChildAt(p1__10053_SHARP_,p2__10054_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__10053_SHARP_,p2__10054_SHARP_){return goog.dom.insertChildAt(p1__10053_SHARP_,p2__10054_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__10056_SHARP_,p2__10055_SHARP_){return goog.dom.insertSiblingBefore(p2__10055_SHARP_,p1__10056_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__10056_SHARP_,p2__10055_SHARP_){return goog.dom.insertSiblingBefore(p2__10055_SHARP_,p1__10056_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__10058_SHARP_,p2__10057_SHARP_){return goog.dom.insertSiblingAfter(p2__10057_SHARP_,p1__10058_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__10058_SHARP_,p2__10057_SHARP_){return goog.dom.insertSiblingAfter(p2__10057_SHARP_,p1__10058_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__10060_SHARP_,p2__10059_SHARP_){return goog.dom.replaceNode(p2__10059_SHARP_,p1__10060_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__10060_SHARP_,p2__10059_SHARP_){return goog.dom.replaceNode(p2__10059_SHARP_,p1__10060_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__10065_10069 = cljs.core.seq(domina.nodes(content));var chunk__10066_10070 = null;var count__10067_10071 = 0;var i__10068_10072 = 0;while(true){
if((i__10068_10072 < count__10067_10071))
{var n_10073 = chunk__10066_10070.cljs$core$IIndexed$_nth$arity$2(null,i__10068_10072);goog.style.setStyle(n_10073,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__10074 = seq__10065_10069;
var G__10075 = chunk__10066_10070;
var G__10076 = count__10067_10071;
var G__10077 = (i__10068_10072 + 1);
seq__10065_10069 = G__10074;
chunk__10066_10070 = G__10075;
count__10067_10071 = G__10076;
i__10068_10072 = G__10077;
continue;
}
} else
{var temp__4092__auto___10078 = cljs.core.seq(seq__10065_10069);if(temp__4092__auto___10078)
{var seq__10065_10079__$1 = temp__4092__auto___10078;if(cljs.core.chunked_seq_QMARK_(seq__10065_10079__$1))
{var c__4151__auto___10080 = cljs.core.chunk_first(seq__10065_10079__$1);{
var G__10081 = cljs.core.chunk_rest(seq__10065_10079__$1);
var G__10082 = c__4151__auto___10080;
var G__10083 = cljs.core.count(c__4151__auto___10080);
var G__10084 = 0;
seq__10065_10069 = G__10081;
chunk__10066_10070 = G__10082;
count__10067_10071 = G__10083;
i__10068_10072 = G__10084;
continue;
}
} else
{var n_10085 = cljs.core.first(seq__10065_10079__$1);goog.style.setStyle(n_10085,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__10086 = cljs.core.next(seq__10065_10079__$1);
var G__10087 = null;
var G__10088 = 0;
var G__10089 = 0;
seq__10065_10069 = G__10086;
chunk__10066_10070 = G__10087;
count__10067_10071 = G__10088;
i__10068_10072 = G__10089;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10090){
var content = cljs.core.first(arglist__10090);
arglist__10090 = cljs.core.next(arglist__10090);
var name = cljs.core.first(arglist__10090);
var value = cljs.core.rest(arglist__10090);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__10095_10099 = cljs.core.seq(domina.nodes(content));var chunk__10096_10100 = null;var count__10097_10101 = 0;var i__10098_10102 = 0;while(true){
if((i__10098_10102 < count__10097_10101))
{var n_10103 = chunk__10096_10100.cljs$core$IIndexed$_nth$arity$2(null,i__10098_10102);n_10103.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__10104 = seq__10095_10099;
var G__10105 = chunk__10096_10100;
var G__10106 = count__10097_10101;
var G__10107 = (i__10098_10102 + 1);
seq__10095_10099 = G__10104;
chunk__10096_10100 = G__10105;
count__10097_10101 = G__10106;
i__10098_10102 = G__10107;
continue;
}
} else
{var temp__4092__auto___10108 = cljs.core.seq(seq__10095_10099);if(temp__4092__auto___10108)
{var seq__10095_10109__$1 = temp__4092__auto___10108;if(cljs.core.chunked_seq_QMARK_(seq__10095_10109__$1))
{var c__4151__auto___10110 = cljs.core.chunk_first(seq__10095_10109__$1);{
var G__10111 = cljs.core.chunk_rest(seq__10095_10109__$1);
var G__10112 = c__4151__auto___10110;
var G__10113 = cljs.core.count(c__4151__auto___10110);
var G__10114 = 0;
seq__10095_10099 = G__10111;
chunk__10096_10100 = G__10112;
count__10097_10101 = G__10113;
i__10098_10102 = G__10114;
continue;
}
} else
{var n_10115 = cljs.core.first(seq__10095_10109__$1);n_10115.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__10116 = cljs.core.next(seq__10095_10109__$1);
var G__10117 = null;
var G__10118 = 0;
var G__10119 = 0;
seq__10095_10099 = G__10116;
chunk__10096_10100 = G__10117;
count__10097_10101 = G__10118;
i__10098_10102 = G__10119;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__10120){
var content = cljs.core.first(arglist__10120);
arglist__10120 = cljs.core.next(arglist__10120);
var name = cljs.core.first(arglist__10120);
var value = cljs.core.rest(arglist__10120);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__10125_10129 = cljs.core.seq(domina.nodes(content));var chunk__10126_10130 = null;var count__10127_10131 = 0;var i__10128_10132 = 0;while(true){
if((i__10128_10132 < count__10127_10131))
{var n_10133 = chunk__10126_10130.cljs$core$IIndexed$_nth$arity$2(null,i__10128_10132);n_10133.removeAttribute(cljs.core.name(name));
{
var G__10134 = seq__10125_10129;
var G__10135 = chunk__10126_10130;
var G__10136 = count__10127_10131;
var G__10137 = (i__10128_10132 + 1);
seq__10125_10129 = G__10134;
chunk__10126_10130 = G__10135;
count__10127_10131 = G__10136;
i__10128_10132 = G__10137;
continue;
}
} else
{var temp__4092__auto___10138 = cljs.core.seq(seq__10125_10129);if(temp__4092__auto___10138)
{var seq__10125_10139__$1 = temp__4092__auto___10138;if(cljs.core.chunked_seq_QMARK_(seq__10125_10139__$1))
{var c__4151__auto___10140 = cljs.core.chunk_first(seq__10125_10139__$1);{
var G__10141 = cljs.core.chunk_rest(seq__10125_10139__$1);
var G__10142 = c__4151__auto___10140;
var G__10143 = cljs.core.count(c__4151__auto___10140);
var G__10144 = 0;
seq__10125_10129 = G__10141;
chunk__10126_10130 = G__10142;
count__10127_10131 = G__10143;
i__10128_10132 = G__10144;
continue;
}
} else
{var n_10145 = cljs.core.first(seq__10125_10139__$1);n_10145.removeAttribute(cljs.core.name(name));
{
var G__10146 = cljs.core.next(seq__10125_10139__$1);
var G__10147 = null;
var G__10148 = 0;
var G__10149 = 0;
seq__10125_10129 = G__10146;
chunk__10126_10130 = G__10147;
count__10127_10131 = G__10148;
i__10128_10132 = G__10149;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__10151 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10151,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10151,1,null);if(cljs.core.truth_((function (){var and__3397__auto__ = k;if(cljs.core.truth_(and__3397__auto__))
{return v;
} else
{return and__3397__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$6)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10152_SHARP_){var attr = attrs__$1.item(p1__10152_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__10159_10165 = cljs.core.seq(styles);var chunk__10160_10166 = null;var count__10161_10167 = 0;var i__10162_10168 = 0;while(true){
if((i__10162_10168 < count__10161_10167))
{var vec__10163_10169 = chunk__10160_10166.cljs$core$IIndexed$_nth$arity$2(null,i__10162_10168);var name_10170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10163_10169,0,null);var value_10171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10163_10169,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_10170,cljs.core.array_seq([value_10171], 0));
{
var G__10172 = seq__10159_10165;
var G__10173 = chunk__10160_10166;
var G__10174 = count__10161_10167;
var G__10175 = (i__10162_10168 + 1);
seq__10159_10165 = G__10172;
chunk__10160_10166 = G__10173;
count__10161_10167 = G__10174;
i__10162_10168 = G__10175;
continue;
}
} else
{var temp__4092__auto___10176 = cljs.core.seq(seq__10159_10165);if(temp__4092__auto___10176)
{var seq__10159_10177__$1 = temp__4092__auto___10176;if(cljs.core.chunked_seq_QMARK_(seq__10159_10177__$1))
{var c__4151__auto___10178 = cljs.core.chunk_first(seq__10159_10177__$1);{
var G__10179 = cljs.core.chunk_rest(seq__10159_10177__$1);
var G__10180 = c__4151__auto___10178;
var G__10181 = cljs.core.count(c__4151__auto___10178);
var G__10182 = 0;
seq__10159_10165 = G__10179;
chunk__10160_10166 = G__10180;
count__10161_10167 = G__10181;
i__10162_10168 = G__10182;
continue;
}
} else
{var vec__10164_10183 = cljs.core.first(seq__10159_10177__$1);var name_10184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10164_10183,0,null);var value_10185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10164_10183,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_10184,cljs.core.array_seq([value_10185], 0));
{
var G__10186 = cljs.core.next(seq__10159_10177__$1);
var G__10187 = null;
var G__10188 = 0;
var G__10189 = 0;
seq__10159_10165 = G__10186;
chunk__10160_10166 = G__10187;
count__10161_10167 = G__10188;
i__10162_10168 = G__10189;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__10196_10202 = cljs.core.seq(attrs);var chunk__10197_10203 = null;var count__10198_10204 = 0;var i__10199_10205 = 0;while(true){
if((i__10199_10205 < count__10198_10204))
{var vec__10200_10206 = chunk__10197_10203.cljs$core$IIndexed$_nth$arity$2(null,i__10199_10205);var name_10207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10200_10206,0,null);var value_10208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10200_10206,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_10207,cljs.core.array_seq([value_10208], 0));
{
var G__10209 = seq__10196_10202;
var G__10210 = chunk__10197_10203;
var G__10211 = count__10198_10204;
var G__10212 = (i__10199_10205 + 1);
seq__10196_10202 = G__10209;
chunk__10197_10203 = G__10210;
count__10198_10204 = G__10211;
i__10199_10205 = G__10212;
continue;
}
} else
{var temp__4092__auto___10213 = cljs.core.seq(seq__10196_10202);if(temp__4092__auto___10213)
{var seq__10196_10214__$1 = temp__4092__auto___10213;if(cljs.core.chunked_seq_QMARK_(seq__10196_10214__$1))
{var c__4151__auto___10215 = cljs.core.chunk_first(seq__10196_10214__$1);{
var G__10216 = cljs.core.chunk_rest(seq__10196_10214__$1);
var G__10217 = c__4151__auto___10215;
var G__10218 = cljs.core.count(c__4151__auto___10215);
var G__10219 = 0;
seq__10196_10202 = G__10216;
chunk__10197_10203 = G__10217;
count__10198_10204 = G__10218;
i__10199_10205 = G__10219;
continue;
}
} else
{var vec__10201_10220 = cljs.core.first(seq__10196_10214__$1);var name_10221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10201_10220,0,null);var value_10222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10201_10220,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_10221,cljs.core.array_seq([value_10222], 0));
{
var G__10223 = cljs.core.next(seq__10196_10214__$1);
var G__10224 = null;
var G__10225 = 0;
var G__10226 = 0;
seq__10196_10202 = G__10223;
chunk__10197_10203 = G__10224;
count__10198_10204 = G__10225;
i__10199_10205 = G__10226;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__10231_10235 = cljs.core.seq(domina.nodes(content));var chunk__10232_10236 = null;var count__10233_10237 = 0;var i__10234_10238 = 0;while(true){
if((i__10234_10238 < count__10233_10237))
{var node_10239 = chunk__10232_10236.cljs$core$IIndexed$_nth$arity$2(null,i__10234_10238);goog.dom.classes.add(node_10239,class$);
{
var G__10240 = seq__10231_10235;
var G__10241 = chunk__10232_10236;
var G__10242 = count__10233_10237;
var G__10243 = (i__10234_10238 + 1);
seq__10231_10235 = G__10240;
chunk__10232_10236 = G__10241;
count__10233_10237 = G__10242;
i__10234_10238 = G__10243;
continue;
}
} else
{var temp__4092__auto___10244 = cljs.core.seq(seq__10231_10235);if(temp__4092__auto___10244)
{var seq__10231_10245__$1 = temp__4092__auto___10244;if(cljs.core.chunked_seq_QMARK_(seq__10231_10245__$1))
{var c__4151__auto___10246 = cljs.core.chunk_first(seq__10231_10245__$1);{
var G__10247 = cljs.core.chunk_rest(seq__10231_10245__$1);
var G__10248 = c__4151__auto___10246;
var G__10249 = cljs.core.count(c__4151__auto___10246);
var G__10250 = 0;
seq__10231_10235 = G__10247;
chunk__10232_10236 = G__10248;
count__10233_10237 = G__10249;
i__10234_10238 = G__10250;
continue;
}
} else
{var node_10251 = cljs.core.first(seq__10231_10245__$1);goog.dom.classes.add(node_10251,class$);
{
var G__10252 = cljs.core.next(seq__10231_10245__$1);
var G__10253 = null;
var G__10254 = 0;
var G__10255 = 0;
seq__10231_10235 = G__10252;
chunk__10232_10236 = G__10253;
count__10233_10237 = G__10254;
i__10234_10238 = G__10255;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__10260_10264 = cljs.core.seq(domina.nodes(content));var chunk__10261_10265 = null;var count__10262_10266 = 0;var i__10263_10267 = 0;while(true){
if((i__10263_10267 < count__10262_10266))
{var node_10268 = chunk__10261_10265.cljs$core$IIndexed$_nth$arity$2(null,i__10263_10267);goog.dom.classes.remove(node_10268,class$);
{
var G__10269 = seq__10260_10264;
var G__10270 = chunk__10261_10265;
var G__10271 = count__10262_10266;
var G__10272 = (i__10263_10267 + 1);
seq__10260_10264 = G__10269;
chunk__10261_10265 = G__10270;
count__10262_10266 = G__10271;
i__10263_10267 = G__10272;
continue;
}
} else
{var temp__4092__auto___10273 = cljs.core.seq(seq__10260_10264);if(temp__4092__auto___10273)
{var seq__10260_10274__$1 = temp__4092__auto___10273;if(cljs.core.chunked_seq_QMARK_(seq__10260_10274__$1))
{var c__4151__auto___10275 = cljs.core.chunk_first(seq__10260_10274__$1);{
var G__10276 = cljs.core.chunk_rest(seq__10260_10274__$1);
var G__10277 = c__4151__auto___10275;
var G__10278 = cljs.core.count(c__4151__auto___10275);
var G__10279 = 0;
seq__10260_10264 = G__10276;
chunk__10261_10265 = G__10277;
count__10262_10266 = G__10278;
i__10263_10267 = G__10279;
continue;
}
} else
{var node_10280 = cljs.core.first(seq__10260_10274__$1);goog.dom.classes.remove(node_10280,class$);
{
var G__10281 = cljs.core.next(seq__10260_10274__$1);
var G__10282 = null;
var G__10283 = 0;
var G__10284 = 0;
seq__10260_10264 = G__10281;
chunk__10261_10265 = G__10282;
count__10262_10266 = G__10283;
i__10263_10267 = G__10284;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__10289_10293 = cljs.core.seq(domina.nodes(content));var chunk__10290_10294 = null;var count__10291_10295 = 0;var i__10292_10296 = 0;while(true){
if((i__10292_10296 < count__10291_10295))
{var node_10297 = chunk__10290_10294.cljs$core$IIndexed$_nth$arity$2(null,i__10292_10296);goog.dom.classes.toggle(node_10297,class$);
{
var G__10298 = seq__10289_10293;
var G__10299 = chunk__10290_10294;
var G__10300 = count__10291_10295;
var G__10301 = (i__10292_10296 + 1);
seq__10289_10293 = G__10298;
chunk__10290_10294 = G__10299;
count__10291_10295 = G__10300;
i__10292_10296 = G__10301;
continue;
}
} else
{var temp__4092__auto___10302 = cljs.core.seq(seq__10289_10293);if(temp__4092__auto___10302)
{var seq__10289_10303__$1 = temp__4092__auto___10302;if(cljs.core.chunked_seq_QMARK_(seq__10289_10303__$1))
{var c__4151__auto___10304 = cljs.core.chunk_first(seq__10289_10303__$1);{
var G__10305 = cljs.core.chunk_rest(seq__10289_10303__$1);
var G__10306 = c__4151__auto___10304;
var G__10307 = cljs.core.count(c__4151__auto___10304);
var G__10308 = 0;
seq__10289_10293 = G__10305;
chunk__10290_10294 = G__10306;
count__10291_10295 = G__10307;
i__10292_10296 = G__10308;
continue;
}
} else
{var node_10309 = cljs.core.first(seq__10289_10303__$1);goog.dom.classes.toggle(node_10309,class$);
{
var G__10310 = cljs.core.next(seq__10289_10303__$1);
var G__10311 = null;
var G__10312 = 0;
var G__10313 = 0;
seq__10289_10293 = G__10310;
chunk__10290_10294 = G__10311;
count__10291_10295 = G__10312;
i__10292_10296 = G__10313;
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
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_10322__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__10318_10323 = cljs.core.seq(domina.nodes(content));var chunk__10319_10324 = null;var count__10320_10325 = 0;var i__10321_10326 = 0;while(true){
if((i__10321_10326 < count__10320_10325))
{var node_10327 = chunk__10319_10324.cljs$core$IIndexed$_nth$arity$2(null,i__10321_10326);goog.dom.classes.set(node_10327,classes_10322__$1);
{
var G__10328 = seq__10318_10323;
var G__10329 = chunk__10319_10324;
var G__10330 = count__10320_10325;
var G__10331 = (i__10321_10326 + 1);
seq__10318_10323 = G__10328;
chunk__10319_10324 = G__10329;
count__10320_10325 = G__10330;
i__10321_10326 = G__10331;
continue;
}
} else
{var temp__4092__auto___10332 = cljs.core.seq(seq__10318_10323);if(temp__4092__auto___10332)
{var seq__10318_10333__$1 = temp__4092__auto___10332;if(cljs.core.chunked_seq_QMARK_(seq__10318_10333__$1))
{var c__4151__auto___10334 = cljs.core.chunk_first(seq__10318_10333__$1);{
var G__10335 = cljs.core.chunk_rest(seq__10318_10333__$1);
var G__10336 = c__4151__auto___10334;
var G__10337 = cljs.core.count(c__4151__auto___10334);
var G__10338 = 0;
seq__10318_10323 = G__10335;
chunk__10319_10324 = G__10336;
count__10320_10325 = G__10337;
i__10321_10326 = G__10338;
continue;
}
} else
{var node_10339 = cljs.core.first(seq__10318_10333__$1);goog.dom.classes.set(node_10339,classes_10322__$1);
{
var G__10340 = cljs.core.next(seq__10318_10333__$1);
var G__10341 = null;
var G__10342 = 0;
var G__10343 = 0;
seq__10318_10323 = G__10340;
chunk__10319_10324 = G__10341;
count__10320_10325 = G__10342;
i__10321_10326 = G__10343;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__10348_10352 = cljs.core.seq(domina.nodes(content));var chunk__10349_10353 = null;var count__10350_10354 = 0;var i__10351_10355 = 0;while(true){
if((i__10351_10355 < count__10350_10354))
{var node_10356 = chunk__10349_10353.cljs$core$IIndexed$_nth$arity$2(null,i__10351_10355);goog.dom.setTextContent(node_10356,value);
{
var G__10357 = seq__10348_10352;
var G__10358 = chunk__10349_10353;
var G__10359 = count__10350_10354;
var G__10360 = (i__10351_10355 + 1);
seq__10348_10352 = G__10357;
chunk__10349_10353 = G__10358;
count__10350_10354 = G__10359;
i__10351_10355 = G__10360;
continue;
}
} else
{var temp__4092__auto___10361 = cljs.core.seq(seq__10348_10352);if(temp__4092__auto___10361)
{var seq__10348_10362__$1 = temp__4092__auto___10361;if(cljs.core.chunked_seq_QMARK_(seq__10348_10362__$1))
{var c__4151__auto___10363 = cljs.core.chunk_first(seq__10348_10362__$1);{
var G__10364 = cljs.core.chunk_rest(seq__10348_10362__$1);
var G__10365 = c__4151__auto___10363;
var G__10366 = cljs.core.count(c__4151__auto___10363);
var G__10367 = 0;
seq__10348_10352 = G__10364;
chunk__10349_10353 = G__10365;
count__10350_10354 = G__10366;
i__10351_10355 = G__10367;
continue;
}
} else
{var node_10368 = cljs.core.first(seq__10348_10362__$1);goog.dom.setTextContent(node_10368,value);
{
var G__10369 = cljs.core.next(seq__10348_10362__$1);
var G__10370 = null;
var G__10371 = 0;
var G__10372 = 0;
seq__10348_10352 = G__10369;
chunk__10349_10353 = G__10370;
count__10350_10354 = G__10371;
i__10351_10355 = G__10372;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__10377_10381 = cljs.core.seq(domina.nodes(content));var chunk__10378_10382 = null;var count__10379_10383 = 0;var i__10380_10384 = 0;while(true){
if((i__10380_10384 < count__10379_10383))
{var node_10385 = chunk__10378_10382.cljs$core$IIndexed$_nth$arity$2(null,i__10380_10384);goog.dom.forms.setValue(node_10385,value);
{
var G__10386 = seq__10377_10381;
var G__10387 = chunk__10378_10382;
var G__10388 = count__10379_10383;
var G__10389 = (i__10380_10384 + 1);
seq__10377_10381 = G__10386;
chunk__10378_10382 = G__10387;
count__10379_10383 = G__10388;
i__10380_10384 = G__10389;
continue;
}
} else
{var temp__4092__auto___10390 = cljs.core.seq(seq__10377_10381);if(temp__4092__auto___10390)
{var seq__10377_10391__$1 = temp__4092__auto___10390;if(cljs.core.chunked_seq_QMARK_(seq__10377_10391__$1))
{var c__4151__auto___10392 = cljs.core.chunk_first(seq__10377_10391__$1);{
var G__10393 = cljs.core.chunk_rest(seq__10377_10391__$1);
var G__10394 = c__4151__auto___10392;
var G__10395 = cljs.core.count(c__4151__auto___10392);
var G__10396 = 0;
seq__10377_10381 = G__10393;
chunk__10378_10382 = G__10394;
count__10379_10383 = G__10395;
i__10380_10384 = G__10396;
continue;
}
} else
{var node_10397 = cljs.core.first(seq__10377_10391__$1);goog.dom.forms.setValue(node_10397,value);
{
var G__10398 = cljs.core.next(seq__10377_10391__$1);
var G__10399 = null;
var G__10400 = 0;
var G__10401 = 0;
seq__10377_10381 = G__10398;
chunk__10378_10382 = G__10399;
count__10379_10383 = G__10400;
i__10380_10384 = G__10401;
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
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3397__auto__ = allows_inner_html_QMARK_;if(and__3397__auto__)
{var and__3397__auto____$1 = (function (){var or__3409__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
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
{var value_10412 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__10408_10413 = cljs.core.seq(domina.nodes(content));var chunk__10409_10414 = null;var count__10410_10415 = 0;var i__10411_10416 = 0;while(true){
if((i__10411_10416 < count__10410_10415))
{var node_10417 = chunk__10409_10414.cljs$core$IIndexed$_nth$arity$2(null,i__10411_10416);node_10417.innerHTML = value_10412;
{
var G__10418 = seq__10408_10413;
var G__10419 = chunk__10409_10414;
var G__10420 = count__10410_10415;
var G__10421 = (i__10411_10416 + 1);
seq__10408_10413 = G__10418;
chunk__10409_10414 = G__10419;
count__10410_10415 = G__10420;
i__10411_10416 = G__10421;
continue;
}
} else
{var temp__4092__auto___10422 = cljs.core.seq(seq__10408_10413);if(temp__4092__auto___10422)
{var seq__10408_10423__$1 = temp__4092__auto___10422;if(cljs.core.chunked_seq_QMARK_(seq__10408_10423__$1))
{var c__4151__auto___10424 = cljs.core.chunk_first(seq__10408_10423__$1);{
var G__10425 = cljs.core.chunk_rest(seq__10408_10423__$1);
var G__10426 = c__4151__auto___10424;
var G__10427 = cljs.core.count(c__4151__auto___10424);
var G__10428 = 0;
seq__10408_10413 = G__10425;
chunk__10409_10414 = G__10426;
count__10410_10415 = G__10427;
i__10411_10416 = G__10428;
continue;
}
} else
{var node_10429 = cljs.core.first(seq__10408_10423__$1);node_10429.innerHTML = value_10412;
{
var G__10430 = cljs.core.next(seq__10408_10423__$1);
var G__10431 = null;
var G__10432 = 0;
var G__10433 = 0;
seq__10408_10413 = G__10430;
chunk__10409_10414 = G__10431;
count__10410_10415 = G__10432;
i__10411_10416 = G__10433;
continue;
}
}
} else
{}
}
break;
}
}catch (e10407){if((e10407 instanceof Error))
{var e_10434 = e10407;domina.replace_children_BANG_(content,value_10412);
} else
{if(cljs.core.constant$keyword$6)
{throw e10407;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3397__auto__ = bubble;if(cljs.core.truth_(and__3397__auto__))
{return (value == null);
} else
{return and__3397__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3409__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__10441_10445 = cljs.core.seq(children);var chunk__10442_10446 = null;var count__10443_10447 = 0;var i__10444_10448 = 0;while(true){
if((i__10444_10448 < count__10443_10447))
{var child_10449 = chunk__10442_10446.cljs$core$IIndexed$_nth$arity$2(null,i__10444_10448);frag.appendChild(child_10449);
{
var G__10450 = seq__10441_10445;
var G__10451 = chunk__10442_10446;
var G__10452 = count__10443_10447;
var G__10453 = (i__10444_10448 + 1);
seq__10441_10445 = G__10450;
chunk__10442_10446 = G__10451;
count__10443_10447 = G__10452;
i__10444_10448 = G__10453;
continue;
}
} else
{var temp__4092__auto___10454 = cljs.core.seq(seq__10441_10445);if(temp__4092__auto___10454)
{var seq__10441_10455__$1 = temp__4092__auto___10454;if(cljs.core.chunked_seq_QMARK_(seq__10441_10455__$1))
{var c__4151__auto___10456 = cljs.core.chunk_first(seq__10441_10455__$1);{
var G__10457 = cljs.core.chunk_rest(seq__10441_10455__$1);
var G__10458 = c__4151__auto___10456;
var G__10459 = cljs.core.count(c__4151__auto___10456);
var G__10460 = 0;
seq__10441_10445 = G__10457;
chunk__10442_10446 = G__10458;
count__10443_10447 = G__10459;
i__10444_10448 = G__10460;
continue;
}
} else
{var child_10461 = cljs.core.first(seq__10441_10455__$1);frag.appendChild(child_10461);
{
var G__10462 = cljs.core.next(seq__10441_10455__$1);
var G__10463 = null;
var G__10464 = 0;
var G__10465 = 0;
seq__10441_10445 = G__10462;
chunk__10442_10446 = G__10463;
count__10443_10447 = G__10464;
i__10444_10448 = G__10465;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__10435_SHARP_,p2__10436_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__10435_SHARP_,p2__10436_SHARP_) : f.call(null,p1__10435_SHARP_,p2__10436_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3397__auto__ = obj;if(cljs.core.truth_(and__3397__auto__))
{var and__3397__auto____$1 = cljs.core.not(obj.nodeName);if(and__3397__auto____$1)
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
{if((function (){var G__10467 = list_thing;if(G__10467)
{var bit__4053__auto__ = (G__10467.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__10467.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10467.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10467);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10467);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$7)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__10468 = content;if(G__10468)
{var bit__4053__auto__ = (G__10468.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__10468.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10468.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10468);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10468);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$7)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__10469 = content;if(G__10469)
{var bit__4053__auto__ = (G__10469.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__10469.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10469.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10469);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10469);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$7)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

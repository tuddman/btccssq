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
var opt_wrapper_10306 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_10307 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_10308 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$61,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_10307,table_section_wrapper_10307,opt_wrapper_10306,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_10308,table_section_wrapper_10307,cell_wrapper_10308,opt_wrapper_10306,table_section_wrapper_10307,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_10307]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3397__auto__ = div.firstChild;if(cljs.core.truth_(and__3397__auto__))
{return div.firstChild.childNodes;
} else
{return and__3397__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__10313 = cljs.core.seq(tbody);var chunk__10314 = null;var count__10315 = 0;var i__10316 = 0;while(true){
if((i__10316 < count__10315))
{var child = chunk__10314.cljs$core$IIndexed$_nth$arity$2(null,i__10316);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__10317 = seq__10313;
var G__10318 = chunk__10314;
var G__10319 = count__10315;
var G__10320 = (i__10316 + 1);
seq__10313 = G__10317;
chunk__10314 = G__10318;
count__10315 = G__10319;
i__10316 = G__10320;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10313);if(temp__4092__auto__)
{var seq__10313__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10313__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__10313__$1);{
var G__10321 = cljs.core.chunk_rest(seq__10313__$1);
var G__10322 = c__4151__auto__;
var G__10323 = cljs.core.count(c__4151__auto__);
var G__10324 = 0;
seq__10313 = G__10321;
chunk__10314 = G__10322;
count__10315 = G__10323;
i__10316 = G__10324;
continue;
}
} else
{var child = cljs.core.first(seq__10313__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__10325 = cljs.core.next(seq__10313__$1);
var G__10326 = null;
var G__10327 = 0;
var G__10328 = 0;
seq__10313 = G__10325;
chunk__10314 = G__10326;
count__10315 = G__10327;
i__10316 = G__10328;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__10330 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10330,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10330,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10330,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__10331 = wrapper.lastChild;
var G__10332 = (level - 1);
wrapper = G__10331;
level = G__10332;
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
domina.DomContent = (function (){var obj10334 = {};return obj10334;
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
log_debug.cljs$lang$applyTo = (function (arglist__10335){
var mesg = cljs.core.seq(arglist__10335);
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
log.cljs$lang$applyTo = (function (arglist__10336){
var mesg = cljs.core.seq(arglist__10336);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__10337){
var contents = cljs.core.seq(arglist__10337);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10338_SHARP_){return p1__10338_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__10339_SHARP_,p2__10340_SHARP_){return goog.dom.insertChildAt(p1__10339_SHARP_,p2__10340_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__10339_SHARP_,p2__10340_SHARP_){return goog.dom.insertChildAt(p1__10339_SHARP_,p2__10340_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__10342_SHARP_,p2__10341_SHARP_){return goog.dom.insertSiblingBefore(p2__10341_SHARP_,p1__10342_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__10342_SHARP_,p2__10341_SHARP_){return goog.dom.insertSiblingBefore(p2__10341_SHARP_,p1__10342_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__10344_SHARP_,p2__10343_SHARP_){return goog.dom.insertSiblingAfter(p2__10343_SHARP_,p1__10344_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__10344_SHARP_,p2__10343_SHARP_){return goog.dom.insertSiblingAfter(p2__10343_SHARP_,p1__10344_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__10346_SHARP_,p2__10345_SHARP_){return goog.dom.replaceNode(p2__10345_SHARP_,p1__10346_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__10346_SHARP_,p2__10345_SHARP_){return goog.dom.replaceNode(p2__10345_SHARP_,p1__10346_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__10351_10355 = cljs.core.seq(domina.nodes(content));var chunk__10352_10356 = null;var count__10353_10357 = 0;var i__10354_10358 = 0;while(true){
if((i__10354_10358 < count__10353_10357))
{var n_10359 = chunk__10352_10356.cljs$core$IIndexed$_nth$arity$2(null,i__10354_10358);goog.style.setStyle(n_10359,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__10360 = seq__10351_10355;
var G__10361 = chunk__10352_10356;
var G__10362 = count__10353_10357;
var G__10363 = (i__10354_10358 + 1);
seq__10351_10355 = G__10360;
chunk__10352_10356 = G__10361;
count__10353_10357 = G__10362;
i__10354_10358 = G__10363;
continue;
}
} else
{var temp__4092__auto___10364 = cljs.core.seq(seq__10351_10355);if(temp__4092__auto___10364)
{var seq__10351_10365__$1 = temp__4092__auto___10364;if(cljs.core.chunked_seq_QMARK_(seq__10351_10365__$1))
{var c__4151__auto___10366 = cljs.core.chunk_first(seq__10351_10365__$1);{
var G__10367 = cljs.core.chunk_rest(seq__10351_10365__$1);
var G__10368 = c__4151__auto___10366;
var G__10369 = cljs.core.count(c__4151__auto___10366);
var G__10370 = 0;
seq__10351_10355 = G__10367;
chunk__10352_10356 = G__10368;
count__10353_10357 = G__10369;
i__10354_10358 = G__10370;
continue;
}
} else
{var n_10371 = cljs.core.first(seq__10351_10365__$1);goog.style.setStyle(n_10371,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__10372 = cljs.core.next(seq__10351_10365__$1);
var G__10373 = null;
var G__10374 = 0;
var G__10375 = 0;
seq__10351_10355 = G__10372;
chunk__10352_10356 = G__10373;
count__10353_10357 = G__10374;
i__10354_10358 = G__10375;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10376){
var content = cljs.core.first(arglist__10376);
arglist__10376 = cljs.core.next(arglist__10376);
var name = cljs.core.first(arglist__10376);
var value = cljs.core.rest(arglist__10376);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__10381_10385 = cljs.core.seq(domina.nodes(content));var chunk__10382_10386 = null;var count__10383_10387 = 0;var i__10384_10388 = 0;while(true){
if((i__10384_10388 < count__10383_10387))
{var n_10389 = chunk__10382_10386.cljs$core$IIndexed$_nth$arity$2(null,i__10384_10388);n_10389.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__10390 = seq__10381_10385;
var G__10391 = chunk__10382_10386;
var G__10392 = count__10383_10387;
var G__10393 = (i__10384_10388 + 1);
seq__10381_10385 = G__10390;
chunk__10382_10386 = G__10391;
count__10383_10387 = G__10392;
i__10384_10388 = G__10393;
continue;
}
} else
{var temp__4092__auto___10394 = cljs.core.seq(seq__10381_10385);if(temp__4092__auto___10394)
{var seq__10381_10395__$1 = temp__4092__auto___10394;if(cljs.core.chunked_seq_QMARK_(seq__10381_10395__$1))
{var c__4151__auto___10396 = cljs.core.chunk_first(seq__10381_10395__$1);{
var G__10397 = cljs.core.chunk_rest(seq__10381_10395__$1);
var G__10398 = c__4151__auto___10396;
var G__10399 = cljs.core.count(c__4151__auto___10396);
var G__10400 = 0;
seq__10381_10385 = G__10397;
chunk__10382_10386 = G__10398;
count__10383_10387 = G__10399;
i__10384_10388 = G__10400;
continue;
}
} else
{var n_10401 = cljs.core.first(seq__10381_10395__$1);n_10401.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__10402 = cljs.core.next(seq__10381_10395__$1);
var G__10403 = null;
var G__10404 = 0;
var G__10405 = 0;
seq__10381_10385 = G__10402;
chunk__10382_10386 = G__10403;
count__10383_10387 = G__10404;
i__10384_10388 = G__10405;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__10406){
var content = cljs.core.first(arglist__10406);
arglist__10406 = cljs.core.next(arglist__10406);
var name = cljs.core.first(arglist__10406);
var value = cljs.core.rest(arglist__10406);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__10411_10415 = cljs.core.seq(domina.nodes(content));var chunk__10412_10416 = null;var count__10413_10417 = 0;var i__10414_10418 = 0;while(true){
if((i__10414_10418 < count__10413_10417))
{var n_10419 = chunk__10412_10416.cljs$core$IIndexed$_nth$arity$2(null,i__10414_10418);n_10419.removeAttribute(cljs.core.name(name));
{
var G__10420 = seq__10411_10415;
var G__10421 = chunk__10412_10416;
var G__10422 = count__10413_10417;
var G__10423 = (i__10414_10418 + 1);
seq__10411_10415 = G__10420;
chunk__10412_10416 = G__10421;
count__10413_10417 = G__10422;
i__10414_10418 = G__10423;
continue;
}
} else
{var temp__4092__auto___10424 = cljs.core.seq(seq__10411_10415);if(temp__4092__auto___10424)
{var seq__10411_10425__$1 = temp__4092__auto___10424;if(cljs.core.chunked_seq_QMARK_(seq__10411_10425__$1))
{var c__4151__auto___10426 = cljs.core.chunk_first(seq__10411_10425__$1);{
var G__10427 = cljs.core.chunk_rest(seq__10411_10425__$1);
var G__10428 = c__4151__auto___10426;
var G__10429 = cljs.core.count(c__4151__auto___10426);
var G__10430 = 0;
seq__10411_10415 = G__10427;
chunk__10412_10416 = G__10428;
count__10413_10417 = G__10429;
i__10414_10418 = G__10430;
continue;
}
} else
{var n_10431 = cljs.core.first(seq__10411_10425__$1);n_10431.removeAttribute(cljs.core.name(name));
{
var G__10432 = cljs.core.next(seq__10411_10425__$1);
var G__10433 = null;
var G__10434 = 0;
var G__10435 = 0;
seq__10411_10415 = G__10432;
chunk__10412_10416 = G__10433;
count__10413_10417 = G__10434;
i__10414_10418 = G__10435;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__10437 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10437,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10437,1,null);if(cljs.core.truth_((function (){var and__3397__auto__ = k;if(cljs.core.truth_(and__3397__auto__))
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
{if(cljs.core.constant$keyword$60)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10438_SHARP_){var attr = attrs__$1.item(p1__10438_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__10445_10451 = cljs.core.seq(styles);var chunk__10446_10452 = null;var count__10447_10453 = 0;var i__10448_10454 = 0;while(true){
if((i__10448_10454 < count__10447_10453))
{var vec__10449_10455 = chunk__10446_10452.cljs$core$IIndexed$_nth$arity$2(null,i__10448_10454);var name_10456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10449_10455,0,null);var value_10457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10449_10455,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_10456,cljs.core.array_seq([value_10457], 0));
{
var G__10458 = seq__10445_10451;
var G__10459 = chunk__10446_10452;
var G__10460 = count__10447_10453;
var G__10461 = (i__10448_10454 + 1);
seq__10445_10451 = G__10458;
chunk__10446_10452 = G__10459;
count__10447_10453 = G__10460;
i__10448_10454 = G__10461;
continue;
}
} else
{var temp__4092__auto___10462 = cljs.core.seq(seq__10445_10451);if(temp__4092__auto___10462)
{var seq__10445_10463__$1 = temp__4092__auto___10462;if(cljs.core.chunked_seq_QMARK_(seq__10445_10463__$1))
{var c__4151__auto___10464 = cljs.core.chunk_first(seq__10445_10463__$1);{
var G__10465 = cljs.core.chunk_rest(seq__10445_10463__$1);
var G__10466 = c__4151__auto___10464;
var G__10467 = cljs.core.count(c__4151__auto___10464);
var G__10468 = 0;
seq__10445_10451 = G__10465;
chunk__10446_10452 = G__10466;
count__10447_10453 = G__10467;
i__10448_10454 = G__10468;
continue;
}
} else
{var vec__10450_10469 = cljs.core.first(seq__10445_10463__$1);var name_10470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10450_10469,0,null);var value_10471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10450_10469,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_10470,cljs.core.array_seq([value_10471], 0));
{
var G__10472 = cljs.core.next(seq__10445_10463__$1);
var G__10473 = null;
var G__10474 = 0;
var G__10475 = 0;
seq__10445_10451 = G__10472;
chunk__10446_10452 = G__10473;
count__10447_10453 = G__10474;
i__10448_10454 = G__10475;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__10482_10488 = cljs.core.seq(attrs);var chunk__10483_10489 = null;var count__10484_10490 = 0;var i__10485_10491 = 0;while(true){
if((i__10485_10491 < count__10484_10490))
{var vec__10486_10492 = chunk__10483_10489.cljs$core$IIndexed$_nth$arity$2(null,i__10485_10491);var name_10493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10486_10492,0,null);var value_10494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10486_10492,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_10493,cljs.core.array_seq([value_10494], 0));
{
var G__10495 = seq__10482_10488;
var G__10496 = chunk__10483_10489;
var G__10497 = count__10484_10490;
var G__10498 = (i__10485_10491 + 1);
seq__10482_10488 = G__10495;
chunk__10483_10489 = G__10496;
count__10484_10490 = G__10497;
i__10485_10491 = G__10498;
continue;
}
} else
{var temp__4092__auto___10499 = cljs.core.seq(seq__10482_10488);if(temp__4092__auto___10499)
{var seq__10482_10500__$1 = temp__4092__auto___10499;if(cljs.core.chunked_seq_QMARK_(seq__10482_10500__$1))
{var c__4151__auto___10501 = cljs.core.chunk_first(seq__10482_10500__$1);{
var G__10502 = cljs.core.chunk_rest(seq__10482_10500__$1);
var G__10503 = c__4151__auto___10501;
var G__10504 = cljs.core.count(c__4151__auto___10501);
var G__10505 = 0;
seq__10482_10488 = G__10502;
chunk__10483_10489 = G__10503;
count__10484_10490 = G__10504;
i__10485_10491 = G__10505;
continue;
}
} else
{var vec__10487_10506 = cljs.core.first(seq__10482_10500__$1);var name_10507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487_10506,0,null);var value_10508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487_10506,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_10507,cljs.core.array_seq([value_10508], 0));
{
var G__10509 = cljs.core.next(seq__10482_10500__$1);
var G__10510 = null;
var G__10511 = 0;
var G__10512 = 0;
seq__10482_10488 = G__10509;
chunk__10483_10489 = G__10510;
count__10484_10490 = G__10511;
i__10485_10491 = G__10512;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__10517_10521 = cljs.core.seq(domina.nodes(content));var chunk__10518_10522 = null;var count__10519_10523 = 0;var i__10520_10524 = 0;while(true){
if((i__10520_10524 < count__10519_10523))
{var node_10525 = chunk__10518_10522.cljs$core$IIndexed$_nth$arity$2(null,i__10520_10524);goog.dom.classes.add(node_10525,class$);
{
var G__10526 = seq__10517_10521;
var G__10527 = chunk__10518_10522;
var G__10528 = count__10519_10523;
var G__10529 = (i__10520_10524 + 1);
seq__10517_10521 = G__10526;
chunk__10518_10522 = G__10527;
count__10519_10523 = G__10528;
i__10520_10524 = G__10529;
continue;
}
} else
{var temp__4092__auto___10530 = cljs.core.seq(seq__10517_10521);if(temp__4092__auto___10530)
{var seq__10517_10531__$1 = temp__4092__auto___10530;if(cljs.core.chunked_seq_QMARK_(seq__10517_10531__$1))
{var c__4151__auto___10532 = cljs.core.chunk_first(seq__10517_10531__$1);{
var G__10533 = cljs.core.chunk_rest(seq__10517_10531__$1);
var G__10534 = c__4151__auto___10532;
var G__10535 = cljs.core.count(c__4151__auto___10532);
var G__10536 = 0;
seq__10517_10521 = G__10533;
chunk__10518_10522 = G__10534;
count__10519_10523 = G__10535;
i__10520_10524 = G__10536;
continue;
}
} else
{var node_10537 = cljs.core.first(seq__10517_10531__$1);goog.dom.classes.add(node_10537,class$);
{
var G__10538 = cljs.core.next(seq__10517_10531__$1);
var G__10539 = null;
var G__10540 = 0;
var G__10541 = 0;
seq__10517_10521 = G__10538;
chunk__10518_10522 = G__10539;
count__10519_10523 = G__10540;
i__10520_10524 = G__10541;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__10546_10550 = cljs.core.seq(domina.nodes(content));var chunk__10547_10551 = null;var count__10548_10552 = 0;var i__10549_10553 = 0;while(true){
if((i__10549_10553 < count__10548_10552))
{var node_10554 = chunk__10547_10551.cljs$core$IIndexed$_nth$arity$2(null,i__10549_10553);goog.dom.classes.remove(node_10554,class$);
{
var G__10555 = seq__10546_10550;
var G__10556 = chunk__10547_10551;
var G__10557 = count__10548_10552;
var G__10558 = (i__10549_10553 + 1);
seq__10546_10550 = G__10555;
chunk__10547_10551 = G__10556;
count__10548_10552 = G__10557;
i__10549_10553 = G__10558;
continue;
}
} else
{var temp__4092__auto___10559 = cljs.core.seq(seq__10546_10550);if(temp__4092__auto___10559)
{var seq__10546_10560__$1 = temp__4092__auto___10559;if(cljs.core.chunked_seq_QMARK_(seq__10546_10560__$1))
{var c__4151__auto___10561 = cljs.core.chunk_first(seq__10546_10560__$1);{
var G__10562 = cljs.core.chunk_rest(seq__10546_10560__$1);
var G__10563 = c__4151__auto___10561;
var G__10564 = cljs.core.count(c__4151__auto___10561);
var G__10565 = 0;
seq__10546_10550 = G__10562;
chunk__10547_10551 = G__10563;
count__10548_10552 = G__10564;
i__10549_10553 = G__10565;
continue;
}
} else
{var node_10566 = cljs.core.first(seq__10546_10560__$1);goog.dom.classes.remove(node_10566,class$);
{
var G__10567 = cljs.core.next(seq__10546_10560__$1);
var G__10568 = null;
var G__10569 = 0;
var G__10570 = 0;
seq__10546_10550 = G__10567;
chunk__10547_10551 = G__10568;
count__10548_10552 = G__10569;
i__10549_10553 = G__10570;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__10575_10579 = cljs.core.seq(domina.nodes(content));var chunk__10576_10580 = null;var count__10577_10581 = 0;var i__10578_10582 = 0;while(true){
if((i__10578_10582 < count__10577_10581))
{var node_10583 = chunk__10576_10580.cljs$core$IIndexed$_nth$arity$2(null,i__10578_10582);goog.dom.classes.toggle(node_10583,class$);
{
var G__10584 = seq__10575_10579;
var G__10585 = chunk__10576_10580;
var G__10586 = count__10577_10581;
var G__10587 = (i__10578_10582 + 1);
seq__10575_10579 = G__10584;
chunk__10576_10580 = G__10585;
count__10577_10581 = G__10586;
i__10578_10582 = G__10587;
continue;
}
} else
{var temp__4092__auto___10588 = cljs.core.seq(seq__10575_10579);if(temp__4092__auto___10588)
{var seq__10575_10589__$1 = temp__4092__auto___10588;if(cljs.core.chunked_seq_QMARK_(seq__10575_10589__$1))
{var c__4151__auto___10590 = cljs.core.chunk_first(seq__10575_10589__$1);{
var G__10591 = cljs.core.chunk_rest(seq__10575_10589__$1);
var G__10592 = c__4151__auto___10590;
var G__10593 = cljs.core.count(c__4151__auto___10590);
var G__10594 = 0;
seq__10575_10579 = G__10591;
chunk__10576_10580 = G__10592;
count__10577_10581 = G__10593;
i__10578_10582 = G__10594;
continue;
}
} else
{var node_10595 = cljs.core.first(seq__10575_10589__$1);goog.dom.classes.toggle(node_10595,class$);
{
var G__10596 = cljs.core.next(seq__10575_10589__$1);
var G__10597 = null;
var G__10598 = 0;
var G__10599 = 0;
seq__10575_10579 = G__10596;
chunk__10576_10580 = G__10597;
count__10577_10581 = G__10598;
i__10578_10582 = G__10599;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_10608__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__10604_10609 = cljs.core.seq(domina.nodes(content));var chunk__10605_10610 = null;var count__10606_10611 = 0;var i__10607_10612 = 0;while(true){
if((i__10607_10612 < count__10606_10611))
{var node_10613 = chunk__10605_10610.cljs$core$IIndexed$_nth$arity$2(null,i__10607_10612);goog.dom.classes.set(node_10613,classes_10608__$1);
{
var G__10614 = seq__10604_10609;
var G__10615 = chunk__10605_10610;
var G__10616 = count__10606_10611;
var G__10617 = (i__10607_10612 + 1);
seq__10604_10609 = G__10614;
chunk__10605_10610 = G__10615;
count__10606_10611 = G__10616;
i__10607_10612 = G__10617;
continue;
}
} else
{var temp__4092__auto___10618 = cljs.core.seq(seq__10604_10609);if(temp__4092__auto___10618)
{var seq__10604_10619__$1 = temp__4092__auto___10618;if(cljs.core.chunked_seq_QMARK_(seq__10604_10619__$1))
{var c__4151__auto___10620 = cljs.core.chunk_first(seq__10604_10619__$1);{
var G__10621 = cljs.core.chunk_rest(seq__10604_10619__$1);
var G__10622 = c__4151__auto___10620;
var G__10623 = cljs.core.count(c__4151__auto___10620);
var G__10624 = 0;
seq__10604_10609 = G__10621;
chunk__10605_10610 = G__10622;
count__10606_10611 = G__10623;
i__10607_10612 = G__10624;
continue;
}
} else
{var node_10625 = cljs.core.first(seq__10604_10619__$1);goog.dom.classes.set(node_10625,classes_10608__$1);
{
var G__10626 = cljs.core.next(seq__10604_10619__$1);
var G__10627 = null;
var G__10628 = 0;
var G__10629 = 0;
seq__10604_10609 = G__10626;
chunk__10605_10610 = G__10627;
count__10606_10611 = G__10628;
i__10607_10612 = G__10629;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__10634_10638 = cljs.core.seq(domina.nodes(content));var chunk__10635_10639 = null;var count__10636_10640 = 0;var i__10637_10641 = 0;while(true){
if((i__10637_10641 < count__10636_10640))
{var node_10642 = chunk__10635_10639.cljs$core$IIndexed$_nth$arity$2(null,i__10637_10641);goog.dom.setTextContent(node_10642,value);
{
var G__10643 = seq__10634_10638;
var G__10644 = chunk__10635_10639;
var G__10645 = count__10636_10640;
var G__10646 = (i__10637_10641 + 1);
seq__10634_10638 = G__10643;
chunk__10635_10639 = G__10644;
count__10636_10640 = G__10645;
i__10637_10641 = G__10646;
continue;
}
} else
{var temp__4092__auto___10647 = cljs.core.seq(seq__10634_10638);if(temp__4092__auto___10647)
{var seq__10634_10648__$1 = temp__4092__auto___10647;if(cljs.core.chunked_seq_QMARK_(seq__10634_10648__$1))
{var c__4151__auto___10649 = cljs.core.chunk_first(seq__10634_10648__$1);{
var G__10650 = cljs.core.chunk_rest(seq__10634_10648__$1);
var G__10651 = c__4151__auto___10649;
var G__10652 = cljs.core.count(c__4151__auto___10649);
var G__10653 = 0;
seq__10634_10638 = G__10650;
chunk__10635_10639 = G__10651;
count__10636_10640 = G__10652;
i__10637_10641 = G__10653;
continue;
}
} else
{var node_10654 = cljs.core.first(seq__10634_10648__$1);goog.dom.setTextContent(node_10654,value);
{
var G__10655 = cljs.core.next(seq__10634_10648__$1);
var G__10656 = null;
var G__10657 = 0;
var G__10658 = 0;
seq__10634_10638 = G__10655;
chunk__10635_10639 = G__10656;
count__10636_10640 = G__10657;
i__10637_10641 = G__10658;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__10663_10667 = cljs.core.seq(domina.nodes(content));var chunk__10664_10668 = null;var count__10665_10669 = 0;var i__10666_10670 = 0;while(true){
if((i__10666_10670 < count__10665_10669))
{var node_10671 = chunk__10664_10668.cljs$core$IIndexed$_nth$arity$2(null,i__10666_10670);goog.dom.forms.setValue(node_10671,value);
{
var G__10672 = seq__10663_10667;
var G__10673 = chunk__10664_10668;
var G__10674 = count__10665_10669;
var G__10675 = (i__10666_10670 + 1);
seq__10663_10667 = G__10672;
chunk__10664_10668 = G__10673;
count__10665_10669 = G__10674;
i__10666_10670 = G__10675;
continue;
}
} else
{var temp__4092__auto___10676 = cljs.core.seq(seq__10663_10667);if(temp__4092__auto___10676)
{var seq__10663_10677__$1 = temp__4092__auto___10676;if(cljs.core.chunked_seq_QMARK_(seq__10663_10677__$1))
{var c__4151__auto___10678 = cljs.core.chunk_first(seq__10663_10677__$1);{
var G__10679 = cljs.core.chunk_rest(seq__10663_10677__$1);
var G__10680 = c__4151__auto___10678;
var G__10681 = cljs.core.count(c__4151__auto___10678);
var G__10682 = 0;
seq__10663_10667 = G__10679;
chunk__10664_10668 = G__10680;
count__10665_10669 = G__10681;
i__10666_10670 = G__10682;
continue;
}
} else
{var node_10683 = cljs.core.first(seq__10663_10677__$1);goog.dom.forms.setValue(node_10683,value);
{
var G__10684 = cljs.core.next(seq__10663_10677__$1);
var G__10685 = null;
var G__10686 = 0;
var G__10687 = 0;
seq__10663_10667 = G__10684;
chunk__10664_10668 = G__10685;
count__10665_10669 = G__10686;
i__10666_10670 = G__10687;
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
{var value_10698 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__10694_10699 = cljs.core.seq(domina.nodes(content));var chunk__10695_10700 = null;var count__10696_10701 = 0;var i__10697_10702 = 0;while(true){
if((i__10697_10702 < count__10696_10701))
{var node_10703 = chunk__10695_10700.cljs$core$IIndexed$_nth$arity$2(null,i__10697_10702);node_10703.innerHTML = value_10698;
{
var G__10704 = seq__10694_10699;
var G__10705 = chunk__10695_10700;
var G__10706 = count__10696_10701;
var G__10707 = (i__10697_10702 + 1);
seq__10694_10699 = G__10704;
chunk__10695_10700 = G__10705;
count__10696_10701 = G__10706;
i__10697_10702 = G__10707;
continue;
}
} else
{var temp__4092__auto___10708 = cljs.core.seq(seq__10694_10699);if(temp__4092__auto___10708)
{var seq__10694_10709__$1 = temp__4092__auto___10708;if(cljs.core.chunked_seq_QMARK_(seq__10694_10709__$1))
{var c__4151__auto___10710 = cljs.core.chunk_first(seq__10694_10709__$1);{
var G__10711 = cljs.core.chunk_rest(seq__10694_10709__$1);
var G__10712 = c__4151__auto___10710;
var G__10713 = cljs.core.count(c__4151__auto___10710);
var G__10714 = 0;
seq__10694_10699 = G__10711;
chunk__10695_10700 = G__10712;
count__10696_10701 = G__10713;
i__10697_10702 = G__10714;
continue;
}
} else
{var node_10715 = cljs.core.first(seq__10694_10709__$1);node_10715.innerHTML = value_10698;
{
var G__10716 = cljs.core.next(seq__10694_10709__$1);
var G__10717 = null;
var G__10718 = 0;
var G__10719 = 0;
seq__10694_10699 = G__10716;
chunk__10695_10700 = G__10717;
count__10696_10701 = G__10718;
i__10697_10702 = G__10719;
continue;
}
}
} else
{}
}
break;
}
}catch (e10693){if((e10693 instanceof Error))
{var e_10720 = e10693;domina.replace_children_BANG_(content,value_10698);
} else
{if(cljs.core.constant$keyword$60)
{throw e10693;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__10727_10731 = cljs.core.seq(children);var chunk__10728_10732 = null;var count__10729_10733 = 0;var i__10730_10734 = 0;while(true){
if((i__10730_10734 < count__10729_10733))
{var child_10735 = chunk__10728_10732.cljs$core$IIndexed$_nth$arity$2(null,i__10730_10734);frag.appendChild(child_10735);
{
var G__10736 = seq__10727_10731;
var G__10737 = chunk__10728_10732;
var G__10738 = count__10729_10733;
var G__10739 = (i__10730_10734 + 1);
seq__10727_10731 = G__10736;
chunk__10728_10732 = G__10737;
count__10729_10733 = G__10738;
i__10730_10734 = G__10739;
continue;
}
} else
{var temp__4092__auto___10740 = cljs.core.seq(seq__10727_10731);if(temp__4092__auto___10740)
{var seq__10727_10741__$1 = temp__4092__auto___10740;if(cljs.core.chunked_seq_QMARK_(seq__10727_10741__$1))
{var c__4151__auto___10742 = cljs.core.chunk_first(seq__10727_10741__$1);{
var G__10743 = cljs.core.chunk_rest(seq__10727_10741__$1);
var G__10744 = c__4151__auto___10742;
var G__10745 = cljs.core.count(c__4151__auto___10742);
var G__10746 = 0;
seq__10727_10731 = G__10743;
chunk__10728_10732 = G__10744;
count__10729_10733 = G__10745;
i__10730_10734 = G__10746;
continue;
}
} else
{var child_10747 = cljs.core.first(seq__10727_10741__$1);frag.appendChild(child_10747);
{
var G__10748 = cljs.core.next(seq__10727_10741__$1);
var G__10749 = null;
var G__10750 = 0;
var G__10751 = 0;
seq__10727_10731 = G__10748;
chunk__10728_10732 = G__10749;
count__10729_10733 = G__10750;
i__10730_10734 = G__10751;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__10721_SHARP_,p2__10722_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__10721_SHARP_,p2__10722_SHARP_) : f.call(null,p1__10721_SHARP_,p2__10722_SHARP_));
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
{if((function (){var G__10753 = list_thing;if(G__10753)
{var bit__4053__auto__ = (G__10753.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__10753.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10753.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10753);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10753);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$61)
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
{if((function (){var G__10754 = content;if(G__10754)
{var bit__4053__auto__ = (G__10754.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__10754.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10754.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10754);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10754);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$61)
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
{if((function (){var G__10755 = content;if(G__10755)
{var bit__4053__auto__ = (G__10755.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__10755.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10755.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10755);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__10755);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$61)
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

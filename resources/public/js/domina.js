// Compiled by ClojureScript 0.0-2127
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
var opt_wrapper_9331 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_9332 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_9333 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_9332,table_section_wrapper_9332,opt_wrapper_9331,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_9333,table_section_wrapper_9332,cell_wrapper_9333,opt_wrapper_9331,table_section_wrapper_9332,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_9332]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3385__auto__ = div.firstChild;if(cljs.core.truth_(and__3385__auto__))
{return div.firstChild.childNodes;
} else
{return and__3385__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__9338 = cljs.core.seq.call(null,tbody);var chunk__9339 = null;var count__9340 = 0;var i__9341 = 0;while(true){
if((i__9341 < count__9340))
{var child = cljs.core._nth.call(null,chunk__9339,i__9341);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__9342 = seq__9338;
var G__9343 = chunk__9339;
var G__9344 = count__9340;
var G__9345 = (i__9341 + 1);
seq__9338 = G__9342;
chunk__9339 = G__9343;
count__9340 = G__9344;
i__9341 = G__9345;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9338);if(temp__4092__auto__)
{var seq__9338__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9338__$1))
{var c__4126__auto__ = cljs.core.chunk_first.call(null,seq__9338__$1);{
var G__9346 = cljs.core.chunk_rest.call(null,seq__9338__$1);
var G__9347 = c__4126__auto__;
var G__9348 = cljs.core.count.call(null,c__4126__auto__);
var G__9349 = 0;
seq__9338 = G__9346;
chunk__9339 = G__9347;
count__9340 = G__9348;
i__9341 = G__9349;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__9338__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__9350 = cljs.core.next.call(null,seq__9338__$1);
var G__9351 = null;
var G__9352 = 0;
var G__9353 = 0;
seq__9338 = G__9350;
chunk__9339 = G__9351;
count__9340 = G__9352;
i__9341 = G__9353;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__9355 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__9355,0,null);var start_wrap = cljs.core.nth.call(null,vec__9355,1,null);var end_wrap = cljs.core.nth.call(null,vec__9355,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__9356 = wrapper.lastChild;
var G__9357 = (level - 1);
wrapper = G__9356;
level = G__9357;
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
if(cljs.core.truth_((function (){var and__3385__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3385__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3385__auto__;
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
domina.DomContent = (function (){var obj9359 = {};return obj9359;
})();
domina.nodes = (function nodes(content){if((function (){var and__3385__auto__ = content;if(and__3385__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3385__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4005__auto__ = (((content == null))?null:content);return (function (){var or__3397__auto__ = (domina.nodes[goog.typeOf(x__4005__auto__)]);if(or__3397__auto__)
{return or__3397__auto__;
} else
{var or__3397__auto____$1 = (domina.nodes["_"]);if(or__3397__auto____$1)
{return or__3397__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3385__auto__ = nodeseq;if(and__3385__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3385__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4005__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3397__auto__ = (domina.single_node[goog.typeOf(x__4005__auto__)]);if(or__3397__auto__)
{return or__3397__auto__;
} else
{var or__3397__auto____$1 = (domina.single_node["_"]);if(or__3397__auto____$1)
{return or__3397__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3385__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3385__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3385__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__9360){
var mesg = cljs.core.seq(arglist__9360);
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
log.cljs$lang$applyTo = (function (arglist__9361){
var mesg = cljs.core.seq(arglist__9361);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__9362){
var contents = cljs.core.seq(arglist__9362);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__9363_SHARP_){return p1__9363_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__9364_SHARP_,p2__9365_SHARP_){return goog.dom.insertChildAt(p1__9364_SHARP_,p2__9365_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__9367_SHARP_,p2__9366_SHARP_){return goog.dom.insertSiblingBefore(p2__9366_SHARP_,p1__9367_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__9369_SHARP_,p2__9368_SHARP_){return goog.dom.insertSiblingAfter(p2__9368_SHARP_,p1__9369_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__9371_SHARP_,p2__9370_SHARP_){return goog.dom.replaceNode(p2__9370_SHARP_,p1__9371_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__9376_9380 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9377_9381 = null;var count__9378_9382 = 0;var i__9379_9383 = 0;while(true){
if((i__9379_9383 < count__9378_9382))
{var n_9384 = cljs.core._nth.call(null,chunk__9377_9381,i__9379_9383);goog.style.setStyle(n_9384,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9385 = seq__9376_9380;
var G__9386 = chunk__9377_9381;
var G__9387 = count__9378_9382;
var G__9388 = (i__9379_9383 + 1);
seq__9376_9380 = G__9385;
chunk__9377_9381 = G__9386;
count__9378_9382 = G__9387;
i__9379_9383 = G__9388;
continue;
}
} else
{var temp__4092__auto___9389 = cljs.core.seq.call(null,seq__9376_9380);if(temp__4092__auto___9389)
{var seq__9376_9390__$1 = temp__4092__auto___9389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9376_9390__$1))
{var c__4126__auto___9391 = cljs.core.chunk_first.call(null,seq__9376_9390__$1);{
var G__9392 = cljs.core.chunk_rest.call(null,seq__9376_9390__$1);
var G__9393 = c__4126__auto___9391;
var G__9394 = cljs.core.count.call(null,c__4126__auto___9391);
var G__9395 = 0;
seq__9376_9380 = G__9392;
chunk__9377_9381 = G__9393;
count__9378_9382 = G__9394;
i__9379_9383 = G__9395;
continue;
}
} else
{var n_9396 = cljs.core.first.call(null,seq__9376_9390__$1);goog.style.setStyle(n_9396,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9397 = cljs.core.next.call(null,seq__9376_9390__$1);
var G__9398 = null;
var G__9399 = 0;
var G__9400 = 0;
seq__9376_9380 = G__9397;
chunk__9377_9381 = G__9398;
count__9378_9382 = G__9399;
i__9379_9383 = G__9400;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9401){
var content = cljs.core.first(arglist__9401);
arglist__9401 = cljs.core.next(arglist__9401);
var name = cljs.core.first(arglist__9401);
var value = cljs.core.rest(arglist__9401);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__9406_9410 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9407_9411 = null;var count__9408_9412 = 0;var i__9409_9413 = 0;while(true){
if((i__9409_9413 < count__9408_9412))
{var n_9414 = cljs.core._nth.call(null,chunk__9407_9411,i__9409_9413);n_9414.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9415 = seq__9406_9410;
var G__9416 = chunk__9407_9411;
var G__9417 = count__9408_9412;
var G__9418 = (i__9409_9413 + 1);
seq__9406_9410 = G__9415;
chunk__9407_9411 = G__9416;
count__9408_9412 = G__9417;
i__9409_9413 = G__9418;
continue;
}
} else
{var temp__4092__auto___9419 = cljs.core.seq.call(null,seq__9406_9410);if(temp__4092__auto___9419)
{var seq__9406_9420__$1 = temp__4092__auto___9419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9406_9420__$1))
{var c__4126__auto___9421 = cljs.core.chunk_first.call(null,seq__9406_9420__$1);{
var G__9422 = cljs.core.chunk_rest.call(null,seq__9406_9420__$1);
var G__9423 = c__4126__auto___9421;
var G__9424 = cljs.core.count.call(null,c__4126__auto___9421);
var G__9425 = 0;
seq__9406_9410 = G__9422;
chunk__9407_9411 = G__9423;
count__9408_9412 = G__9424;
i__9409_9413 = G__9425;
continue;
}
} else
{var n_9426 = cljs.core.first.call(null,seq__9406_9420__$1);n_9426.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9427 = cljs.core.next.call(null,seq__9406_9420__$1);
var G__9428 = null;
var G__9429 = 0;
var G__9430 = 0;
seq__9406_9410 = G__9427;
chunk__9407_9411 = G__9428;
count__9408_9412 = G__9429;
i__9409_9413 = G__9430;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__9431){
var content = cljs.core.first(arglist__9431);
arglist__9431 = cljs.core.next(arglist__9431);
var name = cljs.core.first(arglist__9431);
var value = cljs.core.rest(arglist__9431);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__9436_9440 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9437_9441 = null;var count__9438_9442 = 0;var i__9439_9443 = 0;while(true){
if((i__9439_9443 < count__9438_9442))
{var n_9444 = cljs.core._nth.call(null,chunk__9437_9441,i__9439_9443);n_9444.removeAttribute(cljs.core.name.call(null,name));
{
var G__9445 = seq__9436_9440;
var G__9446 = chunk__9437_9441;
var G__9447 = count__9438_9442;
var G__9448 = (i__9439_9443 + 1);
seq__9436_9440 = G__9445;
chunk__9437_9441 = G__9446;
count__9438_9442 = G__9447;
i__9439_9443 = G__9448;
continue;
}
} else
{var temp__4092__auto___9449 = cljs.core.seq.call(null,seq__9436_9440);if(temp__4092__auto___9449)
{var seq__9436_9450__$1 = temp__4092__auto___9449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9436_9450__$1))
{var c__4126__auto___9451 = cljs.core.chunk_first.call(null,seq__9436_9450__$1);{
var G__9452 = cljs.core.chunk_rest.call(null,seq__9436_9450__$1);
var G__9453 = c__4126__auto___9451;
var G__9454 = cljs.core.count.call(null,c__4126__auto___9451);
var G__9455 = 0;
seq__9436_9440 = G__9452;
chunk__9437_9441 = G__9453;
count__9438_9442 = G__9454;
i__9439_9443 = G__9455;
continue;
}
} else
{var n_9456 = cljs.core.first.call(null,seq__9436_9450__$1);n_9456.removeAttribute(cljs.core.name.call(null,name));
{
var G__9457 = cljs.core.next.call(null,seq__9436_9450__$1);
var G__9458 = null;
var G__9459 = 0;
var G__9460 = 0;
seq__9436_9440 = G__9457;
chunk__9437_9441 = G__9458;
count__9438_9442 = G__9459;
i__9439_9443 = G__9460;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__9462 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__9462,0,null);var v = cljs.core.nth.call(null,vec__9462,1,null);if(cljs.core.truth_((function (){var and__3385__auto__ = k;if(cljs.core.truth_(and__3385__auto__))
{return v;
} else
{return and__3385__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__9463_SHARP_){var attr = attrs__$1.item(p1__9463_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__9470_9476 = cljs.core.seq.call(null,styles);var chunk__9471_9477 = null;var count__9472_9478 = 0;var i__9473_9479 = 0;while(true){
if((i__9473_9479 < count__9472_9478))
{var vec__9474_9480 = cljs.core._nth.call(null,chunk__9471_9477,i__9473_9479);var name_9481 = cljs.core.nth.call(null,vec__9474_9480,0,null);var value_9482 = cljs.core.nth.call(null,vec__9474_9480,1,null);domina.set_style_BANG_.call(null,content,name_9481,value_9482);
{
var G__9483 = seq__9470_9476;
var G__9484 = chunk__9471_9477;
var G__9485 = count__9472_9478;
var G__9486 = (i__9473_9479 + 1);
seq__9470_9476 = G__9483;
chunk__9471_9477 = G__9484;
count__9472_9478 = G__9485;
i__9473_9479 = G__9486;
continue;
}
} else
{var temp__4092__auto___9487 = cljs.core.seq.call(null,seq__9470_9476);if(temp__4092__auto___9487)
{var seq__9470_9488__$1 = temp__4092__auto___9487;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9470_9488__$1))
{var c__4126__auto___9489 = cljs.core.chunk_first.call(null,seq__9470_9488__$1);{
var G__9490 = cljs.core.chunk_rest.call(null,seq__9470_9488__$1);
var G__9491 = c__4126__auto___9489;
var G__9492 = cljs.core.count.call(null,c__4126__auto___9489);
var G__9493 = 0;
seq__9470_9476 = G__9490;
chunk__9471_9477 = G__9491;
count__9472_9478 = G__9492;
i__9473_9479 = G__9493;
continue;
}
} else
{var vec__9475_9494 = cljs.core.first.call(null,seq__9470_9488__$1);var name_9495 = cljs.core.nth.call(null,vec__9475_9494,0,null);var value_9496 = cljs.core.nth.call(null,vec__9475_9494,1,null);domina.set_style_BANG_.call(null,content,name_9495,value_9496);
{
var G__9497 = cljs.core.next.call(null,seq__9470_9488__$1);
var G__9498 = null;
var G__9499 = 0;
var G__9500 = 0;
seq__9470_9476 = G__9497;
chunk__9471_9477 = G__9498;
count__9472_9478 = G__9499;
i__9473_9479 = G__9500;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__9507_9513 = cljs.core.seq.call(null,attrs);var chunk__9508_9514 = null;var count__9509_9515 = 0;var i__9510_9516 = 0;while(true){
if((i__9510_9516 < count__9509_9515))
{var vec__9511_9517 = cljs.core._nth.call(null,chunk__9508_9514,i__9510_9516);var name_9518 = cljs.core.nth.call(null,vec__9511_9517,0,null);var value_9519 = cljs.core.nth.call(null,vec__9511_9517,1,null);domina.set_attr_BANG_.call(null,content,name_9518,value_9519);
{
var G__9520 = seq__9507_9513;
var G__9521 = chunk__9508_9514;
var G__9522 = count__9509_9515;
var G__9523 = (i__9510_9516 + 1);
seq__9507_9513 = G__9520;
chunk__9508_9514 = G__9521;
count__9509_9515 = G__9522;
i__9510_9516 = G__9523;
continue;
}
} else
{var temp__4092__auto___9524 = cljs.core.seq.call(null,seq__9507_9513);if(temp__4092__auto___9524)
{var seq__9507_9525__$1 = temp__4092__auto___9524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9507_9525__$1))
{var c__4126__auto___9526 = cljs.core.chunk_first.call(null,seq__9507_9525__$1);{
var G__9527 = cljs.core.chunk_rest.call(null,seq__9507_9525__$1);
var G__9528 = c__4126__auto___9526;
var G__9529 = cljs.core.count.call(null,c__4126__auto___9526);
var G__9530 = 0;
seq__9507_9513 = G__9527;
chunk__9508_9514 = G__9528;
count__9509_9515 = G__9529;
i__9510_9516 = G__9530;
continue;
}
} else
{var vec__9512_9531 = cljs.core.first.call(null,seq__9507_9525__$1);var name_9532 = cljs.core.nth.call(null,vec__9512_9531,0,null);var value_9533 = cljs.core.nth.call(null,vec__9512_9531,1,null);domina.set_attr_BANG_.call(null,content,name_9532,value_9533);
{
var G__9534 = cljs.core.next.call(null,seq__9507_9525__$1);
var G__9535 = null;
var G__9536 = 0;
var G__9537 = 0;
seq__9507_9513 = G__9534;
chunk__9508_9514 = G__9535;
count__9509_9515 = G__9536;
i__9510_9516 = G__9537;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__9542_9546 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9543_9547 = null;var count__9544_9548 = 0;var i__9545_9549 = 0;while(true){
if((i__9545_9549 < count__9544_9548))
{var node_9550 = cljs.core._nth.call(null,chunk__9543_9547,i__9545_9549);goog.dom.classes.add(node_9550,class$);
{
var G__9551 = seq__9542_9546;
var G__9552 = chunk__9543_9547;
var G__9553 = count__9544_9548;
var G__9554 = (i__9545_9549 + 1);
seq__9542_9546 = G__9551;
chunk__9543_9547 = G__9552;
count__9544_9548 = G__9553;
i__9545_9549 = G__9554;
continue;
}
} else
{var temp__4092__auto___9555 = cljs.core.seq.call(null,seq__9542_9546);if(temp__4092__auto___9555)
{var seq__9542_9556__$1 = temp__4092__auto___9555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9542_9556__$1))
{var c__4126__auto___9557 = cljs.core.chunk_first.call(null,seq__9542_9556__$1);{
var G__9558 = cljs.core.chunk_rest.call(null,seq__9542_9556__$1);
var G__9559 = c__4126__auto___9557;
var G__9560 = cljs.core.count.call(null,c__4126__auto___9557);
var G__9561 = 0;
seq__9542_9546 = G__9558;
chunk__9543_9547 = G__9559;
count__9544_9548 = G__9560;
i__9545_9549 = G__9561;
continue;
}
} else
{var node_9562 = cljs.core.first.call(null,seq__9542_9556__$1);goog.dom.classes.add(node_9562,class$);
{
var G__9563 = cljs.core.next.call(null,seq__9542_9556__$1);
var G__9564 = null;
var G__9565 = 0;
var G__9566 = 0;
seq__9542_9546 = G__9563;
chunk__9543_9547 = G__9564;
count__9544_9548 = G__9565;
i__9545_9549 = G__9566;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__9571_9575 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9572_9576 = null;var count__9573_9577 = 0;var i__9574_9578 = 0;while(true){
if((i__9574_9578 < count__9573_9577))
{var node_9579 = cljs.core._nth.call(null,chunk__9572_9576,i__9574_9578);goog.dom.classes.remove(node_9579,class$);
{
var G__9580 = seq__9571_9575;
var G__9581 = chunk__9572_9576;
var G__9582 = count__9573_9577;
var G__9583 = (i__9574_9578 + 1);
seq__9571_9575 = G__9580;
chunk__9572_9576 = G__9581;
count__9573_9577 = G__9582;
i__9574_9578 = G__9583;
continue;
}
} else
{var temp__4092__auto___9584 = cljs.core.seq.call(null,seq__9571_9575);if(temp__4092__auto___9584)
{var seq__9571_9585__$1 = temp__4092__auto___9584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9571_9585__$1))
{var c__4126__auto___9586 = cljs.core.chunk_first.call(null,seq__9571_9585__$1);{
var G__9587 = cljs.core.chunk_rest.call(null,seq__9571_9585__$1);
var G__9588 = c__4126__auto___9586;
var G__9589 = cljs.core.count.call(null,c__4126__auto___9586);
var G__9590 = 0;
seq__9571_9575 = G__9587;
chunk__9572_9576 = G__9588;
count__9573_9577 = G__9589;
i__9574_9578 = G__9590;
continue;
}
} else
{var node_9591 = cljs.core.first.call(null,seq__9571_9585__$1);goog.dom.classes.remove(node_9591,class$);
{
var G__9592 = cljs.core.next.call(null,seq__9571_9585__$1);
var G__9593 = null;
var G__9594 = 0;
var G__9595 = 0;
seq__9571_9575 = G__9592;
chunk__9572_9576 = G__9593;
count__9573_9577 = G__9594;
i__9574_9578 = G__9595;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__9600_9604 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9601_9605 = null;var count__9602_9606 = 0;var i__9603_9607 = 0;while(true){
if((i__9603_9607 < count__9602_9606))
{var node_9608 = cljs.core._nth.call(null,chunk__9601_9605,i__9603_9607);goog.dom.classes.toggle(node_9608,class$);
{
var G__9609 = seq__9600_9604;
var G__9610 = chunk__9601_9605;
var G__9611 = count__9602_9606;
var G__9612 = (i__9603_9607 + 1);
seq__9600_9604 = G__9609;
chunk__9601_9605 = G__9610;
count__9602_9606 = G__9611;
i__9603_9607 = G__9612;
continue;
}
} else
{var temp__4092__auto___9613 = cljs.core.seq.call(null,seq__9600_9604);if(temp__4092__auto___9613)
{var seq__9600_9614__$1 = temp__4092__auto___9613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9600_9614__$1))
{var c__4126__auto___9615 = cljs.core.chunk_first.call(null,seq__9600_9614__$1);{
var G__9616 = cljs.core.chunk_rest.call(null,seq__9600_9614__$1);
var G__9617 = c__4126__auto___9615;
var G__9618 = cljs.core.count.call(null,c__4126__auto___9615);
var G__9619 = 0;
seq__9600_9604 = G__9616;
chunk__9601_9605 = G__9617;
count__9602_9606 = G__9618;
i__9603_9607 = G__9619;
continue;
}
} else
{var node_9620 = cljs.core.first.call(null,seq__9600_9614__$1);goog.dom.classes.toggle(node_9620,class$);
{
var G__9621 = cljs.core.next.call(null,seq__9600_9614__$1);
var G__9622 = null;
var G__9623 = 0;
var G__9624 = 0;
seq__9600_9604 = G__9621;
chunk__9601_9605 = G__9622;
count__9602_9606 = G__9623;
i__9603_9607 = G__9624;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_9633__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__9629_9634 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9630_9635 = null;var count__9631_9636 = 0;var i__9632_9637 = 0;while(true){
if((i__9632_9637 < count__9631_9636))
{var node_9638 = cljs.core._nth.call(null,chunk__9630_9635,i__9632_9637);goog.dom.classes.set(node_9638,classes_9633__$1);
{
var G__9639 = seq__9629_9634;
var G__9640 = chunk__9630_9635;
var G__9641 = count__9631_9636;
var G__9642 = (i__9632_9637 + 1);
seq__9629_9634 = G__9639;
chunk__9630_9635 = G__9640;
count__9631_9636 = G__9641;
i__9632_9637 = G__9642;
continue;
}
} else
{var temp__4092__auto___9643 = cljs.core.seq.call(null,seq__9629_9634);if(temp__4092__auto___9643)
{var seq__9629_9644__$1 = temp__4092__auto___9643;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9629_9644__$1))
{var c__4126__auto___9645 = cljs.core.chunk_first.call(null,seq__9629_9644__$1);{
var G__9646 = cljs.core.chunk_rest.call(null,seq__9629_9644__$1);
var G__9647 = c__4126__auto___9645;
var G__9648 = cljs.core.count.call(null,c__4126__auto___9645);
var G__9649 = 0;
seq__9629_9634 = G__9646;
chunk__9630_9635 = G__9647;
count__9631_9636 = G__9648;
i__9632_9637 = G__9649;
continue;
}
} else
{var node_9650 = cljs.core.first.call(null,seq__9629_9644__$1);goog.dom.classes.set(node_9650,classes_9633__$1);
{
var G__9651 = cljs.core.next.call(null,seq__9629_9644__$1);
var G__9652 = null;
var G__9653 = 0;
var G__9654 = 0;
seq__9629_9634 = G__9651;
chunk__9630_9635 = G__9652;
count__9631_9636 = G__9653;
i__9632_9637 = G__9654;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__9659_9663 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9660_9664 = null;var count__9661_9665 = 0;var i__9662_9666 = 0;while(true){
if((i__9662_9666 < count__9661_9665))
{var node_9667 = cljs.core._nth.call(null,chunk__9660_9664,i__9662_9666);goog.dom.setTextContent(node_9667,value);
{
var G__9668 = seq__9659_9663;
var G__9669 = chunk__9660_9664;
var G__9670 = count__9661_9665;
var G__9671 = (i__9662_9666 + 1);
seq__9659_9663 = G__9668;
chunk__9660_9664 = G__9669;
count__9661_9665 = G__9670;
i__9662_9666 = G__9671;
continue;
}
} else
{var temp__4092__auto___9672 = cljs.core.seq.call(null,seq__9659_9663);if(temp__4092__auto___9672)
{var seq__9659_9673__$1 = temp__4092__auto___9672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9659_9673__$1))
{var c__4126__auto___9674 = cljs.core.chunk_first.call(null,seq__9659_9673__$1);{
var G__9675 = cljs.core.chunk_rest.call(null,seq__9659_9673__$1);
var G__9676 = c__4126__auto___9674;
var G__9677 = cljs.core.count.call(null,c__4126__auto___9674);
var G__9678 = 0;
seq__9659_9663 = G__9675;
chunk__9660_9664 = G__9676;
count__9661_9665 = G__9677;
i__9662_9666 = G__9678;
continue;
}
} else
{var node_9679 = cljs.core.first.call(null,seq__9659_9673__$1);goog.dom.setTextContent(node_9679,value);
{
var G__9680 = cljs.core.next.call(null,seq__9659_9673__$1);
var G__9681 = null;
var G__9682 = 0;
var G__9683 = 0;
seq__9659_9663 = G__9680;
chunk__9660_9664 = G__9681;
count__9661_9665 = G__9682;
i__9662_9666 = G__9683;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__9688_9692 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9689_9693 = null;var count__9690_9694 = 0;var i__9691_9695 = 0;while(true){
if((i__9691_9695 < count__9690_9694))
{var node_9696 = cljs.core._nth.call(null,chunk__9689_9693,i__9691_9695);goog.dom.forms.setValue(node_9696,value);
{
var G__9697 = seq__9688_9692;
var G__9698 = chunk__9689_9693;
var G__9699 = count__9690_9694;
var G__9700 = (i__9691_9695 + 1);
seq__9688_9692 = G__9697;
chunk__9689_9693 = G__9698;
count__9690_9694 = G__9699;
i__9691_9695 = G__9700;
continue;
}
} else
{var temp__4092__auto___9701 = cljs.core.seq.call(null,seq__9688_9692);if(temp__4092__auto___9701)
{var seq__9688_9702__$1 = temp__4092__auto___9701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9688_9702__$1))
{var c__4126__auto___9703 = cljs.core.chunk_first.call(null,seq__9688_9702__$1);{
var G__9704 = cljs.core.chunk_rest.call(null,seq__9688_9702__$1);
var G__9705 = c__4126__auto___9703;
var G__9706 = cljs.core.count.call(null,c__4126__auto___9703);
var G__9707 = 0;
seq__9688_9692 = G__9704;
chunk__9689_9693 = G__9705;
count__9690_9694 = G__9706;
i__9691_9695 = G__9707;
continue;
}
} else
{var node_9708 = cljs.core.first.call(null,seq__9688_9702__$1);goog.dom.forms.setValue(node_9708,value);
{
var G__9709 = cljs.core.next.call(null,seq__9688_9702__$1);
var G__9710 = null;
var G__9711 = 0;
var G__9712 = 0;
seq__9688_9692 = G__9709;
chunk__9689_9693 = G__9710;
count__9690_9694 = G__9711;
i__9691_9695 = G__9712;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3385__auto__ = allows_inner_html_QMARK_;if(and__3385__auto__)
{var and__3385__auto____$1 = (function (){var or__3397__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3385__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3385__auto____$1;
}
} else
{return and__3385__auto__;
}
})()))
{var value_9723 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__9719_9724 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9720_9725 = null;var count__9721_9726 = 0;var i__9722_9727 = 0;while(true){
if((i__9722_9727 < count__9721_9726))
{var node_9728 = cljs.core._nth.call(null,chunk__9720_9725,i__9722_9727);node_9728.innerHTML = value_9723;
{
var G__9729 = seq__9719_9724;
var G__9730 = chunk__9720_9725;
var G__9731 = count__9721_9726;
var G__9732 = (i__9722_9727 + 1);
seq__9719_9724 = G__9729;
chunk__9720_9725 = G__9730;
count__9721_9726 = G__9731;
i__9722_9727 = G__9732;
continue;
}
} else
{var temp__4092__auto___9733 = cljs.core.seq.call(null,seq__9719_9724);if(temp__4092__auto___9733)
{var seq__9719_9734__$1 = temp__4092__auto___9733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9719_9734__$1))
{var c__4126__auto___9735 = cljs.core.chunk_first.call(null,seq__9719_9734__$1);{
var G__9736 = cljs.core.chunk_rest.call(null,seq__9719_9734__$1);
var G__9737 = c__4126__auto___9735;
var G__9738 = cljs.core.count.call(null,c__4126__auto___9735);
var G__9739 = 0;
seq__9719_9724 = G__9736;
chunk__9720_9725 = G__9737;
count__9721_9726 = G__9738;
i__9722_9727 = G__9739;
continue;
}
} else
{var node_9740 = cljs.core.first.call(null,seq__9719_9734__$1);node_9740.innerHTML = value_9723;
{
var G__9741 = cljs.core.next.call(null,seq__9719_9734__$1);
var G__9742 = null;
var G__9743 = 0;
var G__9744 = 0;
seq__9719_9724 = G__9741;
chunk__9720_9725 = G__9742;
count__9721_9726 = G__9743;
i__9722_9727 = G__9744;
continue;
}
}
} else
{}
}
break;
}
}catch (e9718){if((e9718 instanceof Error))
{var e_9745 = e9718;domina.replace_children_BANG_.call(null,content,value_9723);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9718;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3385__auto__ = bubble;if(cljs.core.truth_(and__3385__auto__))
{return (value == null);
} else
{return and__3385__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3397__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__9752_9756 = cljs.core.seq.call(null,children);var chunk__9753_9757 = null;var count__9754_9758 = 0;var i__9755_9759 = 0;while(true){
if((i__9755_9759 < count__9754_9758))
{var child_9760 = cljs.core._nth.call(null,chunk__9753_9757,i__9755_9759);frag.appendChild(child_9760);
{
var G__9761 = seq__9752_9756;
var G__9762 = chunk__9753_9757;
var G__9763 = count__9754_9758;
var G__9764 = (i__9755_9759 + 1);
seq__9752_9756 = G__9761;
chunk__9753_9757 = G__9762;
count__9754_9758 = G__9763;
i__9755_9759 = G__9764;
continue;
}
} else
{var temp__4092__auto___9765 = cljs.core.seq.call(null,seq__9752_9756);if(temp__4092__auto___9765)
{var seq__9752_9766__$1 = temp__4092__auto___9765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9752_9766__$1))
{var c__4126__auto___9767 = cljs.core.chunk_first.call(null,seq__9752_9766__$1);{
var G__9768 = cljs.core.chunk_rest.call(null,seq__9752_9766__$1);
var G__9769 = c__4126__auto___9767;
var G__9770 = cljs.core.count.call(null,c__4126__auto___9767);
var G__9771 = 0;
seq__9752_9756 = G__9768;
chunk__9753_9757 = G__9769;
count__9754_9758 = G__9770;
i__9755_9759 = G__9771;
continue;
}
} else
{var child_9772 = cljs.core.first.call(null,seq__9752_9766__$1);frag.appendChild(child_9772);
{
var G__9773 = cljs.core.next.call(null,seq__9752_9766__$1);
var G__9774 = null;
var G__9775 = 0;
var G__9776 = 0;
seq__9752_9756 = G__9773;
chunk__9753_9757 = G__9774;
count__9754_9758 = G__9775;
i__9755_9759 = G__9776;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__9746_SHARP_,p2__9747_SHARP_){return f.call(null,p1__9746_SHARP_,p2__9747_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3385__auto__ = obj;if(cljs.core.truth_(and__3385__auto__))
{var and__3385__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3385__auto____$1)
{return obj.length;
} else
{return and__3385__auto____$1;
}
} else
{return and__3385__auto__;
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
{if((function (){var G__9778 = list_thing;if(G__9778)
{var bit__4028__auto__ = (G__9778.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4028__auto__) || (G__9778.cljs$core$ISeqable$))
{return true;
} else
{if((!G__9778.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9778);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9778);
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
{if((function (){var G__9779 = content;if(G__9779)
{var bit__4028__auto__ = (G__9779.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4028__auto__) || (G__9779.cljs$core$ISeqable$))
{return true;
} else
{if((!G__9779.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9779);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9779);
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
{if((function (){var G__9780 = content;if(G__9780)
{var bit__4028__auto__ = (G__9780.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4028__auto__) || (G__9780.cljs$core$ISeqable$))
{return true;
} else
{if((!G__9780.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9780);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__9780);
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
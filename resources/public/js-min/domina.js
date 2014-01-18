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
var opt_wrapper_14650 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_14651 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_14652 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$60,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_14651,table_section_wrapper_14651,opt_wrapper_14650,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_14652,table_section_wrapper_14651,cell_wrapper_14652,opt_wrapper_14650,table_section_wrapper_14651,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_14651]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3385__auto__ = div.firstChild;if(cljs.core.truth_(and__3385__auto__))
{return div.firstChild.childNodes;
} else
{return and__3385__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__14657 = cljs.core.seq(tbody);var chunk__14658 = null;var count__14659 = 0;var i__14660 = 0;while(true){
if((i__14660 < count__14659))
{var child = chunk__14658.cljs$core$IIndexed$_nth$arity$2(null,i__14660);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14661 = seq__14657;
var G__14662 = chunk__14658;
var G__14663 = count__14659;
var G__14664 = (i__14660 + 1);
seq__14657 = G__14661;
chunk__14658 = G__14662;
count__14659 = G__14663;
i__14660 = G__14664;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__14657);if(temp__4092__auto__)
{var seq__14657__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__14657__$1))
{var c__4126__auto__ = cljs.core.chunk_first(seq__14657__$1);{
var G__14665 = cljs.core.chunk_rest(seq__14657__$1);
var G__14666 = c__4126__auto__;
var G__14667 = cljs.core.count(c__4126__auto__);
var G__14668 = 0;
seq__14657 = G__14665;
chunk__14658 = G__14666;
count__14659 = G__14667;
i__14660 = G__14668;
continue;
}
} else
{var child = cljs.core.first(seq__14657__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14669 = cljs.core.next(seq__14657__$1);
var G__14670 = null;
var G__14671 = 0;
var G__14672 = 0;
seq__14657 = G__14669;
chunk__14658 = G__14670;
count__14659 = G__14671;
i__14660 = G__14672;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__14674 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14674,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14674,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14674,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__14675 = wrapper.lastChild;
var G__14676 = (level - 1);
wrapper = G__14675;
level = G__14676;
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
if(cljs.core.truth_((function (){var and__3385__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3385__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3385__auto__;
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
domina.DomContent = (function (){var obj14678 = {};return obj14678;
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
{throw cljs.core.missing_protocol("DomContent.nodes",content);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3385__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3385__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3385__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__14679){
var mesg = cljs.core.seq(arglist__14679);
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
log.cljs$lang$applyTo = (function (arglist__14680){
var mesg = cljs.core.seq(arglist__14680);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__14681){
var contents = cljs.core.seq(arglist__14681);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14682_SHARP_){return p1__14682_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__14683_SHARP_,p2__14684_SHARP_){return goog.dom.insertChildAt(p1__14683_SHARP_,p2__14684_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__14683_SHARP_,p2__14684_SHARP_){return goog.dom.insertChildAt(p1__14683_SHARP_,p2__14684_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__14686_SHARP_,p2__14685_SHARP_){return goog.dom.insertSiblingBefore(p2__14685_SHARP_,p1__14686_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__14686_SHARP_,p2__14685_SHARP_){return goog.dom.insertSiblingBefore(p2__14685_SHARP_,p1__14686_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__14688_SHARP_,p2__14687_SHARP_){return goog.dom.insertSiblingAfter(p2__14687_SHARP_,p1__14688_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__14688_SHARP_,p2__14687_SHARP_){return goog.dom.insertSiblingAfter(p2__14687_SHARP_,p1__14688_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__14690_SHARP_,p2__14689_SHARP_){return goog.dom.replaceNode(p2__14689_SHARP_,p1__14690_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__14690_SHARP_,p2__14689_SHARP_){return goog.dom.replaceNode(p2__14689_SHARP_,p1__14690_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__14695_14699 = cljs.core.seq(domina.nodes(content));var chunk__14696_14700 = null;var count__14697_14701 = 0;var i__14698_14702 = 0;while(true){
if((i__14698_14702 < count__14697_14701))
{var n_14703 = chunk__14696_14700.cljs$core$IIndexed$_nth$arity$2(null,i__14698_14702);goog.style.setStyle(n_14703,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__14704 = seq__14695_14699;
var G__14705 = chunk__14696_14700;
var G__14706 = count__14697_14701;
var G__14707 = (i__14698_14702 + 1);
seq__14695_14699 = G__14704;
chunk__14696_14700 = G__14705;
count__14697_14701 = G__14706;
i__14698_14702 = G__14707;
continue;
}
} else
{var temp__4092__auto___14708 = cljs.core.seq(seq__14695_14699);if(temp__4092__auto___14708)
{var seq__14695_14709__$1 = temp__4092__auto___14708;if(cljs.core.chunked_seq_QMARK_(seq__14695_14709__$1))
{var c__4126__auto___14710 = cljs.core.chunk_first(seq__14695_14709__$1);{
var G__14711 = cljs.core.chunk_rest(seq__14695_14709__$1);
var G__14712 = c__4126__auto___14710;
var G__14713 = cljs.core.count(c__4126__auto___14710);
var G__14714 = 0;
seq__14695_14699 = G__14711;
chunk__14696_14700 = G__14712;
count__14697_14701 = G__14713;
i__14698_14702 = G__14714;
continue;
}
} else
{var n_14715 = cljs.core.first(seq__14695_14709__$1);goog.style.setStyle(n_14715,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__14716 = cljs.core.next(seq__14695_14709__$1);
var G__14717 = null;
var G__14718 = 0;
var G__14719 = 0;
seq__14695_14699 = G__14716;
chunk__14696_14700 = G__14717;
count__14697_14701 = G__14718;
i__14698_14702 = G__14719;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14720){
var content = cljs.core.first(arglist__14720);
arglist__14720 = cljs.core.next(arglist__14720);
var name = cljs.core.first(arglist__14720);
var value = cljs.core.rest(arglist__14720);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__14725_14729 = cljs.core.seq(domina.nodes(content));var chunk__14726_14730 = null;var count__14727_14731 = 0;var i__14728_14732 = 0;while(true){
if((i__14728_14732 < count__14727_14731))
{var n_14733 = chunk__14726_14730.cljs$core$IIndexed$_nth$arity$2(null,i__14728_14732);n_14733.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__14734 = seq__14725_14729;
var G__14735 = chunk__14726_14730;
var G__14736 = count__14727_14731;
var G__14737 = (i__14728_14732 + 1);
seq__14725_14729 = G__14734;
chunk__14726_14730 = G__14735;
count__14727_14731 = G__14736;
i__14728_14732 = G__14737;
continue;
}
} else
{var temp__4092__auto___14738 = cljs.core.seq(seq__14725_14729);if(temp__4092__auto___14738)
{var seq__14725_14739__$1 = temp__4092__auto___14738;if(cljs.core.chunked_seq_QMARK_(seq__14725_14739__$1))
{var c__4126__auto___14740 = cljs.core.chunk_first(seq__14725_14739__$1);{
var G__14741 = cljs.core.chunk_rest(seq__14725_14739__$1);
var G__14742 = c__4126__auto___14740;
var G__14743 = cljs.core.count(c__4126__auto___14740);
var G__14744 = 0;
seq__14725_14729 = G__14741;
chunk__14726_14730 = G__14742;
count__14727_14731 = G__14743;
i__14728_14732 = G__14744;
continue;
}
} else
{var n_14745 = cljs.core.first(seq__14725_14739__$1);n_14745.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__14746 = cljs.core.next(seq__14725_14739__$1);
var G__14747 = null;
var G__14748 = 0;
var G__14749 = 0;
seq__14725_14729 = G__14746;
chunk__14726_14730 = G__14747;
count__14727_14731 = G__14748;
i__14728_14732 = G__14749;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__14750){
var content = cljs.core.first(arglist__14750);
arglist__14750 = cljs.core.next(arglist__14750);
var name = cljs.core.first(arglist__14750);
var value = cljs.core.rest(arglist__14750);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__14755_14759 = cljs.core.seq(domina.nodes(content));var chunk__14756_14760 = null;var count__14757_14761 = 0;var i__14758_14762 = 0;while(true){
if((i__14758_14762 < count__14757_14761))
{var n_14763 = chunk__14756_14760.cljs$core$IIndexed$_nth$arity$2(null,i__14758_14762);n_14763.removeAttribute(cljs.core.name(name));
{
var G__14764 = seq__14755_14759;
var G__14765 = chunk__14756_14760;
var G__14766 = count__14757_14761;
var G__14767 = (i__14758_14762 + 1);
seq__14755_14759 = G__14764;
chunk__14756_14760 = G__14765;
count__14757_14761 = G__14766;
i__14758_14762 = G__14767;
continue;
}
} else
{var temp__4092__auto___14768 = cljs.core.seq(seq__14755_14759);if(temp__4092__auto___14768)
{var seq__14755_14769__$1 = temp__4092__auto___14768;if(cljs.core.chunked_seq_QMARK_(seq__14755_14769__$1))
{var c__4126__auto___14770 = cljs.core.chunk_first(seq__14755_14769__$1);{
var G__14771 = cljs.core.chunk_rest(seq__14755_14769__$1);
var G__14772 = c__4126__auto___14770;
var G__14773 = cljs.core.count(c__4126__auto___14770);
var G__14774 = 0;
seq__14755_14759 = G__14771;
chunk__14756_14760 = G__14772;
count__14757_14761 = G__14773;
i__14758_14762 = G__14774;
continue;
}
} else
{var n_14775 = cljs.core.first(seq__14755_14769__$1);n_14775.removeAttribute(cljs.core.name(name));
{
var G__14776 = cljs.core.next(seq__14755_14769__$1);
var G__14777 = null;
var G__14778 = 0;
var G__14779 = 0;
seq__14755_14759 = G__14776;
chunk__14756_14760 = G__14777;
count__14757_14761 = G__14778;
i__14758_14762 = G__14779;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__14781 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,1,null);if(cljs.core.truth_((function (){var and__3385__auto__ = k;if(cljs.core.truth_(and__3385__auto__))
{return v;
} else
{return and__3385__auto__;
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
{if(cljs.core.constant$keyword$59)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14782_SHARP_){var attr = attrs__$1.item(p1__14782_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__14789_14795 = cljs.core.seq(styles);var chunk__14790_14796 = null;var count__14791_14797 = 0;var i__14792_14798 = 0;while(true){
if((i__14792_14798 < count__14791_14797))
{var vec__14793_14799 = chunk__14790_14796.cljs$core$IIndexed$_nth$arity$2(null,i__14792_14798);var name_14800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793_14799,0,null);var value_14801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793_14799,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14800,cljs.core.array_seq([value_14801], 0));
{
var G__14802 = seq__14789_14795;
var G__14803 = chunk__14790_14796;
var G__14804 = count__14791_14797;
var G__14805 = (i__14792_14798 + 1);
seq__14789_14795 = G__14802;
chunk__14790_14796 = G__14803;
count__14791_14797 = G__14804;
i__14792_14798 = G__14805;
continue;
}
} else
{var temp__4092__auto___14806 = cljs.core.seq(seq__14789_14795);if(temp__4092__auto___14806)
{var seq__14789_14807__$1 = temp__4092__auto___14806;if(cljs.core.chunked_seq_QMARK_(seq__14789_14807__$1))
{var c__4126__auto___14808 = cljs.core.chunk_first(seq__14789_14807__$1);{
var G__14809 = cljs.core.chunk_rest(seq__14789_14807__$1);
var G__14810 = c__4126__auto___14808;
var G__14811 = cljs.core.count(c__4126__auto___14808);
var G__14812 = 0;
seq__14789_14795 = G__14809;
chunk__14790_14796 = G__14810;
count__14791_14797 = G__14811;
i__14792_14798 = G__14812;
continue;
}
} else
{var vec__14794_14813 = cljs.core.first(seq__14789_14807__$1);var name_14814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14794_14813,0,null);var value_14815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14794_14813,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14814,cljs.core.array_seq([value_14815], 0));
{
var G__14816 = cljs.core.next(seq__14789_14807__$1);
var G__14817 = null;
var G__14818 = 0;
var G__14819 = 0;
seq__14789_14795 = G__14816;
chunk__14790_14796 = G__14817;
count__14791_14797 = G__14818;
i__14792_14798 = G__14819;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__14826_14832 = cljs.core.seq(attrs);var chunk__14827_14833 = null;var count__14828_14834 = 0;var i__14829_14835 = 0;while(true){
if((i__14829_14835 < count__14828_14834))
{var vec__14830_14836 = chunk__14827_14833.cljs$core$IIndexed$_nth$arity$2(null,i__14829_14835);var name_14837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14830_14836,0,null);var value_14838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14830_14836,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14837,cljs.core.array_seq([value_14838], 0));
{
var G__14839 = seq__14826_14832;
var G__14840 = chunk__14827_14833;
var G__14841 = count__14828_14834;
var G__14842 = (i__14829_14835 + 1);
seq__14826_14832 = G__14839;
chunk__14827_14833 = G__14840;
count__14828_14834 = G__14841;
i__14829_14835 = G__14842;
continue;
}
} else
{var temp__4092__auto___14843 = cljs.core.seq(seq__14826_14832);if(temp__4092__auto___14843)
{var seq__14826_14844__$1 = temp__4092__auto___14843;if(cljs.core.chunked_seq_QMARK_(seq__14826_14844__$1))
{var c__4126__auto___14845 = cljs.core.chunk_first(seq__14826_14844__$1);{
var G__14846 = cljs.core.chunk_rest(seq__14826_14844__$1);
var G__14847 = c__4126__auto___14845;
var G__14848 = cljs.core.count(c__4126__auto___14845);
var G__14849 = 0;
seq__14826_14832 = G__14846;
chunk__14827_14833 = G__14847;
count__14828_14834 = G__14848;
i__14829_14835 = G__14849;
continue;
}
} else
{var vec__14831_14850 = cljs.core.first(seq__14826_14844__$1);var name_14851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14831_14850,0,null);var value_14852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14831_14850,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14851,cljs.core.array_seq([value_14852], 0));
{
var G__14853 = cljs.core.next(seq__14826_14844__$1);
var G__14854 = null;
var G__14855 = 0;
var G__14856 = 0;
seq__14826_14832 = G__14853;
chunk__14827_14833 = G__14854;
count__14828_14834 = G__14855;
i__14829_14835 = G__14856;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__14861_14865 = cljs.core.seq(domina.nodes(content));var chunk__14862_14866 = null;var count__14863_14867 = 0;var i__14864_14868 = 0;while(true){
if((i__14864_14868 < count__14863_14867))
{var node_14869 = chunk__14862_14866.cljs$core$IIndexed$_nth$arity$2(null,i__14864_14868);goog.dom.classes.add(node_14869,class$);
{
var G__14870 = seq__14861_14865;
var G__14871 = chunk__14862_14866;
var G__14872 = count__14863_14867;
var G__14873 = (i__14864_14868 + 1);
seq__14861_14865 = G__14870;
chunk__14862_14866 = G__14871;
count__14863_14867 = G__14872;
i__14864_14868 = G__14873;
continue;
}
} else
{var temp__4092__auto___14874 = cljs.core.seq(seq__14861_14865);if(temp__4092__auto___14874)
{var seq__14861_14875__$1 = temp__4092__auto___14874;if(cljs.core.chunked_seq_QMARK_(seq__14861_14875__$1))
{var c__4126__auto___14876 = cljs.core.chunk_first(seq__14861_14875__$1);{
var G__14877 = cljs.core.chunk_rest(seq__14861_14875__$1);
var G__14878 = c__4126__auto___14876;
var G__14879 = cljs.core.count(c__4126__auto___14876);
var G__14880 = 0;
seq__14861_14865 = G__14877;
chunk__14862_14866 = G__14878;
count__14863_14867 = G__14879;
i__14864_14868 = G__14880;
continue;
}
} else
{var node_14881 = cljs.core.first(seq__14861_14875__$1);goog.dom.classes.add(node_14881,class$);
{
var G__14882 = cljs.core.next(seq__14861_14875__$1);
var G__14883 = null;
var G__14884 = 0;
var G__14885 = 0;
seq__14861_14865 = G__14882;
chunk__14862_14866 = G__14883;
count__14863_14867 = G__14884;
i__14864_14868 = G__14885;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__14890_14894 = cljs.core.seq(domina.nodes(content));var chunk__14891_14895 = null;var count__14892_14896 = 0;var i__14893_14897 = 0;while(true){
if((i__14893_14897 < count__14892_14896))
{var node_14898 = chunk__14891_14895.cljs$core$IIndexed$_nth$arity$2(null,i__14893_14897);goog.dom.classes.remove(node_14898,class$);
{
var G__14899 = seq__14890_14894;
var G__14900 = chunk__14891_14895;
var G__14901 = count__14892_14896;
var G__14902 = (i__14893_14897 + 1);
seq__14890_14894 = G__14899;
chunk__14891_14895 = G__14900;
count__14892_14896 = G__14901;
i__14893_14897 = G__14902;
continue;
}
} else
{var temp__4092__auto___14903 = cljs.core.seq(seq__14890_14894);if(temp__4092__auto___14903)
{var seq__14890_14904__$1 = temp__4092__auto___14903;if(cljs.core.chunked_seq_QMARK_(seq__14890_14904__$1))
{var c__4126__auto___14905 = cljs.core.chunk_first(seq__14890_14904__$1);{
var G__14906 = cljs.core.chunk_rest(seq__14890_14904__$1);
var G__14907 = c__4126__auto___14905;
var G__14908 = cljs.core.count(c__4126__auto___14905);
var G__14909 = 0;
seq__14890_14894 = G__14906;
chunk__14891_14895 = G__14907;
count__14892_14896 = G__14908;
i__14893_14897 = G__14909;
continue;
}
} else
{var node_14910 = cljs.core.first(seq__14890_14904__$1);goog.dom.classes.remove(node_14910,class$);
{
var G__14911 = cljs.core.next(seq__14890_14904__$1);
var G__14912 = null;
var G__14913 = 0;
var G__14914 = 0;
seq__14890_14894 = G__14911;
chunk__14891_14895 = G__14912;
count__14892_14896 = G__14913;
i__14893_14897 = G__14914;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__14919_14923 = cljs.core.seq(domina.nodes(content));var chunk__14920_14924 = null;var count__14921_14925 = 0;var i__14922_14926 = 0;while(true){
if((i__14922_14926 < count__14921_14925))
{var node_14927 = chunk__14920_14924.cljs$core$IIndexed$_nth$arity$2(null,i__14922_14926);goog.dom.classes.toggle(node_14927,class$);
{
var G__14928 = seq__14919_14923;
var G__14929 = chunk__14920_14924;
var G__14930 = count__14921_14925;
var G__14931 = (i__14922_14926 + 1);
seq__14919_14923 = G__14928;
chunk__14920_14924 = G__14929;
count__14921_14925 = G__14930;
i__14922_14926 = G__14931;
continue;
}
} else
{var temp__4092__auto___14932 = cljs.core.seq(seq__14919_14923);if(temp__4092__auto___14932)
{var seq__14919_14933__$1 = temp__4092__auto___14932;if(cljs.core.chunked_seq_QMARK_(seq__14919_14933__$1))
{var c__4126__auto___14934 = cljs.core.chunk_first(seq__14919_14933__$1);{
var G__14935 = cljs.core.chunk_rest(seq__14919_14933__$1);
var G__14936 = c__4126__auto___14934;
var G__14937 = cljs.core.count(c__4126__auto___14934);
var G__14938 = 0;
seq__14919_14923 = G__14935;
chunk__14920_14924 = G__14936;
count__14921_14925 = G__14937;
i__14922_14926 = G__14938;
continue;
}
} else
{var node_14939 = cljs.core.first(seq__14919_14933__$1);goog.dom.classes.toggle(node_14939,class$);
{
var G__14940 = cljs.core.next(seq__14919_14933__$1);
var G__14941 = null;
var G__14942 = 0;
var G__14943 = 0;
seq__14919_14923 = G__14940;
chunk__14920_14924 = G__14941;
count__14921_14925 = G__14942;
i__14922_14926 = G__14943;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_14952__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__14948_14953 = cljs.core.seq(domina.nodes(content));var chunk__14949_14954 = null;var count__14950_14955 = 0;var i__14951_14956 = 0;while(true){
if((i__14951_14956 < count__14950_14955))
{var node_14957 = chunk__14949_14954.cljs$core$IIndexed$_nth$arity$2(null,i__14951_14956);goog.dom.classes.set(node_14957,classes_14952__$1);
{
var G__14958 = seq__14948_14953;
var G__14959 = chunk__14949_14954;
var G__14960 = count__14950_14955;
var G__14961 = (i__14951_14956 + 1);
seq__14948_14953 = G__14958;
chunk__14949_14954 = G__14959;
count__14950_14955 = G__14960;
i__14951_14956 = G__14961;
continue;
}
} else
{var temp__4092__auto___14962 = cljs.core.seq(seq__14948_14953);if(temp__4092__auto___14962)
{var seq__14948_14963__$1 = temp__4092__auto___14962;if(cljs.core.chunked_seq_QMARK_(seq__14948_14963__$1))
{var c__4126__auto___14964 = cljs.core.chunk_first(seq__14948_14963__$1);{
var G__14965 = cljs.core.chunk_rest(seq__14948_14963__$1);
var G__14966 = c__4126__auto___14964;
var G__14967 = cljs.core.count(c__4126__auto___14964);
var G__14968 = 0;
seq__14948_14953 = G__14965;
chunk__14949_14954 = G__14966;
count__14950_14955 = G__14967;
i__14951_14956 = G__14968;
continue;
}
} else
{var node_14969 = cljs.core.first(seq__14948_14963__$1);goog.dom.classes.set(node_14969,classes_14952__$1);
{
var G__14970 = cljs.core.next(seq__14948_14963__$1);
var G__14971 = null;
var G__14972 = 0;
var G__14973 = 0;
seq__14948_14953 = G__14970;
chunk__14949_14954 = G__14971;
count__14950_14955 = G__14972;
i__14951_14956 = G__14973;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__14978_14982 = cljs.core.seq(domina.nodes(content));var chunk__14979_14983 = null;var count__14980_14984 = 0;var i__14981_14985 = 0;while(true){
if((i__14981_14985 < count__14980_14984))
{var node_14986 = chunk__14979_14983.cljs$core$IIndexed$_nth$arity$2(null,i__14981_14985);goog.dom.setTextContent(node_14986,value);
{
var G__14987 = seq__14978_14982;
var G__14988 = chunk__14979_14983;
var G__14989 = count__14980_14984;
var G__14990 = (i__14981_14985 + 1);
seq__14978_14982 = G__14987;
chunk__14979_14983 = G__14988;
count__14980_14984 = G__14989;
i__14981_14985 = G__14990;
continue;
}
} else
{var temp__4092__auto___14991 = cljs.core.seq(seq__14978_14982);if(temp__4092__auto___14991)
{var seq__14978_14992__$1 = temp__4092__auto___14991;if(cljs.core.chunked_seq_QMARK_(seq__14978_14992__$1))
{var c__4126__auto___14993 = cljs.core.chunk_first(seq__14978_14992__$1);{
var G__14994 = cljs.core.chunk_rest(seq__14978_14992__$1);
var G__14995 = c__4126__auto___14993;
var G__14996 = cljs.core.count(c__4126__auto___14993);
var G__14997 = 0;
seq__14978_14982 = G__14994;
chunk__14979_14983 = G__14995;
count__14980_14984 = G__14996;
i__14981_14985 = G__14997;
continue;
}
} else
{var node_14998 = cljs.core.first(seq__14978_14992__$1);goog.dom.setTextContent(node_14998,value);
{
var G__14999 = cljs.core.next(seq__14978_14992__$1);
var G__15000 = null;
var G__15001 = 0;
var G__15002 = 0;
seq__14978_14982 = G__14999;
chunk__14979_14983 = G__15000;
count__14980_14984 = G__15001;
i__14981_14985 = G__15002;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15007_15011 = cljs.core.seq(domina.nodes(content));var chunk__15008_15012 = null;var count__15009_15013 = 0;var i__15010_15014 = 0;while(true){
if((i__15010_15014 < count__15009_15013))
{var node_15015 = chunk__15008_15012.cljs$core$IIndexed$_nth$arity$2(null,i__15010_15014);goog.dom.forms.setValue(node_15015,value);
{
var G__15016 = seq__15007_15011;
var G__15017 = chunk__15008_15012;
var G__15018 = count__15009_15013;
var G__15019 = (i__15010_15014 + 1);
seq__15007_15011 = G__15016;
chunk__15008_15012 = G__15017;
count__15009_15013 = G__15018;
i__15010_15014 = G__15019;
continue;
}
} else
{var temp__4092__auto___15020 = cljs.core.seq(seq__15007_15011);if(temp__4092__auto___15020)
{var seq__15007_15021__$1 = temp__4092__auto___15020;if(cljs.core.chunked_seq_QMARK_(seq__15007_15021__$1))
{var c__4126__auto___15022 = cljs.core.chunk_first(seq__15007_15021__$1);{
var G__15023 = cljs.core.chunk_rest(seq__15007_15021__$1);
var G__15024 = c__4126__auto___15022;
var G__15025 = cljs.core.count(c__4126__auto___15022);
var G__15026 = 0;
seq__15007_15011 = G__15023;
chunk__15008_15012 = G__15024;
count__15009_15013 = G__15025;
i__15010_15014 = G__15026;
continue;
}
} else
{var node_15027 = cljs.core.first(seq__15007_15021__$1);goog.dom.forms.setValue(node_15027,value);
{
var G__15028 = cljs.core.next(seq__15007_15021__$1);
var G__15029 = null;
var G__15030 = 0;
var G__15031 = 0;
seq__15007_15011 = G__15028;
chunk__15008_15012 = G__15029;
count__15009_15013 = G__15030;
i__15010_15014 = G__15031;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3385__auto__ = allows_inner_html_QMARK_;if(and__3385__auto__)
{var and__3385__auto____$1 = (function (){var or__3397__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
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
{var value_15042 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15038_15043 = cljs.core.seq(domina.nodes(content));var chunk__15039_15044 = null;var count__15040_15045 = 0;var i__15041_15046 = 0;while(true){
if((i__15041_15046 < count__15040_15045))
{var node_15047 = chunk__15039_15044.cljs$core$IIndexed$_nth$arity$2(null,i__15041_15046);node_15047.innerHTML = value_15042;
{
var G__15048 = seq__15038_15043;
var G__15049 = chunk__15039_15044;
var G__15050 = count__15040_15045;
var G__15051 = (i__15041_15046 + 1);
seq__15038_15043 = G__15048;
chunk__15039_15044 = G__15049;
count__15040_15045 = G__15050;
i__15041_15046 = G__15051;
continue;
}
} else
{var temp__4092__auto___15052 = cljs.core.seq(seq__15038_15043);if(temp__4092__auto___15052)
{var seq__15038_15053__$1 = temp__4092__auto___15052;if(cljs.core.chunked_seq_QMARK_(seq__15038_15053__$1))
{var c__4126__auto___15054 = cljs.core.chunk_first(seq__15038_15053__$1);{
var G__15055 = cljs.core.chunk_rest(seq__15038_15053__$1);
var G__15056 = c__4126__auto___15054;
var G__15057 = cljs.core.count(c__4126__auto___15054);
var G__15058 = 0;
seq__15038_15043 = G__15055;
chunk__15039_15044 = G__15056;
count__15040_15045 = G__15057;
i__15041_15046 = G__15058;
continue;
}
} else
{var node_15059 = cljs.core.first(seq__15038_15053__$1);node_15059.innerHTML = value_15042;
{
var G__15060 = cljs.core.next(seq__15038_15053__$1);
var G__15061 = null;
var G__15062 = 0;
var G__15063 = 0;
seq__15038_15043 = G__15060;
chunk__15039_15044 = G__15061;
count__15040_15045 = G__15062;
i__15041_15046 = G__15063;
continue;
}
}
} else
{}
}
break;
}
}catch (e15037){if((e15037 instanceof Error))
{var e_15064 = e15037;domina.replace_children_BANG_(content,value_15042);
} else
{if(cljs.core.constant$keyword$59)
{throw e15037;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3385__auto__ = bubble;if(cljs.core.truth_(and__3385__auto__))
{return (value == null);
} else
{return and__3385__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3397__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15071_15075 = cljs.core.seq(children);var chunk__15072_15076 = null;var count__15073_15077 = 0;var i__15074_15078 = 0;while(true){
if((i__15074_15078 < count__15073_15077))
{var child_15079 = chunk__15072_15076.cljs$core$IIndexed$_nth$arity$2(null,i__15074_15078);frag.appendChild(child_15079);
{
var G__15080 = seq__15071_15075;
var G__15081 = chunk__15072_15076;
var G__15082 = count__15073_15077;
var G__15083 = (i__15074_15078 + 1);
seq__15071_15075 = G__15080;
chunk__15072_15076 = G__15081;
count__15073_15077 = G__15082;
i__15074_15078 = G__15083;
continue;
}
} else
{var temp__4092__auto___15084 = cljs.core.seq(seq__15071_15075);if(temp__4092__auto___15084)
{var seq__15071_15085__$1 = temp__4092__auto___15084;if(cljs.core.chunked_seq_QMARK_(seq__15071_15085__$1))
{var c__4126__auto___15086 = cljs.core.chunk_first(seq__15071_15085__$1);{
var G__15087 = cljs.core.chunk_rest(seq__15071_15085__$1);
var G__15088 = c__4126__auto___15086;
var G__15089 = cljs.core.count(c__4126__auto___15086);
var G__15090 = 0;
seq__15071_15075 = G__15087;
chunk__15072_15076 = G__15088;
count__15073_15077 = G__15089;
i__15074_15078 = G__15090;
continue;
}
} else
{var child_15091 = cljs.core.first(seq__15071_15085__$1);frag.appendChild(child_15091);
{
var G__15092 = cljs.core.next(seq__15071_15085__$1);
var G__15093 = null;
var G__15094 = 0;
var G__15095 = 0;
seq__15071_15075 = G__15092;
chunk__15072_15076 = G__15093;
count__15073_15077 = G__15094;
i__15074_15078 = G__15095;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__15065_SHARP_,p2__15066_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__15065_SHARP_,p2__15066_SHARP_) : f.call(null,p1__15065_SHARP_,p2__15066_SHARP_));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3385__auto__ = obj;if(cljs.core.truth_(and__3385__auto__))
{var and__3385__auto____$1 = cljs.core.not(obj.nodeName);if(and__3385__auto____$1)
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
{if((function (){var G__15097 = list_thing;if(G__15097)
{var bit__4028__auto__ = (G__15097.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4028__auto__) || (G__15097.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15097.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__15097);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__15097);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$60)
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
{if((function (){var G__15098 = content;if(G__15098)
{var bit__4028__auto__ = (G__15098.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4028__auto__) || (G__15098.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15098.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__15098);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__15098);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$60)
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
{if((function (){var G__15099 = content;if(G__15099)
{var bit__4028__auto__ = (G__15099.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4028__auto__) || (G__15099.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15099.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__15099);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__15099);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$60)
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

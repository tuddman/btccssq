// Compiled by ClojureScript 0.0-2127
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj8739 = {};return obj8739;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3385__auto__ = evt;if(and__3385__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3385__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4005__auto__ = (((evt == null))?null:evt);return (function (){var or__3397__auto__ = (domina.events.prevent_default[goog.typeOf(x__4005__auto__)]);if(or__3397__auto__)
{return or__3397__auto__;
} else
{var or__3397__auto____$1 = (domina.events.prevent_default["_"]);if(or__3397__auto____$1)
{return or__3397__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3385__auto__ = evt;if(and__3385__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3385__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4005__auto__ = (((evt == null))?null:evt);return (function (){var or__3397__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4005__auto__)]);if(or__3397__auto__)
{return or__3397__auto__;
} else
{var or__3397__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3397__auto____$1)
{return or__3397__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3385__auto__ = evt;if(and__3385__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3385__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4005__auto__ = (((evt == null))?null:evt);return (function (){var or__3397__auto__ = (domina.events.target[goog.typeOf(x__4005__auto__)]);if(or__3397__auto__)
{return or__3397__auto__;
} else
{var or__3397__auto____$1 = (domina.events.target["_"]);if(or__3397__auto____$1)
{return or__3397__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3385__auto__ = evt;if(and__3385__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3385__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4005__auto__ = (((evt == null))?null:evt);return (function (){var or__3397__auto__ = (domina.events.current_target[goog.typeOf(x__4005__auto__)]);if(or__3397__auto__)
{return or__3397__auto__;
} else
{var or__3397__auto____$1 = (domina.events.current_target["_"]);if(or__3397__auto____$1)
{return or__3397__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3385__auto__ = evt;if(and__3385__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3385__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4005__auto__ = (((evt == null))?null:evt);return (function (){var or__3397__auto__ = (domina.events.event_type[goog.typeOf(x__4005__auto__)]);if(or__3397__auto__)
{return or__3397__auto__;
} else
{var or__3397__auto____$1 = (domina.events.event_type["_"]);if(or__3397__auto____$1)
{return or__3397__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3385__auto__ = evt;if(and__3385__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3385__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4005__auto__ = (((evt == null))?null:evt);return (function (){var or__3397__auto__ = (domina.events.raw_event[goog.typeOf(x__4005__auto__)]);if(or__3397__auto__)
{return or__3397__auto__;
} else
{var or__3397__auto____$1 = (domina.events.raw_event["_"]);if(or__3397__auto____$1)
{return or__3397__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t8743 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t8743 = (function (evt,f,create_listener_function,meta8744){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta8744 = meta8744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t8743.cljs$lang$type = true;
domina.events.t8743.cljs$lang$ctorStr = "domina.events/t8743";
domina.events.t8743.cljs$lang$ctorPrWriter = (function (this__3946__auto__,writer__3947__auto__,opt__3948__auto__){return cljs.core._write.call(null,writer__3947__auto__,"domina.events/t8743");
});
domina.events.t8743.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t8743.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3397__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return not_found;
}
});
domina.events.t8743.prototype.domina$events$Event$ = true;
domina.events.t8743.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t8743.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t8743.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t8743.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t8743.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t8743.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t8743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8745){var self__ = this;
var _8745__$1 = this;return self__.meta8744;
});
domina.events.t8743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8745,meta8744__$1){var self__ = this;
var _8745__$1 = this;return (new domina.events.t8743(self__.evt,self__.f,self__.create_listener_function,meta8744__$1));
});
domina.events.__GT_t8743 = (function __GT_t8743(evt__$1,f__$1,create_listener_function__$1,meta8744){return (new domina.events.t8743(evt__$1,f__$1,create_listener_function__$1,meta8744));
});
}
return (new domina.events.t8743(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4095__auto__ = (function iter__8750(s__8751){return (new cljs.core.LazySeq(null,(function (){var s__8751__$1 = s__8751;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8751__$1);if(temp__4092__auto__)
{var s__8751__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8751__$2))
{var c__4093__auto__ = cljs.core.chunk_first.call(null,s__8751__$2);var size__4094__auto__ = cljs.core.count.call(null,c__4093__auto__);var b__8753 = cljs.core.chunk_buffer.call(null,size__4094__auto__);if((function (){var i__8752 = 0;while(true){
if((i__8752 < size__4094__auto__))
{var node = cljs.core._nth.call(null,c__4093__auto__,i__8752);cljs.core.chunk_append.call(null,b__8753,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__8754 = (i__8752 + 1);
i__8752 = G__8754;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8753),iter__8750.call(null,cljs.core.chunk_rest.call(null,s__8751__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8753),null);
}
} else
{var node = cljs.core.first.call(null,s__8751__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__8750.call(null,cljs.core.rest.call(null,s__8751__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4095__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__8763 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8764 = null;var count__8765 = 0;var i__8766 = 0;while(true){
if((i__8766 < count__8765))
{var node = cljs.core._nth.call(null,chunk__8764,i__8766);goog.events.removeAll(node);
{
var G__8771 = seq__8763;
var G__8772 = chunk__8764;
var G__8773 = count__8765;
var G__8774 = (i__8766 + 1);
seq__8763 = G__8771;
chunk__8764 = G__8772;
count__8765 = G__8773;
i__8766 = G__8774;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8763);if(temp__4092__auto__)
{var seq__8763__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8763__$1))
{var c__4126__auto__ = cljs.core.chunk_first.call(null,seq__8763__$1);{
var G__8775 = cljs.core.chunk_rest.call(null,seq__8763__$1);
var G__8776 = c__4126__auto__;
var G__8777 = cljs.core.count.call(null,c__4126__auto__);
var G__8778 = 0;
seq__8763 = G__8775;
chunk__8764 = G__8776;
count__8765 = G__8777;
i__8766 = G__8778;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__8763__$1);goog.events.removeAll(node);
{
var G__8779 = cljs.core.next.call(null,seq__8763__$1);
var G__8780 = null;
var G__8781 = 0;
var G__8782 = 0;
seq__8763 = G__8779;
chunk__8764 = G__8780;
count__8765 = G__8781;
i__8766 = G__8782;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__8767 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8768 = null;var count__8769 = 0;var i__8770 = 0;while(true){
if((i__8770 < count__8769))
{var node = cljs.core._nth.call(null,chunk__8768,i__8770);goog.events.removeAll(node,type__$1);
{
var G__8783 = seq__8767;
var G__8784 = chunk__8768;
var G__8785 = count__8769;
var G__8786 = (i__8770 + 1);
seq__8767 = G__8783;
chunk__8768 = G__8784;
count__8769 = G__8785;
i__8770 = G__8786;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8767);if(temp__4092__auto__)
{var seq__8767__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8767__$1))
{var c__4126__auto__ = cljs.core.chunk_first.call(null,seq__8767__$1);{
var G__8787 = cljs.core.chunk_rest.call(null,seq__8767__$1);
var G__8788 = c__4126__auto__;
var G__8789 = cljs.core.count.call(null,c__4126__auto__);
var G__8790 = 0;
seq__8767 = G__8787;
chunk__8768 = G__8788;
count__8769 = G__8789;
i__8770 = G__8790;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__8767__$1);goog.events.removeAll(node,type__$1);
{
var G__8791 = cljs.core.next.call(null,seq__8767__$1);
var G__8792 = null;
var G__8793 = 0;
var G__8794 = 0;
seq__8767 = G__8791;
chunk__8768 = G__8792;
count__8769 = G__8793;
i__8770 = G__8794;
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
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__8795 = parent;
var G__8796 = cljs.core.cons.call(null,parent,so_far);
n = G__8795;
so_far = G__8796;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__8805_8813 = cljs.core.seq.call(null,ancestors);var chunk__8806_8814 = null;var count__8807_8815 = 0;var i__8808_8816 = 0;while(true){
if((i__8808_8816 < count__8807_8815))
{var n_8817 = cljs.core._nth.call(null,chunk__8806_8814,i__8808_8816);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8817;
goog.events.fireListeners(n_8817,evt.type,true,evt);
}
{
var G__8818 = seq__8805_8813;
var G__8819 = chunk__8806_8814;
var G__8820 = count__8807_8815;
var G__8821 = (i__8808_8816 + 1);
seq__8805_8813 = G__8818;
chunk__8806_8814 = G__8819;
count__8807_8815 = G__8820;
i__8808_8816 = G__8821;
continue;
}
} else
{var temp__4092__auto___8822 = cljs.core.seq.call(null,seq__8805_8813);if(temp__4092__auto___8822)
{var seq__8805_8823__$1 = temp__4092__auto___8822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8805_8823__$1))
{var c__4126__auto___8824 = cljs.core.chunk_first.call(null,seq__8805_8823__$1);{
var G__8825 = cljs.core.chunk_rest.call(null,seq__8805_8823__$1);
var G__8826 = c__4126__auto___8824;
var G__8827 = cljs.core.count.call(null,c__4126__auto___8824);
var G__8828 = 0;
seq__8805_8813 = G__8825;
chunk__8806_8814 = G__8826;
count__8807_8815 = G__8827;
i__8808_8816 = G__8828;
continue;
}
} else
{var n_8829 = cljs.core.first.call(null,seq__8805_8823__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8829;
goog.events.fireListeners(n_8829,evt.type,true,evt);
}
{
var G__8830 = cljs.core.next.call(null,seq__8805_8823__$1);
var G__8831 = null;
var G__8832 = 0;
var G__8833 = 0;
seq__8805_8813 = G__8830;
chunk__8806_8814 = G__8831;
count__8807_8815 = G__8832;
i__8808_8816 = G__8833;
continue;
}
}
} else
{}
}
break;
}
var seq__8809_8834 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__8810_8835 = null;var count__8811_8836 = 0;var i__8812_8837 = 0;while(true){
if((i__8812_8837 < count__8811_8836))
{var n_8838 = cljs.core._nth.call(null,chunk__8810_8835,i__8812_8837);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8838;
goog.events.fireListeners(n_8838,evt.type,false,evt);
}
{
var G__8839 = seq__8809_8834;
var G__8840 = chunk__8810_8835;
var G__8841 = count__8811_8836;
var G__8842 = (i__8812_8837 + 1);
seq__8809_8834 = G__8839;
chunk__8810_8835 = G__8840;
count__8811_8836 = G__8841;
i__8812_8837 = G__8842;
continue;
}
} else
{var temp__4092__auto___8843 = cljs.core.seq.call(null,seq__8809_8834);if(temp__4092__auto___8843)
{var seq__8809_8844__$1 = temp__4092__auto___8843;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8809_8844__$1))
{var c__4126__auto___8845 = cljs.core.chunk_first.call(null,seq__8809_8844__$1);{
var G__8846 = cljs.core.chunk_rest.call(null,seq__8809_8844__$1);
var G__8847 = c__4126__auto___8845;
var G__8848 = cljs.core.count.call(null,c__4126__auto___8845);
var G__8849 = 0;
seq__8809_8834 = G__8846;
chunk__8810_8835 = G__8847;
count__8811_8836 = G__8848;
i__8812_8837 = G__8849;
continue;
}
} else
{var n_8850 = cljs.core.first.call(null,seq__8809_8844__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8850;
goog.events.fireListeners(n_8850,evt.type,false,evt);
}
{
var G__8851 = cljs.core.next.call(null,seq__8809_8844__$1);
var G__8852 = null;
var G__8853 = 0;
var G__8854 = 0;
seq__8809_8834 = G__8851;
chunk__8810_8835 = G__8852;
count__8811_8836 = G__8853;
i__8812_8837 = G__8854;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3385__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3385__auto__))
{return o.dispatchEvent;
} else
{return and__3385__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__8861_8867 = cljs.core.seq.call(null,evt_map);var chunk__8862_8868 = null;var count__8863_8869 = 0;var i__8864_8870 = 0;while(true){
if((i__8864_8870 < count__8863_8869))
{var vec__8865_8871 = cljs.core._nth.call(null,chunk__8862_8868,i__8864_8870);var k_8872 = cljs.core.nth.call(null,vec__8865_8871,0,null);var v_8873 = cljs.core.nth.call(null,vec__8865_8871,1,null);(evt[k_8872] = v_8873);
{
var G__8874 = seq__8861_8867;
var G__8875 = chunk__8862_8868;
var G__8876 = count__8863_8869;
var G__8877 = (i__8864_8870 + 1);
seq__8861_8867 = G__8874;
chunk__8862_8868 = G__8875;
count__8863_8869 = G__8876;
i__8864_8870 = G__8877;
continue;
}
} else
{var temp__4092__auto___8878 = cljs.core.seq.call(null,seq__8861_8867);if(temp__4092__auto___8878)
{var seq__8861_8879__$1 = temp__4092__auto___8878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8861_8879__$1))
{var c__4126__auto___8880 = cljs.core.chunk_first.call(null,seq__8861_8879__$1);{
var G__8881 = cljs.core.chunk_rest.call(null,seq__8861_8879__$1);
var G__8882 = c__4126__auto___8880;
var G__8883 = cljs.core.count.call(null,c__4126__auto___8880);
var G__8884 = 0;
seq__8861_8867 = G__8881;
chunk__8862_8868 = G__8882;
count__8863_8869 = G__8883;
i__8864_8870 = G__8884;
continue;
}
} else
{var vec__8866_8885 = cljs.core.first.call(null,seq__8861_8879__$1);var k_8886 = cljs.core.nth.call(null,vec__8866_8885,0,null);var v_8887 = cljs.core.nth.call(null,vec__8866_8885,1,null);(evt[k_8886] = v_8887);
{
var G__8888 = cljs.core.next.call(null,seq__8861_8879__$1);
var G__8889 = null;
var G__8890 = 0;
var G__8891 = 0;
seq__8861_8867 = G__8888;
chunk__8862_8868 = G__8889;
count__8863_8869 = G__8890;
i__8864_8870 = G__8891;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__8892_SHARP_){return goog.events.getListeners(p1__8892_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj6580 = {};return obj6580;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3397__auto__ = evt;if(and__3397__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3397__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3409__auto__ = (domina.events.prevent_default[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (domina.events.prevent_default["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3397__auto__ = evt;if(and__3397__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3397__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3409__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3397__auto__ = evt;if(and__3397__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3397__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3409__auto__ = (domina.events.target[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (domina.events.target["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3397__auto__ = evt;if(and__3397__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3397__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3409__auto__ = (domina.events.current_target[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (domina.events.current_target["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3397__auto__ = evt;if(and__3397__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3397__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3409__auto__ = (domina.events.event_type[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (domina.events.event_type["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3397__auto__ = evt;if(and__3397__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3397__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3409__auto__ = (domina.events.raw_event[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (domina.events.raw_event["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t6584 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t6584 = (function (evt,f,create_listener_function,meta6585){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta6585 = meta6585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t6584.cljs$lang$type = true;
domina.events.t6584.cljs$lang$ctorStr = "domina.events/t6584";
domina.events.t6584.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"domina.events/t6584");
});
domina.events.t6584.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t6584.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3409__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return not_found;
}
});
domina.events.t6584.prototype.domina$events$Event$ = true;
domina.events.t6584.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t6584.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t6584.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t6584.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t6584.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t6584.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t6584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6586){var self__ = this;
var _6586__$1 = this;return self__.meta6585;
});
domina.events.t6584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6586,meta6585__$1){var self__ = this;
var _6586__$1 = this;return (new domina.events.t6584(self__.evt,self__.f,self__.create_listener_function,meta6585__$1));
});
domina.events.__GT_t6584 = (function __GT_t6584(evt__$1,f__$1,create_listener_function__$1,meta6585){return (new domina.events.t6584(evt__$1,f__$1,create_listener_function__$1,meta6585));
});
}
return (new domina.events.t6584(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4120__auto__ = (function iter__6591(s__6592){return (new cljs.core.LazySeq(null,(function (){var s__6592__$1 = s__6592;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6592__$1);if(temp__4092__auto__)
{var s__6592__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6592__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__6592__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__6594 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__6593 = 0;while(true){
if((i__6593 < size__4119__auto__))
{var node = cljs.core._nth.call(null,c__4118__auto__,i__6593);cljs.core.chunk_append.call(null,b__6594,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__6595 = (i__6593 + 1);
i__6593 = G__6595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6594),iter__6591.call(null,cljs.core.chunk_rest.call(null,s__6592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6594),null);
}
} else
{var node = cljs.core.first.call(null,s__6592__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__6591.call(null,cljs.core.rest.call(null,s__6592__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__6604 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6605 = null;var count__6606 = 0;var i__6607 = 0;while(true){
if((i__6607 < count__6606))
{var node = cljs.core._nth.call(null,chunk__6605,i__6607);goog.events.removeAll(node);
{
var G__6612 = seq__6604;
var G__6613 = chunk__6605;
var G__6614 = count__6606;
var G__6615 = (i__6607 + 1);
seq__6604 = G__6612;
chunk__6605 = G__6613;
count__6606 = G__6614;
i__6607 = G__6615;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6604);if(temp__4092__auto__)
{var seq__6604__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6604__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__6604__$1);{
var G__6616 = cljs.core.chunk_rest.call(null,seq__6604__$1);
var G__6617 = c__4151__auto__;
var G__6618 = cljs.core.count.call(null,c__4151__auto__);
var G__6619 = 0;
seq__6604 = G__6616;
chunk__6605 = G__6617;
count__6606 = G__6618;
i__6607 = G__6619;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__6604__$1);goog.events.removeAll(node);
{
var G__6620 = cljs.core.next.call(null,seq__6604__$1);
var G__6621 = null;
var G__6622 = 0;
var G__6623 = 0;
seq__6604 = G__6620;
chunk__6605 = G__6621;
count__6606 = G__6622;
i__6607 = G__6623;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__6608 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6609 = null;var count__6610 = 0;var i__6611 = 0;while(true){
if((i__6611 < count__6610))
{var node = cljs.core._nth.call(null,chunk__6609,i__6611);goog.events.removeAll(node,type__$1);
{
var G__6624 = seq__6608;
var G__6625 = chunk__6609;
var G__6626 = count__6610;
var G__6627 = (i__6611 + 1);
seq__6608 = G__6624;
chunk__6609 = G__6625;
count__6610 = G__6626;
i__6611 = G__6627;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6608);if(temp__4092__auto__)
{var seq__6608__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6608__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__6608__$1);{
var G__6628 = cljs.core.chunk_rest.call(null,seq__6608__$1);
var G__6629 = c__4151__auto__;
var G__6630 = cljs.core.count.call(null,c__4151__auto__);
var G__6631 = 0;
seq__6608 = G__6628;
chunk__6609 = G__6629;
count__6610 = G__6630;
i__6611 = G__6631;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__6608__$1);goog.events.removeAll(node,type__$1);
{
var G__6632 = cljs.core.next.call(null,seq__6608__$1);
var G__6633 = null;
var G__6634 = 0;
var G__6635 = 0;
seq__6608 = G__6632;
chunk__6609 = G__6633;
count__6610 = G__6634;
i__6611 = G__6635;
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
var G__6636 = parent;
var G__6637 = cljs.core.cons.call(null,parent,so_far);
n = G__6636;
so_far = G__6637;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__6646_6654 = cljs.core.seq.call(null,ancestors);var chunk__6647_6655 = null;var count__6648_6656 = 0;var i__6649_6657 = 0;while(true){
if((i__6649_6657 < count__6648_6656))
{var n_6658 = cljs.core._nth.call(null,chunk__6647_6655,i__6649_6657);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6658;
goog.events.fireListeners(n_6658,evt.type,true,evt);
}
{
var G__6659 = seq__6646_6654;
var G__6660 = chunk__6647_6655;
var G__6661 = count__6648_6656;
var G__6662 = (i__6649_6657 + 1);
seq__6646_6654 = G__6659;
chunk__6647_6655 = G__6660;
count__6648_6656 = G__6661;
i__6649_6657 = G__6662;
continue;
}
} else
{var temp__4092__auto___6663 = cljs.core.seq.call(null,seq__6646_6654);if(temp__4092__auto___6663)
{var seq__6646_6664__$1 = temp__4092__auto___6663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6646_6664__$1))
{var c__4151__auto___6665 = cljs.core.chunk_first.call(null,seq__6646_6664__$1);{
var G__6666 = cljs.core.chunk_rest.call(null,seq__6646_6664__$1);
var G__6667 = c__4151__auto___6665;
var G__6668 = cljs.core.count.call(null,c__4151__auto___6665);
var G__6669 = 0;
seq__6646_6654 = G__6666;
chunk__6647_6655 = G__6667;
count__6648_6656 = G__6668;
i__6649_6657 = G__6669;
continue;
}
} else
{var n_6670 = cljs.core.first.call(null,seq__6646_6664__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6670;
goog.events.fireListeners(n_6670,evt.type,true,evt);
}
{
var G__6671 = cljs.core.next.call(null,seq__6646_6664__$1);
var G__6672 = null;
var G__6673 = 0;
var G__6674 = 0;
seq__6646_6654 = G__6671;
chunk__6647_6655 = G__6672;
count__6648_6656 = G__6673;
i__6649_6657 = G__6674;
continue;
}
}
} else
{}
}
break;
}
var seq__6650_6675 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__6651_6676 = null;var count__6652_6677 = 0;var i__6653_6678 = 0;while(true){
if((i__6653_6678 < count__6652_6677))
{var n_6679 = cljs.core._nth.call(null,chunk__6651_6676,i__6653_6678);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6679;
goog.events.fireListeners(n_6679,evt.type,false,evt);
}
{
var G__6680 = seq__6650_6675;
var G__6681 = chunk__6651_6676;
var G__6682 = count__6652_6677;
var G__6683 = (i__6653_6678 + 1);
seq__6650_6675 = G__6680;
chunk__6651_6676 = G__6681;
count__6652_6677 = G__6682;
i__6653_6678 = G__6683;
continue;
}
} else
{var temp__4092__auto___6684 = cljs.core.seq.call(null,seq__6650_6675);if(temp__4092__auto___6684)
{var seq__6650_6685__$1 = temp__4092__auto___6684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6650_6685__$1))
{var c__4151__auto___6686 = cljs.core.chunk_first.call(null,seq__6650_6685__$1);{
var G__6687 = cljs.core.chunk_rest.call(null,seq__6650_6685__$1);
var G__6688 = c__4151__auto___6686;
var G__6689 = cljs.core.count.call(null,c__4151__auto___6686);
var G__6690 = 0;
seq__6650_6675 = G__6687;
chunk__6651_6676 = G__6688;
count__6652_6677 = G__6689;
i__6653_6678 = G__6690;
continue;
}
} else
{var n_6691 = cljs.core.first.call(null,seq__6650_6685__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6691;
goog.events.fireListeners(n_6691,evt.type,false,evt);
}
{
var G__6692 = cljs.core.next.call(null,seq__6650_6685__$1);
var G__6693 = null;
var G__6694 = 0;
var G__6695 = 0;
seq__6650_6675 = G__6692;
chunk__6651_6676 = G__6693;
count__6652_6677 = G__6694;
i__6653_6678 = G__6695;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3397__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3397__auto__))
{return o.dispatchEvent;
} else
{return and__3397__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__6702_6708 = cljs.core.seq.call(null,evt_map);var chunk__6703_6709 = null;var count__6704_6710 = 0;var i__6705_6711 = 0;while(true){
if((i__6705_6711 < count__6704_6710))
{var vec__6706_6712 = cljs.core._nth.call(null,chunk__6703_6709,i__6705_6711);var k_6713 = cljs.core.nth.call(null,vec__6706_6712,0,null);var v_6714 = cljs.core.nth.call(null,vec__6706_6712,1,null);(evt[k_6713] = v_6714);
{
var G__6715 = seq__6702_6708;
var G__6716 = chunk__6703_6709;
var G__6717 = count__6704_6710;
var G__6718 = (i__6705_6711 + 1);
seq__6702_6708 = G__6715;
chunk__6703_6709 = G__6716;
count__6704_6710 = G__6717;
i__6705_6711 = G__6718;
continue;
}
} else
{var temp__4092__auto___6719 = cljs.core.seq.call(null,seq__6702_6708);if(temp__4092__auto___6719)
{var seq__6702_6720__$1 = temp__4092__auto___6719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6702_6720__$1))
{var c__4151__auto___6721 = cljs.core.chunk_first.call(null,seq__6702_6720__$1);{
var G__6722 = cljs.core.chunk_rest.call(null,seq__6702_6720__$1);
var G__6723 = c__4151__auto___6721;
var G__6724 = cljs.core.count.call(null,c__4151__auto___6721);
var G__6725 = 0;
seq__6702_6708 = G__6722;
chunk__6703_6709 = G__6723;
count__6704_6710 = G__6724;
i__6705_6711 = G__6725;
continue;
}
} else
{var vec__6707_6726 = cljs.core.first.call(null,seq__6702_6720__$1);var k_6727 = cljs.core.nth.call(null,vec__6707_6726,0,null);var v_6728 = cljs.core.nth.call(null,vec__6707_6726,1,null);(evt[k_6727] = v_6728);
{
var G__6729 = cljs.core.next.call(null,seq__6702_6720__$1);
var G__6730 = null;
var G__6731 = 0;
var G__6732 = 0;
seq__6702_6708 = G__6729;
chunk__6703_6709 = G__6730;
count__6704_6710 = G__6731;
i__6705_6711 = G__6732;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__6733_SHARP_){return goog.events.getListeners(p1__6733_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
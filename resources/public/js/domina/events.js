// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj7363 = {};return obj7363;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t7367 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t7367 = (function (evt,f,create_listener_function,meta7368){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta7368 = meta7368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t7367.cljs$lang$type = true;
domina.events.t7367.cljs$lang$ctorStr = "domina.events/t7367";
domina.events.t7367.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"domina.events/t7367");
});
domina.events.t7367.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t7367.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3409__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return not_found;
}
});
domina.events.t7367.prototype.domina$events$Event$ = true;
domina.events.t7367.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t7367.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t7367.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t7367.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t7367.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t7367.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t7367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7369){var self__ = this;
var _7369__$1 = this;return self__.meta7368;
});
domina.events.t7367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7369,meta7368__$1){var self__ = this;
var _7369__$1 = this;return (new domina.events.t7367(self__.evt,self__.f,self__.create_listener_function,meta7368__$1));
});
domina.events.__GT_t7367 = (function __GT_t7367(evt__$1,f__$1,create_listener_function__$1,meta7368){return (new domina.events.t7367(evt__$1,f__$1,create_listener_function__$1,meta7368));
});
}
return (new domina.events.t7367(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4120__auto__ = (function iter__7374(s__7375){return (new cljs.core.LazySeq(null,(function (){var s__7375__$1 = s__7375;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7375__$1);if(temp__4092__auto__)
{var s__7375__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7375__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__7375__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__7377 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__7376 = 0;while(true){
if((i__7376 < size__4119__auto__))
{var node = cljs.core._nth.call(null,c__4118__auto__,i__7376);cljs.core.chunk_append.call(null,b__7377,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__7378 = (i__7376 + 1);
i__7376 = G__7378;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7377),iter__7374.call(null,cljs.core.chunk_rest.call(null,s__7375__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7377),null);
}
} else
{var node = cljs.core.first.call(null,s__7375__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__7374.call(null,cljs.core.rest.call(null,s__7375__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__7387 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7388 = null;var count__7389 = 0;var i__7390 = 0;while(true){
if((i__7390 < count__7389))
{var node = cljs.core._nth.call(null,chunk__7388,i__7390);goog.events.removeAll(node);
{
var G__7395 = seq__7387;
var G__7396 = chunk__7388;
var G__7397 = count__7389;
var G__7398 = (i__7390 + 1);
seq__7387 = G__7395;
chunk__7388 = G__7396;
count__7389 = G__7397;
i__7390 = G__7398;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7387);if(temp__4092__auto__)
{var seq__7387__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7387__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__7387__$1);{
var G__7399 = cljs.core.chunk_rest.call(null,seq__7387__$1);
var G__7400 = c__4151__auto__;
var G__7401 = cljs.core.count.call(null,c__4151__auto__);
var G__7402 = 0;
seq__7387 = G__7399;
chunk__7388 = G__7400;
count__7389 = G__7401;
i__7390 = G__7402;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__7387__$1);goog.events.removeAll(node);
{
var G__7403 = cljs.core.next.call(null,seq__7387__$1);
var G__7404 = null;
var G__7405 = 0;
var G__7406 = 0;
seq__7387 = G__7403;
chunk__7388 = G__7404;
count__7389 = G__7405;
i__7390 = G__7406;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__7391 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7392 = null;var count__7393 = 0;var i__7394 = 0;while(true){
if((i__7394 < count__7393))
{var node = cljs.core._nth.call(null,chunk__7392,i__7394);goog.events.removeAll(node,type__$1);
{
var G__7407 = seq__7391;
var G__7408 = chunk__7392;
var G__7409 = count__7393;
var G__7410 = (i__7394 + 1);
seq__7391 = G__7407;
chunk__7392 = G__7408;
count__7393 = G__7409;
i__7394 = G__7410;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7391);if(temp__4092__auto__)
{var seq__7391__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7391__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__7391__$1);{
var G__7411 = cljs.core.chunk_rest.call(null,seq__7391__$1);
var G__7412 = c__4151__auto__;
var G__7413 = cljs.core.count.call(null,c__4151__auto__);
var G__7414 = 0;
seq__7391 = G__7411;
chunk__7392 = G__7412;
count__7393 = G__7413;
i__7394 = G__7414;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__7391__$1);goog.events.removeAll(node,type__$1);
{
var G__7415 = cljs.core.next.call(null,seq__7391__$1);
var G__7416 = null;
var G__7417 = 0;
var G__7418 = 0;
seq__7391 = G__7415;
chunk__7392 = G__7416;
count__7393 = G__7417;
i__7394 = G__7418;
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
var G__7419 = parent;
var G__7420 = cljs.core.cons.call(null,parent,so_far);
n = G__7419;
so_far = G__7420;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__7429_7437 = cljs.core.seq.call(null,ancestors);var chunk__7430_7438 = null;var count__7431_7439 = 0;var i__7432_7440 = 0;while(true){
if((i__7432_7440 < count__7431_7439))
{var n_7441 = cljs.core._nth.call(null,chunk__7430_7438,i__7432_7440);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_7441;
goog.events.fireListeners(n_7441,evt.type,true,evt);
}
{
var G__7442 = seq__7429_7437;
var G__7443 = chunk__7430_7438;
var G__7444 = count__7431_7439;
var G__7445 = (i__7432_7440 + 1);
seq__7429_7437 = G__7442;
chunk__7430_7438 = G__7443;
count__7431_7439 = G__7444;
i__7432_7440 = G__7445;
continue;
}
} else
{var temp__4092__auto___7446 = cljs.core.seq.call(null,seq__7429_7437);if(temp__4092__auto___7446)
{var seq__7429_7447__$1 = temp__4092__auto___7446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7429_7447__$1))
{var c__4151__auto___7448 = cljs.core.chunk_first.call(null,seq__7429_7447__$1);{
var G__7449 = cljs.core.chunk_rest.call(null,seq__7429_7447__$1);
var G__7450 = c__4151__auto___7448;
var G__7451 = cljs.core.count.call(null,c__4151__auto___7448);
var G__7452 = 0;
seq__7429_7437 = G__7449;
chunk__7430_7438 = G__7450;
count__7431_7439 = G__7451;
i__7432_7440 = G__7452;
continue;
}
} else
{var n_7453 = cljs.core.first.call(null,seq__7429_7447__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_7453;
goog.events.fireListeners(n_7453,evt.type,true,evt);
}
{
var G__7454 = cljs.core.next.call(null,seq__7429_7447__$1);
var G__7455 = null;
var G__7456 = 0;
var G__7457 = 0;
seq__7429_7437 = G__7454;
chunk__7430_7438 = G__7455;
count__7431_7439 = G__7456;
i__7432_7440 = G__7457;
continue;
}
}
} else
{}
}
break;
}
var seq__7433_7458 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__7434_7459 = null;var count__7435_7460 = 0;var i__7436_7461 = 0;while(true){
if((i__7436_7461 < count__7435_7460))
{var n_7462 = cljs.core._nth.call(null,chunk__7434_7459,i__7436_7461);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_7462;
goog.events.fireListeners(n_7462,evt.type,false,evt);
}
{
var G__7463 = seq__7433_7458;
var G__7464 = chunk__7434_7459;
var G__7465 = count__7435_7460;
var G__7466 = (i__7436_7461 + 1);
seq__7433_7458 = G__7463;
chunk__7434_7459 = G__7464;
count__7435_7460 = G__7465;
i__7436_7461 = G__7466;
continue;
}
} else
{var temp__4092__auto___7467 = cljs.core.seq.call(null,seq__7433_7458);if(temp__4092__auto___7467)
{var seq__7433_7468__$1 = temp__4092__auto___7467;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7433_7468__$1))
{var c__4151__auto___7469 = cljs.core.chunk_first.call(null,seq__7433_7468__$1);{
var G__7470 = cljs.core.chunk_rest.call(null,seq__7433_7468__$1);
var G__7471 = c__4151__auto___7469;
var G__7472 = cljs.core.count.call(null,c__4151__auto___7469);
var G__7473 = 0;
seq__7433_7458 = G__7470;
chunk__7434_7459 = G__7471;
count__7435_7460 = G__7472;
i__7436_7461 = G__7473;
continue;
}
} else
{var n_7474 = cljs.core.first.call(null,seq__7433_7468__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_7474;
goog.events.fireListeners(n_7474,evt.type,false,evt);
}
{
var G__7475 = cljs.core.next.call(null,seq__7433_7468__$1);
var G__7476 = null;
var G__7477 = 0;
var G__7478 = 0;
seq__7433_7458 = G__7475;
chunk__7434_7459 = G__7476;
count__7435_7460 = G__7477;
i__7436_7461 = G__7478;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__7485_7491 = cljs.core.seq.call(null,evt_map);var chunk__7486_7492 = null;var count__7487_7493 = 0;var i__7488_7494 = 0;while(true){
if((i__7488_7494 < count__7487_7493))
{var vec__7489_7495 = cljs.core._nth.call(null,chunk__7486_7492,i__7488_7494);var k_7496 = cljs.core.nth.call(null,vec__7489_7495,0,null);var v_7497 = cljs.core.nth.call(null,vec__7489_7495,1,null);(evt[k_7496] = v_7497);
{
var G__7498 = seq__7485_7491;
var G__7499 = chunk__7486_7492;
var G__7500 = count__7487_7493;
var G__7501 = (i__7488_7494 + 1);
seq__7485_7491 = G__7498;
chunk__7486_7492 = G__7499;
count__7487_7493 = G__7500;
i__7488_7494 = G__7501;
continue;
}
} else
{var temp__4092__auto___7502 = cljs.core.seq.call(null,seq__7485_7491);if(temp__4092__auto___7502)
{var seq__7485_7503__$1 = temp__4092__auto___7502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7485_7503__$1))
{var c__4151__auto___7504 = cljs.core.chunk_first.call(null,seq__7485_7503__$1);{
var G__7505 = cljs.core.chunk_rest.call(null,seq__7485_7503__$1);
var G__7506 = c__4151__auto___7504;
var G__7507 = cljs.core.count.call(null,c__4151__auto___7504);
var G__7508 = 0;
seq__7485_7491 = G__7505;
chunk__7486_7492 = G__7506;
count__7487_7493 = G__7507;
i__7488_7494 = G__7508;
continue;
}
} else
{var vec__7490_7509 = cljs.core.first.call(null,seq__7485_7503__$1);var k_7510 = cljs.core.nth.call(null,vec__7490_7509,0,null);var v_7511 = cljs.core.nth.call(null,vec__7490_7509,1,null);(evt[k_7510] = v_7511);
{
var G__7512 = cljs.core.next.call(null,seq__7485_7503__$1);
var G__7513 = null;
var G__7514 = 0;
var G__7515 = 0;
seq__7485_7491 = G__7512;
chunk__7486_7492 = G__7513;
count__7487_7493 = G__7514;
i__7488_7494 = G__7515;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__7516_SHARP_){return goog.events.getListeners(p1__7516_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
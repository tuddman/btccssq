// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj9714 = {};return obj9714;
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
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol("Event.target",evt);
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
{throw cljs.core.missing_protocol("Event.current-target",evt);
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
{throw cljs.core.missing_protocol("Event.event-type",evt);
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
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t9718 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t9718 = (function (evt,f,create_listener_function,meta9719){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta9719 = meta9719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t9718.cljs$lang$type = true;
domina.events.t9718.cljs$lang$ctorStr = "domina.events/t9718";
domina.events.t9718.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"domina.events/t9718");
});
domina.events.t9718.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t9718.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3409__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return not_found;
}
});
domina.events.t9718.prototype.domina$events$Event$ = true;
domina.events.t9718.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t9718.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t9718.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t9718.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t9718.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t9718.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t9718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9720){var self__ = this;
var _9720__$1 = this;return self__.meta9719;
});
domina.events.t9718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9720,meta9719__$1){var self__ = this;
var _9720__$1 = this;return (new domina.events.t9718(self__.evt,self__.f,self__.create_listener_function,meta9719__$1));
});
domina.events.__GT_t9718 = (function __GT_t9718(evt__$1,f__$1,create_listener_function__$1,meta9719){return (new domina.events.t9718(evt__$1,f__$1,create_listener_function__$1,meta9719));
});
}
return (new domina.events.t9718(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t9718 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t9718 = (function (evt,f,create_listener_function,meta9719){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta9719 = meta9719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t9718.cljs$lang$type = true;
domina.events.t9718.cljs$lang$ctorStr = "domina.events/t9718";
domina.events.t9718.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"domina.events/t9718");
});
domina.events.t9718.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t9718.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3409__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return not_found;
}
});
domina.events.t9718.prototype.domina$events$Event$ = true;
domina.events.t9718.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t9718.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t9718.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t9718.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t9718.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t9718.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t9718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9720){var self__ = this;
var _9720__$1 = this;return self__.meta9719;
});
domina.events.t9718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9720,meta9719__$1){var self__ = this;
var _9720__$1 = this;return (new domina.events.t9718(self__.evt,self__.f,self__.create_listener_function,meta9719__$1));
});
domina.events.__GT_t9718 = (function __GT_t9718(evt__$1,f__$1,create_listener_function__$1,meta9719){return (new domina.events.t9718(evt__$1,f__$1,create_listener_function__$1,meta9719));
});
}
return (new domina.events.t9718(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4120__auto__ = (function iter__9725(s__9726){return (new cljs.core.LazySeq(null,(function (){var s__9726__$1 = s__9726;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9726__$1);if(temp__4092__auto__)
{var s__9726__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9726__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__9726__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__9728 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__9727 = 0;while(true){
if((i__9727 < size__4119__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__9727);cljs.core.chunk_append(b__9728,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__9729 = (i__9727 + 1);
i__9727 = G__9729;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9728),iter__9725(cljs.core.chunk_rest(s__9726__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9728),null);
}
} else
{var node = cljs.core.first(s__9726__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__9725(cljs.core.rest(s__9726__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(domina.nodes(content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,false,false);
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
var capture_BANG___2 = (function (type,listener){return capture_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,true,false);
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
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,false,true);
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
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,true,true);
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
var unlisten_BANG___0 = (function (){return unlisten_BANG_.cljs$core$IFn$_invoke$arity$1(domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__9738 = cljs.core.seq(domina.nodes(content));var chunk__9739 = null;var count__9740 = 0;var i__9741 = 0;while(true){
if((i__9741 < count__9740))
{var node = chunk__9739.cljs$core$IIndexed$_nth$arity$2(null,i__9741);goog.events.removeAll(node);
{
var G__9746 = seq__9738;
var G__9747 = chunk__9739;
var G__9748 = count__9740;
var G__9749 = (i__9741 + 1);
seq__9738 = G__9746;
chunk__9739 = G__9747;
count__9740 = G__9748;
i__9741 = G__9749;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9738);if(temp__4092__auto__)
{var seq__9738__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9738__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__9738__$1);{
var G__9750 = cljs.core.chunk_rest(seq__9738__$1);
var G__9751 = c__4151__auto__;
var G__9752 = cljs.core.count(c__4151__auto__);
var G__9753 = 0;
seq__9738 = G__9750;
chunk__9739 = G__9751;
count__9740 = G__9752;
i__9741 = G__9753;
continue;
}
} else
{var node = cljs.core.first(seq__9738__$1);goog.events.removeAll(node);
{
var G__9754 = cljs.core.next(seq__9738__$1);
var G__9755 = null;
var G__9756 = 0;
var G__9757 = 0;
seq__9738 = G__9754;
chunk__9739 = G__9755;
count__9740 = G__9756;
i__9741 = G__9757;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__9742 = cljs.core.seq(domina.nodes(content));var chunk__9743 = null;var count__9744 = 0;var i__9745 = 0;while(true){
if((i__9745 < count__9744))
{var node = chunk__9743.cljs$core$IIndexed$_nth$arity$2(null,i__9745);goog.events.removeAll(node,type__$1);
{
var G__9758 = seq__9742;
var G__9759 = chunk__9743;
var G__9760 = count__9744;
var G__9761 = (i__9745 + 1);
seq__9742 = G__9758;
chunk__9743 = G__9759;
count__9744 = G__9760;
i__9745 = G__9761;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9742);if(temp__4092__auto__)
{var seq__9742__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9742__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__9742__$1);{
var G__9762 = cljs.core.chunk_rest(seq__9742__$1);
var G__9763 = c__4151__auto__;
var G__9764 = cljs.core.count(c__4151__auto__);
var G__9765 = 0;
seq__9742 = G__9762;
chunk__9743 = G__9763;
count__9744 = G__9764;
i__9745 = G__9765;
continue;
}
} else
{var node = cljs.core.first(seq__9742__$1);goog.events.removeAll(node,type__$1);
{
var G__9766 = cljs.core.next(seq__9742__$1);
var G__9767 = null;
var G__9768 = 0;
var G__9769 = 0;
seq__9742 = G__9766;
chunk__9743 = G__9767;
count__9744 = G__9768;
i__9745 = G__9769;
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
var ancestor_nodes__1 = (function (n){return ancestor_nodes.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__9770 = parent;
var G__9771 = cljs.core.cons(parent,so_far);
n = G__9770;
so_far = G__9771;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__9780_9788 = cljs.core.seq(ancestors);var chunk__9781_9789 = null;var count__9782_9790 = 0;var i__9783_9791 = 0;while(true){
if((i__9783_9791 < count__9782_9790))
{var n_9792 = chunk__9781_9789.cljs$core$IIndexed$_nth$arity$2(null,i__9783_9791);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_9792;
goog.events.fireListeners(n_9792,evt.type,true,evt);
}
{
var G__9793 = seq__9780_9788;
var G__9794 = chunk__9781_9789;
var G__9795 = count__9782_9790;
var G__9796 = (i__9783_9791 + 1);
seq__9780_9788 = G__9793;
chunk__9781_9789 = G__9794;
count__9782_9790 = G__9795;
i__9783_9791 = G__9796;
continue;
}
} else
{var temp__4092__auto___9797 = cljs.core.seq(seq__9780_9788);if(temp__4092__auto___9797)
{var seq__9780_9798__$1 = temp__4092__auto___9797;if(cljs.core.chunked_seq_QMARK_(seq__9780_9798__$1))
{var c__4151__auto___9799 = cljs.core.chunk_first(seq__9780_9798__$1);{
var G__9800 = cljs.core.chunk_rest(seq__9780_9798__$1);
var G__9801 = c__4151__auto___9799;
var G__9802 = cljs.core.count(c__4151__auto___9799);
var G__9803 = 0;
seq__9780_9788 = G__9800;
chunk__9781_9789 = G__9801;
count__9782_9790 = G__9802;
i__9783_9791 = G__9803;
continue;
}
} else
{var n_9804 = cljs.core.first(seq__9780_9798__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_9804;
goog.events.fireListeners(n_9804,evt.type,true,evt);
}
{
var G__9805 = cljs.core.next(seq__9780_9798__$1);
var G__9806 = null;
var G__9807 = 0;
var G__9808 = 0;
seq__9780_9788 = G__9805;
chunk__9781_9789 = G__9806;
count__9782_9790 = G__9807;
i__9783_9791 = G__9808;
continue;
}
}
} else
{}
}
break;
}
var seq__9784_9809 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__9785_9810 = null;var count__9786_9811 = 0;var i__9787_9812 = 0;while(true){
if((i__9787_9812 < count__9786_9811))
{var n_9813 = chunk__9785_9810.cljs$core$IIndexed$_nth$arity$2(null,i__9787_9812);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_9813;
goog.events.fireListeners(n_9813,evt.type,false,evt);
}
{
var G__9814 = seq__9784_9809;
var G__9815 = chunk__9785_9810;
var G__9816 = count__9786_9811;
var G__9817 = (i__9787_9812 + 1);
seq__9784_9809 = G__9814;
chunk__9785_9810 = G__9815;
count__9786_9811 = G__9816;
i__9787_9812 = G__9817;
continue;
}
} else
{var temp__4092__auto___9818 = cljs.core.seq(seq__9784_9809);if(temp__4092__auto___9818)
{var seq__9784_9819__$1 = temp__4092__auto___9818;if(cljs.core.chunked_seq_QMARK_(seq__9784_9819__$1))
{var c__4151__auto___9820 = cljs.core.chunk_first(seq__9784_9819__$1);{
var G__9821 = cljs.core.chunk_rest(seq__9784_9819__$1);
var G__9822 = c__4151__auto___9820;
var G__9823 = cljs.core.count(c__4151__auto___9820);
var G__9824 = 0;
seq__9784_9809 = G__9821;
chunk__9785_9810 = G__9822;
count__9786_9811 = G__9823;
i__9787_9812 = G__9824;
continue;
}
} else
{var n_9825 = cljs.core.first(seq__9784_9819__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_9825;
goog.events.fireListeners(n_9825,evt.type,false,evt);
}
{
var G__9826 = cljs.core.next(seq__9784_9819__$1);
var G__9827 = null;
var G__9828 = 0;
var G__9829 = 0;
seq__9784_9809 = G__9826;
chunk__9785_9810 = G__9827;
count__9786_9811 = G__9828;
i__9787_9812 = G__9829;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__9836_9842 = cljs.core.seq(evt_map);var chunk__9837_9843 = null;var count__9838_9844 = 0;var i__9839_9845 = 0;while(true){
if((i__9839_9845 < count__9838_9844))
{var vec__9840_9846 = chunk__9837_9843.cljs$core$IIndexed$_nth$arity$2(null,i__9839_9845);var k_9847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9840_9846,0,null);var v_9848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9840_9846,1,null);(evt[k_9847] = v_9848);
{
var G__9849 = seq__9836_9842;
var G__9850 = chunk__9837_9843;
var G__9851 = count__9838_9844;
var G__9852 = (i__9839_9845 + 1);
seq__9836_9842 = G__9849;
chunk__9837_9843 = G__9850;
count__9838_9844 = G__9851;
i__9839_9845 = G__9852;
continue;
}
} else
{var temp__4092__auto___9853 = cljs.core.seq(seq__9836_9842);if(temp__4092__auto___9853)
{var seq__9836_9854__$1 = temp__4092__auto___9853;if(cljs.core.chunked_seq_QMARK_(seq__9836_9854__$1))
{var c__4151__auto___9855 = cljs.core.chunk_first(seq__9836_9854__$1);{
var G__9856 = cljs.core.chunk_rest(seq__9836_9854__$1);
var G__9857 = c__4151__auto___9855;
var G__9858 = cljs.core.count(c__4151__auto___9855);
var G__9859 = 0;
seq__9836_9842 = G__9856;
chunk__9837_9843 = G__9857;
count__9838_9844 = G__9858;
i__9839_9845 = G__9859;
continue;
}
} else
{var vec__9841_9860 = cljs.core.first(seq__9836_9854__$1);var k_9861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9841_9860,0,null);var v_9862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9841_9860,1,null);(evt[k_9861] = v_9862);
{
var G__9863 = cljs.core.next(seq__9836_9854__$1);
var G__9864 = null;
var G__9865 = 0;
var G__9866 = 0;
seq__9836_9842 = G__9863;
chunk__9837_9843 = G__9864;
count__9838_9844 = G__9865;
i__9839_9845 = G__9866;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source)))
{return domina.events.dispatch_event_target_BANG_(source,evt);
} else
{return domina.events.dispatch_browser_BANG_(source,evt);
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__9867_SHARP_){return goog.events.getListeners(p1__9867_SHARP_,type__$1,false);
}),domina.nodes(content));
});

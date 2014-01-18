// Compiled by ClojureScript 0.0-2127
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14058 = {};return obj14058;
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
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol("Event.target",evt);
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
{throw cljs.core.missing_protocol("Event.current-target",evt);
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
{throw cljs.core.missing_protocol("Event.event-type",evt);
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
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t14062 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14062 = (function (evt,f,create_listener_function,meta14063){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14063 = meta14063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14062.cljs$lang$type = true;
domina.events.t14062.cljs$lang$ctorStr = "domina.events/t14062";
domina.events.t14062.cljs$lang$ctorPrWriter = (function (this__3946__auto__,writer__3947__auto__,opt__3948__auto__){return cljs.core._write(writer__3947__auto__,"domina.events/t14062");
});
domina.events.t14062.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t14062.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3397__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return not_found;
}
});
domina.events.t14062.prototype.domina$events$Event$ = true;
domina.events.t14062.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14062.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14062.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14062.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14062.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14062.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14064){var self__ = this;
var _14064__$1 = this;return self__.meta14063;
});
domina.events.t14062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14064,meta14063__$1){var self__ = this;
var _14064__$1 = this;return (new domina.events.t14062(self__.evt,self__.f,self__.create_listener_function,meta14063__$1));
});
domina.events.__GT_t14062 = (function __GT_t14062(evt__$1,f__$1,create_listener_function__$1,meta14063){return (new domina.events.t14062(evt__$1,f__$1,create_listener_function__$1,meta14063));
});
}
return (new domina.events.t14062(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t14062 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14062 = (function (evt,f,create_listener_function,meta14063){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14063 = meta14063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14062.cljs$lang$type = true;
domina.events.t14062.cljs$lang$ctorStr = "domina.events/t14062";
domina.events.t14062.cljs$lang$ctorPrWriter = (function (this__3946__auto__,writer__3947__auto__,opt__3948__auto__){return cljs.core._write(writer__3947__auto__,"domina.events/t14062");
});
domina.events.t14062.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t14062.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3397__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return not_found;
}
});
domina.events.t14062.prototype.domina$events$Event$ = true;
domina.events.t14062.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14062.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14062.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14062.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14062.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14062.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14064){var self__ = this;
var _14064__$1 = this;return self__.meta14063;
});
domina.events.t14062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14064,meta14063__$1){var self__ = this;
var _14064__$1 = this;return (new domina.events.t14062(self__.evt,self__.f,self__.create_listener_function,meta14063__$1));
});
domina.events.__GT_t14062 = (function __GT_t14062(evt__$1,f__$1,create_listener_function__$1,meta14063){return (new domina.events.t14062(evt__$1,f__$1,create_listener_function__$1,meta14063));
});
}
return (new domina.events.t14062(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4095__auto__ = (function iter__14069(s__14070){return (new cljs.core.LazySeq(null,(function (){var s__14070__$1 = s__14070;while(true){
var temp__4092__auto__ = cljs.core.seq(s__14070__$1);if(temp__4092__auto__)
{var s__14070__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__14070__$2))
{var c__4093__auto__ = cljs.core.chunk_first(s__14070__$2);var size__4094__auto__ = cljs.core.count(c__4093__auto__);var b__14072 = cljs.core.chunk_buffer(size__4094__auto__);if((function (){var i__14071 = 0;while(true){
if((i__14071 < size__4094__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4093__auto__,i__14071);cljs.core.chunk_append(b__14072,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14073 = (i__14071 + 1);
i__14071 = G__14073;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14072),iter__14069(cljs.core.chunk_rest(s__14070__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14072),null);
}
} else
{var node = cljs.core.first(s__14070__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14069(cljs.core.rest(s__14070__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4095__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__14082 = cljs.core.seq(domina.nodes(content));var chunk__14083 = null;var count__14084 = 0;var i__14085 = 0;while(true){
if((i__14085 < count__14084))
{var node = chunk__14083.cljs$core$IIndexed$_nth$arity$2(null,i__14085);goog.events.removeAll(node);
{
var G__14090 = seq__14082;
var G__14091 = chunk__14083;
var G__14092 = count__14084;
var G__14093 = (i__14085 + 1);
seq__14082 = G__14090;
chunk__14083 = G__14091;
count__14084 = G__14092;
i__14085 = G__14093;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__14082);if(temp__4092__auto__)
{var seq__14082__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__14082__$1))
{var c__4126__auto__ = cljs.core.chunk_first(seq__14082__$1);{
var G__14094 = cljs.core.chunk_rest(seq__14082__$1);
var G__14095 = c__4126__auto__;
var G__14096 = cljs.core.count(c__4126__auto__);
var G__14097 = 0;
seq__14082 = G__14094;
chunk__14083 = G__14095;
count__14084 = G__14096;
i__14085 = G__14097;
continue;
}
} else
{var node = cljs.core.first(seq__14082__$1);goog.events.removeAll(node);
{
var G__14098 = cljs.core.next(seq__14082__$1);
var G__14099 = null;
var G__14100 = 0;
var G__14101 = 0;
seq__14082 = G__14098;
chunk__14083 = G__14099;
count__14084 = G__14100;
i__14085 = G__14101;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__14086 = cljs.core.seq(domina.nodes(content));var chunk__14087 = null;var count__14088 = 0;var i__14089 = 0;while(true){
if((i__14089 < count__14088))
{var node = chunk__14087.cljs$core$IIndexed$_nth$arity$2(null,i__14089);goog.events.removeAll(node,type__$1);
{
var G__14102 = seq__14086;
var G__14103 = chunk__14087;
var G__14104 = count__14088;
var G__14105 = (i__14089 + 1);
seq__14086 = G__14102;
chunk__14087 = G__14103;
count__14088 = G__14104;
i__14089 = G__14105;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__14086);if(temp__4092__auto__)
{var seq__14086__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__14086__$1))
{var c__4126__auto__ = cljs.core.chunk_first(seq__14086__$1);{
var G__14106 = cljs.core.chunk_rest(seq__14086__$1);
var G__14107 = c__4126__auto__;
var G__14108 = cljs.core.count(c__4126__auto__);
var G__14109 = 0;
seq__14086 = G__14106;
chunk__14087 = G__14107;
count__14088 = G__14108;
i__14089 = G__14109;
continue;
}
} else
{var node = cljs.core.first(seq__14086__$1);goog.events.removeAll(node,type__$1);
{
var G__14110 = cljs.core.next(seq__14086__$1);
var G__14111 = null;
var G__14112 = 0;
var G__14113 = 0;
seq__14086 = G__14110;
chunk__14087 = G__14111;
count__14088 = G__14112;
i__14089 = G__14113;
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
var G__14114 = parent;
var G__14115 = cljs.core.cons(parent,so_far);
n = G__14114;
so_far = G__14115;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__14124_14132 = cljs.core.seq(ancestors);var chunk__14125_14133 = null;var count__14126_14134 = 0;var i__14127_14135 = 0;while(true){
if((i__14127_14135 < count__14126_14134))
{var n_14136 = chunk__14125_14133.cljs$core$IIndexed$_nth$arity$2(null,i__14127_14135);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14136;
goog.events.fireListeners(n_14136,evt.type,true,evt);
}
{
var G__14137 = seq__14124_14132;
var G__14138 = chunk__14125_14133;
var G__14139 = count__14126_14134;
var G__14140 = (i__14127_14135 + 1);
seq__14124_14132 = G__14137;
chunk__14125_14133 = G__14138;
count__14126_14134 = G__14139;
i__14127_14135 = G__14140;
continue;
}
} else
{var temp__4092__auto___14141 = cljs.core.seq(seq__14124_14132);if(temp__4092__auto___14141)
{var seq__14124_14142__$1 = temp__4092__auto___14141;if(cljs.core.chunked_seq_QMARK_(seq__14124_14142__$1))
{var c__4126__auto___14143 = cljs.core.chunk_first(seq__14124_14142__$1);{
var G__14144 = cljs.core.chunk_rest(seq__14124_14142__$1);
var G__14145 = c__4126__auto___14143;
var G__14146 = cljs.core.count(c__4126__auto___14143);
var G__14147 = 0;
seq__14124_14132 = G__14144;
chunk__14125_14133 = G__14145;
count__14126_14134 = G__14146;
i__14127_14135 = G__14147;
continue;
}
} else
{var n_14148 = cljs.core.first(seq__14124_14142__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14148;
goog.events.fireListeners(n_14148,evt.type,true,evt);
}
{
var G__14149 = cljs.core.next(seq__14124_14142__$1);
var G__14150 = null;
var G__14151 = 0;
var G__14152 = 0;
seq__14124_14132 = G__14149;
chunk__14125_14133 = G__14150;
count__14126_14134 = G__14151;
i__14127_14135 = G__14152;
continue;
}
}
} else
{}
}
break;
}
var seq__14128_14153 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__14129_14154 = null;var count__14130_14155 = 0;var i__14131_14156 = 0;while(true){
if((i__14131_14156 < count__14130_14155))
{var n_14157 = chunk__14129_14154.cljs$core$IIndexed$_nth$arity$2(null,i__14131_14156);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14157;
goog.events.fireListeners(n_14157,evt.type,false,evt);
}
{
var G__14158 = seq__14128_14153;
var G__14159 = chunk__14129_14154;
var G__14160 = count__14130_14155;
var G__14161 = (i__14131_14156 + 1);
seq__14128_14153 = G__14158;
chunk__14129_14154 = G__14159;
count__14130_14155 = G__14160;
i__14131_14156 = G__14161;
continue;
}
} else
{var temp__4092__auto___14162 = cljs.core.seq(seq__14128_14153);if(temp__4092__auto___14162)
{var seq__14128_14163__$1 = temp__4092__auto___14162;if(cljs.core.chunked_seq_QMARK_(seq__14128_14163__$1))
{var c__4126__auto___14164 = cljs.core.chunk_first(seq__14128_14163__$1);{
var G__14165 = cljs.core.chunk_rest(seq__14128_14163__$1);
var G__14166 = c__4126__auto___14164;
var G__14167 = cljs.core.count(c__4126__auto___14164);
var G__14168 = 0;
seq__14128_14153 = G__14165;
chunk__14129_14154 = G__14166;
count__14130_14155 = G__14167;
i__14131_14156 = G__14168;
continue;
}
} else
{var n_14169 = cljs.core.first(seq__14128_14163__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14169;
goog.events.fireListeners(n_14169,evt.type,false,evt);
}
{
var G__14170 = cljs.core.next(seq__14128_14163__$1);
var G__14171 = null;
var G__14172 = 0;
var G__14173 = 0;
seq__14128_14153 = G__14170;
chunk__14129_14154 = G__14171;
count__14130_14155 = G__14172;
i__14131_14156 = G__14173;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__14180_14186 = cljs.core.seq(evt_map);var chunk__14181_14187 = null;var count__14182_14188 = 0;var i__14183_14189 = 0;while(true){
if((i__14183_14189 < count__14182_14188))
{var vec__14184_14190 = chunk__14181_14187.cljs$core$IIndexed$_nth$arity$2(null,i__14183_14189);var k_14191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14184_14190,0,null);var v_14192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14184_14190,1,null);(evt[k_14191] = v_14192);
{
var G__14193 = seq__14180_14186;
var G__14194 = chunk__14181_14187;
var G__14195 = count__14182_14188;
var G__14196 = (i__14183_14189 + 1);
seq__14180_14186 = G__14193;
chunk__14181_14187 = G__14194;
count__14182_14188 = G__14195;
i__14183_14189 = G__14196;
continue;
}
} else
{var temp__4092__auto___14197 = cljs.core.seq(seq__14180_14186);if(temp__4092__auto___14197)
{var seq__14180_14198__$1 = temp__4092__auto___14197;if(cljs.core.chunked_seq_QMARK_(seq__14180_14198__$1))
{var c__4126__auto___14199 = cljs.core.chunk_first(seq__14180_14198__$1);{
var G__14200 = cljs.core.chunk_rest(seq__14180_14198__$1);
var G__14201 = c__4126__auto___14199;
var G__14202 = cljs.core.count(c__4126__auto___14199);
var G__14203 = 0;
seq__14180_14186 = G__14200;
chunk__14181_14187 = G__14201;
count__14182_14188 = G__14202;
i__14183_14189 = G__14203;
continue;
}
} else
{var vec__14185_14204 = cljs.core.first(seq__14180_14198__$1);var k_14205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185_14204,0,null);var v_14206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185_14204,1,null);(evt[k_14205] = v_14206);
{
var G__14207 = cljs.core.next(seq__14180_14198__$1);
var G__14208 = null;
var G__14209 = 0;
var G__14210 = 0;
seq__14180_14186 = G__14207;
chunk__14181_14187 = G__14208;
count__14182_14188 = G__14209;
i__14183_14189 = G__14210;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__14211_SHARP_){return goog.events.getListeners(p1__14211_SHARP_,type__$1,false);
}),domina.nodes(content));
});

// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj9866 = {};return obj9866;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t9870 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t9870 = (function (evt,f,create_listener_function,meta9871){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta9871 = meta9871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t9870.cljs$lang$type = true;
domina.events.t9870.cljs$lang$ctorStr = "domina.events/t9870";
domina.events.t9870.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"domina.events/t9870");
});
domina.events.t9870.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t9870.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3409__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return not_found;
}
});
domina.events.t9870.prototype.domina$events$Event$ = true;
domina.events.t9870.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t9870.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t9870.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t9870.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t9870.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t9870.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t9870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9872){var self__ = this;
var _9872__$1 = this;return self__.meta9871;
});
domina.events.t9870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9872,meta9871__$1){var self__ = this;
var _9872__$1 = this;return (new domina.events.t9870(self__.evt,self__.f,self__.create_listener_function,meta9871__$1));
});
domina.events.__GT_t9870 = (function __GT_t9870(evt__$1,f__$1,create_listener_function__$1,meta9871){return (new domina.events.t9870(evt__$1,f__$1,create_listener_function__$1,meta9871));
});
}
return (new domina.events.t9870(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t9870 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t9870 = (function (evt,f,create_listener_function,meta9871){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta9871 = meta9871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t9870.cljs$lang$type = true;
domina.events.t9870.cljs$lang$ctorStr = "domina.events/t9870";
domina.events.t9870.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"domina.events/t9870");
});
domina.events.t9870.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t9870.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3409__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return not_found;
}
});
domina.events.t9870.prototype.domina$events$Event$ = true;
domina.events.t9870.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t9870.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t9870.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t9870.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t9870.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t9870.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t9870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9872){var self__ = this;
var _9872__$1 = this;return self__.meta9871;
});
domina.events.t9870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9872,meta9871__$1){var self__ = this;
var _9872__$1 = this;return (new domina.events.t9870(self__.evt,self__.f,self__.create_listener_function,meta9871__$1));
});
domina.events.__GT_t9870 = (function __GT_t9870(evt__$1,f__$1,create_listener_function__$1,meta9871){return (new domina.events.t9870(evt__$1,f__$1,create_listener_function__$1,meta9871));
});
}
return (new domina.events.t9870(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4120__auto__ = (function iter__9877(s__9878){return (new cljs.core.LazySeq(null,(function (){var s__9878__$1 = s__9878;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9878__$1);if(temp__4092__auto__)
{var s__9878__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9878__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__9878__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__9880 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__9879 = 0;while(true){
if((i__9879 < size__4119__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__9879);cljs.core.chunk_append(b__9880,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__9881 = (i__9879 + 1);
i__9879 = G__9881;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9880),iter__9877(cljs.core.chunk_rest(s__9878__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9880),null);
}
} else
{var node = cljs.core.first(s__9878__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__9877(cljs.core.rest(s__9878__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__9890 = cljs.core.seq(domina.nodes(content));var chunk__9891 = null;var count__9892 = 0;var i__9893 = 0;while(true){
if((i__9893 < count__9892))
{var node = chunk__9891.cljs$core$IIndexed$_nth$arity$2(null,i__9893);goog.events.removeAll(node);
{
var G__9898 = seq__9890;
var G__9899 = chunk__9891;
var G__9900 = count__9892;
var G__9901 = (i__9893 + 1);
seq__9890 = G__9898;
chunk__9891 = G__9899;
count__9892 = G__9900;
i__9893 = G__9901;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9890);if(temp__4092__auto__)
{var seq__9890__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9890__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__9890__$1);{
var G__9902 = cljs.core.chunk_rest(seq__9890__$1);
var G__9903 = c__4151__auto__;
var G__9904 = cljs.core.count(c__4151__auto__);
var G__9905 = 0;
seq__9890 = G__9902;
chunk__9891 = G__9903;
count__9892 = G__9904;
i__9893 = G__9905;
continue;
}
} else
{var node = cljs.core.first(seq__9890__$1);goog.events.removeAll(node);
{
var G__9906 = cljs.core.next(seq__9890__$1);
var G__9907 = null;
var G__9908 = 0;
var G__9909 = 0;
seq__9890 = G__9906;
chunk__9891 = G__9907;
count__9892 = G__9908;
i__9893 = G__9909;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__9894 = cljs.core.seq(domina.nodes(content));var chunk__9895 = null;var count__9896 = 0;var i__9897 = 0;while(true){
if((i__9897 < count__9896))
{var node = chunk__9895.cljs$core$IIndexed$_nth$arity$2(null,i__9897);goog.events.removeAll(node,type__$1);
{
var G__9910 = seq__9894;
var G__9911 = chunk__9895;
var G__9912 = count__9896;
var G__9913 = (i__9897 + 1);
seq__9894 = G__9910;
chunk__9895 = G__9911;
count__9896 = G__9912;
i__9897 = G__9913;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9894);if(temp__4092__auto__)
{var seq__9894__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9894__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__9894__$1);{
var G__9914 = cljs.core.chunk_rest(seq__9894__$1);
var G__9915 = c__4151__auto__;
var G__9916 = cljs.core.count(c__4151__auto__);
var G__9917 = 0;
seq__9894 = G__9914;
chunk__9895 = G__9915;
count__9896 = G__9916;
i__9897 = G__9917;
continue;
}
} else
{var node = cljs.core.first(seq__9894__$1);goog.events.removeAll(node,type__$1);
{
var G__9918 = cljs.core.next(seq__9894__$1);
var G__9919 = null;
var G__9920 = 0;
var G__9921 = 0;
seq__9894 = G__9918;
chunk__9895 = G__9919;
count__9896 = G__9920;
i__9897 = G__9921;
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
var G__9922 = parent;
var G__9923 = cljs.core.cons(parent,so_far);
n = G__9922;
so_far = G__9923;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__9932_9940 = cljs.core.seq(ancestors);var chunk__9933_9941 = null;var count__9934_9942 = 0;var i__9935_9943 = 0;while(true){
if((i__9935_9943 < count__9934_9942))
{var n_9944 = chunk__9933_9941.cljs$core$IIndexed$_nth$arity$2(null,i__9935_9943);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_9944;
goog.events.fireListeners(n_9944,evt.type,true,evt);
}
{
var G__9945 = seq__9932_9940;
var G__9946 = chunk__9933_9941;
var G__9947 = count__9934_9942;
var G__9948 = (i__9935_9943 + 1);
seq__9932_9940 = G__9945;
chunk__9933_9941 = G__9946;
count__9934_9942 = G__9947;
i__9935_9943 = G__9948;
continue;
}
} else
{var temp__4092__auto___9949 = cljs.core.seq(seq__9932_9940);if(temp__4092__auto___9949)
{var seq__9932_9950__$1 = temp__4092__auto___9949;if(cljs.core.chunked_seq_QMARK_(seq__9932_9950__$1))
{var c__4151__auto___9951 = cljs.core.chunk_first(seq__9932_9950__$1);{
var G__9952 = cljs.core.chunk_rest(seq__9932_9950__$1);
var G__9953 = c__4151__auto___9951;
var G__9954 = cljs.core.count(c__4151__auto___9951);
var G__9955 = 0;
seq__9932_9940 = G__9952;
chunk__9933_9941 = G__9953;
count__9934_9942 = G__9954;
i__9935_9943 = G__9955;
continue;
}
} else
{var n_9956 = cljs.core.first(seq__9932_9950__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_9956;
goog.events.fireListeners(n_9956,evt.type,true,evt);
}
{
var G__9957 = cljs.core.next(seq__9932_9950__$1);
var G__9958 = null;
var G__9959 = 0;
var G__9960 = 0;
seq__9932_9940 = G__9957;
chunk__9933_9941 = G__9958;
count__9934_9942 = G__9959;
i__9935_9943 = G__9960;
continue;
}
}
} else
{}
}
break;
}
var seq__9936_9961 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__9937_9962 = null;var count__9938_9963 = 0;var i__9939_9964 = 0;while(true){
if((i__9939_9964 < count__9938_9963))
{var n_9965 = chunk__9937_9962.cljs$core$IIndexed$_nth$arity$2(null,i__9939_9964);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_9965;
goog.events.fireListeners(n_9965,evt.type,false,evt);
}
{
var G__9966 = seq__9936_9961;
var G__9967 = chunk__9937_9962;
var G__9968 = count__9938_9963;
var G__9969 = (i__9939_9964 + 1);
seq__9936_9961 = G__9966;
chunk__9937_9962 = G__9967;
count__9938_9963 = G__9968;
i__9939_9964 = G__9969;
continue;
}
} else
{var temp__4092__auto___9970 = cljs.core.seq(seq__9936_9961);if(temp__4092__auto___9970)
{var seq__9936_9971__$1 = temp__4092__auto___9970;if(cljs.core.chunked_seq_QMARK_(seq__9936_9971__$1))
{var c__4151__auto___9972 = cljs.core.chunk_first(seq__9936_9971__$1);{
var G__9973 = cljs.core.chunk_rest(seq__9936_9971__$1);
var G__9974 = c__4151__auto___9972;
var G__9975 = cljs.core.count(c__4151__auto___9972);
var G__9976 = 0;
seq__9936_9961 = G__9973;
chunk__9937_9962 = G__9974;
count__9938_9963 = G__9975;
i__9939_9964 = G__9976;
continue;
}
} else
{var n_9977 = cljs.core.first(seq__9936_9971__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_9977;
goog.events.fireListeners(n_9977,evt.type,false,evt);
}
{
var G__9978 = cljs.core.next(seq__9936_9971__$1);
var G__9979 = null;
var G__9980 = 0;
var G__9981 = 0;
seq__9936_9961 = G__9978;
chunk__9937_9962 = G__9979;
count__9938_9963 = G__9980;
i__9939_9964 = G__9981;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__9988_9994 = cljs.core.seq(evt_map);var chunk__9989_9995 = null;var count__9990_9996 = 0;var i__9991_9997 = 0;while(true){
if((i__9991_9997 < count__9990_9996))
{var vec__9992_9998 = chunk__9989_9995.cljs$core$IIndexed$_nth$arity$2(null,i__9991_9997);var k_9999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9992_9998,0,null);var v_10000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9992_9998,1,null);(evt[k_9999] = v_10000);
{
var G__10001 = seq__9988_9994;
var G__10002 = chunk__9989_9995;
var G__10003 = count__9990_9996;
var G__10004 = (i__9991_9997 + 1);
seq__9988_9994 = G__10001;
chunk__9989_9995 = G__10002;
count__9990_9996 = G__10003;
i__9991_9997 = G__10004;
continue;
}
} else
{var temp__4092__auto___10005 = cljs.core.seq(seq__9988_9994);if(temp__4092__auto___10005)
{var seq__9988_10006__$1 = temp__4092__auto___10005;if(cljs.core.chunked_seq_QMARK_(seq__9988_10006__$1))
{var c__4151__auto___10007 = cljs.core.chunk_first(seq__9988_10006__$1);{
var G__10008 = cljs.core.chunk_rest(seq__9988_10006__$1);
var G__10009 = c__4151__auto___10007;
var G__10010 = cljs.core.count(c__4151__auto___10007);
var G__10011 = 0;
seq__9988_9994 = G__10008;
chunk__9989_9995 = G__10009;
count__9990_9996 = G__10010;
i__9991_9997 = G__10011;
continue;
}
} else
{var vec__9993_10012 = cljs.core.first(seq__9988_10006__$1);var k_10013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9993_10012,0,null);var v_10014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9993_10012,1,null);(evt[k_10013] = v_10014);
{
var G__10015 = cljs.core.next(seq__9988_10006__$1);
var G__10016 = null;
var G__10017 = 0;
var G__10018 = 0;
seq__9988_9994 = G__10015;
chunk__9989_9995 = G__10016;
count__9990_9996 = G__10017;
i__9991_9997 = G__10018;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__10019_SHARP_){return goog.events.getListeners(p1__10019_SHARP_,type__$1,false);
}),domina.nodes(content));
});

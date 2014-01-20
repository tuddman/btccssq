// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10592 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10592 = (function (f,fn_handler,meta10593){
this.f = f;
this.fn_handler = fn_handler;
this.meta10593 = meta10593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10592.cljs$lang$type = true;
cljs.core.async.t10592.cljs$lang$ctorStr = "cljs.core.async/t10592";
cljs.core.async.t10592.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core.async/t10592");
});
cljs.core.async.t10592.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10594){var self__ = this;
var _10594__$1 = this;return self__.meta10593;
});
cljs.core.async.t10592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10594,meta10593__$1){var self__ = this;
var _10594__$1 = this;return (new cljs.core.async.t10592(self__.f,self__.fn_handler,meta10593__$1));
});
cljs.core.async.__GT_t10592 = (function __GT_t10592(f__$1,fn_handler__$1,meta10593){return (new cljs.core.async.t10592(f__$1,fn_handler__$1,meta10593));
});
}
return (new cljs.core.async.t10592(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10596 = buff;if(G__10596)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__10596.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10596.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__10596);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__10596);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_10597 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10597) : fn1.call(null,val_10597));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10597) : fn1.call(null,val_10597));
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3397__auto__ = ret;if(cljs.core.truth_(and__3397__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3397__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___10598 = n;var x_10599 = 0;while(true){
if((x_10599 < n__4251__auto___10598))
{(a[x_10599] = 0);
{
var G__10600 = (x_10599 + 1);
x_10599 = G__10600;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10601 = (i + 1);
i = G__10601;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t10605 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10605 = (function (flag,alt_flag,meta10606){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10606 = meta10606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10605.cljs$lang$type = true;
cljs.core.async.t10605.cljs$lang$ctorStr = "cljs.core.async/t10605";
cljs.core.async.t10605.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core.async/t10605");
});
cljs.core.async.t10605.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t10605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t10605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10607){var self__ = this;
var _10607__$1 = this;return self__.meta10606;
});
cljs.core.async.t10605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10607,meta10606__$1){var self__ = this;
var _10607__$1 = this;return (new cljs.core.async.t10605(self__.flag,self__.alt_flag,meta10606__$1));
});
cljs.core.async.__GT_t10605 = (function __GT_t10605(flag__$1,alt_flag__$1,meta10606){return (new cljs.core.async.t10605(flag__$1,alt_flag__$1,meta10606));
});
}
return (new cljs.core.async.t10605(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10611 = (function (cb,flag,alt_handler,meta10612){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10612 = meta10612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10611.cljs$lang$type = true;
cljs.core.async.t10611.cljs$lang$ctorStr = "cljs.core.async/t10611";
cljs.core.async.t10611.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core.async/t10611");
});
cljs.core.async.t10611.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t10611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t10611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10613){var self__ = this;
var _10613__$1 = this;return self__.meta10612;
});
cljs.core.async.t10611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10613,meta10612__$1){var self__ = this;
var _10613__$1 = this;return (new cljs.core.async.t10611(self__.cb,self__.flag,self__.alt_handler,meta10612__$1));
});
cljs.core.async.__GT_t10611 = (function __GT_t10611(cb__$1,flag__$1,alt_handler__$1,meta10612){return (new cljs.core.async.t10611(cb__$1,flag__$1,alt_handler__$1,meta10612));
});
}
return (new cljs.core.async.t10611(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10614_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10614_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10614_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3409__auto__ = wport;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10615 = (i + 1);
i = G__10615;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3409__auto__ = ret;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4092__auto__ = (function (){var and__3397__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3397__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3397__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10616){var map__10618 = p__10616;var map__10618__$1 = ((cljs.core.seq_QMARK_(map__10618))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10618):map__10618);var opts = map__10618__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10616 = null;if (arguments.length > 1) {
  p__10616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10616);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10619){
var ports = cljs.core.first(arglist__10619);
var p__10616 = cljs.core.rest(arglist__10619);
return alts_BANG___delegate(ports,p__10616);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10627 = (function (ch,f,map_LT_,meta10628){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10628 = meta10628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10627.cljs$lang$type = true;
cljs.core.async.t10627.cljs$lang$ctorStr = "cljs.core.async/t10627";
cljs.core.async.t10627.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core.async/t10627");
});
cljs.core.async.t10627.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t10627.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t10630 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10630 = (function (fn1,_,meta10628,ch,f,map_LT_,meta10631){
this.fn1 = fn1;
this._ = _;
this.meta10628 = meta10628;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10631 = meta10631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10630.cljs$lang$type = true;
cljs.core.async.t10630.cljs$lang$ctorStr = "cljs.core.async/t10630";
cljs.core.async.t10630.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core.async/t10630");
});
cljs.core.async.t10630.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t10630.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t10630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__10620_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__10620_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__10620_SHARP_) : self__.f.call(null,p1__10620_SHARP_)))) : f1.call(null,(((p1__10620_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__10620_SHARP_) : self__.f.call(null,p1__10620_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t10630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10632){var self__ = this;
var _10632__$1 = this;return self__.meta10631;
});
cljs.core.async.t10630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10632,meta10631__$1){var self__ = this;
var _10632__$1 = this;return (new cljs.core.async.t10630(self__.fn1,self__._,self__.meta10628,self__.ch,self__.f,self__.map_LT_,meta10631__$1));
});
cljs.core.async.__GT_t10630 = (function __GT_t10630(fn1__$1,___$2,meta10628__$1,ch__$2,f__$2,map_LT___$2,meta10631){return (new cljs.core.async.t10630(fn1__$1,___$2,meta10628__$1,ch__$2,f__$2,map_LT___$2,meta10631));
});
}
return (new cljs.core.async.t10630(fn1,___$1,self__.meta10628,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3397__auto__ = ret;if(cljs.core.truth_(and__3397__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3397__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t10627.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t10627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10629){var self__ = this;
var _10629__$1 = this;return self__.meta10628;
});
cljs.core.async.t10627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10629,meta10628__$1){var self__ = this;
var _10629__$1 = this;return (new cljs.core.async.t10627(self__.ch,self__.f,self__.map_LT_,meta10628__$1));
});
cljs.core.async.__GT_t10627 = (function __GT_t10627(ch__$1,f__$1,map_LT___$1,meta10628){return (new cljs.core.async.t10627(ch__$1,f__$1,map_LT___$1,meta10628));
});
}
return (new cljs.core.async.t10627(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10636 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10636 = (function (ch,f,map_GT_,meta10637){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10637 = meta10637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10636.cljs$lang$type = true;
cljs.core.async.t10636.cljs$lang$ctorStr = "cljs.core.async/t10636";
cljs.core.async.t10636.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core.async/t10636");
});
cljs.core.async.t10636.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t10636.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t10636.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t10636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10638){var self__ = this;
var _10638__$1 = this;return self__.meta10637;
});
cljs.core.async.t10636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10638,meta10637__$1){var self__ = this;
var _10638__$1 = this;return (new cljs.core.async.t10636(self__.ch,self__.f,self__.map_GT_,meta10637__$1));
});
cljs.core.async.__GT_t10636 = (function __GT_t10636(ch__$1,f__$1,map_GT___$1,meta10637){return (new cljs.core.async.t10636(ch__$1,f__$1,map_GT___$1,meta10637));
});
}
return (new cljs.core.async.t10636(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10642 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10642 = (function (ch,p,filter_GT_,meta10643){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10643 = meta10643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10642.cljs$lang$type = true;
cljs.core.async.t10642.cljs$lang$ctorStr = "cljs.core.async/t10642";
cljs.core.async.t10642.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core.async/t10642");
});
cljs.core.async.t10642.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t10642.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t10642.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t10642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10644){var self__ = this;
var _10644__$1 = this;return self__.meta10643;
});
cljs.core.async.t10642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10644,meta10643__$1){var self__ = this;
var _10644__$1 = this;return (new cljs.core.async.t10642(self__.ch,self__.p,self__.filter_GT_,meta10643__$1));
});
cljs.core.async.__GT_t10642 = (function __GT_t10642(ch__$1,p__$1,filter_GT___$1,meta10643){return (new cljs.core.async.t10642(ch__$1,p__$1,filter_GT___$1,meta10643));
});
}
return (new cljs.core.async.t10642(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___10727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10706){var state_val_10707 = (state_10706[1]);if((state_val_10707 === 1))
{var state_10706__$1 = state_10706;var statearr_10708_10728 = state_10706__$1;(statearr_10708_10728[2] = null);
(statearr_10708_10728[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10707 === 2))
{var state_10706__$1 = state_10706;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10706__$1,4,ch);
} else
{if((state_val_10707 === 3))
{var inst_10704 = (state_10706[2]);var state_10706__$1 = state_10706;return cljs.core.async.impl.ioc_helpers.return_chan(state_10706__$1,inst_10704);
} else
{if((state_val_10707 === 4))
{var inst_10688 = (state_10706[7]);var inst_10688__$1 = (state_10706[2]);var inst_10689 = (inst_10688__$1 == null);var state_10706__$1 = (function (){var statearr_10709 = state_10706;(statearr_10709[7] = inst_10688__$1);
return statearr_10709;
})();if(cljs.core.truth_(inst_10689))
{var statearr_10710_10729 = state_10706__$1;(statearr_10710_10729[1] = 5);
} else
{var statearr_10711_10730 = state_10706__$1;(statearr_10711_10730[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10707 === 5))
{var inst_10691 = cljs.core.async.close_BANG_(out);var state_10706__$1 = state_10706;var statearr_10712_10731 = state_10706__$1;(statearr_10712_10731[2] = inst_10691);
(statearr_10712_10731[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10707 === 6))
{var inst_10688 = (state_10706[7]);var inst_10693 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10688) : p.call(null,inst_10688));var state_10706__$1 = state_10706;if(cljs.core.truth_(inst_10693))
{var statearr_10713_10732 = state_10706__$1;(statearr_10713_10732[1] = 8);
} else
{var statearr_10714_10733 = state_10706__$1;(statearr_10714_10733[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10707 === 7))
{var inst_10702 = (state_10706[2]);var state_10706__$1 = state_10706;var statearr_10715_10734 = state_10706__$1;(statearr_10715_10734[2] = inst_10702);
(statearr_10715_10734[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10707 === 8))
{var inst_10688 = (state_10706[7]);var state_10706__$1 = state_10706;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10706__$1,11,out,inst_10688);
} else
{if((state_val_10707 === 9))
{var state_10706__$1 = state_10706;var statearr_10716_10735 = state_10706__$1;(statearr_10716_10735[2] = null);
(statearr_10716_10735[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10707 === 10))
{var inst_10699 = (state_10706[2]);var state_10706__$1 = (function (){var statearr_10717 = state_10706;(statearr_10717[8] = inst_10699);
return statearr_10717;
})();var statearr_10718_10736 = state_10706__$1;(statearr_10718_10736[2] = null);
(statearr_10718_10736[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10707 === 11))
{var inst_10696 = (state_10706[2]);var state_10706__$1 = state_10706;var statearr_10719_10737 = state_10706__$1;(statearr_10719_10737[2] = inst_10696);
(statearr_10719_10737[1] = 10);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_10723 = [null,null,null,null,null,null,null,null,null];(statearr_10723[0] = state_machine__5510__auto__);
(statearr_10723[1] = 1);
return statearr_10723;
});
var state_machine__5510__auto____1 = (function (state_10706){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_10706);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10724){if((e10724 instanceof Object))
{var ex__5513__auto__ = e10724;var statearr_10725_10738 = state_10706;(statearr_10725_10738[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10706);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e10724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__10739 = state_10706;
state_10706 = G__10739;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10706){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10726 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_10726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___10727);
return statearr_10726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10891){var state_val_10892 = (state_10891[1]);if((state_val_10892 === 1))
{var state_10891__$1 = state_10891;var statearr_10893_10930 = state_10891__$1;(statearr_10893_10930[2] = null);
(statearr_10893_10930[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 2))
{var state_10891__$1 = state_10891;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10891__$1,4,in$);
} else
{if((state_val_10892 === 3))
{var inst_10889 = (state_10891[2]);var state_10891__$1 = state_10891;return cljs.core.async.impl.ioc_helpers.return_chan(state_10891__$1,inst_10889);
} else
{if((state_val_10892 === 4))
{var inst_10837 = (state_10891[7]);var inst_10837__$1 = (state_10891[2]);var inst_10838 = (inst_10837__$1 == null);var state_10891__$1 = (function (){var statearr_10894 = state_10891;(statearr_10894[7] = inst_10837__$1);
return statearr_10894;
})();if(cljs.core.truth_(inst_10838))
{var statearr_10895_10931 = state_10891__$1;(statearr_10895_10931[1] = 5);
} else
{var statearr_10896_10932 = state_10891__$1;(statearr_10896_10932[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 5))
{var inst_10840 = cljs.core.async.close_BANG_(out);var state_10891__$1 = state_10891;var statearr_10897_10933 = state_10891__$1;(statearr_10897_10933[2] = inst_10840);
(statearr_10897_10933[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 6))
{var inst_10837 = (state_10891[7]);var inst_10842 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_10837) : f.call(null,inst_10837));var inst_10847 = cljs.core.seq(inst_10842);var inst_10848 = inst_10847;var inst_10849 = null;var inst_10850 = 0;var inst_10851 = 0;var state_10891__$1 = (function (){var statearr_10898 = state_10891;(statearr_10898[8] = inst_10850);
(statearr_10898[9] = inst_10851);
(statearr_10898[10] = inst_10848);
(statearr_10898[11] = inst_10849);
return statearr_10898;
})();var statearr_10899_10934 = state_10891__$1;(statearr_10899_10934[2] = null);
(statearr_10899_10934[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 7))
{var inst_10887 = (state_10891[2]);var state_10891__$1 = state_10891;var statearr_10900_10935 = state_10891__$1;(statearr_10900_10935[2] = inst_10887);
(statearr_10900_10935[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 8))
{var inst_10850 = (state_10891[8]);var inst_10851 = (state_10891[9]);var inst_10853 = (inst_10851 < inst_10850);var inst_10854 = inst_10853;var state_10891__$1 = state_10891;if(cljs.core.truth_(inst_10854))
{var statearr_10901_10936 = state_10891__$1;(statearr_10901_10936[1] = 10);
} else
{var statearr_10902_10937 = state_10891__$1;(statearr_10902_10937[1] = 11);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 9))
{var inst_10884 = (state_10891[2]);var state_10891__$1 = (function (){var statearr_10903 = state_10891;(statearr_10903[12] = inst_10884);
return statearr_10903;
})();var statearr_10904_10938 = state_10891__$1;(statearr_10904_10938[2] = null);
(statearr_10904_10938[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 10))
{var inst_10851 = (state_10891[9]);var inst_10849 = (state_10891[11]);var inst_10856 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10849,inst_10851);var state_10891__$1 = state_10891;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10891__$1,13,out,inst_10856);
} else
{if((state_val_10892 === 11))
{var inst_10862 = (state_10891[13]);var inst_10848 = (state_10891[10]);var inst_10862__$1 = cljs.core.seq(inst_10848);var state_10891__$1 = (function (){var statearr_10908 = state_10891;(statearr_10908[13] = inst_10862__$1);
return statearr_10908;
})();if(inst_10862__$1)
{var statearr_10909_10939 = state_10891__$1;(statearr_10909_10939[1] = 14);
} else
{var statearr_10910_10940 = state_10891__$1;(statearr_10910_10940[1] = 15);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 12))
{var inst_10882 = (state_10891[2]);var state_10891__$1 = state_10891;var statearr_10911_10941 = state_10891__$1;(statearr_10911_10941[2] = inst_10882);
(statearr_10911_10941[1] = 9);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 13))
{var inst_10850 = (state_10891[8]);var inst_10851 = (state_10891[9]);var inst_10848 = (state_10891[10]);var inst_10849 = (state_10891[11]);var inst_10858 = (state_10891[2]);var inst_10859 = (inst_10851 + 1);var tmp10905 = inst_10850;var tmp10906 = inst_10848;var tmp10907 = inst_10849;var inst_10848__$1 = tmp10906;var inst_10849__$1 = tmp10907;var inst_10850__$1 = tmp10905;var inst_10851__$1 = inst_10859;var state_10891__$1 = (function (){var statearr_10912 = state_10891;(statearr_10912[14] = inst_10858);
(statearr_10912[8] = inst_10850__$1);
(statearr_10912[9] = inst_10851__$1);
(statearr_10912[10] = inst_10848__$1);
(statearr_10912[11] = inst_10849__$1);
return statearr_10912;
})();var statearr_10913_10942 = state_10891__$1;(statearr_10913_10942[2] = null);
(statearr_10913_10942[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 14))
{var inst_10862 = (state_10891[13]);var inst_10864 = cljs.core.chunked_seq_QMARK_(inst_10862);var state_10891__$1 = state_10891;if(inst_10864)
{var statearr_10914_10943 = state_10891__$1;(statearr_10914_10943[1] = 17);
} else
{var statearr_10915_10944 = state_10891__$1;(statearr_10915_10944[1] = 18);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 15))
{var state_10891__$1 = state_10891;var statearr_10916_10945 = state_10891__$1;(statearr_10916_10945[2] = null);
(statearr_10916_10945[1] = 16);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 16))
{var inst_10880 = (state_10891[2]);var state_10891__$1 = state_10891;var statearr_10917_10946 = state_10891__$1;(statearr_10917_10946[2] = inst_10880);
(statearr_10917_10946[1] = 12);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 17))
{var inst_10862 = (state_10891[13]);var inst_10866 = cljs.core.chunk_first(inst_10862);var inst_10867 = cljs.core.chunk_rest(inst_10862);var inst_10868 = cljs.core.count(inst_10866);var inst_10848 = inst_10867;var inst_10849 = inst_10866;var inst_10850 = inst_10868;var inst_10851 = 0;var state_10891__$1 = (function (){var statearr_10918 = state_10891;(statearr_10918[8] = inst_10850);
(statearr_10918[9] = inst_10851);
(statearr_10918[10] = inst_10848);
(statearr_10918[11] = inst_10849);
return statearr_10918;
})();var statearr_10919_10947 = state_10891__$1;(statearr_10919_10947[2] = null);
(statearr_10919_10947[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 18))
{var inst_10862 = (state_10891[13]);var inst_10871 = cljs.core.first(inst_10862);var state_10891__$1 = state_10891;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10891__$1,20,out,inst_10871);
} else
{if((state_val_10892 === 19))
{var inst_10877 = (state_10891[2]);var state_10891__$1 = state_10891;var statearr_10920_10948 = state_10891__$1;(statearr_10920_10948[2] = inst_10877);
(statearr_10920_10948[1] = 16);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10892 === 20))
{var inst_10862 = (state_10891[13]);var inst_10873 = (state_10891[2]);var inst_10874 = cljs.core.next(inst_10862);var inst_10848 = inst_10874;var inst_10849 = null;var inst_10850 = 0;var inst_10851 = 0;var state_10891__$1 = (function (){var statearr_10921 = state_10891;(statearr_10921[8] = inst_10850);
(statearr_10921[15] = inst_10873);
(statearr_10921[9] = inst_10851);
(statearr_10921[10] = inst_10848);
(statearr_10921[11] = inst_10849);
return statearr_10921;
})();var statearr_10922_10949 = state_10891__$1;(statearr_10922_10949[2] = null);
(statearr_10922_10949[1] = 8);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_10926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10926[0] = state_machine__5510__auto__);
(statearr_10926[1] = 1);
return statearr_10926;
});
var state_machine__5510__auto____1 = (function (state_10891){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_10891);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10927){if((e10927 instanceof Object))
{var ex__5513__auto__ = e10927;var statearr_10928_10950 = state_10891;(statearr_10928_10950[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10891);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e10927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__10951 = state_10891;
state_10891 = G__10951;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10891){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10929 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_10929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_10929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5524__auto___11032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11011){var state_val_11012 = (state_11011[1]);if((state_val_11012 === 1))
{var state_11011__$1 = state_11011;var statearr_11013_11033 = state_11011__$1;(statearr_11013_11033[2] = null);
(statearr_11013_11033[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11012 === 2))
{var state_11011__$1 = state_11011;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11011__$1,4,from);
} else
{if((state_val_11012 === 3))
{var inst_11009 = (state_11011[2]);var state_11011__$1 = state_11011;return cljs.core.async.impl.ioc_helpers.return_chan(state_11011__$1,inst_11009);
} else
{if((state_val_11012 === 4))
{var inst_10994 = (state_11011[7]);var inst_10994__$1 = (state_11011[2]);var inst_10995 = (inst_10994__$1 == null);var state_11011__$1 = (function (){var statearr_11014 = state_11011;(statearr_11014[7] = inst_10994__$1);
return statearr_11014;
})();if(cljs.core.truth_(inst_10995))
{var statearr_11015_11034 = state_11011__$1;(statearr_11015_11034[1] = 5);
} else
{var statearr_11016_11035 = state_11011__$1;(statearr_11016_11035[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11012 === 5))
{var state_11011__$1 = state_11011;if(cljs.core.truth_(close_QMARK_))
{var statearr_11017_11036 = state_11011__$1;(statearr_11017_11036[1] = 8);
} else
{var statearr_11018_11037 = state_11011__$1;(statearr_11018_11037[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11012 === 6))
{var inst_10994 = (state_11011[7]);var state_11011__$1 = state_11011;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11011__$1,11,to,inst_10994);
} else
{if((state_val_11012 === 7))
{var inst_11007 = (state_11011[2]);var state_11011__$1 = state_11011;var statearr_11019_11038 = state_11011__$1;(statearr_11019_11038[2] = inst_11007);
(statearr_11019_11038[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11012 === 8))
{var inst_10998 = cljs.core.async.close_BANG_(to);var state_11011__$1 = state_11011;var statearr_11020_11039 = state_11011__$1;(statearr_11020_11039[2] = inst_10998);
(statearr_11020_11039[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11012 === 9))
{var state_11011__$1 = state_11011;var statearr_11021_11040 = state_11011__$1;(statearr_11021_11040[2] = null);
(statearr_11021_11040[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11012 === 10))
{var inst_11001 = (state_11011[2]);var state_11011__$1 = state_11011;var statearr_11022_11041 = state_11011__$1;(statearr_11022_11041[2] = inst_11001);
(statearr_11022_11041[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11012 === 11))
{var inst_11004 = (state_11011[2]);var state_11011__$1 = (function (){var statearr_11023 = state_11011;(statearr_11023[8] = inst_11004);
return statearr_11023;
})();var statearr_11024_11042 = state_11011__$1;(statearr_11024_11042[2] = null);
(statearr_11024_11042[1] = 2);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11028 = [null,null,null,null,null,null,null,null,null];(statearr_11028[0] = state_machine__5510__auto__);
(statearr_11028[1] = 1);
return statearr_11028;
});
var state_machine__5510__auto____1 = (function (state_11011){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11011);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11029){if((e11029 instanceof Object))
{var ex__5513__auto__ = e11029;var statearr_11030_11043 = state_11011;(statearr_11030_11043[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11011);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e11029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__11044 = state_11011;
state_11011 = G__11044;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11011){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11031 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_11031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11032);
return statearr_11031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5524__auto___11131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11109){var state_val_11110 = (state_11109[1]);if((state_val_11110 === 1))
{var state_11109__$1 = state_11109;var statearr_11111_11132 = state_11109__$1;(statearr_11111_11132[2] = null);
(statearr_11111_11132[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11110 === 2))
{var state_11109__$1 = state_11109;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11109__$1,4,ch);
} else
{if((state_val_11110 === 3))
{var inst_11107 = (state_11109[2]);var state_11109__$1 = state_11109;return cljs.core.async.impl.ioc_helpers.return_chan(state_11109__$1,inst_11107);
} else
{if((state_val_11110 === 4))
{var inst_11090 = (state_11109[7]);var inst_11090__$1 = (state_11109[2]);var inst_11091 = (inst_11090__$1 == null);var state_11109__$1 = (function (){var statearr_11112 = state_11109;(statearr_11112[7] = inst_11090__$1);
return statearr_11112;
})();if(cljs.core.truth_(inst_11091))
{var statearr_11113_11133 = state_11109__$1;(statearr_11113_11133[1] = 5);
} else
{var statearr_11114_11134 = state_11109__$1;(statearr_11114_11134[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11110 === 5))
{var inst_11093 = cljs.core.async.close_BANG_(tc);var inst_11094 = cljs.core.async.close_BANG_(fc);var state_11109__$1 = (function (){var statearr_11115 = state_11109;(statearr_11115[8] = inst_11093);
return statearr_11115;
})();var statearr_11116_11135 = state_11109__$1;(statearr_11116_11135[2] = inst_11094);
(statearr_11116_11135[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11110 === 6))
{var inst_11090 = (state_11109[7]);var inst_11096 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11090) : p.call(null,inst_11090));var state_11109__$1 = state_11109;if(cljs.core.truth_(inst_11096))
{var statearr_11117_11136 = state_11109__$1;(statearr_11117_11136[1] = 9);
} else
{var statearr_11118_11137 = state_11109__$1;(statearr_11118_11137[1] = 10);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11110 === 7))
{var inst_11105 = (state_11109[2]);var state_11109__$1 = state_11109;var statearr_11119_11138 = state_11109__$1;(statearr_11119_11138[2] = inst_11105);
(statearr_11119_11138[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11110 === 8))
{var inst_11102 = (state_11109[2]);var state_11109__$1 = (function (){var statearr_11120 = state_11109;(statearr_11120[9] = inst_11102);
return statearr_11120;
})();var statearr_11121_11139 = state_11109__$1;(statearr_11121_11139[2] = null);
(statearr_11121_11139[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11110 === 9))
{var state_11109__$1 = state_11109;var statearr_11122_11140 = state_11109__$1;(statearr_11122_11140[2] = tc);
(statearr_11122_11140[1] = 11);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11110 === 10))
{var state_11109__$1 = state_11109;var statearr_11123_11141 = state_11109__$1;(statearr_11123_11141[2] = fc);
(statearr_11123_11141[1] = 11);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11110 === 11))
{var inst_11090 = (state_11109[7]);var inst_11100 = (state_11109[2]);var state_11109__$1 = state_11109;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11109__$1,8,inst_11100,inst_11090);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11127 = [null,null,null,null,null,null,null,null,null,null];(statearr_11127[0] = state_machine__5510__auto__);
(statearr_11127[1] = 1);
return statearr_11127;
});
var state_machine__5510__auto____1 = (function (state_11109){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11109);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11128){if((e11128 instanceof Object))
{var ex__5513__auto__ = e11128;var statearr_11129_11142 = state_11109;(statearr_11129_11142[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11109);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e11128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__11143 = state_11109;
state_11109 = G__11143;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11109){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11130 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_11130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11131);
return statearr_11130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11190){var state_val_11191 = (state_11190[1]);if((state_val_11191 === 7))
{var inst_11186 = (state_11190[2]);var state_11190__$1 = state_11190;var statearr_11192_11208 = state_11190__$1;(statearr_11192_11208[2] = inst_11186);
(statearr_11192_11208[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11191 === 6))
{var inst_11176 = (state_11190[7]);var inst_11179 = (state_11190[8]);var inst_11183 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11176,inst_11179) : f.call(null,inst_11176,inst_11179));var inst_11176__$1 = inst_11183;var state_11190__$1 = (function (){var statearr_11193 = state_11190;(statearr_11193[7] = inst_11176__$1);
return statearr_11193;
})();var statearr_11194_11209 = state_11190__$1;(statearr_11194_11209[2] = null);
(statearr_11194_11209[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11191 === 5))
{var inst_11176 = (state_11190[7]);var state_11190__$1 = state_11190;var statearr_11195_11210 = state_11190__$1;(statearr_11195_11210[2] = inst_11176);
(statearr_11195_11210[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11191 === 4))
{var inst_11179 = (state_11190[8]);var inst_11179__$1 = (state_11190[2]);var inst_11180 = (inst_11179__$1 == null);var state_11190__$1 = (function (){var statearr_11196 = state_11190;(statearr_11196[8] = inst_11179__$1);
return statearr_11196;
})();if(cljs.core.truth_(inst_11180))
{var statearr_11197_11211 = state_11190__$1;(statearr_11197_11211[1] = 5);
} else
{var statearr_11198_11212 = state_11190__$1;(statearr_11198_11212[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11191 === 3))
{var inst_11188 = (state_11190[2]);var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.return_chan(state_11190__$1,inst_11188);
} else
{if((state_val_11191 === 2))
{var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11190__$1,4,ch);
} else
{if((state_val_11191 === 1))
{var inst_11176 = init;var state_11190__$1 = (function (){var statearr_11199 = state_11190;(statearr_11199[7] = inst_11176);
return statearr_11199;
})();var statearr_11200_11213 = state_11190__$1;(statearr_11200_11213[2] = null);
(statearr_11200_11213[1] = 2);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11204 = [null,null,null,null,null,null,null,null,null];(statearr_11204[0] = state_machine__5510__auto__);
(statearr_11204[1] = 1);
return statearr_11204;
});
var state_machine__5510__auto____1 = (function (state_11190){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11190);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11205){if((e11205 instanceof Object))
{var ex__5513__auto__ = e11205;var statearr_11206_11214 = state_11190;(statearr_11206_11214[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11190);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e11205;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__11215 = state_11190;
state_11190 = G__11215;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11190){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11207 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_11207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_11207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11277){var state_val_11278 = (state_11277[1]);if((state_val_11278 === 1))
{var inst_11257 = cljs.core.seq(coll);var inst_11258 = inst_11257;var state_11277__$1 = (function (){var statearr_11279 = state_11277;(statearr_11279[7] = inst_11258);
return statearr_11279;
})();var statearr_11280_11298 = state_11277__$1;(statearr_11280_11298[2] = null);
(statearr_11280_11298[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11278 === 2))
{var inst_11258 = (state_11277[7]);var state_11277__$1 = state_11277;if(cljs.core.truth_(inst_11258))
{var statearr_11281_11299 = state_11277__$1;(statearr_11281_11299[1] = 4);
} else
{var statearr_11282_11300 = state_11277__$1;(statearr_11282_11300[1] = 5);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11278 === 3))
{var inst_11275 = (state_11277[2]);var state_11277__$1 = state_11277;return cljs.core.async.impl.ioc_helpers.return_chan(state_11277__$1,inst_11275);
} else
{if((state_val_11278 === 4))
{var inst_11258 = (state_11277[7]);var inst_11261 = cljs.core.first(inst_11258);var state_11277__$1 = state_11277;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11277__$1,7,ch,inst_11261);
} else
{if((state_val_11278 === 5))
{var state_11277__$1 = state_11277;if(cljs.core.truth_(close_QMARK_))
{var statearr_11283_11301 = state_11277__$1;(statearr_11283_11301[1] = 8);
} else
{var statearr_11284_11302 = state_11277__$1;(statearr_11284_11302[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11278 === 6))
{var inst_11273 = (state_11277[2]);var state_11277__$1 = state_11277;var statearr_11285_11303 = state_11277__$1;(statearr_11285_11303[2] = inst_11273);
(statearr_11285_11303[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11278 === 7))
{var inst_11258 = (state_11277[7]);var inst_11263 = (state_11277[2]);var inst_11264 = cljs.core.next(inst_11258);var inst_11258__$1 = inst_11264;var state_11277__$1 = (function (){var statearr_11286 = state_11277;(statearr_11286[7] = inst_11258__$1);
(statearr_11286[8] = inst_11263);
return statearr_11286;
})();var statearr_11287_11304 = state_11277__$1;(statearr_11287_11304[2] = null);
(statearr_11287_11304[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11278 === 8))
{var inst_11268 = cljs.core.async.close_BANG_(ch);var state_11277__$1 = state_11277;var statearr_11288_11305 = state_11277__$1;(statearr_11288_11305[2] = inst_11268);
(statearr_11288_11305[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11278 === 9))
{var state_11277__$1 = state_11277;var statearr_11289_11306 = state_11277__$1;(statearr_11289_11306[2] = null);
(statearr_11289_11306[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11278 === 10))
{var inst_11271 = (state_11277[2]);var state_11277__$1 = state_11277;var statearr_11290_11307 = state_11277__$1;(statearr_11290_11307[2] = inst_11271);
(statearr_11290_11307[1] = 6);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11294 = [null,null,null,null,null,null,null,null,null];(statearr_11294[0] = state_machine__5510__auto__);
(statearr_11294[1] = 1);
return statearr_11294;
});
var state_machine__5510__auto____1 = (function (state_11277){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11277);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11295){if((e11295 instanceof Object))
{var ex__5513__auto__ = e11295;var statearr_11296_11308 = state_11277;(statearr_11296_11308[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11277);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e11295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__11309 = state_11277;
state_11277 = G__11309;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11277){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11297 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_11297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_11297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11311 = {};return obj11311;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3397__auto__ = _;if(and__3397__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3397__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4030__auto__ = (((_ == null))?null:_);return (function (){var or__3409__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11313 = {};return obj11313;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3397__auto__ = m;if(and__3397__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3397__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3409__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3397__auto__ = m;if(and__3397__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3397__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3409__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3397__auto__ = m;if(and__3397__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3397__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3409__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11537 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11537 = (function (cs,ch,mult,meta11538){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11538 = meta11538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11537.cljs$lang$type = true;
cljs.core.async.t11537.cljs$lang$ctorStr = "cljs.core.async/t11537";
cljs.core.async.t11537.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core.async/t11537");
});})(cs))
;
cljs.core.async.t11537.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11537.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11537.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11537.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11537.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11539){var self__ = this;
var _11539__$1 = this;return self__.meta11538;
});})(cs))
;
cljs.core.async.t11537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11539,meta11538__$1){var self__ = this;
var _11539__$1 = this;return (new cljs.core.async.t11537(self__.cs,self__.ch,self__.mult,meta11538__$1));
});})(cs))
;
cljs.core.async.__GT_t11537 = ((function (cs){
return (function __GT_t11537(cs__$1,ch__$1,mult__$1,meta11538){return (new cljs.core.async.t11537(cs__$1,ch__$1,mult__$1,meta11538));
});})(cs))
;
}
return (new cljs.core.async.t11537(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5524__auto___11760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11674){var state_val_11675 = (state_11674[1]);if((state_val_11675 === 32))
{var inst_11542 = (state_11674[7]);var inst_11618 = (state_11674[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_11674,31,Object,null,30);var inst_11625 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11618,inst_11542,done);var state_11674__$1 = state_11674;var statearr_11676_11761 = state_11674__$1;(statearr_11676_11761[2] = inst_11625);
cljs.core.async.impl.ioc_helpers.process_exception(state_11674__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 1))
{var state_11674__$1 = state_11674;var statearr_11677_11762 = state_11674__$1;(statearr_11677_11762[2] = null);
(statearr_11677_11762[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 33))
{var inst_11631 = (state_11674[9]);var inst_11633 = cljs.core.chunked_seq_QMARK_(inst_11631);var state_11674__$1 = state_11674;if(inst_11633)
{var statearr_11678_11763 = state_11674__$1;(statearr_11678_11763[1] = 36);
} else
{var statearr_11679_11764 = state_11674__$1;(statearr_11679_11764[1] = 37);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 2))
{var state_11674__$1 = state_11674;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11674__$1,4,ch);
} else
{if((state_val_11675 === 34))
{var state_11674__$1 = state_11674;var statearr_11680_11765 = state_11674__$1;(statearr_11680_11765[2] = null);
(statearr_11680_11765[1] = 35);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 3))
{var inst_11672 = (state_11674[2]);var state_11674__$1 = state_11674;return cljs.core.async.impl.ioc_helpers.return_chan(state_11674__$1,inst_11672);
} else
{if((state_val_11675 === 35))
{var inst_11656 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11681_11766 = state_11674__$1;(statearr_11681_11766[2] = inst_11656);
(statearr_11681_11766[1] = 29);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 4))
{var inst_11542 = (state_11674[7]);var inst_11542__$1 = (state_11674[2]);var inst_11543 = (inst_11542__$1 == null);var state_11674__$1 = (function (){var statearr_11682 = state_11674;(statearr_11682[7] = inst_11542__$1);
return statearr_11682;
})();if(cljs.core.truth_(inst_11543))
{var statearr_11683_11767 = state_11674__$1;(statearr_11683_11767[1] = 5);
} else
{var statearr_11684_11768 = state_11674__$1;(statearr_11684_11768[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 36))
{var inst_11631 = (state_11674[9]);var inst_11635 = cljs.core.chunk_first(inst_11631);var inst_11636 = cljs.core.chunk_rest(inst_11631);var inst_11637 = cljs.core.count(inst_11635);var inst_11610 = inst_11636;var inst_11611 = inst_11635;var inst_11612 = inst_11637;var inst_11613 = 0;var state_11674__$1 = (function (){var statearr_11685 = state_11674;(statearr_11685[10] = inst_11610);
(statearr_11685[11] = inst_11611);
(statearr_11685[12] = inst_11612);
(statearr_11685[13] = inst_11613);
return statearr_11685;
})();var statearr_11686_11769 = state_11674__$1;(statearr_11686_11769[2] = null);
(statearr_11686_11769[1] = 25);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 5))
{var inst_11549 = cljs.core.deref(cs);var inst_11550 = cljs.core.seq(inst_11549);var inst_11551 = inst_11550;var inst_11552 = null;var inst_11553 = 0;var inst_11554 = 0;var state_11674__$1 = (function (){var statearr_11687 = state_11674;(statearr_11687[14] = inst_11554);
(statearr_11687[15] = inst_11553);
(statearr_11687[16] = inst_11552);
(statearr_11687[17] = inst_11551);
return statearr_11687;
})();var statearr_11688_11770 = state_11674__$1;(statearr_11688_11770[2] = null);
(statearr_11688_11770[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 37))
{var inst_11631 = (state_11674[9]);var inst_11640 = cljs.core.first(inst_11631);var state_11674__$1 = (function (){var statearr_11689 = state_11674;(statearr_11689[18] = inst_11640);
return statearr_11689;
})();var statearr_11690_11771 = state_11674__$1;(statearr_11690_11771[2] = null);
(statearr_11690_11771[1] = 41);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 6))
{var inst_11602 = (state_11674[19]);var inst_11601 = cljs.core.deref(cs);var inst_11602__$1 = cljs.core.keys(inst_11601);var inst_11603 = cljs.core.count(inst_11602__$1);var inst_11604 = cljs.core.reset_BANG_(dctr,inst_11603);var inst_11609 = cljs.core.seq(inst_11602__$1);var inst_11610 = inst_11609;var inst_11611 = null;var inst_11612 = 0;var inst_11613 = 0;var state_11674__$1 = (function (){var statearr_11691 = state_11674;(statearr_11691[10] = inst_11610);
(statearr_11691[11] = inst_11611);
(statearr_11691[12] = inst_11612);
(statearr_11691[13] = inst_11613);
(statearr_11691[19] = inst_11602__$1);
(statearr_11691[20] = inst_11604);
return statearr_11691;
})();var statearr_11692_11772 = state_11674__$1;(statearr_11692_11772[2] = null);
(statearr_11692_11772[1] = 25);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 38))
{var inst_11653 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11693_11773 = state_11674__$1;(statearr_11693_11773[2] = inst_11653);
(statearr_11693_11773[1] = 35);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 7))
{var inst_11670 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11694_11774 = state_11674__$1;(statearr_11694_11774[2] = inst_11670);
(statearr_11694_11774[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 39))
{var inst_11631 = (state_11674[9]);var inst_11649 = (state_11674[2]);var inst_11650 = cljs.core.next(inst_11631);var inst_11610 = inst_11650;var inst_11611 = null;var inst_11612 = 0;var inst_11613 = 0;var state_11674__$1 = (function (){var statearr_11695 = state_11674;(statearr_11695[10] = inst_11610);
(statearr_11695[11] = inst_11611);
(statearr_11695[12] = inst_11612);
(statearr_11695[13] = inst_11613);
(statearr_11695[21] = inst_11649);
return statearr_11695;
})();var statearr_11696_11775 = state_11674__$1;(statearr_11696_11775[2] = null);
(statearr_11696_11775[1] = 25);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 8))
{var inst_11554 = (state_11674[14]);var inst_11553 = (state_11674[15]);var inst_11556 = (inst_11554 < inst_11553);var inst_11557 = inst_11556;var state_11674__$1 = state_11674;if(cljs.core.truth_(inst_11557))
{var statearr_11697_11776 = state_11674__$1;(statearr_11697_11776[1] = 10);
} else
{var statearr_11698_11777 = state_11674__$1;(statearr_11698_11777[1] = 11);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 40))
{var inst_11640 = (state_11674[18]);var inst_11641 = (state_11674[2]);var inst_11642 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_11643 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11640);var state_11674__$1 = (function (){var statearr_11699 = state_11674;(statearr_11699[22] = inst_11642);
(statearr_11699[23] = inst_11641);
return statearr_11699;
})();var statearr_11700_11778 = state_11674__$1;(statearr_11700_11778[2] = inst_11643);
cljs.core.async.impl.ioc_helpers.process_exception(state_11674__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 9))
{var inst_11599 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11701_11779 = state_11674__$1;(statearr_11701_11779[2] = inst_11599);
(statearr_11701_11779[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 41))
{var inst_11542 = (state_11674[7]);var inst_11640 = (state_11674[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_11674,40,Object,null,39);var inst_11647 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11640,inst_11542,done);var state_11674__$1 = state_11674;var statearr_11702_11780 = state_11674__$1;(statearr_11702_11780[2] = inst_11647);
cljs.core.async.impl.ioc_helpers.process_exception(state_11674__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 10))
{var inst_11554 = (state_11674[14]);var inst_11552 = (state_11674[16]);var inst_11560 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11552,inst_11554);var inst_11561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11560,0,null);var inst_11562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11560,1,null);var state_11674__$1 = (function (){var statearr_11703 = state_11674;(statearr_11703[24] = inst_11561);
return statearr_11703;
})();if(cljs.core.truth_(inst_11562))
{var statearr_11704_11781 = state_11674__$1;(statearr_11704_11781[1] = 13);
} else
{var statearr_11705_11782 = state_11674__$1;(statearr_11705_11782[1] = 14);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 42))
{var state_11674__$1 = state_11674;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11674__$1,45,dchan);
} else
{if((state_val_11675 === 11))
{var inst_11571 = (state_11674[25]);var inst_11551 = (state_11674[17]);var inst_11571__$1 = cljs.core.seq(inst_11551);var state_11674__$1 = (function (){var statearr_11706 = state_11674;(statearr_11706[25] = inst_11571__$1);
return statearr_11706;
})();if(inst_11571__$1)
{var statearr_11707_11783 = state_11674__$1;(statearr_11707_11783[1] = 16);
} else
{var statearr_11708_11784 = state_11674__$1;(statearr_11708_11784[1] = 17);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 43))
{var state_11674__$1 = state_11674;var statearr_11709_11785 = state_11674__$1;(statearr_11709_11785[2] = null);
(statearr_11709_11785[1] = 44);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 12))
{var inst_11597 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11710_11786 = state_11674__$1;(statearr_11710_11786[2] = inst_11597);
(statearr_11710_11786[1] = 9);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 44))
{var inst_11667 = (state_11674[2]);var state_11674__$1 = (function (){var statearr_11711 = state_11674;(statearr_11711[26] = inst_11667);
return statearr_11711;
})();var statearr_11712_11787 = state_11674__$1;(statearr_11712_11787[2] = null);
(statearr_11712_11787[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 13))
{var inst_11561 = (state_11674[24]);var inst_11564 = cljs.core.async.close_BANG_(inst_11561);var state_11674__$1 = state_11674;var statearr_11713_11788 = state_11674__$1;(statearr_11713_11788[2] = inst_11564);
(statearr_11713_11788[1] = 15);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 45))
{var inst_11664 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11717_11789 = state_11674__$1;(statearr_11717_11789[2] = inst_11664);
(statearr_11717_11789[1] = 44);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 14))
{var state_11674__$1 = state_11674;var statearr_11718_11790 = state_11674__$1;(statearr_11718_11790[2] = null);
(statearr_11718_11790[1] = 15);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 15))
{var inst_11554 = (state_11674[14]);var inst_11553 = (state_11674[15]);var inst_11552 = (state_11674[16]);var inst_11551 = (state_11674[17]);var inst_11567 = (state_11674[2]);var inst_11568 = (inst_11554 + 1);var tmp11714 = inst_11553;var tmp11715 = inst_11552;var tmp11716 = inst_11551;var inst_11551__$1 = tmp11716;var inst_11552__$1 = tmp11715;var inst_11553__$1 = tmp11714;var inst_11554__$1 = inst_11568;var state_11674__$1 = (function (){var statearr_11719 = state_11674;(statearr_11719[27] = inst_11567);
(statearr_11719[14] = inst_11554__$1);
(statearr_11719[15] = inst_11553__$1);
(statearr_11719[16] = inst_11552__$1);
(statearr_11719[17] = inst_11551__$1);
return statearr_11719;
})();var statearr_11720_11791 = state_11674__$1;(statearr_11720_11791[2] = null);
(statearr_11720_11791[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 16))
{var inst_11571 = (state_11674[25]);var inst_11573 = cljs.core.chunked_seq_QMARK_(inst_11571);var state_11674__$1 = state_11674;if(inst_11573)
{var statearr_11721_11792 = state_11674__$1;(statearr_11721_11792[1] = 19);
} else
{var statearr_11722_11793 = state_11674__$1;(statearr_11722_11793[1] = 20);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 17))
{var state_11674__$1 = state_11674;var statearr_11723_11794 = state_11674__$1;(statearr_11723_11794[2] = null);
(statearr_11723_11794[1] = 18);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 18))
{var inst_11595 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11724_11795 = state_11674__$1;(statearr_11724_11795[2] = inst_11595);
(statearr_11724_11795[1] = 12);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 19))
{var inst_11571 = (state_11674[25]);var inst_11575 = cljs.core.chunk_first(inst_11571);var inst_11576 = cljs.core.chunk_rest(inst_11571);var inst_11577 = cljs.core.count(inst_11575);var inst_11551 = inst_11576;var inst_11552 = inst_11575;var inst_11553 = inst_11577;var inst_11554 = 0;var state_11674__$1 = (function (){var statearr_11725 = state_11674;(statearr_11725[14] = inst_11554);
(statearr_11725[15] = inst_11553);
(statearr_11725[16] = inst_11552);
(statearr_11725[17] = inst_11551);
return statearr_11725;
})();var statearr_11726_11796 = state_11674__$1;(statearr_11726_11796[2] = null);
(statearr_11726_11796[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 20))
{var inst_11571 = (state_11674[25]);var inst_11581 = cljs.core.first(inst_11571);var inst_11582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11581,0,null);var inst_11583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11581,1,null);var state_11674__$1 = (function (){var statearr_11727 = state_11674;(statearr_11727[28] = inst_11582);
return statearr_11727;
})();if(cljs.core.truth_(inst_11583))
{var statearr_11728_11797 = state_11674__$1;(statearr_11728_11797[1] = 22);
} else
{var statearr_11729_11798 = state_11674__$1;(statearr_11729_11798[1] = 23);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 21))
{var inst_11592 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11730_11799 = state_11674__$1;(statearr_11730_11799[2] = inst_11592);
(statearr_11730_11799[1] = 18);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 22))
{var inst_11582 = (state_11674[28]);var inst_11585 = cljs.core.async.close_BANG_(inst_11582);var state_11674__$1 = state_11674;var statearr_11731_11800 = state_11674__$1;(statearr_11731_11800[2] = inst_11585);
(statearr_11731_11800[1] = 24);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 23))
{var state_11674__$1 = state_11674;var statearr_11732_11801 = state_11674__$1;(statearr_11732_11801[2] = null);
(statearr_11732_11801[1] = 24);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 24))
{var inst_11571 = (state_11674[25]);var inst_11588 = (state_11674[2]);var inst_11589 = cljs.core.next(inst_11571);var inst_11551 = inst_11589;var inst_11552 = null;var inst_11553 = 0;var inst_11554 = 0;var state_11674__$1 = (function (){var statearr_11733 = state_11674;(statearr_11733[29] = inst_11588);
(statearr_11733[14] = inst_11554);
(statearr_11733[15] = inst_11553);
(statearr_11733[16] = inst_11552);
(statearr_11733[17] = inst_11551);
return statearr_11733;
})();var statearr_11734_11802 = state_11674__$1;(statearr_11734_11802[2] = null);
(statearr_11734_11802[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 25))
{var inst_11612 = (state_11674[12]);var inst_11613 = (state_11674[13]);var inst_11615 = (inst_11613 < inst_11612);var inst_11616 = inst_11615;var state_11674__$1 = state_11674;if(cljs.core.truth_(inst_11616))
{var statearr_11735_11803 = state_11674__$1;(statearr_11735_11803[1] = 27);
} else
{var statearr_11736_11804 = state_11674__$1;(statearr_11736_11804[1] = 28);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 26))
{var inst_11602 = (state_11674[19]);var inst_11660 = (state_11674[2]);var inst_11661 = cljs.core.seq(inst_11602);var state_11674__$1 = (function (){var statearr_11737 = state_11674;(statearr_11737[30] = inst_11660);
return statearr_11737;
})();if(inst_11661)
{var statearr_11738_11805 = state_11674__$1;(statearr_11738_11805[1] = 42);
} else
{var statearr_11739_11806 = state_11674__$1;(statearr_11739_11806[1] = 43);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 27))
{var inst_11611 = (state_11674[11]);var inst_11613 = (state_11674[13]);var inst_11618 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11611,inst_11613);var state_11674__$1 = (function (){var statearr_11740 = state_11674;(statearr_11740[8] = inst_11618);
return statearr_11740;
})();var statearr_11741_11807 = state_11674__$1;(statearr_11741_11807[2] = null);
(statearr_11741_11807[1] = 32);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 28))
{var inst_11610 = (state_11674[10]);var inst_11631 = (state_11674[9]);var inst_11631__$1 = cljs.core.seq(inst_11610);var state_11674__$1 = (function (){var statearr_11745 = state_11674;(statearr_11745[9] = inst_11631__$1);
return statearr_11745;
})();if(inst_11631__$1)
{var statearr_11746_11808 = state_11674__$1;(statearr_11746_11808[1] = 33);
} else
{var statearr_11747_11809 = state_11674__$1;(statearr_11747_11809[1] = 34);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 29))
{var inst_11658 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11748_11810 = state_11674__$1;(statearr_11748_11810[2] = inst_11658);
(statearr_11748_11810[1] = 26);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 30))
{var inst_11610 = (state_11674[10]);var inst_11611 = (state_11674[11]);var inst_11612 = (state_11674[12]);var inst_11613 = (state_11674[13]);var inst_11627 = (state_11674[2]);var inst_11628 = (inst_11613 + 1);var tmp11742 = inst_11610;var tmp11743 = inst_11611;var tmp11744 = inst_11612;var inst_11610__$1 = tmp11742;var inst_11611__$1 = tmp11743;var inst_11612__$1 = tmp11744;var inst_11613__$1 = inst_11628;var state_11674__$1 = (function (){var statearr_11749 = state_11674;(statearr_11749[31] = inst_11627);
(statearr_11749[10] = inst_11610__$1);
(statearr_11749[11] = inst_11611__$1);
(statearr_11749[12] = inst_11612__$1);
(statearr_11749[13] = inst_11613__$1);
return statearr_11749;
})();var statearr_11750_11811 = state_11674__$1;(statearr_11750_11811[2] = null);
(statearr_11750_11811[1] = 25);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11675 === 31))
{var inst_11618 = (state_11674[8]);var inst_11619 = (state_11674[2]);var inst_11620 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_11621 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11618);var state_11674__$1 = (function (){var statearr_11751 = state_11674;(statearr_11751[32] = inst_11620);
(statearr_11751[33] = inst_11619);
return statearr_11751;
})();var statearr_11752_11812 = state_11674__$1;(statearr_11752_11812[2] = inst_11621);
cljs.core.async.impl.ioc_helpers.process_exception(state_11674__$1);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11756[0] = state_machine__5510__auto__);
(statearr_11756[1] = 1);
return statearr_11756;
});
var state_machine__5510__auto____1 = (function (state_11674){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11674);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11757){if((e11757 instanceof Object))
{var ex__5513__auto__ = e11757;var statearr_11758_11813 = state_11674;(statearr_11758_11813[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11674);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e11757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__11814 = state_11674;
state_11674 = G__11814;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11674){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11759 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_11759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11760);
return statearr_11759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj11816 = {};return obj11816;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3397__auto__ = m;if(and__3397__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3397__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3409__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3397__auto__ = m;if(and__3397__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3397__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3409__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3397__auto__ = m;if(and__3397__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3397__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3409__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3397__auto__ = m;if(and__3397__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3397__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3409__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3397__auto__ = m;if(and__3397__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3397__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3409__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$26);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11926 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11926 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11927){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11927 = meta11927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11926.cljs$lang$type = true;
cljs.core.async.t11926.cljs$lang$ctorStr = "cljs.core.async/t11926";
cljs.core.async.t11926.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core.async/t11926");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11926.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11926.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11926.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11926.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11926.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11926.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11926.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11928){var self__ = this;
var _11928__$1 = this;return self__.meta11927;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11928,meta11927__$1){var self__ = this;
var _11928__$1 = this;return (new cljs.core.async.t11926(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11927__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11926 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11926(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11927){return (new cljs.core.async.t11926(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11927));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11926(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5524__auto___12035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11993){var state_val_11994 = (state_11993[1]);if((state_val_11994 === 1))
{var inst_11932 = (state_11993[7]);var inst_11932__$1 = calc_state();var inst_11933 = cljs.core.seq_QMARK_(inst_11932__$1);var state_11993__$1 = (function (){var statearr_11995 = state_11993;(statearr_11995[7] = inst_11932__$1);
return statearr_11995;
})();if(inst_11933)
{var statearr_11996_12036 = state_11993__$1;(statearr_11996_12036[1] = 2);
} else
{var statearr_11997_12037 = state_11993__$1;(statearr_11997_12037[1] = 3);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 2))
{var inst_11932 = (state_11993[7]);var inst_11935 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11932);var state_11993__$1 = state_11993;var statearr_11998_12038 = state_11993__$1;(statearr_11998_12038[2] = inst_11935);
(statearr_11998_12038[1] = 4);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 3))
{var inst_11932 = (state_11993[7]);var state_11993__$1 = state_11993;var statearr_11999_12039 = state_11993__$1;(statearr_11999_12039[2] = inst_11932);
(statearr_11999_12039[1] = 4);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 4))
{var inst_11932 = (state_11993[7]);var inst_11938 = (state_11993[2]);var inst_11939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11938,cljs.core.constant$keyword$30);var inst_11940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11938,cljs.core.constant$keyword$29);var inst_11941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11938,cljs.core.constant$keyword$28);var inst_11942 = inst_11932;var state_11993__$1 = (function (){var statearr_12000 = state_11993;(statearr_12000[8] = inst_11939);
(statearr_12000[9] = inst_11940);
(statearr_12000[10] = inst_11941);
(statearr_12000[11] = inst_11942);
return statearr_12000;
})();var statearr_12001_12040 = state_11993__$1;(statearr_12001_12040[2] = null);
(statearr_12001_12040[1] = 5);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 5))
{var inst_11942 = (state_11993[11]);var inst_11945 = cljs.core.seq_QMARK_(inst_11942);var state_11993__$1 = state_11993;if(inst_11945)
{var statearr_12002_12041 = state_11993__$1;(statearr_12002_12041[1] = 7);
} else
{var statearr_12003_12042 = state_11993__$1;(statearr_12003_12042[1] = 8);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 6))
{var inst_11991 = (state_11993[2]);var state_11993__$1 = state_11993;return cljs.core.async.impl.ioc_helpers.return_chan(state_11993__$1,inst_11991);
} else
{if((state_val_11994 === 7))
{var inst_11942 = (state_11993[11]);var inst_11947 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11942);var state_11993__$1 = state_11993;var statearr_12004_12043 = state_11993__$1;(statearr_12004_12043[2] = inst_11947);
(statearr_12004_12043[1] = 9);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 8))
{var inst_11942 = (state_11993[11]);var state_11993__$1 = state_11993;var statearr_12005_12044 = state_11993__$1;(statearr_12005_12044[2] = inst_11942);
(statearr_12005_12044[1] = 9);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 9))
{var inst_11950 = (state_11993[12]);var inst_11950__$1 = (state_11993[2]);var inst_11951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11950__$1,cljs.core.constant$keyword$30);var inst_11952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11950__$1,cljs.core.constant$keyword$29);var inst_11953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11950__$1,cljs.core.constant$keyword$28);var state_11993__$1 = (function (){var statearr_12006 = state_11993;(statearr_12006[13] = inst_11952);
(statearr_12006[14] = inst_11953);
(statearr_12006[12] = inst_11950__$1);
return statearr_12006;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_11993__$1,10,inst_11951);
} else
{if((state_val_11994 === 10))
{var inst_11958 = (state_11993[15]);var inst_11957 = (state_11993[16]);var inst_11956 = (state_11993[2]);var inst_11957__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11956,0,null);var inst_11958__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11956,1,null);var inst_11959 = (inst_11957__$1 == null);var inst_11960 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11958__$1,change);var inst_11961 = (inst_11959) || (inst_11960);var state_11993__$1 = (function (){var statearr_12007 = state_11993;(statearr_12007[15] = inst_11958__$1);
(statearr_12007[16] = inst_11957__$1);
return statearr_12007;
})();if(cljs.core.truth_(inst_11961))
{var statearr_12008_12045 = state_11993__$1;(statearr_12008_12045[1] = 11);
} else
{var statearr_12009_12046 = state_11993__$1;(statearr_12009_12046[1] = 12);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 11))
{var inst_11957 = (state_11993[16]);var inst_11963 = (inst_11957 == null);var state_11993__$1 = state_11993;if(cljs.core.truth_(inst_11963))
{var statearr_12010_12047 = state_11993__$1;(statearr_12010_12047[1] = 14);
} else
{var statearr_12011_12048 = state_11993__$1;(statearr_12011_12048[1] = 15);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 12))
{var inst_11958 = (state_11993[15]);var inst_11972 = (state_11993[17]);var inst_11953 = (state_11993[14]);var inst_11972__$1 = (inst_11953.cljs$core$IFn$_invoke$arity$1 ? inst_11953.cljs$core$IFn$_invoke$arity$1(inst_11958) : inst_11953.call(null,inst_11958));var state_11993__$1 = (function (){var statearr_12012 = state_11993;(statearr_12012[17] = inst_11972__$1);
return statearr_12012;
})();if(cljs.core.truth_(inst_11972__$1))
{var statearr_12013_12049 = state_11993__$1;(statearr_12013_12049[1] = 17);
} else
{var statearr_12014_12050 = state_11993__$1;(statearr_12014_12050[1] = 18);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 13))
{var inst_11989 = (state_11993[2]);var state_11993__$1 = state_11993;var statearr_12015_12051 = state_11993__$1;(statearr_12015_12051[2] = inst_11989);
(statearr_12015_12051[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 14))
{var inst_11958 = (state_11993[15]);var inst_11965 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11958);var state_11993__$1 = state_11993;var statearr_12016_12052 = state_11993__$1;(statearr_12016_12052[2] = inst_11965);
(statearr_12016_12052[1] = 16);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 15))
{var state_11993__$1 = state_11993;var statearr_12017_12053 = state_11993__$1;(statearr_12017_12053[2] = null);
(statearr_12017_12053[1] = 16);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 16))
{var inst_11968 = (state_11993[2]);var inst_11969 = calc_state();var inst_11942 = inst_11969;var state_11993__$1 = (function (){var statearr_12018 = state_11993;(statearr_12018[18] = inst_11968);
(statearr_12018[11] = inst_11942);
return statearr_12018;
})();var statearr_12019_12054 = state_11993__$1;(statearr_12019_12054[2] = null);
(statearr_12019_12054[1] = 5);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 17))
{var inst_11972 = (state_11993[17]);var state_11993__$1 = state_11993;var statearr_12020_12055 = state_11993__$1;(statearr_12020_12055[2] = inst_11972);
(statearr_12020_12055[1] = 19);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 18))
{var inst_11958 = (state_11993[15]);var inst_11952 = (state_11993[13]);var inst_11953 = (state_11993[14]);var inst_11975 = cljs.core.empty_QMARK_(inst_11953);var inst_11976 = (inst_11952.cljs$core$IFn$_invoke$arity$1 ? inst_11952.cljs$core$IFn$_invoke$arity$1(inst_11958) : inst_11952.call(null,inst_11958));var inst_11977 = cljs.core.not(inst_11976);var inst_11978 = (inst_11975) && (inst_11977);var state_11993__$1 = state_11993;var statearr_12021_12056 = state_11993__$1;(statearr_12021_12056[2] = inst_11978);
(statearr_12021_12056[1] = 19);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 19))
{var inst_11980 = (state_11993[2]);var state_11993__$1 = state_11993;if(cljs.core.truth_(inst_11980))
{var statearr_12022_12057 = state_11993__$1;(statearr_12022_12057[1] = 20);
} else
{var statearr_12023_12058 = state_11993__$1;(statearr_12023_12058[1] = 21);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 20))
{var inst_11957 = (state_11993[16]);var state_11993__$1 = state_11993;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11993__$1,23,out,inst_11957);
} else
{if((state_val_11994 === 21))
{var state_11993__$1 = state_11993;var statearr_12024_12059 = state_11993__$1;(statearr_12024_12059[2] = null);
(statearr_12024_12059[1] = 22);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 22))
{var inst_11950 = (state_11993[12]);var inst_11986 = (state_11993[2]);var inst_11942 = inst_11950;var state_11993__$1 = (function (){var statearr_12025 = state_11993;(statearr_12025[11] = inst_11942);
(statearr_12025[19] = inst_11986);
return statearr_12025;
})();var statearr_12026_12060 = state_11993__$1;(statearr_12026_12060[2] = null);
(statearr_12026_12060[1] = 5);
return cljs.core.constant$keyword$18;
} else
{if((state_val_11994 === 23))
{var inst_11983 = (state_11993[2]);var state_11993__$1 = state_11993;var statearr_12027_12061 = state_11993__$1;(statearr_12027_12061[2] = inst_11983);
(statearr_12027_12061[1] = 22);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_12031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12031[0] = state_machine__5510__auto__);
(statearr_12031[1] = 1);
return statearr_12031;
});
var state_machine__5510__auto____1 = (function (state_11993){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_11993);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12032){if((e12032 instanceof Object))
{var ex__5513__auto__ = e12032;var statearr_12033_12062 = state_11993;(statearr_12033_12062[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11993);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__12063 = state_11993;
state_11993 = G__12063;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11993){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12034 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_12034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12035);
return statearr_12034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj12065 = {};return obj12065;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3397__auto__ = p;if(and__3397__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3397__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3409__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3397__auto__ = p;if(and__3397__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3397__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3409__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3397__auto__ = p;if(and__3397__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3397__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3409__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3397__auto__ = p;if(and__3397__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3397__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3409__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3409__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3409__auto__,mults){
return (function (p1__12066_SHARP_){if(cljs.core.truth_((p1__12066_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12066_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12066_SHARP_.call(null,topic))))
{return p1__12066_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12066_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3409__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12191 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12191 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12192){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12192 = meta12192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12191.cljs$lang$type = true;
cljs.core.async.t12191.cljs$lang$ctorStr = "cljs.core.async/t12191";
cljs.core.async.t12191.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core.async/t12191");
});})(mults,ensure_mult))
;
cljs.core.async.t12191.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12191.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12191.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12191.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12193){var self__ = this;
var _12193__$1 = this;return self__.meta12192;
});})(mults,ensure_mult))
;
cljs.core.async.t12191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12193,meta12192__$1){var self__ = this;
var _12193__$1 = this;return (new cljs.core.async.t12191(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12192__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12191 = ((function (mults,ensure_mult){
return (function __GT_t12191(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12192){return (new cljs.core.async.t12191(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12192));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12191(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5524__auto___12315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12267){var state_val_12268 = (state_12267[1]);if((state_val_12268 === 1))
{var state_12267__$1 = state_12267;var statearr_12269_12316 = state_12267__$1;(statearr_12269_12316[2] = null);
(statearr_12269_12316[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 2))
{var state_12267__$1 = state_12267;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12267__$1,4,ch);
} else
{if((state_val_12268 === 3))
{var inst_12265 = (state_12267[2]);var state_12267__$1 = state_12267;return cljs.core.async.impl.ioc_helpers.return_chan(state_12267__$1,inst_12265);
} else
{if((state_val_12268 === 4))
{var inst_12196 = (state_12267[7]);var inst_12196__$1 = (state_12267[2]);var inst_12197 = (inst_12196__$1 == null);var state_12267__$1 = (function (){var statearr_12270 = state_12267;(statearr_12270[7] = inst_12196__$1);
return statearr_12270;
})();if(cljs.core.truth_(inst_12197))
{var statearr_12271_12317 = state_12267__$1;(statearr_12271_12317[1] = 5);
} else
{var statearr_12272_12318 = state_12267__$1;(statearr_12272_12318[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 5))
{var inst_12203 = cljs.core.deref(mults);var inst_12204 = cljs.core.vals(inst_12203);var inst_12205 = cljs.core.seq(inst_12204);var inst_12206 = inst_12205;var inst_12207 = null;var inst_12208 = 0;var inst_12209 = 0;var state_12267__$1 = (function (){var statearr_12273 = state_12267;(statearr_12273[8] = inst_12209);
(statearr_12273[9] = inst_12208);
(statearr_12273[10] = inst_12206);
(statearr_12273[11] = inst_12207);
return statearr_12273;
})();var statearr_12274_12319 = state_12267__$1;(statearr_12274_12319[2] = null);
(statearr_12274_12319[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 6))
{var inst_12196 = (state_12267[7]);var inst_12246 = (state_12267[12]);var inst_12244 = (state_12267[13]);var inst_12244__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12196) : topic_fn.call(null,inst_12196));var inst_12245 = cljs.core.deref(mults);var inst_12246__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12245,inst_12244__$1);var state_12267__$1 = (function (){var statearr_12275 = state_12267;(statearr_12275[12] = inst_12246__$1);
(statearr_12275[13] = inst_12244__$1);
return statearr_12275;
})();if(cljs.core.truth_(inst_12246__$1))
{var statearr_12276_12320 = state_12267__$1;(statearr_12276_12320[1] = 19);
} else
{var statearr_12277_12321 = state_12267__$1;(statearr_12277_12321[1] = 20);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 7))
{var inst_12263 = (state_12267[2]);var state_12267__$1 = state_12267;var statearr_12278_12322 = state_12267__$1;(statearr_12278_12322[2] = inst_12263);
(statearr_12278_12322[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 8))
{var inst_12209 = (state_12267[8]);var inst_12208 = (state_12267[9]);var inst_12211 = (inst_12209 < inst_12208);var inst_12212 = inst_12211;var state_12267__$1 = state_12267;if(cljs.core.truth_(inst_12212))
{var statearr_12282_12323 = state_12267__$1;(statearr_12282_12323[1] = 10);
} else
{var statearr_12283_12324 = state_12267__$1;(statearr_12283_12324[1] = 11);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 9))
{var inst_12242 = (state_12267[2]);var state_12267__$1 = state_12267;var statearr_12284_12325 = state_12267__$1;(statearr_12284_12325[2] = inst_12242);
(statearr_12284_12325[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 10))
{var inst_12209 = (state_12267[8]);var inst_12208 = (state_12267[9]);var inst_12206 = (state_12267[10]);var inst_12207 = (state_12267[11]);var inst_12214 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12207,inst_12209);var inst_12215 = cljs.core.async.muxch_STAR_(inst_12214);var inst_12216 = cljs.core.async.close_BANG_(inst_12215);var inst_12217 = (inst_12209 + 1);var tmp12279 = inst_12208;var tmp12280 = inst_12206;var tmp12281 = inst_12207;var inst_12206__$1 = tmp12280;var inst_12207__$1 = tmp12281;var inst_12208__$1 = tmp12279;var inst_12209__$1 = inst_12217;var state_12267__$1 = (function (){var statearr_12285 = state_12267;(statearr_12285[8] = inst_12209__$1);
(statearr_12285[9] = inst_12208__$1);
(statearr_12285[14] = inst_12216);
(statearr_12285[10] = inst_12206__$1);
(statearr_12285[11] = inst_12207__$1);
return statearr_12285;
})();var statearr_12286_12326 = state_12267__$1;(statearr_12286_12326[2] = null);
(statearr_12286_12326[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 11))
{var inst_12220 = (state_12267[15]);var inst_12206 = (state_12267[10]);var inst_12220__$1 = cljs.core.seq(inst_12206);var state_12267__$1 = (function (){var statearr_12287 = state_12267;(statearr_12287[15] = inst_12220__$1);
return statearr_12287;
})();if(inst_12220__$1)
{var statearr_12288_12327 = state_12267__$1;(statearr_12288_12327[1] = 13);
} else
{var statearr_12289_12328 = state_12267__$1;(statearr_12289_12328[1] = 14);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 12))
{var inst_12240 = (state_12267[2]);var state_12267__$1 = state_12267;var statearr_12290_12329 = state_12267__$1;(statearr_12290_12329[2] = inst_12240);
(statearr_12290_12329[1] = 9);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 13))
{var inst_12220 = (state_12267[15]);var inst_12222 = cljs.core.chunked_seq_QMARK_(inst_12220);var state_12267__$1 = state_12267;if(inst_12222)
{var statearr_12291_12330 = state_12267__$1;(statearr_12291_12330[1] = 16);
} else
{var statearr_12292_12331 = state_12267__$1;(statearr_12292_12331[1] = 17);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 14))
{var state_12267__$1 = state_12267;var statearr_12293_12332 = state_12267__$1;(statearr_12293_12332[2] = null);
(statearr_12293_12332[1] = 15);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 15))
{var inst_12238 = (state_12267[2]);var state_12267__$1 = state_12267;var statearr_12294_12333 = state_12267__$1;(statearr_12294_12333[2] = inst_12238);
(statearr_12294_12333[1] = 12);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 16))
{var inst_12220 = (state_12267[15]);var inst_12224 = cljs.core.chunk_first(inst_12220);var inst_12225 = cljs.core.chunk_rest(inst_12220);var inst_12226 = cljs.core.count(inst_12224);var inst_12206 = inst_12225;var inst_12207 = inst_12224;var inst_12208 = inst_12226;var inst_12209 = 0;var state_12267__$1 = (function (){var statearr_12295 = state_12267;(statearr_12295[8] = inst_12209);
(statearr_12295[9] = inst_12208);
(statearr_12295[10] = inst_12206);
(statearr_12295[11] = inst_12207);
return statearr_12295;
})();var statearr_12296_12334 = state_12267__$1;(statearr_12296_12334[2] = null);
(statearr_12296_12334[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 17))
{var inst_12220 = (state_12267[15]);var inst_12229 = cljs.core.first(inst_12220);var inst_12230 = cljs.core.async.muxch_STAR_(inst_12229);var inst_12231 = cljs.core.async.close_BANG_(inst_12230);var inst_12232 = cljs.core.next(inst_12220);var inst_12206 = inst_12232;var inst_12207 = null;var inst_12208 = 0;var inst_12209 = 0;var state_12267__$1 = (function (){var statearr_12297 = state_12267;(statearr_12297[16] = inst_12231);
(statearr_12297[8] = inst_12209);
(statearr_12297[9] = inst_12208);
(statearr_12297[10] = inst_12206);
(statearr_12297[11] = inst_12207);
return statearr_12297;
})();var statearr_12298_12335 = state_12267__$1;(statearr_12298_12335[2] = null);
(statearr_12298_12335[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 18))
{var inst_12235 = (state_12267[2]);var state_12267__$1 = state_12267;var statearr_12299_12336 = state_12267__$1;(statearr_12299_12336[2] = inst_12235);
(statearr_12299_12336[1] = 15);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 19))
{var state_12267__$1 = state_12267;var statearr_12300_12337 = state_12267__$1;(statearr_12300_12337[2] = null);
(statearr_12300_12337[1] = 24);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 20))
{var state_12267__$1 = state_12267;var statearr_12301_12338 = state_12267__$1;(statearr_12301_12338[2] = null);
(statearr_12301_12338[1] = 21);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 21))
{var inst_12260 = (state_12267[2]);var state_12267__$1 = (function (){var statearr_12302 = state_12267;(statearr_12302[17] = inst_12260);
return statearr_12302;
})();var statearr_12303_12339 = state_12267__$1;(statearr_12303_12339[2] = null);
(statearr_12303_12339[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 22))
{var inst_12257 = (state_12267[2]);var state_12267__$1 = state_12267;var statearr_12304_12340 = state_12267__$1;(statearr_12304_12340[2] = inst_12257);
(statearr_12304_12340[1] = 21);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 23))
{var inst_12244 = (state_12267[13]);var inst_12248 = (state_12267[2]);var inst_12249 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12244);var state_12267__$1 = (function (){var statearr_12305 = state_12267;(statearr_12305[18] = inst_12248);
return statearr_12305;
})();var statearr_12306_12341 = state_12267__$1;(statearr_12306_12341[2] = inst_12249);
cljs.core.async.impl.ioc_helpers.process_exception(state_12267__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12268 === 24))
{var inst_12196 = (state_12267[7]);var inst_12246 = (state_12267[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_12267,23,Object,null,22);var inst_12253 = cljs.core.async.muxch_STAR_(inst_12246);var state_12267__$1 = state_12267;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12267__$1,25,inst_12253,inst_12196);
} else
{if((state_val_12268 === 25))
{var inst_12255 = (state_12267[2]);var state_12267__$1 = state_12267;var statearr_12307_12342 = state_12267__$1;(statearr_12307_12342[2] = inst_12255);
cljs.core.async.impl.ioc_helpers.process_exception(state_12267__$1);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_12311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12311[0] = state_machine__5510__auto__);
(statearr_12311[1] = 1);
return statearr_12311;
});
var state_machine__5510__auto____1 = (function (state_12267){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_12267);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12312){if((e12312 instanceof Object))
{var ex__5513__auto__ = e12312;var statearr_12313_12343 = state_12267;(statearr_12313_12343[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12267);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__12344 = state_12267;
state_12267 = G__12344;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12267){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12314 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_12314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12315);
return statearr_12314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5524__auto___12481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12451){var state_val_12452 = (state_12451[1]);if((state_val_12452 === 1))
{var state_12451__$1 = state_12451;var statearr_12453_12482 = state_12451__$1;(statearr_12453_12482[2] = null);
(statearr_12453_12482[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 2))
{var inst_12414 = cljs.core.reset_BANG_(dctr,cnt);var inst_12415 = 0;var state_12451__$1 = (function (){var statearr_12454 = state_12451;(statearr_12454[7] = inst_12414);
(statearr_12454[8] = inst_12415);
return statearr_12454;
})();var statearr_12455_12483 = state_12451__$1;(statearr_12455_12483[2] = null);
(statearr_12455_12483[1] = 4);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 3))
{var inst_12449 = (state_12451[2]);var state_12451__$1 = state_12451;return cljs.core.async.impl.ioc_helpers.return_chan(state_12451__$1,inst_12449);
} else
{if((state_val_12452 === 4))
{var inst_12415 = (state_12451[8]);var inst_12417 = (inst_12415 < cnt);var state_12451__$1 = state_12451;if(cljs.core.truth_(inst_12417))
{var statearr_12456_12484 = state_12451__$1;(statearr_12456_12484[1] = 6);
} else
{var statearr_12457_12485 = state_12451__$1;(statearr_12457_12485[1] = 7);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 5))
{var inst_12435 = (state_12451[2]);var state_12451__$1 = (function (){var statearr_12458 = state_12451;(statearr_12458[9] = inst_12435);
return statearr_12458;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12451__$1,12,dchan);
} else
{if((state_val_12452 === 6))
{var state_12451__$1 = state_12451;var statearr_12459_12486 = state_12451__$1;(statearr_12459_12486[2] = null);
(statearr_12459_12486[1] = 11);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 7))
{var state_12451__$1 = state_12451;var statearr_12460_12487 = state_12451__$1;(statearr_12460_12487[2] = null);
(statearr_12460_12487[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 8))
{var inst_12433 = (state_12451[2]);var state_12451__$1 = state_12451;var statearr_12461_12488 = state_12451__$1;(statearr_12461_12488[2] = inst_12433);
(statearr_12461_12488[1] = 5);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 9))
{var inst_12415 = (state_12451[8]);var inst_12428 = (state_12451[2]);var inst_12429 = (inst_12415 + 1);var inst_12415__$1 = inst_12429;var state_12451__$1 = (function (){var statearr_12462 = state_12451;(statearr_12462[8] = inst_12415__$1);
(statearr_12462[10] = inst_12428);
return statearr_12462;
})();var statearr_12463_12489 = state_12451__$1;(statearr_12463_12489[2] = null);
(statearr_12463_12489[1] = 4);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 10))
{var inst_12419 = (state_12451[2]);var inst_12420 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_12451__$1 = (function (){var statearr_12464 = state_12451;(statearr_12464[11] = inst_12419);
return statearr_12464;
})();var statearr_12465_12490 = state_12451__$1;(statearr_12465_12490[2] = inst_12420);
cljs.core.async.impl.ioc_helpers.process_exception(state_12451__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 11))
{var inst_12415 = (state_12451[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_12451,10,Object,null,9);var inst_12424 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12415) : chs__$1.call(null,inst_12415));var inst_12425 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12415) : done.call(null,inst_12415));var inst_12426 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12424,inst_12425);var state_12451__$1 = state_12451;var statearr_12466_12491 = state_12451__$1;(statearr_12466_12491[2] = inst_12426);
cljs.core.async.impl.ioc_helpers.process_exception(state_12451__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 12))
{var inst_12437 = (state_12451[12]);var inst_12437__$1 = (state_12451[2]);var inst_12438 = cljs.core.some(cljs.core.nil_QMARK_,inst_12437__$1);var state_12451__$1 = (function (){var statearr_12467 = state_12451;(statearr_12467[12] = inst_12437__$1);
return statearr_12467;
})();if(cljs.core.truth_(inst_12438))
{var statearr_12468_12492 = state_12451__$1;(statearr_12468_12492[1] = 13);
} else
{var statearr_12469_12493 = state_12451__$1;(statearr_12469_12493[1] = 14);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 13))
{var inst_12440 = cljs.core.async.close_BANG_(out);var state_12451__$1 = state_12451;var statearr_12470_12494 = state_12451__$1;(statearr_12470_12494[2] = inst_12440);
(statearr_12470_12494[1] = 15);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 14))
{var inst_12437 = (state_12451[12]);var inst_12442 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12437);var state_12451__$1 = state_12451;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12451__$1,16,out,inst_12442);
} else
{if((state_val_12452 === 15))
{var inst_12447 = (state_12451[2]);var state_12451__$1 = state_12451;var statearr_12471_12495 = state_12451__$1;(statearr_12471_12495[2] = inst_12447);
(statearr_12471_12495[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12452 === 16))
{var inst_12444 = (state_12451[2]);var state_12451__$1 = (function (){var statearr_12472 = state_12451;(statearr_12472[13] = inst_12444);
return statearr_12472;
})();var statearr_12473_12496 = state_12451__$1;(statearr_12473_12496[2] = null);
(statearr_12473_12496[1] = 2);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_12477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12477[0] = state_machine__5510__auto__);
(statearr_12477[1] = 1);
return statearr_12477;
});
var state_machine__5510__auto____1 = (function (state_12451){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_12451);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12478){if((e12478 instanceof Object))
{var ex__5513__auto__ = e12478;var statearr_12479_12497 = state_12451;(statearr_12479_12497[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12451);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12478;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__12498 = state_12451;
state_12451 = G__12498;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12451){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12480 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_12480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12481);
return statearr_12480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___12606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12582){var state_val_12583 = (state_12582[1]);if((state_val_12583 === 1))
{var inst_12553 = cljs.core.vec(chs);var inst_12554 = inst_12553;var state_12582__$1 = (function (){var statearr_12584 = state_12582;(statearr_12584[7] = inst_12554);
return statearr_12584;
})();var statearr_12585_12607 = state_12582__$1;(statearr_12585_12607[2] = null);
(statearr_12585_12607[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12583 === 2))
{var inst_12554 = (state_12582[7]);var inst_12556 = cljs.core.count(inst_12554);var inst_12557 = (inst_12556 > 0);var state_12582__$1 = state_12582;if(cljs.core.truth_(inst_12557))
{var statearr_12586_12608 = state_12582__$1;(statearr_12586_12608[1] = 4);
} else
{var statearr_12587_12609 = state_12582__$1;(statearr_12587_12609[1] = 5);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12583 === 3))
{var inst_12580 = (state_12582[2]);var state_12582__$1 = state_12582;return cljs.core.async.impl.ioc_helpers.return_chan(state_12582__$1,inst_12580);
} else
{if((state_val_12583 === 4))
{var inst_12554 = (state_12582[7]);var state_12582__$1 = state_12582;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_12582__$1,7,inst_12554);
} else
{if((state_val_12583 === 5))
{var inst_12576 = cljs.core.async.close_BANG_(out);var state_12582__$1 = state_12582;var statearr_12588_12610 = state_12582__$1;(statearr_12588_12610[2] = inst_12576);
(statearr_12588_12610[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12583 === 6))
{var inst_12578 = (state_12582[2]);var state_12582__$1 = state_12582;var statearr_12589_12611 = state_12582__$1;(statearr_12589_12611[2] = inst_12578);
(statearr_12589_12611[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12583 === 7))
{var inst_12561 = (state_12582[8]);var inst_12562 = (state_12582[9]);var inst_12561__$1 = (state_12582[2]);var inst_12562__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12561__$1,0,null);var inst_12563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12561__$1,1,null);var inst_12564 = (inst_12562__$1 == null);var state_12582__$1 = (function (){var statearr_12590 = state_12582;(statearr_12590[8] = inst_12561__$1);
(statearr_12590[9] = inst_12562__$1);
(statearr_12590[10] = inst_12563);
return statearr_12590;
})();if(cljs.core.truth_(inst_12564))
{var statearr_12591_12612 = state_12582__$1;(statearr_12591_12612[1] = 8);
} else
{var statearr_12592_12613 = state_12582__$1;(statearr_12592_12613[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12583 === 8))
{var inst_12554 = (state_12582[7]);var inst_12561 = (state_12582[8]);var inst_12562 = (state_12582[9]);var inst_12563 = (state_12582[10]);var inst_12566 = (function (){var c = inst_12563;var v = inst_12562;var vec__12559 = inst_12561;var cs = inst_12554;return ((function (c,v,vec__12559,cs,inst_12554,inst_12561,inst_12562,inst_12563,state_val_12583){
return (function (p1__12499_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12499_SHARP_);
});
;})(c,v,vec__12559,cs,inst_12554,inst_12561,inst_12562,inst_12563,state_val_12583))
})();var inst_12567 = cljs.core.filterv(inst_12566,inst_12554);var inst_12554__$1 = inst_12567;var state_12582__$1 = (function (){var statearr_12593 = state_12582;(statearr_12593[7] = inst_12554__$1);
return statearr_12593;
})();var statearr_12594_12614 = state_12582__$1;(statearr_12594_12614[2] = null);
(statearr_12594_12614[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12583 === 9))
{var inst_12562 = (state_12582[9]);var state_12582__$1 = state_12582;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12582__$1,11,out,inst_12562);
} else
{if((state_val_12583 === 10))
{var inst_12574 = (state_12582[2]);var state_12582__$1 = state_12582;var statearr_12596_12615 = state_12582__$1;(statearr_12596_12615[2] = inst_12574);
(statearr_12596_12615[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12583 === 11))
{var inst_12554 = (state_12582[7]);var inst_12571 = (state_12582[2]);var tmp12595 = inst_12554;var inst_12554__$1 = tmp12595;var state_12582__$1 = (function (){var statearr_12597 = state_12582;(statearr_12597[7] = inst_12554__$1);
(statearr_12597[11] = inst_12571);
return statearr_12597;
})();var statearr_12598_12616 = state_12582__$1;(statearr_12598_12616[2] = null);
(statearr_12598_12616[1] = 2);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_12602 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12602[0] = state_machine__5510__auto__);
(statearr_12602[1] = 1);
return statearr_12602;
});
var state_machine__5510__auto____1 = (function (state_12582){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_12582);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12603){if((e12603 instanceof Object))
{var ex__5513__auto__ = e12603;var statearr_12604_12617 = state_12582;(statearr_12604_12617[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12582);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__12618 = state_12582;
state_12582 = G__12618;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12582){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12605 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_12605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12606);
return statearr_12605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___12711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12688){var state_val_12689 = (state_12688[1]);if((state_val_12689 === 1))
{var inst_12665 = 0;var state_12688__$1 = (function (){var statearr_12690 = state_12688;(statearr_12690[7] = inst_12665);
return statearr_12690;
})();var statearr_12691_12712 = state_12688__$1;(statearr_12691_12712[2] = null);
(statearr_12691_12712[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12689 === 2))
{var inst_12665 = (state_12688[7]);var inst_12667 = (inst_12665 < n);var state_12688__$1 = state_12688;if(cljs.core.truth_(inst_12667))
{var statearr_12692_12713 = state_12688__$1;(statearr_12692_12713[1] = 4);
} else
{var statearr_12693_12714 = state_12688__$1;(statearr_12693_12714[1] = 5);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12689 === 3))
{var inst_12685 = (state_12688[2]);var inst_12686 = cljs.core.async.close_BANG_(out);var state_12688__$1 = (function (){var statearr_12694 = state_12688;(statearr_12694[8] = inst_12685);
return statearr_12694;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_12688__$1,inst_12686);
} else
{if((state_val_12689 === 4))
{var state_12688__$1 = state_12688;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12688__$1,7,ch);
} else
{if((state_val_12689 === 5))
{var state_12688__$1 = state_12688;var statearr_12695_12715 = state_12688__$1;(statearr_12695_12715[2] = null);
(statearr_12695_12715[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12689 === 6))
{var inst_12683 = (state_12688[2]);var state_12688__$1 = state_12688;var statearr_12696_12716 = state_12688__$1;(statearr_12696_12716[2] = inst_12683);
(statearr_12696_12716[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12689 === 7))
{var inst_12670 = (state_12688[9]);var inst_12670__$1 = (state_12688[2]);var inst_12671 = (inst_12670__$1 == null);var inst_12672 = cljs.core.not(inst_12671);var state_12688__$1 = (function (){var statearr_12697 = state_12688;(statearr_12697[9] = inst_12670__$1);
return statearr_12697;
})();if(inst_12672)
{var statearr_12698_12717 = state_12688__$1;(statearr_12698_12717[1] = 8);
} else
{var statearr_12699_12718 = state_12688__$1;(statearr_12699_12718[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12689 === 8))
{var inst_12670 = (state_12688[9]);var state_12688__$1 = state_12688;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12688__$1,11,out,inst_12670);
} else
{if((state_val_12689 === 9))
{var state_12688__$1 = state_12688;var statearr_12700_12719 = state_12688__$1;(statearr_12700_12719[2] = null);
(statearr_12700_12719[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12689 === 10))
{var inst_12680 = (state_12688[2]);var state_12688__$1 = state_12688;var statearr_12701_12720 = state_12688__$1;(statearr_12701_12720[2] = inst_12680);
(statearr_12701_12720[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12689 === 11))
{var inst_12665 = (state_12688[7]);var inst_12675 = (state_12688[2]);var inst_12676 = (inst_12665 + 1);var inst_12665__$1 = inst_12676;var state_12688__$1 = (function (){var statearr_12702 = state_12688;(statearr_12702[10] = inst_12675);
(statearr_12702[7] = inst_12665__$1);
return statearr_12702;
})();var statearr_12703_12721 = state_12688__$1;(statearr_12703_12721[2] = null);
(statearr_12703_12721[1] = 2);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_12707 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12707[0] = state_machine__5510__auto__);
(statearr_12707[1] = 1);
return statearr_12707;
});
var state_machine__5510__auto____1 = (function (state_12688){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_12688);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12708){if((e12708 instanceof Object))
{var ex__5513__auto__ = e12708;var statearr_12709_12722 = state_12688;(statearr_12709_12722[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12688);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__12723 = state_12688;
state_12688 = G__12723;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12688){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12710 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_12710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12711);
return statearr_12710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___12820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12795){var state_val_12796 = (state_12795[1]);if((state_val_12796 === 1))
{var inst_12772 = null;var state_12795__$1 = (function (){var statearr_12797 = state_12795;(statearr_12797[7] = inst_12772);
return statearr_12797;
})();var statearr_12798_12821 = state_12795__$1;(statearr_12798_12821[2] = null);
(statearr_12798_12821[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12796 === 2))
{var state_12795__$1 = state_12795;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12795__$1,4,ch);
} else
{if((state_val_12796 === 3))
{var inst_12792 = (state_12795[2]);var inst_12793 = cljs.core.async.close_BANG_(out);var state_12795__$1 = (function (){var statearr_12799 = state_12795;(statearr_12799[8] = inst_12792);
return statearr_12799;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_12795__$1,inst_12793);
} else
{if((state_val_12796 === 4))
{var inst_12775 = (state_12795[9]);var inst_12775__$1 = (state_12795[2]);var inst_12776 = (inst_12775__$1 == null);var inst_12777 = cljs.core.not(inst_12776);var state_12795__$1 = (function (){var statearr_12800 = state_12795;(statearr_12800[9] = inst_12775__$1);
return statearr_12800;
})();if(inst_12777)
{var statearr_12801_12822 = state_12795__$1;(statearr_12801_12822[1] = 5);
} else
{var statearr_12802_12823 = state_12795__$1;(statearr_12802_12823[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12796 === 5))
{var inst_12775 = (state_12795[9]);var inst_12772 = (state_12795[7]);var inst_12779 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12775,inst_12772);var state_12795__$1 = state_12795;if(inst_12779)
{var statearr_12803_12824 = state_12795__$1;(statearr_12803_12824[1] = 8);
} else
{var statearr_12804_12825 = state_12795__$1;(statearr_12804_12825[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12796 === 6))
{var state_12795__$1 = state_12795;var statearr_12806_12826 = state_12795__$1;(statearr_12806_12826[2] = null);
(statearr_12806_12826[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12796 === 7))
{var inst_12790 = (state_12795[2]);var state_12795__$1 = state_12795;var statearr_12807_12827 = state_12795__$1;(statearr_12807_12827[2] = inst_12790);
(statearr_12807_12827[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12796 === 8))
{var inst_12772 = (state_12795[7]);var tmp12805 = inst_12772;var inst_12772__$1 = tmp12805;var state_12795__$1 = (function (){var statearr_12808 = state_12795;(statearr_12808[7] = inst_12772__$1);
return statearr_12808;
})();var statearr_12809_12828 = state_12795__$1;(statearr_12809_12828[2] = null);
(statearr_12809_12828[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12796 === 9))
{var inst_12775 = (state_12795[9]);var state_12795__$1 = state_12795;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12795__$1,11,out,inst_12775);
} else
{if((state_val_12796 === 10))
{var inst_12787 = (state_12795[2]);var state_12795__$1 = state_12795;var statearr_12810_12829 = state_12795__$1;(statearr_12810_12829[2] = inst_12787);
(statearr_12810_12829[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12796 === 11))
{var inst_12775 = (state_12795[9]);var inst_12784 = (state_12795[2]);var inst_12772 = inst_12775;var state_12795__$1 = (function (){var statearr_12811 = state_12795;(statearr_12811[10] = inst_12784);
(statearr_12811[7] = inst_12772);
return statearr_12811;
})();var statearr_12812_12830 = state_12795__$1;(statearr_12812_12830[2] = null);
(statearr_12812_12830[1] = 2);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_12816 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12816[0] = state_machine__5510__auto__);
(statearr_12816[1] = 1);
return statearr_12816;
});
var state_machine__5510__auto____1 = (function (state_12795){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_12795);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12817){if((e12817 instanceof Object))
{var ex__5513__auto__ = e12817;var statearr_12818_12831 = state_12795;(statearr_12818_12831[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12795);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__12832 = state_12795;
state_12795 = G__12832;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12795){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12819 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_12819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12820);
return statearr_12819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___12967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12937){var state_val_12938 = (state_12937[1]);if((state_val_12938 === 1))
{var inst_12900 = (new Array(n));var inst_12901 = inst_12900;var inst_12902 = 0;var state_12937__$1 = (function (){var statearr_12939 = state_12937;(statearr_12939[7] = inst_12902);
(statearr_12939[8] = inst_12901);
return statearr_12939;
})();var statearr_12940_12968 = state_12937__$1;(statearr_12940_12968[2] = null);
(statearr_12940_12968[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12938 === 2))
{var state_12937__$1 = state_12937;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12937__$1,4,ch);
} else
{if((state_val_12938 === 3))
{var inst_12935 = (state_12937[2]);var state_12937__$1 = state_12937;return cljs.core.async.impl.ioc_helpers.return_chan(state_12937__$1,inst_12935);
} else
{if((state_val_12938 === 4))
{var inst_12905 = (state_12937[9]);var inst_12905__$1 = (state_12937[2]);var inst_12906 = (inst_12905__$1 == null);var inst_12907 = cljs.core.not(inst_12906);var state_12937__$1 = (function (){var statearr_12941 = state_12937;(statearr_12941[9] = inst_12905__$1);
return statearr_12941;
})();if(inst_12907)
{var statearr_12942_12969 = state_12937__$1;(statearr_12942_12969[1] = 5);
} else
{var statearr_12943_12970 = state_12937__$1;(statearr_12943_12970[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12938 === 5))
{var inst_12902 = (state_12937[7]);var inst_12901 = (state_12937[8]);var inst_12905 = (state_12937[9]);var inst_12910 = (state_12937[10]);var inst_12909 = (inst_12901[inst_12902] = inst_12905);var inst_12910__$1 = (inst_12902 + 1);var inst_12911 = (inst_12910__$1 < n);var state_12937__$1 = (function (){var statearr_12944 = state_12937;(statearr_12944[11] = inst_12909);
(statearr_12944[10] = inst_12910__$1);
return statearr_12944;
})();if(cljs.core.truth_(inst_12911))
{var statearr_12945_12971 = state_12937__$1;(statearr_12945_12971[1] = 8);
} else
{var statearr_12946_12972 = state_12937__$1;(statearr_12946_12972[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12938 === 6))
{var inst_12902 = (state_12937[7]);var inst_12923 = (inst_12902 > 0);var state_12937__$1 = state_12937;if(cljs.core.truth_(inst_12923))
{var statearr_12948_12973 = state_12937__$1;(statearr_12948_12973[1] = 12);
} else
{var statearr_12949_12974 = state_12937__$1;(statearr_12949_12974[1] = 13);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12938 === 7))
{var inst_12933 = (state_12937[2]);var state_12937__$1 = state_12937;var statearr_12950_12975 = state_12937__$1;(statearr_12950_12975[2] = inst_12933);
(statearr_12950_12975[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12938 === 8))
{var inst_12901 = (state_12937[8]);var inst_12910 = (state_12937[10]);var tmp12947 = inst_12901;var inst_12901__$1 = tmp12947;var inst_12902 = inst_12910;var state_12937__$1 = (function (){var statearr_12951 = state_12937;(statearr_12951[7] = inst_12902);
(statearr_12951[8] = inst_12901__$1);
return statearr_12951;
})();var statearr_12952_12976 = state_12937__$1;(statearr_12952_12976[2] = null);
(statearr_12952_12976[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12938 === 9))
{var inst_12901 = (state_12937[8]);var inst_12915 = cljs.core.vec(inst_12901);var state_12937__$1 = state_12937;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12937__$1,11,out,inst_12915);
} else
{if((state_val_12938 === 10))
{var inst_12921 = (state_12937[2]);var state_12937__$1 = state_12937;var statearr_12953_12977 = state_12937__$1;(statearr_12953_12977[2] = inst_12921);
(statearr_12953_12977[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12938 === 11))
{var inst_12917 = (state_12937[2]);var inst_12918 = (new Array(n));var inst_12901 = inst_12918;var inst_12902 = 0;var state_12937__$1 = (function (){var statearr_12954 = state_12937;(statearr_12954[12] = inst_12917);
(statearr_12954[7] = inst_12902);
(statearr_12954[8] = inst_12901);
return statearr_12954;
})();var statearr_12955_12978 = state_12937__$1;(statearr_12955_12978[2] = null);
(statearr_12955_12978[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12938 === 12))
{var inst_12901 = (state_12937[8]);var inst_12925 = cljs.core.vec(inst_12901);var state_12937__$1 = state_12937;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12937__$1,15,out,inst_12925);
} else
{if((state_val_12938 === 13))
{var state_12937__$1 = state_12937;var statearr_12956_12979 = state_12937__$1;(statearr_12956_12979[2] = null);
(statearr_12956_12979[1] = 14);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12938 === 14))
{var inst_12930 = (state_12937[2]);var inst_12931 = cljs.core.async.close_BANG_(out);var state_12937__$1 = (function (){var statearr_12957 = state_12937;(statearr_12957[13] = inst_12930);
return statearr_12957;
})();var statearr_12958_12980 = state_12937__$1;(statearr_12958_12980[2] = inst_12931);
(statearr_12958_12980[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12938 === 15))
{var inst_12927 = (state_12937[2]);var state_12937__$1 = state_12937;var statearr_12959_12981 = state_12937__$1;(statearr_12959_12981[2] = inst_12927);
(statearr_12959_12981[1] = 14);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_12963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12963[0] = state_machine__5510__auto__);
(statearr_12963[1] = 1);
return statearr_12963;
});
var state_machine__5510__auto____1 = (function (state_12937){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_12937);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12964){if((e12964 instanceof Object))
{var ex__5513__auto__ = e12964;var statearr_12965_12982 = state_12937;(statearr_12965_12982[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12937);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__12983 = state_12937;
state_12937 = G__12983;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12937){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12966 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_12966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12967);
return statearr_12966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___13126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13096){var state_val_13097 = (state_13096[1]);if((state_val_13097 === 1))
{var inst_13055 = [];var inst_13056 = inst_13055;var inst_13057 = cljs.core.constant$keyword$31;var state_13096__$1 = (function (){var statearr_13098 = state_13096;(statearr_13098[7] = inst_13056);
(statearr_13098[8] = inst_13057);
return statearr_13098;
})();var statearr_13099_13127 = state_13096__$1;(statearr_13099_13127[2] = null);
(statearr_13099_13127[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13097 === 2))
{var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13096__$1,4,ch);
} else
{if((state_val_13097 === 3))
{var inst_13094 = (state_13096[2]);var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.return_chan(state_13096__$1,inst_13094);
} else
{if((state_val_13097 === 4))
{var inst_13060 = (state_13096[9]);var inst_13060__$1 = (state_13096[2]);var inst_13061 = (inst_13060__$1 == null);var inst_13062 = cljs.core.not(inst_13061);var state_13096__$1 = (function (){var statearr_13100 = state_13096;(statearr_13100[9] = inst_13060__$1);
return statearr_13100;
})();if(inst_13062)
{var statearr_13101_13128 = state_13096__$1;(statearr_13101_13128[1] = 5);
} else
{var statearr_13102_13129 = state_13096__$1;(statearr_13102_13129[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13097 === 5))
{var inst_13060 = (state_13096[9]);var inst_13057 = (state_13096[8]);var inst_13064 = (state_13096[10]);var inst_13064__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13060) : f.call(null,inst_13060));var inst_13065 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13064__$1,inst_13057);var inst_13066 = cljs.core.keyword_identical_QMARK_(inst_13057,cljs.core.constant$keyword$31);var inst_13067 = (inst_13065) || (inst_13066);var state_13096__$1 = (function (){var statearr_13103 = state_13096;(statearr_13103[10] = inst_13064__$1);
return statearr_13103;
})();if(cljs.core.truth_(inst_13067))
{var statearr_13104_13130 = state_13096__$1;(statearr_13104_13130[1] = 8);
} else
{var statearr_13105_13131 = state_13096__$1;(statearr_13105_13131[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13097 === 6))
{var inst_13056 = (state_13096[7]);var inst_13081 = inst_13056.length;var inst_13082 = (inst_13081 > 0);var state_13096__$1 = state_13096;if(cljs.core.truth_(inst_13082))
{var statearr_13107_13132 = state_13096__$1;(statearr_13107_13132[1] = 12);
} else
{var statearr_13108_13133 = state_13096__$1;(statearr_13108_13133[1] = 13);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13097 === 7))
{var inst_13092 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13109_13134 = state_13096__$1;(statearr_13109_13134[2] = inst_13092);
(statearr_13109_13134[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13097 === 8))
{var inst_13060 = (state_13096[9]);var inst_13056 = (state_13096[7]);var inst_13064 = (state_13096[10]);var inst_13069 = inst_13056.push(inst_13060);var tmp13106 = inst_13056;var inst_13056__$1 = tmp13106;var inst_13057 = inst_13064;var state_13096__$1 = (function (){var statearr_13110 = state_13096;(statearr_13110[7] = inst_13056__$1);
(statearr_13110[8] = inst_13057);
(statearr_13110[11] = inst_13069);
return statearr_13110;
})();var statearr_13111_13135 = state_13096__$1;(statearr_13111_13135[2] = null);
(statearr_13111_13135[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13097 === 9))
{var inst_13056 = (state_13096[7]);var inst_13072 = cljs.core.vec(inst_13056);var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13096__$1,11,out,inst_13072);
} else
{if((state_val_13097 === 10))
{var inst_13079 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13112_13136 = state_13096__$1;(statearr_13112_13136[2] = inst_13079);
(statearr_13112_13136[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13097 === 11))
{var inst_13060 = (state_13096[9]);var inst_13064 = (state_13096[10]);var inst_13074 = (state_13096[2]);var inst_13075 = [];var inst_13076 = inst_13075.push(inst_13060);var inst_13056 = inst_13075;var inst_13057 = inst_13064;var state_13096__$1 = (function (){var statearr_13113 = state_13096;(statearr_13113[12] = inst_13076);
(statearr_13113[13] = inst_13074);
(statearr_13113[7] = inst_13056);
(statearr_13113[8] = inst_13057);
return statearr_13113;
})();var statearr_13114_13137 = state_13096__$1;(statearr_13114_13137[2] = null);
(statearr_13114_13137[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13097 === 12))
{var inst_13056 = (state_13096[7]);var inst_13084 = cljs.core.vec(inst_13056);var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13096__$1,15,out,inst_13084);
} else
{if((state_val_13097 === 13))
{var state_13096__$1 = state_13096;var statearr_13115_13138 = state_13096__$1;(statearr_13115_13138[2] = null);
(statearr_13115_13138[1] = 14);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13097 === 14))
{var inst_13089 = (state_13096[2]);var inst_13090 = cljs.core.async.close_BANG_(out);var state_13096__$1 = (function (){var statearr_13116 = state_13096;(statearr_13116[14] = inst_13089);
return statearr_13116;
})();var statearr_13117_13139 = state_13096__$1;(statearr_13117_13139[2] = inst_13090);
(statearr_13117_13139[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13097 === 15))
{var inst_13086 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13118_13140 = state_13096__$1;(statearr_13118_13140[2] = inst_13086);
(statearr_13118_13140[1] = 14);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_13122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13122[0] = state_machine__5510__auto__);
(statearr_13122[1] = 1);
return statearr_13122;
});
var state_machine__5510__auto____1 = (function (state_13096){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_13096);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13123){if((e13123 instanceof Object))
{var ex__5513__auto__ = e13123;var statearr_13124_13141 = state_13096;(statearr_13124_13141[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13096);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e13123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__13142 = state_13096;
state_13096 = G__13142;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13096){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13125 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_13125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___13126);
return statearr_13125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

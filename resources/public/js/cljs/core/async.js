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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t8850 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8850 = (function (f,fn_handler,meta8851){
this.f = f;
this.fn_handler = fn_handler;
this.meta8851 = meta8851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8850.cljs$lang$type = true;
cljs.core.async.t8850.cljs$lang$ctorStr = "cljs.core.async/t8850";
cljs.core.async.t8850.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"cljs.core.async/t8850");
});
cljs.core.async.t8850.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t8850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t8850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8852){var self__ = this;
var _8852__$1 = this;return self__.meta8851;
});
cljs.core.async.t8850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8852,meta8851__$1){var self__ = this;
var _8852__$1 = this;return (new cljs.core.async.t8850(self__.f,self__.fn_handler,meta8851__$1));
});
cljs.core.async.__GT_t8850 = (function __GT_t8850(f__$1,fn_handler__$1,meta8851){return (new cljs.core.async.t8850(f__$1,fn_handler__$1,meta8851));
});
}
return (new cljs.core.async.t8850(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__8854 = buff;if(G__8854)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3409__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return G__8854.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__8854.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8854);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8854);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_8855 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_8855);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_8855);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3397__auto__ = ret;if(cljs.core.truth_(and__3397__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3397__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___8856 = n;var x_8857 = 0;while(true){
if((x_8857 < n__4251__auto___8856))
{(a[x_8857] = 0);
{
var G__8858 = (x_8857 + 1);
x_8857 = G__8858;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__8859 = (i + 1);
i = G__8859;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t8863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8863 = (function (flag,alt_flag,meta8864){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta8864 = meta8864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8863.cljs$lang$type = true;
cljs.core.async.t8863.cljs$lang$ctorStr = "cljs.core.async/t8863";
cljs.core.async.t8863.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"cljs.core.async/t8863");
});
cljs.core.async.t8863.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t8863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t8863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8865){var self__ = this;
var _8865__$1 = this;return self__.meta8864;
});
cljs.core.async.t8863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8865,meta8864__$1){var self__ = this;
var _8865__$1 = this;return (new cljs.core.async.t8863(self__.flag,self__.alt_flag,meta8864__$1));
});
cljs.core.async.__GT_t8863 = (function __GT_t8863(flag__$1,alt_flag__$1,meta8864){return (new cljs.core.async.t8863(flag__$1,alt_flag__$1,meta8864));
});
}
return (new cljs.core.async.t8863(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t8869 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8869 = (function (cb,flag,alt_handler,meta8870){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta8870 = meta8870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8869.cljs$lang$type = true;
cljs.core.async.t8869.cljs$lang$ctorStr = "cljs.core.async/t8869";
cljs.core.async.t8869.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"cljs.core.async/t8869");
});
cljs.core.async.t8869.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t8869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t8869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8871){var self__ = this;
var _8871__$1 = this;return self__.meta8870;
});
cljs.core.async.t8869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8871,meta8870__$1){var self__ = this;
var _8871__$1 = this;return (new cljs.core.async.t8869(self__.cb,self__.flag,self__.alt_handler,meta8870__$1));
});
cljs.core.async.__GT_t8869 = (function __GT_t8869(cb__$1,flag__$1,alt_handler__$1,meta8870){return (new cljs.core.async.t8869(cb__$1,flag__$1,alt_handler__$1,meta8870));
});
}
return (new cljs.core.async.t8869(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8872_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8872_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3409__auto__ = wport;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__8873 = (i + 1);
i = G__8873;
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
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3397__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3397__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3397__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__8874){var map__8876 = p__8874;var map__8876__$1 = ((cljs.core.seq_QMARK_.call(null,map__8876))?cljs.core.apply.call(null,cljs.core.hash_map,map__8876):map__8876);var opts = map__8876__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__8874 = null;if (arguments.length > 1) {
  p__8874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__8874);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__8877){
var ports = cljs.core.first(arglist__8877);
var p__8874 = cljs.core.rest(arglist__8877);
return alts_BANG___delegate(ports,p__8874);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t8885 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8885 = (function (ch,f,map_LT_,meta8886){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8886 = meta8886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8885.cljs$lang$type = true;
cljs.core.async.t8885.cljs$lang$ctorStr = "cljs.core.async/t8885";
cljs.core.async.t8885.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"cljs.core.async/t8885");
});
cljs.core.async.t8885.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t8885.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t8888 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8888 = (function (fn1,_,meta8886,ch,f,map_LT_,meta8889){
this.fn1 = fn1;
this._ = _;
this.meta8886 = meta8886;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8889 = meta8889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8888.cljs$lang$type = true;
cljs.core.async.t8888.cljs$lang$ctorStr = "cljs.core.async/t8888";
cljs.core.async.t8888.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"cljs.core.async/t8888");
});
cljs.core.async.t8888.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t8888.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t8888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__8878_SHARP_){return f1.call(null,(((p1__8878_SHARP_ == null))?null:self__.f.call(null,p1__8878_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t8888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8890){var self__ = this;
var _8890__$1 = this;return self__.meta8889;
});
cljs.core.async.t8888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8890,meta8889__$1){var self__ = this;
var _8890__$1 = this;return (new cljs.core.async.t8888(self__.fn1,self__._,self__.meta8886,self__.ch,self__.f,self__.map_LT_,meta8889__$1));
});
cljs.core.async.__GT_t8888 = (function __GT_t8888(fn1__$1,___$2,meta8886__$1,ch__$2,f__$2,map_LT___$2,meta8889){return (new cljs.core.async.t8888(fn1__$1,___$2,meta8886__$1,ch__$2,f__$2,map_LT___$2,meta8889));
});
}
return (new cljs.core.async.t8888(fn1,___$1,self__.meta8886,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3397__auto__ = ret;if(cljs.core.truth_(and__3397__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3397__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t8885.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8887){var self__ = this;
var _8887__$1 = this;return self__.meta8886;
});
cljs.core.async.t8885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8887,meta8886__$1){var self__ = this;
var _8887__$1 = this;return (new cljs.core.async.t8885(self__.ch,self__.f,self__.map_LT_,meta8886__$1));
});
cljs.core.async.__GT_t8885 = (function __GT_t8885(ch__$1,f__$1,map_LT___$1,meta8886){return (new cljs.core.async.t8885(ch__$1,f__$1,map_LT___$1,meta8886));
});
}
return (new cljs.core.async.t8885(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t8894 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8894 = (function (ch,f,map_GT_,meta8895){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta8895 = meta8895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8894.cljs$lang$type = true;
cljs.core.async.t8894.cljs$lang$ctorStr = "cljs.core.async/t8894";
cljs.core.async.t8894.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"cljs.core.async/t8894");
});
cljs.core.async.t8894.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8894.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t8894.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8894.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8894.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8894.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8896){var self__ = this;
var _8896__$1 = this;return self__.meta8895;
});
cljs.core.async.t8894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8896,meta8895__$1){var self__ = this;
var _8896__$1 = this;return (new cljs.core.async.t8894(self__.ch,self__.f,self__.map_GT_,meta8895__$1));
});
cljs.core.async.__GT_t8894 = (function __GT_t8894(ch__$1,f__$1,map_GT___$1,meta8895){return (new cljs.core.async.t8894(ch__$1,f__$1,map_GT___$1,meta8895));
});
}
return (new cljs.core.async.t8894(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t8900 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8900 = (function (ch,p,filter_GT_,meta8901){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta8901 = meta8901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8900.cljs$lang$type = true;
cljs.core.async.t8900.cljs$lang$ctorStr = "cljs.core.async/t8900";
cljs.core.async.t8900.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"cljs.core.async/t8900");
});
cljs.core.async.t8900.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t8900.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8900.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8902){var self__ = this;
var _8902__$1 = this;return self__.meta8901;
});
cljs.core.async.t8900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8902,meta8901__$1){var self__ = this;
var _8902__$1 = this;return (new cljs.core.async.t8900(self__.ch,self__.p,self__.filter_GT_,meta8901__$1));
});
cljs.core.async.__GT_t8900 = (function __GT_t8900(ch__$1,p__$1,filter_GT___$1,meta8901){return (new cljs.core.async.t8900(ch__$1,p__$1,filter_GT___$1,meta8901));
});
}
return (new cljs.core.async.t8900(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___8985 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_8964){var state_val_8965 = (state_8964[1]);if((state_val_8965 === 1))
{var state_8964__$1 = state_8964;var statearr_8966_8986 = state_8964__$1;(statearr_8966_8986[2] = null);
(statearr_8966_8986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8965 === 2))
{var state_8964__$1 = state_8964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8964__$1,4,ch);
} else
{if((state_val_8965 === 3))
{var inst_8962 = (state_8964[2]);var state_8964__$1 = state_8964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8964__$1,inst_8962);
} else
{if((state_val_8965 === 4))
{var inst_8946 = (state_8964[7]);var inst_8946__$1 = (state_8964[2]);var inst_8947 = (inst_8946__$1 == null);var state_8964__$1 = (function (){var statearr_8967 = state_8964;(statearr_8967[7] = inst_8946__$1);
return statearr_8967;
})();if(cljs.core.truth_(inst_8947))
{var statearr_8968_8987 = state_8964__$1;(statearr_8968_8987[1] = 5);
} else
{var statearr_8969_8988 = state_8964__$1;(statearr_8969_8988[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8965 === 5))
{var inst_8949 = cljs.core.async.close_BANG_.call(null,out);var state_8964__$1 = state_8964;var statearr_8970_8989 = state_8964__$1;(statearr_8970_8989[2] = inst_8949);
(statearr_8970_8989[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8965 === 6))
{var inst_8946 = (state_8964[7]);var inst_8951 = p.call(null,inst_8946);var state_8964__$1 = state_8964;if(cljs.core.truth_(inst_8951))
{var statearr_8971_8990 = state_8964__$1;(statearr_8971_8990[1] = 8);
} else
{var statearr_8972_8991 = state_8964__$1;(statearr_8972_8991[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8965 === 7))
{var inst_8960 = (state_8964[2]);var state_8964__$1 = state_8964;var statearr_8973_8992 = state_8964__$1;(statearr_8973_8992[2] = inst_8960);
(statearr_8973_8992[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8965 === 8))
{var inst_8946 = (state_8964[7]);var state_8964__$1 = state_8964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8964__$1,11,out,inst_8946);
} else
{if((state_val_8965 === 9))
{var state_8964__$1 = state_8964;var statearr_8974_8993 = state_8964__$1;(statearr_8974_8993[2] = null);
(statearr_8974_8993[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8965 === 10))
{var inst_8957 = (state_8964[2]);var state_8964__$1 = (function (){var statearr_8975 = state_8964;(statearr_8975[8] = inst_8957);
return statearr_8975;
})();var statearr_8976_8994 = state_8964__$1;(statearr_8976_8994[2] = null);
(statearr_8976_8994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8965 === 11))
{var inst_8954 = (state_8964[2]);var state_8964__$1 = state_8964;var statearr_8977_8995 = state_8964__$1;(statearr_8977_8995[2] = inst_8954);
(statearr_8977_8995[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_8981 = [null,null,null,null,null,null,null,null,null];(statearr_8981[0] = state_machine__5510__auto__);
(statearr_8981[1] = 1);
return statearr_8981;
});
var state_machine__5510__auto____1 = (function (state_8964){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_8964);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e8982){if((e8982 instanceof Object))
{var ex__5513__auto__ = e8982;var statearr_8983_8996 = state_8964;(statearr_8983_8996[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8964);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8997 = state_8964;
state_8964 = G__8997;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_8964){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_8964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_8984 = f__5525__auto__.call(null);(statearr_8984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___8985);
return statearr_8984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_9149){var state_val_9150 = (state_9149[1]);if((state_val_9150 === 1))
{var state_9149__$1 = state_9149;var statearr_9151_9188 = state_9149__$1;(statearr_9151_9188[2] = null);
(statearr_9151_9188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 2))
{var state_9149__$1 = state_9149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9149__$1,4,in$);
} else
{if((state_val_9150 === 3))
{var inst_9147 = (state_9149[2]);var state_9149__$1 = state_9149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9149__$1,inst_9147);
} else
{if((state_val_9150 === 4))
{var inst_9095 = (state_9149[7]);var inst_9095__$1 = (state_9149[2]);var inst_9096 = (inst_9095__$1 == null);var state_9149__$1 = (function (){var statearr_9152 = state_9149;(statearr_9152[7] = inst_9095__$1);
return statearr_9152;
})();if(cljs.core.truth_(inst_9096))
{var statearr_9153_9189 = state_9149__$1;(statearr_9153_9189[1] = 5);
} else
{var statearr_9154_9190 = state_9149__$1;(statearr_9154_9190[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 5))
{var inst_9098 = cljs.core.async.close_BANG_.call(null,out);var state_9149__$1 = state_9149;var statearr_9155_9191 = state_9149__$1;(statearr_9155_9191[2] = inst_9098);
(statearr_9155_9191[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 6))
{var inst_9095 = (state_9149[7]);var inst_9100 = f.call(null,inst_9095);var inst_9105 = cljs.core.seq.call(null,inst_9100);var inst_9106 = inst_9105;var inst_9107 = null;var inst_9108 = 0;var inst_9109 = 0;var state_9149__$1 = (function (){var statearr_9156 = state_9149;(statearr_9156[8] = inst_9106);
(statearr_9156[9] = inst_9109);
(statearr_9156[10] = inst_9108);
(statearr_9156[11] = inst_9107);
return statearr_9156;
})();var statearr_9157_9192 = state_9149__$1;(statearr_9157_9192[2] = null);
(statearr_9157_9192[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 7))
{var inst_9145 = (state_9149[2]);var state_9149__$1 = state_9149;var statearr_9158_9193 = state_9149__$1;(statearr_9158_9193[2] = inst_9145);
(statearr_9158_9193[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 8))
{var inst_9109 = (state_9149[9]);var inst_9108 = (state_9149[10]);var inst_9111 = (inst_9109 < inst_9108);var inst_9112 = inst_9111;var state_9149__$1 = state_9149;if(cljs.core.truth_(inst_9112))
{var statearr_9159_9194 = state_9149__$1;(statearr_9159_9194[1] = 10);
} else
{var statearr_9160_9195 = state_9149__$1;(statearr_9160_9195[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 9))
{var inst_9142 = (state_9149[2]);var state_9149__$1 = (function (){var statearr_9161 = state_9149;(statearr_9161[12] = inst_9142);
return statearr_9161;
})();var statearr_9162_9196 = state_9149__$1;(statearr_9162_9196[2] = null);
(statearr_9162_9196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 10))
{var inst_9109 = (state_9149[9]);var inst_9107 = (state_9149[11]);var inst_9114 = cljs.core._nth.call(null,inst_9107,inst_9109);var state_9149__$1 = state_9149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9149__$1,13,out,inst_9114);
} else
{if((state_val_9150 === 11))
{var inst_9106 = (state_9149[8]);var inst_9120 = (state_9149[13]);var inst_9120__$1 = cljs.core.seq.call(null,inst_9106);var state_9149__$1 = (function (){var statearr_9166 = state_9149;(statearr_9166[13] = inst_9120__$1);
return statearr_9166;
})();if(inst_9120__$1)
{var statearr_9167_9197 = state_9149__$1;(statearr_9167_9197[1] = 14);
} else
{var statearr_9168_9198 = state_9149__$1;(statearr_9168_9198[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 12))
{var inst_9140 = (state_9149[2]);var state_9149__$1 = state_9149;var statearr_9169_9199 = state_9149__$1;(statearr_9169_9199[2] = inst_9140);
(statearr_9169_9199[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 13))
{var inst_9106 = (state_9149[8]);var inst_9109 = (state_9149[9]);var inst_9108 = (state_9149[10]);var inst_9107 = (state_9149[11]);var inst_9116 = (state_9149[2]);var inst_9117 = (inst_9109 + 1);var tmp9163 = inst_9106;var tmp9164 = inst_9108;var tmp9165 = inst_9107;var inst_9106__$1 = tmp9163;var inst_9107__$1 = tmp9165;var inst_9108__$1 = tmp9164;var inst_9109__$1 = inst_9117;var state_9149__$1 = (function (){var statearr_9170 = state_9149;(statearr_9170[8] = inst_9106__$1);
(statearr_9170[14] = inst_9116);
(statearr_9170[9] = inst_9109__$1);
(statearr_9170[10] = inst_9108__$1);
(statearr_9170[11] = inst_9107__$1);
return statearr_9170;
})();var statearr_9171_9200 = state_9149__$1;(statearr_9171_9200[2] = null);
(statearr_9171_9200[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 14))
{var inst_9120 = (state_9149[13]);var inst_9122 = cljs.core.chunked_seq_QMARK_.call(null,inst_9120);var state_9149__$1 = state_9149;if(inst_9122)
{var statearr_9172_9201 = state_9149__$1;(statearr_9172_9201[1] = 17);
} else
{var statearr_9173_9202 = state_9149__$1;(statearr_9173_9202[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 15))
{var state_9149__$1 = state_9149;var statearr_9174_9203 = state_9149__$1;(statearr_9174_9203[2] = null);
(statearr_9174_9203[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 16))
{var inst_9138 = (state_9149[2]);var state_9149__$1 = state_9149;var statearr_9175_9204 = state_9149__$1;(statearr_9175_9204[2] = inst_9138);
(statearr_9175_9204[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 17))
{var inst_9120 = (state_9149[13]);var inst_9124 = cljs.core.chunk_first.call(null,inst_9120);var inst_9125 = cljs.core.chunk_rest.call(null,inst_9120);var inst_9126 = cljs.core.count.call(null,inst_9124);var inst_9106 = inst_9125;var inst_9107 = inst_9124;var inst_9108 = inst_9126;var inst_9109 = 0;var state_9149__$1 = (function (){var statearr_9176 = state_9149;(statearr_9176[8] = inst_9106);
(statearr_9176[9] = inst_9109);
(statearr_9176[10] = inst_9108);
(statearr_9176[11] = inst_9107);
return statearr_9176;
})();var statearr_9177_9205 = state_9149__$1;(statearr_9177_9205[2] = null);
(statearr_9177_9205[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 18))
{var inst_9120 = (state_9149[13]);var inst_9129 = cljs.core.first.call(null,inst_9120);var state_9149__$1 = state_9149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9149__$1,20,out,inst_9129);
} else
{if((state_val_9150 === 19))
{var inst_9135 = (state_9149[2]);var state_9149__$1 = state_9149;var statearr_9178_9206 = state_9149__$1;(statearr_9178_9206[2] = inst_9135);
(statearr_9178_9206[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9150 === 20))
{var inst_9120 = (state_9149[13]);var inst_9131 = (state_9149[2]);var inst_9132 = cljs.core.next.call(null,inst_9120);var inst_9106 = inst_9132;var inst_9107 = null;var inst_9108 = 0;var inst_9109 = 0;var state_9149__$1 = (function (){var statearr_9179 = state_9149;(statearr_9179[8] = inst_9106);
(statearr_9179[15] = inst_9131);
(statearr_9179[9] = inst_9109);
(statearr_9179[10] = inst_9108);
(statearr_9179[11] = inst_9107);
return statearr_9179;
})();var statearr_9180_9207 = state_9149__$1;(statearr_9180_9207[2] = null);
(statearr_9180_9207[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_9184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9184[0] = state_machine__5510__auto__);
(statearr_9184[1] = 1);
return statearr_9184;
});
var state_machine__5510__auto____1 = (function (state_9149){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_9149);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e9185){if((e9185 instanceof Object))
{var ex__5513__auto__ = e9185;var statearr_9186_9208 = state_9149;(statearr_9186_9208[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9149);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9209 = state_9149;
state_9149 = G__9209;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_9149){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_9149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_9187 = f__5525__auto__.call(null);(statearr_9187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_9187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5524__auto___9290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_9269){var state_val_9270 = (state_9269[1]);if((state_val_9270 === 1))
{var state_9269__$1 = state_9269;var statearr_9271_9291 = state_9269__$1;(statearr_9271_9291[2] = null);
(statearr_9271_9291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9270 === 2))
{var state_9269__$1 = state_9269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9269__$1,4,from);
} else
{if((state_val_9270 === 3))
{var inst_9267 = (state_9269[2]);var state_9269__$1 = state_9269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9269__$1,inst_9267);
} else
{if((state_val_9270 === 4))
{var inst_9252 = (state_9269[7]);var inst_9252__$1 = (state_9269[2]);var inst_9253 = (inst_9252__$1 == null);var state_9269__$1 = (function (){var statearr_9272 = state_9269;(statearr_9272[7] = inst_9252__$1);
return statearr_9272;
})();if(cljs.core.truth_(inst_9253))
{var statearr_9273_9292 = state_9269__$1;(statearr_9273_9292[1] = 5);
} else
{var statearr_9274_9293 = state_9269__$1;(statearr_9274_9293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9270 === 5))
{var state_9269__$1 = state_9269;if(cljs.core.truth_(close_QMARK_))
{var statearr_9275_9294 = state_9269__$1;(statearr_9275_9294[1] = 8);
} else
{var statearr_9276_9295 = state_9269__$1;(statearr_9276_9295[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9270 === 6))
{var inst_9252 = (state_9269[7]);var state_9269__$1 = state_9269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9269__$1,11,to,inst_9252);
} else
{if((state_val_9270 === 7))
{var inst_9265 = (state_9269[2]);var state_9269__$1 = state_9269;var statearr_9277_9296 = state_9269__$1;(statearr_9277_9296[2] = inst_9265);
(statearr_9277_9296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9270 === 8))
{var inst_9256 = cljs.core.async.close_BANG_.call(null,to);var state_9269__$1 = state_9269;var statearr_9278_9297 = state_9269__$1;(statearr_9278_9297[2] = inst_9256);
(statearr_9278_9297[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9270 === 9))
{var state_9269__$1 = state_9269;var statearr_9279_9298 = state_9269__$1;(statearr_9279_9298[2] = null);
(statearr_9279_9298[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9270 === 10))
{var inst_9259 = (state_9269[2]);var state_9269__$1 = state_9269;var statearr_9280_9299 = state_9269__$1;(statearr_9280_9299[2] = inst_9259);
(statearr_9280_9299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9270 === 11))
{var inst_9262 = (state_9269[2]);var state_9269__$1 = (function (){var statearr_9281 = state_9269;(statearr_9281[8] = inst_9262);
return statearr_9281;
})();var statearr_9282_9300 = state_9269__$1;(statearr_9282_9300[2] = null);
(statearr_9282_9300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_9286 = [null,null,null,null,null,null,null,null,null];(statearr_9286[0] = state_machine__5510__auto__);
(statearr_9286[1] = 1);
return statearr_9286;
});
var state_machine__5510__auto____1 = (function (state_9269){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_9269);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e9287){if((e9287 instanceof Object))
{var ex__5513__auto__ = e9287;var statearr_9288_9301 = state_9269;(statearr_9288_9301[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9302 = state_9269;
state_9269 = G__9302;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_9269){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_9269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_9289 = f__5525__auto__.call(null);(statearr_9289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___9290);
return statearr_9289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5524__auto___9389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_9367){var state_val_9368 = (state_9367[1]);if((state_val_9368 === 1))
{var state_9367__$1 = state_9367;var statearr_9369_9390 = state_9367__$1;(statearr_9369_9390[2] = null);
(statearr_9369_9390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9368 === 2))
{var state_9367__$1 = state_9367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9367__$1,4,ch);
} else
{if((state_val_9368 === 3))
{var inst_9365 = (state_9367[2]);var state_9367__$1 = state_9367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9367__$1,inst_9365);
} else
{if((state_val_9368 === 4))
{var inst_9348 = (state_9367[7]);var inst_9348__$1 = (state_9367[2]);var inst_9349 = (inst_9348__$1 == null);var state_9367__$1 = (function (){var statearr_9370 = state_9367;(statearr_9370[7] = inst_9348__$1);
return statearr_9370;
})();if(cljs.core.truth_(inst_9349))
{var statearr_9371_9391 = state_9367__$1;(statearr_9371_9391[1] = 5);
} else
{var statearr_9372_9392 = state_9367__$1;(statearr_9372_9392[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9368 === 5))
{var inst_9351 = cljs.core.async.close_BANG_.call(null,tc);var inst_9352 = cljs.core.async.close_BANG_.call(null,fc);var state_9367__$1 = (function (){var statearr_9373 = state_9367;(statearr_9373[8] = inst_9351);
return statearr_9373;
})();var statearr_9374_9393 = state_9367__$1;(statearr_9374_9393[2] = inst_9352);
(statearr_9374_9393[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9368 === 6))
{var inst_9348 = (state_9367[7]);var inst_9354 = p.call(null,inst_9348);var state_9367__$1 = state_9367;if(cljs.core.truth_(inst_9354))
{var statearr_9375_9394 = state_9367__$1;(statearr_9375_9394[1] = 9);
} else
{var statearr_9376_9395 = state_9367__$1;(statearr_9376_9395[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9368 === 7))
{var inst_9363 = (state_9367[2]);var state_9367__$1 = state_9367;var statearr_9377_9396 = state_9367__$1;(statearr_9377_9396[2] = inst_9363);
(statearr_9377_9396[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9368 === 8))
{var inst_9360 = (state_9367[2]);var state_9367__$1 = (function (){var statearr_9378 = state_9367;(statearr_9378[9] = inst_9360);
return statearr_9378;
})();var statearr_9379_9397 = state_9367__$1;(statearr_9379_9397[2] = null);
(statearr_9379_9397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9368 === 9))
{var state_9367__$1 = state_9367;var statearr_9380_9398 = state_9367__$1;(statearr_9380_9398[2] = tc);
(statearr_9380_9398[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9368 === 10))
{var state_9367__$1 = state_9367;var statearr_9381_9399 = state_9367__$1;(statearr_9381_9399[2] = fc);
(statearr_9381_9399[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9368 === 11))
{var inst_9348 = (state_9367[7]);var inst_9358 = (state_9367[2]);var state_9367__$1 = state_9367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9367__$1,8,inst_9358,inst_9348);
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
var state_machine__5510__auto____0 = (function (){var statearr_9385 = [null,null,null,null,null,null,null,null,null,null];(statearr_9385[0] = state_machine__5510__auto__);
(statearr_9385[1] = 1);
return statearr_9385;
});
var state_machine__5510__auto____1 = (function (state_9367){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_9367);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e9386){if((e9386 instanceof Object))
{var ex__5513__auto__ = e9386;var statearr_9387_9400 = state_9367;(statearr_9387_9400[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9367);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9401 = state_9367;
state_9367 = G__9401;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_9367){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_9367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_9388 = f__5525__auto__.call(null);(statearr_9388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___9389);
return statearr_9388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_9448){var state_val_9449 = (state_9448[1]);if((state_val_9449 === 7))
{var inst_9444 = (state_9448[2]);var state_9448__$1 = state_9448;var statearr_9450_9466 = state_9448__$1;(statearr_9450_9466[2] = inst_9444);
(statearr_9450_9466[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9449 === 6))
{var inst_9437 = (state_9448[7]);var inst_9434 = (state_9448[8]);var inst_9441 = f.call(null,inst_9434,inst_9437);var inst_9434__$1 = inst_9441;var state_9448__$1 = (function (){var statearr_9451 = state_9448;(statearr_9451[8] = inst_9434__$1);
return statearr_9451;
})();var statearr_9452_9467 = state_9448__$1;(statearr_9452_9467[2] = null);
(statearr_9452_9467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9449 === 5))
{var inst_9434 = (state_9448[8]);var state_9448__$1 = state_9448;var statearr_9453_9468 = state_9448__$1;(statearr_9453_9468[2] = inst_9434);
(statearr_9453_9468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9449 === 4))
{var inst_9437 = (state_9448[7]);var inst_9437__$1 = (state_9448[2]);var inst_9438 = (inst_9437__$1 == null);var state_9448__$1 = (function (){var statearr_9454 = state_9448;(statearr_9454[7] = inst_9437__$1);
return statearr_9454;
})();if(cljs.core.truth_(inst_9438))
{var statearr_9455_9469 = state_9448__$1;(statearr_9455_9469[1] = 5);
} else
{var statearr_9456_9470 = state_9448__$1;(statearr_9456_9470[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9449 === 3))
{var inst_9446 = (state_9448[2]);var state_9448__$1 = state_9448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9448__$1,inst_9446);
} else
{if((state_val_9449 === 2))
{var state_9448__$1 = state_9448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9448__$1,4,ch);
} else
{if((state_val_9449 === 1))
{var inst_9434 = init;var state_9448__$1 = (function (){var statearr_9457 = state_9448;(statearr_9457[8] = inst_9434);
return statearr_9457;
})();var statearr_9458_9471 = state_9448__$1;(statearr_9458_9471[2] = null);
(statearr_9458_9471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_9462 = [null,null,null,null,null,null,null,null,null];(statearr_9462[0] = state_machine__5510__auto__);
(statearr_9462[1] = 1);
return statearr_9462;
});
var state_machine__5510__auto____1 = (function (state_9448){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_9448);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e9463){if((e9463 instanceof Object))
{var ex__5513__auto__ = e9463;var statearr_9464_9472 = state_9448;(statearr_9464_9472[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9448);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9473 = state_9448;
state_9448 = G__9473;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_9448){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_9448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_9465 = f__5525__auto__.call(null);(statearr_9465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_9465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_9535){var state_val_9536 = (state_9535[1]);if((state_val_9536 === 1))
{var inst_9515 = cljs.core.seq.call(null,coll);var inst_9516 = inst_9515;var state_9535__$1 = (function (){var statearr_9537 = state_9535;(statearr_9537[7] = inst_9516);
return statearr_9537;
})();var statearr_9538_9556 = state_9535__$1;(statearr_9538_9556[2] = null);
(statearr_9538_9556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9536 === 2))
{var inst_9516 = (state_9535[7]);var state_9535__$1 = state_9535;if(cljs.core.truth_(inst_9516))
{var statearr_9539_9557 = state_9535__$1;(statearr_9539_9557[1] = 4);
} else
{var statearr_9540_9558 = state_9535__$1;(statearr_9540_9558[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9536 === 3))
{var inst_9533 = (state_9535[2]);var state_9535__$1 = state_9535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9535__$1,inst_9533);
} else
{if((state_val_9536 === 4))
{var inst_9516 = (state_9535[7]);var inst_9519 = cljs.core.first.call(null,inst_9516);var state_9535__$1 = state_9535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9535__$1,7,ch,inst_9519);
} else
{if((state_val_9536 === 5))
{var state_9535__$1 = state_9535;if(cljs.core.truth_(close_QMARK_))
{var statearr_9541_9559 = state_9535__$1;(statearr_9541_9559[1] = 8);
} else
{var statearr_9542_9560 = state_9535__$1;(statearr_9542_9560[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9536 === 6))
{var inst_9531 = (state_9535[2]);var state_9535__$1 = state_9535;var statearr_9543_9561 = state_9535__$1;(statearr_9543_9561[2] = inst_9531);
(statearr_9543_9561[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9536 === 7))
{var inst_9516 = (state_9535[7]);var inst_9521 = (state_9535[2]);var inst_9522 = cljs.core.next.call(null,inst_9516);var inst_9516__$1 = inst_9522;var state_9535__$1 = (function (){var statearr_9544 = state_9535;(statearr_9544[7] = inst_9516__$1);
(statearr_9544[8] = inst_9521);
return statearr_9544;
})();var statearr_9545_9562 = state_9535__$1;(statearr_9545_9562[2] = null);
(statearr_9545_9562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9536 === 8))
{var inst_9526 = cljs.core.async.close_BANG_.call(null,ch);var state_9535__$1 = state_9535;var statearr_9546_9563 = state_9535__$1;(statearr_9546_9563[2] = inst_9526);
(statearr_9546_9563[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9536 === 9))
{var state_9535__$1 = state_9535;var statearr_9547_9564 = state_9535__$1;(statearr_9547_9564[2] = null);
(statearr_9547_9564[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9536 === 10))
{var inst_9529 = (state_9535[2]);var state_9535__$1 = state_9535;var statearr_9548_9565 = state_9535__$1;(statearr_9548_9565[2] = inst_9529);
(statearr_9548_9565[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_9552 = [null,null,null,null,null,null,null,null,null];(statearr_9552[0] = state_machine__5510__auto__);
(statearr_9552[1] = 1);
return statearr_9552;
});
var state_machine__5510__auto____1 = (function (state_9535){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_9535);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e9553){if((e9553 instanceof Object))
{var ex__5513__auto__ = e9553;var statearr_9554_9566 = state_9535;(statearr_9554_9566[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9535);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9567 = state_9535;
state_9535 = G__9567;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_9535){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_9535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_9555 = f__5525__auto__.call(null);(statearr_9555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_9555;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj9569 = {};return obj9569;
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
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj9571 = {};return obj9571;
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
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t9795 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9795 = (function (cs,ch,mult,meta9796){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta9796 = meta9796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9795.cljs$lang$type = true;
cljs.core.async.t9795.cljs$lang$ctorStr = "cljs.core.async/t9795";
cljs.core.async.t9795.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"cljs.core.async/t9795");
});})(cs))
;
cljs.core.async.t9795.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t9795.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t9795.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t9795.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t9795.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9795.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t9795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9797){var self__ = this;
var _9797__$1 = this;return self__.meta9796;
});})(cs))
;
cljs.core.async.t9795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9797,meta9796__$1){var self__ = this;
var _9797__$1 = this;return (new cljs.core.async.t9795(self__.cs,self__.ch,self__.mult,meta9796__$1));
});})(cs))
;
cljs.core.async.__GT_t9795 = ((function (cs){
return (function __GT_t9795(cs__$1,ch__$1,mult__$1,meta9796){return (new cljs.core.async.t9795(cs__$1,ch__$1,mult__$1,meta9796));
});})(cs))
;
}
return (new cljs.core.async.t9795(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5524__auto___10018 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_9932){var state_val_9933 = (state_9932[1]);if((state_val_9933 === 32))
{var inst_9876 = (state_9932[7]);var inst_9800 = (state_9932[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9932,31,Object,null,30);var inst_9883 = cljs.core.async.put_BANG_.call(null,inst_9876,inst_9800,done);var state_9932__$1 = state_9932;var statearr_9934_10019 = state_9932__$1;(statearr_9934_10019[2] = inst_9883);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9932__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 1))
{var state_9932__$1 = state_9932;var statearr_9935_10020 = state_9932__$1;(statearr_9935_10020[2] = null);
(statearr_9935_10020[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 33))
{var inst_9889 = (state_9932[9]);var inst_9891 = cljs.core.chunked_seq_QMARK_.call(null,inst_9889);var state_9932__$1 = state_9932;if(inst_9891)
{var statearr_9936_10021 = state_9932__$1;(statearr_9936_10021[1] = 36);
} else
{var statearr_9937_10022 = state_9932__$1;(statearr_9937_10022[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 2))
{var state_9932__$1 = state_9932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9932__$1,4,ch);
} else
{if((state_val_9933 === 34))
{var state_9932__$1 = state_9932;var statearr_9938_10023 = state_9932__$1;(statearr_9938_10023[2] = null);
(statearr_9938_10023[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 3))
{var inst_9930 = (state_9932[2]);var state_9932__$1 = state_9932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9932__$1,inst_9930);
} else
{if((state_val_9933 === 35))
{var inst_9914 = (state_9932[2]);var state_9932__$1 = state_9932;var statearr_9939_10024 = state_9932__$1;(statearr_9939_10024[2] = inst_9914);
(statearr_9939_10024[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 4))
{var inst_9800 = (state_9932[8]);var inst_9800__$1 = (state_9932[2]);var inst_9801 = (inst_9800__$1 == null);var state_9932__$1 = (function (){var statearr_9940 = state_9932;(statearr_9940[8] = inst_9800__$1);
return statearr_9940;
})();if(cljs.core.truth_(inst_9801))
{var statearr_9941_10025 = state_9932__$1;(statearr_9941_10025[1] = 5);
} else
{var statearr_9942_10026 = state_9932__$1;(statearr_9942_10026[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 36))
{var inst_9889 = (state_9932[9]);var inst_9893 = cljs.core.chunk_first.call(null,inst_9889);var inst_9894 = cljs.core.chunk_rest.call(null,inst_9889);var inst_9895 = cljs.core.count.call(null,inst_9893);var inst_9868 = inst_9894;var inst_9869 = inst_9893;var inst_9870 = inst_9895;var inst_9871 = 0;var state_9932__$1 = (function (){var statearr_9943 = state_9932;(statearr_9943[10] = inst_9869);
(statearr_9943[11] = inst_9870);
(statearr_9943[12] = inst_9868);
(statearr_9943[13] = inst_9871);
return statearr_9943;
})();var statearr_9944_10027 = state_9932__$1;(statearr_9944_10027[2] = null);
(statearr_9944_10027[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 5))
{var inst_9807 = cljs.core.deref.call(null,cs);var inst_9808 = cljs.core.seq.call(null,inst_9807);var inst_9809 = inst_9808;var inst_9810 = null;var inst_9811 = 0;var inst_9812 = 0;var state_9932__$1 = (function (){var statearr_9945 = state_9932;(statearr_9945[14] = inst_9809);
(statearr_9945[15] = inst_9812);
(statearr_9945[16] = inst_9811);
(statearr_9945[17] = inst_9810);
return statearr_9945;
})();var statearr_9946_10028 = state_9932__$1;(statearr_9946_10028[2] = null);
(statearr_9946_10028[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 37))
{var inst_9889 = (state_9932[9]);var inst_9898 = cljs.core.first.call(null,inst_9889);var state_9932__$1 = (function (){var statearr_9947 = state_9932;(statearr_9947[18] = inst_9898);
return statearr_9947;
})();var statearr_9948_10029 = state_9932__$1;(statearr_9948_10029[2] = null);
(statearr_9948_10029[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 6))
{var inst_9860 = (state_9932[19]);var inst_9859 = cljs.core.deref.call(null,cs);var inst_9860__$1 = cljs.core.keys.call(null,inst_9859);var inst_9861 = cljs.core.count.call(null,inst_9860__$1);var inst_9862 = cljs.core.reset_BANG_.call(null,dctr,inst_9861);var inst_9867 = cljs.core.seq.call(null,inst_9860__$1);var inst_9868 = inst_9867;var inst_9869 = null;var inst_9870 = 0;var inst_9871 = 0;var state_9932__$1 = (function (){var statearr_9949 = state_9932;(statearr_9949[20] = inst_9862);
(statearr_9949[19] = inst_9860__$1);
(statearr_9949[10] = inst_9869);
(statearr_9949[11] = inst_9870);
(statearr_9949[12] = inst_9868);
(statearr_9949[13] = inst_9871);
return statearr_9949;
})();var statearr_9950_10030 = state_9932__$1;(statearr_9950_10030[2] = null);
(statearr_9950_10030[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 38))
{var inst_9911 = (state_9932[2]);var state_9932__$1 = state_9932;var statearr_9951_10031 = state_9932__$1;(statearr_9951_10031[2] = inst_9911);
(statearr_9951_10031[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 7))
{var inst_9928 = (state_9932[2]);var state_9932__$1 = state_9932;var statearr_9952_10032 = state_9932__$1;(statearr_9952_10032[2] = inst_9928);
(statearr_9952_10032[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 39))
{var inst_9889 = (state_9932[9]);var inst_9907 = (state_9932[2]);var inst_9908 = cljs.core.next.call(null,inst_9889);var inst_9868 = inst_9908;var inst_9869 = null;var inst_9870 = 0;var inst_9871 = 0;var state_9932__$1 = (function (){var statearr_9953 = state_9932;(statearr_9953[10] = inst_9869);
(statearr_9953[11] = inst_9870);
(statearr_9953[12] = inst_9868);
(statearr_9953[13] = inst_9871);
(statearr_9953[21] = inst_9907);
return statearr_9953;
})();var statearr_9954_10033 = state_9932__$1;(statearr_9954_10033[2] = null);
(statearr_9954_10033[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 8))
{var inst_9812 = (state_9932[15]);var inst_9811 = (state_9932[16]);var inst_9814 = (inst_9812 < inst_9811);var inst_9815 = inst_9814;var state_9932__$1 = state_9932;if(cljs.core.truth_(inst_9815))
{var statearr_9955_10034 = state_9932__$1;(statearr_9955_10034[1] = 10);
} else
{var statearr_9956_10035 = state_9932__$1;(statearr_9956_10035[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 40))
{var inst_9898 = (state_9932[18]);var inst_9899 = (state_9932[2]);var inst_9900 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9901 = cljs.core.async.untap_STAR_.call(null,m,inst_9898);var state_9932__$1 = (function (){var statearr_9957 = state_9932;(statearr_9957[22] = inst_9900);
(statearr_9957[23] = inst_9899);
return statearr_9957;
})();var statearr_9958_10036 = state_9932__$1;(statearr_9958_10036[2] = inst_9901);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9932__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 9))
{var inst_9857 = (state_9932[2]);var state_9932__$1 = state_9932;var statearr_9959_10037 = state_9932__$1;(statearr_9959_10037[2] = inst_9857);
(statearr_9959_10037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 41))
{var inst_9898 = (state_9932[18]);var inst_9800 = (state_9932[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9932,40,Object,null,39);var inst_9905 = cljs.core.async.put_BANG_.call(null,inst_9898,inst_9800,done);var state_9932__$1 = state_9932;var statearr_9960_10038 = state_9932__$1;(statearr_9960_10038[2] = inst_9905);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9932__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 10))
{var inst_9812 = (state_9932[15]);var inst_9810 = (state_9932[17]);var inst_9818 = cljs.core._nth.call(null,inst_9810,inst_9812);var inst_9819 = cljs.core.nth.call(null,inst_9818,0,null);var inst_9820 = cljs.core.nth.call(null,inst_9818,1,null);var state_9932__$1 = (function (){var statearr_9961 = state_9932;(statearr_9961[24] = inst_9819);
return statearr_9961;
})();if(cljs.core.truth_(inst_9820))
{var statearr_9962_10039 = state_9932__$1;(statearr_9962_10039[1] = 13);
} else
{var statearr_9963_10040 = state_9932__$1;(statearr_9963_10040[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 42))
{var state_9932__$1 = state_9932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9932__$1,45,dchan);
} else
{if((state_val_9933 === 11))
{var inst_9829 = (state_9932[25]);var inst_9809 = (state_9932[14]);var inst_9829__$1 = cljs.core.seq.call(null,inst_9809);var state_9932__$1 = (function (){var statearr_9964 = state_9932;(statearr_9964[25] = inst_9829__$1);
return statearr_9964;
})();if(inst_9829__$1)
{var statearr_9965_10041 = state_9932__$1;(statearr_9965_10041[1] = 16);
} else
{var statearr_9966_10042 = state_9932__$1;(statearr_9966_10042[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 43))
{var state_9932__$1 = state_9932;var statearr_9967_10043 = state_9932__$1;(statearr_9967_10043[2] = null);
(statearr_9967_10043[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 12))
{var inst_9855 = (state_9932[2]);var state_9932__$1 = state_9932;var statearr_9968_10044 = state_9932__$1;(statearr_9968_10044[2] = inst_9855);
(statearr_9968_10044[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 44))
{var inst_9925 = (state_9932[2]);var state_9932__$1 = (function (){var statearr_9969 = state_9932;(statearr_9969[26] = inst_9925);
return statearr_9969;
})();var statearr_9970_10045 = state_9932__$1;(statearr_9970_10045[2] = null);
(statearr_9970_10045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 13))
{var inst_9819 = (state_9932[24]);var inst_9822 = cljs.core.async.close_BANG_.call(null,inst_9819);var state_9932__$1 = state_9932;var statearr_9971_10046 = state_9932__$1;(statearr_9971_10046[2] = inst_9822);
(statearr_9971_10046[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 45))
{var inst_9922 = (state_9932[2]);var state_9932__$1 = state_9932;var statearr_9975_10047 = state_9932__$1;(statearr_9975_10047[2] = inst_9922);
(statearr_9975_10047[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 14))
{var state_9932__$1 = state_9932;var statearr_9976_10048 = state_9932__$1;(statearr_9976_10048[2] = null);
(statearr_9976_10048[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 15))
{var inst_9809 = (state_9932[14]);var inst_9812 = (state_9932[15]);var inst_9811 = (state_9932[16]);var inst_9810 = (state_9932[17]);var inst_9825 = (state_9932[2]);var inst_9826 = (inst_9812 + 1);var tmp9972 = inst_9809;var tmp9973 = inst_9811;var tmp9974 = inst_9810;var inst_9809__$1 = tmp9972;var inst_9810__$1 = tmp9974;var inst_9811__$1 = tmp9973;var inst_9812__$1 = inst_9826;var state_9932__$1 = (function (){var statearr_9977 = state_9932;(statearr_9977[14] = inst_9809__$1);
(statearr_9977[27] = inst_9825);
(statearr_9977[15] = inst_9812__$1);
(statearr_9977[16] = inst_9811__$1);
(statearr_9977[17] = inst_9810__$1);
return statearr_9977;
})();var statearr_9978_10049 = state_9932__$1;(statearr_9978_10049[2] = null);
(statearr_9978_10049[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 16))
{var inst_9829 = (state_9932[25]);var inst_9831 = cljs.core.chunked_seq_QMARK_.call(null,inst_9829);var state_9932__$1 = state_9932;if(inst_9831)
{var statearr_9979_10050 = state_9932__$1;(statearr_9979_10050[1] = 19);
} else
{var statearr_9980_10051 = state_9932__$1;(statearr_9980_10051[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 17))
{var state_9932__$1 = state_9932;var statearr_9981_10052 = state_9932__$1;(statearr_9981_10052[2] = null);
(statearr_9981_10052[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 18))
{var inst_9853 = (state_9932[2]);var state_9932__$1 = state_9932;var statearr_9982_10053 = state_9932__$1;(statearr_9982_10053[2] = inst_9853);
(statearr_9982_10053[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 19))
{var inst_9829 = (state_9932[25]);var inst_9833 = cljs.core.chunk_first.call(null,inst_9829);var inst_9834 = cljs.core.chunk_rest.call(null,inst_9829);var inst_9835 = cljs.core.count.call(null,inst_9833);var inst_9809 = inst_9834;var inst_9810 = inst_9833;var inst_9811 = inst_9835;var inst_9812 = 0;var state_9932__$1 = (function (){var statearr_9983 = state_9932;(statearr_9983[14] = inst_9809);
(statearr_9983[15] = inst_9812);
(statearr_9983[16] = inst_9811);
(statearr_9983[17] = inst_9810);
return statearr_9983;
})();var statearr_9984_10054 = state_9932__$1;(statearr_9984_10054[2] = null);
(statearr_9984_10054[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 20))
{var inst_9829 = (state_9932[25]);var inst_9839 = cljs.core.first.call(null,inst_9829);var inst_9840 = cljs.core.nth.call(null,inst_9839,0,null);var inst_9841 = cljs.core.nth.call(null,inst_9839,1,null);var state_9932__$1 = (function (){var statearr_9985 = state_9932;(statearr_9985[28] = inst_9840);
return statearr_9985;
})();if(cljs.core.truth_(inst_9841))
{var statearr_9986_10055 = state_9932__$1;(statearr_9986_10055[1] = 22);
} else
{var statearr_9987_10056 = state_9932__$1;(statearr_9987_10056[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 21))
{var inst_9850 = (state_9932[2]);var state_9932__$1 = state_9932;var statearr_9988_10057 = state_9932__$1;(statearr_9988_10057[2] = inst_9850);
(statearr_9988_10057[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 22))
{var inst_9840 = (state_9932[28]);var inst_9843 = cljs.core.async.close_BANG_.call(null,inst_9840);var state_9932__$1 = state_9932;var statearr_9989_10058 = state_9932__$1;(statearr_9989_10058[2] = inst_9843);
(statearr_9989_10058[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 23))
{var state_9932__$1 = state_9932;var statearr_9990_10059 = state_9932__$1;(statearr_9990_10059[2] = null);
(statearr_9990_10059[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 24))
{var inst_9829 = (state_9932[25]);var inst_9846 = (state_9932[2]);var inst_9847 = cljs.core.next.call(null,inst_9829);var inst_9809 = inst_9847;var inst_9810 = null;var inst_9811 = 0;var inst_9812 = 0;var state_9932__$1 = (function (){var statearr_9991 = state_9932;(statearr_9991[14] = inst_9809);
(statearr_9991[15] = inst_9812);
(statearr_9991[16] = inst_9811);
(statearr_9991[17] = inst_9810);
(statearr_9991[29] = inst_9846);
return statearr_9991;
})();var statearr_9992_10060 = state_9932__$1;(statearr_9992_10060[2] = null);
(statearr_9992_10060[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 25))
{var inst_9870 = (state_9932[11]);var inst_9871 = (state_9932[13]);var inst_9873 = (inst_9871 < inst_9870);var inst_9874 = inst_9873;var state_9932__$1 = state_9932;if(cljs.core.truth_(inst_9874))
{var statearr_9993_10061 = state_9932__$1;(statearr_9993_10061[1] = 27);
} else
{var statearr_9994_10062 = state_9932__$1;(statearr_9994_10062[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 26))
{var inst_9860 = (state_9932[19]);var inst_9918 = (state_9932[2]);var inst_9919 = cljs.core.seq.call(null,inst_9860);var state_9932__$1 = (function (){var statearr_9995 = state_9932;(statearr_9995[30] = inst_9918);
return statearr_9995;
})();if(inst_9919)
{var statearr_9996_10063 = state_9932__$1;(statearr_9996_10063[1] = 42);
} else
{var statearr_9997_10064 = state_9932__$1;(statearr_9997_10064[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 27))
{var inst_9869 = (state_9932[10]);var inst_9871 = (state_9932[13]);var inst_9876 = cljs.core._nth.call(null,inst_9869,inst_9871);var state_9932__$1 = (function (){var statearr_9998 = state_9932;(statearr_9998[7] = inst_9876);
return statearr_9998;
})();var statearr_9999_10065 = state_9932__$1;(statearr_9999_10065[2] = null);
(statearr_9999_10065[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 28))
{var inst_9868 = (state_9932[12]);var inst_9889 = (state_9932[9]);var inst_9889__$1 = cljs.core.seq.call(null,inst_9868);var state_9932__$1 = (function (){var statearr_10003 = state_9932;(statearr_10003[9] = inst_9889__$1);
return statearr_10003;
})();if(inst_9889__$1)
{var statearr_10004_10066 = state_9932__$1;(statearr_10004_10066[1] = 33);
} else
{var statearr_10005_10067 = state_9932__$1;(statearr_10005_10067[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 29))
{var inst_9916 = (state_9932[2]);var state_9932__$1 = state_9932;var statearr_10006_10068 = state_9932__$1;(statearr_10006_10068[2] = inst_9916);
(statearr_10006_10068[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 30))
{var inst_9869 = (state_9932[10]);var inst_9870 = (state_9932[11]);var inst_9868 = (state_9932[12]);var inst_9871 = (state_9932[13]);var inst_9885 = (state_9932[2]);var inst_9886 = (inst_9871 + 1);var tmp10000 = inst_9869;var tmp10001 = inst_9870;var tmp10002 = inst_9868;var inst_9868__$1 = tmp10002;var inst_9869__$1 = tmp10000;var inst_9870__$1 = tmp10001;var inst_9871__$1 = inst_9886;var state_9932__$1 = (function (){var statearr_10007 = state_9932;(statearr_10007[10] = inst_9869__$1);
(statearr_10007[11] = inst_9870__$1);
(statearr_10007[12] = inst_9868__$1);
(statearr_10007[13] = inst_9871__$1);
(statearr_10007[31] = inst_9885);
return statearr_10007;
})();var statearr_10008_10069 = state_9932__$1;(statearr_10008_10069[2] = null);
(statearr_10008_10069[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9933 === 31))
{var inst_9876 = (state_9932[7]);var inst_9877 = (state_9932[2]);var inst_9878 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9879 = cljs.core.async.untap_STAR_.call(null,m,inst_9876);var state_9932__$1 = (function (){var statearr_10009 = state_9932;(statearr_10009[32] = inst_9878);
(statearr_10009[33] = inst_9877);
return statearr_10009;
})();var statearr_10010_10070 = state_9932__$1;(statearr_10010_10070[2] = inst_9879);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9932__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_10014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10014[0] = state_machine__5510__auto__);
(statearr_10014[1] = 1);
return statearr_10014;
});
var state_machine__5510__auto____1 = (function (state_9932){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_9932);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10015){if((e10015 instanceof Object))
{var ex__5513__auto__ = e10015;var statearr_10016_10071 = state_9932;(statearr_10016_10071[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10072 = state_9932;
state_9932 = G__10072;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_9932){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_9932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10017 = f__5525__auto__.call(null);(statearr_10017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___10018);
return statearr_10017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10074 = {};return obj10074;
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
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10184 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10184 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10185){
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
this.meta10185 = meta10185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10184.cljs$lang$type = true;
cljs.core.async.t10184.cljs$lang$ctorStr = "cljs.core.async/t10184";
cljs.core.async.t10184.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"cljs.core.async/t10184");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10184.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10184.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10184.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10184.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10184.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10184.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10184.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10186){var self__ = this;
var _10186__$1 = this;return self__.meta10185;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10186,meta10185__$1){var self__ = this;
var _10186__$1 = this;return (new cljs.core.async.t10184(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10185__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10184 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10184(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10185){return (new cljs.core.async.t10184(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10185));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10184(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5524__auto___10293 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10251){var state_val_10252 = (state_10251[1]);if((state_val_10252 === 1))
{var inst_10190 = (state_10251[7]);var inst_10190__$1 = calc_state.call(null);var inst_10191 = cljs.core.seq_QMARK_.call(null,inst_10190__$1);var state_10251__$1 = (function (){var statearr_10253 = state_10251;(statearr_10253[7] = inst_10190__$1);
return statearr_10253;
})();if(inst_10191)
{var statearr_10254_10294 = state_10251__$1;(statearr_10254_10294[1] = 2);
} else
{var statearr_10255_10295 = state_10251__$1;(statearr_10255_10295[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 2))
{var inst_10190 = (state_10251[7]);var inst_10193 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10190);var state_10251__$1 = state_10251;var statearr_10256_10296 = state_10251__$1;(statearr_10256_10296[2] = inst_10193);
(statearr_10256_10296[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 3))
{var inst_10190 = (state_10251[7]);var state_10251__$1 = state_10251;var statearr_10257_10297 = state_10251__$1;(statearr_10257_10297[2] = inst_10190);
(statearr_10257_10297[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 4))
{var inst_10190 = (state_10251[7]);var inst_10196 = (state_10251[2]);var inst_10197 = cljs.core.get.call(null,inst_10196,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10198 = cljs.core.get.call(null,inst_10196,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10199 = cljs.core.get.call(null,inst_10196,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10200 = inst_10190;var state_10251__$1 = (function (){var statearr_10258 = state_10251;(statearr_10258[8] = inst_10200);
(statearr_10258[9] = inst_10199);
(statearr_10258[10] = inst_10198);
(statearr_10258[11] = inst_10197);
return statearr_10258;
})();var statearr_10259_10298 = state_10251__$1;(statearr_10259_10298[2] = null);
(statearr_10259_10298[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 5))
{var inst_10200 = (state_10251[8]);var inst_10203 = cljs.core.seq_QMARK_.call(null,inst_10200);var state_10251__$1 = state_10251;if(inst_10203)
{var statearr_10260_10299 = state_10251__$1;(statearr_10260_10299[1] = 7);
} else
{var statearr_10261_10300 = state_10251__$1;(statearr_10261_10300[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 6))
{var inst_10249 = (state_10251[2]);var state_10251__$1 = state_10251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10251__$1,inst_10249);
} else
{if((state_val_10252 === 7))
{var inst_10200 = (state_10251[8]);var inst_10205 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10200);var state_10251__$1 = state_10251;var statearr_10262_10301 = state_10251__$1;(statearr_10262_10301[2] = inst_10205);
(statearr_10262_10301[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 8))
{var inst_10200 = (state_10251[8]);var state_10251__$1 = state_10251;var statearr_10263_10302 = state_10251__$1;(statearr_10263_10302[2] = inst_10200);
(statearr_10263_10302[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 9))
{var inst_10208 = (state_10251[12]);var inst_10208__$1 = (state_10251[2]);var inst_10209 = cljs.core.get.call(null,inst_10208__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10210 = cljs.core.get.call(null,inst_10208__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10211 = cljs.core.get.call(null,inst_10208__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10251__$1 = (function (){var statearr_10264 = state_10251;(statearr_10264[13] = inst_10211);
(statearr_10264[14] = inst_10210);
(statearr_10264[12] = inst_10208__$1);
return statearr_10264;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10251__$1,10,inst_10209);
} else
{if((state_val_10252 === 10))
{var inst_10215 = (state_10251[15]);var inst_10216 = (state_10251[16]);var inst_10214 = (state_10251[2]);var inst_10215__$1 = cljs.core.nth.call(null,inst_10214,0,null);var inst_10216__$1 = cljs.core.nth.call(null,inst_10214,1,null);var inst_10217 = (inst_10215__$1 == null);var inst_10218 = cljs.core._EQ_.call(null,inst_10216__$1,change);var inst_10219 = (inst_10217) || (inst_10218);var state_10251__$1 = (function (){var statearr_10265 = state_10251;(statearr_10265[15] = inst_10215__$1);
(statearr_10265[16] = inst_10216__$1);
return statearr_10265;
})();if(cljs.core.truth_(inst_10219))
{var statearr_10266_10303 = state_10251__$1;(statearr_10266_10303[1] = 11);
} else
{var statearr_10267_10304 = state_10251__$1;(statearr_10267_10304[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 11))
{var inst_10215 = (state_10251[15]);var inst_10221 = (inst_10215 == null);var state_10251__$1 = state_10251;if(cljs.core.truth_(inst_10221))
{var statearr_10268_10305 = state_10251__$1;(statearr_10268_10305[1] = 14);
} else
{var statearr_10269_10306 = state_10251__$1;(statearr_10269_10306[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 12))
{var inst_10211 = (state_10251[13]);var inst_10230 = (state_10251[17]);var inst_10216 = (state_10251[16]);var inst_10230__$1 = inst_10211.call(null,inst_10216);var state_10251__$1 = (function (){var statearr_10270 = state_10251;(statearr_10270[17] = inst_10230__$1);
return statearr_10270;
})();if(cljs.core.truth_(inst_10230__$1))
{var statearr_10271_10307 = state_10251__$1;(statearr_10271_10307[1] = 17);
} else
{var statearr_10272_10308 = state_10251__$1;(statearr_10272_10308[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 13))
{var inst_10247 = (state_10251[2]);var state_10251__$1 = state_10251;var statearr_10273_10309 = state_10251__$1;(statearr_10273_10309[2] = inst_10247);
(statearr_10273_10309[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 14))
{var inst_10216 = (state_10251[16]);var inst_10223 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10216);var state_10251__$1 = state_10251;var statearr_10274_10310 = state_10251__$1;(statearr_10274_10310[2] = inst_10223);
(statearr_10274_10310[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 15))
{var state_10251__$1 = state_10251;var statearr_10275_10311 = state_10251__$1;(statearr_10275_10311[2] = null);
(statearr_10275_10311[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 16))
{var inst_10226 = (state_10251[2]);var inst_10227 = calc_state.call(null);var inst_10200 = inst_10227;var state_10251__$1 = (function (){var statearr_10276 = state_10251;(statearr_10276[8] = inst_10200);
(statearr_10276[18] = inst_10226);
return statearr_10276;
})();var statearr_10277_10312 = state_10251__$1;(statearr_10277_10312[2] = null);
(statearr_10277_10312[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 17))
{var inst_10230 = (state_10251[17]);var state_10251__$1 = state_10251;var statearr_10278_10313 = state_10251__$1;(statearr_10278_10313[2] = inst_10230);
(statearr_10278_10313[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 18))
{var inst_10211 = (state_10251[13]);var inst_10210 = (state_10251[14]);var inst_10216 = (state_10251[16]);var inst_10233 = cljs.core.empty_QMARK_.call(null,inst_10211);var inst_10234 = inst_10210.call(null,inst_10216);var inst_10235 = cljs.core.not.call(null,inst_10234);var inst_10236 = (inst_10233) && (inst_10235);var state_10251__$1 = state_10251;var statearr_10279_10314 = state_10251__$1;(statearr_10279_10314[2] = inst_10236);
(statearr_10279_10314[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 19))
{var inst_10238 = (state_10251[2]);var state_10251__$1 = state_10251;if(cljs.core.truth_(inst_10238))
{var statearr_10280_10315 = state_10251__$1;(statearr_10280_10315[1] = 20);
} else
{var statearr_10281_10316 = state_10251__$1;(statearr_10281_10316[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 20))
{var inst_10215 = (state_10251[15]);var state_10251__$1 = state_10251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10251__$1,23,out,inst_10215);
} else
{if((state_val_10252 === 21))
{var state_10251__$1 = state_10251;var statearr_10282_10317 = state_10251__$1;(statearr_10282_10317[2] = null);
(statearr_10282_10317[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 22))
{var inst_10208 = (state_10251[12]);var inst_10244 = (state_10251[2]);var inst_10200 = inst_10208;var state_10251__$1 = (function (){var statearr_10283 = state_10251;(statearr_10283[19] = inst_10244);
(statearr_10283[8] = inst_10200);
return statearr_10283;
})();var statearr_10284_10318 = state_10251__$1;(statearr_10284_10318[2] = null);
(statearr_10284_10318[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10252 === 23))
{var inst_10241 = (state_10251[2]);var state_10251__$1 = state_10251;var statearr_10285_10319 = state_10251__$1;(statearr_10285_10319[2] = inst_10241);
(statearr_10285_10319[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_10289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10289[0] = state_machine__5510__auto__);
(statearr_10289[1] = 1);
return statearr_10289;
});
var state_machine__5510__auto____1 = (function (state_10251){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_10251);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10290){if((e10290 instanceof Object))
{var ex__5513__auto__ = e10290;var statearr_10291_10320 = state_10251;(statearr_10291_10320[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10321 = state_10251;
state_10251 = G__10321;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10251){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10292 = f__5525__auto__.call(null);(statearr_10292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___10293);
return statearr_10292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10323 = {};return obj10323;
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
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3409__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3409__auto__,mults){
return (function (p1__10324_SHARP_){if(cljs.core.truth_(p1__10324_SHARP_.call(null,topic)))
{return p1__10324_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10324_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3409__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10449 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10449 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10450){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10450 = meta10450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10449.cljs$lang$type = true;
cljs.core.async.t10449.cljs$lang$ctorStr = "cljs.core.async/t10449";
cljs.core.async.t10449.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"cljs.core.async/t10449");
});})(mults,ensure_mult))
;
cljs.core.async.t10449.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10449.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10449.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10449.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10451){var self__ = this;
var _10451__$1 = this;return self__.meta10450;
});})(mults,ensure_mult))
;
cljs.core.async.t10449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10451,meta10450__$1){var self__ = this;
var _10451__$1 = this;return (new cljs.core.async.t10449(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10450__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10449 = ((function (mults,ensure_mult){
return (function __GT_t10449(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10450){return (new cljs.core.async.t10449(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10450));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10449(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5524__auto___10573 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10525){var state_val_10526 = (state_10525[1]);if((state_val_10526 === 1))
{var state_10525__$1 = state_10525;var statearr_10527_10574 = state_10525__$1;(statearr_10527_10574[2] = null);
(statearr_10527_10574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 2))
{var state_10525__$1 = state_10525;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10525__$1,4,ch);
} else
{if((state_val_10526 === 3))
{var inst_10523 = (state_10525[2]);var state_10525__$1 = state_10525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10525__$1,inst_10523);
} else
{if((state_val_10526 === 4))
{var inst_10454 = (state_10525[7]);var inst_10454__$1 = (state_10525[2]);var inst_10455 = (inst_10454__$1 == null);var state_10525__$1 = (function (){var statearr_10528 = state_10525;(statearr_10528[7] = inst_10454__$1);
return statearr_10528;
})();if(cljs.core.truth_(inst_10455))
{var statearr_10529_10575 = state_10525__$1;(statearr_10529_10575[1] = 5);
} else
{var statearr_10530_10576 = state_10525__$1;(statearr_10530_10576[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 5))
{var inst_10461 = cljs.core.deref.call(null,mults);var inst_10462 = cljs.core.vals.call(null,inst_10461);var inst_10463 = cljs.core.seq.call(null,inst_10462);var inst_10464 = inst_10463;var inst_10465 = null;var inst_10466 = 0;var inst_10467 = 0;var state_10525__$1 = (function (){var statearr_10531 = state_10525;(statearr_10531[8] = inst_10466);
(statearr_10531[9] = inst_10467);
(statearr_10531[10] = inst_10465);
(statearr_10531[11] = inst_10464);
return statearr_10531;
})();var statearr_10532_10577 = state_10525__$1;(statearr_10532_10577[2] = null);
(statearr_10532_10577[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 6))
{var inst_10454 = (state_10525[7]);var inst_10504 = (state_10525[12]);var inst_10502 = (state_10525[13]);var inst_10502__$1 = topic_fn.call(null,inst_10454);var inst_10503 = cljs.core.deref.call(null,mults);var inst_10504__$1 = cljs.core.get.call(null,inst_10503,inst_10502__$1);var state_10525__$1 = (function (){var statearr_10533 = state_10525;(statearr_10533[12] = inst_10504__$1);
(statearr_10533[13] = inst_10502__$1);
return statearr_10533;
})();if(cljs.core.truth_(inst_10504__$1))
{var statearr_10534_10578 = state_10525__$1;(statearr_10534_10578[1] = 19);
} else
{var statearr_10535_10579 = state_10525__$1;(statearr_10535_10579[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 7))
{var inst_10521 = (state_10525[2]);var state_10525__$1 = state_10525;var statearr_10536_10580 = state_10525__$1;(statearr_10536_10580[2] = inst_10521);
(statearr_10536_10580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 8))
{var inst_10466 = (state_10525[8]);var inst_10467 = (state_10525[9]);var inst_10469 = (inst_10467 < inst_10466);var inst_10470 = inst_10469;var state_10525__$1 = state_10525;if(cljs.core.truth_(inst_10470))
{var statearr_10540_10581 = state_10525__$1;(statearr_10540_10581[1] = 10);
} else
{var statearr_10541_10582 = state_10525__$1;(statearr_10541_10582[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 9))
{var inst_10500 = (state_10525[2]);var state_10525__$1 = state_10525;var statearr_10542_10583 = state_10525__$1;(statearr_10542_10583[2] = inst_10500);
(statearr_10542_10583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 10))
{var inst_10466 = (state_10525[8]);var inst_10467 = (state_10525[9]);var inst_10465 = (state_10525[10]);var inst_10464 = (state_10525[11]);var inst_10472 = cljs.core._nth.call(null,inst_10465,inst_10467);var inst_10473 = cljs.core.async.muxch_STAR_.call(null,inst_10472);var inst_10474 = cljs.core.async.close_BANG_.call(null,inst_10473);var inst_10475 = (inst_10467 + 1);var tmp10537 = inst_10466;var tmp10538 = inst_10465;var tmp10539 = inst_10464;var inst_10464__$1 = tmp10539;var inst_10465__$1 = tmp10538;var inst_10466__$1 = tmp10537;var inst_10467__$1 = inst_10475;var state_10525__$1 = (function (){var statearr_10543 = state_10525;(statearr_10543[8] = inst_10466__$1);
(statearr_10543[9] = inst_10467__$1);
(statearr_10543[14] = inst_10474);
(statearr_10543[10] = inst_10465__$1);
(statearr_10543[11] = inst_10464__$1);
return statearr_10543;
})();var statearr_10544_10584 = state_10525__$1;(statearr_10544_10584[2] = null);
(statearr_10544_10584[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 11))
{var inst_10478 = (state_10525[15]);var inst_10464 = (state_10525[11]);var inst_10478__$1 = cljs.core.seq.call(null,inst_10464);var state_10525__$1 = (function (){var statearr_10545 = state_10525;(statearr_10545[15] = inst_10478__$1);
return statearr_10545;
})();if(inst_10478__$1)
{var statearr_10546_10585 = state_10525__$1;(statearr_10546_10585[1] = 13);
} else
{var statearr_10547_10586 = state_10525__$1;(statearr_10547_10586[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 12))
{var inst_10498 = (state_10525[2]);var state_10525__$1 = state_10525;var statearr_10548_10587 = state_10525__$1;(statearr_10548_10587[2] = inst_10498);
(statearr_10548_10587[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 13))
{var inst_10478 = (state_10525[15]);var inst_10480 = cljs.core.chunked_seq_QMARK_.call(null,inst_10478);var state_10525__$1 = state_10525;if(inst_10480)
{var statearr_10549_10588 = state_10525__$1;(statearr_10549_10588[1] = 16);
} else
{var statearr_10550_10589 = state_10525__$1;(statearr_10550_10589[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 14))
{var state_10525__$1 = state_10525;var statearr_10551_10590 = state_10525__$1;(statearr_10551_10590[2] = null);
(statearr_10551_10590[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 15))
{var inst_10496 = (state_10525[2]);var state_10525__$1 = state_10525;var statearr_10552_10591 = state_10525__$1;(statearr_10552_10591[2] = inst_10496);
(statearr_10552_10591[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 16))
{var inst_10478 = (state_10525[15]);var inst_10482 = cljs.core.chunk_first.call(null,inst_10478);var inst_10483 = cljs.core.chunk_rest.call(null,inst_10478);var inst_10484 = cljs.core.count.call(null,inst_10482);var inst_10464 = inst_10483;var inst_10465 = inst_10482;var inst_10466 = inst_10484;var inst_10467 = 0;var state_10525__$1 = (function (){var statearr_10553 = state_10525;(statearr_10553[8] = inst_10466);
(statearr_10553[9] = inst_10467);
(statearr_10553[10] = inst_10465);
(statearr_10553[11] = inst_10464);
return statearr_10553;
})();var statearr_10554_10592 = state_10525__$1;(statearr_10554_10592[2] = null);
(statearr_10554_10592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 17))
{var inst_10478 = (state_10525[15]);var inst_10487 = cljs.core.first.call(null,inst_10478);var inst_10488 = cljs.core.async.muxch_STAR_.call(null,inst_10487);var inst_10489 = cljs.core.async.close_BANG_.call(null,inst_10488);var inst_10490 = cljs.core.next.call(null,inst_10478);var inst_10464 = inst_10490;var inst_10465 = null;var inst_10466 = 0;var inst_10467 = 0;var state_10525__$1 = (function (){var statearr_10555 = state_10525;(statearr_10555[16] = inst_10489);
(statearr_10555[8] = inst_10466);
(statearr_10555[9] = inst_10467);
(statearr_10555[10] = inst_10465);
(statearr_10555[11] = inst_10464);
return statearr_10555;
})();var statearr_10556_10593 = state_10525__$1;(statearr_10556_10593[2] = null);
(statearr_10556_10593[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 18))
{var inst_10493 = (state_10525[2]);var state_10525__$1 = state_10525;var statearr_10557_10594 = state_10525__$1;(statearr_10557_10594[2] = inst_10493);
(statearr_10557_10594[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 19))
{var state_10525__$1 = state_10525;var statearr_10558_10595 = state_10525__$1;(statearr_10558_10595[2] = null);
(statearr_10558_10595[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 20))
{var state_10525__$1 = state_10525;var statearr_10559_10596 = state_10525__$1;(statearr_10559_10596[2] = null);
(statearr_10559_10596[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 21))
{var inst_10518 = (state_10525[2]);var state_10525__$1 = (function (){var statearr_10560 = state_10525;(statearr_10560[17] = inst_10518);
return statearr_10560;
})();var statearr_10561_10597 = state_10525__$1;(statearr_10561_10597[2] = null);
(statearr_10561_10597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 22))
{var inst_10515 = (state_10525[2]);var state_10525__$1 = state_10525;var statearr_10562_10598 = state_10525__$1;(statearr_10562_10598[2] = inst_10515);
(statearr_10562_10598[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 23))
{var inst_10502 = (state_10525[13]);var inst_10506 = (state_10525[2]);var inst_10507 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10502);var state_10525__$1 = (function (){var statearr_10563 = state_10525;(statearr_10563[18] = inst_10506);
return statearr_10563;
})();var statearr_10564_10599 = state_10525__$1;(statearr_10564_10599[2] = inst_10507);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10525__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10526 === 24))
{var inst_10454 = (state_10525[7]);var inst_10504 = (state_10525[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10525,23,Object,null,22);var inst_10511 = cljs.core.async.muxch_STAR_.call(null,inst_10504);var state_10525__$1 = state_10525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10525__$1,25,inst_10511,inst_10454);
} else
{if((state_val_10526 === 25))
{var inst_10513 = (state_10525[2]);var state_10525__$1 = state_10525;var statearr_10565_10600 = state_10525__$1;(statearr_10565_10600[2] = inst_10513);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10525__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_10569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10569[0] = state_machine__5510__auto__);
(statearr_10569[1] = 1);
return statearr_10569;
});
var state_machine__5510__auto____1 = (function (state_10525){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_10525);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10570){if((e10570 instanceof Object))
{var ex__5513__auto__ = e10570;var statearr_10571_10601 = state_10525;(statearr_10571_10601[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10525);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10602 = state_10525;
state_10525 = G__10602;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10525){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10572 = f__5525__auto__.call(null);(statearr_10572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___10573);
return statearr_10572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5524__auto___10739 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10709){var state_val_10710 = (state_10709[1]);if((state_val_10710 === 1))
{var state_10709__$1 = state_10709;var statearr_10711_10740 = state_10709__$1;(statearr_10711_10740[2] = null);
(statearr_10711_10740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 2))
{var inst_10672 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_10673 = 0;var state_10709__$1 = (function (){var statearr_10712 = state_10709;(statearr_10712[7] = inst_10673);
(statearr_10712[8] = inst_10672);
return statearr_10712;
})();var statearr_10713_10741 = state_10709__$1;(statearr_10713_10741[2] = null);
(statearr_10713_10741[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 3))
{var inst_10707 = (state_10709[2]);var state_10709__$1 = state_10709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10709__$1,inst_10707);
} else
{if((state_val_10710 === 4))
{var inst_10673 = (state_10709[7]);var inst_10675 = (inst_10673 < cnt);var state_10709__$1 = state_10709;if(cljs.core.truth_(inst_10675))
{var statearr_10714_10742 = state_10709__$1;(statearr_10714_10742[1] = 6);
} else
{var statearr_10715_10743 = state_10709__$1;(statearr_10715_10743[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 5))
{var inst_10693 = (state_10709[2]);var state_10709__$1 = (function (){var statearr_10716 = state_10709;(statearr_10716[9] = inst_10693);
return statearr_10716;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10709__$1,12,dchan);
} else
{if((state_val_10710 === 6))
{var state_10709__$1 = state_10709;var statearr_10717_10744 = state_10709__$1;(statearr_10717_10744[2] = null);
(statearr_10717_10744[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 7))
{var state_10709__$1 = state_10709;var statearr_10718_10745 = state_10709__$1;(statearr_10718_10745[2] = null);
(statearr_10718_10745[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 8))
{var inst_10691 = (state_10709[2]);var state_10709__$1 = state_10709;var statearr_10719_10746 = state_10709__$1;(statearr_10719_10746[2] = inst_10691);
(statearr_10719_10746[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 9))
{var inst_10673 = (state_10709[7]);var inst_10686 = (state_10709[2]);var inst_10687 = (inst_10673 + 1);var inst_10673__$1 = inst_10687;var state_10709__$1 = (function (){var statearr_10720 = state_10709;(statearr_10720[10] = inst_10686);
(statearr_10720[7] = inst_10673__$1);
return statearr_10720;
})();var statearr_10721_10747 = state_10709__$1;(statearr_10721_10747[2] = null);
(statearr_10721_10747[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 10))
{var inst_10677 = (state_10709[2]);var inst_10678 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_10709__$1 = (function (){var statearr_10722 = state_10709;(statearr_10722[11] = inst_10677);
return statearr_10722;
})();var statearr_10723_10748 = state_10709__$1;(statearr_10723_10748[2] = inst_10678);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10709__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 11))
{var inst_10673 = (state_10709[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10709,10,Object,null,9);var inst_10682 = chs__$1.call(null,inst_10673);var inst_10683 = done.call(null,inst_10673);var inst_10684 = cljs.core.async.take_BANG_.call(null,inst_10682,inst_10683);var state_10709__$1 = state_10709;var statearr_10724_10749 = state_10709__$1;(statearr_10724_10749[2] = inst_10684);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10709__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 12))
{var inst_10695 = (state_10709[12]);var inst_10695__$1 = (state_10709[2]);var inst_10696 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10695__$1);var state_10709__$1 = (function (){var statearr_10725 = state_10709;(statearr_10725[12] = inst_10695__$1);
return statearr_10725;
})();if(cljs.core.truth_(inst_10696))
{var statearr_10726_10750 = state_10709__$1;(statearr_10726_10750[1] = 13);
} else
{var statearr_10727_10751 = state_10709__$1;(statearr_10727_10751[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 13))
{var inst_10698 = cljs.core.async.close_BANG_.call(null,out);var state_10709__$1 = state_10709;var statearr_10728_10752 = state_10709__$1;(statearr_10728_10752[2] = inst_10698);
(statearr_10728_10752[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 14))
{var inst_10695 = (state_10709[12]);var inst_10700 = cljs.core.apply.call(null,f,inst_10695);var state_10709__$1 = state_10709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10709__$1,16,out,inst_10700);
} else
{if((state_val_10710 === 15))
{var inst_10705 = (state_10709[2]);var state_10709__$1 = state_10709;var statearr_10729_10753 = state_10709__$1;(statearr_10729_10753[2] = inst_10705);
(statearr_10729_10753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10710 === 16))
{var inst_10702 = (state_10709[2]);var state_10709__$1 = (function (){var statearr_10730 = state_10709;(statearr_10730[13] = inst_10702);
return statearr_10730;
})();var statearr_10731_10754 = state_10709__$1;(statearr_10731_10754[2] = null);
(statearr_10731_10754[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_10735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10735[0] = state_machine__5510__auto__);
(statearr_10735[1] = 1);
return statearr_10735;
});
var state_machine__5510__auto____1 = (function (state_10709){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_10709);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10736){if((e10736 instanceof Object))
{var ex__5513__auto__ = e10736;var statearr_10737_10755 = state_10709;(statearr_10737_10755[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10756 = state_10709;
state_10709 = G__10756;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10709){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10738 = f__5525__auto__.call(null);(statearr_10738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___10739);
return statearr_10738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___10864 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10840){var state_val_10841 = (state_10840[1]);if((state_val_10841 === 1))
{var inst_10811 = cljs.core.vec.call(null,chs);var inst_10812 = inst_10811;var state_10840__$1 = (function (){var statearr_10842 = state_10840;(statearr_10842[7] = inst_10812);
return statearr_10842;
})();var statearr_10843_10865 = state_10840__$1;(statearr_10843_10865[2] = null);
(statearr_10843_10865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10841 === 2))
{var inst_10812 = (state_10840[7]);var inst_10814 = cljs.core.count.call(null,inst_10812);var inst_10815 = (inst_10814 > 0);var state_10840__$1 = state_10840;if(cljs.core.truth_(inst_10815))
{var statearr_10844_10866 = state_10840__$1;(statearr_10844_10866[1] = 4);
} else
{var statearr_10845_10867 = state_10840__$1;(statearr_10845_10867[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10841 === 3))
{var inst_10838 = (state_10840[2]);var state_10840__$1 = state_10840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10840__$1,inst_10838);
} else
{if((state_val_10841 === 4))
{var inst_10812 = (state_10840[7]);var state_10840__$1 = state_10840;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10840__$1,7,inst_10812);
} else
{if((state_val_10841 === 5))
{var inst_10834 = cljs.core.async.close_BANG_.call(null,out);var state_10840__$1 = state_10840;var statearr_10846_10868 = state_10840__$1;(statearr_10846_10868[2] = inst_10834);
(statearr_10846_10868[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10841 === 6))
{var inst_10836 = (state_10840[2]);var state_10840__$1 = state_10840;var statearr_10847_10869 = state_10840__$1;(statearr_10847_10869[2] = inst_10836);
(statearr_10847_10869[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10841 === 7))
{var inst_10819 = (state_10840[8]);var inst_10820 = (state_10840[9]);var inst_10819__$1 = (state_10840[2]);var inst_10820__$1 = cljs.core.nth.call(null,inst_10819__$1,0,null);var inst_10821 = cljs.core.nth.call(null,inst_10819__$1,1,null);var inst_10822 = (inst_10820__$1 == null);var state_10840__$1 = (function (){var statearr_10848 = state_10840;(statearr_10848[8] = inst_10819__$1);
(statearr_10848[9] = inst_10820__$1);
(statearr_10848[10] = inst_10821);
return statearr_10848;
})();if(cljs.core.truth_(inst_10822))
{var statearr_10849_10870 = state_10840__$1;(statearr_10849_10870[1] = 8);
} else
{var statearr_10850_10871 = state_10840__$1;(statearr_10850_10871[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10841 === 8))
{var inst_10812 = (state_10840[7]);var inst_10819 = (state_10840[8]);var inst_10820 = (state_10840[9]);var inst_10821 = (state_10840[10]);var inst_10824 = (function (){var c = inst_10821;var v = inst_10820;var vec__10817 = inst_10819;var cs = inst_10812;return ((function (c,v,vec__10817,cs,inst_10812,inst_10819,inst_10820,inst_10821,state_val_10841){
return (function (p1__10757_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__10757_SHARP_);
});
;})(c,v,vec__10817,cs,inst_10812,inst_10819,inst_10820,inst_10821,state_val_10841))
})();var inst_10825 = cljs.core.filterv.call(null,inst_10824,inst_10812);var inst_10812__$1 = inst_10825;var state_10840__$1 = (function (){var statearr_10851 = state_10840;(statearr_10851[7] = inst_10812__$1);
return statearr_10851;
})();var statearr_10852_10872 = state_10840__$1;(statearr_10852_10872[2] = null);
(statearr_10852_10872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10841 === 9))
{var inst_10820 = (state_10840[9]);var state_10840__$1 = state_10840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10840__$1,11,out,inst_10820);
} else
{if((state_val_10841 === 10))
{var inst_10832 = (state_10840[2]);var state_10840__$1 = state_10840;var statearr_10854_10873 = state_10840__$1;(statearr_10854_10873[2] = inst_10832);
(statearr_10854_10873[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10841 === 11))
{var inst_10812 = (state_10840[7]);var inst_10829 = (state_10840[2]);var tmp10853 = inst_10812;var inst_10812__$1 = tmp10853;var state_10840__$1 = (function (){var statearr_10855 = state_10840;(statearr_10855[7] = inst_10812__$1);
(statearr_10855[11] = inst_10829);
return statearr_10855;
})();var statearr_10856_10874 = state_10840__$1;(statearr_10856_10874[2] = null);
(statearr_10856_10874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_10860 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10860[0] = state_machine__5510__auto__);
(statearr_10860[1] = 1);
return statearr_10860;
});
var state_machine__5510__auto____1 = (function (state_10840){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_10840);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10861){if((e10861 instanceof Object))
{var ex__5513__auto__ = e10861;var statearr_10862_10875 = state_10840;(statearr_10862_10875[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10876 = state_10840;
state_10840 = G__10876;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10840){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10863 = f__5525__auto__.call(null);(statearr_10863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___10864);
return statearr_10863;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___10969 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10946){var state_val_10947 = (state_10946[1]);if((state_val_10947 === 1))
{var inst_10923 = 0;var state_10946__$1 = (function (){var statearr_10948 = state_10946;(statearr_10948[7] = inst_10923);
return statearr_10948;
})();var statearr_10949_10970 = state_10946__$1;(statearr_10949_10970[2] = null);
(statearr_10949_10970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10947 === 2))
{var inst_10923 = (state_10946[7]);var inst_10925 = (inst_10923 < n);var state_10946__$1 = state_10946;if(cljs.core.truth_(inst_10925))
{var statearr_10950_10971 = state_10946__$1;(statearr_10950_10971[1] = 4);
} else
{var statearr_10951_10972 = state_10946__$1;(statearr_10951_10972[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10947 === 3))
{var inst_10943 = (state_10946[2]);var inst_10944 = cljs.core.async.close_BANG_.call(null,out);var state_10946__$1 = (function (){var statearr_10952 = state_10946;(statearr_10952[8] = inst_10943);
return statearr_10952;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10946__$1,inst_10944);
} else
{if((state_val_10947 === 4))
{var state_10946__$1 = state_10946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10946__$1,7,ch);
} else
{if((state_val_10947 === 5))
{var state_10946__$1 = state_10946;var statearr_10953_10973 = state_10946__$1;(statearr_10953_10973[2] = null);
(statearr_10953_10973[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10947 === 6))
{var inst_10941 = (state_10946[2]);var state_10946__$1 = state_10946;var statearr_10954_10974 = state_10946__$1;(statearr_10954_10974[2] = inst_10941);
(statearr_10954_10974[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10947 === 7))
{var inst_10928 = (state_10946[9]);var inst_10928__$1 = (state_10946[2]);var inst_10929 = (inst_10928__$1 == null);var inst_10930 = cljs.core.not.call(null,inst_10929);var state_10946__$1 = (function (){var statearr_10955 = state_10946;(statearr_10955[9] = inst_10928__$1);
return statearr_10955;
})();if(inst_10930)
{var statearr_10956_10975 = state_10946__$1;(statearr_10956_10975[1] = 8);
} else
{var statearr_10957_10976 = state_10946__$1;(statearr_10957_10976[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10947 === 8))
{var inst_10928 = (state_10946[9]);var state_10946__$1 = state_10946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10946__$1,11,out,inst_10928);
} else
{if((state_val_10947 === 9))
{var state_10946__$1 = state_10946;var statearr_10958_10977 = state_10946__$1;(statearr_10958_10977[2] = null);
(statearr_10958_10977[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10947 === 10))
{var inst_10938 = (state_10946[2]);var state_10946__$1 = state_10946;var statearr_10959_10978 = state_10946__$1;(statearr_10959_10978[2] = inst_10938);
(statearr_10959_10978[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10947 === 11))
{var inst_10923 = (state_10946[7]);var inst_10933 = (state_10946[2]);var inst_10934 = (inst_10923 + 1);var inst_10923__$1 = inst_10934;var state_10946__$1 = (function (){var statearr_10960 = state_10946;(statearr_10960[10] = inst_10933);
(statearr_10960[7] = inst_10923__$1);
return statearr_10960;
})();var statearr_10961_10979 = state_10946__$1;(statearr_10961_10979[2] = null);
(statearr_10961_10979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_10965 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10965[0] = state_machine__5510__auto__);
(statearr_10965[1] = 1);
return statearr_10965;
});
var state_machine__5510__auto____1 = (function (state_10946){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_10946);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10966){if((e10966 instanceof Object))
{var ex__5513__auto__ = e10966;var statearr_10967_10980 = state_10946;(statearr_10967_10980[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10946);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10981 = state_10946;
state_10946 = G__10981;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10946){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10968 = f__5525__auto__.call(null);(statearr_10968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___10969);
return statearr_10968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___11078 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11053){var state_val_11054 = (state_11053[1]);if((state_val_11054 === 1))
{var inst_11030 = null;var state_11053__$1 = (function (){var statearr_11055 = state_11053;(statearr_11055[7] = inst_11030);
return statearr_11055;
})();var statearr_11056_11079 = state_11053__$1;(statearr_11056_11079[2] = null);
(statearr_11056_11079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11054 === 2))
{var state_11053__$1 = state_11053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11053__$1,4,ch);
} else
{if((state_val_11054 === 3))
{var inst_11050 = (state_11053[2]);var inst_11051 = cljs.core.async.close_BANG_.call(null,out);var state_11053__$1 = (function (){var statearr_11057 = state_11053;(statearr_11057[8] = inst_11050);
return statearr_11057;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11053__$1,inst_11051);
} else
{if((state_val_11054 === 4))
{var inst_11033 = (state_11053[9]);var inst_11033__$1 = (state_11053[2]);var inst_11034 = (inst_11033__$1 == null);var inst_11035 = cljs.core.not.call(null,inst_11034);var state_11053__$1 = (function (){var statearr_11058 = state_11053;(statearr_11058[9] = inst_11033__$1);
return statearr_11058;
})();if(inst_11035)
{var statearr_11059_11080 = state_11053__$1;(statearr_11059_11080[1] = 5);
} else
{var statearr_11060_11081 = state_11053__$1;(statearr_11060_11081[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11054 === 5))
{var inst_11033 = (state_11053[9]);var inst_11030 = (state_11053[7]);var inst_11037 = cljs.core._EQ_.call(null,inst_11033,inst_11030);var state_11053__$1 = state_11053;if(inst_11037)
{var statearr_11061_11082 = state_11053__$1;(statearr_11061_11082[1] = 8);
} else
{var statearr_11062_11083 = state_11053__$1;(statearr_11062_11083[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11054 === 6))
{var state_11053__$1 = state_11053;var statearr_11064_11084 = state_11053__$1;(statearr_11064_11084[2] = null);
(statearr_11064_11084[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11054 === 7))
{var inst_11048 = (state_11053[2]);var state_11053__$1 = state_11053;var statearr_11065_11085 = state_11053__$1;(statearr_11065_11085[2] = inst_11048);
(statearr_11065_11085[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11054 === 8))
{var inst_11030 = (state_11053[7]);var tmp11063 = inst_11030;var inst_11030__$1 = tmp11063;var state_11053__$1 = (function (){var statearr_11066 = state_11053;(statearr_11066[7] = inst_11030__$1);
return statearr_11066;
})();var statearr_11067_11086 = state_11053__$1;(statearr_11067_11086[2] = null);
(statearr_11067_11086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11054 === 9))
{var inst_11033 = (state_11053[9]);var state_11053__$1 = state_11053;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11053__$1,11,out,inst_11033);
} else
{if((state_val_11054 === 10))
{var inst_11045 = (state_11053[2]);var state_11053__$1 = state_11053;var statearr_11068_11087 = state_11053__$1;(statearr_11068_11087[2] = inst_11045);
(statearr_11068_11087[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11054 === 11))
{var inst_11033 = (state_11053[9]);var inst_11042 = (state_11053[2]);var inst_11030 = inst_11033;var state_11053__$1 = (function (){var statearr_11069 = state_11053;(statearr_11069[7] = inst_11030);
(statearr_11069[10] = inst_11042);
return statearr_11069;
})();var statearr_11070_11088 = state_11053__$1;(statearr_11070_11088[2] = null);
(statearr_11070_11088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_11074 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11074[0] = state_machine__5510__auto__);
(statearr_11074[1] = 1);
return statearr_11074;
});
var state_machine__5510__auto____1 = (function (state_11053){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_11053);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11075){if((e11075 instanceof Object))
{var ex__5513__auto__ = e11075;var statearr_11076_11089 = state_11053;(statearr_11076_11089[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11053);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11090 = state_11053;
state_11053 = G__11090;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11053){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11077 = f__5525__auto__.call(null);(statearr_11077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11078);
return statearr_11077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___11225 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11195){var state_val_11196 = (state_11195[1]);if((state_val_11196 === 1))
{var inst_11158 = (new Array(n));var inst_11159 = inst_11158;var inst_11160 = 0;var state_11195__$1 = (function (){var statearr_11197 = state_11195;(statearr_11197[7] = inst_11159);
(statearr_11197[8] = inst_11160);
return statearr_11197;
})();var statearr_11198_11226 = state_11195__$1;(statearr_11198_11226[2] = null);
(statearr_11198_11226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 2))
{var state_11195__$1 = state_11195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11195__$1,4,ch);
} else
{if((state_val_11196 === 3))
{var inst_11193 = (state_11195[2]);var state_11195__$1 = state_11195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11195__$1,inst_11193);
} else
{if((state_val_11196 === 4))
{var inst_11163 = (state_11195[9]);var inst_11163__$1 = (state_11195[2]);var inst_11164 = (inst_11163__$1 == null);var inst_11165 = cljs.core.not.call(null,inst_11164);var state_11195__$1 = (function (){var statearr_11199 = state_11195;(statearr_11199[9] = inst_11163__$1);
return statearr_11199;
})();if(inst_11165)
{var statearr_11200_11227 = state_11195__$1;(statearr_11200_11227[1] = 5);
} else
{var statearr_11201_11228 = state_11195__$1;(statearr_11201_11228[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 5))
{var inst_11159 = (state_11195[7]);var inst_11168 = (state_11195[10]);var inst_11163 = (state_11195[9]);var inst_11160 = (state_11195[8]);var inst_11167 = (inst_11159[inst_11160] = inst_11163);var inst_11168__$1 = (inst_11160 + 1);var inst_11169 = (inst_11168__$1 < n);var state_11195__$1 = (function (){var statearr_11202 = state_11195;(statearr_11202[10] = inst_11168__$1);
(statearr_11202[11] = inst_11167);
return statearr_11202;
})();if(cljs.core.truth_(inst_11169))
{var statearr_11203_11229 = state_11195__$1;(statearr_11203_11229[1] = 8);
} else
{var statearr_11204_11230 = state_11195__$1;(statearr_11204_11230[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 6))
{var inst_11160 = (state_11195[8]);var inst_11181 = (inst_11160 > 0);var state_11195__$1 = state_11195;if(cljs.core.truth_(inst_11181))
{var statearr_11206_11231 = state_11195__$1;(statearr_11206_11231[1] = 12);
} else
{var statearr_11207_11232 = state_11195__$1;(statearr_11207_11232[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 7))
{var inst_11191 = (state_11195[2]);var state_11195__$1 = state_11195;var statearr_11208_11233 = state_11195__$1;(statearr_11208_11233[2] = inst_11191);
(statearr_11208_11233[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 8))
{var inst_11159 = (state_11195[7]);var inst_11168 = (state_11195[10]);var tmp11205 = inst_11159;var inst_11159__$1 = tmp11205;var inst_11160 = inst_11168;var state_11195__$1 = (function (){var statearr_11209 = state_11195;(statearr_11209[7] = inst_11159__$1);
(statearr_11209[8] = inst_11160);
return statearr_11209;
})();var statearr_11210_11234 = state_11195__$1;(statearr_11210_11234[2] = null);
(statearr_11210_11234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 9))
{var inst_11159 = (state_11195[7]);var inst_11173 = cljs.core.vec.call(null,inst_11159);var state_11195__$1 = state_11195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11195__$1,11,out,inst_11173);
} else
{if((state_val_11196 === 10))
{var inst_11179 = (state_11195[2]);var state_11195__$1 = state_11195;var statearr_11211_11235 = state_11195__$1;(statearr_11211_11235[2] = inst_11179);
(statearr_11211_11235[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 11))
{var inst_11175 = (state_11195[2]);var inst_11176 = (new Array(n));var inst_11159 = inst_11176;var inst_11160 = 0;var state_11195__$1 = (function (){var statearr_11212 = state_11195;(statearr_11212[12] = inst_11175);
(statearr_11212[7] = inst_11159);
(statearr_11212[8] = inst_11160);
return statearr_11212;
})();var statearr_11213_11236 = state_11195__$1;(statearr_11213_11236[2] = null);
(statearr_11213_11236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 12))
{var inst_11159 = (state_11195[7]);var inst_11183 = cljs.core.vec.call(null,inst_11159);var state_11195__$1 = state_11195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11195__$1,15,out,inst_11183);
} else
{if((state_val_11196 === 13))
{var state_11195__$1 = state_11195;var statearr_11214_11237 = state_11195__$1;(statearr_11214_11237[2] = null);
(statearr_11214_11237[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 14))
{var inst_11188 = (state_11195[2]);var inst_11189 = cljs.core.async.close_BANG_.call(null,out);var state_11195__$1 = (function (){var statearr_11215 = state_11195;(statearr_11215[13] = inst_11188);
return statearr_11215;
})();var statearr_11216_11238 = state_11195__$1;(statearr_11216_11238[2] = inst_11189);
(statearr_11216_11238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11196 === 15))
{var inst_11185 = (state_11195[2]);var state_11195__$1 = state_11195;var statearr_11217_11239 = state_11195__$1;(statearr_11217_11239[2] = inst_11185);
(statearr_11217_11239[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_11221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11221[0] = state_machine__5510__auto__);
(statearr_11221[1] = 1);
return statearr_11221;
});
var state_machine__5510__auto____1 = (function (state_11195){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_11195);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11222){if((e11222 instanceof Object))
{var ex__5513__auto__ = e11222;var statearr_11223_11240 = state_11195;(statearr_11223_11240[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11241 = state_11195;
state_11195 = G__11241;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11195){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11224 = f__5525__auto__.call(null);(statearr_11224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11225);
return statearr_11224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___11384 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11354){var state_val_11355 = (state_11354[1]);if((state_val_11355 === 1))
{var inst_11313 = [];var inst_11314 = inst_11313;var inst_11315 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11354__$1 = (function (){var statearr_11356 = state_11354;(statearr_11356[7] = inst_11314);
(statearr_11356[8] = inst_11315);
return statearr_11356;
})();var statearr_11357_11385 = state_11354__$1;(statearr_11357_11385[2] = null);
(statearr_11357_11385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11355 === 2))
{var state_11354__$1 = state_11354;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11354__$1,4,ch);
} else
{if((state_val_11355 === 3))
{var inst_11352 = (state_11354[2]);var state_11354__$1 = state_11354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11354__$1,inst_11352);
} else
{if((state_val_11355 === 4))
{var inst_11318 = (state_11354[9]);var inst_11318__$1 = (state_11354[2]);var inst_11319 = (inst_11318__$1 == null);var inst_11320 = cljs.core.not.call(null,inst_11319);var state_11354__$1 = (function (){var statearr_11358 = state_11354;(statearr_11358[9] = inst_11318__$1);
return statearr_11358;
})();if(inst_11320)
{var statearr_11359_11386 = state_11354__$1;(statearr_11359_11386[1] = 5);
} else
{var statearr_11360_11387 = state_11354__$1;(statearr_11360_11387[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11355 === 5))
{var inst_11318 = (state_11354[9]);var inst_11322 = (state_11354[10]);var inst_11315 = (state_11354[8]);var inst_11322__$1 = f.call(null,inst_11318);var inst_11323 = cljs.core._EQ_.call(null,inst_11322__$1,inst_11315);var inst_11324 = cljs.core.keyword_identical_QMARK_.call(null,inst_11315,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11325 = (inst_11323) || (inst_11324);var state_11354__$1 = (function (){var statearr_11361 = state_11354;(statearr_11361[10] = inst_11322__$1);
return statearr_11361;
})();if(cljs.core.truth_(inst_11325))
{var statearr_11362_11388 = state_11354__$1;(statearr_11362_11388[1] = 8);
} else
{var statearr_11363_11389 = state_11354__$1;(statearr_11363_11389[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11355 === 6))
{var inst_11314 = (state_11354[7]);var inst_11339 = inst_11314.length;var inst_11340 = (inst_11339 > 0);var state_11354__$1 = state_11354;if(cljs.core.truth_(inst_11340))
{var statearr_11365_11390 = state_11354__$1;(statearr_11365_11390[1] = 12);
} else
{var statearr_11366_11391 = state_11354__$1;(statearr_11366_11391[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11355 === 7))
{var inst_11350 = (state_11354[2]);var state_11354__$1 = state_11354;var statearr_11367_11392 = state_11354__$1;(statearr_11367_11392[2] = inst_11350);
(statearr_11367_11392[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11355 === 8))
{var inst_11318 = (state_11354[9]);var inst_11322 = (state_11354[10]);var inst_11314 = (state_11354[7]);var inst_11327 = inst_11314.push(inst_11318);var tmp11364 = inst_11314;var inst_11314__$1 = tmp11364;var inst_11315 = inst_11322;var state_11354__$1 = (function (){var statearr_11368 = state_11354;(statearr_11368[11] = inst_11327);
(statearr_11368[7] = inst_11314__$1);
(statearr_11368[8] = inst_11315);
return statearr_11368;
})();var statearr_11369_11393 = state_11354__$1;(statearr_11369_11393[2] = null);
(statearr_11369_11393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11355 === 9))
{var inst_11314 = (state_11354[7]);var inst_11330 = cljs.core.vec.call(null,inst_11314);var state_11354__$1 = state_11354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11354__$1,11,out,inst_11330);
} else
{if((state_val_11355 === 10))
{var inst_11337 = (state_11354[2]);var state_11354__$1 = state_11354;var statearr_11370_11394 = state_11354__$1;(statearr_11370_11394[2] = inst_11337);
(statearr_11370_11394[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11355 === 11))
{var inst_11318 = (state_11354[9]);var inst_11322 = (state_11354[10]);var inst_11332 = (state_11354[2]);var inst_11333 = [];var inst_11334 = inst_11333.push(inst_11318);var inst_11314 = inst_11333;var inst_11315 = inst_11322;var state_11354__$1 = (function (){var statearr_11371 = state_11354;(statearr_11371[12] = inst_11334);
(statearr_11371[13] = inst_11332);
(statearr_11371[7] = inst_11314);
(statearr_11371[8] = inst_11315);
return statearr_11371;
})();var statearr_11372_11395 = state_11354__$1;(statearr_11372_11395[2] = null);
(statearr_11372_11395[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11355 === 12))
{var inst_11314 = (state_11354[7]);var inst_11342 = cljs.core.vec.call(null,inst_11314);var state_11354__$1 = state_11354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11354__$1,15,out,inst_11342);
} else
{if((state_val_11355 === 13))
{var state_11354__$1 = state_11354;var statearr_11373_11396 = state_11354__$1;(statearr_11373_11396[2] = null);
(statearr_11373_11396[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11355 === 14))
{var inst_11347 = (state_11354[2]);var inst_11348 = cljs.core.async.close_BANG_.call(null,out);var state_11354__$1 = (function (){var statearr_11374 = state_11354;(statearr_11374[14] = inst_11347);
return statearr_11374;
})();var statearr_11375_11397 = state_11354__$1;(statearr_11375_11397[2] = inst_11348);
(statearr_11375_11397[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11355 === 15))
{var inst_11344 = (state_11354[2]);var state_11354__$1 = state_11354;var statearr_11376_11398 = state_11354__$1;(statearr_11376_11398[2] = inst_11344);
(statearr_11376_11398[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_11380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11380[0] = state_machine__5510__auto__);
(statearr_11380[1] = 1);
return statearr_11380;
});
var state_machine__5510__auto____1 = (function (state_11354){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_11354);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11381){if((e11381 instanceof Object))
{var ex__5513__auto__ = e11381;var statearr_11382_11399 = state_11354;(statearr_11382_11399[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11354);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11400 = state_11354;
state_11354 = G__11400;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11354){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11383 = f__5525__auto__.call(null);(statearr_11383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11384);
return statearr_11383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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

//# sourceMappingURL=async.js.map
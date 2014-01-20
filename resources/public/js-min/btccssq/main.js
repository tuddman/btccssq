// Compiled by ClojureScript 0.0-2138
goog.provide('btccssq.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('btccssq.util');
goog.require('domina.events');
goog.require('domina.events');
goog.require('cljs.reader');
goog.require('domina');
goog.require('domina');
goog.require('cljs.reader');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('btccssq.util');
btccssq.main.send = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
btccssq.main.receive = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
btccssq.main.alert_view = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
btccssq.main.ws_url = "ws://192.168.2.2:3001/async";
btccssq.main.ws = (new WebSocket(btccssq.main.ws_url));
btccssq.main.event_chan = (function event_chan(c,el,type){var writer = (function (p1__8584_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__8584_SHARP_);
});domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(el,type,writer);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$32,c,cljs.core.constant$keyword$33,(function (){return el.removeEventListener(type,writer);
})], null);
});
btccssq.main.my_name = (function my_name(){var name = domina.value(domina.css.sel.cljs$core$IFn$_invoke$arity$1("input#name").domina$DomContent$single_node$arity$1(null));if(cljs.core.truth_(clojure.string.blank_QMARK_(name)))
{return "Anonymous";
} else
{return name;
}
});
btccssq.main.make_sender = (function make_sender(){btccssq.main.event_chan(btccssq.main.send,domina.css.sel.cljs$core$IFn$_invoke$arity$1("input#send"),cljs.core.constant$keyword$34);
btccssq.main.event_chan(btccssq.main.send,domina.css.sel.cljs$core$IFn$_invoke$arity$1("input#message"),cljs.core.constant$keyword$35);
var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_8664){var state_val_8665 = (state_8664[1]);if((state_val_8665 === 1))
{var state_8664__$1 = state_8664;var statearr_8666_8685 = state_8664__$1;(statearr_8666_8685[2] = null);
(statearr_8666_8685[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8665 === 2))
{var state_8664__$1 = state_8664;if(true)
{var statearr_8667_8686 = state_8664__$1;(statearr_8667_8686[1] = 4);
} else
{var statearr_8668_8687 = state_8664__$1;(statearr_8668_8687[1] = 5);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_8665 === 3))
{var inst_8662 = (state_8664[2]);var state_8664__$1 = state_8664;return cljs.core.async.impl.ioc_helpers.return_chan(state_8664__$1,inst_8662);
} else
{if((state_val_8665 === 4))
{var state_8664__$1 = state_8664;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8664__$1,7,btccssq.main.send);
} else
{if((state_val_8665 === 5))
{var state_8664__$1 = state_8664;var statearr_8669_8688 = state_8664__$1;(statearr_8669_8688[2] = null);
(statearr_8669_8688[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8665 === 6))
{var inst_8660 = (state_8664[2]);var state_8664__$1 = state_8664;var statearr_8670_8689 = state_8664__$1;(statearr_8670_8689[2] = inst_8660);
(statearr_8670_8689[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8665 === 7))
{var inst_8638 = (state_8664[2]);var inst_8639 = btccssq.main.my_name();var inst_8640 = domina.css.sel.cljs$core$IFn$_invoke$arity$1("input#message");var inst_8641 = inst_8640.domina$DomContent$single_node$arity$1(null);var inst_8642 = domina.value(inst_8641);var inst_8643 = domina.events.event_type(inst_8638);var inst_8644 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8643,"click");var inst_8645 = domina.events.raw_event(inst_8638);var inst_8646 = inst_8645.keyCode;var inst_8647 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8646,13);var inst_8648 = (inst_8644) || (inst_8647);var state_8664__$1 = (function (){var statearr_8671 = state_8664;(statearr_8671[7] = inst_8639);
(statearr_8671[8] = inst_8642);
return statearr_8671;
})();if(cljs.core.truth_(inst_8648))
{var statearr_8672_8690 = state_8664__$1;(statearr_8672_8690[1] = 8);
} else
{var statearr_8673_8691 = state_8664__$1;(statearr_8673_8691[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_8665 === 8))
{var inst_8639 = (state_8664[7]);var inst_8642 = (state_8664[8]);var inst_8650 = [cljs.core.constant$keyword$36,cljs.core.constant$keyword$37];var inst_8651 = [inst_8642,inst_8639];var inst_8652 = (cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2(inst_8650,inst_8651) : cljs.core.PersistentHashMap.fromArrays.call(null,inst_8650,inst_8651));var inst_8653 = btccssq.main.ws.send(inst_8652);var state_8664__$1 = state_8664;var statearr_8674_8692 = state_8664__$1;(statearr_8674_8692[2] = inst_8653);
(statearr_8674_8692[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8665 === 9))
{var state_8664__$1 = state_8664;var statearr_8675_8693 = state_8664__$1;(statearr_8675_8693[2] = null);
(statearr_8675_8693[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8665 === 10))
{var inst_8656 = (state_8664[2]);var state_8664__$1 = (function (){var statearr_8676 = state_8664;(statearr_8676[9] = inst_8656);
return statearr_8676;
})();var statearr_8677_8694 = state_8664__$1;(statearr_8677_8694[2] = null);
(statearr_8677_8694[1] = 2);
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
var state_machine__5510__auto____0 = (function (){var statearr_8681 = [null,null,null,null,null,null,null,null,null,null];(statearr_8681[0] = state_machine__5510__auto__);
(statearr_8681[1] = 1);
return statearr_8681;
});
var state_machine__5510__auto____1 = (function (state_8664){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_8664);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e8682){if((e8682 instanceof Object))
{var ex__5513__auto__ = e8682;var statearr_8683_8695 = state_8664;(statearr_8683_8695[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_8664);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e8682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__8696 = state_8664;
state_8664 = G__8696;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_8664){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_8664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_8684 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_8684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_8684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
btccssq.main.msg_template = (function msg_template(data){var me = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(btccssq.main.my_name(),cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(data)))?" me":null);var ts = (btccssq.util.format_date.cljs$core$IFn$_invoke$arity$1 ? btccssq.util.format_date.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(data)) : btccssq.util.format_date.call(null,cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(data)));var name = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(data);var msg = cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(data);return [cljs.core.str("<div class=\"msg new"),cljs.core.str(me),cljs.core.str("\">"),cljs.core.str("<span class=\"time\">"),cljs.core.str(ts),cljs.core.str("</span><span class=\"name\">"),cljs.core.str(name),cljs.core.str("</span><span class=\"msg\">"),cljs.core.str(msg),cljs.core.str("</span></div>")].join('');
});
btccssq.main.messages = (function messages(){return domina.css.sel.cljs$core$IFn$_invoke$arity$1("div#received-msg-wrapper div#messages");
});
btccssq.main.add_message = (function add_message(){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_8756){var state_val_8757 = (state_8756[1]);if((state_val_8757 === 8))
{var inst_8748 = (state_8756[2]);var state_8756__$1 = (function (){var statearr_8758 = state_8756;(statearr_8758[7] = inst_8748);
return statearr_8758;
})();var statearr_8759_8773 = state_8756__$1;(statearr_8759_8773[2] = null);
(statearr_8759_8773[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8757 === 7))
{var inst_8738 = (state_8756[2]);var inst_8739 = inst_8738.data;var inst_8740 = cljs.reader.read_string(inst_8739);var inst_8741 = btccssq.main.msg_template(inst_8740);var inst_8742 = btccssq.main.messages();var inst_8743 = domina.insert_BANG_(inst_8742,inst_8741);var inst_8744 = btccssq.main.messages();var inst_8745 = domina.children(inst_8744);var inst_8746 = cljs.core.last(inst_8745);var state_8756__$1 = (function (){var statearr_8760 = state_8756;(statearr_8760[8] = inst_8743);
return statearr_8760;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8756__$1,8,btccssq.main.alert_view,inst_8746);
} else
{if((state_val_8757 === 6))
{var inst_8752 = (state_8756[2]);var state_8756__$1 = state_8756;var statearr_8761_8774 = state_8756__$1;(statearr_8761_8774[2] = inst_8752);
(statearr_8761_8774[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8757 === 5))
{var state_8756__$1 = state_8756;var statearr_8762_8775 = state_8756__$1;(statearr_8762_8775[2] = null);
(statearr_8762_8775[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8757 === 4))
{var state_8756__$1 = state_8756;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8756__$1,7,btccssq.main.receive);
} else
{if((state_val_8757 === 3))
{var inst_8754 = (state_8756[2]);var state_8756__$1 = state_8756;return cljs.core.async.impl.ioc_helpers.return_chan(state_8756__$1,inst_8754);
} else
{if((state_val_8757 === 2))
{var state_8756__$1 = state_8756;if(true)
{var statearr_8763_8776 = state_8756__$1;(statearr_8763_8776[1] = 4);
} else
{var statearr_8764_8777 = state_8756__$1;(statearr_8764_8777[1] = 5);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_8757 === 1))
{var state_8756__$1 = state_8756;var statearr_8765_8778 = state_8756__$1;(statearr_8765_8778[2] = null);
(statearr_8765_8778[1] = 2);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_8769 = [null,null,null,null,null,null,null,null,null];(statearr_8769[0] = state_machine__5510__auto__);
(statearr_8769[1] = 1);
return statearr_8769;
});
var state_machine__5510__auto____1 = (function (state_8756){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_8756);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e8770){if((e8770 instanceof Object))
{var ex__5513__auto__ = e8770;var statearr_8771_8779 = state_8756;(statearr_8771_8779[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_8756);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e8770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__8780 = state_8756;
state_8756 = G__8780;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_8756){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_8756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_8772 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_8772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_8772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
btccssq.main.highlight_new_message = (function highlight_new_message(){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_8823){var state_val_8824 = (state_8823[1]);if((state_val_8824 === 7))
{var inst_8813 = (state_8823[2]);var inst_8814 = (function (){var alert_msg = inst_8813;return ((function (alert_msg,inst_8813,state_val_8824){
return (function (){return domina.remove_class_BANG_(alert_msg,"new");
});
;})(alert_msg,inst_8813,state_val_8824))
})();var inst_8815 = setTimeout(inst_8814,200);var state_8823__$1 = (function (){var statearr_8825 = state_8823;(statearr_8825[7] = inst_8815);
return statearr_8825;
})();var statearr_8826_8839 = state_8823__$1;(statearr_8826_8839[2] = null);
(statearr_8826_8839[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8824 === 6))
{var inst_8819 = (state_8823[2]);var state_8823__$1 = state_8823;var statearr_8827_8840 = state_8823__$1;(statearr_8827_8840[2] = inst_8819);
(statearr_8827_8840[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8824 === 5))
{var state_8823__$1 = state_8823;var statearr_8828_8841 = state_8823__$1;(statearr_8828_8841[2] = null);
(statearr_8828_8841[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8824 === 4))
{var state_8823__$1 = state_8823;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8823__$1,7,btccssq.main.alert_view);
} else
{if((state_val_8824 === 3))
{var inst_8821 = (state_8823[2]);var state_8823__$1 = state_8823;return cljs.core.async.impl.ioc_helpers.return_chan(state_8823__$1,inst_8821);
} else
{if((state_val_8824 === 2))
{var state_8823__$1 = state_8823;if(true)
{var statearr_8829_8842 = state_8823__$1;(statearr_8829_8842[1] = 4);
} else
{var statearr_8830_8843 = state_8823__$1;(statearr_8830_8843[1] = 5);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_8824 === 1))
{var state_8823__$1 = state_8823;var statearr_8831_8844 = state_8823__$1;(statearr_8831_8844[2] = null);
(statearr_8831_8844[1] = 2);
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
var state_machine__5510__auto____0 = (function (){var statearr_8835 = [null,null,null,null,null,null,null,null];(statearr_8835[0] = state_machine__5510__auto__);
(statearr_8835[1] = 1);
return statearr_8835;
});
var state_machine__5510__auto____1 = (function (state_8823){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_8823);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e8836){if((e8836 instanceof Object))
{var ex__5513__auto__ = e8836;var statearr_8837_8845 = state_8823;(statearr_8837_8845[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_8823);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e8836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$18))
{{
var G__8846 = state_8823;
state_8823 = G__8846;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_8823){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_8823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_8838 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_8838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_8838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
btccssq.main.make_receiver = (function make_receiver(){btccssq.main.ws.onmessage = (function (msg){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(btccssq.main.receive,msg);
});
btccssq.main.add_message();
return btccssq.main.highlight_new_message();
});
btccssq.main.init_BANG_ = (function init_BANG_(){btccssq.main.make_sender();
return btccssq.main.make_receiver();
});
btccssq.main.on_load = window.onload = btccssq.main.init_BANG_;

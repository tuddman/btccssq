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
btccssq.main.send = cljs.core.async.chan.call(null);
btccssq.main.receive = cljs.core.async.chan.call(null);
btccssq.main.alert_view = cljs.core.async.chan.call(null);
btccssq.main.ws_url = "ws://192.168.2.2:3001/async";
btccssq.main.ws = (new WebSocket(btccssq.main.ws_url));
btccssq.main.event_chan = (function event_chan(c,el,type){var writer = (function (p1__16519_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__16519_SHARP_);
});domina.events.listen_BANG_.call(null,el,type,writer);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan","chan",1016956612),c,new cljs.core.Keyword(null,"unsubscribe","unsubscribe",1597185603),(function (){return el.removeEventListener(type,writer);
})], null);
});
btccssq.main.my_name = (function my_name(){var name = domina.value.call(null,domina.single_node.call(null,domina.css.sel.call(null,"input#name")));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,name)))
{return "Anonymous";
} else
{return name;
}
});
btccssq.main.make_sender = (function make_sender(){btccssq.main.event_chan.call(null,btccssq.main.send,domina.css.sel.call(null,"input#send"),new cljs.core.Keyword(null,"click","click",1108654330));
btccssq.main.event_chan.call(null,btccssq.main.send,domina.css.sel.call(null,"input#message"),new cljs.core.Keyword(null,"keypress","keypress",1530666166));
var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_16599){var state_val_16600 = (state_16599[1]);if((state_val_16600 === 1))
{var state_16599__$1 = state_16599;var statearr_16601_16620 = state_16599__$1;(statearr_16601_16620[2] = null);
(statearr_16601_16620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 2))
{var state_16599__$1 = state_16599;if(true)
{var statearr_16602_16621 = state_16599__$1;(statearr_16602_16621[1] = 4);
} else
{var statearr_16603_16622 = state_16599__$1;(statearr_16603_16622[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 3))
{var inst_16597 = (state_16599[2]);var state_16599__$1 = state_16599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16599__$1,inst_16597);
} else
{if((state_val_16600 === 4))
{var state_16599__$1 = state_16599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16599__$1,7,btccssq.main.send);
} else
{if((state_val_16600 === 5))
{var state_16599__$1 = state_16599;var statearr_16604_16623 = state_16599__$1;(statearr_16604_16623[2] = null);
(statearr_16604_16623[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 6))
{var inst_16595 = (state_16599[2]);var state_16599__$1 = state_16599;var statearr_16605_16624 = state_16599__$1;(statearr_16605_16624[2] = inst_16595);
(statearr_16605_16624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 7))
{var inst_16573 = (state_16599[2]);var inst_16574 = btccssq.main.my_name.call(null);var inst_16575 = domina.css.sel.call(null,"input#message");var inst_16576 = domina.single_node.call(null,inst_16575);var inst_16577 = domina.value.call(null,inst_16576);var inst_16578 = domina.events.event_type.call(null,inst_16573);var inst_16579 = cljs.core._EQ_.call(null,inst_16578,"click");var inst_16580 = domina.events.raw_event.call(null,inst_16573);var inst_16581 = inst_16580.keyCode;var inst_16582 = cljs.core._EQ_.call(null,inst_16581,13);var inst_16583 = (inst_16579) || (inst_16582);var state_16599__$1 = (function (){var statearr_16606 = state_16599;(statearr_16606[7] = inst_16577);
(statearr_16606[8] = inst_16574);
return statearr_16606;
})();if(cljs.core.truth_(inst_16583))
{var statearr_16607_16625 = state_16599__$1;(statearr_16607_16625[1] = 8);
} else
{var statearr_16608_16626 = state_16599__$1;(statearr_16608_16626[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 8))
{var inst_16577 = (state_16599[7]);var inst_16574 = (state_16599[8]);var inst_16585 = [new cljs.core.Keyword(null,"msg","msg",1014012659),new cljs.core.Keyword(null,"name","name",1017277949)];var inst_16586 = [inst_16577,inst_16574];var inst_16587 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16585,inst_16586);var inst_16588 = btccssq.main.ws.send(inst_16587);var state_16599__$1 = state_16599;var statearr_16609_16627 = state_16599__$1;(statearr_16609_16627[2] = inst_16588);
(statearr_16609_16627[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 9))
{var state_16599__$1 = state_16599;var statearr_16610_16628 = state_16599__$1;(statearr_16610_16628[2] = null);
(statearr_16610_16628[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 10))
{var inst_16591 = (state_16599[2]);var state_16599__$1 = (function (){var statearr_16611 = state_16599;(statearr_16611[9] = inst_16591);
return statearr_16611;
})();var statearr_16612_16629 = state_16599__$1;(statearr_16612_16629[2] = null);
(statearr_16612_16629[1] = 2);
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
var state_machine__5510__auto____0 = (function (){var statearr_16616 = [null,null,null,null,null,null,null,null,null,null];(statearr_16616[0] = state_machine__5510__auto__);
(statearr_16616[1] = 1);
return statearr_16616;
});
var state_machine__5510__auto____1 = (function (state_16599){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_16599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e16617){if((e16617 instanceof Object))
{var ex__5513__auto__ = e16617;var statearr_16618_16630 = state_16599;(statearr_16618_16630[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16631 = state_16599;
state_16599 = G__16631;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_16599){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_16599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_16619 = f__5525__auto__.call(null);(statearr_16619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_16619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});
btccssq.main.msg_template = (function msg_template(data){var me = ((cljs.core._EQ_.call(null,btccssq.main.my_name.call(null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(data)))?" me":null);var ts = btccssq.util.format_date.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536).cljs$core$IFn$_invoke$arity$1(data));var name = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(data);var msg = new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(data);return [cljs.core.str("<div class=\"msg new"),cljs.core.str(me),cljs.core.str("\">"),cljs.core.str("<span class=\"time\">"),cljs.core.str(ts),cljs.core.str("</span><span class=\"name\">"),cljs.core.str(name),cljs.core.str("</span><span class=\"msg\">"),cljs.core.str(msg),cljs.core.str("</span></div>")].join('');
});
btccssq.main.messages = (function messages(){return domina.css.sel.call(null,"div#received-msg-wrapper div#messages");
});
btccssq.main.add_message = (function add_message(){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_16691){var state_val_16692 = (state_16691[1]);if((state_val_16692 === 8))
{var inst_16683 = (state_16691[2]);var state_16691__$1 = (function (){var statearr_16693 = state_16691;(statearr_16693[7] = inst_16683);
return statearr_16693;
})();var statearr_16694_16708 = state_16691__$1;(statearr_16694_16708[2] = null);
(statearr_16694_16708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 7))
{var inst_16673 = (state_16691[2]);var inst_16674 = inst_16673.data;var inst_16675 = cljs.reader.read_string.call(null,inst_16674);var inst_16676 = btccssq.main.msg_template.call(null,inst_16675);var inst_16677 = btccssq.main.messages.call(null);var inst_16678 = domina.insert_BANG_.call(null,inst_16677,inst_16676);var inst_16679 = btccssq.main.messages.call(null);var inst_16680 = domina.children.call(null,inst_16679);var inst_16681 = cljs.core.last.call(null,inst_16680);var state_16691__$1 = (function (){var statearr_16695 = state_16691;(statearr_16695[8] = inst_16678);
return statearr_16695;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16691__$1,8,btccssq.main.alert_view,inst_16681);
} else
{if((state_val_16692 === 6))
{var inst_16687 = (state_16691[2]);var state_16691__$1 = state_16691;var statearr_16696_16709 = state_16691__$1;(statearr_16696_16709[2] = inst_16687);
(statearr_16696_16709[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 5))
{var state_16691__$1 = state_16691;var statearr_16697_16710 = state_16691__$1;(statearr_16697_16710[2] = null);
(statearr_16697_16710[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 4))
{var state_16691__$1 = state_16691;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16691__$1,7,btccssq.main.receive);
} else
{if((state_val_16692 === 3))
{var inst_16689 = (state_16691[2]);var state_16691__$1 = state_16691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16691__$1,inst_16689);
} else
{if((state_val_16692 === 2))
{var state_16691__$1 = state_16691;if(true)
{var statearr_16698_16711 = state_16691__$1;(statearr_16698_16711[1] = 4);
} else
{var statearr_16699_16712 = state_16691__$1;(statearr_16699_16712[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16692 === 1))
{var state_16691__$1 = state_16691;var statearr_16700_16713 = state_16691__$1;(statearr_16700_16713[2] = null);
(statearr_16700_16713[1] = 2);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_16704 = [null,null,null,null,null,null,null,null,null];(statearr_16704[0] = state_machine__5510__auto__);
(statearr_16704[1] = 1);
return statearr_16704;
});
var state_machine__5510__auto____1 = (function (state_16691){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_16691);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e16705){if((e16705 instanceof Object))
{var ex__5513__auto__ = e16705;var statearr_16706_16714 = state_16691;(statearr_16706_16714[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16691);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16715 = state_16691;
state_16691 = G__16715;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_16691){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_16691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_16707 = f__5525__auto__.call(null);(statearr_16707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_16707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});
btccssq.main.highlight_new_message = (function highlight_new_message(){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_16758){var state_val_16759 = (state_16758[1]);if((state_val_16759 === 7))
{var inst_16748 = (state_16758[2]);var inst_16749 = (function (){var alert_msg = inst_16748;return ((function (alert_msg,inst_16748,state_val_16759){
return (function (){return domina.remove_class_BANG_.call(null,alert_msg,"new");
});
;})(alert_msg,inst_16748,state_val_16759))
})();var inst_16750 = setTimeout(inst_16749,200);var state_16758__$1 = (function (){var statearr_16760 = state_16758;(statearr_16760[7] = inst_16750);
return statearr_16760;
})();var statearr_16761_16774 = state_16758__$1;(statearr_16761_16774[2] = null);
(statearr_16761_16774[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16759 === 6))
{var inst_16754 = (state_16758[2]);var state_16758__$1 = state_16758;var statearr_16762_16775 = state_16758__$1;(statearr_16762_16775[2] = inst_16754);
(statearr_16762_16775[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16759 === 5))
{var state_16758__$1 = state_16758;var statearr_16763_16776 = state_16758__$1;(statearr_16763_16776[2] = null);
(statearr_16763_16776[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16759 === 4))
{var state_16758__$1 = state_16758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16758__$1,7,btccssq.main.alert_view);
} else
{if((state_val_16759 === 3))
{var inst_16756 = (state_16758[2]);var state_16758__$1 = state_16758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16758__$1,inst_16756);
} else
{if((state_val_16759 === 2))
{var state_16758__$1 = state_16758;if(true)
{var statearr_16764_16777 = state_16758__$1;(statearr_16764_16777[1] = 4);
} else
{var statearr_16765_16778 = state_16758__$1;(statearr_16765_16778[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16759 === 1))
{var state_16758__$1 = state_16758;var statearr_16766_16779 = state_16758__$1;(statearr_16766_16779[2] = null);
(statearr_16766_16779[1] = 2);
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
var state_machine__5510__auto____0 = (function (){var statearr_16770 = [null,null,null,null,null,null,null,null];(statearr_16770[0] = state_machine__5510__auto__);
(statearr_16770[1] = 1);
return statearr_16770;
});
var state_machine__5510__auto____1 = (function (state_16758){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_16758);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e16771){if((e16771 instanceof Object))
{var ex__5513__auto__ = e16771;var statearr_16772_16780 = state_16758;(statearr_16772_16780[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16758);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16781 = state_16758;
state_16758 = G__16781;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_16758){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_16758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_16773 = f__5525__auto__.call(null);(statearr_16773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_16773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});
btccssq.main.make_receiver = (function make_receiver(){btccssq.main.ws.onmessage = (function (msg){return cljs.core.async.put_BANG_.call(null,btccssq.main.receive,msg);
});
btccssq.main.add_message.call(null);
return btccssq.main.highlight_new_message.call(null);
});
btccssq.main.init_BANG_ = (function init_BANG_(){btccssq.main.make_sender.call(null);
return btccssq.main.make_receiver.call(null);
});
btccssq.main.on_load = window.onload = btccssq.main.init_BANG_;

//# sourceMappingURL=main.js.map
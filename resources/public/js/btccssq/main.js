// Compiled by ClojureScript 0.0-2138
goog.provide('btccssq.main');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('domina.events');
goog.require('domina');
goog.require('ajax.core');
btccssq.main.widget = (function widget(data,owner){if(typeof btccssq.main.t8685 !== 'undefined')
{} else
{
/**
* @constructor
*/
btccssq.main.t8685 = (function (owner,data,widget,meta8686){
this.owner = owner;
this.data = data;
this.widget = widget;
this.meta8686 = meta8686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
btccssq.main.t8685.cljs$lang$type = true;
btccssq.main.t8685.cljs$lang$ctorStr = "btccssq.main/t8685";
btccssq.main.t8685.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opt__3973__auto__){return cljs.core._write.call(null,writer__3972__auto__,"btccssq.main/t8685");
});
btccssq.main.t8685.prototype.om$core$IRender$ = true;
btccssq.main.t8685.prototype.om$core$IRender$render$arity$1 = (function (this__4932__auto__){var self__ = this;
var this__4932__auto____$1 = this;return React.DOM.div(null,"Hello world!");
});
btccssq.main.t8685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8687){var self__ = this;
var _8687__$1 = this;return self__.meta8686;
});
btccssq.main.t8685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8687,meta8686__$1){var self__ = this;
var _8687__$1 = this;return (new btccssq.main.t8685(self__.owner,self__.data,self__.widget,meta8686__$1));
});
btccssq.main.__GT_t8685 = (function __GT_t8685(owner__$1,data__$1,widget__$1,meta8686){return (new btccssq.main.t8685(owner__$1,data__$1,widget__$1,meta8686));
});
}
return (new btccssq.main.t8685(owner,data,widget,null));
});
om.core.root.call(null,cljs.core.PersistentArrayMap.EMPTY,btccssq.main.widget,document.getElementById("some-id"));
btccssq.main.render_message = (function render_message(p__8688){var map__8690 = p__8688;var map__8690__$1 = ((cljs.core.seq_QMARK_.call(null,map__8690))?cljs.core.apply.call(null,cljs.core.hash_map,map__8690):map__8690);var user = cljs.core.get.call(null,map__8690__$1,new cljs.core.Keyword(null,"user","user",1017503549));var message = cljs.core.get.call(null,map__8690__$1,new cljs.core.Keyword(null,"message","message",1968829305));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),user], null),message," - ",user], null)], null);
});
btccssq.main.render_messages = (function render_messages(messages){var messages_div = domina.by_id.call(null,"messages");domina.destroy_children_BANG_.call(null,messages_div);
return domina.append_BANG_.call(null,messages_div,dommy.template.node.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977)], null),cljs.core.map.call(null,btccssq.main.render_message,messages))));
});
btccssq.main.add_message = (function add_message(_){return ajax.core.POST.call(null,"/add-message",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",1968829305),domina.value.call(null,domina.by_id.call(null,"message")),new cljs.core.Keyword(null,"user","user",1017503549),domina.value.call(null,domina.by_id.call(null,"user"))], null),new cljs.core.Keyword(null,"handler","handler",1706707644),btccssq.main.render_messages], null));
});
btccssq.main.init = (function init(){ajax.core.GET.call(null,"/messages",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",1706707644),btccssq.main.render_messages], null));
return domina.events.listen_BANG_.call(null,domina.by_id.call(null,"send"),new cljs.core.Keyword(null,"click","click",1108654330),btccssq.main.add_message);
});
goog.exportSymbol('btccssq.main.init', btccssq.main.init);

//# sourceMappingURL=main.js.map
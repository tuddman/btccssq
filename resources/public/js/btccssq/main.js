// Compiled by ClojureScript 0.0-2127
goog.provide('btccssq.main');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('ajax.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('domina.events');
goog.require('domina');
goog.require('ajax.core');
btccssq.main.render_message = (function render_message(p__7110){var map__7112 = p__7110;var map__7112__$1 = ((cljs.core.seq_QMARK_.call(null,map__7112))?cljs.core.apply.call(null,cljs.core.hash_map,map__7112):map__7112);var user = cljs.core.get.call(null,map__7112__$1,new cljs.core.Keyword(null,"user","user",1017503549));var message = cljs.core.get.call(null,map__7112__$1,new cljs.core.Keyword(null,"message","message",1968829305));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),user], null),message," - ",user], null)], null);
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
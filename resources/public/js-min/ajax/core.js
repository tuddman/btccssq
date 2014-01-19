// Compiled by ClojureScript 0.0-2138
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri.QueryData');
goog.require('goog.events');
goog.require('goog.net.XhrManager');
goog.require('cljs.reader');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.Uri.QueryData');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.structs');
goog.require('cljs.reader');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.Uri');
ajax.core.AjaxImpl = (function (){var obj9530 = {};return obj9530;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__3397__auto__ = this$;if(and__3397__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__3397__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3409__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4030__auto__)]);if(or__3409__auto__)
{return or__3409__auto__;
} else
{var or__3409__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__3409__auto____$1)
{return or__3409__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__9531){var map__9532 = p__9531;var map__9532__$1 = ((cljs.core.seq_QMARK_(map__9532))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9532):map__9532);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9532__$1,cljs.core.constant$keyword$71);var this$__$1 = this;var G__9533 = this$__$1;goog.events.listen(G__9533,goog.net.EventType.COMPLETE,handler);
G__9533.send(uri,method,body,headers,timeout);
return G__9533;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__9534){var map__9535 = p__9534;var map__9535__$1 = ((cljs.core.seq_QMARK_(map__9535))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9535):map__9535);var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9535__$1,cljs.core.constant$keyword$72);var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9535__$1,cljs.core.constant$keyword$73);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9535__$1,cljs.core.constant$keyword$71);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9535__$1,cljs.core.constant$keyword$74);var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,201,202,204,205,206], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string(xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$75,ajax.core.read_edn,cljs.core.constant$keyword$76,"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,cljs.core.pr_str,cljs.core.constant$keyword$78,"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js(params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,ajax.core.params_to_str,cljs.core.constant$keyword$78,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$75,ajax.core.read_text,cljs.core.constant$keyword$76,"raw text"], null);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,ajax.core.write_json,cljs.core.constant$keyword$78,"application/json"], null);
});
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should use this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function json_response_format(p__9536){var map__9538 = p__9536;var map__9538__$1 = ((cljs.core.seq_QMARK_(map__9538))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9538):map__9538);var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9538__$1,cljs.core.constant$keyword$79);var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9538__$1,cljs.core.constant$keyword$80);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$75,(function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$66,keywords_QMARK_], 0));
}),cljs.core.constant$keyword$76,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = xhrio.getResponseHeader("Content-Type");var format = (cljs.core.truth_((function (){var and__3397__auto__ = ct;if(cljs.core.truth_(and__3397__auto__))
{return (ct.indexOf("json") >= 0);
} else
{return and__3397__auto__;
}
})())?ajax.core.json_response_format(cljs.core.PersistentArrayMap.EMPTY):ajax.core.edn_response_format());return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(format,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76], null),(function (p1__9539_SHARP_){return [cljs.core.str(p1__9539_SHARP_),cljs.core.str(" (default)")].join('');
}));
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(format,cljs.core.constant$keyword$77);
});
ajax.core.codec = (function codec(request_format,p__9540){var map__9542 = p__9540;var map__9542__$1 = ((cljs.core.seq_QMARK_(map__9542))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9542):map__9542);var response_format = map__9542__$1;var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9542__$1,cljs.core.constant$keyword$76);var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9542__$1,cljs.core.constant$keyword$75);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request_format,cljs.core.constant$keyword$75,read,cljs.core.array_seq([cljs.core.constant$keyword$76,description], 0));
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return ajax.core.codec(ajax.core.url_request_format(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$75,format,cljs.core.constant$keyword$76,"custom"], null));
} else
{if(cljs.core.constant$keyword$60)
{throw (new Error([cljs.core.str("unrecognized format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__9543,xhrio){var map__9545 = p__9543;var map__9545__$1 = ((cljs.core.seq_QMARK_(map__9545))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9545):map__9545);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9545__$1,cljs.core.constant$keyword$76);var response = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$81,status,cljs.core.constant$keyword$82,null], null);var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$83,status_text,cljs.core.array_seq([cljs.core.constant$keyword$84,true,cljs.core.constant$keyword$85,xhrio.getResponseText()], 0));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return parse_error;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$83,xhrio.getStatusText(),cljs.core.array_seq([cljs.core.constant$keyword$86,parse_error], 0));
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();var format__$1 = (cljs.core.truth_(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(format))?format:(get_default_format.cljs$core$IFn$_invoke$arity$1 ? get_default_format.cljs$core$IFn$_invoke$arity$1(xhrio) : get_default_format.call(null,xhrio)));var parse = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(xhrio) : parse.call(null,xhrio));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$81,status,cljs.core.constant$keyword$83,xhrio.getStatusText(),cljs.core.constant$keyword$82,response__$1], null)], null);
}
}catch (e9549){if((e9549 instanceof Object))
{var e = e9549;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else
{if(cljs.core.constant$keyword$60)
{throw e9549;
} else
{return null;
}
}
}}catch (e9548){if((e9548 instanceof Object))
{var e = e9548;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$81,0,cljs.core.constant$keyword$83,e.message,cljs.core.constant$keyword$82,null], null)], null);
} else
{if(cljs.core.constant$keyword$60)
{throw e9548;
} else
{return null;
}
}
}});
ajax.core.no_format = (function no_format(xhrio){throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){if(cljs.core.truth_(params))
{return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str(params))].join('');
} else
{return uri;
}
});
ajax.core.process_inputs = (function process_inputs(uri,method,p__9550,p__9551){var map__9555 = p__9550;var map__9555__$1 = ((cljs.core.seq_QMARK_(map__9555))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9555):map__9555);var format = map__9555__$1;var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9555__$1,cljs.core.constant$keyword$78);var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9555__$1,cljs.core.constant$keyword$77);var map__9556 = p__9551;var map__9556__$1 = ((cljs.core.seq_QMARK_(map__9556))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9556):map__9556);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9556__$1,cljs.core.constant$keyword$87);var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9556__$1,cljs.core.constant$keyword$88);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers], null);
} else
{var map__9557 = format;var map__9557__$1 = ((cljs.core.seq_QMARK_(map__9557))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9557):map__9557);var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9557__$1,cljs.core.constant$keyword$78);var write__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9557__$1,cljs.core.constant$keyword$77);var body = (write__$1.cljs$core$IFn$_invoke$arity$1 ? write__$1.cljs$core$IFn$_invoke$arity$1(params) : write__$1.call(null,params));var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3409__auto__ = headers;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2], 0));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function normalize_method(method){if((method instanceof cljs.core.Keyword))
{return clojure.string.upper_case(cljs.core.name(method));
} else
{return method;
}
});
ajax.core.base_handler = (function base_handler(format,p__9558){var map__9560 = p__9558;var map__9560__$1 = ((cljs.core.seq_QMARK_(map__9560))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9560):map__9560);var get_default_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9560__$1,cljs.core.constant$keyword$89);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9560__$1,cljs.core.constant$keyword$90);return (function (xhrio){return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(ajax.core.interpret_response(format,xhrio,(function (){var or__3409__auto__ = get_default_format;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return ajax.core.no_format;
}
})())) : handler.call(null,ajax.core.interpret_response(format,xhrio,(function (){var or__3409__auto__ = get_default_format;if(cljs.core.truth_(or__3409__auto__))
{return or__3409__auto__;
} else
{return ajax.core.no_format;
}
})())));
});
});
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__3 = (function (uri,method,opts){return ajax_request.cljs$core$IFn$_invoke$arity$4(uri,method,opts,(new goog.net.XhrIo()));
});
var ajax_request__4 = (function (uri,method,p__9561,js_ajax){var map__9564 = p__9561;var map__9564__$1 = ((cljs.core.seq_QMARK_(map__9564))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9564):map__9564);var opts = map__9564__$1;var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9564__$1,cljs.core.constant$keyword$91);var format__$1 = ajax.core.get_format(format);var method__$1 = ajax.core.normalize_method(method);var vec__9565 = ajax.core.process_inputs(uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9565,0,null);var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9565,1,null);var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9565,2,null);var handler = ajax.core.base_handler(format__$1,opts);return ajax.core._js_ajax_request(js_ajax,uri__$1,method__$1,body,cljs.core.clj__GT_js(headers),handler,opts);
});
ajax_request = function(uri,method,p__9561,js_ajax){
switch(arguments.length){
case 3:
return ajax_request__3.call(this,uri,method,p__9561);
case 4:
return ajax_request__4.call(this,uri,method,p__9561,js_ajax);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax_request.cljs$core$IFn$_invoke$arity$3 = ajax_request__3;
ajax_request.cljs$core$IFn$_invoke$arity$4 = ajax_request__4;
return ajax_request;
})()
;
ajax.core.json_format = (function json_format(format_params){return ajax.core.codec(ajax.core.json_request_format(),ajax.core.json_response_format(format_params));
});
ajax.core.edn_format = (function edn_format(){return ajax.core.codec(ajax.core.edn_request_format(),ajax.core.edn_response_format());
});
ajax.core.raw_format = (function raw_format(){return ajax.core.codec(ajax.core.url_request_format(),ajax.core.raw_response_format());
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__9567 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$92,G__9567))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$93,G__9567))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$94,G__9567))
{return ajax.core.edn_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$95,G__9567))
{return ajax.core.json_request_format();
} else
{if(cljs.core.constant$keyword$60)
{throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){var G__9569 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$93,G__9569))
{return ajax.core.raw_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$94,G__9569))
{return ajax.core.edn_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$95,G__9569))
{return ajax.core.json_response_format(format_params);
} else
{if(cljs.core.constant$keyword$60)
{return null;
} else
{return null;
}
}
}
}
});
ajax.core.transform_handler = (function transform_handler(p__9570){var map__9575 = p__9570;var map__9575__$1 = ((cljs.core.seq_QMARK_(map__9575))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9575):map__9575);var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9575__$1,cljs.core.constant$keyword$96);var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9575__$1,cljs.core.constant$keyword$97);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9575__$1,cljs.core.constant$keyword$90);return (function easy_handler(p__9576){var vec__9578 = p__9576;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9578,0,null);var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9578,1,null);var temp__4090__auto___9579 = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4090__auto___9579))
{var h_9580 = temp__4090__auto___9579;(h_9580.cljs$core$IFn$_invoke$arity$1 ? h_9580.cljs$core$IFn$_invoke$arity$1(result) : h_9580.call(null,result));
} else
{}
if(cljs.core.fn_QMARK_(finally$))
{return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else
{return null;
}
});
});
ajax.core.transform_format = (function transform_format(p__9581){var map__9583 = p__9581;var map__9583__$1 = ((cljs.core.seq_QMARK_(map__9583))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9583):map__9583);var opts = map__9583__$1;var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9583__$1,cljs.core.constant$keyword$98);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9583__$1,cljs.core.constant$keyword$91);var rf = ajax.core.keyword_response_format(response_format,opts);if((format == null))
{return ajax.core.codec(ajax.core.edn_request_format(),rf);
} else
{if((format instanceof cljs.core.Keyword))
{return ajax.core.codec(ajax.core.keyword_request_format(format,opts),rf);
} else
{if(cljs.core.constant$keyword$60)
{return format;
} else
{return null;
}
}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$90,ajax.core.transform_handler(opts),cljs.core.array_seq([cljs.core.constant$keyword$91,ajax.core.transform_format(opts),cljs.core.constant$keyword$89,ajax.core.get_default_format], 0));
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the deserialized
* response
* :error-handler - the handler function for errors, should accept a map
* with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,p__9584){var vec__9586 = p__9584;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9586,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"GET",ajax.core.transform_opts(opts));
};
var GET = function (uri,var_args){
var p__9584 = null;if (arguments.length > 1) {
  p__9584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__9584);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__9587){
var uri = cljs.core.first(arglist__9587);
var p__9584 = cljs.core.rest(arglist__9587);
return GET__delegate(uri,p__9584);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the deserialized
* response
* :error-handler - the handler function for errors, should accept a map
* with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,p__9588){var vec__9590 = p__9588;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9590,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"PUT",ajax.core.transform_opts(opts));
};
var PUT = function (uri,var_args){
var p__9588 = null;if (arguments.length > 1) {
  p__9588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__9588);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__9591){
var uri = cljs.core.first(arglist__9591);
var p__9588 = cljs.core.rest(arglist__9591);
return PUT__delegate(uri,p__9588);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the deserialized
* response
* :error-handler - the handler function for errors, should accept a map
* with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,p__9592){var vec__9594 = p__9592;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9594,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"POST",ajax.core.transform_opts(opts));
};
var POST = function (uri,var_args){
var p__9592 = null;if (arguments.length > 1) {
  p__9592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__9592);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__9595){
var uri = cljs.core.first(arglist__9595);
var p__9592 = cljs.core.rest(arglist__9595);
return POST__delegate(uri,p__9592);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;

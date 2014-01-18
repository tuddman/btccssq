// Compiled by ClojureScript 0.0-2127
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
ajax.core.AjaxImpl = (function (){var obj13876 = {};return obj13876;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__3385__auto__ = this$;if(and__3385__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__3385__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__4005__auto__ = (((this$ == null))?null:this$);return (function (){var or__3397__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4005__auto__)]);if(or__3397__auto__)
{return or__3397__auto__;
} else
{var or__3397__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__3397__auto____$1)
{return or__3397__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__13877){var map__13878 = p__13877;var map__13878__$1 = ((cljs.core.seq_QMARK_(map__13878))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13878):map__13878);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13878__$1,cljs.core.constant$keyword$70);var this$__$1 = this;var G__13879 = this$__$1;goog.events.listen(G__13879,goog.net.EventType.COMPLETE,handler);
G__13879.send(uri,method,body,headers,timeout);
return G__13879;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__13880){var map__13881 = p__13880;var map__13881__$1 = ((cljs.core.seq_QMARK_(map__13881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13881):map__13881);var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13881__$1,cljs.core.constant$keyword$71);var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13881__$1,cljs.core.constant$keyword$72);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13881__$1,cljs.core.constant$keyword$70);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13881__$1,cljs.core.constant$keyword$73);var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,201,202,204,205,206], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string(xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,ajax.core.read_edn,cljs.core.constant$keyword$75,"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.pr_str,cljs.core.constant$keyword$77,"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js(params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,ajax.core.params_to_str,cljs.core.constant$keyword$77,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,ajax.core.read_text,cljs.core.constant$keyword$75,"raw text"], null);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,ajax.core.write_json,cljs.core.constant$keyword$77,"application/json"], null);
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
ajax.core.json_response_format = (function json_response_format(p__13882){var map__13884 = p__13882;var map__13884__$1 = ((cljs.core.seq_QMARK_(map__13884))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13884):map__13884);var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13884__$1,cljs.core.constant$keyword$78);var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13884__$1,cljs.core.constant$keyword$79);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,(function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$65,keywords_QMARK_], 0));
}),cljs.core.constant$keyword$75,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = xhrio.getResponseHeader("Content-Type");var format = (cljs.core.truth_((function (){var and__3385__auto__ = ct;if(cljs.core.truth_(and__3385__auto__))
{return (ct.indexOf("json") >= 0);
} else
{return and__3385__auto__;
}
})())?ajax.core.json_response_format(cljs.core.PersistentArrayMap.EMPTY):ajax.core.edn_response_format());return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(format,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75], null),(function (p1__13885_SHARP_){return [cljs.core.str(p1__13885_SHARP_),cljs.core.str(" (default)")].join('');
}));
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(format,cljs.core.constant$keyword$76);
});
ajax.core.codec = (function codec(request_format,p__13886){var map__13888 = p__13886;var map__13888__$1 = ((cljs.core.seq_QMARK_(map__13888))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13888):map__13888);var response_format = map__13888__$1;var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13888__$1,cljs.core.constant$keyword$75);var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13888__$1,cljs.core.constant$keyword$74);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request_format,cljs.core.constant$keyword$74,read,cljs.core.array_seq([cljs.core.constant$keyword$75,description], 0));
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return ajax.core.codec(ajax.core.url_request_format(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,format,cljs.core.constant$keyword$75,"custom"], null));
} else
{if(cljs.core.constant$keyword$59)
{throw (new Error([cljs.core.str("unrecognized format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__13889,xhrio){var map__13891 = p__13889;var map__13891__$1 = ((cljs.core.seq_QMARK_(map__13891))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13891):map__13891);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13891__$1,cljs.core.constant$keyword$75);var response = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$80,status,cljs.core.constant$keyword$81,null], null);var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$82,status_text,cljs.core.array_seq([cljs.core.constant$keyword$83,true,cljs.core.constant$keyword$84,xhrio.getResponseText()], 0));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return parse_error;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$82,xhrio.getStatusText(),cljs.core.array_seq([cljs.core.constant$keyword$85,parse_error], 0));
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();var format__$1 = (cljs.core.truth_(cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(format))?format:(get_default_format.cljs$core$IFn$_invoke$arity$1 ? get_default_format.cljs$core$IFn$_invoke$arity$1(xhrio) : get_default_format.call(null,xhrio)));var parse = cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(xhrio) : parse.call(null,xhrio));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,status,cljs.core.constant$keyword$82,xhrio.getStatusText(),cljs.core.constant$keyword$81,response__$1], null)], null);
}
}catch (e13895){if((e13895 instanceof Object))
{var e = e13895;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else
{if(cljs.core.constant$keyword$59)
{throw e13895;
} else
{return null;
}
}
}}catch (e13894){if((e13894 instanceof Object))
{var e = e13894;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,0,cljs.core.constant$keyword$82,e.message,cljs.core.constant$keyword$81,null], null)], null);
} else
{if(cljs.core.constant$keyword$59)
{throw e13894;
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
ajax.core.process_inputs = (function process_inputs(uri,method,p__13896,p__13897){var map__13901 = p__13896;var map__13901__$1 = ((cljs.core.seq_QMARK_(map__13901))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13901):map__13901);var format = map__13901__$1;var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13901__$1,cljs.core.constant$keyword$77);var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13901__$1,cljs.core.constant$keyword$76);var map__13902 = p__13897;var map__13902__$1 = ((cljs.core.seq_QMARK_(map__13902))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13902):map__13902);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,cljs.core.constant$keyword$86);var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13902__$1,cljs.core.constant$keyword$87);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers], null);
} else
{var map__13903 = format;var map__13903__$1 = ((cljs.core.seq_QMARK_(map__13903))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13903):map__13903);var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,cljs.core.constant$keyword$77);var write__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13903__$1,cljs.core.constant$keyword$76);var body = (write__$1.cljs$core$IFn$_invoke$arity$1 ? write__$1.cljs$core$IFn$_invoke$arity$1(params) : write__$1.call(null,params));var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3397__auto__ = headers;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
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
ajax.core.base_handler = (function base_handler(format,p__13904){var map__13906 = p__13904;var map__13906__$1 = ((cljs.core.seq_QMARK_(map__13906))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13906):map__13906);var get_default_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13906__$1,cljs.core.constant$keyword$88);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13906__$1,cljs.core.constant$keyword$89);return (function (xhrio){return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(ajax.core.interpret_response(format,xhrio,(function (){var or__3397__auto__ = get_default_format;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
} else
{return ajax.core.no_format;
}
})())) : handler.call(null,ajax.core.interpret_response(format,xhrio,(function (){var or__3397__auto__ = get_default_format;if(cljs.core.truth_(or__3397__auto__))
{return or__3397__auto__;
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
var ajax_request__4 = (function (uri,method,p__13907,js_ajax){var map__13910 = p__13907;var map__13910__$1 = ((cljs.core.seq_QMARK_(map__13910))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13910):map__13910);var opts = map__13910__$1;var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13910__$1,cljs.core.constant$keyword$90);var format__$1 = ajax.core.get_format(format);var method__$1 = ajax.core.normalize_method(method);var vec__13911 = ajax.core.process_inputs(uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13911,0,null);var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13911,1,null);var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13911,2,null);var handler = ajax.core.base_handler(format__$1,opts);return ajax.core._js_ajax_request(js_ajax,uri__$1,method__$1,body,cljs.core.clj__GT_js(headers),handler,opts);
});
ajax_request = function(uri,method,p__13907,js_ajax){
switch(arguments.length){
case 3:
return ajax_request__3.call(this,uri,method,p__13907);
case 4:
return ajax_request__4.call(this,uri,method,p__13907,js_ajax);
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
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__13913 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$91,G__13913))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$92,G__13913))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$93,G__13913))
{return ajax.core.edn_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$94,G__13913))
{return ajax.core.json_request_format();
} else
{if(cljs.core.constant$keyword$59)
{throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){var G__13915 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$92,G__13915))
{return ajax.core.raw_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$93,G__13915))
{return ajax.core.edn_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$94,G__13915))
{return ajax.core.json_response_format(format_params);
} else
{if(cljs.core.constant$keyword$59)
{return null;
} else
{return null;
}
}
}
}
});
ajax.core.transform_handler = (function transform_handler(p__13916){var map__13921 = p__13916;var map__13921__$1 = ((cljs.core.seq_QMARK_(map__13921))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13921):map__13921);var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13921__$1,cljs.core.constant$keyword$95);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13921__$1,cljs.core.constant$keyword$89);return (function easy_handler(p__13922){var vec__13924 = p__13922;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13924,0,null);var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13924,1,null);var temp__4090__auto__ = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4090__auto__))
{var h = temp__4090__auto__;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(result) : h.call(null,result));
} else
{return null;
}
});
});
ajax.core.transform_format = (function transform_format(p__13925){var map__13927 = p__13925;var map__13927__$1 = ((cljs.core.seq_QMARK_(map__13927))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13927):map__13927);var opts = map__13927__$1;var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13927__$1,cljs.core.constant$keyword$96);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13927__$1,cljs.core.constant$keyword$90);var rf = ajax.core.keyword_response_format(response_format,opts);if((format == null))
{return ajax.core.codec(ajax.core.edn_request_format(),rf);
} else
{if((format instanceof cljs.core.Keyword))
{return ajax.core.codec(ajax.core.keyword_request_format(format,opts),rf);
} else
{if(cljs.core.constant$keyword$59)
{return format;
} else
{return null;
}
}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$89,ajax.core.transform_handler(opts),cljs.core.array_seq([cljs.core.constant$keyword$90,ajax.core.transform_format(opts),cljs.core.constant$keyword$88,ajax.core.get_default_format], 0));
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
var GET__delegate = function (uri,p__13928){var vec__13930 = p__13928;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13930,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"GET",ajax.core.transform_opts(opts));
};
var GET = function (uri,var_args){
var p__13928 = null;if (arguments.length > 1) {
  p__13928 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__13928);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__13931){
var uri = cljs.core.first(arglist__13931);
var p__13928 = cljs.core.rest(arglist__13931);
return GET__delegate(uri,p__13928);
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
var PUT__delegate = function (uri,p__13932){var vec__13934 = p__13932;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13934,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"PUT",ajax.core.transform_opts(opts));
};
var PUT = function (uri,var_args){
var p__13932 = null;if (arguments.length > 1) {
  p__13932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__13932);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__13935){
var uri = cljs.core.first(arglist__13935);
var p__13932 = cljs.core.rest(arglist__13935);
return PUT__delegate(uri,p__13932);
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
var POST__delegate = function (uri,p__13936){var vec__13938 = p__13936;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13938,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"POST",ajax.core.transform_opts(opts));
};
var POST = function (uri,var_args){
var p__13936 = null;if (arguments.length > 1) {
  p__13936 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__13936);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__13939){
var uri = cljs.core.first(arglist__13939);
var p__13936 = cljs.core.rest(arglist__13939);
return POST__delegate(uri,p__13936);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;

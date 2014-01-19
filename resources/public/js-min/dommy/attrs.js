// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3397__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3397__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3397__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_(class_name,class$,i))
{return i;
} else
{{
var G__10022 = (i + class$.length);
start_from = G__10022;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index(class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var classes__$1 = clojure.string.trim(cljs.core.name(classes));if(cljs.core.seq(classes__$1))
{var temp__4090__auto___10047 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___10047))
{var class_list_10048 = temp__4090__auto___10047;var seq__10035_10049 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__10036_10050 = null;var count__10037_10051 = 0;var i__10038_10052 = 0;while(true){
if((i__10038_10052 < count__10037_10051))
{var class_10053 = chunk__10036_10050.cljs$core$IIndexed$_nth$arity$2(null,i__10038_10052);class_list_10048.add(class_10053);
{
var G__10054 = seq__10035_10049;
var G__10055 = chunk__10036_10050;
var G__10056 = count__10037_10051;
var G__10057 = (i__10038_10052 + 1);
seq__10035_10049 = G__10054;
chunk__10036_10050 = G__10055;
count__10037_10051 = G__10056;
i__10038_10052 = G__10057;
continue;
}
} else
{var temp__4092__auto___10058 = cljs.core.seq(seq__10035_10049);if(temp__4092__auto___10058)
{var seq__10035_10059__$1 = temp__4092__auto___10058;if(cljs.core.chunked_seq_QMARK_(seq__10035_10059__$1))
{var c__4151__auto___10060 = cljs.core.chunk_first(seq__10035_10059__$1);{
var G__10061 = cljs.core.chunk_rest(seq__10035_10059__$1);
var G__10062 = c__4151__auto___10060;
var G__10063 = cljs.core.count(c__4151__auto___10060);
var G__10064 = 0;
seq__10035_10049 = G__10061;
chunk__10036_10050 = G__10062;
count__10037_10051 = G__10063;
i__10038_10052 = G__10064;
continue;
}
} else
{var class_10065 = cljs.core.first(seq__10035_10059__$1);class_list_10048.add(class_10065);
{
var G__10066 = cljs.core.next(seq__10035_10059__$1);
var G__10067 = null;
var G__10068 = 0;
var G__10069 = 0;
seq__10035_10049 = G__10066;
chunk__10036_10050 = G__10067;
count__10037_10051 = G__10068;
i__10038_10052 = G__10069;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_10070 = elem__$1.className;var seq__10039_10071 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__10040_10072 = null;var count__10041_10073 = 0;var i__10042_10074 = 0;while(true){
if((i__10042_10074 < count__10041_10073))
{var class_10075 = chunk__10040_10072.cljs$core$IIndexed$_nth$arity$2(null,i__10042_10074);if(cljs.core.truth_(dommy.attrs.class_index(class_name_10070,class_10075)))
{} else
{elem__$1.className = (((class_name_10070 === ""))?class_10075:[cljs.core.str(class_name_10070),cljs.core.str(" "),cljs.core.str(class_10075)].join(''));
}
{
var G__10076 = seq__10039_10071;
var G__10077 = chunk__10040_10072;
var G__10078 = count__10041_10073;
var G__10079 = (i__10042_10074 + 1);
seq__10039_10071 = G__10076;
chunk__10040_10072 = G__10077;
count__10041_10073 = G__10078;
i__10042_10074 = G__10079;
continue;
}
} else
{var temp__4092__auto___10080 = cljs.core.seq(seq__10039_10071);if(temp__4092__auto___10080)
{var seq__10039_10081__$1 = temp__4092__auto___10080;if(cljs.core.chunked_seq_QMARK_(seq__10039_10081__$1))
{var c__4151__auto___10082 = cljs.core.chunk_first(seq__10039_10081__$1);{
var G__10083 = cljs.core.chunk_rest(seq__10039_10081__$1);
var G__10084 = c__4151__auto___10082;
var G__10085 = cljs.core.count(c__4151__auto___10082);
var G__10086 = 0;
seq__10039_10071 = G__10083;
chunk__10040_10072 = G__10084;
count__10041_10073 = G__10085;
i__10042_10074 = G__10086;
continue;
}
} else
{var class_10087 = cljs.core.first(seq__10039_10081__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_10070,class_10087)))
{} else
{elem__$1.className = (((class_name_10070 === ""))?class_10087:[cljs.core.str(class_name_10070),cljs.core.str(" "),cljs.core.str(class_10087)].join(''));
}
{
var G__10088 = cljs.core.next(seq__10039_10081__$1);
var G__10089 = null;
var G__10090 = 0;
var G__10091 = 0;
seq__10039_10071 = G__10088;
chunk__10040_10072 = G__10089;
count__10041_10073 = G__10090;
i__10042_10074 = G__10091;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__10092__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10043_10093 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__10044_10094 = null;var count__10045_10095 = 0;var i__10046_10096 = 0;while(true){
if((i__10046_10096 < count__10045_10095))
{var c_10097 = chunk__10044_10094.cljs$core$IIndexed$_nth$arity$2(null,i__10046_10096);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_10097);
{
var G__10098 = seq__10043_10093;
var G__10099 = chunk__10044_10094;
var G__10100 = count__10045_10095;
var G__10101 = (i__10046_10096 + 1);
seq__10043_10093 = G__10098;
chunk__10044_10094 = G__10099;
count__10045_10095 = G__10100;
i__10046_10096 = G__10101;
continue;
}
} else
{var temp__4092__auto___10102 = cljs.core.seq(seq__10043_10093);if(temp__4092__auto___10102)
{var seq__10043_10103__$1 = temp__4092__auto___10102;if(cljs.core.chunked_seq_QMARK_(seq__10043_10103__$1))
{var c__4151__auto___10104 = cljs.core.chunk_first(seq__10043_10103__$1);{
var G__10105 = cljs.core.chunk_rest(seq__10043_10103__$1);
var G__10106 = c__4151__auto___10104;
var G__10107 = cljs.core.count(c__4151__auto___10104);
var G__10108 = 0;
seq__10043_10093 = G__10105;
chunk__10044_10094 = G__10106;
count__10045_10095 = G__10107;
i__10046_10096 = G__10108;
continue;
}
} else
{var c_10109 = cljs.core.first(seq__10043_10103__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_10109);
{
var G__10110 = cljs.core.next(seq__10043_10103__$1);
var G__10111 = null;
var G__10112 = 0;
var G__10113 = 0;
seq__10043_10093 = G__10110;
chunk__10044_10094 = G__10111;
count__10045_10095 = G__10112;
i__10046_10096 = G__10113;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__10092 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10092__delegate.call(this,elem,classes,more_classes);};
G__10092.cljs$lang$maxFixedArity = 2;
G__10092.cljs$lang$applyTo = (function (arglist__10114){
var elem = cljs.core.first(arglist__10114);
arglist__10114 = cljs.core.next(arglist__10114);
var classes = cljs.core.first(arglist__10114);
var more_classes = cljs.core.rest(arglist__10114);
return G__10092__delegate(elem,classes,more_classes);
});
G__10092.cljs$core$IFn$_invoke$arity$variadic = G__10092__delegate;
return G__10092;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index(class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__10115 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__10115;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___10124 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___10124))
{var class_list_10125 = temp__4090__auto___10124;class_list_10125.remove(class$__$1);
} else
{var class_name_10126 = elem__$1.className;var new_class_name_10127 = dommy.attrs.remove_class_str(class_name_10126,class$__$1);if((class_name_10126 === new_class_name_10127))
{} else
{elem__$1.className = new_class_name_10127;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__10128__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10120 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__10121 = null;var count__10122 = 0;var i__10123 = 0;while(true){
if((i__10123 < count__10122))
{var c = chunk__10121.cljs$core$IIndexed$_nth$arity$2(null,i__10123);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__10129 = seq__10120;
var G__10130 = chunk__10121;
var G__10131 = count__10122;
var G__10132 = (i__10123 + 1);
seq__10120 = G__10129;
chunk__10121 = G__10130;
count__10122 = G__10131;
i__10123 = G__10132;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10120);if(temp__4092__auto__)
{var seq__10120__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10120__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__10120__$1);{
var G__10133 = cljs.core.chunk_rest(seq__10120__$1);
var G__10134 = c__4151__auto__;
var G__10135 = cljs.core.count(c__4151__auto__);
var G__10136 = 0;
seq__10120 = G__10133;
chunk__10121 = G__10134;
count__10122 = G__10135;
i__10123 = G__10136;
continue;
}
} else
{var c = cljs.core.first(seq__10120__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__10137 = cljs.core.next(seq__10120__$1);
var G__10138 = null;
var G__10139 = 0;
var G__10140 = 0;
seq__10120 = G__10137;
chunk__10121 = G__10138;
count__10122 = G__10139;
i__10123 = G__10140;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__10128 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10128__delegate.call(this,elem,class$,classes);};
G__10128.cljs$lang$maxFixedArity = 2;
G__10128.cljs$lang$applyTo = (function (arglist__10141){
var elem = cljs.core.first(arglist__10141);
arglist__10141 = cljs.core.next(arglist__10141);
var class$ = cljs.core.first(arglist__10141);
var classes = cljs.core.rest(arglist__10141);
return G__10128__delegate(elem,class$,classes);
});
G__10128.cljs$core$IFn$_invoke$arity$variadic = G__10128__delegate;
return G__10128;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___10142 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___10142))
{var class_list_10143 = temp__4090__auto___10142;class_list_10143.toggle(class$__$1);
} else
{toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_(elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10146){var vec__10147 = p__10146;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10147,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10147,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__10154_10160 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__10155_10161 = null;var count__10156_10162 = 0;var i__10157_10163 = 0;while(true){
if((i__10157_10163 < count__10156_10162))
{var vec__10158_10164 = chunk__10155_10161.cljs$core$IIndexed$_nth$arity$2(null,i__10157_10163);var k_10165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10158_10164,0,null);var v_10166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10158_10164,1,null);(style[cljs.core.name(k_10165)] = v_10166);
{
var G__10167 = seq__10154_10160;
var G__10168 = chunk__10155_10161;
var G__10169 = count__10156_10162;
var G__10170 = (i__10157_10163 + 1);
seq__10154_10160 = G__10167;
chunk__10155_10161 = G__10168;
count__10156_10162 = G__10169;
i__10157_10163 = G__10170;
continue;
}
} else
{var temp__4092__auto___10171 = cljs.core.seq(seq__10154_10160);if(temp__4092__auto___10171)
{var seq__10154_10172__$1 = temp__4092__auto___10171;if(cljs.core.chunked_seq_QMARK_(seq__10154_10172__$1))
{var c__4151__auto___10173 = cljs.core.chunk_first(seq__10154_10172__$1);{
var G__10174 = cljs.core.chunk_rest(seq__10154_10172__$1);
var G__10175 = c__4151__auto___10173;
var G__10176 = cljs.core.count(c__4151__auto___10173);
var G__10177 = 0;
seq__10154_10160 = G__10174;
chunk__10155_10161 = G__10175;
count__10156_10162 = G__10176;
i__10157_10163 = G__10177;
continue;
}
} else
{var vec__10159_10178 = cljs.core.first(seq__10154_10172__$1);var k_10179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10159_10178,0,null);var v_10180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10159_10178,1,null);(style[cljs.core.name(k_10179)] = v_10180);
{
var G__10181 = cljs.core.next(seq__10154_10172__$1);
var G__10182 = null;
var G__10183 = 0;
var G__10184 = 0;
seq__10154_10160 = G__10181;
chunk__10155_10161 = G__10182;
count__10156_10162 = G__10183;
i__10157_10163 = G__10184;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10185){
var elem = cljs.core.first(arglist__10185);
var kvs = cljs.core.rest(arglist__10185);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"k","k",-1640531420,null)], 0)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like(elem))[cljs.core.name(k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10192_10198 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__10193_10199 = null;var count__10194_10200 = 0;var i__10195_10201 = 0;while(true){
if((i__10195_10201 < count__10194_10200))
{var vec__10196_10202 = chunk__10193_10199.cljs$core$IIndexed$_nth$arity$2(null,i__10195_10201);var k_10203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10196_10202,0,null);var v_10204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10196_10202,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_10203,[cljs.core.str(v_10204),cljs.core.str("px")].join('')], 0));
{
var G__10205 = seq__10192_10198;
var G__10206 = chunk__10193_10199;
var G__10207 = count__10194_10200;
var G__10208 = (i__10195_10201 + 1);
seq__10192_10198 = G__10205;
chunk__10193_10199 = G__10206;
count__10194_10200 = G__10207;
i__10195_10201 = G__10208;
continue;
}
} else
{var temp__4092__auto___10209 = cljs.core.seq(seq__10192_10198);if(temp__4092__auto___10209)
{var seq__10192_10210__$1 = temp__4092__auto___10209;if(cljs.core.chunked_seq_QMARK_(seq__10192_10210__$1))
{var c__4151__auto___10211 = cljs.core.chunk_first(seq__10192_10210__$1);{
var G__10212 = cljs.core.chunk_rest(seq__10192_10210__$1);
var G__10213 = c__4151__auto___10211;
var G__10214 = cljs.core.count(c__4151__auto___10211);
var G__10215 = 0;
seq__10192_10198 = G__10212;
chunk__10193_10199 = G__10213;
count__10194_10200 = G__10214;
i__10195_10201 = G__10215;
continue;
}
} else
{var vec__10197_10216 = cljs.core.first(seq__10192_10210__$1);var k_10217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10197_10216,0,null);var v_10218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10197_10216,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_10217,[cljs.core.str(v_10218),cljs.core.str("px")].join('')], 0));
{
var G__10219 = cljs.core.next(seq__10192_10210__$1);
var G__10220 = null;
var G__10221 = 0;
var G__10222 = 0;
seq__10192_10198 = G__10219;
chunk__10193_10199 = G__10220;
count__10194_10200 = G__10221;
i__10195_10201 = G__10222;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__10223){
var elem = cljs.core.first(arglist__10223);
var kvs = cljs.core.rest(arglist__10223);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style(dommy.template.__GT_node_like(elem),k);if(cljs.core.seq(pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_(v))
{var G__10232 = dommy.template.__GT_node_like(elem);(G__10232[cljs.core.name(k)] = v);
return G__10232;
} else
{var G__10233 = dommy.template.__GT_node_like(elem);G__10233.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$99))?dommy.attrs.style_str(v):v));
return G__10233;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__10240__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10234_10241 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__10235_10242 = null;var count__10236_10243 = 0;var i__10237_10244 = 0;while(true){
if((i__10237_10244 < count__10236_10243))
{var vec__10238_10245 = chunk__10235_10242.cljs$core$IIndexed$_nth$arity$2(null,i__10237_10244);var k_10246__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10238_10245,0,null);var v_10247__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10238_10245,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_10246__$1,v_10247__$1);
{
var G__10248 = seq__10234_10241;
var G__10249 = chunk__10235_10242;
var G__10250 = count__10236_10243;
var G__10251 = (i__10237_10244 + 1);
seq__10234_10241 = G__10248;
chunk__10235_10242 = G__10249;
count__10236_10243 = G__10250;
i__10237_10244 = G__10251;
continue;
}
} else
{var temp__4092__auto___10252 = cljs.core.seq(seq__10234_10241);if(temp__4092__auto___10252)
{var seq__10234_10253__$1 = temp__4092__auto___10252;if(cljs.core.chunked_seq_QMARK_(seq__10234_10253__$1))
{var c__4151__auto___10254 = cljs.core.chunk_first(seq__10234_10253__$1);{
var G__10255 = cljs.core.chunk_rest(seq__10234_10253__$1);
var G__10256 = c__4151__auto___10254;
var G__10257 = cljs.core.count(c__4151__auto___10254);
var G__10258 = 0;
seq__10234_10241 = G__10255;
chunk__10235_10242 = G__10256;
count__10236_10243 = G__10257;
i__10237_10244 = G__10258;
continue;
}
} else
{var vec__10239_10259 = cljs.core.first(seq__10234_10253__$1);var k_10260__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10239_10259,0,null);var v_10261__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10239_10259,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_10260__$1,v_10261__$1);
{
var G__10262 = cljs.core.next(seq__10234_10253__$1);
var G__10263 = null;
var G__10264 = 0;
var G__10265 = 0;
seq__10234_10241 = G__10262;
chunk__10235_10242 = G__10263;
count__10236_10243 = G__10264;
i__10237_10244 = G__10265;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__10240 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__10240__delegate.call(this,elem,k,v,kvs);};
G__10240.cljs$lang$maxFixedArity = 3;
G__10240.cljs$lang$applyTo = (function (arglist__10266){
var elem = cljs.core.first(arglist__10266);
arglist__10266 = cljs.core.next(arglist__10266);
var k = cljs.core.first(arglist__10266);
arglist__10266 = cljs.core.next(arglist__10266);
var v = cljs.core.first(arglist__10266);
var kvs = cljs.core.rest(arglist__10266);
return G__10240__delegate(elem,k,v,kvs);
});
G__10240.cljs$core$IFn$_invoke$arity$variadic = G__10240__delegate;
return G__10240;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name(k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__10275__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10271_10276 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__10272_10277 = null;var count__10273_10278 = 0;var i__10274_10279 = 0;while(true){
if((i__10274_10279 < count__10273_10278))
{var k_10280__$1 = chunk__10272_10277.cljs$core$IIndexed$_nth$arity$2(null,i__10274_10279);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_10280__$1);
{
var G__10281 = seq__10271_10276;
var G__10282 = chunk__10272_10277;
var G__10283 = count__10273_10278;
var G__10284 = (i__10274_10279 + 1);
seq__10271_10276 = G__10281;
chunk__10272_10277 = G__10282;
count__10273_10278 = G__10283;
i__10274_10279 = G__10284;
continue;
}
} else
{var temp__4092__auto___10285 = cljs.core.seq(seq__10271_10276);if(temp__4092__auto___10285)
{var seq__10271_10286__$1 = temp__4092__auto___10285;if(cljs.core.chunked_seq_QMARK_(seq__10271_10286__$1))
{var c__4151__auto___10287 = cljs.core.chunk_first(seq__10271_10286__$1);{
var G__10288 = cljs.core.chunk_rest(seq__10271_10286__$1);
var G__10289 = c__4151__auto___10287;
var G__10290 = cljs.core.count(c__4151__auto___10287);
var G__10291 = 0;
seq__10271_10276 = G__10288;
chunk__10272_10277 = G__10289;
count__10273_10278 = G__10290;
i__10274_10279 = G__10291;
continue;
}
} else
{var k_10292__$1 = cljs.core.first(seq__10271_10286__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_10292__$1);
{
var G__10293 = cljs.core.next(seq__10271_10286__$1);
var G__10294 = null;
var G__10295 = 0;
var G__10296 = 0;
seq__10271_10276 = G__10293;
chunk__10272_10277 = G__10294;
count__10273_10278 = G__10295;
i__10274_10279 = G__10296;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__10275 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10275__delegate.call(this,elem,k,ks);};
G__10275.cljs$lang$maxFixedArity = 2;
G__10275.cljs$lang$applyTo = (function (arglist__10297){
var elem = cljs.core.first(arglist__10297);
arglist__10297 = cljs.core.next(arglist__10297);
var k = cljs.core.first(arglist__10297);
var ks = cljs.core.rest(arglist__10297);
return G__10275__delegate(elem,k,ks);
});
G__10275.cljs$core$IFn$_invoke$arity$variadic = G__10275__delegate;
return G__10275;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like(elem).getAttribute(cljs.core.name(k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.attrs.attr(elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like(elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like(elem);toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,dommy.attrs.hidden_QMARK_(elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__10299 = dommy.template.__GT_node_like(elem);G__10299.style.display = ((show_QMARK_)?"":"none");
return G__10299;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__10301 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__10301,false);
return G__10301;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__10303 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__10303,true);
return G__10303;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__10305 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__10305["constructor"] = Object);
return G__10305;
})(),cljs.core.array_seq([cljs.core.constant$keyword$66,true], 0));
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);var top = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

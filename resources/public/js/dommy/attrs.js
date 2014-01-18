// Compiled by ClojureScript 0.0-2127
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3385__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3385__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3385__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__9047 = (i + class$.length);
start_from = G__9047;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___9072 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9072))
{var class_list_9073 = temp__4090__auto___9072;var seq__9060_9074 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9061_9075 = null;var count__9062_9076 = 0;var i__9063_9077 = 0;while(true){
if((i__9063_9077 < count__9062_9076))
{var class_9078 = cljs.core._nth.call(null,chunk__9061_9075,i__9063_9077);class_list_9073.add(class_9078);
{
var G__9079 = seq__9060_9074;
var G__9080 = chunk__9061_9075;
var G__9081 = count__9062_9076;
var G__9082 = (i__9063_9077 + 1);
seq__9060_9074 = G__9079;
chunk__9061_9075 = G__9080;
count__9062_9076 = G__9081;
i__9063_9077 = G__9082;
continue;
}
} else
{var temp__4092__auto___9083 = cljs.core.seq.call(null,seq__9060_9074);if(temp__4092__auto___9083)
{var seq__9060_9084__$1 = temp__4092__auto___9083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9060_9084__$1))
{var c__4126__auto___9085 = cljs.core.chunk_first.call(null,seq__9060_9084__$1);{
var G__9086 = cljs.core.chunk_rest.call(null,seq__9060_9084__$1);
var G__9087 = c__4126__auto___9085;
var G__9088 = cljs.core.count.call(null,c__4126__auto___9085);
var G__9089 = 0;
seq__9060_9074 = G__9086;
chunk__9061_9075 = G__9087;
count__9062_9076 = G__9088;
i__9063_9077 = G__9089;
continue;
}
} else
{var class_9090 = cljs.core.first.call(null,seq__9060_9084__$1);class_list_9073.add(class_9090);
{
var G__9091 = cljs.core.next.call(null,seq__9060_9084__$1);
var G__9092 = null;
var G__9093 = 0;
var G__9094 = 0;
seq__9060_9074 = G__9091;
chunk__9061_9075 = G__9092;
count__9062_9076 = G__9093;
i__9063_9077 = G__9094;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_9095 = elem__$1.className;var seq__9064_9096 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9065_9097 = null;var count__9066_9098 = 0;var i__9067_9099 = 0;while(true){
if((i__9067_9099 < count__9066_9098))
{var class_9100 = cljs.core._nth.call(null,chunk__9065_9097,i__9067_9099);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9095,class_9100)))
{} else
{elem__$1.className = (((class_name_9095 === ""))?class_9100:[cljs.core.str(class_name_9095),cljs.core.str(" "),cljs.core.str(class_9100)].join(''));
}
{
var G__9101 = seq__9064_9096;
var G__9102 = chunk__9065_9097;
var G__9103 = count__9066_9098;
var G__9104 = (i__9067_9099 + 1);
seq__9064_9096 = G__9101;
chunk__9065_9097 = G__9102;
count__9066_9098 = G__9103;
i__9067_9099 = G__9104;
continue;
}
} else
{var temp__4092__auto___9105 = cljs.core.seq.call(null,seq__9064_9096);if(temp__4092__auto___9105)
{var seq__9064_9106__$1 = temp__4092__auto___9105;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9064_9106__$1))
{var c__4126__auto___9107 = cljs.core.chunk_first.call(null,seq__9064_9106__$1);{
var G__9108 = cljs.core.chunk_rest.call(null,seq__9064_9106__$1);
var G__9109 = c__4126__auto___9107;
var G__9110 = cljs.core.count.call(null,c__4126__auto___9107);
var G__9111 = 0;
seq__9064_9096 = G__9108;
chunk__9065_9097 = G__9109;
count__9066_9098 = G__9110;
i__9067_9099 = G__9111;
continue;
}
} else
{var class_9112 = cljs.core.first.call(null,seq__9064_9106__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9095,class_9112)))
{} else
{elem__$1.className = (((class_name_9095 === ""))?class_9112:[cljs.core.str(class_name_9095),cljs.core.str(" "),cljs.core.str(class_9112)].join(''));
}
{
var G__9113 = cljs.core.next.call(null,seq__9064_9106__$1);
var G__9114 = null;
var G__9115 = 0;
var G__9116 = 0;
seq__9064_9096 = G__9113;
chunk__9065_9097 = G__9114;
count__9066_9098 = G__9115;
i__9067_9099 = G__9116;
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
var G__9117__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9068_9118 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__9069_9119 = null;var count__9070_9120 = 0;var i__9071_9121 = 0;while(true){
if((i__9071_9121 < count__9070_9120))
{var c_9122 = cljs.core._nth.call(null,chunk__9069_9119,i__9071_9121);add_class_BANG_.call(null,elem__$1,c_9122);
{
var G__9123 = seq__9068_9118;
var G__9124 = chunk__9069_9119;
var G__9125 = count__9070_9120;
var G__9126 = (i__9071_9121 + 1);
seq__9068_9118 = G__9123;
chunk__9069_9119 = G__9124;
count__9070_9120 = G__9125;
i__9071_9121 = G__9126;
continue;
}
} else
{var temp__4092__auto___9127 = cljs.core.seq.call(null,seq__9068_9118);if(temp__4092__auto___9127)
{var seq__9068_9128__$1 = temp__4092__auto___9127;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9068_9128__$1))
{var c__4126__auto___9129 = cljs.core.chunk_first.call(null,seq__9068_9128__$1);{
var G__9130 = cljs.core.chunk_rest.call(null,seq__9068_9128__$1);
var G__9131 = c__4126__auto___9129;
var G__9132 = cljs.core.count.call(null,c__4126__auto___9129);
var G__9133 = 0;
seq__9068_9118 = G__9130;
chunk__9069_9119 = G__9131;
count__9070_9120 = G__9132;
i__9071_9121 = G__9133;
continue;
}
} else
{var c_9134 = cljs.core.first.call(null,seq__9068_9128__$1);add_class_BANG_.call(null,elem__$1,c_9134);
{
var G__9135 = cljs.core.next.call(null,seq__9068_9128__$1);
var G__9136 = null;
var G__9137 = 0;
var G__9138 = 0;
seq__9068_9118 = G__9135;
chunk__9069_9119 = G__9136;
count__9070_9120 = G__9137;
i__9071_9121 = G__9138;
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
var G__9117 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9117__delegate.call(this,elem,classes,more_classes);};
G__9117.cljs$lang$maxFixedArity = 2;
G__9117.cljs$lang$applyTo = (function (arglist__9139){
var elem = cljs.core.first(arglist__9139);
arglist__9139 = cljs.core.next(arglist__9139);
var classes = cljs.core.first(arglist__9139);
var more_classes = cljs.core.rest(arglist__9139);
return G__9117__delegate(elem,classes,more_classes);
});
G__9117.cljs$core$IFn$_invoke$arity$variadic = G__9117__delegate;
return G__9117;
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
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__9140 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__9140;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9149 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9149))
{var class_list_9150 = temp__4090__auto___9149;class_list_9150.remove(class$__$1);
} else
{var class_name_9151 = elem__$1.className;var new_class_name_9152 = dommy.attrs.remove_class_str.call(null,class_name_9151,class$__$1);if((class_name_9151 === new_class_name_9152))
{} else
{elem__$1.className = new_class_name_9152;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__9153__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9145 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__9146 = null;var count__9147 = 0;var i__9148 = 0;while(true){
if((i__9148 < count__9147))
{var c = cljs.core._nth.call(null,chunk__9146,i__9148);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9154 = seq__9145;
var G__9155 = chunk__9146;
var G__9156 = count__9147;
var G__9157 = (i__9148 + 1);
seq__9145 = G__9154;
chunk__9146 = G__9155;
count__9147 = G__9156;
i__9148 = G__9157;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9145);if(temp__4092__auto__)
{var seq__9145__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9145__$1))
{var c__4126__auto__ = cljs.core.chunk_first.call(null,seq__9145__$1);{
var G__9158 = cljs.core.chunk_rest.call(null,seq__9145__$1);
var G__9159 = c__4126__auto__;
var G__9160 = cljs.core.count.call(null,c__4126__auto__);
var G__9161 = 0;
seq__9145 = G__9158;
chunk__9146 = G__9159;
count__9147 = G__9160;
i__9148 = G__9161;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__9145__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9162 = cljs.core.next.call(null,seq__9145__$1);
var G__9163 = null;
var G__9164 = 0;
var G__9165 = 0;
seq__9145 = G__9162;
chunk__9146 = G__9163;
count__9147 = G__9164;
i__9148 = G__9165;
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
var G__9153 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9153__delegate.call(this,elem,class$,classes);};
G__9153.cljs$lang$maxFixedArity = 2;
G__9153.cljs$lang$applyTo = (function (arglist__9166){
var elem = cljs.core.first(arglist__9166);
arglist__9166 = cljs.core.next(arglist__9166);
var class$ = cljs.core.first(arglist__9166);
var classes = cljs.core.rest(arglist__9166);
return G__9153__delegate(elem,class$,classes);
});
G__9153.cljs$core$IFn$_invoke$arity$variadic = G__9153__delegate;
return G__9153;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9167 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9167))
{var class_list_9168 = temp__4090__auto___9167;class_list_9168.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__9171){var vec__9172 = p__9171;var k = cljs.core.nth.call(null,vec__9172,0,null);var v = cljs.core.nth.call(null,vec__9172,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__9179_9185 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9180_9186 = null;var count__9181_9187 = 0;var i__9182_9188 = 0;while(true){
if((i__9182_9188 < count__9181_9187))
{var vec__9183_9189 = cljs.core._nth.call(null,chunk__9180_9186,i__9182_9188);var k_9190 = cljs.core.nth.call(null,vec__9183_9189,0,null);var v_9191 = cljs.core.nth.call(null,vec__9183_9189,1,null);(style[cljs.core.name.call(null,k_9190)] = v_9191);
{
var G__9192 = seq__9179_9185;
var G__9193 = chunk__9180_9186;
var G__9194 = count__9181_9187;
var G__9195 = (i__9182_9188 + 1);
seq__9179_9185 = G__9192;
chunk__9180_9186 = G__9193;
count__9181_9187 = G__9194;
i__9182_9188 = G__9195;
continue;
}
} else
{var temp__4092__auto___9196 = cljs.core.seq.call(null,seq__9179_9185);if(temp__4092__auto___9196)
{var seq__9179_9197__$1 = temp__4092__auto___9196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9179_9197__$1))
{var c__4126__auto___9198 = cljs.core.chunk_first.call(null,seq__9179_9197__$1);{
var G__9199 = cljs.core.chunk_rest.call(null,seq__9179_9197__$1);
var G__9200 = c__4126__auto___9198;
var G__9201 = cljs.core.count.call(null,c__4126__auto___9198);
var G__9202 = 0;
seq__9179_9185 = G__9199;
chunk__9180_9186 = G__9200;
count__9181_9187 = G__9201;
i__9182_9188 = G__9202;
continue;
}
} else
{var vec__9184_9203 = cljs.core.first.call(null,seq__9179_9197__$1);var k_9204 = cljs.core.nth.call(null,vec__9184_9203,0,null);var v_9205 = cljs.core.nth.call(null,vec__9184_9203,1,null);(style[cljs.core.name.call(null,k_9204)] = v_9205);
{
var G__9206 = cljs.core.next.call(null,seq__9179_9197__$1);
var G__9207 = null;
var G__9208 = 0;
var G__9209 = 0;
seq__9179_9185 = G__9206;
chunk__9180_9186 = G__9207;
count__9181_9187 = G__9208;
i__9182_9188 = G__9209;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9210){
var elem = cljs.core.first(arglist__9210);
var kvs = cljs.core.rest(arglist__9210);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9217_9223 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9218_9224 = null;var count__9219_9225 = 0;var i__9220_9226 = 0;while(true){
if((i__9220_9226 < count__9219_9225))
{var vec__9221_9227 = cljs.core._nth.call(null,chunk__9218_9224,i__9220_9226);var k_9228 = cljs.core.nth.call(null,vec__9221_9227,0,null);var v_9229 = cljs.core.nth.call(null,vec__9221_9227,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9228,[cljs.core.str(v_9229),cljs.core.str("px")].join(''));
{
var G__9230 = seq__9217_9223;
var G__9231 = chunk__9218_9224;
var G__9232 = count__9219_9225;
var G__9233 = (i__9220_9226 + 1);
seq__9217_9223 = G__9230;
chunk__9218_9224 = G__9231;
count__9219_9225 = G__9232;
i__9220_9226 = G__9233;
continue;
}
} else
{var temp__4092__auto___9234 = cljs.core.seq.call(null,seq__9217_9223);if(temp__4092__auto___9234)
{var seq__9217_9235__$1 = temp__4092__auto___9234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9217_9235__$1))
{var c__4126__auto___9236 = cljs.core.chunk_first.call(null,seq__9217_9235__$1);{
var G__9237 = cljs.core.chunk_rest.call(null,seq__9217_9235__$1);
var G__9238 = c__4126__auto___9236;
var G__9239 = cljs.core.count.call(null,c__4126__auto___9236);
var G__9240 = 0;
seq__9217_9223 = G__9237;
chunk__9218_9224 = G__9238;
count__9219_9225 = G__9239;
i__9220_9226 = G__9240;
continue;
}
} else
{var vec__9222_9241 = cljs.core.first.call(null,seq__9217_9235__$1);var k_9242 = cljs.core.nth.call(null,vec__9222_9241,0,null);var v_9243 = cljs.core.nth.call(null,vec__9222_9241,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9242,[cljs.core.str(v_9243),cljs.core.str("px")].join(''));
{
var G__9244 = cljs.core.next.call(null,seq__9217_9235__$1);
var G__9245 = null;
var G__9246 = 0;
var G__9247 = 0;
seq__9217_9223 = G__9244;
chunk__9218_9224 = G__9245;
count__9219_9225 = G__9246;
i__9220_9226 = G__9247;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__9248){
var elem = cljs.core.first(arglist__9248);
var kvs = cljs.core.rest(arglist__9248);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
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
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__9257 = dommy.template.__GT_node_like.call(null,elem);(G__9257[cljs.core.name.call(null,k)] = v);
return G__9257;
} else
{var G__9258 = dommy.template.__GT_node_like.call(null,elem);G__9258.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__9258;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__9265__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9259_9266 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__9260_9267 = null;var count__9261_9268 = 0;var i__9262_9269 = 0;while(true){
if((i__9262_9269 < count__9261_9268))
{var vec__9263_9270 = cljs.core._nth.call(null,chunk__9260_9267,i__9262_9269);var k_9271__$1 = cljs.core.nth.call(null,vec__9263_9270,0,null);var v_9272__$1 = cljs.core.nth.call(null,vec__9263_9270,1,null);set_attr_BANG_.call(null,elem__$1,k_9271__$1,v_9272__$1);
{
var G__9273 = seq__9259_9266;
var G__9274 = chunk__9260_9267;
var G__9275 = count__9261_9268;
var G__9276 = (i__9262_9269 + 1);
seq__9259_9266 = G__9273;
chunk__9260_9267 = G__9274;
count__9261_9268 = G__9275;
i__9262_9269 = G__9276;
continue;
}
} else
{var temp__4092__auto___9277 = cljs.core.seq.call(null,seq__9259_9266);if(temp__4092__auto___9277)
{var seq__9259_9278__$1 = temp__4092__auto___9277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9259_9278__$1))
{var c__4126__auto___9279 = cljs.core.chunk_first.call(null,seq__9259_9278__$1);{
var G__9280 = cljs.core.chunk_rest.call(null,seq__9259_9278__$1);
var G__9281 = c__4126__auto___9279;
var G__9282 = cljs.core.count.call(null,c__4126__auto___9279);
var G__9283 = 0;
seq__9259_9266 = G__9280;
chunk__9260_9267 = G__9281;
count__9261_9268 = G__9282;
i__9262_9269 = G__9283;
continue;
}
} else
{var vec__9264_9284 = cljs.core.first.call(null,seq__9259_9278__$1);var k_9285__$1 = cljs.core.nth.call(null,vec__9264_9284,0,null);var v_9286__$1 = cljs.core.nth.call(null,vec__9264_9284,1,null);set_attr_BANG_.call(null,elem__$1,k_9285__$1,v_9286__$1);
{
var G__9287 = cljs.core.next.call(null,seq__9259_9278__$1);
var G__9288 = null;
var G__9289 = 0;
var G__9290 = 0;
seq__9259_9266 = G__9287;
chunk__9260_9267 = G__9288;
count__9261_9268 = G__9289;
i__9262_9269 = G__9290;
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
var G__9265 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__9265__delegate.call(this,elem,k,v,kvs);};
G__9265.cljs$lang$maxFixedArity = 3;
G__9265.cljs$lang$applyTo = (function (arglist__9291){
var elem = cljs.core.first(arglist__9291);
arglist__9291 = cljs.core.next(arglist__9291);
var k = cljs.core.first(arglist__9291);
arglist__9291 = cljs.core.next(arglist__9291);
var v = cljs.core.first(arglist__9291);
var kvs = cljs.core.rest(arglist__9291);
return G__9265__delegate(elem,k,v,kvs);
});
G__9265.cljs$core$IFn$_invoke$arity$variadic = G__9265__delegate;
return G__9265;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__9300__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9296_9301 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__9297_9302 = null;var count__9298_9303 = 0;var i__9299_9304 = 0;while(true){
if((i__9299_9304 < count__9298_9303))
{var k_9305__$1 = cljs.core._nth.call(null,chunk__9297_9302,i__9299_9304);remove_attr_BANG_.call(null,elem__$1,k_9305__$1);
{
var G__9306 = seq__9296_9301;
var G__9307 = chunk__9297_9302;
var G__9308 = count__9298_9303;
var G__9309 = (i__9299_9304 + 1);
seq__9296_9301 = G__9306;
chunk__9297_9302 = G__9307;
count__9298_9303 = G__9308;
i__9299_9304 = G__9309;
continue;
}
} else
{var temp__4092__auto___9310 = cljs.core.seq.call(null,seq__9296_9301);if(temp__4092__auto___9310)
{var seq__9296_9311__$1 = temp__4092__auto___9310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9296_9311__$1))
{var c__4126__auto___9312 = cljs.core.chunk_first.call(null,seq__9296_9311__$1);{
var G__9313 = cljs.core.chunk_rest.call(null,seq__9296_9311__$1);
var G__9314 = c__4126__auto___9312;
var G__9315 = cljs.core.count.call(null,c__4126__auto___9312);
var G__9316 = 0;
seq__9296_9301 = G__9313;
chunk__9297_9302 = G__9314;
count__9298_9303 = G__9315;
i__9299_9304 = G__9316;
continue;
}
} else
{var k_9317__$1 = cljs.core.first.call(null,seq__9296_9311__$1);remove_attr_BANG_.call(null,elem__$1,k_9317__$1);
{
var G__9318 = cljs.core.next.call(null,seq__9296_9311__$1);
var G__9319 = null;
var G__9320 = 0;
var G__9321 = 0;
seq__9296_9301 = G__9318;
chunk__9297_9302 = G__9319;
count__9298_9303 = G__9320;
i__9299_9304 = G__9321;
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
var G__9300 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9300__delegate.call(this,elem,k,ks);};
G__9300.cljs$lang$maxFixedArity = 2;
G__9300.cljs$lang$applyTo = (function (arglist__9322){
var elem = cljs.core.first(arglist__9322);
arglist__9322 = cljs.core.next(arglist__9322);
var k = cljs.core.first(arglist__9322);
var ks = cljs.core.rest(arglist__9322);
return G__9300__delegate(elem,k,ks);
});
G__9300.cljs$core$IFn$_invoke$arity$variadic = G__9300__delegate;
return G__9300;
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
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
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
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__9324 = dommy.template.__GT_node_like.call(null,elem);G__9324.style.display = ((show_QMARK_)?"":"none");
return G__9324;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__9326 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9326,false);
return G__9326;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__9328 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9328,true);
return G__9328;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__9330 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__9330["constructor"] = Object);
return G__9330;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map
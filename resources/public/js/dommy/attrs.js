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
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__6888 = (i + class$.length);
start_from = G__6888;
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
{var temp__4090__auto___6913 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6913))
{var class_list_6914 = temp__4090__auto___6913;var seq__6901_6915 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__6902_6916 = null;var count__6903_6917 = 0;var i__6904_6918 = 0;while(true){
if((i__6904_6918 < count__6903_6917))
{var class_6919 = cljs.core._nth.call(null,chunk__6902_6916,i__6904_6918);class_list_6914.add(class_6919);
{
var G__6920 = seq__6901_6915;
var G__6921 = chunk__6902_6916;
var G__6922 = count__6903_6917;
var G__6923 = (i__6904_6918 + 1);
seq__6901_6915 = G__6920;
chunk__6902_6916 = G__6921;
count__6903_6917 = G__6922;
i__6904_6918 = G__6923;
continue;
}
} else
{var temp__4092__auto___6924 = cljs.core.seq.call(null,seq__6901_6915);if(temp__4092__auto___6924)
{var seq__6901_6925__$1 = temp__4092__auto___6924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6901_6925__$1))
{var c__4151__auto___6926 = cljs.core.chunk_first.call(null,seq__6901_6925__$1);{
var G__6927 = cljs.core.chunk_rest.call(null,seq__6901_6925__$1);
var G__6928 = c__4151__auto___6926;
var G__6929 = cljs.core.count.call(null,c__4151__auto___6926);
var G__6930 = 0;
seq__6901_6915 = G__6927;
chunk__6902_6916 = G__6928;
count__6903_6917 = G__6929;
i__6904_6918 = G__6930;
continue;
}
} else
{var class_6931 = cljs.core.first.call(null,seq__6901_6925__$1);class_list_6914.add(class_6931);
{
var G__6932 = cljs.core.next.call(null,seq__6901_6925__$1);
var G__6933 = null;
var G__6934 = 0;
var G__6935 = 0;
seq__6901_6915 = G__6932;
chunk__6902_6916 = G__6933;
count__6903_6917 = G__6934;
i__6904_6918 = G__6935;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_6936 = elem__$1.className;var seq__6905_6937 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__6906_6938 = null;var count__6907_6939 = 0;var i__6908_6940 = 0;while(true){
if((i__6908_6940 < count__6907_6939))
{var class_6941 = cljs.core._nth.call(null,chunk__6906_6938,i__6908_6940);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6936,class_6941)))
{} else
{elem__$1.className = (((class_name_6936 === ""))?class_6941:[cljs.core.str(class_name_6936),cljs.core.str(" "),cljs.core.str(class_6941)].join(''));
}
{
var G__6942 = seq__6905_6937;
var G__6943 = chunk__6906_6938;
var G__6944 = count__6907_6939;
var G__6945 = (i__6908_6940 + 1);
seq__6905_6937 = G__6942;
chunk__6906_6938 = G__6943;
count__6907_6939 = G__6944;
i__6908_6940 = G__6945;
continue;
}
} else
{var temp__4092__auto___6946 = cljs.core.seq.call(null,seq__6905_6937);if(temp__4092__auto___6946)
{var seq__6905_6947__$1 = temp__4092__auto___6946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6905_6947__$1))
{var c__4151__auto___6948 = cljs.core.chunk_first.call(null,seq__6905_6947__$1);{
var G__6949 = cljs.core.chunk_rest.call(null,seq__6905_6947__$1);
var G__6950 = c__4151__auto___6948;
var G__6951 = cljs.core.count.call(null,c__4151__auto___6948);
var G__6952 = 0;
seq__6905_6937 = G__6949;
chunk__6906_6938 = G__6950;
count__6907_6939 = G__6951;
i__6908_6940 = G__6952;
continue;
}
} else
{var class_6953 = cljs.core.first.call(null,seq__6905_6947__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6936,class_6953)))
{} else
{elem__$1.className = (((class_name_6936 === ""))?class_6953:[cljs.core.str(class_name_6936),cljs.core.str(" "),cljs.core.str(class_6953)].join(''));
}
{
var G__6954 = cljs.core.next.call(null,seq__6905_6947__$1);
var G__6955 = null;
var G__6956 = 0;
var G__6957 = 0;
seq__6905_6937 = G__6954;
chunk__6906_6938 = G__6955;
count__6907_6939 = G__6956;
i__6908_6940 = G__6957;
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
var G__6958__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6909_6959 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__6910_6960 = null;var count__6911_6961 = 0;var i__6912_6962 = 0;while(true){
if((i__6912_6962 < count__6911_6961))
{var c_6963 = cljs.core._nth.call(null,chunk__6910_6960,i__6912_6962);add_class_BANG_.call(null,elem__$1,c_6963);
{
var G__6964 = seq__6909_6959;
var G__6965 = chunk__6910_6960;
var G__6966 = count__6911_6961;
var G__6967 = (i__6912_6962 + 1);
seq__6909_6959 = G__6964;
chunk__6910_6960 = G__6965;
count__6911_6961 = G__6966;
i__6912_6962 = G__6967;
continue;
}
} else
{var temp__4092__auto___6968 = cljs.core.seq.call(null,seq__6909_6959);if(temp__4092__auto___6968)
{var seq__6909_6969__$1 = temp__4092__auto___6968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6909_6969__$1))
{var c__4151__auto___6970 = cljs.core.chunk_first.call(null,seq__6909_6969__$1);{
var G__6971 = cljs.core.chunk_rest.call(null,seq__6909_6969__$1);
var G__6972 = c__4151__auto___6970;
var G__6973 = cljs.core.count.call(null,c__4151__auto___6970);
var G__6974 = 0;
seq__6909_6959 = G__6971;
chunk__6910_6960 = G__6972;
count__6911_6961 = G__6973;
i__6912_6962 = G__6974;
continue;
}
} else
{var c_6975 = cljs.core.first.call(null,seq__6909_6969__$1);add_class_BANG_.call(null,elem__$1,c_6975);
{
var G__6976 = cljs.core.next.call(null,seq__6909_6969__$1);
var G__6977 = null;
var G__6978 = 0;
var G__6979 = 0;
seq__6909_6959 = G__6976;
chunk__6910_6960 = G__6977;
count__6911_6961 = G__6978;
i__6912_6962 = G__6979;
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
var G__6958 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6958__delegate.call(this,elem,classes,more_classes);};
G__6958.cljs$lang$maxFixedArity = 2;
G__6958.cljs$lang$applyTo = (function (arglist__6980){
var elem = cljs.core.first(arglist__6980);
arglist__6980 = cljs.core.next(arglist__6980);
var classes = cljs.core.first(arglist__6980);
var more_classes = cljs.core.rest(arglist__6980);
return G__6958__delegate(elem,classes,more_classes);
});
G__6958.cljs$core$IFn$_invoke$arity$variadic = G__6958__delegate;
return G__6958;
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
var G__6981 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__6981;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___6990 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6990))
{var class_list_6991 = temp__4090__auto___6990;class_list_6991.remove(class$__$1);
} else
{var class_name_6992 = elem__$1.className;var new_class_name_6993 = dommy.attrs.remove_class_str.call(null,class_name_6992,class$__$1);if((class_name_6992 === new_class_name_6993))
{} else
{elem__$1.className = new_class_name_6993;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__6994__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6986 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__6987 = null;var count__6988 = 0;var i__6989 = 0;while(true){
if((i__6989 < count__6988))
{var c = cljs.core._nth.call(null,chunk__6987,i__6989);remove_class_BANG_.call(null,elem__$1,c);
{
var G__6995 = seq__6986;
var G__6996 = chunk__6987;
var G__6997 = count__6988;
var G__6998 = (i__6989 + 1);
seq__6986 = G__6995;
chunk__6987 = G__6996;
count__6988 = G__6997;
i__6989 = G__6998;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6986);if(temp__4092__auto__)
{var seq__6986__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6986__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__6986__$1);{
var G__6999 = cljs.core.chunk_rest.call(null,seq__6986__$1);
var G__7000 = c__4151__auto__;
var G__7001 = cljs.core.count.call(null,c__4151__auto__);
var G__7002 = 0;
seq__6986 = G__6999;
chunk__6987 = G__7000;
count__6988 = G__7001;
i__6989 = G__7002;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6986__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7003 = cljs.core.next.call(null,seq__6986__$1);
var G__7004 = null;
var G__7005 = 0;
var G__7006 = 0;
seq__6986 = G__7003;
chunk__6987 = G__7004;
count__6988 = G__7005;
i__6989 = G__7006;
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
var G__6994 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6994__delegate.call(this,elem,class$,classes);};
G__6994.cljs$lang$maxFixedArity = 2;
G__6994.cljs$lang$applyTo = (function (arglist__7007){
var elem = cljs.core.first(arglist__7007);
arglist__7007 = cljs.core.next(arglist__7007);
var class$ = cljs.core.first(arglist__7007);
var classes = cljs.core.rest(arglist__7007);
return G__6994__delegate(elem,class$,classes);
});
G__6994.cljs$core$IFn$_invoke$arity$variadic = G__6994__delegate;
return G__6994;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___7008 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7008))
{var class_list_7009 = temp__4090__auto___7008;class_list_7009.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__7012){var vec__7013 = p__7012;var k = cljs.core.nth.call(null,vec__7013,0,null);var v = cljs.core.nth.call(null,vec__7013,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__7020_7026 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__7021_7027 = null;var count__7022_7028 = 0;var i__7023_7029 = 0;while(true){
if((i__7023_7029 < count__7022_7028))
{var vec__7024_7030 = cljs.core._nth.call(null,chunk__7021_7027,i__7023_7029);var k_7031 = cljs.core.nth.call(null,vec__7024_7030,0,null);var v_7032 = cljs.core.nth.call(null,vec__7024_7030,1,null);(style[cljs.core.name.call(null,k_7031)] = v_7032);
{
var G__7033 = seq__7020_7026;
var G__7034 = chunk__7021_7027;
var G__7035 = count__7022_7028;
var G__7036 = (i__7023_7029 + 1);
seq__7020_7026 = G__7033;
chunk__7021_7027 = G__7034;
count__7022_7028 = G__7035;
i__7023_7029 = G__7036;
continue;
}
} else
{var temp__4092__auto___7037 = cljs.core.seq.call(null,seq__7020_7026);if(temp__4092__auto___7037)
{var seq__7020_7038__$1 = temp__4092__auto___7037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7020_7038__$1))
{var c__4151__auto___7039 = cljs.core.chunk_first.call(null,seq__7020_7038__$1);{
var G__7040 = cljs.core.chunk_rest.call(null,seq__7020_7038__$1);
var G__7041 = c__4151__auto___7039;
var G__7042 = cljs.core.count.call(null,c__4151__auto___7039);
var G__7043 = 0;
seq__7020_7026 = G__7040;
chunk__7021_7027 = G__7041;
count__7022_7028 = G__7042;
i__7023_7029 = G__7043;
continue;
}
} else
{var vec__7025_7044 = cljs.core.first.call(null,seq__7020_7038__$1);var k_7045 = cljs.core.nth.call(null,vec__7025_7044,0,null);var v_7046 = cljs.core.nth.call(null,vec__7025_7044,1,null);(style[cljs.core.name.call(null,k_7045)] = v_7046);
{
var G__7047 = cljs.core.next.call(null,seq__7020_7038__$1);
var G__7048 = null;
var G__7049 = 0;
var G__7050 = 0;
seq__7020_7026 = G__7047;
chunk__7021_7027 = G__7048;
count__7022_7028 = G__7049;
i__7023_7029 = G__7050;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7051){
var elem = cljs.core.first(arglist__7051);
var kvs = cljs.core.rest(arglist__7051);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7058_7064 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__7059_7065 = null;var count__7060_7066 = 0;var i__7061_7067 = 0;while(true){
if((i__7061_7067 < count__7060_7066))
{var vec__7062_7068 = cljs.core._nth.call(null,chunk__7059_7065,i__7061_7067);var k_7069 = cljs.core.nth.call(null,vec__7062_7068,0,null);var v_7070 = cljs.core.nth.call(null,vec__7062_7068,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7069,[cljs.core.str(v_7070),cljs.core.str("px")].join(''));
{
var G__7071 = seq__7058_7064;
var G__7072 = chunk__7059_7065;
var G__7073 = count__7060_7066;
var G__7074 = (i__7061_7067 + 1);
seq__7058_7064 = G__7071;
chunk__7059_7065 = G__7072;
count__7060_7066 = G__7073;
i__7061_7067 = G__7074;
continue;
}
} else
{var temp__4092__auto___7075 = cljs.core.seq.call(null,seq__7058_7064);if(temp__4092__auto___7075)
{var seq__7058_7076__$1 = temp__4092__auto___7075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7058_7076__$1))
{var c__4151__auto___7077 = cljs.core.chunk_first.call(null,seq__7058_7076__$1);{
var G__7078 = cljs.core.chunk_rest.call(null,seq__7058_7076__$1);
var G__7079 = c__4151__auto___7077;
var G__7080 = cljs.core.count.call(null,c__4151__auto___7077);
var G__7081 = 0;
seq__7058_7064 = G__7078;
chunk__7059_7065 = G__7079;
count__7060_7066 = G__7080;
i__7061_7067 = G__7081;
continue;
}
} else
{var vec__7063_7082 = cljs.core.first.call(null,seq__7058_7076__$1);var k_7083 = cljs.core.nth.call(null,vec__7063_7082,0,null);var v_7084 = cljs.core.nth.call(null,vec__7063_7082,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7083,[cljs.core.str(v_7084),cljs.core.str("px")].join(''));
{
var G__7085 = cljs.core.next.call(null,seq__7058_7076__$1);
var G__7086 = null;
var G__7087 = 0;
var G__7088 = 0;
seq__7058_7064 = G__7085;
chunk__7059_7065 = G__7086;
count__7060_7066 = G__7087;
i__7061_7067 = G__7088;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7089){
var elem = cljs.core.first(arglist__7089);
var kvs = cljs.core.rest(arglist__7089);
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
{var G__7098 = dommy.template.__GT_node_like.call(null,elem);(G__7098[cljs.core.name.call(null,k)] = v);
return G__7098;
} else
{var G__7099 = dommy.template.__GT_node_like.call(null,elem);G__7099.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__7099;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7106__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7100_7107 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__7101_7108 = null;var count__7102_7109 = 0;var i__7103_7110 = 0;while(true){
if((i__7103_7110 < count__7102_7109))
{var vec__7104_7111 = cljs.core._nth.call(null,chunk__7101_7108,i__7103_7110);var k_7112__$1 = cljs.core.nth.call(null,vec__7104_7111,0,null);var v_7113__$1 = cljs.core.nth.call(null,vec__7104_7111,1,null);set_attr_BANG_.call(null,elem__$1,k_7112__$1,v_7113__$1);
{
var G__7114 = seq__7100_7107;
var G__7115 = chunk__7101_7108;
var G__7116 = count__7102_7109;
var G__7117 = (i__7103_7110 + 1);
seq__7100_7107 = G__7114;
chunk__7101_7108 = G__7115;
count__7102_7109 = G__7116;
i__7103_7110 = G__7117;
continue;
}
} else
{var temp__4092__auto___7118 = cljs.core.seq.call(null,seq__7100_7107);if(temp__4092__auto___7118)
{var seq__7100_7119__$1 = temp__4092__auto___7118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7100_7119__$1))
{var c__4151__auto___7120 = cljs.core.chunk_first.call(null,seq__7100_7119__$1);{
var G__7121 = cljs.core.chunk_rest.call(null,seq__7100_7119__$1);
var G__7122 = c__4151__auto___7120;
var G__7123 = cljs.core.count.call(null,c__4151__auto___7120);
var G__7124 = 0;
seq__7100_7107 = G__7121;
chunk__7101_7108 = G__7122;
count__7102_7109 = G__7123;
i__7103_7110 = G__7124;
continue;
}
} else
{var vec__7105_7125 = cljs.core.first.call(null,seq__7100_7119__$1);var k_7126__$1 = cljs.core.nth.call(null,vec__7105_7125,0,null);var v_7127__$1 = cljs.core.nth.call(null,vec__7105_7125,1,null);set_attr_BANG_.call(null,elem__$1,k_7126__$1,v_7127__$1);
{
var G__7128 = cljs.core.next.call(null,seq__7100_7119__$1);
var G__7129 = null;
var G__7130 = 0;
var G__7131 = 0;
seq__7100_7107 = G__7128;
chunk__7101_7108 = G__7129;
count__7102_7109 = G__7130;
i__7103_7110 = G__7131;
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
var G__7106 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__7106__delegate.call(this,elem,k,v,kvs);};
G__7106.cljs$lang$maxFixedArity = 3;
G__7106.cljs$lang$applyTo = (function (arglist__7132){
var elem = cljs.core.first(arglist__7132);
arglist__7132 = cljs.core.next(arglist__7132);
var k = cljs.core.first(arglist__7132);
arglist__7132 = cljs.core.next(arglist__7132);
var v = cljs.core.first(arglist__7132);
var kvs = cljs.core.rest(arglist__7132);
return G__7106__delegate(elem,k,v,kvs);
});
G__7106.cljs$core$IFn$_invoke$arity$variadic = G__7106__delegate;
return G__7106;
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
var G__7141__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7137_7142 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__7138_7143 = null;var count__7139_7144 = 0;var i__7140_7145 = 0;while(true){
if((i__7140_7145 < count__7139_7144))
{var k_7146__$1 = cljs.core._nth.call(null,chunk__7138_7143,i__7140_7145);remove_attr_BANG_.call(null,elem__$1,k_7146__$1);
{
var G__7147 = seq__7137_7142;
var G__7148 = chunk__7138_7143;
var G__7149 = count__7139_7144;
var G__7150 = (i__7140_7145 + 1);
seq__7137_7142 = G__7147;
chunk__7138_7143 = G__7148;
count__7139_7144 = G__7149;
i__7140_7145 = G__7150;
continue;
}
} else
{var temp__4092__auto___7151 = cljs.core.seq.call(null,seq__7137_7142);if(temp__4092__auto___7151)
{var seq__7137_7152__$1 = temp__4092__auto___7151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7137_7152__$1))
{var c__4151__auto___7153 = cljs.core.chunk_first.call(null,seq__7137_7152__$1);{
var G__7154 = cljs.core.chunk_rest.call(null,seq__7137_7152__$1);
var G__7155 = c__4151__auto___7153;
var G__7156 = cljs.core.count.call(null,c__4151__auto___7153);
var G__7157 = 0;
seq__7137_7142 = G__7154;
chunk__7138_7143 = G__7155;
count__7139_7144 = G__7156;
i__7140_7145 = G__7157;
continue;
}
} else
{var k_7158__$1 = cljs.core.first.call(null,seq__7137_7152__$1);remove_attr_BANG_.call(null,elem__$1,k_7158__$1);
{
var G__7159 = cljs.core.next.call(null,seq__7137_7152__$1);
var G__7160 = null;
var G__7161 = 0;
var G__7162 = 0;
seq__7137_7142 = G__7159;
chunk__7138_7143 = G__7160;
count__7139_7144 = G__7161;
i__7140_7145 = G__7162;
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
var G__7141 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7141__delegate.call(this,elem,k,ks);};
G__7141.cljs$lang$maxFixedArity = 2;
G__7141.cljs$lang$applyTo = (function (arglist__7163){
var elem = cljs.core.first(arglist__7163);
arglist__7163 = cljs.core.next(arglist__7163);
var k = cljs.core.first(arglist__7163);
var ks = cljs.core.rest(arglist__7163);
return G__7141__delegate(elem,k,ks);
});
G__7141.cljs$core$IFn$_invoke$arity$variadic = G__7141__delegate;
return G__7141;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__7165 = dommy.template.__GT_node_like.call(null,elem);G__7165.style.display = ((show_QMARK_)?"":"none");
return G__7165;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__7167 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7167,false);
return G__7167;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__7169 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7169,true);
return G__7169;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__7171 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__7171["constructor"] = Object);
return G__7171;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map
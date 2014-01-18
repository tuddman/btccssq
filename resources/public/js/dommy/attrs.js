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
var G__7829 = (i + class$.length);
start_from = G__7829;
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
{var temp__4090__auto___7854 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7854))
{var class_list_7855 = temp__4090__auto___7854;var seq__7842_7856 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7843_7857 = null;var count__7844_7858 = 0;var i__7845_7859 = 0;while(true){
if((i__7845_7859 < count__7844_7858))
{var class_7860 = cljs.core._nth.call(null,chunk__7843_7857,i__7845_7859);class_list_7855.add(class_7860);
{
var G__7861 = seq__7842_7856;
var G__7862 = chunk__7843_7857;
var G__7863 = count__7844_7858;
var G__7864 = (i__7845_7859 + 1);
seq__7842_7856 = G__7861;
chunk__7843_7857 = G__7862;
count__7844_7858 = G__7863;
i__7845_7859 = G__7864;
continue;
}
} else
{var temp__4092__auto___7865 = cljs.core.seq.call(null,seq__7842_7856);if(temp__4092__auto___7865)
{var seq__7842_7866__$1 = temp__4092__auto___7865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7842_7866__$1))
{var c__4151__auto___7867 = cljs.core.chunk_first.call(null,seq__7842_7866__$1);{
var G__7868 = cljs.core.chunk_rest.call(null,seq__7842_7866__$1);
var G__7869 = c__4151__auto___7867;
var G__7870 = cljs.core.count.call(null,c__4151__auto___7867);
var G__7871 = 0;
seq__7842_7856 = G__7868;
chunk__7843_7857 = G__7869;
count__7844_7858 = G__7870;
i__7845_7859 = G__7871;
continue;
}
} else
{var class_7872 = cljs.core.first.call(null,seq__7842_7866__$1);class_list_7855.add(class_7872);
{
var G__7873 = cljs.core.next.call(null,seq__7842_7866__$1);
var G__7874 = null;
var G__7875 = 0;
var G__7876 = 0;
seq__7842_7856 = G__7873;
chunk__7843_7857 = G__7874;
count__7844_7858 = G__7875;
i__7845_7859 = G__7876;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_7877 = elem__$1.className;var seq__7846_7878 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7847_7879 = null;var count__7848_7880 = 0;var i__7849_7881 = 0;while(true){
if((i__7849_7881 < count__7848_7880))
{var class_7882 = cljs.core._nth.call(null,chunk__7847_7879,i__7849_7881);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7877,class_7882)))
{} else
{elem__$1.className = (((class_name_7877 === ""))?class_7882:[cljs.core.str(class_name_7877),cljs.core.str(" "),cljs.core.str(class_7882)].join(''));
}
{
var G__7883 = seq__7846_7878;
var G__7884 = chunk__7847_7879;
var G__7885 = count__7848_7880;
var G__7886 = (i__7849_7881 + 1);
seq__7846_7878 = G__7883;
chunk__7847_7879 = G__7884;
count__7848_7880 = G__7885;
i__7849_7881 = G__7886;
continue;
}
} else
{var temp__4092__auto___7887 = cljs.core.seq.call(null,seq__7846_7878);if(temp__4092__auto___7887)
{var seq__7846_7888__$1 = temp__4092__auto___7887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7846_7888__$1))
{var c__4151__auto___7889 = cljs.core.chunk_first.call(null,seq__7846_7888__$1);{
var G__7890 = cljs.core.chunk_rest.call(null,seq__7846_7888__$1);
var G__7891 = c__4151__auto___7889;
var G__7892 = cljs.core.count.call(null,c__4151__auto___7889);
var G__7893 = 0;
seq__7846_7878 = G__7890;
chunk__7847_7879 = G__7891;
count__7848_7880 = G__7892;
i__7849_7881 = G__7893;
continue;
}
} else
{var class_7894 = cljs.core.first.call(null,seq__7846_7888__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7877,class_7894)))
{} else
{elem__$1.className = (((class_name_7877 === ""))?class_7894:[cljs.core.str(class_name_7877),cljs.core.str(" "),cljs.core.str(class_7894)].join(''));
}
{
var G__7895 = cljs.core.next.call(null,seq__7846_7888__$1);
var G__7896 = null;
var G__7897 = 0;
var G__7898 = 0;
seq__7846_7878 = G__7895;
chunk__7847_7879 = G__7896;
count__7848_7880 = G__7897;
i__7849_7881 = G__7898;
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
var G__7899__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7850_7900 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__7851_7901 = null;var count__7852_7902 = 0;var i__7853_7903 = 0;while(true){
if((i__7853_7903 < count__7852_7902))
{var c_7904 = cljs.core._nth.call(null,chunk__7851_7901,i__7853_7903);add_class_BANG_.call(null,elem__$1,c_7904);
{
var G__7905 = seq__7850_7900;
var G__7906 = chunk__7851_7901;
var G__7907 = count__7852_7902;
var G__7908 = (i__7853_7903 + 1);
seq__7850_7900 = G__7905;
chunk__7851_7901 = G__7906;
count__7852_7902 = G__7907;
i__7853_7903 = G__7908;
continue;
}
} else
{var temp__4092__auto___7909 = cljs.core.seq.call(null,seq__7850_7900);if(temp__4092__auto___7909)
{var seq__7850_7910__$1 = temp__4092__auto___7909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7850_7910__$1))
{var c__4151__auto___7911 = cljs.core.chunk_first.call(null,seq__7850_7910__$1);{
var G__7912 = cljs.core.chunk_rest.call(null,seq__7850_7910__$1);
var G__7913 = c__4151__auto___7911;
var G__7914 = cljs.core.count.call(null,c__4151__auto___7911);
var G__7915 = 0;
seq__7850_7900 = G__7912;
chunk__7851_7901 = G__7913;
count__7852_7902 = G__7914;
i__7853_7903 = G__7915;
continue;
}
} else
{var c_7916 = cljs.core.first.call(null,seq__7850_7910__$1);add_class_BANG_.call(null,elem__$1,c_7916);
{
var G__7917 = cljs.core.next.call(null,seq__7850_7910__$1);
var G__7918 = null;
var G__7919 = 0;
var G__7920 = 0;
seq__7850_7900 = G__7917;
chunk__7851_7901 = G__7918;
count__7852_7902 = G__7919;
i__7853_7903 = G__7920;
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
var G__7899 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7899__delegate.call(this,elem,classes,more_classes);};
G__7899.cljs$lang$maxFixedArity = 2;
G__7899.cljs$lang$applyTo = (function (arglist__7921){
var elem = cljs.core.first(arglist__7921);
arglist__7921 = cljs.core.next(arglist__7921);
var classes = cljs.core.first(arglist__7921);
var more_classes = cljs.core.rest(arglist__7921);
return G__7899__delegate(elem,classes,more_classes);
});
G__7899.cljs$core$IFn$_invoke$arity$variadic = G__7899__delegate;
return G__7899;
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
var G__7922 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__7922;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___7931 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7931))
{var class_list_7932 = temp__4090__auto___7931;class_list_7932.remove(class$__$1);
} else
{var class_name_7933 = elem__$1.className;var new_class_name_7934 = dommy.attrs.remove_class_str.call(null,class_name_7933,class$__$1);if((class_name_7933 === new_class_name_7934))
{} else
{elem__$1.className = new_class_name_7934;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__7935__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7927 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__7928 = null;var count__7929 = 0;var i__7930 = 0;while(true){
if((i__7930 < count__7929))
{var c = cljs.core._nth.call(null,chunk__7928,i__7930);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7936 = seq__7927;
var G__7937 = chunk__7928;
var G__7938 = count__7929;
var G__7939 = (i__7930 + 1);
seq__7927 = G__7936;
chunk__7928 = G__7937;
count__7929 = G__7938;
i__7930 = G__7939;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7927);if(temp__4092__auto__)
{var seq__7927__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7927__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__7927__$1);{
var G__7940 = cljs.core.chunk_rest.call(null,seq__7927__$1);
var G__7941 = c__4151__auto__;
var G__7942 = cljs.core.count.call(null,c__4151__auto__);
var G__7943 = 0;
seq__7927 = G__7940;
chunk__7928 = G__7941;
count__7929 = G__7942;
i__7930 = G__7943;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__7927__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7944 = cljs.core.next.call(null,seq__7927__$1);
var G__7945 = null;
var G__7946 = 0;
var G__7947 = 0;
seq__7927 = G__7944;
chunk__7928 = G__7945;
count__7929 = G__7946;
i__7930 = G__7947;
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
var G__7935 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7935__delegate.call(this,elem,class$,classes);};
G__7935.cljs$lang$maxFixedArity = 2;
G__7935.cljs$lang$applyTo = (function (arglist__7948){
var elem = cljs.core.first(arglist__7948);
arglist__7948 = cljs.core.next(arglist__7948);
var class$ = cljs.core.first(arglist__7948);
var classes = cljs.core.rest(arglist__7948);
return G__7935__delegate(elem,class$,classes);
});
G__7935.cljs$core$IFn$_invoke$arity$variadic = G__7935__delegate;
return G__7935;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___7949 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7949))
{var class_list_7950 = temp__4090__auto___7949;class_list_7950.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__7953){var vec__7954 = p__7953;var k = cljs.core.nth.call(null,vec__7954,0,null);var v = cljs.core.nth.call(null,vec__7954,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__7961_7967 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__7962_7968 = null;var count__7963_7969 = 0;var i__7964_7970 = 0;while(true){
if((i__7964_7970 < count__7963_7969))
{var vec__7965_7971 = cljs.core._nth.call(null,chunk__7962_7968,i__7964_7970);var k_7972 = cljs.core.nth.call(null,vec__7965_7971,0,null);var v_7973 = cljs.core.nth.call(null,vec__7965_7971,1,null);(style[cljs.core.name.call(null,k_7972)] = v_7973);
{
var G__7974 = seq__7961_7967;
var G__7975 = chunk__7962_7968;
var G__7976 = count__7963_7969;
var G__7977 = (i__7964_7970 + 1);
seq__7961_7967 = G__7974;
chunk__7962_7968 = G__7975;
count__7963_7969 = G__7976;
i__7964_7970 = G__7977;
continue;
}
} else
{var temp__4092__auto___7978 = cljs.core.seq.call(null,seq__7961_7967);if(temp__4092__auto___7978)
{var seq__7961_7979__$1 = temp__4092__auto___7978;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7961_7979__$1))
{var c__4151__auto___7980 = cljs.core.chunk_first.call(null,seq__7961_7979__$1);{
var G__7981 = cljs.core.chunk_rest.call(null,seq__7961_7979__$1);
var G__7982 = c__4151__auto___7980;
var G__7983 = cljs.core.count.call(null,c__4151__auto___7980);
var G__7984 = 0;
seq__7961_7967 = G__7981;
chunk__7962_7968 = G__7982;
count__7963_7969 = G__7983;
i__7964_7970 = G__7984;
continue;
}
} else
{var vec__7966_7985 = cljs.core.first.call(null,seq__7961_7979__$1);var k_7986 = cljs.core.nth.call(null,vec__7966_7985,0,null);var v_7987 = cljs.core.nth.call(null,vec__7966_7985,1,null);(style[cljs.core.name.call(null,k_7986)] = v_7987);
{
var G__7988 = cljs.core.next.call(null,seq__7961_7979__$1);
var G__7989 = null;
var G__7990 = 0;
var G__7991 = 0;
seq__7961_7967 = G__7988;
chunk__7962_7968 = G__7989;
count__7963_7969 = G__7990;
i__7964_7970 = G__7991;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7992){
var elem = cljs.core.first(arglist__7992);
var kvs = cljs.core.rest(arglist__7992);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7999_8005 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__8000_8006 = null;var count__8001_8007 = 0;var i__8002_8008 = 0;while(true){
if((i__8002_8008 < count__8001_8007))
{var vec__8003_8009 = cljs.core._nth.call(null,chunk__8000_8006,i__8002_8008);var k_8010 = cljs.core.nth.call(null,vec__8003_8009,0,null);var v_8011 = cljs.core.nth.call(null,vec__8003_8009,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8010,[cljs.core.str(v_8011),cljs.core.str("px")].join(''));
{
var G__8012 = seq__7999_8005;
var G__8013 = chunk__8000_8006;
var G__8014 = count__8001_8007;
var G__8015 = (i__8002_8008 + 1);
seq__7999_8005 = G__8012;
chunk__8000_8006 = G__8013;
count__8001_8007 = G__8014;
i__8002_8008 = G__8015;
continue;
}
} else
{var temp__4092__auto___8016 = cljs.core.seq.call(null,seq__7999_8005);if(temp__4092__auto___8016)
{var seq__7999_8017__$1 = temp__4092__auto___8016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7999_8017__$1))
{var c__4151__auto___8018 = cljs.core.chunk_first.call(null,seq__7999_8017__$1);{
var G__8019 = cljs.core.chunk_rest.call(null,seq__7999_8017__$1);
var G__8020 = c__4151__auto___8018;
var G__8021 = cljs.core.count.call(null,c__4151__auto___8018);
var G__8022 = 0;
seq__7999_8005 = G__8019;
chunk__8000_8006 = G__8020;
count__8001_8007 = G__8021;
i__8002_8008 = G__8022;
continue;
}
} else
{var vec__8004_8023 = cljs.core.first.call(null,seq__7999_8017__$1);var k_8024 = cljs.core.nth.call(null,vec__8004_8023,0,null);var v_8025 = cljs.core.nth.call(null,vec__8004_8023,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8024,[cljs.core.str(v_8025),cljs.core.str("px")].join(''));
{
var G__8026 = cljs.core.next.call(null,seq__7999_8017__$1);
var G__8027 = null;
var G__8028 = 0;
var G__8029 = 0;
seq__7999_8005 = G__8026;
chunk__8000_8006 = G__8027;
count__8001_8007 = G__8028;
i__8002_8008 = G__8029;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8030){
var elem = cljs.core.first(arglist__8030);
var kvs = cljs.core.rest(arglist__8030);
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
{var G__8039 = dommy.template.__GT_node_like.call(null,elem);(G__8039[cljs.core.name.call(null,k)] = v);
return G__8039;
} else
{var G__8040 = dommy.template.__GT_node_like.call(null,elem);G__8040.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__8040;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8047__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8041_8048 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__8042_8049 = null;var count__8043_8050 = 0;var i__8044_8051 = 0;while(true){
if((i__8044_8051 < count__8043_8050))
{var vec__8045_8052 = cljs.core._nth.call(null,chunk__8042_8049,i__8044_8051);var k_8053__$1 = cljs.core.nth.call(null,vec__8045_8052,0,null);var v_8054__$1 = cljs.core.nth.call(null,vec__8045_8052,1,null);set_attr_BANG_.call(null,elem__$1,k_8053__$1,v_8054__$1);
{
var G__8055 = seq__8041_8048;
var G__8056 = chunk__8042_8049;
var G__8057 = count__8043_8050;
var G__8058 = (i__8044_8051 + 1);
seq__8041_8048 = G__8055;
chunk__8042_8049 = G__8056;
count__8043_8050 = G__8057;
i__8044_8051 = G__8058;
continue;
}
} else
{var temp__4092__auto___8059 = cljs.core.seq.call(null,seq__8041_8048);if(temp__4092__auto___8059)
{var seq__8041_8060__$1 = temp__4092__auto___8059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8041_8060__$1))
{var c__4151__auto___8061 = cljs.core.chunk_first.call(null,seq__8041_8060__$1);{
var G__8062 = cljs.core.chunk_rest.call(null,seq__8041_8060__$1);
var G__8063 = c__4151__auto___8061;
var G__8064 = cljs.core.count.call(null,c__4151__auto___8061);
var G__8065 = 0;
seq__8041_8048 = G__8062;
chunk__8042_8049 = G__8063;
count__8043_8050 = G__8064;
i__8044_8051 = G__8065;
continue;
}
} else
{var vec__8046_8066 = cljs.core.first.call(null,seq__8041_8060__$1);var k_8067__$1 = cljs.core.nth.call(null,vec__8046_8066,0,null);var v_8068__$1 = cljs.core.nth.call(null,vec__8046_8066,1,null);set_attr_BANG_.call(null,elem__$1,k_8067__$1,v_8068__$1);
{
var G__8069 = cljs.core.next.call(null,seq__8041_8060__$1);
var G__8070 = null;
var G__8071 = 0;
var G__8072 = 0;
seq__8041_8048 = G__8069;
chunk__8042_8049 = G__8070;
count__8043_8050 = G__8071;
i__8044_8051 = G__8072;
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
var G__8047 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8047__delegate.call(this,elem,k,v,kvs);};
G__8047.cljs$lang$maxFixedArity = 3;
G__8047.cljs$lang$applyTo = (function (arglist__8073){
var elem = cljs.core.first(arglist__8073);
arglist__8073 = cljs.core.next(arglist__8073);
var k = cljs.core.first(arglist__8073);
arglist__8073 = cljs.core.next(arglist__8073);
var v = cljs.core.first(arglist__8073);
var kvs = cljs.core.rest(arglist__8073);
return G__8047__delegate(elem,k,v,kvs);
});
G__8047.cljs$core$IFn$_invoke$arity$variadic = G__8047__delegate;
return G__8047;
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
var G__8082__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8078_8083 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8079_8084 = null;var count__8080_8085 = 0;var i__8081_8086 = 0;while(true){
if((i__8081_8086 < count__8080_8085))
{var k_8087__$1 = cljs.core._nth.call(null,chunk__8079_8084,i__8081_8086);remove_attr_BANG_.call(null,elem__$1,k_8087__$1);
{
var G__8088 = seq__8078_8083;
var G__8089 = chunk__8079_8084;
var G__8090 = count__8080_8085;
var G__8091 = (i__8081_8086 + 1);
seq__8078_8083 = G__8088;
chunk__8079_8084 = G__8089;
count__8080_8085 = G__8090;
i__8081_8086 = G__8091;
continue;
}
} else
{var temp__4092__auto___8092 = cljs.core.seq.call(null,seq__8078_8083);if(temp__4092__auto___8092)
{var seq__8078_8093__$1 = temp__4092__auto___8092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8078_8093__$1))
{var c__4151__auto___8094 = cljs.core.chunk_first.call(null,seq__8078_8093__$1);{
var G__8095 = cljs.core.chunk_rest.call(null,seq__8078_8093__$1);
var G__8096 = c__4151__auto___8094;
var G__8097 = cljs.core.count.call(null,c__4151__auto___8094);
var G__8098 = 0;
seq__8078_8083 = G__8095;
chunk__8079_8084 = G__8096;
count__8080_8085 = G__8097;
i__8081_8086 = G__8098;
continue;
}
} else
{var k_8099__$1 = cljs.core.first.call(null,seq__8078_8093__$1);remove_attr_BANG_.call(null,elem__$1,k_8099__$1);
{
var G__8100 = cljs.core.next.call(null,seq__8078_8093__$1);
var G__8101 = null;
var G__8102 = 0;
var G__8103 = 0;
seq__8078_8083 = G__8100;
chunk__8079_8084 = G__8101;
count__8080_8085 = G__8102;
i__8081_8086 = G__8103;
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
var G__8082 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8082__delegate.call(this,elem,k,ks);};
G__8082.cljs$lang$maxFixedArity = 2;
G__8082.cljs$lang$applyTo = (function (arglist__8104){
var elem = cljs.core.first(arglist__8104);
arglist__8104 = cljs.core.next(arglist__8104);
var k = cljs.core.first(arglist__8104);
var ks = cljs.core.rest(arglist__8104);
return G__8082__delegate(elem,k,ks);
});
G__8082.cljs$core$IFn$_invoke$arity$variadic = G__8082__delegate;
return G__8082;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8106 = dommy.template.__GT_node_like.call(null,elem);G__8106.style.display = ((show_QMARK_)?"":"none");
return G__8106;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8108 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8108,false);
return G__8108;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8110 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8110,true);
return G__8110;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8112 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8112["constructor"] = Object);
return G__8112;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map
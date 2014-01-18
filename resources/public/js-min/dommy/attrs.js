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
{if(dommy.attrs.class_match_QMARK_(class_name,class$,i))
{return i;
} else
{{
var G__14366 = (i + class$.length);
start_from = G__14366;
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
{var temp__4090__auto___14391 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14391))
{var class_list_14392 = temp__4090__auto___14391;var seq__14379_14393 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__14380_14394 = null;var count__14381_14395 = 0;var i__14382_14396 = 0;while(true){
if((i__14382_14396 < count__14381_14395))
{var class_14397 = chunk__14380_14394.cljs$core$IIndexed$_nth$arity$2(null,i__14382_14396);class_list_14392.add(class_14397);
{
var G__14398 = seq__14379_14393;
var G__14399 = chunk__14380_14394;
var G__14400 = count__14381_14395;
var G__14401 = (i__14382_14396 + 1);
seq__14379_14393 = G__14398;
chunk__14380_14394 = G__14399;
count__14381_14395 = G__14400;
i__14382_14396 = G__14401;
continue;
}
} else
{var temp__4092__auto___14402 = cljs.core.seq(seq__14379_14393);if(temp__4092__auto___14402)
{var seq__14379_14403__$1 = temp__4092__auto___14402;if(cljs.core.chunked_seq_QMARK_(seq__14379_14403__$1))
{var c__4126__auto___14404 = cljs.core.chunk_first(seq__14379_14403__$1);{
var G__14405 = cljs.core.chunk_rest(seq__14379_14403__$1);
var G__14406 = c__4126__auto___14404;
var G__14407 = cljs.core.count(c__4126__auto___14404);
var G__14408 = 0;
seq__14379_14393 = G__14405;
chunk__14380_14394 = G__14406;
count__14381_14395 = G__14407;
i__14382_14396 = G__14408;
continue;
}
} else
{var class_14409 = cljs.core.first(seq__14379_14403__$1);class_list_14392.add(class_14409);
{
var G__14410 = cljs.core.next(seq__14379_14403__$1);
var G__14411 = null;
var G__14412 = 0;
var G__14413 = 0;
seq__14379_14393 = G__14410;
chunk__14380_14394 = G__14411;
count__14381_14395 = G__14412;
i__14382_14396 = G__14413;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_14414 = elem__$1.className;var seq__14383_14415 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__14384_14416 = null;var count__14385_14417 = 0;var i__14386_14418 = 0;while(true){
if((i__14386_14418 < count__14385_14417))
{var class_14419 = chunk__14384_14416.cljs$core$IIndexed$_nth$arity$2(null,i__14386_14418);if(cljs.core.truth_(dommy.attrs.class_index(class_name_14414,class_14419)))
{} else
{elem__$1.className = (((class_name_14414 === ""))?class_14419:[cljs.core.str(class_name_14414),cljs.core.str(" "),cljs.core.str(class_14419)].join(''));
}
{
var G__14420 = seq__14383_14415;
var G__14421 = chunk__14384_14416;
var G__14422 = count__14385_14417;
var G__14423 = (i__14386_14418 + 1);
seq__14383_14415 = G__14420;
chunk__14384_14416 = G__14421;
count__14385_14417 = G__14422;
i__14386_14418 = G__14423;
continue;
}
} else
{var temp__4092__auto___14424 = cljs.core.seq(seq__14383_14415);if(temp__4092__auto___14424)
{var seq__14383_14425__$1 = temp__4092__auto___14424;if(cljs.core.chunked_seq_QMARK_(seq__14383_14425__$1))
{var c__4126__auto___14426 = cljs.core.chunk_first(seq__14383_14425__$1);{
var G__14427 = cljs.core.chunk_rest(seq__14383_14425__$1);
var G__14428 = c__4126__auto___14426;
var G__14429 = cljs.core.count(c__4126__auto___14426);
var G__14430 = 0;
seq__14383_14415 = G__14427;
chunk__14384_14416 = G__14428;
count__14385_14417 = G__14429;
i__14386_14418 = G__14430;
continue;
}
} else
{var class_14431 = cljs.core.first(seq__14383_14425__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_14414,class_14431)))
{} else
{elem__$1.className = (((class_name_14414 === ""))?class_14431:[cljs.core.str(class_name_14414),cljs.core.str(" "),cljs.core.str(class_14431)].join(''));
}
{
var G__14432 = cljs.core.next(seq__14383_14425__$1);
var G__14433 = null;
var G__14434 = 0;
var G__14435 = 0;
seq__14383_14415 = G__14432;
chunk__14384_14416 = G__14433;
count__14385_14417 = G__14434;
i__14386_14418 = G__14435;
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
var G__14436__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__14387_14437 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__14388_14438 = null;var count__14389_14439 = 0;var i__14390_14440 = 0;while(true){
if((i__14390_14440 < count__14389_14439))
{var c_14441 = chunk__14388_14438.cljs$core$IIndexed$_nth$arity$2(null,i__14390_14440);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_14441);
{
var G__14442 = seq__14387_14437;
var G__14443 = chunk__14388_14438;
var G__14444 = count__14389_14439;
var G__14445 = (i__14390_14440 + 1);
seq__14387_14437 = G__14442;
chunk__14388_14438 = G__14443;
count__14389_14439 = G__14444;
i__14390_14440 = G__14445;
continue;
}
} else
{var temp__4092__auto___14446 = cljs.core.seq(seq__14387_14437);if(temp__4092__auto___14446)
{var seq__14387_14447__$1 = temp__4092__auto___14446;if(cljs.core.chunked_seq_QMARK_(seq__14387_14447__$1))
{var c__4126__auto___14448 = cljs.core.chunk_first(seq__14387_14447__$1);{
var G__14449 = cljs.core.chunk_rest(seq__14387_14447__$1);
var G__14450 = c__4126__auto___14448;
var G__14451 = cljs.core.count(c__4126__auto___14448);
var G__14452 = 0;
seq__14387_14437 = G__14449;
chunk__14388_14438 = G__14450;
count__14389_14439 = G__14451;
i__14390_14440 = G__14452;
continue;
}
} else
{var c_14453 = cljs.core.first(seq__14387_14447__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_14453);
{
var G__14454 = cljs.core.next(seq__14387_14447__$1);
var G__14455 = null;
var G__14456 = 0;
var G__14457 = 0;
seq__14387_14437 = G__14454;
chunk__14388_14438 = G__14455;
count__14389_14439 = G__14456;
i__14390_14440 = G__14457;
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
var G__14436 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14436__delegate.call(this,elem,classes,more_classes);};
G__14436.cljs$lang$maxFixedArity = 2;
G__14436.cljs$lang$applyTo = (function (arglist__14458){
var elem = cljs.core.first(arglist__14458);
arglist__14458 = cljs.core.next(arglist__14458);
var classes = cljs.core.first(arglist__14458);
var more_classes = cljs.core.rest(arglist__14458);
return G__14436__delegate(elem,classes,more_classes);
});
G__14436.cljs$core$IFn$_invoke$arity$variadic = G__14436__delegate;
return G__14436;
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
var G__14459 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__14459;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___14468 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14468))
{var class_list_14469 = temp__4090__auto___14468;class_list_14469.remove(class$__$1);
} else
{var class_name_14470 = elem__$1.className;var new_class_name_14471 = dommy.attrs.remove_class_str(class_name_14470,class$__$1);if((class_name_14470 === new_class_name_14471))
{} else
{elem__$1.className = new_class_name_14471;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__14472__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__14464 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__14465 = null;var count__14466 = 0;var i__14467 = 0;while(true){
if((i__14467 < count__14466))
{var c = chunk__14465.cljs$core$IIndexed$_nth$arity$2(null,i__14467);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__14473 = seq__14464;
var G__14474 = chunk__14465;
var G__14475 = count__14466;
var G__14476 = (i__14467 + 1);
seq__14464 = G__14473;
chunk__14465 = G__14474;
count__14466 = G__14475;
i__14467 = G__14476;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__14464);if(temp__4092__auto__)
{var seq__14464__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__14464__$1))
{var c__4126__auto__ = cljs.core.chunk_first(seq__14464__$1);{
var G__14477 = cljs.core.chunk_rest(seq__14464__$1);
var G__14478 = c__4126__auto__;
var G__14479 = cljs.core.count(c__4126__auto__);
var G__14480 = 0;
seq__14464 = G__14477;
chunk__14465 = G__14478;
count__14466 = G__14479;
i__14467 = G__14480;
continue;
}
} else
{var c = cljs.core.first(seq__14464__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__14481 = cljs.core.next(seq__14464__$1);
var G__14482 = null;
var G__14483 = 0;
var G__14484 = 0;
seq__14464 = G__14481;
chunk__14465 = G__14482;
count__14466 = G__14483;
i__14467 = G__14484;
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
var G__14472 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14472__delegate.call(this,elem,class$,classes);};
G__14472.cljs$lang$maxFixedArity = 2;
G__14472.cljs$lang$applyTo = (function (arglist__14485){
var elem = cljs.core.first(arglist__14485);
arglist__14485 = cljs.core.next(arglist__14485);
var class$ = cljs.core.first(arglist__14485);
var classes = cljs.core.rest(arglist__14485);
return G__14472__delegate(elem,class$,classes);
});
G__14472.cljs$core$IFn$_invoke$arity$variadic = G__14472__delegate;
return G__14472;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___14486 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14486))
{var class_list_14487 = temp__4090__auto___14486;class_list_14487.toggle(class$__$1);
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
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14490){var vec__14491 = p__14490;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14491,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14491,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__14498_14504 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__14499_14505 = null;var count__14500_14506 = 0;var i__14501_14507 = 0;while(true){
if((i__14501_14507 < count__14500_14506))
{var vec__14502_14508 = chunk__14499_14505.cljs$core$IIndexed$_nth$arity$2(null,i__14501_14507);var k_14509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14502_14508,0,null);var v_14510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14502_14508,1,null);(style[cljs.core.name(k_14509)] = v_14510);
{
var G__14511 = seq__14498_14504;
var G__14512 = chunk__14499_14505;
var G__14513 = count__14500_14506;
var G__14514 = (i__14501_14507 + 1);
seq__14498_14504 = G__14511;
chunk__14499_14505 = G__14512;
count__14500_14506 = G__14513;
i__14501_14507 = G__14514;
continue;
}
} else
{var temp__4092__auto___14515 = cljs.core.seq(seq__14498_14504);if(temp__4092__auto___14515)
{var seq__14498_14516__$1 = temp__4092__auto___14515;if(cljs.core.chunked_seq_QMARK_(seq__14498_14516__$1))
{var c__4126__auto___14517 = cljs.core.chunk_first(seq__14498_14516__$1);{
var G__14518 = cljs.core.chunk_rest(seq__14498_14516__$1);
var G__14519 = c__4126__auto___14517;
var G__14520 = cljs.core.count(c__4126__auto___14517);
var G__14521 = 0;
seq__14498_14504 = G__14518;
chunk__14499_14505 = G__14519;
count__14500_14506 = G__14520;
i__14501_14507 = G__14521;
continue;
}
} else
{var vec__14503_14522 = cljs.core.first(seq__14498_14516__$1);var k_14523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14503_14522,0,null);var v_14524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14503_14522,1,null);(style[cljs.core.name(k_14523)] = v_14524);
{
var G__14525 = cljs.core.next(seq__14498_14516__$1);
var G__14526 = null;
var G__14527 = 0;
var G__14528 = 0;
seq__14498_14504 = G__14525;
chunk__14499_14505 = G__14526;
count__14500_14506 = G__14527;
i__14501_14507 = G__14528;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14529){
var elem = cljs.core.first(arglist__14529);
var kvs = cljs.core.rest(arglist__14529);
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
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__14536_14542 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__14537_14543 = null;var count__14538_14544 = 0;var i__14539_14545 = 0;while(true){
if((i__14539_14545 < count__14538_14544))
{var vec__14540_14546 = chunk__14537_14543.cljs$core$IIndexed$_nth$arity$2(null,i__14539_14545);var k_14547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14540_14546,0,null);var v_14548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14540_14546,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_14547,[cljs.core.str(v_14548),cljs.core.str("px")].join('')], 0));
{
var G__14549 = seq__14536_14542;
var G__14550 = chunk__14537_14543;
var G__14551 = count__14538_14544;
var G__14552 = (i__14539_14545 + 1);
seq__14536_14542 = G__14549;
chunk__14537_14543 = G__14550;
count__14538_14544 = G__14551;
i__14539_14545 = G__14552;
continue;
}
} else
{var temp__4092__auto___14553 = cljs.core.seq(seq__14536_14542);if(temp__4092__auto___14553)
{var seq__14536_14554__$1 = temp__4092__auto___14553;if(cljs.core.chunked_seq_QMARK_(seq__14536_14554__$1))
{var c__4126__auto___14555 = cljs.core.chunk_first(seq__14536_14554__$1);{
var G__14556 = cljs.core.chunk_rest(seq__14536_14554__$1);
var G__14557 = c__4126__auto___14555;
var G__14558 = cljs.core.count(c__4126__auto___14555);
var G__14559 = 0;
seq__14536_14542 = G__14556;
chunk__14537_14543 = G__14557;
count__14538_14544 = G__14558;
i__14539_14545 = G__14559;
continue;
}
} else
{var vec__14541_14560 = cljs.core.first(seq__14536_14554__$1);var k_14561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14541_14560,0,null);var v_14562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14541_14560,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_14561,[cljs.core.str(v_14562),cljs.core.str("px")].join('')], 0));
{
var G__14563 = cljs.core.next(seq__14536_14554__$1);
var G__14564 = null;
var G__14565 = 0;
var G__14566 = 0;
seq__14536_14542 = G__14563;
chunk__14537_14543 = G__14564;
count__14538_14544 = G__14565;
i__14539_14545 = G__14566;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__14567){
var elem = cljs.core.first(arglist__14567);
var kvs = cljs.core.rest(arglist__14567);
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
{var G__14576 = dommy.template.__GT_node_like(elem);(G__14576[cljs.core.name(k)] = v);
return G__14576;
} else
{var G__14577 = dommy.template.__GT_node_like(elem);G__14577.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$97))?dommy.attrs.style_str(v):v));
return G__14577;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__14584__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__14578_14585 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__14579_14586 = null;var count__14580_14587 = 0;var i__14581_14588 = 0;while(true){
if((i__14581_14588 < count__14580_14587))
{var vec__14582_14589 = chunk__14579_14586.cljs$core$IIndexed$_nth$arity$2(null,i__14581_14588);var k_14590__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14582_14589,0,null);var v_14591__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14582_14589,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_14590__$1,v_14591__$1);
{
var G__14592 = seq__14578_14585;
var G__14593 = chunk__14579_14586;
var G__14594 = count__14580_14587;
var G__14595 = (i__14581_14588 + 1);
seq__14578_14585 = G__14592;
chunk__14579_14586 = G__14593;
count__14580_14587 = G__14594;
i__14581_14588 = G__14595;
continue;
}
} else
{var temp__4092__auto___14596 = cljs.core.seq(seq__14578_14585);if(temp__4092__auto___14596)
{var seq__14578_14597__$1 = temp__4092__auto___14596;if(cljs.core.chunked_seq_QMARK_(seq__14578_14597__$1))
{var c__4126__auto___14598 = cljs.core.chunk_first(seq__14578_14597__$1);{
var G__14599 = cljs.core.chunk_rest(seq__14578_14597__$1);
var G__14600 = c__4126__auto___14598;
var G__14601 = cljs.core.count(c__4126__auto___14598);
var G__14602 = 0;
seq__14578_14585 = G__14599;
chunk__14579_14586 = G__14600;
count__14580_14587 = G__14601;
i__14581_14588 = G__14602;
continue;
}
} else
{var vec__14583_14603 = cljs.core.first(seq__14578_14597__$1);var k_14604__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14583_14603,0,null);var v_14605__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14583_14603,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_14604__$1,v_14605__$1);
{
var G__14606 = cljs.core.next(seq__14578_14597__$1);
var G__14607 = null;
var G__14608 = 0;
var G__14609 = 0;
seq__14578_14585 = G__14606;
chunk__14579_14586 = G__14607;
count__14580_14587 = G__14608;
i__14581_14588 = G__14609;
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
var G__14584 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14584__delegate.call(this,elem,k,v,kvs);};
G__14584.cljs$lang$maxFixedArity = 3;
G__14584.cljs$lang$applyTo = (function (arglist__14610){
var elem = cljs.core.first(arglist__14610);
arglist__14610 = cljs.core.next(arglist__14610);
var k = cljs.core.first(arglist__14610);
arglist__14610 = cljs.core.next(arglist__14610);
var v = cljs.core.first(arglist__14610);
var kvs = cljs.core.rest(arglist__14610);
return G__14584__delegate(elem,k,v,kvs);
});
G__14584.cljs$core$IFn$_invoke$arity$variadic = G__14584__delegate;
return G__14584;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$98,null,cljs.core.constant$keyword$99,null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name(k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__14619__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__14615_14620 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__14616_14621 = null;var count__14617_14622 = 0;var i__14618_14623 = 0;while(true){
if((i__14618_14623 < count__14617_14622))
{var k_14624__$1 = chunk__14616_14621.cljs$core$IIndexed$_nth$arity$2(null,i__14618_14623);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_14624__$1);
{
var G__14625 = seq__14615_14620;
var G__14626 = chunk__14616_14621;
var G__14627 = count__14617_14622;
var G__14628 = (i__14618_14623 + 1);
seq__14615_14620 = G__14625;
chunk__14616_14621 = G__14626;
count__14617_14622 = G__14627;
i__14618_14623 = G__14628;
continue;
}
} else
{var temp__4092__auto___14629 = cljs.core.seq(seq__14615_14620);if(temp__4092__auto___14629)
{var seq__14615_14630__$1 = temp__4092__auto___14629;if(cljs.core.chunked_seq_QMARK_(seq__14615_14630__$1))
{var c__4126__auto___14631 = cljs.core.chunk_first(seq__14615_14630__$1);{
var G__14632 = cljs.core.chunk_rest(seq__14615_14630__$1);
var G__14633 = c__4126__auto___14631;
var G__14634 = cljs.core.count(c__4126__auto___14631);
var G__14635 = 0;
seq__14615_14620 = G__14632;
chunk__14616_14621 = G__14633;
count__14617_14622 = G__14634;
i__14618_14623 = G__14635;
continue;
}
} else
{var k_14636__$1 = cljs.core.first(seq__14615_14630__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_14636__$1);
{
var G__14637 = cljs.core.next(seq__14615_14630__$1);
var G__14638 = null;
var G__14639 = 0;
var G__14640 = 0;
seq__14615_14620 = G__14637;
chunk__14616_14621 = G__14638;
count__14617_14622 = G__14639;
i__14618_14623 = G__14640;
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
var G__14619 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14619__delegate.call(this,elem,k,ks);};
G__14619.cljs$lang$maxFixedArity = 2;
G__14619.cljs$lang$applyTo = (function (arglist__14641){
var elem = cljs.core.first(arglist__14641);
arglist__14641 = cljs.core.next(arglist__14641);
var k = cljs.core.first(arglist__14641);
var ks = cljs.core.rest(arglist__14641);
return G__14619__delegate(elem,k,ks);
});
G__14619.cljs$core$IFn$_invoke$arity$variadic = G__14619__delegate;
return G__14619;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__14643 = dommy.template.__GT_node_like(elem);G__14643.style.display = ((show_QMARK_)?"":"none");
return G__14643;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__14645 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__14645,false);
return G__14645;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__14647 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__14647,true);
return G__14647;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__14649 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__14649["constructor"] = Object);
return G__14649;
})(),cljs.core.array_seq([cljs.core.constant$keyword$65,true], 0));
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);var top = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

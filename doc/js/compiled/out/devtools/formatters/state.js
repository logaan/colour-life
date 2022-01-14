// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('devtools.formatters.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devtools.formatters.state._STAR_current_state_STAR_ = null;
devtools.formatters.state.valid_current_state_QMARK_ = (function devtools$formatters$state$valid_current_state_QMARK_(){
return (!((devtools.formatters.state._STAR_current_state_STAR_ == null)));
});
devtools.formatters.state.get_default_state = (function devtools$formatters$state$get_default_state(){
return cljs.core.PersistentArrayMap.EMPTY;
});
devtools.formatters.state.get_current_state = (function devtools$formatters$state$get_current_state(){
if(devtools.formatters.state.valid_current_state_QMARK_()){
} else {
throw (new Error("Assert failed: (valid-current-state?)"));
}

return devtools.formatters.state._STAR_current_state_STAR_;
});
devtools.formatters.state.update_current_state_BANG_ = (function devtools$formatters$state$update_current_state_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28908 = arguments.length;
var i__4737__auto___28909 = (0);
while(true){
if((i__4737__auto___28909 < len__4736__auto___28908)){
args__4742__auto__.push((arguments[i__4737__auto___28909]));

var G__28910 = (i__4737__auto___28909 + (1));
i__4737__auto___28909 = G__28910;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(devtools.formatters.state.valid_current_state_QMARK_()){
} else {
throw (new Error("Assert failed: (valid-current-state?)"));
}

return (devtools.formatters.state._STAR_current_state_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,devtools.formatters.state._STAR_current_state_STAR_,args));
}));

(devtools.formatters.state.update_current_state_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.state.update_current_state_BANG_.cljs$lang$applyTo = (function (seq28906){
var G__28907 = cljs.core.first(seq28906);
var seq28906__$1 = cljs.core.next(seq28906);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28907,seq28906__$1);
}));

devtools.formatters.state.push_object_to_current_history_BANG_ = (function devtools$formatters$state$push_object_to_current_history_BANG_(object){
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history,cljs.core.conj,object], 0));
});
devtools.formatters.state.get_current_history = (function devtools$formatters$state$get_current_history(){
return cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.is_circular_QMARK_ = (function devtools$formatters$state$is_circular_QMARK_(object){
var history = devtools.formatters.state.get_current_history();
return cljs.core.some((function (p1__28911_SHARP_){
return (p1__28911_SHARP_ === object);
}),history);
});
devtools.formatters.state.prevent_recursion_QMARK_ = (function devtools$formatters$state$prevent_recursion_QMARK_(){
return cljs.core.boolean$(cljs.core.cst$kw$prevent_DASH_recursion.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state()));
});
devtools.formatters.state.set_prevent_recursion = (function devtools$formatters$state$set_prevent_recursion(state,val){
if((!((val == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$prevent_DASH_recursion,val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$prevent_DASH_recursion);
}
});
devtools.formatters.state.get_managed_print_level = (function devtools$formatters$state$get_managed_print_level(){
return cljs.core.cst$kw$managed_DASH_print_DASH_level.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.set_managed_print_level = (function devtools$formatters$state$set_managed_print_level(state,val){
if((!((val == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$managed_DASH_print_DASH_level,val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$managed_DASH_print_DASH_level);
}
});
devtools.formatters.state.get_depth_budget = (function devtools$formatters$state$get_depth_budget(){
return cljs.core.cst$kw$depth_DASH_budget.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.set_depth_budget = (function devtools$formatters$state$set_depth_budget(state,val){
if((!((val == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$depth_DASH_budget,val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$depth_DASH_budget);
}
});
devtools.formatters.state.reset_depth_limits = (function devtools$formatters$state$reset_depth_limits(state){
return devtools.formatters.state.set_managed_print_level(devtools.formatters.state.set_depth_budget(state,null),null);
});

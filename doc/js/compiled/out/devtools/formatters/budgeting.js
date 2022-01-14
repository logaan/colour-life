// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__28595__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__28595__auto__["add"]).call(o__28595__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__28595__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__28595__auto__["delete"]).call(o__28595__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__28595__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__28595__auto__["has"]).call(o__28595__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__30868 = data;
var target__28600__auto__ = G__30868;
if(cljs.core.truth_(target__28600__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30868)].join(''),"\n","target__28600__auto__"].join('')));
}

(target__28600__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__30868;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_30873 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_30873);
} else {
var seq__30869_30874 = cljs.core.seq(json_ml);
var chunk__30870_30875 = null;
var count__30871_30876 = (0);
var i__30872_30877 = (0);
while(true){
if((i__30872_30877 < count__30871_30876)){
var item_30878 = chunk__30870_30875.cljs$core$IIndexed$_nth$arity$2(null,i__30872_30877);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_30878,new_depth_budget_30873) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_30878,new_depth_budget_30873));


var G__30879 = seq__30869_30874;
var G__30880 = chunk__30870_30875;
var G__30881 = count__30871_30876;
var G__30882 = (i__30872_30877 + (1));
seq__30869_30874 = G__30879;
chunk__30870_30875 = G__30880;
count__30871_30876 = G__30881;
i__30872_30877 = G__30882;
continue;
} else {
var temp__5720__auto___30883 = cljs.core.seq(seq__30869_30874);
if(temp__5720__auto___30883){
var seq__30869_30884__$1 = temp__5720__auto___30883;
if(cljs.core.chunked_seq_QMARK_(seq__30869_30884__$1)){
var c__4556__auto___30885 = cljs.core.chunk_first(seq__30869_30884__$1);
var G__30886 = cljs.core.chunk_rest(seq__30869_30884__$1);
var G__30887 = c__4556__auto___30885;
var G__30888 = cljs.core.count(c__4556__auto___30885);
var G__30889 = (0);
seq__30869_30874 = G__30886;
chunk__30870_30875 = G__30887;
count__30871_30876 = G__30888;
i__30872_30877 = G__30889;
continue;
} else {
var item_30890 = cljs.core.first(seq__30869_30884__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_30890,new_depth_budget_30873) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_30890,new_depth_budget_30873));


var G__30891 = cljs.core.next(seq__30869_30884__$1);
var G__30892 = null;
var G__30893 = (0);
var G__30894 = (0);
seq__30869_30874 = G__30891;
chunk__30870_30875 = G__30892;
count__30871_30876 = G__30893;
i__30872_30877 = G__30894;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5718__auto__ = devtools.formatters.helpers.pref(cljs.core.cst$kw$initial_DASH_hierarchy_DASH_depth_DASH_budget);
if(cljs.core.truth_(temp__5718__auto__)){
var initial_hierarchy_depth_budget = temp__5718__auto__;
var remaining_depth_budget = (function (){var or__4126__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

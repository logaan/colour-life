// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('devtools.formatters.markup');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.printing');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.templating');
goog.require('devtools.munging');
devtools.formatters.markup.print_with = (function devtools$formatters$markup$print_with(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30691 = arguments.length;
var i__4737__auto___30692 = (0);
while(true){
if((i__4737__auto___30692 < len__4736__auto___30691)){
args__4742__auto__.push((arguments[i__4737__auto___30692]));

var G__30693 = (i__4737__auto___30692 + (1));
i__4737__auto___30692 = G__30693;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic = (function (method,value,tag,p__30682){
var vec__30683 = p__30682;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30683,(0),null);
var job_fn = (function (){
var G__30686 = value;
var G__30687 = tag;
var G__30688 = (devtools.formatters.markup.get_markup_db.cljs$core$IFn$_invoke$arity$0 ? devtools.formatters.markup.get_markup_db.cljs$core$IFn$_invoke$arity$0() : devtools.formatters.markup.get_markup_db.call(null));
return (method.cljs$core$IFn$_invoke$arity$3 ? method.cljs$core$IFn$_invoke$arity$3(G__30686,G__30687,G__30688) : method.call(null,G__30686,G__30687,G__30688));
});
if((!((max_level == null)))){
var _STAR_print_level_STAR__orig_val__30689 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__30690 = (max_level + (1));
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__30690);

try{return job_fn();
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__30689);
}} else {
return job_fn();
}
}));

(devtools.formatters.markup.print_with.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(devtools.formatters.markup.print_with.cljs$lang$applyTo = (function (seq30678){
var G__30679 = cljs.core.first(seq30678);
var seq30678__$1 = cljs.core.next(seq30678);
var G__30680 = cljs.core.first(seq30678__$1);
var seq30678__$2 = cljs.core.next(seq30678__$1);
var G__30681 = cljs.core.first(seq30678__$2);
var seq30678__$3 = cljs.core.next(seq30678__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30679,G__30680,G__30681,seq30678__$3);
}));

devtools.formatters.markup.print_via_writer = (function devtools$formatters$markup$print_via_writer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30701 = arguments.length;
var i__4737__auto___30702 = (0);
while(true){
if((i__4737__auto___30702 < len__4736__auto___30701)){
args__4742__auto__.push((arguments[i__4737__auto___30702]));

var G__30703 = (i__4737__auto___30702 + (1));
i__4737__auto___30702 = G__30703;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__30697){
var vec__30698 = p__30697;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30698,(0),null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.printing.managed_print_via_writer,value,tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([max_level], 0));
}));

(devtools.formatters.markup.print_via_writer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.markup.print_via_writer.cljs$lang$applyTo = (function (seq30694){
var G__30695 = cljs.core.first(seq30694);
var seq30694__$1 = cljs.core.next(seq30694);
var G__30696 = cljs.core.first(seq30694__$1);
var seq30694__$2 = cljs.core.next(seq30694__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30695,G__30696,seq30694__$2);
}));

devtools.formatters.markup.print_via_protocol = (function devtools$formatters$markup$print_via_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30711 = arguments.length;
var i__4737__auto___30712 = (0);
while(true){
if((i__4737__auto___30712 < len__4736__auto___30711)){
args__4742__auto__.push((arguments[i__4737__auto___30712]));

var G__30713 = (i__4737__auto___30712 + (1));
i__4737__auto___30712 = G__30713;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__30707){
var vec__30708 = p__30707;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30708,(0),null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.printing.managed_print_via_protocol,value,tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([max_level], 0));
}));

(devtools.formatters.markup.print_via_protocol.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.markup.print_via_protocol.cljs$lang$applyTo = (function (seq30704){
var G__30705 = cljs.core.first(seq30704);
var seq30704__$1 = cljs.core.next(seq30704);
var G__30706 = cljs.core.first(seq30704__$1);
var seq30704__$2 = cljs.core.next(seq30704__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30705,G__30706,seq30704__$2);
}));

devtools.formatters.markup._LT_expandable_GT_ = (function devtools$formatters$markup$_LT_expandable_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30715 = arguments.length;
var i__4737__auto___30716 = (0);
while(true){
if((i__4737__auto___30716 < len__4736__auto___30715)){
args__4742__auto__.push((arguments[i__4737__auto___30716]));

var G__30717 = (i__4737__auto___30716 + (1));
i__4737__auto___30716 = G__30717;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var inner_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expandable_DASH_inner_DASH_tag], null),children);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expandable_DASH_tag,cljs.core.cst$kw$expandable_DASH_symbol,inner_markup], null);
}));

(devtools.formatters.markup._LT_expandable_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_expandable_GT_.cljs$lang$applyTo = (function (seq30714){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30714));
}));

devtools.formatters.markup._LT_raw_surrogate_GT_ = (function devtools$formatters$markup$_LT_raw_surrogate_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30719 = arguments.length;
var i__4737__auto___30720 = (0);
while(true){
if((i__4737__auto___30720 < len__4736__auto___30719)){
args__4742__auto__.push((arguments[i__4737__auto___30720]));

var G__30721 = (i__4737__auto___30720 + (1));
i__4737__auto___30720 = G__30721;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["surrogate"], null),args);
}));

(devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$applyTo = (function (seq30718){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30718));
}));

devtools.formatters.markup._LT_surrogate_GT_ = (function devtools$formatters$markup$_LT_surrogate_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30727 = arguments.length;
var i__4737__auto___30728 = (0);
while(true){
if((i__4737__auto___30728 < len__4736__auto___30727)){
args__4742__auto__.push((arguments[i__4737__auto___30728]));

var G__30729 = (i__4737__auto___30728 + (1));
i__4737__auto___30728 = G__30729;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30723){
var vec__30724 = p__30723;
var object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30724,(0),null);
var header = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30724,(1),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30724,(2),null);
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30724,(3),null);
var header__$1 = (((!((body == null))))?devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([header], 0)):header);
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object,header__$1,body,start_index], 0));
}));

(devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$applyTo = (function (seq30722){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30722));
}));

devtools.formatters.markup._LT_reference_GT_ = (function devtools$formatters$markup$_LT_reference_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30731 = arguments.length;
var i__4737__auto___30732 = (0);
while(true){
if((i__4737__auto___30732 < len__4736__auto___30731)){
args__4742__auto__.push((arguments[i__4737__auto___30732]));

var G__30733 = (i__4737__auto___30732 + (1));
i__4737__auto___30732 = G__30733;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reference"], null),args);
}));

(devtools.formatters.markup._LT_reference_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_reference_GT_.cljs$lang$applyTo = (function (seq30730){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30730));
}));

devtools.formatters.markup._LT_reference_surrogate_GT_ = (function devtools$formatters$markup$_LT_reference_surrogate_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30735 = arguments.length;
var i__4737__auto___30736 = (0);
while(true){
if((i__4737__auto___30736 < len__4736__auto___30735)){
args__4742__auto__.push((arguments[i__4737__auto___30736]));

var G__30737 = (i__4737__auto___30736 + (1));
i__4737__auto___30736 = G__30737;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_surrogate_GT_,args)], 0));
}));

(devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$applyTo = (function (seq30734){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30734));
}));

devtools.formatters.markup._LT_circular_reference_GT_ = (function devtools$formatters$markup$_LT_circular_reference_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30739 = arguments.length;
var i__4737__auto___30740 = (0);
while(true){
if((i__4737__auto___30740 < len__4736__auto___30739)){
args__4742__auto__.push((arguments[i__4737__auto___30740]));

var G__30741 = (i__4737__auto___30740 + (1));
i__4737__auto___30740 = G__30741;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circular_DASH_reference_DASH_tag,cljs.core.cst$kw$circular_DASH_ref_DASH_icon], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circular_DASH_reference_DASH_body_DASH_tag], null),children)], 0));
}));

(devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$applyTo = (function (seq30738){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30738));
}));

devtools.formatters.markup._LT_native_reference_GT_ = (function devtools$formatters$markup$_LT_native_reference_GT_(object){
var reference = devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object,(function (p1__30742_SHARP_){
return devtools.formatters.state.set_prevent_recursion(p1__30742_SHARP_,true);
})], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_reference_DASH_wrapper_DASH_tag,cljs.core.cst$kw$native_DASH_reference_DASH_background,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_reference_DASH_tag,reference], null)], null);
});
devtools.formatters.markup._LT_header_expander_GT_ = (function devtools$formatters$markup$_LT_header_expander_GT_(object){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object,cljs.core.cst$kw$header_DASH_expander_DASH_symbol,cljs.core.cst$kw$target], 0)),devtools.formatters.state.reset_depth_limits], 0));
});
devtools.formatters.markup._LT_cljs_land_GT_ = (function devtools$formatters$markup$_LT_cljs_land_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30744 = arguments.length;
var i__4737__auto___30745 = (0);
while(true){
if((i__4737__auto___30745 < len__4736__auto___30744)){
args__4742__auto__.push((arguments[i__4737__auto___30745]));

var G__30746 = (i__4737__auto___30745 + (1));
i__4737__auto___30745 = G__30746;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs_DASH_land_DASH_tag], null),children);
}));

(devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$applyTo = (function (seq30743){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30743));
}));

devtools.formatters.markup._LT_nil_GT_ = (function devtools$formatters$markup$_LT_nil_GT_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nil_DASH_tag,cljs.core.cst$kw$nil_DASH_label], null);
});
devtools.formatters.markup._LT_bool_GT_ = (function devtools$formatters$markup$_LT_bool_GT_(bool){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bool_DASH_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(bool)], null);
});
devtools.formatters.markup._LT_keyword_GT_ = (function devtools$formatters$markup$_LT_keyword_GT_(keyword){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyword_DASH_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyword)], null);
});
devtools.formatters.markup._LT_symbol_GT_ = (function devtools$formatters$markup$_LT_symbol_GT_(symbol){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol_DASH_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)], null);
});
devtools.formatters.markup._LT_number_GT_ = (function devtools$formatters$markup$_LT_number_GT_(number){
if(cljs.core.truth_(isFinite(number))){
if(cljs.core.integer_QMARK_(number)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer_DASH_tag,number], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float_DASH_tag,number], null);
}
} else {
if(cljs.core.truth_(isNaN(number))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float_DASH_nan_DASH_tag,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([number], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float_DASH_infinity_DASH_tag,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([number], 0))], null);
}
}
});
devtools.formatters.markup._LT_string_GT_ = (function devtools$formatters$markup$_LT_string_GT_(string){
var dq = devtools.formatters.helpers.pref(cljs.core.cst$kw$dq);
var re_nl = (new RegExp("\n","g"));
var nl_marker = devtools.formatters.helpers.pref(cljs.core.cst$kw$new_DASH_line_DASH_string_DASH_replacer);
var inline_string = string.replace(re_nl,nl_marker);
var max_inline_string_size = (devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_prefix_DASH_limit) + devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_postfix_DASH_limit));
var quote_string = (function (s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dq),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dq)].join('');
});
var should_abbreviate_QMARK_ = (cljs.core.count(inline_string) > max_inline_string_size);
if(should_abbreviate_QMARK_){
var abbreviated_string = devtools.formatters.helpers.abbreviate_long_string(inline_string,devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_abbreviation_DASH_marker),devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_prefix_DASH_limit),devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_postfix_DASH_limit));
var abbreviated_string_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string_DASH_tag,quote_string(abbreviated_string)], null);
var string_with_nl_markers = string.replace(re_nl,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nl_marker),"\n"].join(''));
var details_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expanded_DASH_string_DASH_tag,string_with_nl_markers], null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([string,abbreviated_string_markup,details_markup], 0));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string_DASH_tag,quote_string(inline_string)], null);
}
});
devtools.formatters.markup._LT_preview_GT_ = (function devtools$formatters$markup$_LT_preview_GT_(value){
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.cst$kw$header_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_print_DASH_level)], 0));
});
devtools.formatters.markup._LT_body_GT_ = (function devtools$formatters$markup$_LT_body_GT_(markup){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_tag,markup], null);
});
devtools.formatters.markup._LT_aligned_body_GT_ = (function devtools$formatters$markup$_LT_aligned_body_GT_(markups_lists){
var prepend_li_tag = (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aligned_DASH_li_DASH_tag], null),line);
} else {
return null;
}
});
var aligned_lines = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(prepend_li_tag,markups_lists);
return devtools.formatters.markup._LT_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standard_DASH_ol_DASH_no_DASH_margin_DASH_tag], null),aligned_lines));
});
devtools.formatters.markup._LT_standard_body_GT_ = (function devtools$formatters$markup$_LT_standard_body_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30753 = arguments.length;
var i__4737__auto___30754 = (0);
while(true){
if((i__4737__auto___30754 < len__4736__auto___30753)){
args__4742__auto__.push((arguments[i__4737__auto___30754]));

var G__30755 = (i__4737__auto___30754 + (1));
i__4737__auto___30754 = G__30755;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (markups_lists,p__30749){
var vec__30750 = p__30749;
var no_margin_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30750,(0),null);
var ol_tag = (cljs.core.truth_(no_margin_QMARK_)?cljs.core.cst$kw$standard_DASH_ol_DASH_no_DASH_margin_DASH_tag:cljs.core.cst$kw$standard_DASH_ol_DASH_tag);
var li_tag = (cljs.core.truth_(no_margin_QMARK_)?cljs.core.cst$kw$standard_DASH_li_DASH_no_DASH_margin_DASH_tag:cljs.core.cst$kw$standard_DASH_li_DASH_tag);
var prepend_li_tag = (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [li_tag], null),line);
} else {
return null;
}
});
var lines_markups = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(prepend_li_tag,markups_lists);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ol_tag], null),lines_markups);
}));

(devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$applyTo = (function (seq30747){
var G__30748 = cljs.core.first(seq30747);
var seq30747__$1 = cljs.core.next(seq30747);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30748,seq30747__$1);
}));

devtools.formatters.markup._LT_standard_body_reference_GT_ = (function devtools$formatters$markup$_LT_standard_body_reference_GT_(o){
return devtools.formatters.markup._LT_standard_body_GT_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0))], null)], null));
});
devtools.formatters.markup._LT_index_GT_ = (function devtools$formatters$markup$_LT_index_GT_(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$index_DASH_tag,value,cljs.core.cst$kw$line_DASH_index_DASH_separator], null);
});
devtools.formatters.markup.body_line = (function devtools$formatters$markup$body_line(index,value){
var index_markup = devtools.formatters.markup._LT_index_GT_(index);
var value_markup = devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.cst$kw$item_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.helpers.pref(cljs.core.cst$kw$body_DASH_line_DASH_max_DASH_print_DASH_level)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index_markup,value_markup], null);
});
devtools.formatters.markup.prepare_body_lines = (function devtools$formatters$markup$prepare_body_lines(data,starting_index){
var work = data;
var index = starting_index;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(work)){
return lines;
} else {
var G__30756 = cljs.core.rest(work);
var G__30757 = (index + (1));
var G__30758 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,devtools.formatters.markup.body_line(index,cljs.core.first(work)));
work = G__30756;
index = G__30757;
lines = G__30758;
continue;
}
break;
}
});
devtools.formatters.markup.body_lines = (function devtools$formatters$markup$body_lines(value,starting_index){
var seq = cljs.core.seq(value);
var max_number_body_items = devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_number_DASH_body_DASH_items);
var chunk = cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_number_body_items,seq);
var rest = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(max_number_body_items,seq);
var lines = devtools.formatters.markup.prepare_body_lines(chunk,starting_index);
var continue_QMARK_ = (!(cljs.core.empty_QMARK_(cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),rest))));
if((!(continue_QMARK_))){
return lines;
} else {
var more_label_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_tag,cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_label], null);
var start_index = (starting_index + max_number_body_items);
var more_markup = devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest,more_label_markup,cljs.core.cst$kw$target,start_index], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [more_markup], null));
}
});
devtools.formatters.markup._LT_details_GT_ = (function devtools$formatters$markup$_LT_details_GT_(value,starting_index){
var has_continuation_QMARK_ = (starting_index > (0));
var body_markup = devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup.body_lines(value,starting_index),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([has_continuation_QMARK_], 0));
if(has_continuation_QMARK_){
return body_markup;
} else {
return devtools.formatters.markup._LT_body_GT_(body_markup);
}
});
devtools.formatters.markup._LT_list_details_GT_ = (function devtools$formatters$markup$_LT_list_details_GT_(items,_opts){
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,items));
});
devtools.formatters.markup._LT_list_GT_ = (function devtools$formatters$markup$_LT_list_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30766 = arguments.length;
var i__4737__auto___30767 = (0);
while(true){
if((i__4737__auto___30767 < len__4736__auto___30766)){
args__4742__auto__.push((arguments[i__4737__auto___30767]));

var G__30768 = (i__4737__auto___30767 + (1));
i__4737__auto___30767 = G__30768;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (items,max_count,p__30762){
var vec__30763 = p__30762;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30763,(0),null);
var items_markups = cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_count,items);
var more_count = (cljs.core.count(items) - max_count);
var more_QMARK_ = (more_count > (0));
var separator = (function (){var or__4126__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$list_DASH_separator;
}
})();
var more_symbol = ((more_QMARK_)?(function (){var temp__5718__auto__ = cljs.core.cst$kw$more_DASH_symbol.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var more_symbol = temp__5718__auto__;
if(cljs.core.fn_QMARK_(more_symbol)){
return (more_symbol.cljs$core$IFn$_invoke$arity$1 ? more_symbol.cljs$core$IFn$_invoke$arity$1(more_count) : more_symbol.call(null,more_count));
} else {
return more_symbol;
}
} else {
return devtools.formatters.helpers.get_more_marker(more_count);
}
})():null);
var preview_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$list_DASH_tag;
}
})(),(function (){var or__4126__auto__ = cljs.core.cst$kw$open_DASH_symbol.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$list_DASH_open_DASH_symbol;
}
})()], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(separator,items_markups),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((more_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [separator,more_symbol], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = cljs.core.cst$kw$close_DASH_symbol.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$list_DASH_close_DASH_symbol;
}
})()], null)], 0));
if(more_QMARK_){
var details_markup = cljs.core.cst$kw$details.cljs$core$IFn$_invoke$arity$1(opts);
var default_details_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(devtools.formatters.markup._LT_list_details_GT_,items,opts);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,preview_markup,(function (){var or__4126__auto__ = details_markup;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default_details_fn;
}
})()], 0));
} else {
return preview_markup;
}
}));

(devtools.formatters.markup._LT_list_GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.markup._LT_list_GT_.cljs$lang$applyTo = (function (seq30759){
var G__30760 = cljs.core.first(seq30759);
var seq30759__$1 = cljs.core.next(seq30759);
var G__30761 = cljs.core.first(seq30759__$1);
var seq30759__$2 = cljs.core.next(seq30759__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30760,G__30761,seq30759__$2);
}));

devtools.formatters.markup._LT_meta_GT_ = (function devtools$formatters$markup$_LT_meta_GT_(metadata){
var body_fn = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_body_DASH_tag,devtools.formatters.markup._LT_preview_GT_(metadata)], null);
});
var header = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_header_DASH_tag,"meta"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_reference_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata,header,body_fn], 0))], null);
});
devtools.formatters.markup._LT_meta_wrapper_GT_ = (function devtools$formatters$markup$_LT_meta_wrapper_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30771 = arguments.length;
var i__4737__auto___30772 = (0);
while(true){
if((i__4737__auto___30772 < len__4736__auto___30771)){
args__4742__auto__.push((arguments[i__4737__auto___30772]));

var G__30773 = (i__4737__auto___30772 + (1));
i__4737__auto___30772 = G__30773;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (metadata,children){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_wrapper_DASH_tag], null),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_meta_GT_(metadata)], null)], 0));
}));

(devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$applyTo = (function (seq30769){
var G__30770 = cljs.core.first(seq30769);
var seq30769__$1 = cljs.core.next(seq30769);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30770,seq30769__$1);
}));

devtools.formatters.markup._LT_function_details_GT_ = (function devtools$formatters$markup$_LT_function_details_GT_(fn_obj,ns,_name,arities,prefix){
if(cljs.core.fn_QMARK_(fn_obj)){
} else {
throw (new Error("Assert failed: (fn? fn-obj)"));
}

var arities__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.wrap_arity,arities);
var make_arity_markup_list = (function (arity){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_multi_DASH_arity_DASH_args_DASH_indent_DASH_tag,prefix], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_args_DASH_tag,arity], null)], null);
});
var arities_markupts_lists = (((cljs.core.count(arities__$1) > (1)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(make_arity_markup_list,arities__$1):null);
var ns_markups_list = (((!(cljs.core.empty_QMARK_(ns))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_ns_DASH_name_DASH_tag,ns], null)], null):null);
var native_markups_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(fn_obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(arities_markupts_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_arities_GT_ = (function devtools$formatters$markup$_LT_arities_GT_(arities){
var multi_arity_QMARK_ = (cljs.core.count(arities) > (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_args_DASH_tag,devtools.formatters.helpers.wrap_arity(((multi_arity_QMARK_)?devtools.formatters.helpers.pref(cljs.core.cst$kw$multi_DASH_arity_DASH_symbol):cljs.core.first(arities)))], null);
});
devtools.formatters.markup._LT_function_GT_ = (function devtools$formatters$markup$_LT_function_GT_(fn_obj){
if(cljs.core.fn_QMARK_(fn_obj)){
} else {
throw (new Error("Assert failed: (fn? fn-obj)"));
}

var vec__30774 = devtools.munging.parse_fn_info(fn_obj);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30774,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30774,(1),null);
var lambda_QMARK_ = cljs.core.empty_QMARK_(name);
var spacer_symbol = devtools.formatters.helpers.pref(cljs.core.cst$kw$spacer);
var rest_symbol = devtools.formatters.helpers.pref(cljs.core.cst$kw$rest_DASH_symbol);
var multi_arity_symbol = devtools.formatters.helpers.pref(cljs.core.cst$kw$multi_DASH_arity_DASH_symbol);
var arities = devtools.munging.extract_arities(fn_obj,true,spacer_symbol,multi_arity_symbol,rest_symbol);
var arities_markup = devtools.formatters.markup._LT_arities_GT_(arities);
var name_markup = (((!(lambda_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_name_DASH_tag,name], null):null);
var icon_markup = ((lambda_QMARK_)?cljs.core.cst$kw$lambda_DASH_icon:cljs.core.cst$kw$fn_DASH_icon);
var prefix_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_prefix_DASH_tag,icon_markup,name_markup], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_header_DASH_tag,prefix_markup,arities_markup], null);
var details_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_function_details_GT_,fn_obj,ns,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arities,prefix_markup], 0));
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_obj,preview_markup,details_fn], 0));
});
devtools.formatters.markup._LT_type_basis_item_GT_ = (function devtools$formatters$markup$_LT_type_basis_item_GT_(basis_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_basis_DASH_item_DASH_tag,cljs.core.name(basis_item)], null);
});
devtools.formatters.markup._LT_type_basis_GT_ = (function devtools$formatters$markup$_LT_type_basis_GT_(basis){
var item_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_type_basis_item_GT_,basis);
var children_markups = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_basis_DASH_item_DASH_separator,item_markups);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_basis_DASH_tag], null),children_markups);
});
devtools.formatters.markup._LT_type_details_GT_ = (function devtools$formatters$markup$_LT_type_details_GT_(constructor_fn,ns,_name,basis){
var ns_markup = (((!(cljs.core.empty_QMARK_(ns))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_ns_DASH_name_DASH_tag,ns], null)], null):null);
var basis_markup = ((cljs.core.empty_QMARK_(basis))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$empty_DASH_basis_DASH_symbol], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$basis_DASH_icon,devtools.formatters.markup._LT_type_basis_GT_(basis)], null));
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(constructor_fn)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [basis_markup,ns_markup,native_markup], null));
});
devtools.formatters.markup._LT_type_GT_ = (function devtools$formatters$markup$_LT_type_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30786 = arguments.length;
var i__4737__auto___30787 = (0);
while(true){
if((i__4737__auto___30787 < len__4736__auto___30786)){
args__4742__auto__.push((arguments[i__4737__auto___30787]));

var G__30788 = (i__4737__auto___30787 + (1));
i__4737__auto___30787 = G__30788;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__30779){
var vec__30780 = p__30779;
var header_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30780,(0),null);
var vec__30783 = devtools.munging.parse_constructor_info(constructor_fn);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30783,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30783,(1),null);
var basis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30783,(2),null);
var name_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_name_DASH_tag,name], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = header_tag;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$type_DASH_header_DASH_tag;
}
})(),cljs.core.cst$kw$type_DASH_symbol,name_markup], null);
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_type_details_GT_,constructor_fn,ns,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([basis], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_wrapper_DASH_tag,cljs.core.cst$kw$type_DASH_header_DASH_background,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_ref_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([constructor_fn,preview_markup,details_markup_fn], 0))], null)], null);
}));

(devtools.formatters.markup._LT_type_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_type_GT_.cljs$lang$applyTo = (function (seq30777){
var G__30778 = cljs.core.first(seq30777);
var seq30777__$1 = cljs.core.next(seq30777);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30778,seq30777__$1);
}));

devtools.formatters.markup._LT_standalone_type_GT_ = (function devtools$formatters$markup$_LT_standalone_type_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30795 = arguments.length;
var i__4737__auto___30796 = (0);
while(true){
if((i__4737__auto___30796 < len__4736__auto___30795)){
args__4742__auto__.push((arguments[i__4737__auto___30796]));

var G__30797 = (i__4737__auto___30796 + (1));
i__4737__auto___30796 = G__30797;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__30791){
var vec__30792 = p__30791;
var header_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30792,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standalone_DASH_type_DASH_tag,devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic(constructor_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([header_tag], 0))], null);
}));

(devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$applyTo = (function (seq30789){
var G__30790 = cljs.core.first(seq30789);
var seq30789__$1 = cljs.core.next(seq30789);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30790,seq30789__$1);
}));

devtools.formatters.markup._LT_protocol_method_arity_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arity_GT_(arity_fn){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arity_fn], 0));
});
devtools.formatters.markup._LT_protocol_method_arities_details_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_details_GT_(fns){
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arity_GT_,fns));
});
devtools.formatters.markup._LT_protocol_method_arities_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30804 = arguments.length;
var i__4737__auto___30805 = (0);
while(true){
if((i__4737__auto___30805 < len__4736__auto___30804)){
args__4742__auto__.push((arguments[i__4737__auto___30805]));

var G__30806 = (i__4737__auto___30805 + (1));
i__4737__auto___30805 = G__30806;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fns,p__30800){
var vec__30801 = p__30800;
var max_fns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30801,(0),null);
var max_fns__$1 = (function (){var or__4126__auto__ = max_fns;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_protocol_DASH_method_DASH_arities_DASH_list);
}
})();
var more_QMARK_ = (cljs.core.count(fns) > max_fns__$1);
var aritites_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arity_GT_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_fns__$1,fns));
var preview_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_header_DASH_tag,cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_header_DASH_open_DASH_symbol], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_list_DASH_header_DASH_separator,aritites_markups),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((more_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_more_DASH_symbol], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_header_DASH_close_DASH_symbol], null)], 0));
if(more_QMARK_){
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arities_details_GT_,fns);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,preview_markup,details_markup_fn], 0));
} else {
return preview_markup;
}
}));

(devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$applyTo = (function (seq30798){
var G__30799 = cljs.core.first(seq30798);
var seq30798__$1 = cljs.core.next(seq30798);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30799,seq30798__$1);
}));

devtools.formatters.markup._LT_protocol_method_GT_ = (function devtools$formatters$markup$_LT_protocol_method_GT_(name,arities){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_tag,cljs.core.cst$kw$method_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_name_DASH_tag,name], null),devtools.formatters.markup._LT_protocol_method_arities_GT_(arities)], null);
});
devtools.formatters.markup._LT_protocol_details_GT_ = (function devtools$formatters$markup$_LT_protocol_details_GT_(obj,ns,_name,selector,_fast_QMARK_){
var protocol_obj = devtools.munging.get_protocol_object(selector);
var ns_markups_list = (((!(cljs.core.empty_QMARK_(ns))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_ns_DASH_name_DASH_tag,ns], null)], null):null);
var native_markups_list = (((!((protocol_obj == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(protocol_obj)], null):null);
var methods$ = devtools.munging.collect_protocol_methods(obj,selector);
var methods_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30807){
var vec__30808 = p__30807;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30808,(0),null);
var arities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30808,(1),null);
return devtools.formatters.markup._LT_protocol_method_GT_(name,arities);
}),methods$);
var methods_markups_lists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,methods_markups);
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(methods_markups_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_protocol_GT_ = (function devtools$formatters$markup$_LT_protocol_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30820 = arguments.length;
var i__4737__auto___30821 = (0);
while(true){
if((i__4737__auto___30821 < len__4736__auto___30820)){
args__4742__auto__.push((arguments[i__4737__auto___30821]));

var G__30822 = (i__4737__auto___30821 + (1));
i__4737__auto___30821 = G__30822;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocol,p__30814){
var vec__30815 = p__30814;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30815,(0),null);
var map__30818 = protocol;
var map__30818__$1 = (((((!((map__30818 == null))))?(((((map__30818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30818):map__30818);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30818__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30818__$1,cljs.core.cst$kw$name);
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30818__$1,cljs.core.cst$kw$selector);
var fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30818__$1,cljs.core.cst$kw$fast_QMARK_);
var preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = tag;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$protocol_DASH_name_DASH_tag;
}
})(),name], null);
var prefix_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fast_QMARK_)?cljs.core.cst$kw$fast_DASH_protocol_DASH_tag:cljs.core.cst$kw$slow_DASH_protocol_DASH_tag),cljs.core.cst$kw$protocol_DASH_background], null);
if((!((obj == null)))){
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_protocol_details_GT_,obj,ns,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selector,fast_QMARK_], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix_markup,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj,preview_markup,details_markup_fn], 0)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix_markup,preview_markup);
}
}));

(devtools.formatters.markup._LT_protocol_GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.markup._LT_protocol_GT_.cljs$lang$applyTo = (function (seq30811){
var G__30812 = cljs.core.first(seq30811);
var seq30811__$1 = cljs.core.next(seq30811);
var G__30813 = cljs.core.first(seq30811__$1);
var seq30811__$2 = cljs.core.next(seq30811__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30812,G__30813,seq30811__$2);
}));

devtools.formatters.markup._LT_more_protocols_GT_ = (function devtools$formatters$markup$_LT_more_protocols_GT_(more_count){
var fake_protocol = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,devtools.formatters.helpers.get_more_marker(more_count)], null);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic(null,fake_protocol,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$protocol_DASH_more_DASH_tag], 0));
});
devtools.formatters.markup._LT_protocols_list_GT_ = (function devtools$formatters$markup$_LT_protocols_list_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30830 = arguments.length;
var i__4737__auto___30831 = (0);
while(true){
if((i__4737__auto___30831 < len__4736__auto___30830)){
args__4742__auto__.push((arguments[i__4737__auto___30831]));

var G__30832 = (i__4737__auto___30831 + (1));
i__4737__auto___30831 = G__30832;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocols,p__30826){
var vec__30827 = p__30826;
var max_protocols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30827,(0),null);
var max_protocols__$1 = (function (){var or__4126__auto__ = max_protocols;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_list_DASH_protocols);
}
})();
var protocols_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_GT_,obj),protocols);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic(protocols_markups,max_protocols__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tag,cljs.core.cst$kw$protocols_DASH_header_DASH_tag,cljs.core.cst$kw$open_DASH_symbol,cljs.core.cst$kw$protocols_DASH_list_DASH_open_DASH_symbol,cljs.core.cst$kw$close_DASH_symbol,cljs.core.cst$kw$protocols_DASH_list_DASH_close_DASH_symbol,cljs.core.cst$kw$separator,cljs.core.cst$kw$header_DASH_protocol_DASH_separator,cljs.core.cst$kw$more_DASH_symbol,devtools.formatters.markup._LT_more_protocols_GT_], null)], 0));
}));

(devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$applyTo = (function (seq30823){
var G__30824 = cljs.core.first(seq30823);
var seq30823__$1 = cljs.core.next(seq30823);
var G__30825 = cljs.core.first(seq30823__$1);
var seq30823__$2 = cljs.core.next(seq30823__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30824,G__30825,seq30823__$2);
}));

devtools.formatters.markup._LT_field_GT_ = (function devtools$formatters$markup$_LT_field_GT_(name,value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header_DASH_field_DASH_tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header_DASH_field_DASH_name_DASH_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)], null),cljs.core.cst$kw$header_DASH_field_DASH_value_DASH_spacer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header_DASH_field_DASH_value_DASH_tag,devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),(function (p1__30833_SHARP_){
return devtools.formatters.state.set_managed_print_level(p1__30833_SHARP_,(1));
})], 0))], null),cljs.core.cst$kw$header_DASH_field_DASH_separator], null);
});
devtools.formatters.markup._LT_fields_details_row_GT_ = (function devtools$formatters$markup$_LT_fields_details_row_GT_(field){
var vec__30834 = field;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30834,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30834,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_tr_DASH_tag,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_td1_DASH_tag,cljs.core.cst$kw$body_DASH_field_DASH_symbol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_name_DASH_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_td2_DASH_tag,cljs.core.cst$kw$body_DASH_field_DASH_value_DASH_spacer], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_td3_DASH_tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_value_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))], null)], null)], null);
});
devtools.formatters.markup._LT_fields_GT_ = (function devtools$formatters$markup$_LT_fields_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30847 = arguments.length;
var i__4737__auto___30848 = (0);
while(true){
if((i__4737__auto___30848 < len__4736__auto___30847)){
args__4742__auto__.push((arguments[i__4737__auto___30848]));

var G__30849 = (i__4737__auto___30848 + (1));
i__4737__auto___30848 = G__30849;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fields,p__30839){
var vec__30840 = p__30839;
var max_fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30840,(0),null);
if((cljs.core.count(fields) === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields_DASH_header_DASH_tag,cljs.core.cst$kw$fields_DASH_header_DASH_no_DASH_fields_DASH_symbol], null);
} else {
var max_fields__$1 = (function (){var or__4126__auto__ = max_fields;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_instance_DASH_header_DASH_fields);
}
})();
var more_QMARK_ = (cljs.core.count(fields) > max_fields__$1);
var fields_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30843){
var vec__30844 = p__30843;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30844,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30844,(1),null);
return devtools.formatters.markup._LT_field_GT_(name,value);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_fields__$1,fields));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields_DASH_header_DASH_tag,cljs.core.cst$kw$fields_DASH_header_DASH_open_DASH_symbol], null),fields_markups,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((more_QMARK_)?cljs.core.cst$kw$more_DASH_fields_DASH_symbol:null),cljs.core.cst$kw$fields_DASH_header_DASH_close_DASH_symbol], null)], 0));
}
}));

(devtools.formatters.markup._LT_fields_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_fields_GT_.cljs$lang$applyTo = (function (seq30837){
var G__30838 = cljs.core.first(seq30837);
var seq30837__$1 = cljs.core.next(seq30837);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30838,seq30837__$1);
}));

devtools.formatters.markup._LT_fields_details_GT_ = (function devtools$formatters$markup$_LT_fields_details_GT_(fields,obj){
var protocols = devtools.munging.scan_protocols(obj);
var has_protocols_QMARK_ = (!(cljs.core.empty_QMARK_(protocols)));
var fields_markup = (((!((cljs.core.count(fields) === (0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields_DASH_icon,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_body_DASH_fields_DASH_table_DASH_tag], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_fields_details_row_GT_,fields))], null):null);
var protocols_list_markup = ((has_protocols_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocols_DASH_icon,devtools.formatters.markup._LT_protocols_list_GT_(obj,protocols)], null):null);
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fields_markup,protocols_list_markup,native_markup], null));
});
devtools.formatters.markup._LT_instance_GT_ = (function devtools$formatters$markup$_LT_instance_GT_(value){
var constructor_fn = devtools.formatters.helpers.get_constructor(value);
var vec__30850 = devtools.munging.parse_constructor_info(constructor_fn);
var _ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30850,(0),null);
var _name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30850,(1),null);
var basis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30850,(2),null);
var custom_printing_QMARK_ = (((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IPrintWithWriter$))))?true:false):false);
var type_markup = devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic(constructor_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$instance_DASH_type_DASH_header_DASH_tag], 0));
var fields = devtools.formatters.helpers.fetch_fields_values(value,basis);
var fields_markup = devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic(fields,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((custom_printing_QMARK_)?(0):null)], 0));
var fields_details_markup_fn = (function (){
return devtools.formatters.markup._LT_fields_details_GT_(fields,value);
});
var fields_preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_value_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value,fields_markup,fields_details_markup_fn], 0))], null);
var custom_printing_markup = ((custom_printing_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_wrapper_DASH_tag,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_background,devtools.formatters.markup.print_via_protocol(value,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_tag)], null):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_header_DASH_tag,cljs.core.cst$kw$instance_DASH_header_DASH_background,fields_preview_markup,custom_printing_markup,type_markup], null);
});
devtools.formatters.markup._LT_header_GT_ = (function devtools$formatters$markup$_LT_header_GT_(value){
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.markup._LT_preview_GT_(value)], 0));
});
devtools.formatters.markup._LT_surrogate_header_GT_ = (function devtools$formatters$markup$_LT_surrogate_header_GT_(surrogate){
var or__4126__auto__ = devtools.formatters.templating.get_surrogate_header(surrogate);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return devtools.formatters.markup._LT_preview_GT_(devtools.formatters.templating.get_surrogate_target(surrogate));
}
});
devtools.formatters.markup._LT_surrogate_target_GT_ = (function devtools$formatters$markup$_LT_surrogate_target_GT_(surrogate){
var target = devtools.formatters.templating.get_surrogate_target(surrogate);
if(cljs.core.seqable_QMARK_(target)){
var starting_index = devtools.formatters.templating.get_surrogate_start_index(surrogate);
return devtools.formatters.markup._LT_details_GT_(target,starting_index);
} else {
return devtools.formatters.markup._LT_standard_body_reference_GT_(target);
}
});
devtools.formatters.markup._LT_surrogate_body_GT_ = (function devtools$formatters$markup$_LT_surrogate_body_GT_(surrogate){
var temp__5718__auto__ = devtools.formatters.templating.get_surrogate_body(surrogate);
if(cljs.core.truth_(temp__5718__auto__)){
var body = temp__5718__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$target,body)){
return devtools.formatters.markup._LT_surrogate_target_GT_(surrogate);
} else {
return body;
}
} else {
return null;
}
});
devtools.formatters.markup._LT_atomic_GT_ = (function devtools$formatters$markup$_LT_atomic_GT_(value){
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_nils,value,cljs.core.nil_QMARK_))){
return devtools.formatters.markup._LT_nil_GT_();
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_bools,value,devtools.formatters.helpers.bool_QMARK_))){
return devtools.formatters.markup._LT_bool_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_strings,value,cljs.core.string_QMARK_))){
return devtools.formatters.markup._LT_string_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_numbers,value,cljs.core.number_QMARK_))){
return devtools.formatters.markup._LT_number_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_keywords,value,cljs.core.keyword_QMARK_))){
return devtools.formatters.markup._LT_keyword_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_symbols,value,cljs.core.symbol_QMARK_))){
return devtools.formatters.markup._LT_symbol_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_instances,value,devtools.formatters.helpers.should_render_instance_QMARK_))){
return devtools.formatters.markup._LT_instance_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_types,value,devtools.formatters.helpers.cljs_type_QMARK_))){
return devtools.formatters.markup._LT_standalone_type_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_functions,value,devtools.formatters.helpers.cljs_function_QMARK_))){
return devtools.formatters.markup._LT_function_GT_(value);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
devtools.formatters.markup.get_markup_db = (function devtools$formatters$markup$get_markup_db(){
if((devtools.formatters.markup._STAR_markup_db_STAR_ == null)){
(devtools.formatters.markup._STAR_markup_db_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$aligned_DASH_body,cljs.core.cst$kw$native_DASH_reference,cljs.core.cst$kw$reference_DASH_surrogate,cljs.core.cst$kw$keyword,cljs.core.cst$kw$protocol_DASH_method_DASH_arities,cljs.core.cst$kw$surrogate_DASH_header,cljs.core.cst$kw$details,cljs.core.cst$kw$more_DASH_protocols,cljs.core.cst$kw$field,cljs.core.cst$kw$symbol,cljs.core.cst$kw$fields_DASH_details,cljs.core.cst$kw$atomic,cljs.core.cst$kw$string,cljs.core.cst$kw$standard_DASH_body,cljs.core.cst$kw$type_DASH_basis,cljs.core.cst$kw$bool,cljs.core.cst$kw$standalone_DASH_type,cljs.core.cst$kw$preview,cljs.core.cst$kw$header,cljs.core.cst$kw$protocol_DASH_method,cljs.core.cst$kw$cljs_DASH_land,cljs.core.cst$kw$type_DASH_basis_DASH_item,cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_details,cljs.core.cst$kw$fields_DASH_details_DASH_row,cljs.core.cst$kw$standard_DASH_body_DASH_reference,cljs.core.cst$kw$surrogate_DASH_body,cljs.core.cst$kw$expandable,cljs.core.cst$kw$type,cljs.core.cst$kw$protocol_DASH_method_DASH_arity,cljs.core.cst$kw$raw_DASH_surrogate,cljs.core.cst$kw$type_DASH_details,cljs.core.cst$kw$list,cljs.core.cst$kw$meta_DASH_wrapper,cljs.core.cst$kw$protocol,cljs.core.cst$kw$index,cljs.core.cst$kw$surrogate,cljs.core.cst$kw$protocols_DASH_list,cljs.core.cst$kw$meta,cljs.core.cst$kw$instance,cljs.core.cst$kw$reference,cljs.core.cst$kw$function_DASH_details,cljs.core.cst$kw$function,cljs.core.cst$kw$arities,cljs.core.cst$kw$header_DASH_expander,cljs.core.cst$kw$list_DASH_details,cljs.core.cst$kw$circular_DASH_reference,cljs.core.cst$kw$surrogate_DASH_target,cljs.core.cst$kw$fields,cljs.core.cst$kw$nil,cljs.core.cst$kw$body,cljs.core.cst$kw$number,cljs.core.cst$kw$protocol_DASH_details],[devtools.formatters.markup._LT_aligned_body_GT_,devtools.formatters.markup._LT_native_reference_GT_,devtools.formatters.markup._LT_reference_surrogate_GT_,devtools.formatters.markup._LT_keyword_GT_,devtools.formatters.markup._LT_protocol_method_arities_GT_,devtools.formatters.markup._LT_surrogate_header_GT_,devtools.formatters.markup._LT_details_GT_,devtools.formatters.markup._LT_more_protocols_GT_,devtools.formatters.markup._LT_field_GT_,devtools.formatters.markup._LT_symbol_GT_,devtools.formatters.markup._LT_fields_details_GT_,devtools.formatters.markup._LT_atomic_GT_,devtools.formatters.markup._LT_string_GT_,devtools.formatters.markup._LT_standard_body_GT_,devtools.formatters.markup._LT_type_basis_GT_,devtools.formatters.markup._LT_bool_GT_,devtools.formatters.markup._LT_standalone_type_GT_,devtools.formatters.markup._LT_preview_GT_,devtools.formatters.markup._LT_header_GT_,devtools.formatters.markup._LT_protocol_method_GT_,devtools.formatters.markup._LT_cljs_land_GT_,devtools.formatters.markup._LT_type_basis_item_GT_,devtools.formatters.markup._LT_protocol_method_arities_details_GT_,devtools.formatters.markup._LT_fields_details_row_GT_,devtools.formatters.markup._LT_standard_body_reference_GT_,devtools.formatters.markup._LT_surrogate_body_GT_,devtools.formatters.markup._LT_expandable_GT_,devtools.formatters.markup._LT_type_GT_,devtools.formatters.markup._LT_protocol_method_arity_GT_,devtools.formatters.markup._LT_raw_surrogate_GT_,devtools.formatters.markup._LT_type_details_GT_,devtools.formatters.markup._LT_list_GT_,devtools.formatters.markup._LT_meta_wrapper_GT_,devtools.formatters.markup._LT_protocol_GT_,devtools.formatters.markup._LT_index_GT_,devtools.formatters.markup._LT_surrogate_GT_,devtools.formatters.markup._LT_protocols_list_GT_,devtools.formatters.markup._LT_meta_GT_,devtools.formatters.markup._LT_instance_GT_,devtools.formatters.markup._LT_reference_GT_,devtools.formatters.markup._LT_function_details_GT_,devtools.formatters.markup._LT_function_GT_,devtools.formatters.markup._LT_arities_GT_,devtools.formatters.markup._LT_header_expander_GT_,devtools.formatters.markup._LT_list_details_GT_,devtools.formatters.markup._LT_circular_reference_GT_,devtools.formatters.markup._LT_surrogate_target_GT_,devtools.formatters.markup._LT_fields_GT_,devtools.formatters.markup._LT_nil_GT_,devtools.formatters.markup._LT_body_GT_,devtools.formatters.markup._LT_number_GT_,devtools.formatters.markup._LT_protocol_details_GT_]));
} else {
}

return devtools.formatters.markup._STAR_markup_db_STAR_;
});

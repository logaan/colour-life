// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
sablono.core.global$module$react = goog.global["React"];
/**
 * The React.js create element function.
 */
sablono.core.create_element = sablono.core.global$module$react.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = sablono.core.global$module$react.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__27803__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__27800 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__27801 = cljs.core.seq(vec__27800);
var first__27802 = cljs.core.first(seq__27801);
var seq__27801__$1 = cljs.core.next(seq__27801);
var tag = first__27802;
var body = seq__27801__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__27803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27804__i = 0, G__27804__a = new Array(arguments.length -  0);
while (G__27804__i < G__27804__a.length) {G__27804__a[G__27804__i] = arguments[G__27804__i + 0]; ++G__27804__i;}
  args = new cljs.core.IndexedSeq(G__27804__a,0,null);
} 
return G__27803__delegate.call(this,args);};
G__27803.cljs$lang$maxFixedArity = 0;
G__27803.cljs$lang$applyTo = (function (arglist__27805){
var args = cljs.core.seq(arglist__27805);
return G__27803__delegate(args);
});
G__27803.cljs$core$IFn$_invoke$arity$variadic = G__27803__delegate;
return G__27803;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__27806(s__27807){
return (new cljs.core.LazySeq(null,(function (){
var s__27807__$1 = s__27807;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__27807__$1);
if(temp__5720__auto__){
var s__27807__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27807__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27807__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27809 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27808 = (0);
while(true){
if((i__27808 < size__4528__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__27808);
cljs.core.chunk_append(b__27809,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__27810 = (i__27808 + (1));
i__27808 = G__27810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27809),sablono$core$update_arglists_$_iter__27806(cljs.core.chunk_rest(s__27807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27809),null);
}
} else {
var args = cljs.core.first(s__27807__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__27806(cljs.core.rest(s__27807__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27816 = arguments.length;
var i__4737__auto___27817 = (0);
while(true){
if((i__4737__auto___27817 < len__4736__auto___27816)){
args__4742__auto__.push((arguments[i__4737__auto___27817]));

var G__27818 = (i__4737__auto___27817 + (1));
i__4737__auto___27817 = G__27818;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__27812(s__27813){
return (new cljs.core.LazySeq(null,(function (){
var s__27813__$1 = s__27813;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__27813__$1);
if(temp__5720__auto__){
var s__27813__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27813__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27813__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27815 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27814 = (0);
while(true){
if((i__27814 < size__4528__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__27814);
cljs.core.chunk_append(b__27815,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__27819 = (i__27814 + (1));
i__27814 = G__27819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27815),sablono$core$iter__27812(cljs.core.chunk_rest(s__27813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27815),null);
}
} else {
var style = cljs.core.first(s__27813__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__27812(cljs.core.rest(s__27813__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq27811){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27811));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to27820 = (function sablono$core$link_to27820(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27823 = arguments.length;
var i__4737__auto___27824 = (0);
while(true){
if((i__4737__auto___27824 < len__4736__auto___27823)){
args__4742__auto__.push((arguments[i__4737__auto___27824]));

var G__27825 = (i__4737__auto___27824 + (1));
i__4737__auto___27824 = G__27825;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to27820.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to27820.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to27820.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to27820.cljs$lang$applyTo = (function (seq27821){
var G__27822 = cljs.core.first(seq27821);
var seq27821__$1 = cljs.core.next(seq27821);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27822,seq27821__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to27820);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to27826 = (function sablono$core$mail_to27826(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27833 = arguments.length;
var i__4737__auto___27834 = (0);
while(true){
if((i__4737__auto___27834 < len__4736__auto___27833)){
args__4742__auto__.push((arguments[i__4737__auto___27834]));

var G__27835 = (i__4737__auto___27834 + (1));
i__4737__auto___27834 = G__27835;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to27826.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to27826.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__27829){
var vec__27830 = p__27829;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to27826.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to27826.cljs$lang$applyTo = (function (seq27827){
var G__27828 = cljs.core.first(seq27827);
var seq27827__$1 = cljs.core.next(seq27827);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27828,seq27827__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to27826);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list27836 = (function sablono$core$unordered_list27836(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4529__auto__ = (function sablono$core$unordered_list27836_$_iter__27837(s__27838){
return (new cljs.core.LazySeq(null,(function (){
var s__27838__$1 = s__27838;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__27838__$1);
if(temp__5720__auto__){
var s__27838__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27838__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27838__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27840 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27839 = (0);
while(true){
if((i__27839 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__27839);
cljs.core.chunk_append(b__27840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__27841 = (i__27839 + (1));
i__27839 = G__27841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27840),sablono$core$unordered_list27836_$_iter__27837(cljs.core.chunk_rest(s__27838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27840),null);
}
} else {
var x = cljs.core.first(s__27838__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list27836_$_iter__27837(cljs.core.rest(s__27838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list27836);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list27842 = (function sablono$core$ordered_list27842(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__4529__auto__ = (function sablono$core$ordered_list27842_$_iter__27843(s__27844){
return (new cljs.core.LazySeq(null,(function (){
var s__27844__$1 = s__27844;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__27844__$1);
if(temp__5720__auto__){
var s__27844__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27844__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27844__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27846 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27845 = (0);
while(true){
if((i__27845 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__27845);
cljs.core.chunk_append(b__27846,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__27847 = (i__27845 + (1));
i__27845 = G__27847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27846),sablono$core$ordered_list27842_$_iter__27843(cljs.core.chunk_rest(s__27844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27846),null);
}
} else {
var x = cljs.core.first(s__27844__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list27842_$_iter__27843(cljs.core.rest(s__27844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list27842);
/**
 * Create an image element.
 */
sablono.core.image27848 = (function sablono$core$image27848(var_args){
var G__27850 = arguments.length;
switch (G__27850) {
case 1:
return sablono.core.image27848.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image27848.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image27848.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image27848.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
}));

(sablono.core.image27848.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image27848);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27852_SHARP_,p2__27853_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27852_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__27853_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27854_SHARP_,p2__27855_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27854_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__27855_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__27857 = arguments.length;
switch (G__27857) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field27859 = (function sablono$core$color_field27859(var_args){
var G__27861 = arguments.length;
switch (G__27861) {
case 1:
return sablono.core.color_field27859.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field27859.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field27859.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__27790__auto__);
}));

(sablono.core.color_field27859.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.color_field27859.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field27859);

/**
 * Creates a date input field.
 */
sablono.core.date_field27862 = (function sablono$core$date_field27862(var_args){
var G__27864 = arguments.length;
switch (G__27864) {
case 1:
return sablono.core.date_field27862.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field27862.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field27862.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__27790__auto__);
}));

(sablono.core.date_field27862.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.date_field27862.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field27862);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field27865 = (function sablono$core$datetime_field27865(var_args){
var G__27867 = arguments.length;
switch (G__27867) {
case 1:
return sablono.core.datetime_field27865.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field27865.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field27865.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__27790__auto__);
}));

(sablono.core.datetime_field27865.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.datetime_field27865.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field27865);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field27868 = (function sablono$core$datetime_local_field27868(var_args){
var G__27870 = arguments.length;
switch (G__27870) {
case 1:
return sablono.core.datetime_local_field27868.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field27868.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field27868.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__27790__auto__);
}));

(sablono.core.datetime_local_field27868.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.datetime_local_field27868.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field27868);

/**
 * Creates a email input field.
 */
sablono.core.email_field27871 = (function sablono$core$email_field27871(var_args){
var G__27873 = arguments.length;
switch (G__27873) {
case 1:
return sablono.core.email_field27871.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field27871.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field27871.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__27790__auto__);
}));

(sablono.core.email_field27871.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.email_field27871.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field27871);

/**
 * Creates a file input field.
 */
sablono.core.file_field27874 = (function sablono$core$file_field27874(var_args){
var G__27876 = arguments.length;
switch (G__27876) {
case 1:
return sablono.core.file_field27874.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field27874.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field27874.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__27790__auto__);
}));

(sablono.core.file_field27874.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.file_field27874.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field27874);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field27877 = (function sablono$core$hidden_field27877(var_args){
var G__27879 = arguments.length;
switch (G__27879) {
case 1:
return sablono.core.hidden_field27877.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field27877.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field27877.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__27790__auto__);
}));

(sablono.core.hidden_field27877.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.hidden_field27877.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field27877);

/**
 * Creates a month input field.
 */
sablono.core.month_field27880 = (function sablono$core$month_field27880(var_args){
var G__27882 = arguments.length;
switch (G__27882) {
case 1:
return sablono.core.month_field27880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field27880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field27880.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__27790__auto__);
}));

(sablono.core.month_field27880.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.month_field27880.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field27880);

/**
 * Creates a number input field.
 */
sablono.core.number_field27883 = (function sablono$core$number_field27883(var_args){
var G__27885 = arguments.length;
switch (G__27885) {
case 1:
return sablono.core.number_field27883.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field27883.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field27883.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__27790__auto__);
}));

(sablono.core.number_field27883.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.number_field27883.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field27883);

/**
 * Creates a password input field.
 */
sablono.core.password_field27886 = (function sablono$core$password_field27886(var_args){
var G__27888 = arguments.length;
switch (G__27888) {
case 1:
return sablono.core.password_field27886.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field27886.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field27886.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__27790__auto__);
}));

(sablono.core.password_field27886.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.password_field27886.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field27886);

/**
 * Creates a range input field.
 */
sablono.core.range_field27889 = (function sablono$core$range_field27889(var_args){
var G__27891 = arguments.length;
switch (G__27891) {
case 1:
return sablono.core.range_field27889.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field27889.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field27889.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__27790__auto__);
}));

(sablono.core.range_field27889.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.range_field27889.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field27889);

/**
 * Creates a search input field.
 */
sablono.core.search_field27892 = (function sablono$core$search_field27892(var_args){
var G__27894 = arguments.length;
switch (G__27894) {
case 1:
return sablono.core.search_field27892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field27892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field27892.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__27790__auto__);
}));

(sablono.core.search_field27892.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.search_field27892.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field27892);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field27895 = (function sablono$core$tel_field27895(var_args){
var G__27897 = arguments.length;
switch (G__27897) {
case 1:
return sablono.core.tel_field27895.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field27895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field27895.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__27790__auto__);
}));

(sablono.core.tel_field27895.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.tel_field27895.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field27895);

/**
 * Creates a text input field.
 */
sablono.core.text_field27898 = (function sablono$core$text_field27898(var_args){
var G__27900 = arguments.length;
switch (G__27900) {
case 1:
return sablono.core.text_field27898.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field27898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field27898.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__27790__auto__);
}));

(sablono.core.text_field27898.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.text_field27898.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field27898);

/**
 * Creates a time input field.
 */
sablono.core.time_field27901 = (function sablono$core$time_field27901(var_args){
var G__27903 = arguments.length;
switch (G__27903) {
case 1:
return sablono.core.time_field27901.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field27901.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field27901.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__27790__auto__);
}));

(sablono.core.time_field27901.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.time_field27901.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field27901);

/**
 * Creates a url input field.
 */
sablono.core.url_field27904 = (function sablono$core$url_field27904(var_args){
var G__27906 = arguments.length;
switch (G__27906) {
case 1:
return sablono.core.url_field27904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field27904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field27904.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__27790__auto__);
}));

(sablono.core.url_field27904.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.url_field27904.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field27904);

/**
 * Creates a week input field.
 */
sablono.core.week_field27907 = (function sablono$core$week_field27907(var_args){
var G__27909 = arguments.length;
switch (G__27909) {
case 1:
return sablono.core.week_field27907.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field27907.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field27907.cljs$core$IFn$_invoke$arity$1 = (function (name__27790__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__27790__auto__);
}));

(sablono.core.week_field27907.cljs$core$IFn$_invoke$arity$2 = (function (name__27790__auto__,value__27791__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__27790__auto__,value__27791__auto__);
}));

(sablono.core.week_field27907.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field27907);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box27927 = (function sablono$core$check_box27927(var_args){
var G__27929 = arguments.length;
switch (G__27929) {
case 1:
return sablono.core.check_box27927.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box27927.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box27927.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box27927.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box27927.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box27927.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box27927.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box27927);
/**
 * Creates a radio button.
 */
sablono.core.radio_button27931 = (function sablono$core$radio_button27931(var_args){
var G__27933 = arguments.length;
switch (G__27933) {
case 1:
return sablono.core.radio_button27931.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button27931.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button27931.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button27931.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button27931.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button27931.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button27931.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button27931);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options27935 = (function sablono$core$select_options27935(coll){
var iter__4529__auto__ = (function sablono$core$select_options27935_$_iter__27936(s__27937){
return (new cljs.core.LazySeq(null,(function (){
var s__27937__$1 = s__27937;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__27937__$1);
if(temp__5720__auto__){
var s__27937__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27937__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27937__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27939 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27938 = (0);
while(true){
if((i__27938 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__27938);
cljs.core.chunk_append(b__27939,((cljs.core.sequential_QMARK_(x))?(function (){var vec__27940 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options27935.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options27935.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options27935.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__27946 = (i__27938 + (1));
i__27938 = G__27946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27939),sablono$core$select_options27935_$_iter__27936(cljs.core.chunk_rest(s__27937__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27939),null);
}
} else {
var x = cljs.core.first(s__27937__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__27943 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27943,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27943,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27943,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options27935.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options27935.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options27935.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options27935_$_iter__27936(cljs.core.rest(s__27937__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options27935);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down27947 = (function sablono$core$drop_down27947(var_args){
var G__27949 = arguments.length;
switch (G__27949) {
case 2:
return sablono.core.drop_down27947.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down27947.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down27947.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down27947.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down27947.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down27947.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down27947);
/**
 * Creates a text area element.
 */
sablono.core.text_area27951 = (function sablono$core$text_area27951(var_args){
var G__27953 = arguments.length;
switch (G__27953) {
case 1:
return sablono.core.text_area27951.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area27951.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area27951.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area27951.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area27951.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area27951);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label27955 = (function sablono$core$label27955(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label27955);
/**
 * Creates a submit button.
 */
sablono.core.submit_button27956 = (function sablono$core$submit_button27956(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button27956);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button27957 = (function sablono$core$reset_button27957(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button27957);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to27958 = (function sablono$core$form_to27958(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27968 = arguments.length;
var i__4737__auto___27969 = (0);
while(true){
if((i__4737__auto___27969 < len__4736__auto___27968)){
args__4742__auto__.push((arguments[i__4737__auto___27969]));

var G__27970 = (i__4737__auto___27969 + (1));
i__4737__auto___27969 = G__27970;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to27958.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to27958.cljs$core$IFn$_invoke$arity$variadic = (function (p__27961,body){
var vec__27962 = p__27961;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27962,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27962,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__27965 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__27966 = "_method";
var G__27967 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__27965,G__27966,G__27967) : sablono.core.hidden_field.call(null,G__27965,G__27966,G__27967));
})()], null)),body));
}));

(sablono.core.form_to27958.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to27958.cljs$lang$applyTo = (function (seq27959){
var G__27960 = cljs.core.first(seq27959);
var seq27959__$1 = cljs.core.next(seq27959);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27960,seq27959__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to27958);

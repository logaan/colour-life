// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('colour_life.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sablono.core');
colour_life.core.global$module$react = goog.global["React"];
colour_life.core.global$module$react_dom = goog.global["ReactDOM"];
colour_life.core.log = (function colour_life$core$log(v){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)], 0));

return v;
});
colour_life.core.neighbours = (function colour_life$core$neighbours(p__27973){
var vec__27974 = p__27973;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27974,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27974,(1),null);
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1))], null)]);
});
colour_life.core.neighbour_count = (function colour_life$core$neighbour_count(population,point){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(population,colour_life.core.neighbours(point)));
});
colour_life.core.is_alive_QMARK_ = (function colour_life$core$is_alive_QMARK_(population,point){
var pred__27977 = cljs.core._EQ_;
var expr__27978 = colour_life.core.neighbour_count(population,point);
if(cljs.core.truth_((pred__27977.cljs$core$IFn$_invoke$arity$2 ? pred__27977.cljs$core$IFn$_invoke$arity$2((3),expr__27978) : pred__27977.call(null,(3),expr__27978)))){
return true;
} else {
if(cljs.core.truth_((pred__27977.cljs$core$IFn$_invoke$arity$2 ? pred__27977.cljs$core$IFn$_invoke$arity$2((2),expr__27978) : pred__27977.call(null,(2),expr__27978)))){
return cljs.core.contains_QMARK_(population,point);
} else {
return false;
}
}
});
colour_life.core.tick = (function colour_life$core$tick(population){
var potentially_alive = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(colour_life.core.neighbours,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([population], 0)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27980_SHARP_){
return colour_life.core.is_alive_QMARK_(population,p1__27980_SHARP_);
}),potentially_alive));
});
colour_life.core.blinker_horizontal = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null)]);
colour_life.core.blinker_vertical = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)]);
colour_life.core.glider = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colour_life.core.blinker_vertical,colour_life.core.tick(colour_life.core.blinker_horizontal))){
} else {
throw (new Error("Assert failed: (= blinker-vertical (tick blinker-horizontal))"));
}
colour_life.core.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","Bb","B","C","C#","D","D#","E","F","F#","G","Ab"], null);
colour_life.core.cells__GT_notes = (function colour_life$core$cells__GT_notes(cells){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__4529__auto__ = (function colour_life$core$cells__GT_notes_$_iter__27981(s__27982){
return (new cljs.core.LazySeq(null,(function (){
var s__27982__$1 = s__27982;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__27982__$1);
if(temp__5720__auto__){
var s__27982__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27982__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27982__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27984 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27983 = (0);
while(true){
if((i__27983 < size__4528__auto__)){
var vec__27985 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__27983);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27985,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27985,(1),null);
cljs.core.chunk_append(b__27984,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27989 = cljs.core.mod(x,(12));
return (colour_life.core.notes.cljs$core$IFn$_invoke$arity$1 ? colour_life.core.notes.cljs$core$IFn$_invoke$arity$1(G__27989) : colour_life.core.notes.call(null,G__27989));
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.mod(y,(12)) - (1)))].join(''));

var G__27995 = (i__27983 + (1));
i__27983 = G__27995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27984),colour_life$core$cells__GT_notes_$_iter__27981(cljs.core.chunk_rest(s__27982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27984),null);
}
} else {
var vec__27990 = cljs.core.first(s__27982__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27994 = cljs.core.mod(x,(12));
return (colour_life.core.notes.cljs$core$IFn$_invoke$arity$1 ? colour_life.core.notes.cljs$core$IFn$_invoke$arity$1(G__27994) : colour_life.core.notes.call(null,G__27994));
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.mod(y,(12)) - (1)))].join(''),colour_life$core$cells__GT_notes_$_iter__27981(cljs.core.rest(s__27982__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cells);
})());
});
colour_life.core.initial = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colours,new cljs.core.PersistentArrayMap(null, 2, ["red",colour_life.core.glider,"blue",cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(3)], null)])], null),cljs.core.cst$kw$interval,null,cljs.core.cst$kw$draw,"red"], null);
if((typeof colour_life !== 'undefined') && (typeof colour_life.core !== 'undefined') && (typeof colour_life.core.app_state !== 'undefined')){
} else {
colour_life.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(colour_life.core.initial);
}
colour_life.core.clock_speed = (400);
if((typeof colour_life !== 'undefined') && (typeof colour_life.core !== 'undefined') && (typeof colour_life.core.synth !== 'undefined')){
} else {
colour_life.core.synth = (new Tone.PolySynth()).toMaster();
}
colour_life.core.step = (function colour_life$core$step(){
var reds_27997 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(colour_life.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colours,"red"], null));
var blues_27998 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(colour_life.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colours,"blue"], null));
var cells_27999 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(reds_27997,blues_27998);
var notes_28000 = colour_life.core.cells__GT_notes(cells_27999);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([notes_28000], 0));

colour_life.core.synth.triggerAttackRelease(cljs.core.clj__GT_js(notes_28000),"8n");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(colour_life.core.app_state,(function (p1__27996_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__27996_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colours,"red"], null),colour_life.core.tick),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colours,"blue"], null),colour_life.core.tick);
}));
});
colour_life.core.play = (function colour_life$core$play(){
var interval = setInterval(colour_life.core.step,colour_life.core.clock_speed);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colour_life.core.app_state,cljs.core.assoc,cljs.core.cst$kw$interval,interval);
});
colour_life.core.stop = (function colour_life$core$stop(){
return clearInterval(cljs.core.cst$kw$interval.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(colour_life.core.app_state)));
});
colour_life.core.toggle_cell = (function colour_life$core$toggle_cell(point){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(colour_life.core.app_state,(function (state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colours,cljs.core.cst$kw$draw.cljs$core$IFn$_invoke$arity$1(state)], null),(function (population){
if(cljs.core.contains_QMARK_(population,point)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(population,point);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(population,point);
}
}));
}));
});
colour_life.core.set_draw = (function colour_life$core$set_draw(colour){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colour_life.core.app_state,cljs.core.assoc,cljs.core.cst$kw$draw,colour);
});
colour_life.core.reset = (function colour_life$core$reset(){
colour_life.core.stop();

return cljs.core.reset_BANG_(colour_life.core.app_state,colour_life.core.initial);
});
colour_life.core.colour = (function colour_life$core$colour(board,point){
var red_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colours,"red",point], null));
var blue_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colours,"blue",point], null));
if(cljs.core.truth_((function (){var and__4115__auto__ = red_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return blue_QMARK_;
} else {
return and__4115__auto__;
}
})())){
return "purple";
} else {
if(cljs.core.truth_(red_QMARK_)){
return "red";
} else {
if(cljs.core.truth_(blue_QMARK_)){
return "blue";
} else {
return cljs.core.cst$kw$grey;

}
}
}
});
colour_life.core.cell = (function colour_life$core$cell(board,point){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(point),cljs.core.cst$kw$on_DASH_click,(function (){
return colour_life.core.toggle_cell(point);
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background_DASH_color,colour_life.core.colour(board,point),cljs.core.cst$kw$color,colour_life.core.colour(board,point),cljs.core.cst$kw$width,"1em",cljs.core.cst$kw$height,"1em"], null)], null)], null);
});
colour_life.core.colour_of_life = (function colour_life$core$colour_of_life(state){
var board = cljs.core.deref(state);
var G__28003 = "div";
var G__28004 = null;
var G__28005 = (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3("h1",null,"Colour of Life") : sablono.core.create_element.call(null,"h1",null,"Colour of Life"));
var G__28006 = (function (){var G__28010 = "p";
var G__28011 = null;
var G__28012 = "Draw: ";
var G__28013 = (function (){var G__28015 = "label";
var G__28016 = null;
var G__28017 = sablono.interpreter.create_element("input",({"type": "radio", "name": "colour", "value": "red", "onClick": (function (){
return colour_life.core.set_draw("red");
}), "checked": cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("red",cljs.core.cst$kw$draw.cljs$core$IFn$_invoke$arity$1(board))}));
var G__28018 = "Red";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__28015,G__28016,G__28017,G__28018) : sablono.core.create_element.call(null,G__28015,G__28016,G__28017,G__28018));
})();
var G__28014 = (function (){var G__28019 = "label";
var G__28020 = null;
var G__28021 = sablono.interpreter.create_element("input",({"type": "radio", "name": "colour", "value": "blue", "onClick": (function (){
return colour_life.core.set_draw("blue");
}), "checked": cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("blue",cljs.core.cst$kw$draw.cljs$core$IFn$_invoke$arity$1(board))}));
var G__28022 = "Blue";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__28019,G__28020,G__28021,G__28022) : sablono.core.create_element.call(null,G__28019,G__28020,G__28021,G__28022));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__28010,G__28011,G__28012,G__28013,G__28014) : sablono.core.create_element.call(null,G__28010,G__28011,G__28012,G__28013,G__28014));
})();
var G__28007 = (function (){var G__28023 = "table";
var G__28024 = null;
var G__28025 = (function (){var G__28027 = "thead";
var G__28028 = null;
var G__28029 = (function (){var G__28032 = "tr";
var G__28033 = null;
var G__28034 = (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2("td",null) : sablono.core.create_element.call(null,"td",null));
var G__28035 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function colour_life$core$colour_of_life_$_iter__28036(s__28037){
return (new cljs.core.LazySeq(null,(function (){
var s__28037__$1 = s__28037;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__28037__$1);
if(temp__5720__auto__){
var s__28037__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28037__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28037__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28039 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28038 = (0);
while(true){
if((i__28038 < size__4528__auto__)){
var note = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28038);
cljs.core.chunk_append(b__28039,(function (){var G__28040 = "td";
var G__28041 = ({"key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)});
var G__28042 = sablono.interpreter.interpret(note);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__28040,G__28041,G__28042) : sablono.core.create_element.call(null,G__28040,G__28041,G__28042));
})());

var G__28096 = (i__28038 + (1));
i__28038 = G__28096;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28039),colour_life$core$colour_of_life_$_iter__28036(cljs.core.chunk_rest(s__28037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28039),null);
}
} else {
var note = cljs.core.first(s__28037__$2);
return cljs.core.cons((function (){var G__28043 = "td";
var G__28044 = ({"key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)});
var G__28045 = sablono.interpreter.interpret(note);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__28043,G__28044,G__28045) : sablono.core.create_element.call(null,G__28043,G__28044,G__28045));
})(),colour_life$core$colour_of_life_$_iter__28036(cljs.core.rest(s__28037__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(colour_life.core.notes);
})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__28032,G__28033,G__28034,G__28035) : sablono.core.create_element.call(null,G__28032,G__28033,G__28034,G__28035));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__28027,G__28028,G__28029) : sablono.core.create_element.call(null,G__28027,G__28028,G__28029));
})();
var G__28026 = (function (){var G__28046 = "tbody";
var G__28047 = null;
var G__28048 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function colour_life$core$colour_of_life_$_iter__28049(s__28050){
return (new cljs.core.LazySeq(null,(function (){
var s__28050__$1 = s__28050;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__28050__$1);
if(temp__5720__auto__){
var s__28050__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28050__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28050__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28052 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28051 = (0);
while(true){
if((i__28051 < size__4528__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28051);
cljs.core.chunk_append(b__28052,(function (){var G__28054 = "tr";
var G__28055 = ({"key": y});
var G__28056 = (function (){var attrs28053 = (y - (1));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"td",((cljs.core.map_QMARK_(attrs28053))?sablono.interpreter.attributes(attrs28053):null),((cljs.core.map_QMARK_(attrs28053))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28053)], null)));
})();
var G__28057 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__28051,G__28054,G__28055,G__28056,y,c__4527__auto__,size__4528__auto__,b__28052,s__28050__$2,temp__5720__auto__,G__28046,G__28047,G__28023,G__28024,G__28025,G__28003,G__28004,G__28005,G__28006,board){
return (function colour_life$core$colour_of_life_$_iter__28049_$_iter__28058(s__28059){
return (new cljs.core.LazySeq(null,((function (i__28051,G__28054,G__28055,G__28056,y,c__4527__auto__,size__4528__auto__,b__28052,s__28050__$2,temp__5720__auto__,G__28046,G__28047,G__28023,G__28024,G__28025,G__28003,G__28004,G__28005,G__28006,board){
return (function (){
var s__28059__$1 = s__28059;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__28059__$1);
if(temp__5720__auto____$1){
var s__28059__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28059__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__28059__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__28061 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__28060 = (0);
while(true){
if((i__28060 < size__4528__auto____$1)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__28060);
cljs.core.chunk_append(b__28061,sablono.interpreter.interpret(colour_life.core.cell(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

var G__28097 = (i__28060 + (1));
i__28060 = G__28097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28061),colour_life$core$colour_of_life_$_iter__28049_$_iter__28058(cljs.core.chunk_rest(s__28059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28061),null);
}
} else {
var x = cljs.core.first(s__28059__$2);
return cljs.core.cons(sablono.interpreter.interpret(colour_life.core.cell(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),colour_life$core$colour_of_life_$_iter__28049_$_iter__28058(cljs.core.rest(s__28059__$2)));
}
} else {
return null;
}
break;
}
});})(i__28051,G__28054,G__28055,G__28056,y,c__4527__auto__,size__4528__auto__,b__28052,s__28050__$2,temp__5720__auto__,G__28046,G__28047,G__28023,G__28024,G__28025,G__28003,G__28004,G__28005,G__28006,board))
,null,null));
});})(i__28051,G__28054,G__28055,G__28056,y,c__4527__auto__,size__4528__auto__,b__28052,s__28050__$2,temp__5720__auto__,G__28046,G__28047,G__28023,G__28024,G__28025,G__28003,G__28004,G__28005,G__28006,board))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(12)));
})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__28054,G__28055,G__28056,G__28057) : sablono.core.create_element.call(null,G__28054,G__28055,G__28056,G__28057));
})());

var G__28098 = (i__28051 + (1));
i__28051 = G__28098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28052),colour_life$core$colour_of_life_$_iter__28049(cljs.core.chunk_rest(s__28050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28052),null);
}
} else {
var y = cljs.core.first(s__28050__$2);
return cljs.core.cons((function (){var G__28062 = "tr";
var G__28063 = ({"key": y});
var G__28064 = (function (){var attrs28053 = (y - (1));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"td",((cljs.core.map_QMARK_(attrs28053))?sablono.interpreter.attributes(attrs28053):null),((cljs.core.map_QMARK_(attrs28053))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28053)], null)));
})();
var G__28065 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (G__28062,G__28063,G__28064,y,s__28050__$2,temp__5720__auto__,G__28046,G__28047,G__28023,G__28024,G__28025,G__28003,G__28004,G__28005,G__28006,board){
return (function colour_life$core$colour_of_life_$_iter__28049_$_iter__28066(s__28067){
return (new cljs.core.LazySeq(null,(function (){
var s__28067__$1 = s__28067;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__28067__$1);
if(temp__5720__auto____$1){
var s__28067__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28067__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28067__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28069 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28068 = (0);
while(true){
if((i__28068 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28068);
cljs.core.chunk_append(b__28069,sablono.interpreter.interpret(colour_life.core.cell(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

var G__28099 = (i__28068 + (1));
i__28068 = G__28099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28069),colour_life$core$colour_of_life_$_iter__28049_$_iter__28066(cljs.core.chunk_rest(s__28067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28069),null);
}
} else {
var x = cljs.core.first(s__28067__$2);
return cljs.core.cons(sablono.interpreter.interpret(colour_life.core.cell(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),colour_life$core$colour_of_life_$_iter__28049_$_iter__28066(cljs.core.rest(s__28067__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(G__28062,G__28063,G__28064,y,s__28050__$2,temp__5720__auto__,G__28046,G__28047,G__28023,G__28024,G__28025,G__28003,G__28004,G__28005,G__28006,board))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(12)));
})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__28062,G__28063,G__28064,G__28065) : sablono.core.create_element.call(null,G__28062,G__28063,G__28064,G__28065));
})(),colour_life$core$colour_of_life_$_iter__28049(cljs.core.rest(s__28050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(12)));
})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__28046,G__28047,G__28048) : sablono.core.create_element.call(null,G__28046,G__28047,G__28048));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__28023,G__28024,G__28025,G__28026) : sablono.core.create_element.call(null,G__28023,G__28024,G__28025,G__28026));
})();
var G__28008 = (function (){var G__28070 = "p";
var G__28071 = null;
var G__28072 = (function (){var G__28076 = "button";
var G__28077 = ({"onClick": colour_life.core.step});
var G__28078 = "Step";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__28076,G__28077,G__28078) : sablono.core.create_element.call(null,G__28076,G__28077,G__28078));
})();
var G__28073 = (function (){var G__28079 = "button";
var G__28080 = ({"onClick": colour_life.core.play});
var G__28081 = "Play";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__28079,G__28080,G__28081) : sablono.core.create_element.call(null,G__28079,G__28080,G__28081));
})();
var G__28074 = (function (){var G__28082 = "button";
var G__28083 = ({"onClick": colour_life.core.stop});
var G__28084 = "Stop";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__28082,G__28083,G__28084) : sablono.core.create_element.call(null,G__28082,G__28083,G__28084));
})();
var G__28075 = (function (){var G__28085 = "button";
var G__28086 = ({"onClick": colour_life.core.reset});
var G__28087 = "Reset";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__28085,G__28086,G__28087) : sablono.core.create_element.call(null,G__28085,G__28086,G__28087));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$6 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$6(G__28070,G__28071,G__28072,G__28073,G__28074,G__28075) : sablono.core.create_element.call(null,G__28070,G__28071,G__28072,G__28073,G__28074,G__28075));
})();
var G__28009 = (function (){var G__28089 = "pre";
var G__28090 = null;
var G__28091 = (function (){var attrs28088 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28092_28100 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28093_28101 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28094_28102 = true;
var _STAR_print_fn_STAR__temp_val__28095_28103 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28094_28102);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28095_28103);

try{cljs.pprint.pprint(board);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28093_28101);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28092_28100);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"code",((cljs.core.map_QMARK_(attrs28088))?sablono.interpreter.attributes(attrs28088):null),((cljs.core.map_QMARK_(attrs28088))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28088)], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__28089,G__28090,G__28091) : sablono.core.create_element.call(null,G__28089,G__28090,G__28091));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$7 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$7(G__28003,G__28004,G__28005,G__28006,G__28007,G__28008,G__28009) : sablono.core.create_element.call(null,G__28003,G__28004,G__28005,G__28006,G__28007,G__28008,G__28009));
});
colour_life.core.class$ = createReactClass(({"render": (function (){
return colour_life.core.colour_of_life(colour_life.core.app_state);
})}));
colour_life.core.component = ReactDOM.render(React.createElement(colour_life.core.class$,({})),document.getElementById("app"));
cljs.core.add_watch(colour_life.core.app_state,cljs.core.cst$kw$force_DASH_update,(function (){
return colour_life.core.component.forceUpdate();
}));

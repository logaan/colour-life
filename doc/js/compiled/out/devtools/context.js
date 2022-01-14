// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('devtools.context');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devtools.context.get_root = (function devtools$context$get_root(){
return goog.global;
});
devtools.context.get_console = (function devtools$context$get_console(){
return (devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null)).console;
});

// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('devtools.preload');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devtools.prefs');
goog.require('devtools.core');
if(cljs.core.not(devtools.prefs.pref(cljs.core.cst$kw$suppress_DASH_preload_DASH_install))){
devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
}

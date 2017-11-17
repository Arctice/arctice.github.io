// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('sh2tool.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
sh2tool.core.available_words = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DAMN","DARK","DOSE","DOWN","DULL","DUST","DUSK","HELL","HELP","KILL","LOSE","LOVE","LOCK","LUCK","MAMA","MIST","NULL","OPEN","OVER","TIME","TOWN"], null);
sh2tool.core.combination_filter = (function sh2tool$core$combination_filter(key){
return (function (word){
var key__$1 = key;
var word__$1 = word;
while(true){
if((cljs.core.empty_QMARK_(word__$1)) || (cljs.core.empty_QMARK_(key__$1))){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(key__$1),cljs.core.first(word__$1))){
return false;
} else {
var G__12777 = cljs.core.rest(key__$1);
var G__12778 = cljs.core.rest(word__$1);
key__$1 = G__12777;
word__$1 = G__12778;
continue;
}
}
break;
}
});
});
sh2tool.core.filter_solutions = (function sh2tool$core$filter_solutions(key){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(sh2tool.core.combination_filter(key),sh2tool.core.available_words);
});
sh2tool.core.list_render = (function sh2tool$core$list_render(words){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12779_SHARP_){
return ["<li>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12779_SHARP_),"</li>"].join('');
}),words));
});
sh2tool.core.render_possible_solutions = (function sh2tool$core$render_possible_solutions(){
return (document.getElementById("possible-solutions-list")["innerHTML"] = sh2tool.core.list_render(sh2tool.core.filter_solutions(clojure.string.upper_case((document.getElementById("init-combination")["value"])))));
});
(document.getElementById("init-combination")["oninput"] = sh2tool.core.render_possible_solutions);
sh2tool.core.render_possible_solutions();

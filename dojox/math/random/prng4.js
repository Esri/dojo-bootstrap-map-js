//>>built
define("dojox/math/random/prng4",["dojo","dojox"],function(f,b){function g(){this.j=this.i=0;this.S=Array(256)}f.getObject("math.random.prng4",!0,b);f.extend(g,{init:function(h){var a,d,c,e=this.S,b=h.length;for(a=0;256>a;++a)e[a]=a;for(a=d=0;256>a;++a)d=d+e[a]+h[a%b]&255,c=e[a],e[a]=e[d],e[d]=c;this.j=this.i=0},next:function(){var b,a,d,c=this.S;this.i=a=this.i+1&255;this.j=d=this.j+c[a]&255;b=c[a];c[a]=c[d];c[d]=b;return c[b+c[a]&255]}});b.math.random.prng4=function(){return new g};b.math.random.prng4.size=
256;return b.math.random.prng4});
//@ sourceMappingURL=prng4.js.map
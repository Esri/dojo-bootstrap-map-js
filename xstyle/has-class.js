//>>built
define("xstyle/has-class",["dojo/has"],function(h){var f={};return function(){for(var a,g=arguments,c=0;c<g.length;c++)if(a=g[c],!f[a]){f[a]=!0;var b=a.match(/^(no-)?(.+?)((-[\d\.]+)(-[\d\.]+)?)?$/),d=h(b[2]),e=-b[4];if((0<e?e<=d&&(-b[5]||e)>=d:!!d)==!b[1])document.documentElement.className+=" has-"+a}}});
//@ sourceMappingURL=has-class.js.map
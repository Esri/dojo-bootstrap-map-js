//>>built
define("dojox/timing/doLater",["./_base"],function(a){dojo.experimental("dojox.timing.doLater");a.doLater=function(c,b,d){if(c)return!1;var e=a.doLater.caller,f=a.doLater.caller.arguments;b=b||dojo.global;setTimeout(function(){e.apply(b,f)},d||100);return!0};return a.doLater});
//@ sourceMappingURL=doLater.js.map
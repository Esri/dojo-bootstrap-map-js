//>>built
define("dojox/charting/bidi/_bidiutils",{reverseMatrix:function(a,d,b,c){var h=b.l-b.r;b=c?-1:1;var e=0,f=0,g=1;d=c?d.width+h:0;c=0;a.matrix&&(b*=Math.abs(a.matrix.xx),g=a.matrix.yy,e=a.matrix.xy,f=a.matrix.yx,c=a.matrix.xy);a.setTransform({xx:b,xy:e,yx:f,yy:g,dx:d,dy:c})}});
//@ sourceMappingURL=_bidiutils.js.map
// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function f(f,o,r,a){var l,t,e,i,n,c,d,u,v,g,h,p,s,x;if(t=o[2],e=o[1],i=o[0],!(t<=0||e<=0||i<=0))for(arguments.length>4&&(l=arguments[4]),p=f[0],s=f[1],d=0;d<i;d++)for(v=p[d],h=s[d],c=0;c<e;c++)for(u=v[c],g=h[c],n=0;n<t;n++)void 0!==(x=a.call(l,u[n],[d,c,n],[p,s]))&&(g[n]=r(x))}export{f as default};
//# sourceMappingURL=mod.js.map

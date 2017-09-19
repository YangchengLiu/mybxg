/*! art-template@4.4.1 | https://github.com/aui/art-template */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.template=t():e.template=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=23)}([function(e,t,n){"use strict";(function(t){e.exports=!1;try{e.exports="[object process]"===Object.prototype.toString.call(t.process)}catch(e){}}).call(t,n(7))},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(19),i=n(2),u=n(21),c=function(e,t){t.onerror(e,t);var n=function(){return"{Template Error}"};return n.mappings=[],n},s=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"===(void 0===t?"undefined":r(t))?n=t:n.source=t,n=i.$extend(n),t=n.source,n.debug&&(n.cache=!1,n.bail=!1,n.minimize=!1,n.compileDebug=!0),n.filename&&(n.filename=n.resolveFilename(n.filename,n));var s=n.filename,a=n.cache,l=n.caches;if(a&&s){var f=l.get(s);if(f)return f}if(!t)try{t=n.loader(s,n),n.source=t}catch(e){var p=new u({name:"CompileError",message:"template not found: "+e.message,stack:e.stack});if(n.bail)throw p;return c(p,n)}var m=new o(n),h=function t(r,o){try{return t.original(r,o)}catch(t){if(!n.compileDebug)return n.cache=!1,n.compileDebug=!0,e(n)(r,o);if(t=new u(t),n.bail)throw t;return c(t,n)()}};try{h.original=m.build(),h.mappings=h.original.mappings,a&&s&&l.set(s,h)}catch(p){if(p=new u(p),n.bail)throw p;return c(p,n)}return h.toString=function(){return h.original.toString()},h};s.Compiler=o,e.exports=s},function(e,t,n){"use strict";var r=n(0),o=n(15),i=n(9),u=n(11),c=n(14),s=n(13),a=n(10),l=n(17),f=n(18),p=n(12),m=n(16),h={source:null,filename:null,rules:[f,l],escape:!0,debug:!!r&&"production"!==process.env.NODE_ENV,bail:!1,cache:!0,minimize:!0,compileDebug:!1,resolveFilename:m,htmlMinifier:p,onerror:o,loader:c,caches:i,root:"/",extname:".art",imports:{$each:a,$escape:u,$include:s}};h.$extend=function(e){var t=Object.create(this);for(var n in e)t[n]=e[n];return t},e.exports=h},function(e,t,n){"use strict"},function(e,t,n){"use strict";var r=n(1),o=function(e,t,n){return r(e,n)(t)};e.exports=o},function(e,t,n){"use strict";(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){e.noop=function(){}}("object"===t(e)&&"object"===t(e.exports)?e.exports:window)}).call(t,n(8)(e))},function(e,t,n){"use strict";var r={abstract:!0,await:!0,boolean:!0,break:!0,byte:!0,case:!0,catch:!0,char:!0,class:!0,const:!0,continue:!0,debugger:!0,default:!0,delete:!0,do:!0,double:!0,else:!0,enum:!0,export:!0,extends:!0,false:!0,final:!0,finally:!0,float:!0,for:!0,function:!0,goto:!0,if:!0,implements:!0,import:!0,in:!0,instanceof:!0,int:!0,interface:!0,let:!0,long:!0,native:!0,new:!0,null:!0,package:!0,private:!0,protected:!0,public:!0,return:!0,short:!0,static:!0,super:!0,switch:!0,synchronized:!0,this:!0,throw:!0,transient:!0,true:!0,try:!0,typeof:!0,var:!0,void:!0,volatile:!0,while:!0,with:!0,yield:!0};e.exports=function(e){return r.hasOwnProperty(e)}},function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";var r={__data:Object.create(null),set:function(e,t){this.__data[e]=t},get:function(e){return this.__data[e]},reset:function(){this.__data={}}};e.exports=r},function(e,t,n){"use strict";var r=function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)t(e[n],n,e);else for(var o in e)t(e[o],o)};e.exports=r},function(e,t,n){"use strict";var r=function(e){var t={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"};return function e(t){return"string"!=typeof t&&(t="function"==typeof t?e(t.call(t)):null===t?"":JSON.stringify(t)||""),t}(e).replace(/&(?![\w#]+;)|[<>"']/g,function(e){return t[e]})};e.exports=r},function(e,t,n){"use strict";var r=n(0),o=function(e,t){if(r){e=(0,n(5).minify)(e,{collapseWhitespace:!0,minifyCSS:!0,minifyJS:!0,ignoreCustomFragments:t.rules.map(function(e){return e.test})})}return e};e.exports=o},function(e,t,n){"use strict";var r=function(e,t,r,o){var i=n(1);return o=o.$extend({filename:o.resolveFilename(e,o),source:null}),i(o)(t,r)};e.exports=r},function(e,t,n){"use strict";var r=n(0),o=function(e){if(r){return n(3).readFileSync(e,"utf8")}var t=document.getElementById(e);return t.value||t.innerHTML};e.exports=o},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){"object"===("undefined"==typeof console?"undefined":r(console))&&console.error(e.name,e.message)};e.exports=o},function(e,t,n){"use strict";var r=n(0),o=/^\.+\//,i=function(e,t){if(r){var i=n(3),u=t.root,c=t.extname;if(o.test(e)){var s=t.filename,a=!s||e===s,l=a?u:i.dirname(s);e=i.resolve(l,e)}else e=i.resolve(u,e);i.extname(e)||(e+=c)}return e};e.exports=i},function(e,t,n){"use strict";var r={test:/{{([@#]?)(\/?)([\w\W]*?)}}/,use:function(e,t,n,r){var i=this,u=i.options,c=i.getEsTokens(r.trim()),s=c.map(function(e){return e.value}),a={},l=void 0,f=!!t&&"raw",p=n+s.shift(),m=function(e,t){console.warn("Template upgrade:","{{"+e+"}}",">>>","{{"+t+"}}","\n",u.filename||"")};switch("#"===t&&m("#value","@value"),p){case"set":r="var "+s.join("");break;case"if":r="if("+s.join("")+"){";break;case"else":var h=s.indexOf("if");h>-1?(s.splice(0,h+1),r="}else if("+s.join("")+"){"):r="}else{";break;case"/if":r="}";break;case"each":l=o(c),l.shift(),"as"===l[1]&&(m("each object as value index","each object value index"),l.splice(1,1));var y=l[0]||"$data",d=l[1]||"$value",v=l[2]||"$index";r="$each("+y+",function("+d+","+v+"){";break;case"/each":r="})";break;case"echo":p="print",m("echo value","value");case"print":case"include":case"extend":l=o(c),l.shift(),r=p+"("+l.join(",")+")";break;case"block":r="block("+s.join("")+",function(){";break;case"/block":r="})";break;default:if(-1!==s.indexOf("|")){for(var b=p,g=[],x=s.filter(function(e){return!/^\s+$/.test(e)});"|"!==x[0];)b+=x.shift();x.filter(function(e){return":"!==e}).forEach(function(e){"|"===e?g.push([]):g[g.length-1].push(e)}),g.reduce(function(e,t){var n=t.shift();return t.unshift(e),r=n+"("+t.join(",")+")"},b)}else u.imports[p]?(m("filterName value","value | filterName"),l=o(c),l.shift(),r=p+"("+l.join(",")+")",f="raw"):r=""+p+s.join("");f||(f="escape")}return a.code=r,a.output=f,a}},o=function(e){for(var t=0,n=e.shift(),r=[[n]];t<e.length;){var o=e[t],i=o.type;"whitespace"!==i&&"comment"!==i&&("punctuator"===n.type&&"]"!==n.value||"punctuator"===i?r[r.length-1].push(o):r.push([o]),n=o),t++}return r.map(function(e){return e.map(function(e){return e.value}).join("")})};r._split=o,e.exports=r},function(e,t,n){"use strict";var r={test:/<%(#?)((?:==|=#|[=-])?)([\w\W]*?)(-?)%>/,use:function(e,t,n,r){var o={"-":"raw","=":"escape","":!1,"==":"raw","=#":"raw"};return t&&(r="//"+r),{code:r,output:o[n]}}};e.exports=r},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(20),s=n(22),a="$data",l="$imports",f="print",p="include",m="extend",h="block",y="$$out",d="$$line",v="$$blocks",b="$$from",g="$$layout",x="$$options",k=function(e,t){return e.hasOwnProperty(t)},w=JSON.stringify,S=function(){function e(t){var n,r,u,c=this;i(this,e);var k=t.source,w=t.minimize,S=t.htmlMinifier;if(this.options=t,this.stacks=[],this.context=[],this.scripts=[],this.CONTEXT_MAP={},this.external=(n={},o(n,a,!0),o(n,l,!0),o(n,x,!0),n),this.internal=(r={},o(r,y,"''"),o(r,d,"[0,0,'']"),o(r,v,"arguments[1]||{}"),o(r,b,"null"),o(r,g,"function(){return "+l+".$include("+b+","+a+","+v+","+x+")}"),o(r,f,"function(){"+y+"+=''.concat.apply('',arguments)}"),o(r,p,"function(src,data,block){"+y+"+="+l+".$include(src,data||"+a+",block,"+x+")}"),o(r,m,"function(from){"+b+"=from}"),o(r,h,"function(name,callback){if("+b+"){"+y+"='';callback();"+v+"[name]="+y+"}else{if(typeof "+v+"[name]==='string'){"+y+"+="+v+"[name]}else{callback()}}}"),r),this.dependencies=(u={},o(u,f,[y]),o(u,p,[y,l,a,x]),o(u,m,[b,g]),o(u,h,[b,y,v]),o(u,g,[l,b,a,v,x]),u),this.importContext(y),t.compileDebug&&this.importContext(d),w)try{k=S(k,t)}catch(e){}this.getTplTokens(k,t.rules,this).forEach(function(e){e.type===s.TYPE_STRING?c.parseString(e):c.parseExpression(e)})}return u(e,[{key:"getTplTokens",value:function(){return s.apply(void 0,arguments)}},{key:"getEsTokens",value:function(e){return c(e)}},{key:"getVariables",value:function(e){var t=!1;return e.filter(function(e){return"whitespace"!==e.type&&"comment"!==e.type}).filter(function(e){return"name"===e.type&&!t||(t="punctuator"===e.type&&"."===e.value,!1)}).map(function(e){return e.value})}},{key:"importContext",value:function(e){var t=this,n="",r=this.internal,o=this.dependencies,i=this.external,u=this.context,c=this.options,s=c.imports,f=this.CONTEXT_MAP;k(f,e)||k(i,e)||(k(r,e)?(n=r[e],k(o,e)&&o[e].forEach(function(e){return t.importContext(e)})):n=k(s,e)?l+"."+e:a+"."+e,f[e]=n,u.push({name:e,value:n}))}},{key:"parseString",value:function(e){var t=e.value;if(t){var n=y+"+="+w(t);this.scripts.push({source:t,tplToken:e,code:n})}}},{key:"parseExpression",value:function(e){var t=this,n=e.value,r=e.script,o=r.output,i=r.code;o&&(i=!1===escape||o===s.TYPE_RAW?y+"+="+r.code:y+"+=$escape("+r.code+")");var u=this.getEsTokens(i);this.getVariables(u).forEach(function(e){return t.importContext(e)}),this.scripts.push({source:n,tplToken:e,code:i})}},{key:"checkExpression",value:function(e){for(var t=[[/^\s*?}.*?{?[\s;]*?$/,""],[/(^[\w\W]*?\s*?function\s*?\([\w\W]*?\)\s*?{[\s;]*?$)/,"$1})"],[/(^.*?\(\s*?[\w\W]*?=>\s*?{[\s;]*?$)/,"$1})"],[/(^[\w\W]*?\([\w\W]*?\)\s*?{[\s;]*?$)/,"$1}"]],n=0;n<t.length;){if(t[n][0].test(e)){var o;e=(o=e).replace.apply(o,r(t[n]));break}n++}try{return new Function(e),!0}catch(e){return!1}}},{key:"build",value:function(){var e=this.options,t=this.context,n=this.scripts,r=this.stacks,o=e.source,i=e.filename,u=e.imports,c=[],f=k(this.CONTEXT_MAP,m),p=0,h=function(e,t){var n=t.line,o=t.start,i={generated:{line:r.length+p+1,column:1},original:{line:n+1,column:o+1}};return p+=e.split(/\n/).length-1,i},v=function(e){return e.replace(/^[\t ]+|[\t ]$/g,"")};r.push("function("+a+"){"),r.push("'use strict'"),r.push("var "+t.map(function(e){return e.name+"="+e.value}).join(",")),e.compileDebug?(r.push("try{"),n.forEach(function(e){e.tplToken.type===s.TYPE_EXPRESSION&&r.push(d+"=["+[e.tplToken.line,e.tplToken.start,w(e.source)].join(",")+"]"),c.push(h(e.code,e.tplToken)),r.push(v(e.code))}),r.push("}catch(error){"),r.push("throw {"+["name:'RuntimeError'","path:"+w(i),"message:error.message","line:"+d+"[0]+1","column:"+d+"[1]+1","source:"+d+"[2]","stack:error.stack"].join(",")+"}"),r.push("}")):n.forEach(function(e){c.push(h(e.code,e.tplToken)),r.push(v(e.code))}),r.push(f?"return "+g+"()":"return "+y),r.push("}");var b=r.join("\n");try{var S=new Function(l,x,"return "+b)(u,e);return S.mappings=c,S}catch(e){for(var E=0,$=0,T=0,j=o;E<n.length;){var O=n[E];if(!this.checkExpression(O.code)){j=O.source,$=O.tplToken.line,T=O.tplToken.start;break}E++}throw{name:"CompileError",path:i,message:e.message,line:$+1,column:T+1,source:j,script:b,stack:e.stack}}}}]),e}();S.CONSTS={DATA:a,IMPORTS:l,PRINT:f,INCLUDE:p,EXTEND:m,BLOCK:h,OPTIONS:x,OUT:y,LINE:d,BLOCKS:v,FROM:b,LAYOUT:g,ESCAPE:"$escape"},e.exports=S},function(e,t,n){"use strict";var r=n(6),o=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,i=function(e){var t={type:"invalid",value:e[0]};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t},u=function(e){return e.match(o).map(function(e){return o.lastIndex=0,i(o.exec(e))}).map(function(e){return"name"===e.type&&r(e.value)&&(e.type="keyword"),e})};e.exports=u},function(e,t,n){"use strict";function r(e){var t=e.stack.replace(/^[^:]+: /,"");delete e.stack,e=JSON.stringify(e,null,4),this.name="TemplateError",this.message=e,this.stack=t}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,e.exports=r},function(e,t,n){"use strict";var r=function(e,t,n){for(var r=[{type:"string",value:e,line:0,start:0,end:e.length}],o=0;o<t.length;o++)!function(e){for(var t=e.test.ignoreCase?"ig":"g",o=e.test.source+"|^$|[\\w\\W]",i=new RegExp(o,t),u=0;u<r.length;u++)if("string"===r[u].type){for(var c=r[u].line,s=r[u].start,a=r[u].end,l=r[u].value.match(i),f=[],p=0;p<l.length;p++){var m=l[p];e.test.lastIndex=0;var h=e.test.exec(m),y=h?"expression":"string",d=f[f.length-1],v=d||r[u],b=v.value;s=v.line===c?d?d.end:s:b.length-b.lastIndexOf("\n")-1,a=s+m.length;var g={type:y,value:m,line:c,start:s,end:a};if("string"===y)d&&"string"===d.type?(d.value+=m,d.end+=m.length):f.push(g);else{var x=e.use.apply(n,h);g.script=x,f.push(g)}c+=m.split(/\n/).length-1}r.splice.apply(r,[u,1].concat(f)),u+=f.length-1}}(t[o]);return r};r.TYPE_STRING="string",r.TYPE_EXPRESSION="expression",r.TYPE_RAW="raw",r.TYPE_ESCAPE="escape",e.exports=r},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(4),i=n(1),u=n(2),c=function(e,t){return"object"===(void 0===t?"undefined":r(t))?o({filename:e},t):i({filename:e,source:t})};c.render=o,c.compile=i,c.defaults=u,e.exports=c}])});
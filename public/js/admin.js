/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*
 * jQuery Fugue Plugin
 * For Ajax Form submit
 * Copyright (c) 2014 Lancee (xrhy.me)
 * Dual licensed under the MIT and GPL licenses
 */

!(function() {
  (function($, Export) {
    "use strict";

    $.fugue = function(ajaxform, options) {
      if (!ajaxform || ajaxform.nodeName.toLowerCase()!=="form") {
        throw new Error('this is not a form');
      }

      $.support.formdata = Export.FormData !== undefined;

      var Fugue = function() {
        this.init();
      };

      Fugue.prototype = {
        constructor: Fugue,

        init: function() {
          var $form = $(ajaxform).data('fugue', this),
              self = this;

          self.$el = $form.addClass('fugue');

          options = $.extend({}, $.fugue.defaults, options);
          options.type = $form.attr('method') || options.type;
          options.url = $form.attr('action') || options.url;

          $form.on('submit', function(e, func) {
            e = e.originalEvent || e;
            (e.preventDefault) ? e.preventDefault() : e.returnValue = false;

            if (!navigator.onLine) {
              alert('Connection Dead... Please check out the network ;)');
              return;
            }
            self.submit(e, func);
          });

          self.options = options;
        },

        serialize: function() {
          if (options.beforeSerialize && $.isFunction(options.beforeSerialize)) {
            options.beforeSerialize.call(this);
          }
          if ($.support.formdata) {
            var dataArray = this.$el.serializeArray(),
                data = {};

            $.each(dataArray, function(i, field) {
              if (field.value === 'true' || field.value === 'false') {
                var isTrue = (field.value === 'true');
                data[field.name] = isTrue;
              } else {
                data[field.name] ? data[field.name] = [field.value].concat(data[field.name]) : data[field.name] = field.value;
              }
            });
          }
          options.data = data;
          this.options = options;
        },

        submit: function(e, func) {
          var self = this;
          this.serialize();
          if (options.beforeSubmit && $.isFunction(options.beforeSubmit)) {
            options.beforeSubmit.call(this);
          }
          if (this.cancel) {
            return
          }
          this.defered = $.ajax(this.options).done(function(data, textStatus, jqXHR) {
            if (options.done && $.isFunction(options.done)) {
              options.done.call(self, data, textStatus, jqXHR);
            }

            if (func && $.isFunction(func)) {
              func.call(self, data, textStatus, jqXHR);
            }

            if (options.reset && $.isFunction(options.reset)) {
              options.reset.call(self, data, textStatus, jqXHR);
            }
          }).fail(function(jqXHR, textStatus, errorThrown) {
            if (options.fail && $.isFunction(options.fail)) {
              options.fail.call(self, jqXHR, textStatus, errorThrown);
            }
          });
        },
        options: $.fugue.defaults
      }

      return new Fugue();

    }

    $.fugue.defaults = {
      beforeSerialize: function() {},
      beforeSubmit: function() {},
      done: function() {},
      fail: function() {},
      reset: function() {},
      type: 'POST',
      contentType: 'application/json; charset=UTF-8',
      dataType: 'json',
      cache: false,
      timeout: 60000
    };

    $.fn.fugue = function(options, callback) {
      var fugue = $(this).data('fugue');

      if ($.isFunction(options)) {
        callback = options;
        options = null;
      }
      if((typeof(options)).match('object|undefined')) {
        return this.each(function(i) {
          if(!fugue) {
            fugue = $.fugue(this, options);
            if(callback)
              callback.call(fugue);
          } else {
            if(callback)
              callback.call(fugue);
          }
        });
      } else {
        throw new Error('arguments[0] is not a instance of Object');
      }
    }

  })(jQuery, window);

}).call(this);
//! moment.js
//! version : 2.8.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return zb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){tb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){qc[a]||(e(b),qc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=tb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Ib.length>0)for(c in Ib)d=Ib[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=tb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&nb(a,"Date",mb(a,"Date")+f*c),g&&lb(a,mb(a,"Month")+g*c),d&&tb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=jc[a]||kc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}tb[b]=function(e,f){var g,h,i=tb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=tb().utc().set(d,a);return i.call(tb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return hb(tb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Bb]<0||a._a[Bb]>11?Bb:a._a[Cb]<1||a._a[Cb]>B(a._a[Ab],a._a[Bb])?Cb:a._a[Db]<0||a._a[Db]>24||24===a._a[Db]&&(0!==a._a[Eb]||0!==a._a[Fb]||0!==a._a[Gb])?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>59?Fb:a._a[Gb]<0||a._a[Gb]>999?Gb:-1,a._pf._overflowDayOfYear&&(Ab>b||b>Cb)&&(b=Cb),a._pf.overflow=b)}function G(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Hb[a]&&Jb)try{b=tb.locale(),require("./locale/"+a),tb.locale(b)}catch(c){}return Hb[a]}function K(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(tb.isMoment(a)||v(a)?+a:+tb(a))-+c,c._d.setTime(+c._d+d),tb.updateOffset(c,!1),c):tb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Nb);for(b=0,c=d.length;c>b;b++)d[b]=pc[d[b]]?pc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),lc[b]||(lc[b]=M(b)),lc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Ob.lastIndex=0;d>=0&&Ob.test(a);)a=a.replace(Ob,c),Ob.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Zb;case"DDDD":return _b;case"YYYY":case"GGGG":case"gggg":return d?ac:Rb;case"Y":case"G":case"g":return cc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?bc:Sb;case"S":if(d)return Zb;case"SS":if(d)return $b;case"SSS":if(d)return _b;case"DDD":return Qb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ub;case"a":case"A":return b._locale._meridiemParse;case"x":return Xb;case"X":return Yb;case"Z":case"ZZ":return Vb;case"T":return Wb;case"SSSS":return Tb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?$b:Pb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Pb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Vb)||[],c=b[b.length-1]||[],d=(c+"").match(hc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Bb]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Bb]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Bb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Cb]=A(b));break;case"Do":null!=b&&(e[Cb]=A(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[Ab]=tb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Ab]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Db]=A(b);break;case"m":case"mm":e[Eb]=A(b);break;case"s":case"ss":e[Fb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Gb]=A(1e3*("0."+b));break;case"x":c._d=new Date(A(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=tb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Ab],hb(tb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Ab],hb(tb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ib(d,e,f,h,g),a._a[Ab]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Cb]&&null==a._a[Bb]&&S(a),a._dayOfYear&&(f=b(a._a[Ab],e[Ab]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=db(f,0,a._dayOfYear),a._a[Bb]=d.getUTCMonth(),a._a[Cb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Db]&&0===a._a[Eb]&&0===a._a[Fb]&&0===a._a[Gb]&&(a._nextDay=!0,a._a[Db]=0),a._d=(a._useUTC?db:cb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm),a._nextDay&&(a._a[Db]=24)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(b){if(b._f===tb.ISO_8601)return void $(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=O(b._f,b._locale).match(Nb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(P(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),pc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),R(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Db]<=12&&(b._pf.bigHour=a),b._isPm&&b._a[Db]<12&&(b._a[Db]+=12),b._isPm===!1&&12===b._a[Db]&&(b._a[Db]=0),T(b),F(b)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=dc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f=fc[b][0]+(e[6]||" ");break}for(b=0,c=gc.length;c>b;b++)if(gc[b][1].exec(d)){a._f+=gc[b][0];break}d.match(Vb)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,tb.createFromInputFallback(a))}function ab(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function bb(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Kb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=ab(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):tb.createFromInputFallback(b)}function cb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function db(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function gb(a,b,c){var d=tb.duration(a).abs(),e=yb(d.as("s")),f=yb(d.as("m")),g=yb(d.as("h")),h=yb(d.as("d")),i=yb(d.as("M")),j=yb(d.as("y")),k=e<mc.s&&["s",e]||1===f&&["m"]||f<mc.m&&["mm",f]||1===g&&["h"]||g<mc.h&&["hh",g]||1===h&&["d"]||h<mc.d&&["dd",h]||1===i&&["M"]||i<mc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fb.apply({},k)}function hb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=tb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ib(a,b,c,d,e){var f,g,h=db(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function jb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||tb.localeData(b._l),null===d||e===a&&""===d?tb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),tb.isMoment(d)?new k(d,!0):(e?u(e)?Z(b):W(b):bb(b),c=new k(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function kb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return tb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function lb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function mb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function nb(a,b,c){return"Month"===b?lb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ob(a,b){return function(c){return null!=c?(nb(this,a,c),tb.updateOffset(this,b),this):mb(this,a)}}function pb(a){return 400*a/146097}function qb(a){return 146097*a/400}function rb(a){tb.duration.fn[a]=function(){return this._data[a]}}function sb(a){"undefined"==typeof ender&&(ub=xb.moment,xb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",tb):tb)}for(var tb,ub,vb,wb="2.8.4",xb="undefined"!=typeof global?global:this,yb=Math.round,zb=Object.prototype.hasOwnProperty,Ab=0,Bb=1,Cb=2,Db=3,Eb=4,Fb=5,Gb=6,Hb={},Ib=[],Jb="undefined"!=typeof module&&module&&module.exports,Kb=/^\/?Date\((\-?\d+)/i,Lb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Mb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Nb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Ob=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pb=/\d\d?/,Qb=/\d{1,3}/,Rb=/\d{1,4}/,Sb=/[+\-]?\d{1,6}/,Tb=/\d+/,Ub=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vb=/Z|[\+\-]\d\d:?\d\d/gi,Wb=/T/i,Xb=/[\+\-]?\d+/,Yb=/[\+\-]?\d+(\.\d{1,3})?/,Zb=/\d/,$b=/\d\d/,_b=/\d{3}/,ac=/\d{4}/,bc=/[+-]?\d{6}/,cc=/[+-]?\d+/,dc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ec="YYYY-MM-DDTHH:mm:ssZ",fc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],gc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],hc=/([\+\-]|\d\d)/gi,ic=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),jc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},kc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},lc={},mc={s:45,m:45,h:22,d:26,M:11},nc="DDD w W M D d".split(" "),oc="M D H h m s w W".split(" "),pc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},qc={},rc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nc.length;)vb=nc.pop(),pc[vb+"o"]=i(pc[vb],vb);for(;oc.length;)vb=oc.pop(),pc[vb+vb]=h(pc[vb],2);pc.DDDD=h(pc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=tb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=tb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return hb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),jb(g)},tb.suppressDeprecationWarnings=!1,tb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),tb.min=function(){var a=[].slice.call(arguments,0);return kb("isBefore",a)},tb.max=function(){var a=[].slice.call(arguments,0);return kb("isAfter",a)},tb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),jb(g).utc()},tb.unix=function(a){return tb(1e3*a)},tb.duration=function(a,b){var d,e,f,g,h=a,i=null;return tb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Cb])*d,h:A(i[Db])*d,m:A(i[Eb])*d,s:A(i[Fb])*d,ms:A(i[Gb])*d}):(i=Mb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(tb(h.from),tb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),tb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},tb.version=wb,tb.defaultFormat=ec,tb.ISO_8601=function(){},tb.momentProperties=Ib,tb.updateOffset=function(){},tb.relativeTimeThreshold=function(b,c){return mc[b]===a?!1:c===a?mc[b]:(mc[b]=c,!0)},tb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return tb.locale(a,b)}),tb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?tb.defineLocale(a,b):tb.localeData(a),c&&(tb.duration._locale=tb._locale=c)),tb._locale._abbr},tb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Hb[a]||(Hb[a]=new j),Hb[a].set(b),tb.locale(a),Hb[a]):(delete Hb[a],null)},tb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return tb.localeData(a)}),tb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return tb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},tb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},tb.isDuration=function(a){return a instanceof l};for(vb=rc.length-1;vb>=0;--vb)z(rc[vb]);tb.normalizeUnits=function(a){return x(a)},tb.invalid=function(a){var b=tb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},tb.parseZone=function(){return tb.apply(null,arguments).parseZone()},tb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(tb.fn=k.prototype,{clone:function(){return tb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=tb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?tb.utc(this._a):tb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||tb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-tb(this).startOf("month")-(g-tb(g).startOf("month")),f-=6e4*(this.zone()-tb(this).startOf("month").zone()-(g.zone()-tb(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return tb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(tb(),a)},calendar:function(a){var b=a||tb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,tb(b)))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=eb(a,this.localeData()),this.add(a-b,"d")):b},month:ob("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=x(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this>+a):(c=tb.isMoment(a)?+a:+tb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+a>+this):(c=tb.isMoment(a)?+a:+tb(a),+this.clone().endOf(b)<c)},isSame:function(a,b){var c;return b=x(b||"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this===+a):(c=+tb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,tb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,tb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?tb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=yb((tb(this).startOf("day")-tb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=hb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=hb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=hb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=tb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),tb.fn.millisecond=tb.fn.milliseconds=ob("Milliseconds",!1),tb.fn.second=tb.fn.seconds=ob("Seconds",!1),tb.fn.minute=tb.fn.minutes=ob("Minutes",!1),tb.fn.hour=tb.fn.hours=ob("Hours",!0),tb.fn.date=ob("Date",!0),tb.fn.dates=f("dates accessor is deprecated. Use date instead.",ob("Date",!0)),tb.fn.year=ob("FullYear",!0),tb.fn.years=f("years accessor is deprecated. Use year instead.",ob("FullYear",!0)),tb.fn.days=tb.fn.day,tb.fn.months=tb.fn.month,tb.fn.weeks=tb.fn.week,tb.fn.isoWeeks=tb.fn.isoWeek,tb.fn.quarters=tb.fn.quarter,tb.fn.toJSON=tb.fn.toISOString,m(tb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pb(e)),e-=o(qb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=gb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=tb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=tb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(qb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;
case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:tb.fn.lang,locale:tb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),tb.duration.fn.toString=tb.duration.fn.toISOString;for(vb in ic)c(ic,vb)&&rb(vb.toLowerCase());tb.duration.fn.asMilliseconds=function(){return this.as("ms")},tb.duration.fn.asSeconds=function(){return this.as("s")},tb.duration.fn.asMinutes=function(){return this.as("m")},tb.duration.fn.asHours=function(){return this.as("h")},tb.duration.fn.asDays=function(){return this.as("d")},tb.duration.fn.asWeeks=function(){return this.as("weeks")},tb.duration.fn.asMonths=function(){return this.as("M")},tb.duration.fn.asYears=function(){return this.as("y")},tb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Jb?module.exports=tb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(xb.moment=ub),tb}),sb(!0)):sb()}).call(this);
/*
 * jQuery tabSwitch
 *
 * Light weight tab switch
 *
 * Copyright (c) 2012, lancee LY
 *
 * http://xrhy.me/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
!(function($) {

  "use strict"

  $.tabSwitch = function(options, scope) {

    // Initialization
    var init = function() {
      options = $.extend({}, $.tabSwitch.defaults, options);
      var tabs = scope ? $(scope).find(options.tabSelector) : $(options.tabSelector),
          page = scope ? $(scope).find(options.tabPageSelector) : $(options.tabPageSelector);

      if (options.isIdMode) {
        page = page.each(function(i) {
          var id = $(this).attr('id');
          page[id] = this;
        });
      }

      page.each(function(i) {
        $(this).data('tab-page', i);
        if (!$(this).hasClass('cur')) {
          $(this).addClass('invisible');
        }
      });
      tabs.each(function(i) {
        $(this).data('tab', i);
      });

      tabs.on(options.event, function(e) {
        tabs.removeClass('cur');//.parent().removeClass('cur');
        page.addClass('invisible').removeClass('cur');
        var k = options.isIdMode ? $(this).attr('href').replace('#','') : $(this).data('tab');
        $(this).addClass('cur');//.parent().addClass('cur');
        $(page[k]).removeClass('invisible').addClass('cur');
        (e.preventDefault)?e.preventDefault():e.returnValue = false;
        if (options.click)
          options.click.call(this, e, k, options);
      });

    };

    init();

  };

  $.tabSwitch.defaults = {
    tabSelector : '.tab',
    tabPageSelector : '.tab-page',
    isIdMode : false,
    click: '',
    event: 'click'
  };

  $.fn.tabSwitch = function(options, callback) {
    return this.each(function(i) {
      if( (typeof(options) ).match('object|undefined')) {
        $.tabSwitch(options, this);
        if ( callback ) {
          callback.call(this, i);
        }
      }
    });
  };

})(jQuery);
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.1
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function(){"use strict";var t=this,i=t.Chart,e=function(t){this.canvas=t.canvas,this.ctx=t;this.width=t.canvas.width,this.height=t.canvas.height;return this.aspectRatio=this.width/this.height,s.retinaScale(this),this};e.defaults={global:{animation:!0,animationSteps:60,animationEasing:"easeOutQuart",showScale:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleIntegersOnly:!0,scaleBeginAtZero:!1,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:!1,maintainAspectRatio:!0,showTooltips:!0,customTooltips:!1,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:"#fff",onAnimationProgress:function(){},onAnimationComplete:function(){}}},e.types={};var s=e.helpers={},n=s.each=function(t,i,e){var s=Array.prototype.slice.call(arguments,3);if(t)if(t.length===+t.length){var n;for(n=0;n<t.length;n++)i.apply(e,[t[n],n].concat(s))}else for(var o in t)i.apply(e,[t[o],o].concat(s))},o=s.clone=function(t){var i={};return n(t,function(e,s){t.hasOwnProperty(s)&&(i[s]=e)}),i},a=s.extend=function(t){return n(Array.prototype.slice.call(arguments,1),function(i){n(i,function(e,s){i.hasOwnProperty(s)&&(t[s]=e)})}),t},h=s.merge=function(){var t=Array.prototype.slice.call(arguments,0);return t.unshift({}),a.apply(null,t)},l=s.indexOf=function(t,i){if(Array.prototype.indexOf)return t.indexOf(i);for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1},r=(s.where=function(t,i){var e=[];return s.each(t,function(t){i(t)&&e.push(t)}),e},s.findNextWhere=function(t,i,e){e||(e=-1);for(var s=e+1;s<t.length;s++){var n=t[s];if(i(n))return n}},s.findPreviousWhere=function(t,i,e){e||(e=t.length);for(var s=e-1;s>=0;s--){var n=t[s];if(i(n))return n}},s.inherits=function(t){var i=this,e=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return i.apply(this,arguments)},s=function(){this.constructor=e};return s.prototype=i.prototype,e.prototype=new s,e.extend=r,t&&a(e.prototype,t),e.__super__=i.prototype,e}),c=s.noop=function(){},u=s.uid=function(){var t=0;return function(){return"chart-"+t++}}(),d=s.warn=function(t){window.console&&"function"==typeof window.console.warn&&console.warn(t)},p=s.amd="function"==typeof define&&define.amd,f=s.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},g=s.max=function(t){return Math.max.apply(Math,t)},m=s.min=function(t){return Math.min.apply(Math,t)},v=(s.cap=function(t,i,e){if(f(i)){if(t>i)return i}else if(f(e)&&e>t)return e;return t},s.getDecimalPlaces=function(t){return t%1!==0&&f(t)?t.toString().split(".")[1].length:0}),S=s.radians=function(t){return t*(Math.PI/180)},x=(s.getAngleFromPoint=function(t,i){var e=i.x-t.x,s=i.y-t.y,n=Math.sqrt(e*e+s*s),o=2*Math.PI+Math.atan2(s,e);return 0>e&&0>s&&(o+=2*Math.PI),{angle:o,distance:n}},s.aliasPixel=function(t){return t%2===0?0:.5}),y=(s.splineCurve=function(t,i,e,s){var n=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)),o=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),a=s*n/(n+o),h=s*o/(n+o);return{inner:{x:i.x-a*(e.x-t.x),y:i.y-a*(e.y-t.y)},outer:{x:i.x+h*(e.x-t.x),y:i.y+h*(e.y-t.y)}}},s.calculateOrderOfMagnitude=function(t){return Math.floor(Math.log(t)/Math.LN10)}),C=(s.calculateScaleRange=function(t,i,e,s,n){var o=2,a=Math.floor(i/(1.5*e)),h=o>=a,l=g(t),r=m(t);l===r&&(l+=.5,r>=.5&&!s?r-=.5:l+=.5);for(var c=Math.abs(l-r),u=y(c),d=Math.ceil(l/(1*Math.pow(10,u)))*Math.pow(10,u),p=s?0:Math.floor(r/(1*Math.pow(10,u)))*Math.pow(10,u),f=d-p,v=Math.pow(10,u),S=Math.round(f/v);(S>a||a>2*S)&&!h;)if(S>a)v*=2,S=Math.round(f/v),S%1!==0&&(h=!0);else if(n&&u>=0){if(v/2%1!==0)break;v/=2,S=Math.round(f/v)}else v/=2,S=Math.round(f/v);return h&&(S=o,v=f/S),{steps:S,stepValue:v,min:p,max:p+S*v}},s.template=function(t,i){function e(t,i){var e=/\W/.test(t)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):s[t]=s[t];return i?e(i):e}if(t instanceof Function)return t(i);var s={};return e(t,i)}),w=(s.generateLabels=function(t,i,e,s){var o=new Array(i);return labelTemplateString&&n(o,function(i,n){o[n]=C(t,{value:e+s*(n+1)})}),o},s.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),-(s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)))},easeOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),s*Math.pow(2,-10*t)*Math.sin(2*(1*t-i)*Math.PI/e)+1)},easeInOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:2==(t/=.5)?1:(e||(e=.3*1.5),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),1>t?-.5*s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e):s*Math.pow(2,-10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)*.5+1)},easeInBack:function(t){var i=1.70158;return 1*(t/=1)*t*((i+1)*t-i)},easeOutBack:function(t){var i=1.70158;return 1*((t=t/1-1)*t*((i+1)*t+i)+1)},easeInOutBack:function(t){var i=1.70158;return(t/=.5)<1?.5*t*t*(((i*=1.525)+1)*t-i):.5*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)},easeInBounce:function(t){return 1-w.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*w.easeInBounce(2*t):.5*w.easeOutBounce(2*t-1)+.5}}),b=s.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),P=(s.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),s.animationLoop=function(t,i,e,s,n,o){var a=0,h=w[e]||w.linear,l=function(){a++;var e=a/i,r=h(e);t.call(o,r,e,a),s.call(o,r,e),i>a?o.animationFrame=b(l):n.apply(o)};b(l)},s.getRelativePosition=function(t){var i,e,s=t.originalEvent||t,n=t.currentTarget||t.srcElement,o=n.getBoundingClientRect();return s.touches?(i=s.touches[0].clientX-o.left,e=s.touches[0].clientY-o.top):(i=s.clientX-o.left,e=s.clientY-o.top),{x:i,y:e}},s.addEvent=function(t,i,e){t.addEventListener?t.addEventListener(i,e):t.attachEvent?t.attachEvent("on"+i,e):t["on"+i]=e}),L=s.removeEvent=function(t,i,e){t.removeEventListener?t.removeEventListener(i,e,!1):t.detachEvent?t.detachEvent("on"+i,e):t["on"+i]=c},k=(s.bindEvents=function(t,i,e){t.events||(t.events={}),n(i,function(i){t.events[i]=function(){e.apply(t,arguments)},P(t.chart.canvas,i,t.events[i])})},s.unbindEvents=function(t,i){n(i,function(i,e){L(t.chart.canvas,e,i)})}),F=s.getMaximumWidth=function(t){var i=t.parentNode;return i.clientWidth},R=s.getMaximumHeight=function(t){var i=t.parentNode;return i.clientHeight},T=(s.getMaximumSize=s.getMaximumWidth,s.retinaScale=function(t){var i=t.ctx,e=t.canvas.width,s=t.canvas.height;window.devicePixelRatio&&(i.canvas.style.width=e+"px",i.canvas.style.height=s+"px",i.canvas.height=s*window.devicePixelRatio,i.canvas.width=e*window.devicePixelRatio,i.scale(window.devicePixelRatio,window.devicePixelRatio))}),A=s.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},M=s.fontString=function(t,i,e){return i+" "+t+"px "+e},W=s.longestText=function(t,i,e){t.font=i;var s=0;return n(e,function(i){var e=t.measureText(i).width;s=e>s?e:s}),s},z=s.drawRoundedRectangle=function(t,i,e,s,n,o){t.beginPath(),t.moveTo(i+o,e),t.lineTo(i+s-o,e),t.quadraticCurveTo(i+s,e,i+s,e+o),t.lineTo(i+s,e+n-o),t.quadraticCurveTo(i+s,e+n,i+s-o,e+n),t.lineTo(i+o,e+n),t.quadraticCurveTo(i,e+n,i,e+n-o),t.lineTo(i,e+o),t.quadraticCurveTo(i,e,i+o,e),t.closePath()};e.instances={},e.Type=function(t,i,s){this.options=i,this.chart=s,this.id=u(),e.instances[this.id]=this,i.responsive&&this.resize(),this.initialize.call(this,t)},a(e.Type.prototype,{initialize:function(){return this},clear:function(){return A(this.chart),this},stop:function(){return s.cancelAnimFrame.call(t,this.animationFrame),this},resize:function(t){this.stop();var i=this.chart.canvas,e=F(this.chart.canvas),s=this.options.maintainAspectRatio?e/this.chart.aspectRatio:R(this.chart.canvas);return i.width=this.chart.width=e,i.height=this.chart.height=s,T(this.chart),"function"==typeof t&&t.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:c,render:function(t){return t&&this.reflow(),this.options.animation&&!t?s.animationLoop(this.draw,this.options.animationSteps,this.options.animationEasing,this.options.onAnimationProgress,this.options.onAnimationComplete,this):(this.draw(),this.options.onAnimationComplete.call(this)),this},generateLegend:function(){return C(this.options.legendTemplate,this)},destroy:function(){this.clear(),k(this,this.events);var t=this.chart.canvas;t.width=this.chart.width,t.height=this.chart.height,t.style.removeProperty?(t.style.removeProperty("width"),t.style.removeProperty("height")):(t.style.removeAttribute("width"),t.style.removeAttribute("height")),delete e.instances[this.id]},showTooltip:function(t,i){"undefined"==typeof this.activeElements&&(this.activeElements=[]);var o=function(t){var i=!1;return t.length!==this.activeElements.length?i=!0:(n(t,function(t,e){t!==this.activeElements[e]&&(i=!0)},this),i)}.call(this,t);if(o||i){if(this.activeElements=t,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),t.length>0)if(this.datasets&&this.datasets.length>1){for(var a,h,r=this.datasets.length-1;r>=0&&(a=this.datasets[r].points||this.datasets[r].bars||this.datasets[r].segments,h=l(a,t[0]),-1===h);r--);var c=[],u=[],d=function(){var t,i,e,n,o,a=[],l=[],r=[];return s.each(this.datasets,function(i){t=i.points||i.bars||i.segments,t[h]&&t[h].hasValue()&&a.push(t[h])}),s.each(a,function(t){l.push(t.x),r.push(t.y),c.push(s.template(this.options.multiTooltipTemplate,t)),u.push({fill:t._saved.fillColor||t.fillColor,stroke:t._saved.strokeColor||t.strokeColor})},this),o=m(r),e=g(r),n=m(l),i=g(l),{x:n>this.chart.width/2?n:i,y:(o+e)/2}}.call(this,h);new e.MultiTooltip({x:d.x,y:d.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:c,legendColors:u,legendColorBackground:this.options.multiTooltipKeyBackground,title:t[0].label,chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else n(t,function(t){var i=t.tooltipPosition();new e.Tooltip({x:Math.round(i.x),y:Math.round(i.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:C(this.options.tooltipTemplate,t),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),e.Type.extend=function(t){var i=this,s=function(){return i.apply(this,arguments)};if(s.prototype=o(i.prototype),a(s.prototype,t),s.extend=e.Type.extend,t.name||i.prototype.name){var n=t.name||i.prototype.name,l=e.defaults[i.prototype.name]?o(e.defaults[i.prototype.name]):{};e.defaults[n]=a(l,t.defaults),e.types[n]=s,e.prototype[n]=function(t,i){var o=h(e.defaults.global,e.defaults[n],i||{});return new s(t,o,this)}}else d("Name not provided for this chart, so it hasn't been registered");return i},e.Element=function(t){a(this,t),this.initialize.apply(this,arguments),this.save()},a(e.Element.prototype,{initialize:function(){},restore:function(t){return t?n(t,function(t){this[t]=this._saved[t]},this):a(this,this._saved),this},save:function(){return this._saved=o(this),delete this._saved._saved,this},update:function(t){return n(t,function(t,i){this._saved[i]=this[i],this[i]=t},this),this},transition:function(t,i){return n(t,function(t,e){this[e]=(t-this._saved[e])*i+this._saved[e]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return f(this.value)}}),e.Element.extend=r,e.Point=e.Element.extend({display:!0,inRange:function(t,i){var e=this.hitDetectionRadius+this.radius;return Math.pow(t-this.x,2)+Math.pow(i-this.y,2)<Math.pow(e,2)},draw:function(){if(this.display){var t=this.ctx;t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath(),t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.fillStyle=this.fillColor,t.fill(),t.stroke()}}}),e.Arc=e.Element.extend({inRange:function(t,i){var e=s.getAngleFromPoint(this,{x:t,y:i}),n=e.angle>=this.startAngle&&e.angle<=this.endAngle,o=e.distance>=this.innerRadius&&e.distance<=this.outerRadius;return n&&o},tooltipPosition:function(){var t=this.startAngle+(this.endAngle-this.startAngle)/2,i=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(t)*i,y:this.y+Math.sin(t)*i}},draw:function(t){var i=this.ctx;i.beginPath(),i.arc(this.x,this.y,this.outerRadius,this.startAngle,this.endAngle),i.arc(this.x,this.y,this.innerRadius,this.endAngle,this.startAngle,!0),i.closePath(),i.strokeStyle=this.strokeColor,i.lineWidth=this.strokeWidth,i.fillStyle=this.fillColor,i.fill(),i.lineJoin="bevel",this.showStroke&&i.stroke()}}),e.Rectangle=e.Element.extend({draw:function(){var t=this.ctx,i=this.width/2,e=this.x-i,s=this.x+i,n=this.base-(this.base-this.y),o=this.strokeWidth/2;this.showStroke&&(e+=o,s-=o,n+=o),t.beginPath(),t.fillStyle=this.fillColor,t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.moveTo(e,this.base),t.lineTo(e,n),t.lineTo(s,n),t.lineTo(s,this.base),t.fill(),this.showStroke&&t.stroke()},height:function(){return this.base-this.y},inRange:function(t,i){return t>=this.x-this.width/2&&t<=this.x+this.width/2&&i>=this.y&&i<=this.base}}),e.Tooltip=e.Element.extend({draw:function(){var t=this.chart.ctx;t.font=M(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";var i=this.caretPadding=2,e=t.measureText(this.text).width+2*this.xPadding,s=this.fontSize+2*this.yPadding,n=s+this.caretHeight+i;this.x+e/2>this.chart.width?this.xAlign="left":this.x-e/2<0&&(this.xAlign="right"),this.y-n<0&&(this.yAlign="below");var o=this.x-e/2,a=this.y-n;if(t.fillStyle=this.fillColor,this.custom)this.custom(this);else{switch(this.yAlign){case"above":t.beginPath(),t.moveTo(this.x,this.y-i),t.lineTo(this.x+this.caretHeight,this.y-(i+this.caretHeight)),t.lineTo(this.x-this.caretHeight,this.y-(i+this.caretHeight)),t.closePath(),t.fill();break;case"below":a=this.y+i+this.caretHeight,t.beginPath(),t.moveTo(this.x,this.y+i),t.lineTo(this.x+this.caretHeight,this.y+i+this.caretHeight),t.lineTo(this.x-this.caretHeight,this.y+i+this.caretHeight),t.closePath(),t.fill()}switch(this.xAlign){case"left":o=this.x-e+(this.cornerRadius+this.caretHeight);break;case"right":o=this.x-(this.cornerRadius+this.caretHeight)}z(t,o,a,e,s,this.cornerRadius),t.fill(),t.fillStyle=this.textColor,t.textAlign="center",t.textBaseline="middle",t.fillText(this.text,o+e/2,a+s/2)}}}),e.MultiTooltip=e.Element.extend({initialize:function(){this.font=M(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=M(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+1.5*this.titleFontSize,this.ctx.font=this.titleFont;var t=this.ctx.measureText(this.title).width,i=W(this.ctx,this.font,this.labels)+this.fontSize+3,e=g([i,t]);this.width=e+2*this.xPadding;var s=this.height/2;this.y-s<0?this.y=s:this.y+s>this.chart.height&&(this.y=this.chart.height-s),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(t){var i=this.y-this.height/2+this.yPadding,e=t-1;return 0===t?i+this.titleFontSize/2:i+(1.5*this.fontSize*e+this.fontSize/2)+1.5*this.titleFontSize},draw:function(){if(this.custom)this.custom(this);else{z(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var t=this.ctx;t.fillStyle=this.fillColor,t.fill(),t.closePath(),t.textAlign="left",t.textBaseline="middle",t.fillStyle=this.titleTextColor,t.font=this.titleFont,t.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),t.font=this.font,s.each(this.labels,function(i,e){t.fillStyle=this.textColor,t.fillText(i,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(e+1)),t.fillStyle=this.legendColorBackground,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize),t.fillStyle=this.legendColors[e].fill,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}}),e.Scale=e.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}));this.yLabelWidth=this.display&&this.showLabels?W(this.ctx,this.font,this.yLabels):0},addXLabel:function(t){this.xLabels.push(t),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;var t,i=this.endPoint-this.startPoint;for(this.calculateYRange(i),this.buildYLabels(),this.calculateXLabelRotation();i>this.endPoint-this.startPoint;)i=this.endPoint-this.startPoint,t=this.yLabelWidth,this.calculateYRange(i),this.buildYLabels(),t<this.yLabelWidth&&this.calculateXLabelRotation()},calculateXLabelRotation:function(){this.ctx.font=this.font;var t,i,e=this.ctx.measureText(this.xLabels[0]).width,s=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=s/2+3,this.xScalePaddingLeft=e/2>this.yLabelWidth+10?e/2:this.yLabelWidth+10,this.xLabelRotation=0,this.display){var n,o=W(this.ctx,this.font,this.xLabels);this.xLabelWidth=o;for(var a=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>a&&0===this.xLabelRotation||this.xLabelWidth>a&&this.xLabelRotation<=90&&this.xLabelRotation>0;)n=Math.cos(S(this.xLabelRotation)),t=n*e,i=n*s,t+this.fontSize/2>this.yLabelWidth+8&&(this.xScalePaddingLeft=t+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=n*o;this.xLabelRotation>0&&(this.endPoint-=Math.sin(S(this.xLabelRotation))*o+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},calculateYRange:c,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(t){var i=this.drawingArea()/(this.min-this.max);return this.endPoint-i*(t-this.min)},calculateX:function(t){var i=(this.xLabelRotation>0,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),e=i/(this.valuesCount-(this.offsetGridLines?0:1)),s=e*t+this.xScalePaddingLeft;return this.offsetGridLines&&(s+=e/2),Math.round(s)},update:function(t){s.extend(this,t),this.fit()},draw:function(){var t=this.ctx,i=(this.endPoint-this.startPoint)/this.steps,e=Math.round(this.xScalePaddingLeft);this.display&&(t.fillStyle=this.textColor,t.font=this.font,n(this.yLabels,function(n,o){var a=this.endPoint-i*o,h=Math.round(a),l=this.showHorizontalLines;t.textAlign="right",t.textBaseline="middle",this.showLabels&&t.fillText(n,e-10,a),0!==o||l||(l=!0),l&&t.beginPath(),o>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),h+=s.aliasPixel(t.lineWidth),l&&(t.moveTo(e,h),t.lineTo(this.width,h),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(e-5,h),t.lineTo(e,h),t.stroke(),t.closePath()},this),n(this.xLabels,function(i,e){var s=this.calculateX(e)+x(this.lineWidth),n=this.calculateX(e-(this.offsetGridLines?.5:0))+x(this.lineWidth),o=this.xLabelRotation>0,a=this.showVerticalLines;0!==e||a||(a=!0),a&&t.beginPath(),e>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),a&&(t.moveTo(n,this.endPoint),t.lineTo(n,this.startPoint-3),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(n,this.endPoint),t.lineTo(n,this.endPoint+5),t.stroke(),t.closePath(),t.save(),t.translate(s,o?this.endPoint+12:this.endPoint+8),t.rotate(-1*S(this.xLabelRotation)),t.font=this.font,t.textAlign=o?"right":"center",t.textBaseline=o?"middle":"top",t.fillText(i,0,0),t.restore()},this))}}),e.RadialScale=e.Element.extend({initialize:function(){this.size=m([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(t){var i=this.drawingArea/(this.max-this.min);return(t-this.min)*i},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){var t,i,e,s,n,o,a,h,l,r,c,u,d=m([this.height/2-this.pointLabelFontSize-5,this.width/2]),p=this.width,g=0;for(this.ctx.font=M(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),i=0;i<this.valuesCount;i++)t=this.getPointPosition(i,d),e=this.ctx.measureText(C(this.templateString,{value:this.labels[i]})).width+5,0===i||i===this.valuesCount/2?(s=e/2,t.x+s>p&&(p=t.x+s,n=i),t.x-s<g&&(g=t.x-s,a=i)):i<this.valuesCount/2?t.x+e>p&&(p=t.x+e,n=i):i>this.valuesCount/2&&t.x-e<g&&(g=t.x-e,a=i);l=g,r=Math.ceil(p-this.width),o=this.getIndexAngle(n),h=this.getIndexAngle(a),c=r/Math.sin(o+Math.PI/2),u=l/Math.sin(h+Math.PI/2),c=f(c)?c:0,u=f(u)?u:0,this.drawingArea=d-(u+c)/2,this.setCenterPoint(u,c)},setCenterPoint:function(t,i){var e=this.width-i-this.drawingArea,s=t+this.drawingArea;this.xCenter=(s+e)/2,this.yCenter=this.height/2},getIndexAngle:function(t){var i=2*Math.PI/this.valuesCount;return t*i-Math.PI/2},getPointPosition:function(t,i){var e=this.getIndexAngle(t);return{x:Math.cos(e)*i+this.xCenter,y:Math.sin(e)*i+this.yCenter}},draw:function(){if(this.display){var t=this.ctx;if(n(this.yLabels,function(i,e){if(e>0){var s,n=e*(this.drawingArea/this.steps),o=this.yCenter-n;if(this.lineWidth>0)if(t.strokeStyle=this.lineColor,t.lineWidth=this.lineWidth,this.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,n,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var a=0;a<this.valuesCount;a++)s=this.getPointPosition(a,this.calculateCenterOffset(this.min+e*this.stepValue)),0===a?t.moveTo(s.x,s.y):t.lineTo(s.x,s.y);t.closePath(),t.stroke()}if(this.showLabels){if(t.font=M(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var h=t.measureText(i).width;t.fillStyle=this.backdropColor,t.fillRect(this.xCenter-h/2-this.backdropPaddingX,o-this.fontSize/2-this.backdropPaddingY,h+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.fontColor,t.fillText(i,this.xCenter,o)}}},this),!this.lineArc){t.lineWidth=this.angleLineWidth,t.strokeStyle=this.angleLineColor;for(var i=this.valuesCount-1;i>=0;i--){if(this.angleLineWidth>0){var e=this.getPointPosition(i,this.calculateCenterOffset(this.max));t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(e.x,e.y),t.stroke(),t.closePath()}var s=this.getPointPosition(i,this.calculateCenterOffset(this.max)+5);t.font=M(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),t.fillStyle=this.pointLabelFontColor;var o=this.labels.length,a=this.labels.length/2,h=a/2,l=h>i||i>o-h,r=i===h||i===o-h;t.textAlign=0===i?"center":i===a?"center":a>i?"left":"right",t.textBaseline=r?"middle":l?"bottom":"top",t.fillText(this.labels[i],s.x,s.y)}}}}}),s.addEvent(window,"resize",function(){var t;return function(){clearTimeout(t),t=setTimeout(function(){n(e.instances,function(t){t.options.responsive&&t.resize(t.render,!0)})},50)}}()),p?define(function(){return e}):"object"==typeof module&&module.exports&&(module.exports=e),t.Chart=e,e.noConflict=function(){return t.Chart=i,e}}).call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Bar",defaults:s,initialize:function(t){var s=this.options;this.ScaleClass=i.Scale.extend({offsetGridLines:!0,calculateBarX:function(t,i,e){var n=this.calculateBaseWidth(),o=this.calculateX(e)-n/2,a=this.calculateBarWidth(t);return o+a*i+i*s.barDatasetSpacing+a/2},calculateBaseWidth:function(){return this.calculateX(1)-this.calculateX(0)-2*s.barValueSpacing},calculateBarWidth:function(t){var i=this.calculateBaseWidth()-(t-1)*s.barDatasetSpacing;return i/t}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getBarsAtEvent(t):[];this.eachBars(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),this.BarClass=i.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,bars:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.bars.push(new this.BarClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.strokeColor,fillColor:i.fillColor,highlightFill:i.highlightFill||i.fillColor,highlightStroke:i.highlightStroke||i.strokeColor}))},this)},this),this.buildScale(t.labels),this.BarClass.prototype.base=this.scale.endPoint,this.eachBars(function(t,i,s){e.extend(t,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,s,i),y:this.scale.endPoint}),t.save()},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachBars(function(t){t.save()}),this.render()},eachBars:function(t){e.each(this.datasets,function(i,s){e.each(i.bars,t,this,s)},this)},getBarsAtEvent:function(t){for(var i,s=[],n=e.getRelativePosition(t),o=function(t){s.push(t.bars[i])},a=0;a<this.datasets.length;a++)for(i=0;i<this.datasets[a].bars.length;i++)if(this.datasets[a].bars[i].inRange(n.x,n.y))return e.each(this.datasets,o),s;return s},buildScale:function(t){var i=this,s=function(){var t=[];return i.eachBars(function(i){t.push(i.value)}),t},n={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(s(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.barShowStroke?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(n,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new this.ScaleClass(n)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].bars.push(new this.BarClass({value:t,label:i,x:this.scale.calculateBarX(this.datasets.length,e,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[e].strokeColor,fillColor:this.datasets[e].fillColor}))},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.bars.shift()},this),this.update()},reflow:function(){e.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});
var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();this.chart.ctx;this.scale.draw(i),e.each(this.datasets,function(t,s){e.each(t.bars,function(t,e){t.hasValue()&&(t.base=this.scale.endPoint,t.transition({x:this.scale.calculateBarX(this.datasets.length,s,e),y:this.scale.calculateY(t.value),width:this.scale.calculateBarWidth(this.datasets.length)},i).draw())},this)},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Doughnut",defaults:s,initialize:function(t){this.segments=[],this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,this.SegmentArc=i.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2}),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.calculateTotal(t),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({value:t.value,outerRadius:this.options.animateScale?0:this.outerRadius,innerRadius:this.options.animateScale?0:this.outerRadius/100*this.options.percentageInnerCutout,fillColor:t.color,highlightColor:t.highlight||t.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:1.5*Math.PI,circumference:this.options.animateRotate?0:this.calculateCircumference(t.value),label:t.label})),e||(this.reflow(),this.update())},calculateCircumference:function(t){return 2*Math.PI*(t/this.total)},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=t.value},this)},update:function(){this.calculateTotal(this.segments),e.each(this.activeElements,function(t){t.restore(["fillColor"])}),e.each(this.segments,function(t){t.save()}),this.render()},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,e.each(this.segments,function(t){t.update({outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout})},this)},draw:function(t){var i=t?t:1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.calculateCircumference(t.value),outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout},i),t.endAngle=t.startAngle+t.circumference,t.draw(),0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle)},this)}}),i.types.Doughnut.extend({name:"Pie",defaults:e.merge(s,{percentageInnerCutout:0})})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Line",defaults:s,initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(t){return Math.pow(t-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2)}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this),this.buildScale(t.labels),this.eachPoints(function(t,i){e.extend(t,{x:this.scale.calculateX(i),y:this.scale.endPoint}),t.save()},this)},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachPoints(function(t){t.save()}),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.datasets,function(t){e.each(t.points,function(t){t.inRange(s.x,s.y)&&i.push(t)})},this),i},buildScale:function(t){var s=this,n=function(){var t=[];return s.eachPoints(function(i){t.push(i.value)}),t},o={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(n(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(o,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new i.Scale(o)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.points.shift()},this),this.update()},reflow:function(){var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();var s=this.chart.ctx,n=function(t){return null!==t.value},o=function(t,i,s){return e.findNextWhere(i,n,s)||t},a=function(t,i,s){return e.findPreviousWhere(i,n,s)||t};this.scale.draw(i),e.each(this.datasets,function(t){var h=e.where(t.points,n);e.each(t.points,function(t,e){t.hasValue()&&t.transition({y:this.scale.calculateY(t.value),x:this.scale.calculateX(e)},i)},this),this.options.bezierCurve&&e.each(h,function(t,i){var s=i>0&&i<h.length-1?this.options.bezierCurveTension:0;t.controlPoints=e.splineCurve(a(t,h,i),t,o(t,h,i),s),t.controlPoints.outer.y>this.scale.endPoint?t.controlPoints.outer.y=this.scale.endPoint:t.controlPoints.outer.y<this.scale.startPoint&&(t.controlPoints.outer.y=this.scale.startPoint),t.controlPoints.inner.y>this.scale.endPoint?t.controlPoints.inner.y=this.scale.endPoint:t.controlPoints.inner.y<this.scale.startPoint&&(t.controlPoints.inner.y=this.scale.startPoint)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(h,function(t,i){if(0===i)s.moveTo(t.x,t.y);else if(this.options.bezierCurve){var e=a(t,h,i);s.bezierCurveTo(e.controlPoints.outer.x,e.controlPoints.outer.y,t.controlPoints.inner.x,t.controlPoints.inner.y,t.x,t.y)}else s.lineTo(t.x,t.y)},this),s.stroke(),this.options.datasetFill&&h.length>0&&(s.lineTo(h[h.length-1].x,this.scale.endPoint),s.lineTo(h[0].x,this.scale.endPoint),s.fillStyle=t.fillColor,s.closePath(),s.fill()),e.each(h,function(t){t.draw()})},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBeginAtZero:!0,scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,scaleShowLine:!0,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"PolarArea",defaults:s,initialize:function(t){this.segments=[],this.SegmentArc=i.Arc.extend({showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,ctx:this.chart.ctx,innerRadius:0,x:this.chart.width/2,y:this.chart.height/2}),this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,lineArc:!0,width:this.chart.width,height:this.chart.height,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,valuesCount:t.length}),this.updateScaleRange(t),this.scale.update(),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({fillColor:t.color,highlightColor:t.highlight||t.color,label:t.label,value:t.value,outerRadius:this.options.animateScale?0:this.scale.calculateCenterOffset(t.value),circumference:this.options.animateRotate?0:this.scale.getCircumference(),startAngle:1.5*Math.PI})),e||(this.reflow(),this.update())},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=t.value},this),this.scale.valuesCount=this.segments.length},updateScaleRange:function(t){var i=[];e.each(t,function(t){i.push(t.value)});var s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s,{size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2})},update:function(){this.calculateTotal(this.segments),e.each(this.segments,function(t){t.save()}),this.render()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.updateScaleRange(this.segments),this.scale.update(),e.extend(this.scale,{xCenter:this.chart.width/2,yCenter:this.chart.height/2}),e.each(this.segments,function(t){t.update({outerRadius:this.scale.calculateCenterOffset(t.value)})},this)},draw:function(t){var i=t||1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.scale.getCircumference(),outerRadius:this.scale.calculateCenterOffset(t.value)},i),t.endAngle=t.startAngle+t.circumference,0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle),t.draw()},this),this.scale.draw()}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers;i.Type.extend({name:"Radar",defaults:{scaleShowLine:!0,angleShowLineOut:!0,scaleShowLabels:!1,scaleBeginAtZero:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx}),this.datasets=[],this.buildScale(t),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){var o;this.scale.animation||(o=this.scale.getPointPosition(n,this.scale.calculateCenterOffset(e))),s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,x:this.options.animation?this.scale.xCenter:o.x,y:this.options.animation?this.scale.yCenter:o.y,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this)},this),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=e.getRelativePosition(t),s=e.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},i),n=2*Math.PI/this.scale.valuesCount,o=Math.round((s.angle-1.5*Math.PI)/n),a=[];return(o>=this.scale.valuesCount||0>o)&&(o=0),s.distance<=this.scale.drawingArea&&e.each(this.datasets,function(t){a.push(t.points[o])}),a},buildScale:function(t){this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:this.options.angleShowLineOut?this.options.angleLineWidth:0,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:t.labels,valuesCount:t.datasets[0].data.length}),this.scale.setScaleSize(),this.updateScaleRange(t.datasets),this.scale.buildYLabels()},updateScaleRange:function(t){var i=function(){var i=[];return e.each(t,function(t){t.data?i=i.concat(t.data):e.each(t.points,function(t){i.push(t.value)})}),i}(),s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s)},addData:function(t,i){this.scale.valuesCount++,e.each(t,function(t,e){var s=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(t));this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:s.x,y:s.y,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.labels.push(i),this.reflow(),this.update()},removeData:function(){this.scale.valuesCount--,this.scale.labels.shift(),e.each(this.datasets,function(t){t.points.shift()},this),this.reflow(),this.update()},update:function(){this.eachPoints(function(t){t.save()}),this.reflow(),this.render()},reflow:function(){e.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2}),this.updateScaleRange(this.datasets),this.scale.setScaleSize(),this.scale.buildYLabels()},draw:function(t){var i=t||1,s=this.chart.ctx;this.clear(),this.scale.draw(),e.each(this.datasets,function(t){e.each(t.points,function(t,e){t.hasValue()&&t.transition(this.scale.getPointPosition(e,this.scale.calculateCenterOffset(t.value)),i)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(t.points,function(t,i){0===i?s.moveTo(t.x,t.y):s.lineTo(t.x,t.y)},this),s.closePath(),s.stroke(),s.fillStyle=t.fillColor,s.fill(),e.each(t.points,function(t){t.hasValue()&&t.draw()})},this)}})}.call(this);
/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function($, undefined){

	var $window = $(window);

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		this.dates = new DateArray();
		this.viewDate = UTCToday();
		this.focusDate = null;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today, tfoot th.clear')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView){
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode){
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
				else
					o.multidate = 1;
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return (/^auto|left|right|top|bottom$/).test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return (/^left|right$/).test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return (/^top|bottom$/).test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
			if (this.isInput){ // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')){  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger('show');
		},

		hide: function(){
			if (this.isInline)
				return;
			if (!this.picker.is(':visible'))
				return;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			return new Date(this.dates.get(-1));
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if (!this.isInput){
				if (this.component){
					this.element.find('input').val(formatted).change();
				}
			}
			else {
				this.element.val(formatted).change();
			}
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				windowWidth = $window.width(),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop();

			var parentsZindex = [];
			this.element.parents().each(function() {
				var itemZIndex = $(this).css('z-index');
				if ( itemZIndex !== 'auto' && itemZIndex !== 0 ) parentsZindex.push( parseInt( itemZIndex ) );
			});
			var zIndex = Math.max.apply( Math, parentsZindex ) + 10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left,
				top = offset.top;

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				// Default to left
				this.picker.addClass('datepicker-orient-left');
				if (offset.left < 0)
					left -= offset.left - visualPadding;
				else if (offset.left + calendarWidth > windowWidth)
					left = windowWidth - calendarWidth - visualPadding;
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow, bottom_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + offset.top - calendarHeight;
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
					yorient = 'top';
				else
					yorient = 'bottom';
			}
			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top += height;
			else
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));

			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					date < this.o.startDate ||
					date > this.o.endDate ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12){
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
				cls.push('disabled');
			}
			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				tooltip;
			if (isNaN(year) || isNaN(month)) return;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				tooltip = null;
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			var years = $.map(this.dates, function(d){
					return d.getUTCFullYear();
				}),
				classes;
			for (var i = -1; i < 11; i++){
				classes = ['year'];
				if (i === -1)
					classes.push('old');
				else if (i === 10)
					classes.push('new');
				if ($.inArray(year, years) !== -1)
					classes.push('active');
				if (year < startYear || year > endYear)
					classes.push('disabled');
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			var target = $(e.target).closest('span, td, th'),
				year, month, day;
			if (target.length === 1){
				switch (target[0].nodeName.toLowerCase()){
					case 'th':
						switch (target[0].className){
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
								switch (this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1)
											this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn === 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								var element;
								if (this.isInput)
									element = this.element;
								else if (this.component)
									element = this.element.find('input');
								if (element)
									element.val("").change();
								this.update();
								this._trigger('changeDate');
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')){
							this.viewDate.setUTCDate(1);
							if (target.is('.month')){
								day = 1;
								month = target.parent().find('span').index(target);
								year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1){
									this._setDate(UTCDate(year, month, day));
								}
							}
							else {
								day = 1;
								month = 0;
								year = parseInt(target.text(), 10)||0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2){
									this._setDate(UTCDate(year, month, day));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							day = parseInt(target.text(), 10)||1;
							year = this.viewDate.getUTCFullYear();
							month = this.viewDate.getUTCMonth();
							if (target.is('.old')){
								if (month === 0){
									month = 11;
									year -= 1;
								}
								else {
									month -= 1;
								}
							}
							else if (target.is('.new')){
								if (month === 11){
									month = 0;
									year += 1;
								}
								else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day));
						}
						break;
				}
			}
			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}
			if (this.o.multidate === 1 && ix === 0){
                // single datepicker, don't remove selected date
            }
			else if (ix !== -1){
				this.dates.remove(ix);
			}
			else {
				this.dates.push(date);
			}
			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which  === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput){
				element = this.element;
			}
			else if (this.component){
				element = this.element.find('input');
			}
			if (element){
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveMonth: function(date, dir){
			if (!date)
				return undefined;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode === 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, newDate, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 32: // spacebar
					// Spacebar is used in manually typing dates in some formats.
					// As such, its behavior should not be hijacked.
					break;
				case 13: // enter
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker
				.find('>div')
				.hide()
				.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)
					.css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[i]){
				// Date being moved earlier/left
				while (i >= 0 && new_date < this.dates[i]){
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]){
				// Date being moved later/right
				while (i < l && new_date > this.dates[i]){
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs){
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else {
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				part, dir, i;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();
			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(2000+v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m === p;
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}(window.jQuery));

/*!
 * jQuery Textarea AutoSize plugin
 * Author: Javier Julio
 * Licensed under the MIT license
 */
;(function ($, window, document, undefined) {

  var pluginName = "textareaAutoSize";
  var pluginDataName = "plugin_" + pluginName;

  var containsText = function (value) {
    return (value.replace(/\s/g, '').length > 0);
  };

  function Plugin(element, options) {
    this.element = element;
    this.$element = $(element);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var height = this.$element.outerHeight();
      var diff = parseInt(this.$element.css('paddingBottom')) +
                  parseInt(this.$element.css('paddingTop'));

      if (containsText(this.element.value)) {
        this.$element.height(this.element.scrollHeight - diff);
      }

      // keyup is required for IE to properly reset height when deleting text
      this.$element.on('input keyup', function(event) {
        var $window = $(window);
        var currentScrollPosition = $window.scrollTop();

        $(this)
          .height(0)
          .height(this.scrollHeight - diff);

        $window.scrollTop(currentScrollPosition);
      });
    }
  };

  $.fn[pluginName] = function (options) {
    this.each(function() {
      if (!$.data(this, pluginDataName)) {
        $.data(this, pluginDataName, new Plugin(this, options));
      }
    });
    return this;
  };

})(jQuery, window, document);
/*!
 * FullCalendar v2.2.3
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function(t){"function"==typeof define&&define.amd?define(["jquery","moment"],t):t(jQuery,moment)})(function(t,e){function n(t,e){return e.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"t")}function i(t,e){var n=e.longDateFormat("L");return n=n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g,""),t.isRTL?n+=" ddd":n="ddd "+n,n}function r(t){s(Fe,t)}function s(e){function n(n,i){t.isPlainObject(i)&&t.isPlainObject(e[n])&&!o(n)?e[n]=s({},e[n],i):void 0!==i&&(e[n]=i)}for(var i=1;arguments.length>i;i++)t.each(arguments[i],n);return e}function o(t){return/(Time|Duration)$/.test(t)}function l(n,i){function r(t){var n=e.localeData||e.langData;return n.call(e,t)||n.call(e,"en")}function o(t){ne?u()&&(p(),f(t)):l()}function l(){ie=K.theme?"ui":"fc",n.addClass("fc"),K.isRTL?n.addClass("fc-rtl"):n.addClass("fc-ltr"),K.theme?n.addClass("ui-widget"):n.addClass("fc-unthemed"),ne=t("<div class='fc-view-container'/>").prependTo(n),te=new a(q,K),ee=te.render(),ee&&n.prepend(ee),h(K.defaultView),K.handleWindowResize&&(oe=_(v,K.windowResizeDelay),t(window).resize(oe))}function d(){re&&re.destroy(),te.destroy(),ne.remove(),n.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"),t(window).unbind("resize",oe)}function u(){return n.is(":visible")}function h(t){f(0,t)}function f(e,n){ue++,re&&n&&re.name!==n&&(te.deactivateButton(re.name),B(),re.start&&re.destroy(),re.el.remove(),re=null),!re&&n&&(re=new Ge[n](q),re.el=t("<div class='fc-view fc-"+n+"-view' />").appendTo(ne),te.activateButton(n)),re&&(e&&(le=re.incrementDate(le,e)),re.start&&!e&&le.isWithin(re.intervalStart,re.intervalEnd)||u()&&(B(),re.start&&re.destroy(),re.render(le),I(),C(),H(),b())),I(),ue--}function g(t){return u()?(t&&m(),ue++,re.updateSize(!0),ue--,!0):void 0}function p(){u()&&m()}function m(){se="number"==typeof K.contentHeight?K.contentHeight:"number"==typeof K.height?K.height-(ee?ee.outerHeight(!0):0):Math.round(ne.width()/Math.max(K.aspectRatio,.5))}function v(t){!ue&&t.target===window&&re.start&&g(!0)&&re.trigger("windowResize",de)}function y(){S(),E()}function w(){u()&&(B(),re.destroyEvents(),re.renderEvents(he),I())}function S(){B(),re.destroyEvents(),I()}function b(){!K.lazyFetching||ae(re.start,re.end)?E():w()}function E(){ce(re.start,re.end)}function D(t){he=t,w()}function T(){w()}function C(){te.updateTitle(re.title)}function H(){var t=q.getNow();t.isWithin(re.intervalStart,re.intervalEnd)?te.disableButton("today"):te.enableButton("today")}function x(t,e){t=q.moment(t),e=e?q.moment(e):t.hasTime()?t.clone().add(q.defaultTimedEventDuration):t.clone().add(q.defaultAllDayEventDuration),re.select(t,e)}function M(){re&&re.unselect()}function R(){f(-1)}function P(){f(1)}function F(){le.add(-1,"years"),f()}function z(){le.add(1,"years"),f()}function G(){le=q.getNow(),f()}function N(t){le=q.moment(t),f()}function A(t){le.add(e.duration(t)),f()}function Y(t,e){var n,i;e&&void 0!==Ge[e]||(e=e||"day",n=te.getViewsWithButtons().join(" "),i=n.match(RegExp("\\w+"+L(e))),i||(i=n.match(/\w+Day/)),e=i?i[0]:"agendaDay"),le=t,h(e)}function V(){return le.clone()}function B(){ne.css({width:"100%",height:ne.height(),overflow:"hidden"})}function I(){ne.css({width:"",height:"",overflow:""})}function Z(){return q}function j(){return re}function X(t,e){return void 0===e?K[t]:(("height"==t||"contentHeight"==t||"aspectRatio"==t)&&(K[t]=e,g(!0)),void 0)}function $(t,e){return K[t]?K[t].apply(e||de,Array.prototype.slice.call(arguments,2)):void 0}var q=this;i=i||{};var U,K=s({},Fe,i);U=K.lang in Le?Le[K.lang]:Le[Fe.lang],U&&(K=s({},Fe,U,i)),K.isRTL&&(K=s({},Fe,ze,U||{},i)),q.options=K,q.render=o,q.destroy=d,q.refetchEvents=y,q.reportEvents=D,q.reportEventChange=T,q.rerenderEvents=w,q.changeView=h,q.select=x,q.unselect=M,q.prev=R,q.next=P,q.prevYear=F,q.nextYear=z,q.today=G,q.gotoDate=N,q.incrementDate=A,q.zoomTo=Y,q.getDate=V,q.getCalendar=Z,q.getView=j,q.option=X,q.trigger=$;var Q=k(r(K.lang));if(K.monthNames&&(Q._months=K.monthNames),K.monthNamesShort&&(Q._monthsShort=K.monthNamesShort),K.dayNames&&(Q._weekdays=K.dayNames),K.dayNamesShort&&(Q._weekdaysShort=K.dayNamesShort),null!=K.firstDay){var J=k(Q._week);J.dow=K.firstDay,Q._week=J}q.defaultAllDayEventDuration=e.duration(K.defaultAllDayEventDuration),q.defaultTimedEventDuration=e.duration(K.defaultTimedEventDuration),q.moment=function(){var t;return"local"===K.timezone?(t=_e.moment.apply(null,arguments),t.hasTime()&&t.local()):t="UTC"===K.timezone?_e.moment.utc.apply(null,arguments):_e.moment.parseZone.apply(null,arguments),"_locale"in t?t._locale=Q:t._lang=Q,t},q.getIsAmbigTimezone=function(){return"local"!==K.timezone&&"UTC"!==K.timezone},q.rezoneDate=function(t){return q.moment(t.toArray())},q.getNow=function(){var t=K.now;return"function"==typeof t&&(t=t()),q.moment(t)},q.calculateWeekNumber=function(t){var e=K.weekNumberCalculation;return"function"==typeof e?e(t):"local"===e?t.week():"ISO"===e.toUpperCase()?t.isoWeek():void 0},q.getEventEnd=function(t){return t.end?t.end.clone():q.getDefaultEventEnd(t.allDay,t.start)},q.getDefaultEventEnd=function(t,e){var n=e.clone();return t?n.stripTime().add(q.defaultAllDayEventDuration):n.add(q.defaultTimedEventDuration),q.getIsAmbigTimezone()&&n.stripZone(),n},q.formatRange=function(t,e,n){return"function"==typeof n&&(n=n.call(q,K,Q)),W(t,e,n,null,K.isRTL)},q.formatDate=function(t,e){return"function"==typeof e&&(e=e.call(q,K,Q)),O(t,e)},c.call(q,K);var te,ee,ne,ie,re,se,oe,le,ae=q.isFetchNeeded,ce=q.fetchEvents,de=n[0],ue=0,he=[];le=null!=K.defaultDate?q.moment(K.defaultDate):q.getNow(),q.getSuggestedViewHeight=function(){return void 0===se&&p(),se},q.isHeightAuto=function(){return"auto"===K.contentHeight||"auto"===K.height}}function a(e,n){function i(){var e=n.header;return f=n.theme?"ui":"fc",e?g=t("<div class='fc-toolbar'/>").append(s("left")).append(s("right")).append(s("center")).append('<div class="fc-clear"/>'):void 0}function r(){g.remove()}function s(i){var r=t('<div class="fc-'+i+'"/>'),s=n.header[i];return s&&t.each(s.split(" "),function(){var i,s=t(),o=!0;t.each(this.split(","),function(i,r){var l,a,c,d,u,h,g,m;"title"==r?(s=s.add(t("<h2>&nbsp;</h2>")),o=!1):(e[r]?l=function(){e[r]()}:Ge[r]&&(l=function(){e.changeView(r)},p.push(r)),l&&(a=T(n.themeButtonIcons,r),c=T(n.buttonIcons,r),d=T(n.defaultButtonText,r),u=T(n.buttonText,r),h=u?P(u):a&&n.theme?"<span class='ui-icon ui-icon-"+a+"'></span>":c&&!n.theme?"<span class='fc-icon fc-icon-"+c+"'></span>":P(d||r),g=["fc-"+r+"-button",f+"-button",f+"-state-default"],m=t('<button type="button" class="'+g.join(" ")+'">'+h+"</button>").click(function(){m.hasClass(f+"-state-disabled")||(l(),(m.hasClass(f+"-state-active")||m.hasClass(f+"-state-disabled"))&&m.removeClass(f+"-state-hover"))}).mousedown(function(){m.not("."+f+"-state-active").not("."+f+"-state-disabled").addClass(f+"-state-down")}).mouseup(function(){m.removeClass(f+"-state-down")}).hover(function(){m.not("."+f+"-state-active").not("."+f+"-state-disabled").addClass(f+"-state-hover")},function(){m.removeClass(f+"-state-hover").removeClass(f+"-state-down")}),s=s.add(m)))}),o&&s.first().addClass(f+"-corner-left").end().last().addClass(f+"-corner-right").end(),s.length>1?(i=t("<div/>"),o&&i.addClass("fc-button-group"),i.append(s),r.append(i)):r.append(s)}),r}function o(t){g.find("h2").text(t)}function l(t){g.find(".fc-"+t+"-button").addClass(f+"-state-active")}function a(t){g.find(".fc-"+t+"-button").removeClass(f+"-state-active")}function c(t){g.find(".fc-"+t+"-button").attr("disabled","disabled").addClass(f+"-state-disabled")}function d(t){g.find(".fc-"+t+"-button").removeAttr("disabled").removeClass(f+"-state-disabled")}function u(){return p}var h=this;h.render=i,h.destroy=r,h.updateTitle=o,h.activateButton=l,h.deactivateButton=a,h.disableButton=c,h.enableButton=d,h.getViewsWithButtons=u;var f,g=t(),p=[]}function c(n){function i(t,e){return!A||t.clone().stripZone()<A.clone().stripZone()||e.clone().stripZone()>Y.clone().stripZone()}function r(t,e){A=t,Y=e,q=[];var n=++j,i=Z.length;X=i;for(var r=0;i>r;r++)s(Z[r],n)}function s(e,n){o(e,function(i){var r,s,o,l=t.isArray(e.events);if(n==j){if(i)for(r=0;i.length>r;r++)s=i[r],o=l?s:S(s,e),o&&q.push.apply(q,E(o));X--,X||B(q)}})}function o(e,i){var r,s,l=_e.sourceFetchers;for(r=0;l.length>r;r++){if(s=l[r].call(N,e,A.clone(),Y.clone(),n.timezone,i),s===!0)return;if("object"==typeof s)return o(s,i),void 0}var a=e.events;if(a)t.isFunction(a)?(y(),a.call(N,A.clone(),Y.clone(),n.timezone,function(t){i(t),w()})):t.isArray(a)?i(a):i();else{var c=e.url;if(c){var d,u=e.success,h=e.error,f=e.complete;d=t.isFunction(e.data)?e.data():e.data;var g=t.extend({},d||{}),p=R(e.startParam,n.startParam),m=R(e.endParam,n.endParam),v=R(e.timezoneParam,n.timezoneParam);p&&(g[p]=A.format()),m&&(g[m]=Y.format()),n.timezone&&"local"!=n.timezone&&(g[v]=n.timezone),y(),t.ajax(t.extend({},Ne,e,{data:g,success:function(e){e=e||[];var n=M(u,this,arguments);t.isArray(n)&&(e=n),i(e)},error:function(){M(h,this,arguments),i()},complete:function(){M(f,this,arguments),w()}}))}else i()}}function l(t){var e=a(t);e&&(Z.push(e),X++,s(e,j))}function a(e){var n,i,r=_e.sourceNormalizers;if(t.isFunction(e)||t.isArray(e)?n={events:e}:"string"==typeof e?n={url:e}:"object"==typeof e&&(n=t.extend({},e)),n){for(n.className?"string"==typeof n.className&&(n.className=n.className.split(/\s+/)):n.className=[],t.isArray(n.events)&&(n.origArray=n.events,n.events=t.map(n.events,function(t){return S(t,n)})),i=0;r.length>i;i++)r[i].call(N,n);return n}}function c(e){Z=t.grep(Z,function(t){return!u(t,e)}),q=t.grep(q,function(t){return!u(t.source,e)}),B(q)}function u(t,e){return t&&e&&h(t)==h(e)}function h(t){return("object"==typeof t?t.origArray||t.googleCalendarId||t.url||t.events:null)||t}function f(t){t.start=N.moment(t.start),t.end&&(t.end=N.moment(t.end)),D(t),g(t),B(q)}function g(t){var e,n,i,r;for(e=0;q.length>e;e++)if(n=q[e],n._id==t._id&&n!==t)for(i=0;U.length>i;i++)r=U[i],void 0!==t[r]&&(n[r]=t[r])}function p(t,e){var n,i,r,s=S(t);if(s){for(n=E(s),i=0;n.length>i;i++)r=n[i],r.source||(e&&(W.events.push(r),r.source=W),q.push(r));return B(q),n}return[]}function m(e){var n,i;for(null==e?e=function(){return!0}:t.isFunction(e)||(n=e+"",e=function(t){return t._id==n}),q=t.grep(q,e,!0),i=0;Z.length>i;i++)t.isArray(Z[i].events)&&(Z[i].events=t.grep(Z[i].events,e,!0));B(q)}function v(e){return t.isFunction(e)?t.grep(q,e):null!=e?(e+="",t.grep(q,function(t){return t._id==e})):q}function y(){$++||V("loading",null,!0,O())}function w(){--$||V("loading",null,!1,O())}function S(i,r){var s,o,l,a,c={};if(n.eventDataTransform&&(i=n.eventDataTransform(i)),r&&r.eventDataTransform&&(i=r.eventDataTransform(i)),t.extend(c,i),r&&(c.source=r),c._id=i._id||(void 0===i.id?"_fc"+Ae++:i.id+""),c.className=i.className?"string"==typeof i.className?i.className.split(/\s+/):i.className:[],s=i.start||i.date,o=i.end,x(s)&&(s=e.duration(s)),x(o)&&(o=e.duration(o)),i.dow||e.isDuration(s)||e.isDuration(o))c.start=s?e.duration(s):null,c.end=o?e.duration(o):null,c._recurring=!0;else{if(s&&(s=N.moment(s),!s.isValid()))return!1;o&&(o=N.moment(o),o.isValid()||(o=null)),l=i.allDay,void 0===l&&(a=R(r?r.allDayDefault:void 0,n.allDayDefault),l=void 0!==a?a:!(s.hasTime()||o&&o.hasTime())),b(s,o,l,c)}return c}function b(t,e,i,r){i?(t.hasTime()&&t.stripTime(),e&&e.hasTime()&&e.stripTime()):(t.hasTime()||(t=N.rezoneDate(t)),e&&!e.hasTime()&&(e=N.rezoneDate(e))),e&&t>=e&&(e=null),r.allDay=i,r.start=t,r.end=e||null,n.forceEventDuration&&!r.end&&(r.end=I(r)),d(r)}function E(e,n,i){var r,s,o,l,a,c,d,u,h,f=[];if(n=n||A,i=i||Y,e)if(e._recurring){if(s=e.dow)for(r={},o=0;s.length>o;o++)r[s[o]]=!0;for(l=n.clone().stripTime();l.isBefore(i);)(!r||r[l.day()])&&(a=e.start,c=e.end,d=l.clone(),u=null,a&&(d=d.time(a)),c&&(u=l.clone().time(c)),h=t.extend({},e),b(d,u,!a&&!c,h),f.push(h)),l.add(1,"days")}else f.push(e);return f}function D(t,e,n){var i,r,s,o,l=t._allDay,a=t._start,c=t._end,d=!1;return e||n||(e=t.start,n=t.end),i=t.allDay!=l?t.allDay:!(e||n).hasTime(),i&&(e&&(e=e.clone().stripTime()),n&&(n=n.clone().stripTime())),e&&(r=i?C(e,a.clone().stripTime()):C(e,a)),i!=l?d=!0:n&&(s=C(n||N.getDefaultEventEnd(i,e||a),e||a).subtract(C(c||N.getDefaultEventEnd(l,a),a))),o=T(v(t._id),d,i,r,s),{dateDelta:r,durationDelta:s,undo:o}}function T(e,i,r,s,o){var l=N.getIsAmbigTimezone(),a=[];return t.each(e,function(t,e){var c=e._allDay,u=e._start,h=e._end,f=null!=r?r:c,g=u.clone(),p=!i&&h?h.clone():null;f?(g.stripTime(),p&&p.stripTime()):(g.hasTime()||(g=N.rezoneDate(g)),p&&!p.hasTime()&&(p=N.rezoneDate(p))),p||!n.forceEventDuration&&!+o||(p=N.getDefaultEventEnd(f,g)),g.add(s),p&&p.add(s).add(o),l&&(+s||+o)&&(g.stripZone(),p&&p.stripZone()),e.allDay=f,e.start=g,e.end=p,d(e),a.push(function(){e.allDay=c,e.start=u,e.end=h,d(e)})}),function(){for(var t=0;a.length>t;t++)a[t]()}}function H(){var e,i=n.businessHours,r={className:"fc-nonbusiness",start:"09:00",end:"17:00",dow:[1,2,3,4,5],rendering:"inverse-background"},s=N.getView();return i&&(e="object"==typeof i?t.extend({},r,i):r),e?E(S(e),s.start,s.end):[]}function k(t,e,i){var r=t.source||{},s=R(t.constraint,r.constraint,n.eventConstraint),o=R(t.overlap,r.overlap,n.eventOverlap);return L(e,i,s,o,t)}function P(t,e){return L(t,e,n.selectConstraint,n.selectOverlap)}function F(t,e,n){var i;return n&&(i=E(S(n))[0])?k(i,t,e):P(t,e)}function L(t,e,n,i,r){var s,o,l,a,c;if(t=t.clone().stripZone(),e=e.clone().stripZone(),null!=n){for(s=z(n),o=!1,l=0;s.length>l;l++)if(_(s[l],t,e)){o=!0;break}if(!o)return!1}for(l=0;q.length>l;l++)if(a=q[l],(!r||r._id!==a._id)&&G(a,t,e)){if(i===!1)return!1;if("function"==typeof i&&!i(a,r))return!1;if(r){if(c=R(a.overlap,(a.source||{}).overlap),c===!1)return!1;if("function"==typeof c&&!c(r,a))return!1}}return!0}function z(t){return"businessHours"===t?H():"object"==typeof t?E(S(t)):v(t)}function _(t,e,n){var i=t.start.clone().stripZone(),r=N.getEventEnd(t).stripZone();return e>=i&&r>=n}function G(t,e,n){var i=t.start.clone().stripZone(),r=N.getEventEnd(t).stripZone();return r>e&&n>i}var N=this;N.isFetchNeeded=i,N.fetchEvents=r,N.addEventSource=l,N.removeEventSource=c,N.updateEvent=f,N.renderEvent=p,N.removeEvents=m,N.clientEvents=v,N.mutateEvent=D;var A,Y,V=N.trigger,O=N.getView,B=N.reportEvents,I=N.getEventEnd,W={events:[]},Z=[W],j=0,X=0,$=0,q=[];t.each((n.events?[n.events]:[]).concat(n.eventSources||[]),function(t,e){var n=a(e);n&&Z.push(n)});var U=["title","url","allDay","className","editable","color","backgroundColor","borderColor","textColor"];N.getBusinessHoursEvents=H,N.isEventAllowedInRange=k,N.isSelectionAllowedInRange=P,N.isExternalDragAllowedInRange=F}function d(t){t._allDay=t.allDay,t._start=t.start.clone(),t._end=t.end?t.end.clone():null}function u(t,e){e.left&&t.css({"border-left-width":1,"margin-left":e.left-1}),e.right&&t.css({"border-right-width":1,"margin-right":e.right-1})}function h(t){t.css({"margin-left":"","margin-right":"","border-left-width":"","border-right-width":""})}function f(){t("body").addClass("fc-not-allowed")}function g(){t("body").removeClass("fc-not-allowed")}function p(e,n,i){var r=Math.floor(n/e.length),s=Math.floor(n-r*(e.length-1)),o=[],l=[],a=[],c=0;m(e),e.each(function(n,i){var d=n===e.length-1?s:r,u=t(i).outerHeight(!0);d>u?(o.push(i),l.push(u),a.push(t(i).height())):c+=u}),i&&(n-=c,r=Math.floor(n/o.length),s=Math.floor(n-r*(o.length-1))),t(o).each(function(e,n){var i=e===o.length-1?s:r,c=l[e],d=a[e],u=i-(c-d);i>c&&t(n).height(u)})}function m(t){t.height("")}function v(e){var n=0;return e.find("> *").each(function(e,i){var r=t(i).outerWidth();r>n&&(n=r)}),n++,e.width(n),n}function y(t,e){return t.height(e).addClass("fc-scroller"),t[0].scrollHeight-1>t[0].clientHeight?!0:(w(t),!1)}function w(t){t.height("").removeClass("fc-scroller")}function S(e){var n=e.css("position"),i=e.parents().filter(function(){var e=t(this);return/(auto|scroll)/.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==n&&i.length?i:t(e[0].ownerDocument||document)}function b(t){var e=t.offset().left,n=e+t.width(),i=t.children(),r=i.offset().left,s=r+i.outerWidth();return{left:r-e,right:n-s}}function E(t){return 1==t.which&&!t.ctrlKey}function D(t,e,n,i){var r,s,o,l;return e>n&&i>t?(t>=n?(r=t.clone(),o=!0):(r=n.clone(),o=!1),i>=e?(s=e.clone(),l=!0):(s=i.clone(),l=!1),{start:r,end:s,isStart:o,isEnd:l}):void 0}function T(t,e){if(t=t||{},void 0!==t[e])return t[e];for(var n,i=e.split(/(?=[A-Z])/),r=i.length-1;r>=0;r--)if(n=t[i[r].toLowerCase()],void 0!==n)return n;return t["default"]}function C(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days"),ms:t.time()-n.time()})}function H(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function x(t){return/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)}function k(t){var e=function(){};return e.prototype=t,new e}function M(e,n,i){if(t.isFunction(e)&&(e=[e]),e){var r,s;for(r=0;e.length>r;r++)s=e[r].apply(n,i)||s;return s}}function R(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t]}function P(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function F(t){return t.replace(/&.*?;/g,"")}function L(t){return t.charAt(0).toUpperCase()+t.slice(1)}function z(t,e){return t-e}function _(t,e){var n,i,r,s,o=function(){var l=+new Date-s;e>l&&l>0?n=setTimeout(o,e-l):(n=null,t.apply(r,i),n||(r=i=null))};return function(){r=this,i=arguments,s=+new Date,n||(n=setTimeout(o,e))}}function G(n,i,r){var s,o,l,a,c=n[0],d=1==n.length&&"string"==typeof c;return e.isMoment(c)?(a=e.apply(null,n),A(c,a)):H(c)||void 0===c?a=e.apply(null,n):(s=!1,o=!1,d?Ie.test(c)?(c+="-01",n=[c],s=!0,o=!0):(l=We.exec(c))&&(s=!l[5],o=!0):t.isArray(c)&&(o=!0),a=i?e.utc.apply(e,n):e.apply(null,n),s?(a._ambigTime=!0,a._ambigZone=!0):r&&(o?a._ambigZone=!0:d&&a.zone(c))),a._fullCalendar=!0,a}function N(t,e){var n,i=[],r=!1,s=!1;for(n=0;t.length>n;n++)i.push(_e.moment.parseZone(t[n])),r=r||i[n]._ambigTime,s=s||i[n]._ambigZone;for(n=0;i.length>n;n++)r&&!e?i[n].stripTime():s&&i[n].stripZone();return i}function A(t,e){t._ambigTime?e._ambigTime=!0:e._ambigTime&&(e._ambigTime=!1),t._ambigZone?e._ambigZone=!0:e._ambigZone&&(e._ambigZone=!1)}function Y(t,e){t.year(e[0]||0).month(e[1]||0).date(e[2]||0).hours(e[3]||0).minutes(e[4]||0).seconds(e[5]||0).milliseconds(e[6]||0)}function V(t,e){return je.format.call(t,e)}function O(t,e){return B(t,X(e))}function B(t,e){var n,i="";for(n=0;e.length>n;n++)i+=I(t,e[n]);return i}function I(t,e){var n,i;return"string"==typeof e?e:(n=e.token)?Xe[n]?Xe[n](t):V(t,n):e.maybe&&(i=B(t,e.maybe),i.match(/[1-9]/))?i:""}function W(t,e,n,i,r){var s;return t=_e.moment.parseZone(t),e=_e.moment.parseZone(e),s=(t.localeData||t.lang).call(t),n=s.longDateFormat(n)||n,i=i||" - ",Z(t,e,X(n),i,r)}function Z(t,e,n,i,r){var s,o,l,a,c="",d="",u="",h="",f="";for(o=0;n.length>o&&(s=j(t,e,n[o]),s!==!1);o++)c+=s;for(l=n.length-1;l>o&&(s=j(t,e,n[l]),s!==!1);l--)d=s+d;for(a=o;l>=a;a++)u+=I(t,n[a]),h+=I(e,n[a]);return(u||h)&&(f=r?h+i+u:u+i+h),c+f+d}function j(t,e,n){var i,r;return"string"==typeof n?n:(i=n.token)&&(r=$e[i.charAt(0)],r&&t.isSame(e,r))?V(t,i):!1}function X(t){return t in qe?qe[t]:qe[t]=$(t)}function $(t){for(var e,n=[],i=/\[([^\]]*)\]|\(([^\)]*)\)|(LT|(\w)\4*o?)|([^\w\[\(]+)/g;e=i.exec(t);)e[1]?n.push(e[1]):e[2]?n.push({maybe:$(e[2])}):e[3]?n.push({token:e[3]}):e[5]&&n.push(e[5]);return n}function q(t){this.options=t||{}}function U(t){this.grid=t}function K(t){this.coordMaps=t}function Q(t,e){this.coordMap=t,this.options=e||{}}function J(t,e){return t||e?t&&e?t.grid===e.grid&&t.row===e.row&&t.col===e.col:!1:!0}function te(e,n){this.options=n=n||{},this.sourceEl=e,this.parentEl=n.parentEl?t(n.parentEl):e.parent()}function ee(t){this.view=t}function ne(t){ee.call(this,t),this.coordMap=new U(this),this.elsByFill={}}function ie(t){var e=se(t);return"background"===e||"inverse-background"===e}function re(t){return"inverse-background"===se(t)}function se(t){return R((t.source||{}).rendering,t.rendering)}function oe(t){var e,n,i={};for(e=0;t.length>e;e++)n=t[e],(i[n._id]||(i[n._id]=[])).push(n);return i}function le(t,e){return t.eventStartMS-e.eventStartMS}function ae(t,e){return t.eventStartMS-e.eventStartMS||e.eventDurationMS-t.eventDurationMS||e.event.allDay-t.event.allDay||(t.event.title||"").localeCompare(e.event.title)}function ce(t){ne.call(this,t)}function de(t,e){var n,i;for(n=0;e.length>n;n++)if(i=e[n],i.leftCol<=t.rightCol&&i.rightCol>=t.leftCol)return!0;return!1}function ue(t,e){return t.leftCol-e.leftCol}function he(t){ne.call(this,t)}function fe(t){var e,n,i;if(t.sort(ae),e=ge(t),pe(e),n=e[0]){for(i=0;n.length>i;i++)me(n[i]);for(i=0;n.length>i;i++)ve(n[i],0,0)}}function ge(t){var e,n,i,r=[];for(e=0;t.length>e;e++){for(n=t[e],i=0;r.length>i&&ye(n,r[i]).length;i++);n.level=i,(r[i]||(r[i]=[])).push(n)}return r}function pe(t){var e,n,i,r,s;for(e=0;t.length>e;e++)for(n=t[e],i=0;n.length>i;i++)for(r=n[i],r.forwardSegs=[],s=e+1;t.length>s;s++)ye(r,t[s],r.forwardSegs)}function me(t){var e,n,i=t.forwardSegs,r=0;if(void 0===t.forwardPressure){for(e=0;i.length>e;e++)n=i[e],me(n),r=Math.max(r,1+n.forwardPressure);t.forwardPressure=r}}function ve(t,e,n){var i,r=t.forwardSegs;if(void 0===t.forwardCoord)for(r.length?(r.sort(Se),ve(r[0],e+1,n),t.forwardCoord=r[0].backwardCoord):t.forwardCoord=1,t.backwardCoord=t.forwardCoord-(t.forwardCoord-n)/(e+1),i=0;r.length>i;i++)ve(r[i],0,t.forwardCoord)}function ye(t,e,n){n=n||[];for(var i=0;e.length>i;i++)we(t,e[i])&&n.push(e[i]);return n}function we(t,e){return t.bottom>e.top&&t.top<e.bottom}function Se(t,e){return e.forwardPressure-t.forwardPressure||(t.backwardCoord||0)-(e.backwardCoord||0)||ae(t,e)}function be(n){function i(e){var n=x[e];return t.isPlainObject(n)&&!o(e)?T(n,C.name):n}function r(t,e){return n.trigger.apply(n,[t,e||C].concat(Array.prototype.slice.call(arguments,2),[C]))}function s(t){var e=t.source||{};return R(t.startEditable,e.startEditable,i("eventStartEditable"),t.editable,e.editable,i("editable"))}function l(t){var e=t.source||{};return R(t.durationEditable,e.durationEditable,i("eventDurationEditable"),t.editable,e.editable,i("editable"))}function a(t,e,i,s){var o=n.mutateEvent(e,i,null);r("eventDrop",t,e,o.dateDelta,function(){o.undo(),H()},s,{}),H()}function c(t,e,i,s){var o=n.mutateEvent(e,null,i);r("eventResize",t,e,o.durationDelta,function(){o.undo(),H()},s,{}),H()}function d(t){return e.isMoment(t)&&(t=t.day()),F[t]}function u(){return M}function h(t,e,n){var i=t.clone();for(e=e||1;F[(i.day()+(n?e:0)+7)%7];)i.add(e,"days");return i}function f(){var t=g.apply(null,arguments),e=p(t),n=m(e);return n}function g(t,e){var n=C.colCnt,i=G?-1:1,r=G?n-1:0;"object"==typeof t&&(e=t.col,t=t.row);var s=t*n+(e*i+r);return s}function p(t){var e=C.start.day();return t+=L[e],7*Math.floor(t/M)+_[(t%M+M)%M]-e}function m(t){return C.start.clone().add(t,"days")}function v(t){var e=y(t),n=w(e),i=S(n);return i}function y(t){return t.clone().stripTime().diff(C.start,"days")}function w(t){var e=C.start.day();return t+=e,Math.floor(t/7)*M+L[(t%7+7)%7]-L[e]}function S(t){var e=C.colCnt,n=G?-1:1,i=G?e-1:0,r=Math.floor(t/e),s=(t%e+e)%e*n+i;return{row:r,col:s}}function b(t,e){for(var n=C.rowCnt,i=C.colCnt,r=[],s=E(t,e),o=y(s.start),l=y(s.end),a=w(o),c=w(l)-1,d=0;n>d;d++){var u=d*i,h=u+i-1,f=Math.max(a,u),g=Math.min(c,h);if(g>=f){var m=S(f),v=S(g),b=[m.col,v.col].sort(z),D=p(f)==o,T=p(g)+1==l;r.push({row:d,leftCol:b[0],rightCol:b[1],isStart:D,isEnd:T})}}return r}function E(t,e){var n,i,r=t.clone().stripTime();return e&&(n=e.clone().stripTime(),i=+e.time(),i&&i>=k&&n.add(1,"days")),(!e||r>=n)&&(n=r.clone().add(1,"days")),{start:r,end:n}}function D(t){var e=E(t.start,t.end);return e.end.diff(e.start,"days")>1}var C=this;C.calendar=n,C.opt=i,C.trigger=r,C.isEventDraggable=s,C.isEventResizable=l,C.eventDrop=a,C.eventResize=c;var H=n.reportEventChange,x=n.options,k=e.duration(x.nextDayThreshold);C.init(),C.getEventTimeText=function(t,e){var r,s;return"object"==typeof t&&"object"==typeof e?(r=t,s=e,e=arguments[2]):(r=t.start,s=t.end),e=e||i("timeFormat"),s&&i("displayEventEnd")?n.formatRange(r,s,e):n.formatDate(r,e)},C.isHiddenDay=d,C.skipHiddenDays=h,C.getCellsPerWeek=u,C.dateToCell=v,C.dateToDayOffset=y,C.dayOffsetToCellOffset=w,C.cellOffsetToCell=S,C.cellToDate=f,C.cellToCellOffset=g,C.cellOffsetToDayOffset=p,C.dayOffsetToDate=m,C.rangeToSegments=b,C.isMultiDayEvent=D;var M,P=i("hiddenDays")||[],F=[],L=[],_=[],G=i("isRTL");(function(){i("weekends")===!1&&P.push(0,6);for(var e=0,n=0;7>e;e++)L[e]=n,F[e]=-1!=t.inArray(e,P),F[e]||(_[n]=e,n++);if(M=n,!M)throw"invalid hiddenDays"})()}function Ee(n){var i,r,s,o,l=_e.dataAttrPrefix;return l&&(l+="-"),i=n.data(l+"event")||null,i&&(i="object"==typeof i?t.extend({},i):{},r=i.start,null==r&&(r=i.time),s=i.duration,o=i.stick,delete i.start,delete i.time,delete i.duration,delete i.stick),null==r&&(r=n.data(l+"start")),null==r&&(r=n.data(l+"time")),null==s&&(s=n.data(l+"duration")),null==o&&(o=n.data(l+"stick")),r=null!=r?e.duration(r):null,s=null!=s?e.duration(s):null,o=Boolean(o),{eventProps:i,startTime:r,duration:s,stick:o}}function De(t){be.call(this,t),this.dayGrid=new ce(this),this.coordMap=this.dayGrid.coordMap}function Te(t){De.call(this,t)}function Ce(t){De.call(this,t)}function He(t){De.call(this,t)}function xe(t,e){return e.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"a")}function ke(t,e){return e.longDateFormat("LT").replace(/\s*a$/i,"")}function Me(t){be.call(this,t),this.timeGrid=new he(this),this.opt("allDaySlot")?(this.dayGrid=new ce(this),this.coordMap=new K([this.dayGrid.coordMap,this.timeGrid.coordMap])):this.coordMap=this.timeGrid.coordMap}function Re(t){Me.call(this,t)}function Pe(t){Me.call(this,t)}var Fe={lang:"en",defaultTimedEventDuration:"02:00:00",defaultAllDayEventDuration:{days:1},forceEventDuration:!1,nextDayThreshold:"09:00:00",defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberTitle:"W",weekNumberCalculation:"local",lazyFetching:!0,startParam:"start",endParam:"end",timezoneParam:"timezone",timezone:!1,titleFormat:{month:"MMMM YYYY",week:"ll",day:"LL"},columnFormat:{month:"ddd",week:i,day:"dddd"},timeFormat:{"default":n},displayEventEnd:{month:!1,basicWeek:!1,"default":!0},isRTL:!1,defaultButtonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",today:"today",month:"month",week:"week",day:"day"},buttonIcons:{prev:"left-single-arrow",next:"right-single-arrow",prevYear:"left-double-arrow",nextYear:"right-double-arrow"},theme:!1,themeButtonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e",prevYear:"seek-prev",nextYear:"seek-next"},dragOpacity:.75,dragRevertDuration:500,dragScroll:!0,unselectAuto:!0,dropAccept:"*",eventLimit:!1,eventLimitText:"more",eventLimitClick:"popover",dayPopoverFormat:"LL",handleWindowResize:!0,windowResizeDelay:200},Le={en:{columnFormat:{week:"ddd M/D"},dayPopoverFormat:"dddd, MMMM D"}},ze={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}},_e=t.fullCalendar={version:"2.2.3"},Ge=_e.views={};t.fn.fullCalendar=function(e){var n=Array.prototype.slice.call(arguments,1),i=this;return this.each(function(r,s){var o,a=t(s),c=a.data("fullCalendar");"string"==typeof e?c&&t.isFunction(c[e])&&(o=c[e].apply(c,n),r||(i=o),"destroy"===e&&a.removeData("fullCalendar")):c||(c=new l(a,e),a.data("fullCalendar",c),c.render())}),i},_e.langs=Le,_e.datepickerLang=function(e,n,i){var r=Le[e];r||(r=Le[e]={}),s(r,{isRTL:i.isRTL,weekNumberTitle:i.weekHeader,titleFormat:{month:i.showMonthAfterYear?"YYYY["+i.yearSuffix+"] MMMM":"MMMM YYYY["+i.yearSuffix+"]"},defaultButtonText:{prev:F(i.prevText),next:F(i.nextText),today:F(i.currentText)}}),t.datepicker&&(t.datepicker.regional[n]=t.datepicker.regional[e]=i,t.datepicker.regional.en=t.datepicker.regional[""],t.datepicker.setDefaults(i))},_e.lang=function(t,e){var n;e&&(n=Le[t],n||(n=Le[t]={}),s(n,e||{})),Fe.lang=t},_e.sourceNormalizers=[],_e.sourceFetchers=[];var Ne={dataType:"json",cache:!1},Ae=1,Ye=["sun","mon","tue","wed","thu","fri","sat"];_e.applyAll=M;var Ve,Oe,Be,Ie=/^\s*\d{4}-\d\d$/,We=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,Ze=e.fn,je=t.extend({},Ze);_e.moment=function(){return G(arguments)},_e.moment.utc=function(){var t=G(arguments,!0);return t.hasTime()&&t.utc(),t},_e.moment.parseZone=function(){return G(arguments,!0,!0)},Ze.clone=function(){var t=je.clone.apply(this,arguments);return A(this,t),this._fullCalendar&&(t._fullCalendar=!0),t},Ze.time=function(t){if(!this._fullCalendar)return je.time.apply(this,arguments);if(null==t)return e.duration({hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()});this._ambigTime=!1,e.isDuration(t)||e.isMoment(t)||(t=e.duration(t));var n=0;return e.isDuration(t)&&(n=24*Math.floor(t.asDays())),this.hours(n+t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())},Ze.stripTime=function(){var t=this.toArray();return this.utc(),Oe(this,t.slice(0,3)),this._ambigTime=!0,this._ambigZone=!0,this},Ze.hasTime=function(){return!this._ambigTime},Ze.stripZone=function(){var t=this.toArray(),e=this._ambigTime;return this.utc(),Oe(this,t),e&&(this._ambigTime=!0),this._ambigZone=!0,this},Ze.hasZone=function(){return!this._ambigZone},Ze.zone=function(t){return null!=t&&(this._ambigTime=!1,this._ambigZone=!1),je.zone.apply(this,arguments)},Ze.local=function(){var t=this.toArray(),e=this._ambigZone;return je.local.apply(this,arguments),e&&Be(this,t),this},Ze.format=function(){return this._fullCalendar&&arguments[0]?O(this,arguments[0]):this._ambigTime?V(this,"YYYY-MM-DD"):this._ambigZone?V(this,"YYYY-MM-DD[T]HH:mm:ss"):je.format.apply(this,arguments)},Ze.toISOString=function(){return this._ambigTime?V(this,"YYYY-MM-DD"):this._ambigZone?V(this,"YYYY-MM-DD[T]HH:mm:ss"):je.toISOString.apply(this,arguments)},Ze.isWithin=function(t,e){var n=N([this,t,e]);return n[0]>=n[1]&&n[0]<n[2]},Ze.isSame=function(t,e){var n;return this._fullCalendar?e?(n=N([this,t],!0),je.isSame.call(n[0],n[1],e)):(t=_e.moment.parseZone(t),je.isSame.call(this,t)&&Boolean(this._ambigTime)===Boolean(t._ambigTime)&&Boolean(this._ambigZone)===Boolean(t._ambigZone)):je.isSame.apply(this,arguments)},t.each(["isBefore","isAfter"],function(t,e){Ze[e]=function(t,n){var i;return this._fullCalendar?(i=N([this,t]),je[e].call(i[0],i[1],n)):je[e].apply(this,arguments)}}),Ve="_d"in e()&&"updateOffset"in e,Oe=Ve?function(t,n){t._d.setTime(Date.UTC.apply(Date,n)),e.updateOffset(t,!1)}:Y,Be=Ve?function(t,n){t._d.setTime(+new Date(n[0]||0,n[1]||0,n[2]||0,n[3]||0,n[4]||0,n[5]||0,n[6]||0)),e.updateOffset(t,!1)}:Y;var Xe={t:function(t){return V(t,"a").charAt(0)},T:function(t){return V(t,"A").charAt(0)}};_e.formatRange=W;var $e={Y:"year",M:"month",D:"day",d:"day",A:"second",a:"second",T:"second",t:"second",H:"second",h:"second",m:"second",s:"second"},qe={};q.prototype={isHidden:!0,options:null,el:null,documentMousedownProxy:null,margin:10,show:function(){this.isHidden&&(this.el||this.render(),this.el.show(),this.position(),this.isHidden=!1,this.trigger("show"))},hide:function(){this.isHidden||(this.el.hide(),this.isHidden=!0,this.trigger("hide"))},render:function(){var e=this,n=this.options;this.el=t('<div class="fc-popover"/>').addClass(n.className||"").css({top:0,left:0}).append(n.content).appendTo(n.parentEl),this.el.on("click",".fc-close",function(){e.hide()}),n.autoHide&&t(document).on("mousedown",this.documentMousedownProxy=t.proxy(this,"documentMousedown"))},documentMousedown:function(e){this.el&&!t(e.target).closest(this.el).length&&this.hide()},destroy:function(){this.hide(),this.el&&(this.el.remove(),this.el=null),t(document).off("mousedown",this.documentMousedownProxy)
},position:function(){var e,n,i,r,s,o=this.options,l=this.el.offsetParent().offset(),a=this.el.outerWidth(),c=this.el.outerHeight(),d=t(window),u=S(this.el);r=o.top||0,s=void 0!==o.left?o.left:void 0!==o.right?o.right-a:0,u.is(window)||u.is(document)?(u=d,e=0,n=0):(i=u.offset(),e=i.top,n=i.left),e+=d.scrollTop(),n+=d.scrollLeft(),o.viewportConstrain!==!1&&(r=Math.min(r,e+u.outerHeight()-c-this.margin),r=Math.max(r,e+this.margin),s=Math.min(s,n+u.outerWidth()-a-this.margin),s=Math.max(s,n+this.margin)),this.el.css({top:r-l.top,left:s-l.left})},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1))}},U.prototype={grid:null,rows:null,cols:null,containerEl:null,minX:null,maxX:null,minY:null,maxY:null,build:function(){this.grid.buildCoords(this.rows=[],this.cols=[]),this.computeBounds()},getCell:function(t,e){var n,i=null,r=this.rows,s=this.cols,o=-1,l=-1;if(this.inBounds(t,e)){for(n=0;r.length>n;n++)if(e>=r[n][0]&&r[n][1]>e){o=n;break}for(n=0;s.length>n;n++)if(t>=s[n][0]&&s[n][1]>t){l=n;break}o>=0&&l>=0&&(i={row:o,col:l},i.grid=this.grid,i.date=this.grid.getCellDate(i))}return i},computeBounds:function(){var t;this.containerEl&&(t=this.containerEl.offset(),this.minX=t.left,this.maxX=t.left+this.containerEl.outerWidth(),this.minY=t.top,this.maxY=t.top+this.containerEl.outerHeight())},inBounds:function(t,e){return this.containerEl?t>=this.minX&&this.maxX>t&&e>=this.minY&&this.maxY>e:!0}},K.prototype={coordMaps:null,build:function(){var t,e=this.coordMaps;for(t=0;e.length>t;t++)e[t].build()},getCell:function(t,e){var n,i=this.coordMaps,r=null;for(n=0;i.length>n&&!r;n++)r=i[n].getCell(t,e);return r}},Q.prototype={coordMap:null,options:null,isListening:!1,isDragging:!1,origCell:null,origDate:null,cell:null,date:null,mouseX0:null,mouseY0:null,mousemoveProxy:null,mouseupProxy:null,scrollEl:null,scrollBounds:null,scrollTopVel:null,scrollLeftVel:null,scrollIntervalId:null,scrollHandlerProxy:null,scrollSensitivity:30,scrollSpeed:200,scrollIntervalMs:50,mousedown:function(t){E(t)&&(t.preventDefault(),this.startListening(t),this.options.distance||this.startDrag(t))},startListening:function(e){var n,i;this.isListening||(e&&this.options.scroll&&(n=S(t(e.target)),n.is(window)||n.is(document)||(this.scrollEl=n,this.scrollHandlerProxy=_(t.proxy(this,"scrollHandler"),100),this.scrollEl.on("scroll",this.scrollHandlerProxy))),this.computeCoords(),e&&(i=this.getCell(e),this.origCell=i,this.origDate=i?i.date:null,this.mouseX0=e.pageX,this.mouseY0=e.pageY),t(document).on("mousemove",this.mousemoveProxy=t.proxy(this,"mousemove")).on("mouseup",this.mouseupProxy=t.proxy(this,"mouseup")).on("selectstart",this.preventDefault),this.isListening=!0,this.trigger("listenStart",e))},computeCoords:function(){this.coordMap.build(),this.computeScrollBounds()},mousemove:function(t){var e,n;this.isDragging||(e=this.options.distance||1,n=Math.pow(t.pageX-this.mouseX0,2)+Math.pow(t.pageY-this.mouseY0,2),n>=e*e&&this.startDrag(t)),this.isDragging&&this.drag(t)},startDrag:function(t){var e;this.isListening||this.startListening(),this.isDragging||(this.isDragging=!0,this.trigger("dragStart",t),e=this.getCell(t),e&&this.cellOver(e,!0))},drag:function(t){var e;this.isDragging&&(e=this.getCell(t),J(e,this.cell)||(this.cell&&this.cellOut(),e&&this.cellOver(e)),this.dragScroll(t))},cellOver:function(t){this.cell=t,this.date=t.date,this.trigger("cellOver",t,t.date)},cellOut:function(){this.cell&&(this.trigger("cellOut",this.cell),this.cell=null,this.date=null)},mouseup:function(t){this.stopDrag(t),this.stopListening(t)},stopDrag:function(t){this.isDragging&&(this.stopScrolling(),this.trigger("dragStop",t),this.isDragging=!1)},stopListening:function(e){this.isListening&&(this.scrollEl&&(this.scrollEl.off("scroll",this.scrollHandlerProxy),this.scrollHandlerProxy=null),t(document).off("mousemove",this.mousemoveProxy).off("mouseup",this.mouseupProxy).off("selectstart",this.preventDefault),this.mousemoveProxy=null,this.mouseupProxy=null,this.isListening=!1,this.trigger("listenStop",e),this.origCell=this.cell=null,this.origDate=this.date=null)},getCell:function(t){return this.coordMap.getCell(t.pageX,t.pageY)},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1))},preventDefault:function(t){t.preventDefault()},computeScrollBounds:function(){var t,e=this.scrollEl;e&&(t=e.offset(),this.scrollBounds={top:t.top,left:t.left,bottom:t.top+e.outerHeight(),right:t.left+e.outerWidth()})},dragScroll:function(t){var e,n,i,r,s=this.scrollSensitivity,o=this.scrollBounds,l=0,a=0;o&&(e=(s-(t.pageY-o.top))/s,n=(s-(o.bottom-t.pageY))/s,i=(s-(t.pageX-o.left))/s,r=(s-(o.right-t.pageX))/s,e>=0&&1>=e?l=-1*e*this.scrollSpeed:n>=0&&1>=n&&(l=n*this.scrollSpeed),i>=0&&1>=i?a=-1*i*this.scrollSpeed:r>=0&&1>=r&&(a=r*this.scrollSpeed)),this.setScrollVel(l,a)},setScrollVel:function(e,n){this.scrollTopVel=e,this.scrollLeftVel=n,this.constrainScrollVel(),!this.scrollTopVel&&!this.scrollLeftVel||this.scrollIntervalId||(this.scrollIntervalId=setInterval(t.proxy(this,"scrollIntervalFunc"),this.scrollIntervalMs))},constrainScrollVel:function(){var t=this.scrollEl;0>this.scrollTopVel?0>=t.scrollTop()&&(this.scrollTopVel=0):this.scrollTopVel>0&&t.scrollTop()+t[0].clientHeight>=t[0].scrollHeight&&(this.scrollTopVel=0),0>this.scrollLeftVel?0>=t.scrollLeft()&&(this.scrollLeftVel=0):this.scrollLeftVel>0&&t.scrollLeft()+t[0].clientWidth>=t[0].scrollWidth&&(this.scrollLeftVel=0)},scrollIntervalFunc:function(){var t=this.scrollEl,e=this.scrollIntervalMs/1e3;this.scrollTopVel&&t.scrollTop(t.scrollTop()+this.scrollTopVel*e),this.scrollLeftVel&&t.scrollLeft(t.scrollLeft()+this.scrollLeftVel*e),this.constrainScrollVel(),this.scrollTopVel||this.scrollLeftVel||this.stopScrolling()},stopScrolling:function(){this.scrollIntervalId&&(clearInterval(this.scrollIntervalId),this.scrollIntervalId=null,this.computeCoords())},scrollHandler:function(){this.scrollIntervalId||this.computeCoords()}},te.prototype={options:null,sourceEl:null,el:null,parentEl:null,top0:null,left0:null,mouseY0:null,mouseX0:null,topDelta:null,leftDelta:null,mousemoveProxy:null,isFollowing:!1,isHidden:!1,isAnimating:!1,start:function(e){this.isFollowing||(this.isFollowing=!0,this.mouseY0=e.pageY,this.mouseX0=e.pageX,this.topDelta=0,this.leftDelta=0,this.isHidden||this.updatePosition(),t(document).on("mousemove",this.mousemoveProxy=t.proxy(this,"mousemove")))},stop:function(e,n){function i(){this.isAnimating=!1,r.destroyEl(),this.top0=this.left0=null,n&&n()}var r=this,s=this.options.revertDuration;this.isFollowing&&!this.isAnimating&&(this.isFollowing=!1,t(document).off("mousemove",this.mousemoveProxy),e&&s&&!this.isHidden?(this.isAnimating=!0,this.el.animate({top:this.top0,left:this.left0},{duration:s,complete:i})):i())},getEl:function(){var t=this.el;return t||(this.sourceEl.width(),t=this.el=this.sourceEl.clone().css({position:"absolute",visibility:"",display:this.isHidden?"none":"",margin:0,right:"auto",bottom:"auto",width:this.sourceEl.width(),height:this.sourceEl.height(),opacity:this.options.opacity||"",zIndex:this.options.zIndex}).appendTo(this.parentEl)),t},destroyEl:function(){this.el&&(this.el.remove(),this.el=null)},updatePosition:function(){var t,e;this.getEl(),null===this.top0&&(this.sourceEl.width(),t=this.sourceEl.offset(),e=this.el.offsetParent().offset(),this.top0=t.top-e.top,this.left0=t.left-e.left),this.el.css({top:this.top0+this.topDelta,left:this.left0+this.leftDelta})},mousemove:function(t){this.topDelta=t.pageY-this.mouseY0,this.leftDelta=t.pageX-this.mouseX0,this.isHidden||this.updatePosition()},hide:function(){this.isHidden||(this.isHidden=!0,this.el&&this.el.hide())},show:function(){this.isHidden&&(this.isHidden=!1,this.updatePosition(),this.getEl().show())}},ee.prototype={view:null,cellHtml:"<td/>",rowHtml:function(t,e){var n,i,r=this.view,s=this.getHtmlRenderer("cell",t),o="";for(e=e||0,n=0;r.colCnt>n;n++)i=r.cellToDate(e,n),o+=s(e,n,i);return o=this.bookendCells(o,t,e),"<tr>"+o+"</tr>"},bookendCells:function(t,e,n){var i=this.view,r=this.getHtmlRenderer("intro",e)(n||0),s=this.getHtmlRenderer("outro",e)(n||0),o=i.opt("isRTL"),l=o?s:r,a=o?r:s;return"string"==typeof t?l+t+a:t.prepend(l).append(a)},getHtmlRenderer:function(t,e){var n,i,r,s,o=this.view;return n=t+"Html",e&&(i=e+L(t)+"Html"),i&&(s=o[i])?r=o:i&&(s=this[i])?r=this:(s=o[n])?r=o:(s=this[n])&&(r=this),"function"==typeof s?function(){return s.apply(r,arguments)||""}:function(){return s||""}}},ne.prototype=k(ee.prototype),t.extend(ne.prototype,{el:null,coordMap:null,cellDuration:null,elsByFill:null,render:function(){this.bindHandlers()},destroy:function(){},buildCoords:function(){},getCellDate:function(){},getCellDayEl:function(){},rangeToSegs:function(){},bindHandlers:function(){var e=this;this.el.on("mousedown",function(n){t(n.target).is(".fc-event-container *, .fc-more")||t(n.target).closest(".fc-popover").length||e.dayMousedown(n)}),this.bindSegHandlers()},dayMousedown:function(t){var e,n,i,r=this,s=this.view,o=s.calendar,l=s.opt("selectable"),a=null,c=new Q(this.coordMap,{scroll:s.opt("dragScroll"),dragStart:function(){s.unselect()},cellOver:function(t,s){c.origDate&&(i=r.getCellDayEl(t),a=[s,c.origDate].sort(z),e=a[0],n=a[1].clone().add(r.cellDuration),l&&(o.isSelectionAllowedInRange(e,n)?r.renderSelection(e,n):(a=null,f())))},cellOut:function(){a=null,r.destroySelection(),g()},listenStop:function(t){a&&(a[0].isSame(a[1])&&s.trigger("dayClick",i[0],e,t),l&&s.reportSelection(e,n,t)),g()}});c.mousedown(t)},renderDrag:function(){},destroyDrag:function(){},renderResize:function(){},destroyResize:function(){},renderRangeHelper:function(t,e,n){var i,r=this.view;!e&&r.opt("forceEventDuration")&&(e=r.calendar.getDefaultEventEnd(!t.hasTime(),t)),i=n?k(n.event):{},i.start=t,i.end=e,i.allDay=!(t.hasTime()||e&&e.hasTime()),i.className=(i.className||[]).concat("fc-helper"),n||(i.editable=!1),this.renderHelper(i,n)},renderHelper:function(){},destroyHelper:function(){},renderSelection:function(t,e){this.renderHighlight(t,e)},destroySelection:function(){this.destroyHighlight()},renderHighlight:function(t,e){this.renderFill("highlight",this.rangeToSegs(t,e))},destroyHighlight:function(){this.destroyFill("highlight")},highlightSegClasses:function(){return["fc-highlight"]},renderFill:function(){},destroyFill:function(t){var e=this.elsByFill[t];e&&(e.remove(),delete this.elsByFill[t])},renderFillSegEls:function(e,n){var i,r=this,s=this[e+"SegEl"],o="",l=[];if(n.length){for(i=0;n.length>i;i++)o+=this.fillSegHtml(e,n[i]);t(o).each(function(e,i){var o=n[e],a=t(i);s&&(a=s.call(r,o,a)),a&&(a=t(a),a.is(r.fillSegTag)&&(o.el=a,l.push(o)))})}return l},fillSegTag:"div",fillSegHtml:function(t,e){var n=this[t+"SegClasses"],i=this[t+"SegStyles"],r=n?n.call(this,e):[],s=i?i.call(this,e):"";return"<"+this.fillSegTag+(r.length?' class="'+r.join(" ")+'"':"")+(s?' style="'+s+'"':"")+" />"},headHtml:function(){return'<div class="fc-row '+this.view.widgetHeaderClass+'">'+"<table>"+"<thead>"+this.rowHtml("head")+"</thead>"+"</table>"+"</div>"},headCellHtml:function(t,e,n){var i=this.view,r=i.calendar,s=i.opt("columnFormat");return'<th class="fc-day-header '+i.widgetHeaderClass+" fc-"+Ye[n.day()]+'">'+P(r.formatDate(n,s))+"</th>"},bgCellHtml:function(t,e,n){var i=this.view,r=this.getDayClasses(n);return r.unshift("fc-day",i.widgetContentClass),'<td class="'+r.join(" ")+'" data-date="'+n.format()+'"></td>'},getDayClasses:function(t){var e=this.view,n=e.calendar.getNow().stripTime(),i=["fc-"+Ye[t.day()]];return"month"===e.name&&t.month()!=e.intervalStart.month()&&i.push("fc-other-month"),t.isSame(n,"day")?i.push("fc-today",e.highlightStateClass):n>t?i.push("fc-past"):i.push("fc-future"),i}}),t.extend(ne.prototype,{mousedOverSeg:null,isDraggingSeg:!1,isResizingSeg:!1,segs:null,renderEvents:function(t){var e,n,i=this.eventsToSegs(t),r=[],s=[];for(e=0;i.length>e;e++)n=i[e],ie(n.event)?r.push(n):s.push(n);r=this.renderBgSegs(r)||r,s=this.renderFgSegs(s)||s,this.segs=r.concat(s)},destroyEvents:function(){this.triggerSegMouseout(),this.destroyFgSegs(),this.destroyBgSegs(),this.segs=null},getSegs:function(){return this.segs||[]},renderFgSegs:function(){},destroyFgSegs:function(){},renderFgSegEls:function(e,n){var i,r=this.view,s="",o=[];if(e.length){for(i=0;e.length>i;i++)s+=this.fgSegHtml(e[i],n);t(s).each(function(n,i){var s=e[n],l=r.resolveEventEl(s.event,t(i));l&&(l.data("fc-seg",s),s.el=l,o.push(s))})}return o},fgSegHtml:function(){},renderBgSegs:function(t){return this.renderFill("bgEvent",t)},destroyBgSegs:function(){this.destroyFill("bgEvent")},bgEventSegEl:function(t,e){return this.view.resolveEventEl(t.event,e)},bgEventSegClasses:function(t){var e=t.event,n=e.source||{};return["fc-bgevent"].concat(e.className,n.className||[])},bgEventSegStyles:function(t){var e=this.view,n=t.event,i=n.source||{},r=n.color,s=i.color,o=e.opt("eventColor"),l=n.backgroundColor||r||i.backgroundColor||s||e.opt("eventBackgroundColor")||o;return l?"background-color:"+l:""},businessHoursSegClasses:function(){return["fc-nonbusiness","fc-bgevent"]},bindSegHandlers:function(){var e=this,n=this.view;t.each({mouseenter:function(t,n){e.triggerSegMouseover(t,n)},mouseleave:function(t,n){e.triggerSegMouseout(t,n)},click:function(t,e){return n.trigger("eventClick",this,t.event,e)},mousedown:function(i,r){t(r.target).is(".fc-resizer")&&n.isEventResizable(i.event)?e.segResizeMousedown(i,r):n.isEventDraggable(i.event)&&e.segDragMousedown(i,r)}},function(n,i){e.el.on(n,".fc-event-container > *",function(n){var r=t(this).data("fc-seg");return!r||e.isDraggingSeg||e.isResizingSeg?void 0:i.call(this,r,n)})})},triggerSegMouseover:function(t,e){this.mousedOverSeg||(this.mousedOverSeg=t,this.view.trigger("eventMouseover",t.el[0],t.event,e))},triggerSegMouseout:function(t,e){e=e||{},this.mousedOverSeg&&(t=t||this.mousedOverSeg,this.mousedOverSeg=null,this.view.trigger("eventMouseout",t.el[0],t.event,e))},segDragMousedown:function(t,e){var n,i,r=this,s=this.view,o=s.calendar,l=t.el,a=t.event,c=new te(t.el,{parentEl:s.el,opacity:s.opt("dragOpacity"),revertDuration:s.opt("dragRevertDuration"),zIndex:2}),d=new Q(s.coordMap,{distance:5,scroll:s.opt("dragScroll"),listenStart:function(t){c.hide(),c.start(t)},dragStart:function(e){r.triggerSegMouseout(t,e),r.isDraggingSeg=!0,s.hideEvent(a),s.trigger("eventDragStart",l[0],a,e,{})},cellOver:function(e,l){var u=t.cellDate||d.origDate,h=r.computeDraggedEventDates(t,u,l);n=h.start,i=h.end,o.isEventAllowedInRange(a,n,h.visibleEnd)?s.renderDrag(n,i,t)?c.hide():c.show():(n=null,c.show(),f())},cellOut:function(){n=null,s.destroyDrag(),c.show(),g()},dragStop:function(t){var e=n&&!n.isSame(a.start);c.stop(!e,function(){r.isDraggingSeg=!1,s.destroyDrag(),s.showEvent(a),s.trigger("eventDragStop",l[0],a,t,{}),e&&s.eventDrop(l[0],a,n,t)}),g()},listenStop:function(){c.stop()}});d.mousedown(e)},computeDraggedEventDates:function(t,e,n){var i,r,s,o,l,a=this.view,c=t.event,d=c.start,u=a.calendar.getEventEnd(c);return n.hasTime()===e.hasTime()?(i=C(n,e),r=d.clone().add(i),s=null===c.end?null:u.clone().add(i),o=c.allDay):(r=n,s=null,o=!n.hasTime()),l=s||a.calendar.getDefaultEventEnd(o,r),{start:r,end:s,visibleEnd:l}},segResizeMousedown:function(t,e){function n(){r.destroyResize(),s.showEvent(a)}var i,r=this,s=this.view,o=s.calendar,l=t.el,a=t.event,c=a.start,d=s.calendar.getEventEnd(a),u=null;i=new Q(this.coordMap,{distance:5,scroll:s.opt("dragScroll"),dragStart:function(e){r.triggerSegMouseout(t,e),r.isResizingSeg=!0,s.trigger("eventResizeStart",l[0],a,e,{})},cellOver:function(e,i){i.isBefore(c)&&(i=c),u=i.clone().add(r.cellDuration),o.isEventAllowedInRange(a,c,u)?u.isSame(d)?(u=null,n()):(r.renderResize(c,u,t),s.hideEvent(a)):(u=null,n(),f())},cellOut:function(){u=null,n(),g()},dragStop:function(t){r.isResizingSeg=!1,n(),g(),s.trigger("eventResizeStop",l[0],a,t,{}),u&&s.eventResize(l[0],a,u,t)}}),i.mousedown(e)},getSegClasses:function(t,e,n){var i=t.event,r=["fc-event",t.isStart?"fc-start":"fc-not-start",t.isEnd?"fc-end":"fc-not-end"].concat(i.className,i.source?i.source.className:[]);return e&&r.push("fc-draggable"),n&&r.push("fc-resizable"),r},getEventSkinCss:function(t){var e=this.view,n=t.source||{},i=t.color,r=n.color,s=e.opt("eventColor"),o=t.backgroundColor||i||n.backgroundColor||r||e.opt("eventBackgroundColor")||s,l=t.borderColor||i||n.borderColor||r||e.opt("eventBorderColor")||s,a=t.textColor||n.textColor||e.opt("eventTextColor"),c=[];return o&&c.push("background-color:"+o),l&&c.push("border-color:"+l),a&&c.push("color:"+a),c.join(";")},eventsToSegs:function(t,e){var n,i=this.eventsToRanges(t),r=[];for(n=0;i.length>n;n++)r.push.apply(r,this.eventRangeToSegs(i[n],e));return r},eventsToRanges:function(e){var n=this,i=oe(e),r=[];return t.each(i,function(t,e){e.length&&r.push.apply(r,re(e[0])?n.eventsToInverseRanges(e):n.eventsToNormalRanges(e))}),r},eventsToNormalRanges:function(t){var e,n,i,r,s=this.view.calendar,o=[];for(e=0;t.length>e;e++)n=t[e],i=n.start.clone().stripZone(),r=s.getEventEnd(n).stripZone(),o.push({event:n,start:i,end:r,eventStartMS:+i,eventDurationMS:r-i});return o},eventsToInverseRanges:function(t){var e,n,i=this.view,r=i.start.clone().stripZone(),s=i.end.clone().stripZone(),o=this.eventsToNormalRanges(t),l=[],a=t[0],c=r;for(o.sort(le),e=0;o.length>e;e++)n=o[e],n.start>c&&l.push({event:a,start:c,end:n.start}),c=n.end;return s>c&&l.push({event:a,start:c,end:s}),l},eventRangeToSegs:function(t,e){var n,i,r;for(n=e?e(t.start,t.end):this.rangeToSegs(t.start,t.end),i=0;n.length>i;i++)r=n[i],r.event=t.event,r.eventStartMS=t.eventStartMS,r.eventDurationMS=t.eventDurationMS;return n}}),ce.prototype=k(ne.prototype),t.extend(ce.prototype,{numbersVisible:!1,cellDuration:e.duration({days:1}),bottomCoordPadding:0,rowEls:null,dayEls:null,helperEls:null,render:function(e){var n,i=this.view,r="";for(n=0;i.rowCnt>n;n++)r+=this.dayRowHtml(n,e);this.el.html(r),this.rowEls=this.el.find(".fc-row"),this.dayEls=this.el.find(".fc-day"),this.dayEls.each(function(e,n){var r=i.cellToDate(Math.floor(e/i.colCnt),e%i.colCnt);i.trigger("dayRender",null,r,t(n))}),ne.prototype.render.call(this)},destroy:function(){this.destroySegPopover()},dayRowHtml:function(t,e){var n=this.view,i=["fc-row","fc-week",n.widgetContentClass];return e&&i.push("fc-rigid"),'<div class="'+i.join(" ")+'">'+'<div class="fc-bg">'+"<table>"+this.rowHtml("day",t)+"</table>"+"</div>"+'<div class="fc-content-skeleton">'+"<table>"+(this.numbersVisible?"<thead>"+this.rowHtml("number",t)+"</thead>":"")+"</table>"+"</div>"+"</div>"},dayCellHtml:function(t,e,n){return this.bgCellHtml(t,e,n)},buildCoords:function(e,n){var i,r,s,o=this.view.colCnt;this.dayEls.slice(0,o).each(function(e,o){i=t(o),r=i.offset().left,e&&(s[1]=r),s=[r],n[e]=s}),s[1]=r+i.outerWidth(),this.rowEls.each(function(n,o){i=t(o),r=i.offset().top,n&&(s[1]=r),s=[r],e[n]=s}),s[1]=r+i.outerHeight()+this.bottomCoordPadding},getCellDate:function(t){return this.view.cellToDate(t)},getCellDayEl:function(t){return this.dayEls.eq(t.row*this.view.colCnt+t.col)},rangeToSegs:function(t,e){return this.view.rangeToSegments(t,e)},renderDrag:function(t,e,n){var i;return this.renderHighlight(t,e||this.view.calendar.getDefaultEventEnd(!0,t)),n&&!n.el.closest(this.el).length?(this.renderRangeHelper(t,e,n),i=this.view.opt("dragOpacity"),void 0!==i&&this.helperEls.css("opacity",i),!0):void 0},destroyDrag:function(){this.destroyHighlight(),this.destroyHelper()},renderResize:function(t,e,n){this.renderHighlight(t,e),this.renderRangeHelper(t,e,n)},destroyResize:function(){this.destroyHighlight(),this.destroyHelper()},renderHelper:function(e,n){var i,r=[],s=this.eventsToSegs([e]);s=this.renderFgSegEls(s),i=this.renderSegRows(s),this.rowEls.each(function(e,s){var o,l=t(s),a=t('<div class="fc-helper-skeleton"><table/></div>');o=n&&n.row===e?n.el.position().top:l.find(".fc-content-skeleton tbody").position().top,a.css("top",o).find("table").append(i[e].tbodyEl),l.append(a),r.push(a[0])}),this.helperEls=t(r)},destroyHelper:function(){this.helperEls&&(this.helperEls.remove(),this.helperEls=null)},fillSegTag:"td",renderFill:function(e,n){var i,r,s,o=[];for(n=this.renderFillSegEls(e,n),i=0;n.length>i;i++)r=n[i],s=this.renderFillRow(e,r),this.rowEls.eq(r.row).append(s),o.push(s[0]);return this.elsByFill[e]=t(o),n},renderFillRow:function(e,n){var i,r,s=this.view.colCnt,o=n.leftCol,l=n.rightCol+1;return i=t('<div class="fc-'+e.toLowerCase()+'-skeleton">'+"<table><tr/></table>"+"</div>"),r=i.find("tr"),o>0&&r.append('<td colspan="'+o+'"/>'),r.append(n.el.attr("colspan",l-o)),s>l&&r.append('<td colspan="'+(s-l)+'"/>'),this.bookendCells(r,e),i}}),t.extend(ce.prototype,{rowStructs:null,destroyEvents:function(){this.destroySegPopover(),ne.prototype.destroyEvents.apply(this,arguments)},getSegs:function(){return ne.prototype.getSegs.call(this).concat(this.popoverSegs||[])},renderBgSegs:function(e){var n=t.grep(e,function(t){return t.event.allDay});return ne.prototype.renderBgSegs.call(this,n)},renderFgSegs:function(e){var n;return e=this.renderFgSegEls(e),n=this.rowStructs=this.renderSegRows(e),this.rowEls.each(function(e,i){t(i).find(".fc-content-skeleton > table").append(n[e].tbodyEl)}),e},destroyFgSegs:function(){for(var t,e=this.rowStructs||[];t=e.pop();)t.tbodyEl.remove();this.rowStructs=null},renderSegRows:function(t){var e,n,i=[];for(e=this.groupSegRows(t),n=0;e.length>n;n++)i.push(this.renderSegRow(n,e[n]));return i},fgSegHtml:function(t,e){var n,i=this.view,r=i.opt("isRTL"),s=t.event,o=i.isEventDraggable(s),l=!e&&s.allDay&&t.isEnd&&i.isEventResizable(s),a=this.getSegClasses(t,o,l),c=this.getEventSkinCss(s),d="";return a.unshift("fc-day-grid-event"),!s.allDay&&t.isStart&&(d='<span class="fc-time">'+P(i.getEventTimeText(s))+"</span>"),n='<span class="fc-title">'+(P(s.title||"")||"&nbsp;")+"</span>",'<a class="'+a.join(" ")+'"'+(s.url?' href="'+P(s.url)+'"':"")+(c?' style="'+c+'"':"")+">"+'<div class="fc-content">'+(r?n+" "+d:d+" "+n)+"</div>"+(l?'<div class="fc-resizer"/>':"")+"</a>"},renderSegRow:function(e,n){function i(e){for(;e>o;)d=(y[r-1]||[])[o],d?d.attr("rowspan",parseInt(d.attr("rowspan")||1,10)+1):(d=t("<td/>"),l.append(d)),v[r][o]=d,y[r][o]=d,o++}var r,s,o,l,a,c,d,u=this.view,h=u.colCnt,f=this.buildSegLevels(n),g=Math.max(1,f.length),p=t("<tbody/>"),m=[],v=[],y=[];for(r=0;g>r;r++){if(s=f[r],o=0,l=t("<tr/>"),m.push([]),v.push([]),y.push([]),s)for(a=0;s.length>a;a++){for(c=s[a],i(c.leftCol),d=t('<td class="fc-event-container"/>').append(c.el),c.leftCol!=c.rightCol?d.attr("colspan",c.rightCol-c.leftCol+1):y[r][o]=d;c.rightCol>=o;)v[r][o]=d,m[r][o]=c,o++;l.append(d)}i(h),this.bookendCells(l,"eventSkeleton"),p.append(l)}return{row:e,tbodyEl:p,cellMatrix:v,segMatrix:m,segLevels:f,segs:n}},buildSegLevels:function(t){var e,n,i,r=[];for(t.sort(ae),e=0;t.length>e;e++){for(n=t[e],i=0;r.length>i&&de(n,r[i]);i++);n.level=i,(r[i]||(r[i]=[])).push(n)}for(i=0;r.length>i;i++)r[i].sort(ue);return r},groupSegRows:function(t){var e,n=this.view,i=[];for(e=0;n.rowCnt>e;e++)i.push([]);for(e=0;t.length>e;e++)i[t[e].row].push(t[e]);return i}}),t.extend(ce.prototype,{segPopover:null,popoverSegs:null,destroySegPopover:function(){this.segPopover&&this.segPopover.hide()},limitRows:function(t){var e,n,i=this.rowStructs||[];for(e=0;i.length>e;e++)this.unlimitRow(e),n=t?"number"==typeof t?t:this.computeRowLevelLimit(e):!1,n!==!1&&this.limitRow(e,n)},computeRowLevelLimit:function(t){var e,n,i=this.rowEls.eq(t),r=i.height(),s=this.rowStructs[t].tbodyEl.children();for(e=0;s.length>e;e++)if(n=s.eq(e).removeClass("fc-limited"),n.position().top+n.outerHeight()>r)return e;return!1},limitRow:function(e,n){function i(i){for(;i>T;)r={row:e,col:T},d=S.getCellSegs(r,n),d.length&&(f=o[n-1][T],w=S.renderMoreLink(r,d),y=t("<div/>").append(w),f.append(y),D.push(y[0])),T++}var r,s,o,l,a,c,d,u,h,f,g,p,m,v,y,w,S=this,b=this.view,E=this.rowStructs[e],D=[],T=0;if(n&&E.segLevels.length>n){for(s=E.segLevels[n-1],o=E.cellMatrix,l=E.tbodyEl.children().slice(n).addClass("fc-limited").get(),a=0;s.length>a;a++){for(c=s[a],i(c.leftCol),h=[],u=0;c.rightCol>=T;)r={row:e,col:T},d=this.getCellSegs(r,n),h.push(d),u+=d.length,T++;if(u){for(f=o[n-1][c.leftCol],g=f.attr("rowspan")||1,p=[],m=0;h.length>m;m++)v=t('<td class="fc-more-cell"/>').attr("rowspan",g),d=h[m],r={row:e,col:c.leftCol+m},w=this.renderMoreLink(r,[c].concat(d)),y=t("<div/>").append(w),v.append(y),p.push(v[0]),D.push(v[0]);f.addClass("fc-limited").after(t(p)),l.push(f[0])}}i(b.colCnt),E.moreEls=t(D),E.limitedEls=t(l)}},unlimitRow:function(t){var e=this.rowStructs[t];e.moreEls&&(e.moreEls.remove(),e.moreEls=null),e.limitedEls&&(e.limitedEls.removeClass("fc-limited"),e.limitedEls=null)},renderMoreLink:function(e,n){var i=this,r=this.view;return t('<a class="fc-more"/>').text(this.getMoreLinkText(n.length)).on("click",function(s){var o=r.opt("eventLimitClick"),l=r.cellToDate(e),a=t(this),c=i.getCellDayEl(e),d=i.getCellSegs(e),u=i.resliceDaySegs(d,l),h=i.resliceDaySegs(n,l);"function"==typeof o&&(o=r.trigger("eventLimitClick",null,{date:l,dayEl:c,moreEl:a,segs:u,hiddenSegs:h},s)),"popover"===o?i.showSegPopover(l,e,a,u):"string"==typeof o&&r.calendar.zoomTo(l,o)})},showSegPopover:function(t,e,n,i){var r,s,o=this,l=this.view,a=n.parent();r=1==l.rowCnt?this.view.el:this.rowEls.eq(e.row),s={className:"fc-more-popover",content:this.renderSegPopoverContent(t,i),parentEl:this.el,top:r.offset().top,autoHide:!0,viewportConstrain:l.opt("popoverViewportConstrain"),hide:function(){o.segPopover.destroy(),o.segPopover=null,o.popoverSegs=null}},l.opt("isRTL")?s.right=a.offset().left+a.outerWidth()+1:s.left=a.offset().left-1,this.segPopover=new q(s),this.segPopover.show()},renderSegPopoverContent:function(e,n){var i,r=this.view,s=r.opt("theme"),o=e.format(r.opt("dayPopoverFormat")),l=t('<div class="fc-header '+r.widgetHeaderClass+'">'+'<span class="fc-close '+(s?"ui-icon ui-icon-closethick":"fc-icon fc-icon-x")+'"></span>'+'<span class="fc-title">'+P(o)+"</span>"+'<div class="fc-clear"/>'+"</div>"+'<div class="fc-body '+r.widgetContentClass+'">'+'<div class="fc-event-container"></div>'+"</div>"),a=l.find(".fc-event-container");for(n=this.renderFgSegEls(n,!0),this.popoverSegs=n,i=0;n.length>i;i++)n[i].cellDate=e,a.append(n[i].el);return l},resliceDaySegs:function(e,n){var i=t.map(e,function(t){return t.event}),r=n.clone().stripTime(),s=r.clone().add(1,"days");return this.eventsToSegs(i,function(t,e){var n=D(t,e,r,s);return n?[n]:[]})},getMoreLinkText:function(t){var e=this.view,n=e.opt("eventLimitText");return"function"==typeof n?n(t):"+"+t+" "+n},getCellSegs:function(t,e){for(var n,i=this.rowStructs[t.row].segMatrix,r=e||0,s=[];i.length>r;)n=i[r][t.col],n&&s.push(n),r++;return s}}),he.prototype=k(ne.prototype),t.extend(he.prototype,{slotDuration:null,snapDuration:null,minTime:null,maxTime:null,dayEls:null,slatEls:null,slatTops:null,helperEl:null,businessHourSegs:null,render:function(){this.processOptions(),this.el.html(this.renderHtml()),this.dayEls=this.el.find(".fc-day"),this.slatEls=this.el.find(".fc-slats tr"),this.computeSlatTops(),this.renderBusinessHours(),ne.prototype.render.call(this)},renderBusinessHours:function(){var t=this.view.calendar.getBusinessHoursEvents();this.businessHourSegs=this.renderFill("businessHours",this.eventsToSegs(t),"bgevent")},renderHtml:function(){return'<div class="fc-bg"><table>'+this.rowHtml("slotBg")+"</table>"+"</div>"+'<div class="fc-slats">'+"<table>"+this.slatRowHtml()+"</table>"+"</div>"},slotBgCellHtml:function(t,e,n){return this.bgCellHtml(t,e,n)},slatRowHtml:function(){for(var t,n,i,r=this.view,s=r.calendar,o=r.opt("isRTL"),l="",a=0===this.slotDuration.asMinutes()%15,c=e.duration(+this.minTime);this.maxTime>c;)t=r.start.clone().time(c),n=t.minutes(),i='<td class="fc-axis fc-time '+r.widgetContentClass+'" '+r.axisStyleAttr()+">"+(a&&n?"":"<span>"+P(s.formatDate(t,r.opt("axisFormat")))+"</span>")+"</td>",l+="<tr "+(n?'class="fc-minor"':"")+">"+(o?"":i)+'<td class="'+r.widgetContentClass+'"/>'+(o?i:"")+"</tr>",c.add(this.slotDuration);return l},processOptions:function(){var t=this.view,n=t.opt("slotDuration"),i=t.opt("snapDuration");n=e.duration(n),i=i?e.duration(i):n,this.slotDuration=n,this.snapDuration=i,this.cellDuration=i,this.minTime=e.duration(t.opt("minTime")),this.maxTime=e.duration(t.opt("maxTime"))},rangeToSegs:function(t,e){var n,i,r,s,o,l=this.view,a=[];for(t=t.clone().stripZone(),e=e.clone().stripZone(),i=0;l.colCnt>i;i++)r=l.cellToDate(0,i),s=r.clone().time(this.minTime),o=r.clone().time(this.maxTime),n=D(t,e,s,o),n&&(n.col=i,a.push(n));return a},resize:function(){this.computeSlatTops(),this.updateSegVerticals()},buildCoords:function(n,i){var r,s,o=this.view.colCnt,l=this.el.offset().top,a=e.duration(+this.minTime),c=null;for(this.dayEls.slice(0,o).each(function(e,n){r=t(n),s=r.offset().left,c&&(c[1]=s),c=[s],i[e]=c}),c[1]=s+r.outerWidth(),c=null;this.maxTime>a;)s=l+this.computeTimeTop(a),c&&(c[1]=s),c=[s],n.push(c),a.add(this.snapDuration);c[1]=l+this.computeTimeTop(a)},getCellDate:function(t){var e=this.view,n=e.calendar;return n.rezoneDate(e.cellToDate(0,t.col).time(this.minTime+this.snapDuration*t.row))},getCellDayEl:function(t){return this.dayEls.eq(t.col)},computeDateTop:function(t,n){return this.computeTimeTop(e.duration(t.clone().stripZone()-n.clone().stripTime()))},computeTimeTop:function(t){var e,n,i,r,s=(t-this.minTime)/this.slotDuration;return s=Math.max(0,s),s=Math.min(this.slatEls.length,s),e=Math.floor(s),n=s-e,i=this.slatTops[e],n?(r=this.slatTops[e+1],i+(r-i)*n):i},computeSlatTops:function(){var e,n=[];this.slatEls.each(function(i,r){e=t(r).position().top,n.push(e)}),n.push(e+this.slatEls.last().outerHeight()),this.slatTops=n},renderDrag:function(t,e,n){var i;return n?(this.renderRangeHelper(t,e,n),i=this.view.opt("dragOpacity"),void 0!==i&&this.helperEl.css("opacity",i),!0):(this.renderHighlight(t,e||this.view.calendar.getDefaultEventEnd(!1,t)),void 0)},destroyDrag:function(){this.destroyHelper(),this.destroyHighlight()},renderResize:function(t,e,n){this.renderRangeHelper(t,e,n)},destroyResize:function(){this.destroyHelper()},renderHelper:function(e,n){var i,r,s,o,l=this.eventsToSegs([e]);for(l=this.renderFgSegEls(l),i=this.renderSegTable(l),r=0;l.length>r;r++)s=l[r],n&&n.col===s.col&&(o=n.el,s.el.css({left:o.css("left"),right:o.css("right"),"margin-left":o.css("margin-left"),"margin-right":o.css("margin-right")}));this.helperEl=t('<div class="fc-helper-skeleton"/>').append(i).appendTo(this.el)},destroyHelper:function(){this.helperEl&&(this.helperEl.remove(),this.helperEl=null)},renderSelection:function(t,e){this.view.opt("selectHelper")?this.renderRangeHelper(t,e):this.renderHighlight(t,e)},destroySelection:function(){this.destroyHelper(),this.destroyHighlight()},renderFill:function(e,n,i){var r,s,o,l,a,c,d,u,h,f,g=this.view;if(n.length){for(n=this.renderFillSegEls(e,n),r=this.groupSegCols(n),i=i||e.toLowerCase(),s=t('<div class="fc-'+i+'-skeleton">'+"<table><tr/></table>"+"</div>"),o=s.find("tr"),l=0;r.length>l;l++)if(a=r[l],c=t("<td/>").appendTo(o),a.length)for(d=t('<div class="fc-'+i+'-container"/>').appendTo(c),u=g.cellToDate(0,l),h=0;a.length>h;h++)f=a[h],d.append(f.el.css({top:this.computeDateTop(f.start,u),bottom:-this.computeDateTop(f.end,u)}));this.bookendCells(o,e),this.el.append(s),this.elsByFill[e]=s}return n}}),t.extend(he.prototype,{eventSkeletonEl:null,renderFgSegs:function(e){return e=this.renderFgSegEls(e),this.el.append(this.eventSkeletonEl=t('<div class="fc-content-skeleton"/>').append(this.renderSegTable(e))),e},destroyFgSegs:function(){this.eventSkeletonEl&&(this.eventSkeletonEl.remove(),this.eventSkeletonEl=null)},renderSegTable:function(e){var n,i,r,s,o,l,a=t("<table><tr/></table>"),c=a.find("tr");for(n=this.groupSegCols(e),this.computeSegVerticals(e),s=0;n.length>s;s++){for(o=n[s],fe(o),l=t('<div class="fc-event-container"/>'),i=0;o.length>i;i++)r=o[i],r.el.css(this.generateSegPositionCss(r)),30>r.bottom-r.top&&r.el.addClass("fc-short"),l.append(r.el);c.append(t("<td/>").append(l))}return this.bookendCells(c,"eventSkeleton"),a
},updateSegVerticals:function(){var t,e=(this.segs||[]).concat(this.businessHourSegs||[]);for(this.computeSegVerticals(e),t=0;e.length>t;t++)e[t].el.css(this.generateSegVerticalCss(e[t]))},computeSegVerticals:function(t){var e,n;for(e=0;t.length>e;e++)n=t[e],n.top=this.computeDateTop(n.start,n.start),n.bottom=this.computeDateTop(n.end,n.start)},fgSegHtml:function(t,e){var n,i,r,s=this.view,o=t.event,l=s.isEventDraggable(o),a=!e&&t.isEnd&&s.isEventResizable(o),c=this.getSegClasses(t,l,a),d=this.getEventSkinCss(o);return c.unshift("fc-time-grid-event"),s.isMultiDayEvent(o)?(t.isStart||t.isEnd)&&(n=s.getEventTimeText(t.start,t.end),i=s.getEventTimeText(t.start,t.end,"LT"),r=s.getEventTimeText(t.start,null)):(n=s.getEventTimeText(o),i=s.getEventTimeText(o,"LT"),r=s.getEventTimeText(o.start,null)),'<a class="'+c.join(" ")+'"'+(o.url?' href="'+P(o.url)+'"':"")+(d?' style="'+d+'"':"")+">"+'<div class="fc-content">'+(n?'<div class="fc-time" data-start="'+P(r)+'"'+' data-full="'+P(i)+'"'+">"+"<span>"+P(n)+"</span>"+"</div>":"")+(o.title?'<div class="fc-title">'+P(o.title)+"</div>":"")+"</div>"+'<div class="fc-bg"/>'+(a?'<div class="fc-resizer"/>':"")+"</a>"},generateSegPositionCss:function(t){var e,n,i=this.view,r=i.opt("isRTL"),s=i.opt("slotEventOverlap"),o=t.backwardCoord,l=t.forwardCoord,a=this.generateSegVerticalCss(t);return s&&(l=Math.min(1,o+2*(l-o))),r?(e=1-l,n=o):(e=o,n=1-l),a.zIndex=t.level+1,a.left=100*e+"%",a.right=100*n+"%",s&&t.forwardPressure&&(a[r?"marginLeft":"marginRight"]=20),a},generateSegVerticalCss:function(t){return{top:t.top,bottom:-t.bottom}},groupSegCols:function(t){var e,n=this.view,i=[];for(e=0;n.colCnt>e;e++)i.push([]);for(e=0;t.length>e;e++)i[t[e].col].push(t[e]);return i}}),be.prototype={calendar:null,coordMap:null,el:null,start:null,end:null,intervalStart:null,intervalEnd:null,rowCnt:null,colCnt:null,isSelected:!1,scrollerEl:null,scrollTop:null,widgetHeaderClass:null,widgetContentClass:null,highlightStateClass:null,documentMousedownProxy:null,documentDragStartProxy:null,init:function(){var e=this.opt("theme")?"ui":"fc";this.widgetHeaderClass=e+"-widget-header",this.widgetContentClass=e+"-widget-content",this.highlightStateClass=e+"-state-highlight",this.documentMousedownProxy=t.proxy(this,"documentMousedown"),this.documentDragStartProxy=t.proxy(this,"documentDragStart")},render:function(){this.updateSize(),this.trigger("viewRender",this,this,this.el),t(document).on("mousedown",this.documentMousedownProxy).on("dragstart",this.documentDragStartProxy)},destroy:function(){this.unselect(),this.trigger("viewDestroy",this,this,this.el),this.destroyEvents(),this.el.empty(),t(document).off("mousedown",this.documentMousedownProxy).off("dragstart",this.documentDragStartProxy)},incrementDate:function(){},updateSize:function(t){t&&this.recordScroll(),this.updateHeight(),this.updateWidth()},updateWidth:function(){},updateHeight:function(){var t=this.calendar;this.setHeight(t.getSuggestedViewHeight(),t.isHeightAuto())},setHeight:function(){},computeScrollerHeight:function(t){var e,n=this.el.add(this.scrollerEl);return n.css({position:"relative",left:-1}),e=this.el.outerHeight()-this.scrollerEl.height(),n.css({position:"",left:""}),t-e},recordScroll:function(){this.scrollerEl&&(this.scrollTop=this.scrollerEl.scrollTop())},restoreScroll:function(){null!==this.scrollTop&&this.scrollerEl.scrollTop(this.scrollTop)},renderEvents:function(){this.segEach(function(t){this.trigger("eventAfterRender",t.event,t.event,t.el)}),this.trigger("eventAfterAllRender")},destroyEvents:function(){this.segEach(function(t){this.trigger("eventDestroy",t.event,t.event,t.el)})},resolveEventEl:function(e,n){var i=this.trigger("eventRender",e,e,n);return i===!1?n=null:i&&i!==!0&&(n=t(i)),n},showEvent:function(t){this.segEach(function(t){t.el.css("visibility","")},t)},hideEvent:function(t){this.segEach(function(t){t.el.css("visibility","hidden")},t)},segEach:function(t,e){var n,i=this.getSegs();for(n=0;i.length>n;n++)e&&i[n].event._id!==e._id||t.call(this,i[n])},getSegs:function(){},renderDrag:function(){},destroyDrag:function(){},documentDragStart:function(e){var n,i,r,s,o,l=this,a=this.calendar,c=null,d=null,u=null;this.opt("droppable")&&(n=t(e.target),i=this.opt("dropAccept"),(t.isFunction(i)?i.call(n[0],n):n.is(i))&&(r=Ee(n),s=r.eventProps,o=new Q(this.coordMap,{cellOver:function(e,n){c=n,d=r.duration?c.clone().add(r.duration):null,u=d||a.getDefaultEventEnd(!c.hasTime(),c),s&&t.extend(s,{start:c,end:d}),a.isExternalDragAllowedInRange(c,u,s)?l.renderDrag(c,u):(c=null,f())},cellOut:function(){c=null,l.destroyDrag(),g()}}),t(document).one("dragstop",function(t,e){var i;l.destroyDrag(),g(),c&&(r.startTime&&!c.hasTime()&&c.time(r.startTime),l.trigger("drop",n[0],c,t,e),s&&(i=a.renderEvent(s,r.stick),l.trigger("eventReceive",null,i[0])))}),o.startDrag(e)))},select:function(t,e,n){this.unselect(n),this.renderSelection(t,e),this.reportSelection(t,e,n)},renderSelection:function(){},reportSelection:function(t,e,n){this.isSelected=!0,this.trigger("select",null,t,e,n)},unselect:function(t){this.isSelected&&(this.isSelected=!1,this.destroySelection(),this.trigger("unselect",null,t))},destroySelection:function(){},documentMousedown:function(e){var n;this.isSelected&&this.opt("unselectAuto")&&E(e)&&(n=this.opt("unselectCancel"),n&&t(e.target).closest(n).length||this.unselect(e))}},_e.dataAttrPrefix="",De.prototype=k(be.prototype),t.extend(De.prototype,{dayGrid:null,dayNumbersVisible:!1,weekNumbersVisible:!1,weekNumberWidth:null,headRowEl:null,render:function(t,e,n){this.rowCnt=t,this.colCnt=e,this.dayNumbersVisible=n,this.weekNumbersVisible=this.opt("weekNumbers"),this.dayGrid.numbersVisible=this.dayNumbersVisible||this.weekNumbersVisible,this.el.addClass("fc-basic-view").html(this.renderHtml()),this.headRowEl=this.el.find("thead .fc-row"),this.scrollerEl=this.el.find(".fc-day-grid-container"),this.dayGrid.coordMap.containerEl=this.scrollerEl,this.dayGrid.el=this.el.find(".fc-day-grid"),this.dayGrid.render(this.hasRigidRows()),be.prototype.render.call(this)},destroy:function(){this.dayGrid.destroy(),be.prototype.destroy.call(this)},renderHtml:function(){return'<table><thead><tr><td class="'+this.widgetHeaderClass+'">'+this.dayGrid.headHtml()+"</td>"+"</tr>"+"</thead>"+"<tbody>"+"<tr>"+'<td class="'+this.widgetContentClass+'">'+'<div class="fc-day-grid-container">'+'<div class="fc-day-grid"/>'+"</div>"+"</td>"+"</tr>"+"</tbody>"+"</table>"},headIntroHtml:function(){return this.weekNumbersVisible?'<th class="fc-week-number '+this.widgetHeaderClass+'" '+this.weekNumberStyleAttr()+">"+"<span>"+P(this.opt("weekNumberTitle"))+"</span>"+"</th>":void 0},numberIntroHtml:function(t){return this.weekNumbersVisible?'<td class="fc-week-number" '+this.weekNumberStyleAttr()+">"+"<span>"+this.calendar.calculateWeekNumber(this.cellToDate(t,0))+"</span>"+"</td>":void 0},dayIntroHtml:function(){return this.weekNumbersVisible?'<td class="fc-week-number '+this.widgetContentClass+'" '+this.weekNumberStyleAttr()+"></td>":void 0},introHtml:function(){return this.weekNumbersVisible?'<td class="fc-week-number" '+this.weekNumberStyleAttr()+"></td>":void 0},numberCellHtml:function(t,e,n){var i;return this.dayNumbersVisible?(i=this.dayGrid.getDayClasses(n),i.unshift("fc-day-number"),'<td class="'+i.join(" ")+'" data-date="'+n.format()+'">'+n.date()+"</td>"):"<td/>"},weekNumberStyleAttr:function(){return null!==this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},hasRigidRows:function(){var t=this.opt("eventLimit");return t&&"number"!=typeof t},updateWidth:function(){this.weekNumbersVisible&&(this.weekNumberWidth=v(this.el.find(".fc-week-number")))},setHeight:function(t,e){var n,i=this.opt("eventLimit");w(this.scrollerEl),h(this.headRowEl),this.dayGrid.destroySegPopover(),i&&"number"==typeof i&&this.dayGrid.limitRows(i),n=this.computeScrollerHeight(t),this.setGridHeight(n,e),i&&"number"!=typeof i&&this.dayGrid.limitRows(i),!e&&y(this.scrollerEl,n)&&(u(this.headRowEl,b(this.scrollerEl)),n=this.computeScrollerHeight(t),this.scrollerEl.height(n),this.restoreScroll())},setGridHeight:function(t,e){e?m(this.dayGrid.rowEls):p(this.dayGrid.rowEls,t,!0)},renderEvents:function(t){this.dayGrid.renderEvents(t),this.updateHeight(),be.prototype.renderEvents.call(this,t)},getSegs:function(){return this.dayGrid.getSegs()},destroyEvents:function(){be.prototype.destroyEvents.call(this),this.recordScroll(),this.dayGrid.destroyEvents()},renderDrag:function(t,e,n){return this.dayGrid.renderDrag(t,e,n)},destroyDrag:function(){this.dayGrid.destroyDrag()},renderSelection:function(t,e){this.dayGrid.renderSelection(t,e)},destroySelection:function(){this.dayGrid.destroySelection()}}),r({fixedWeekCount:!0}),Ge.month=Te,Te.prototype=k(De.prototype),t.extend(Te.prototype,{name:"month",incrementDate:function(t,e){return t.clone().stripTime().add(e,"months").startOf("month")},render:function(t){var e;this.intervalStart=t.clone().stripTime().startOf("month"),this.intervalEnd=this.intervalStart.clone().add(1,"months"),this.start=this.intervalStart.clone(),this.start=this.skipHiddenDays(this.start),this.start.startOf("week"),this.start=this.skipHiddenDays(this.start),this.end=this.intervalEnd.clone(),this.end=this.skipHiddenDays(this.end,-1,!0),this.end.add((7-this.end.weekday())%7,"days"),this.end=this.skipHiddenDays(this.end,-1,!0),e=Math.ceil(this.end.diff(this.start,"weeks",!0)),this.isFixedWeeks()&&(this.end.add(6-e,"weeks"),e=6),this.title=this.calendar.formatDate(this.intervalStart,this.opt("titleFormat")),De.prototype.render.call(this,e,this.getCellsPerWeek(),!0)},setGridHeight:function(t,e){e=e||"variable"===this.opt("weekMode"),e&&(t*=this.rowCnt/6),p(this.dayGrid.rowEls,t,!e)},isFixedWeeks:function(){var t=this.opt("weekMode");return t?"fixed"===t:this.opt("fixedWeekCount")}}),Ge.basicWeek=Ce,Ce.prototype=k(De.prototype),t.extend(Ce.prototype,{name:"basicWeek",incrementDate:function(t,e){return t.clone().stripTime().add(e,"weeks").startOf("week")},render:function(t){this.intervalStart=t.clone().stripTime().startOf("week"),this.intervalEnd=this.intervalStart.clone().add(1,"weeks"),this.start=this.skipHiddenDays(this.intervalStart),this.end=this.skipHiddenDays(this.intervalEnd,-1,!0),this.title=this.calendar.formatRange(this.start,this.end.clone().subtract(1),this.opt("titleFormat")," — "),De.prototype.render.call(this,1,this.getCellsPerWeek(),!1)}}),Ge.basicDay=He,He.prototype=k(De.prototype),t.extend(He.prototype,{name:"basicDay",incrementDate:function(t,e){var n=t.clone().stripTime().add(e,"days");return n=this.skipHiddenDays(n,0>e?-1:1)},render:function(t){this.start=this.intervalStart=t.clone().stripTime(),this.end=this.intervalEnd=this.start.clone().add(1,"days"),this.title=this.calendar.formatDate(this.start,this.opt("titleFormat")),De.prototype.render.call(this,1,1,!1)}}),r({allDaySlot:!0,allDayText:"all-day",scrollTime:"06:00:00",slotDuration:"00:30:00",axisFormat:xe,timeFormat:{agenda:ke},minTime:"00:00:00",maxTime:"24:00:00",slotEventOverlap:!0});var Ue=5;Me.prototype=k(be.prototype),t.extend(Me.prototype,{timeGrid:null,dayGrid:null,axisWidth:null,noScrollRowEls:null,bottomRuleEl:null,bottomRuleHeight:null,render:function(e){this.rowCnt=1,this.colCnt=e,this.el.addClass("fc-agenda-view").html(this.renderHtml()),this.scrollerEl=this.el.find(".fc-time-grid-container"),this.timeGrid.coordMap.containerEl=this.scrollerEl,this.timeGrid.el=this.el.find(".fc-time-grid"),this.timeGrid.render(),this.bottomRuleEl=t('<hr class="'+this.widgetHeaderClass+'"/>').appendTo(this.timeGrid.el),this.dayGrid&&(this.dayGrid.el=this.el.find(".fc-day-grid"),this.dayGrid.render(),this.dayGrid.bottomCoordPadding=this.dayGrid.el.next("hr").outerHeight()),this.noScrollRowEls=this.el.find(".fc-row:not(.fc-scroller *)"),be.prototype.render.call(this),this.resetScroll()},destroy:function(){this.timeGrid.destroy(),this.dayGrid&&this.dayGrid.destroy(),be.prototype.destroy.call(this)},renderHtml:function(){return'<table><thead><tr><td class="'+this.widgetHeaderClass+'">'+this.timeGrid.headHtml()+"</td>"+"</tr>"+"</thead>"+"<tbody>"+"<tr>"+'<td class="'+this.widgetContentClass+'">'+(this.dayGrid?'<div class="fc-day-grid"/><hr class="'+this.widgetHeaderClass+'"/>':"")+'<div class="fc-time-grid-container">'+'<div class="fc-time-grid"/>'+"</div>"+"</td>"+"</tr>"+"</tbody>"+"</table>"},headIntroHtml:function(){var t,e,n,i;return this.opt("weekNumbers")?(t=this.cellToDate(0,0),e=this.calendar.calculateWeekNumber(t),n=this.opt("weekNumberTitle"),i=this.opt("isRTL")?e+n:n+e,'<th class="fc-axis fc-week-number '+this.widgetHeaderClass+'" '+this.axisStyleAttr()+">"+"<span>"+P(i)+"</span>"+"</th>"):'<th class="fc-axis '+this.widgetHeaderClass+'" '+this.axisStyleAttr()+"></th>"},dayIntroHtml:function(){return'<td class="fc-axis '+this.widgetContentClass+'" '+this.axisStyleAttr()+">"+"<span>"+(this.opt("allDayHtml")||P(this.opt("allDayText")))+"</span>"+"</td>"},slotBgIntroHtml:function(){return'<td class="fc-axis '+this.widgetContentClass+'" '+this.axisStyleAttr()+"></td>"},introHtml:function(){return'<td class="fc-axis" '+this.axisStyleAttr()+"></td>"},axisStyleAttr:function(){return null!==this.axisWidth?'style="width:'+this.axisWidth+'px"':""},updateSize:function(t){t&&this.timeGrid.resize(),be.prototype.updateSize.call(this,t)},updateWidth:function(){this.axisWidth=v(this.el.find(".fc-axis"))},setHeight:function(t,e){var n,i;null===this.bottomRuleHeight&&(this.bottomRuleHeight=this.bottomRuleEl.outerHeight()),this.bottomRuleEl.hide(),this.scrollerEl.css("overflow",""),w(this.scrollerEl),h(this.noScrollRowEls),this.dayGrid&&(this.dayGrid.destroySegPopover(),n=this.opt("eventLimit"),n&&"number"!=typeof n&&(n=Ue),n&&this.dayGrid.limitRows(n)),e||(i=this.computeScrollerHeight(t),y(this.scrollerEl,i)?(u(this.noScrollRowEls,b(this.scrollerEl)),i=this.computeScrollerHeight(t),this.scrollerEl.height(i),this.restoreScroll()):(this.scrollerEl.height(i).css("overflow","hidden"),this.bottomRuleEl.show()))},resetScroll:function(){function t(){n.scrollerEl.scrollTop(r)}var n=this,i=e.duration(this.opt("scrollTime")),r=this.timeGrid.computeTimeTop(i);r=Math.ceil(r),r&&r++,t(),setTimeout(t,0)},renderEvents:function(t){var e,n,i=[],r=[],s=[];for(n=0;t.length>n;n++)t[n].allDay?i.push(t[n]):r.push(t[n]);e=this.timeGrid.renderEvents(r),this.dayGrid&&(s=this.dayGrid.renderEvents(i)),this.updateHeight(),be.prototype.renderEvents.call(this,t)},getSegs:function(){return this.timeGrid.getSegs().concat(this.dayGrid?this.dayGrid.getSegs():[])},destroyEvents:function(){be.prototype.destroyEvents.call(this),this.recordScroll(),this.timeGrid.destroyEvents(),this.dayGrid&&this.dayGrid.destroyEvents()},renderDrag:function(t,e,n){return t.hasTime()?this.timeGrid.renderDrag(t,e,n):this.dayGrid?this.dayGrid.renderDrag(t,e,n):void 0},destroyDrag:function(){this.timeGrid.destroyDrag(),this.dayGrid&&this.dayGrid.destroyDrag()},renderSelection:function(t,e){t.hasTime()||e.hasTime()?this.timeGrid.renderSelection(t,e):this.dayGrid&&this.dayGrid.renderSelection(t,e)},destroySelection:function(){this.timeGrid.destroySelection(),this.dayGrid&&this.dayGrid.destroySelection()}}),Ge.agendaWeek=Re,Re.prototype=k(Me.prototype),t.extend(Re.prototype,{name:"agendaWeek",incrementDate:function(t,e){return t.clone().stripTime().add(e,"weeks").startOf("week")},render:function(t){this.intervalStart=t.clone().stripTime().startOf("week"),this.intervalEnd=this.intervalStart.clone().add(1,"weeks"),this.start=this.skipHiddenDays(this.intervalStart),this.end=this.skipHiddenDays(this.intervalEnd,-1,!0),this.title=this.calendar.formatRange(this.start,this.end.clone().subtract(1),this.opt("titleFormat")," — "),Me.prototype.render.call(this,this.getCellsPerWeek())}}),Ge.agendaDay=Pe,Pe.prototype=k(Me.prototype),t.extend(Pe.prototype,{name:"agendaDay",incrementDate:function(t,e){var n=t.clone().stripTime().add(e,"days");return n=this.skipHiddenDays(n,0>e?-1:1)},render:function(t){this.start=this.intervalStart=t.clone().stripTime(),this.end=this.intervalEnd=this.start.clone().add(1,"days"),this.title=this.calendar.formatDate(this.start,this.opt("titleFormat")),Me.prototype.render.call(this,1)}})});
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
(function(t,e){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,s){t.Backbone=e(t,s,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore");e(t,exports,i)}else{t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}})(this,function(t,e,i,r){var s=t.Backbone;var n=[];var a=n.push;var o=n.slice;var h=n.splice;e.VERSION="1.1.2";e.$=r;e.noConflict=function(){t.Backbone=s;return this};e.emulateHTTP=false;e.emulateJSON=false;var u=e.Events={on:function(t,e,i){if(!c(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,r){if(!c(this,"once",t,[e,r])||!e)return this;var s=this;var n=i.once(function(){s.off(t,n);e.apply(this,arguments)});n._callback=e;return this.on(t,n,r)},off:function(t,e,r){var s,n,a,o,h,u,l,f;if(!this._events||!c(this,"off",t,[e,r]))return this;if(!t&&!e&&!r){this._events=void 0;return this}o=t?[t]:i.keys(this._events);for(h=0,u=o.length;h<u;h++){t=o[h];if(a=this._events[t]){this._events[t]=s=[];if(e||r){for(l=0,f=a.length;l<f;l++){n=a[l];if(e&&e!==n.callback&&e!==n.callback._callback||r&&r!==n.context){s.push(n)}}}if(!s.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=o.call(arguments,1);if(!c(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)f(i,e);if(r)f(r,arguments);return this},stopListening:function(t,e,r){var s=this._listeningTo;if(!s)return this;var n=!e&&!r;if(!r&&typeof e==="object")r=this;if(t)(s={})[t._listenId]=t;for(var a in s){t=s[a];t.off(e,r,this);if(n||i.isEmpty(t._events))delete this._listeningTo[a]}return this}};var l=/\s+/;var c=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(l.test(i)){var n=i.split(l);for(var a=0,o=n.length;a<o;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var f=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,o);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e);return}};var d={listenTo:"on",listenToOnce:"once"};i.each(d,function(t,e){u[e]=function(e,r,s){var n=this._listeningTo||(this._listeningTo={});var a=e._listenId||(e._listenId=i.uniqueId("l"));n[a]=e;if(!s&&typeof r==="object")s=this;e[t](r,s,this);return this}});u.bind=u.on;u.unbind=u.off;i.extend(e,u);var p=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(p.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,r){var s,n,a,o,h,u,l,c;if(t==null)return this;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;a=r.unset;h=r.silent;o=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=i.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in n)this.id=n[this.idAttribute];for(s in n){e=n[s];if(!i.isEqual(c[s],e))o.push(s);if(!i.isEqual(l[s],e)){this.changed[s]=e}else{delete this.changed[s]}a?delete c[s]:c[s]=e}if(!h){if(o.length)this._pending=r;for(var f=0,d=o.length;f<d;f++){this.trigger("change:"+o[f],this,c[o[f]],r)}}if(u)return this;if(!h){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e,r=false;var s=this._changing?this._previousAttributes:this.attributes;for(var n in t){if(i.isEqual(s[n],e=t[n]))continue;(r||(r={}))[n]=e}return r},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var r=t.success;t.success=function(i){if(!e.set(e.parse(i,t),t))return false;if(r)r(e,i,t);e.trigger("sync",e,i,t)};q(this,t);return this.sync("read",this,t)},save:function(t,e,r){var s,n,a,o=this.attributes;if(t==null||typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r=i.extend({validate:true},r);if(s&&!r.wait){if(!this.set(s,r))return false}else{if(!this._validate(s,r))return false}if(s&&r.wait){this.attributes=i.extend({},o,s)}if(r.parse===void 0)r.parse=true;var h=this;var u=r.success;r.success=function(t){h.attributes=o;var e=h.parse(t,r);if(r.wait)e=i.extend(s||{},e);if(i.isObject(e)&&!h.set(e,r)){return false}if(u)u(h,t,r);h.trigger("sync",h,t,r)};q(this,r);n=this.isNew()?"create":r.patch?"patch":"update";if(n==="patch")r.attrs=s;a=this.sync(n,this,r);if(s&&r.wait)this.attributes=o;return a},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var s=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(t.wait||e.isNew())s();if(r)r(e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};if(this.isNew()){t.success();return false}q(this,t);var n=this.sync("delete",this,t);if(!t.wait)s();return n},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||M();if(this.isNew())return t;return t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var v=["keys","values","pairs","invert","pick","omit"];i.each(v,function(t){p.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.attributes);return i[t].apply(i,e)}});var g=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,remove:false};i.extend(g.prototype,u,{model:p,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,y))},remove:function(t,e){var r=!i.isArray(t);t=r?[t]:i.clone(t);e||(e={});var s,n,a,o;for(s=0,n=t.length;s<n;s++){o=t[s]=this.get(t[s]);if(!o)continue;delete this._byId[o.id];delete this._byId[o.cid];a=this.indexOf(o);this.models.splice(a,1);this.length--;if(!e.silent){e.index=a;o.trigger("remove",o,this,e)}this._removeReference(o,e)}return r?t[0]:t},set:function(t,e){e=i.defaults({},e,m);if(e.parse)t=this.parse(t,e);var r=!i.isArray(t);t=r?t?[t]:[]:i.clone(t);var s,n,a,o,h,u,l;var c=e.at;var f=this.model;var d=this.comparator&&c==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g=[],y=[],_={};var b=e.add,w=e.merge,x=e.remove;var E=!d&&b&&x?[]:false;for(s=0,n=t.length;s<n;s++){h=t[s]||{};if(h instanceof p){a=o=h}else{a=h[f.prototype.idAttribute||"id"]}if(u=this.get(a)){if(x)_[u.cid]=true;if(w){h=h===o?o.attributes:h;if(e.parse)h=u.parse(h,e);u.set(h,e);if(d&&!l&&u.hasChanged(v))l=true}t[s]=u}else if(b){o=t[s]=this._prepareModel(h,e);if(!o)continue;g.push(o);this._addReference(o,e)}o=u||o;if(E&&(o.isNew()||!_[o.id]))E.push(o);_[o.id]=true}if(x){for(s=0,n=this.length;s<n;++s){if(!_[(o=this.models[s]).cid])y.push(o)}if(y.length)this.remove(y,e)}if(g.length||E&&E.length){if(d)l=true;this.length+=g.length;if(c!=null){for(s=0,n=g.length;s<n;s++){this.models.splice(c+s,0,g[s])}}else{if(E)this.models.length=0;var k=E||g;for(s=0,n=k.length;s<n;s++){this.models.push(k[s])}}}if(l)this.sort({silent:true});if(!e.silent){for(s=0,n=g.length;s<n;s++){(o=g[s]).trigger("add",o,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return r?t[0]:t},reset:function(t,e){e||(e={});for(var r=0,s=this.models.length;r<s;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return o.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){if(i.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(i.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(i.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var r=this;t.success=function(i){var s=t.reset?"reset":"set";r[s](i,t);if(e)e(r,i,t);r.trigger("sync",r,i,t)};q(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var r=this;var s=e.success;e.success=function(t,i){if(e.wait)r.add(t,e);if(s)s(t,i,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof p)return t;e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_addReference:function(t,e){this._byId[t.cid]=t;if(t.id!=null)this._byId[t.id]=t;if(!t.collection)t.collection=this;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];i.each(_,function(t){g.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.models);return i[t].apply(i,e)}});var b=["groupBy","countBy","sortBy","indexBy"];i.each(b,function(t){g.prototype[t]=function(e,r){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,r)}});var w=e.View=function(t){this.cid=i.uniqueId("view");t||(t={});i.extend(this,i.pick(t,E));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];i.extend(w.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,i){if(this.$el)this.undelegateEvents();this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0];if(i!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=i.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[t[e]];if(!r)continue;var s=e.match(x);var n=s[1],a=s[2];r=i.bind(r,this);n+=".delegateEvents"+this.cid;if(a===""){this.$el.on(n,r)}else{this.$el.on(n,a,r)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");var r=e.$("<"+i.result(this,"tagName")+">").attr(t);this.setElement(r,false)}else{this.setElement(i.result(this,"el"),false)}}});e.sync=function(t,r,s){var n=T[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:n,dataType:"json"};if(!s.url){a.url=i.result(r,"url")||M()}if(s.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(s.attrs||r.toJSON(s))}if(s.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(s.emulateHTTP&&(n==="PUT"||n==="DELETE"||n==="PATCH")){a.type="POST";if(s.emulateJSON)a.data._method=n;var o=s.beforeSend;s.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",n);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!s.emulateJSON){a.processData=false}if(a.type==="PATCH"&&k){a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var h=s.xhr=e.ajax(i.extend(a,s));r.trigger("request",r,h,s);return h};var k=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var H=/(\(\?)?:\w+/g;var A=/\*\w+/g;var I=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,s){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){s=r;r=""}if(!s)s=this[r];var n=this;e.history.route(t,function(i){var a=n._extractParameters(t,i);n.execute(s,a);n.trigger.apply(n,["route:"+r].concat(a));n.trigger("route",r,a);e.history.trigger("route",n,r,a)});return this},execute:function(t,e){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(I,"\\$&").replace(S,"(?:$1)?").replace(H,function(t,e){return e?t:"([^/?]+)"}).replace(A,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];i.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var R=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(R,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment();var s=document.documentMode;var n=P.exec(navigator.userAgent.toLowerCase())&&(!s||s<=7);this.root=("/"+this.root+"/").replace(O,"/");if(n&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=a.hide().appendTo("body")[0].contentWindow;this.navigate(r)}if(this._hasPushState){e.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!n){e.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=r;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,true);this.location.replace(this.root+"#"+this.fragment);return true}else if(this._hasPushState&&this.atRoot()&&o.hash){this.fragment=this.getHash().replace(R,"");this.history.replaceState({},document.title,this.root+this.fragment)}}if(!this.options.silent)return this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return i.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var U=function(t,e){var r=this;var s;if(t&&i.has(t,"constructor")){s=t.constructor}else{s=function(){return r.apply(this,arguments)}}i.extend(s,r,e);var n=function(){this.constructor=s};n.prototype=r.prototype;s.prototype=new n;if(t)i.extend(s.prototype,t);s.__super__=r.prototype;return s};p.extend=g.extend=$.extend=w.extend=N.extend=U;var M=function(){throw new Error('A "url" property or function must be specified')};var q=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}};return e});
/*!
	Autosize 3.0.15
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);p=t.overflowY,"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),c="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(c)&&(c=0),i()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,p=t,f&&(e.style.overflowY=t),o()}function o(){var t=window.pageYOffset,n=document.body.scrollTop,o=e.style.height;e.style.height="auto";var i=e.scrollHeight+c;return 0===e.scrollHeight?void(e.style.height=o):(e.style.height=i+"px",v=e.clientWidth,document.documentElement.scrollTop=t,void(document.body.scrollTop=n))}function i(){var t=e.style.height;o();var i=window.getComputedStyle(e,null);if(i.height!==e.style.height?"visible"!==p&&n("visible"):"hidden"!==p&&n("hidden"),t!==e.style.height){var r=d("autosize:resized");e.dispatchEvent(r)}}var s=void 0===arguments[1]?{}:arguments[1],a=s.setOverflowX,l=void 0===a?!0:a,u=s.setOverflowY,f=void 0===u?!0:u;if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var c=null,p=null,v=e.clientWidth,h=function(){e.clientWidth!==v&&i()},y=function(t){window.removeEventListener("resize",h,!1),e.removeEventListener("input",i,!1),e.removeEventListener("keyup",i,!1),e.removeEventListener("autosize:destroy",y,!1),e.removeEventListener("autosize:update",i,!1),r["delete"](e),Object.keys(t).forEach(function(n){e.style[n]=t[n]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",y,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",i,!1),window.addEventListener("resize",h,!1),e.addEventListener("input",i,!1),e.addEventListener("autosize:update",i,!1),r.add(e),l&&(e.style.overflowX="hidden",e.style.wordWrap="break-word"),t()}}function o(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=d("autosize:destroy");e.dispatchEvent(t)}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=d("autosize:update");e.dispatchEvent(t)}}var r="function"==typeof Set?new Set:function(){var e=[];return{has:function(t){return Boolean(e.indexOf(t)>-1)},add:function(t){e.push(t)},"delete":function(t){e.splice(e.indexOf(t),1)}}}(),d=function(e){return new Event(e)};try{new Event("test")}catch(s){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var a=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(a=function(e){return e},a.destroy=function(e){return e},a.update=function(e){return e}):(a=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},a.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},a.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=a});
/*
	Redactor 10.2.3
	Updated: August 15, 2015

	http://imperavi.com/redactor/

	Copyright (c) 2009-2015, Imperavi LLC.
	License: http://imperavi.com/redactor/license/

	Usage: $('#content').redactor();
*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(C($){\'lC lA\';if(!js.5K.9T){js.5K.9T=C(jt){E fn=q;F C(){F fn.8E(jt)}}}E 2G=0;$.fn.I=C(3Y){E 2J=[];E jw=9i.5K.de.5Z(kU,1);if(1s 3Y===\'6W\'){q.1z(C(){E 6Z=$.1f(q,\'I\');E 1C;if(3Y.3L(/\\./)!=\'-1\'){1C=3Y.4p(\'.\');if(1s 6Z[1C[0]]!=\'1y\'){1C=6Z[1C[0]][1C[1]]}}M{1C=6Z[3Y]}if(1s 6Z!==\'1y\'&&$.5s(1C)){E bo=1C.8E(6Z,jw);if(bo!==1y&&bo!==6Z){2J.2R(bo)}}M{$.6X(\'lu lv aS "\'+3Y+\'" 2C 43\')}})}M{q.1z(C(){$.1f(q,\'I\',{});$.1f(q,\'I\',43(q,3Y))})}if(2J.12===0)F q;M if(2J.12===1)F 2J[0];M F 2J};C 43(el,3Y){F 29 43.5K.3N(el,3Y)}$.43=43;$.43.lI=\'10.2.3\';$.43.bI=[\'3a\',\'3o\',\'R\',\'28\',\'2r\',\'1u\',\'1T\',\'1v\',\'1d\',\'1W\',\'1o\',\'22\',\'2m\',\'N\',\'3B\',\'25\',\'1Y\',\'1D\',\'2x\',\'1H\',\'3M\',\'V\',\'2z\',\'2e\',\'1a\',\'1R\',\'2W\',\'5u\',\'3e\',\'5I\',\'J\',\'6i\',\'2I\',\'1I\',\'1B\',\'1w\',\'L\'];$.43.G={1H:\'en\',cX:\'lo\',8F:O,2m:O,ix:O,3e:O,6e:1r,6H:O,as:O,9O:O,1K:O,6r:1r,2W:1r,kG:O,bu:1r,jg:1r,gq:1r,hg:O,3o:O,bU:O,8M:60,bR:O,aF:O,jz:1r,5g:\'8U\',hd:O,dh:50,cA:1r,ij:1r,im:1r,8o:\'lT\',cE:1r,7J:4d,hH:\'22\',lZ:O,ht:1r,7D:4d,hJ:\'22\',hq:1r,7P:O,bs:1r,dk:1r,dj:1r,8C:1r,6T:4,aR:O,fw:1r,8h:O,1B:1r,fP:1r,6B:1k,6z:0,9M:O,fR:O,4B:1r,4k:[\'B\',\'3b\',\'4n\',\'4m\',\'5W\',\'5n\',\'5o\',\'7a\',\'3B\',\'N\',\'22\',\'V\',\'3a\',\'aE\'],dK:[],dW:[],3b:[\'p\',\'26\',\'2H\',\'h1\',\'h2\',\'h3\',\'h4\',\'h5\',\'h6\'],cu:O,2I:1r,49:[\'3V\',\'1p\'],4t:O,bL:[\'3T\',\'1j\',\'2H\',\'69\',\'3s\',\'ol\',\'h1\',\'h2\',\'h3\',\'h4\',\'h5\',\'h6\',\'dl\',\'26\',\'7G\',\'c4\',\'4h\',\'7S\',\'cR\',\'eC\',\'eH\',\'41\',\'1p\',\'3V\',\'4R\',\'7F\',\'3E\',\'2v\',\'1u\',\'3Z\',\'k7\',\'kS\',\'lR\',\'hr\',\'kd\',\'m0\',\'kY\',\'kZ\',\'70\',\'l0\',\'lk\',\'lb\',\'p\'],6C:O,5F:[[\'7U\',\'4l\'],[\'b\',\'5e\']],5r:[[\'3P-7z:\\\\s?4n\',"5e"],[\'3P-1p:\\\\s?4m\',"em"],[\'1g-80:\\\\s?5p\',"u"],[\'1g-80:\\\\s?3M-fc\',\'4l\']],5m:O,1L:O,4T:O,6N:[\'1i\'],3S:[\'p\'],bq:[\'5W\',\'4m\',\'4n\',\'5p\',\'5n\',\'5o\',\'l5\',\'lj\',\'l8\',\'9r\'],bJ:{b:\'4n\',5e:\'4n\',i:\'4m\',em:\'4m\',4l:\'5W\',7U:\'5W\',3s:\'5n\',ol:\'5o\',u:\'5p\'},6i:{\'4f+6L+m, 5k+6L+m\':{1C:\'25.c6\'},\'4f+b, 5k+b\':{1C:\'25.31\',6j:[\'4n\']},\'4f+i, 5k+i\':{1C:\'25.31\',6j:[\'4m\']},\'4f+h, 5k+h\':{1C:\'25.31\',6j:[\'eK\']},\'4f+l, 5k+l\':{1C:\'25.31\',6j:[\'eP\']},\'4f+k, 5k+k\':{1C:\'V.2O\'},\'4f+6L+7\':{1C:\'2e.3j\',6j:[\'5o\']},\'4f+6L+8\':{1C:\'2e.3j\',6j:[\'5n\']}},kH:O,28:[],9L:[],6s:\'<p>&#aZ;</p>\',5R:\'&#aZ;\',hQ:[\'N/j0\',\'N/lf\',\'N/jR\'],b7:20,c2:[\'a\',\'1M\',\'b\',\'5e\',\'7Z\',\'7V\',\'i\',\'em\',\'u\',\'9h\',\'7U\',\'4l\',\'9u\',\'3s\',\'ol\',\'li\'],4N:[\'5e\',\'b\',\'u\',\'em\',\'i\',\'1d\',\'4l\',\'ld\',\'bz\',\'aO\',\'7V\',\'7Z\',\'7O\',\'E\',\'9u\',\'9h\'],8q:[\'P\',\'ec\',\'e9\',\'e3\',\'ef\',\'eg\',\'ee\',\'le\',\'lc\',\'l9\',\'7p\',\'6w\',\'bd\',\'la\',\'hm\',\'lg\',\'lm\',\'l2\',\'l3\',\'nF\',\'n8\'],9a:[\'8P\',\'8y\',\'8t\',\'5y\'],cH:O,1R:{7r:[]},ku:{en:{B:\'n7\',6E:\'6x j5\',N:\'6x j7\',3T:\'bP\',V:\'bW\',bx:\'6x V\',dB:\'iY V\',6t:\'n6\',3b:\'n4\',kE:\'n9 1g\',e1:\'ne\',1d:\'jc\',iC:\'8Y 1\',fz:\'8Y 2\',fy:\'8Y 3\',fF:\'8Y 4\',fv:\'8Y 5\',4n:\'nb\',4m:\'n3\',mV:\'mU iL\',mR:\'mW iL\',5n:\'mX iO\',5o:\'n1 iO\',7a:\'mZ\',3B:\'mY\',iR:\'ng\',1Y:\'6x\',3m:\'nx\',ir:\'9y\',nv:\'6x bP\',nz:\'9m bO nE\',nD:\'9m bO nB\',nu:\'9m bK iT\',nt:\'9m bK iU\',nk:\'9y bK\',no:\'9y bO\',mj:\'9y bP\',mi:\'mh\',mf:\'mg\',mk:\'9m iH\',mp:\'9y iH\',1J:\'mn\',cP:\'mm\',5z:\'me\',2c:\'iT\',4z:\'iU\',5E:\'j4\',md:\'j7 m6 bW\',1g:\'m5\',d5:\'m4\',m2:\'cM\',m3:\'j5 m7 jc or m8/mc bW\',22:\'6x ma\',1w:\'m9\',mq:\'mr\',jb:\'mI\',mH:\'mG jb\',mF:\'iZ 22 j2\',fm:\'j3 1g iX iW 2c\',fs:\'j4 1g\',fI:\'j3 1g iX iW 4z\',fJ:\'mK 1g\',aE:\'6x mO mN\',5W:\'mM\',gg:\'mL\',at:\'mE V in 29 5C\',5p:\'mD\',3a:\'mw\',6h:\'mv (mu)\',7e:\'iY\',ev:\'iZ 22 j2 or \'}},2z:{4w:{6K:/5w?:\\/\\/(?:[0-9A-Z-]+\\.)?(?:mt\\.be\\/|6K\\.bw\\S*[^\\w\\-\\s])([\\w\\-]{11})(?=[^\\w\\-]|$)(?![?=&+%\\w.\\-]*(?:[\'"][^<>]*>|<\\/a>))[?=&+%\\w.-]*/ig,6F:/5w?:\\/\\/(7f\\.)?6F.bw\\/(\\d+)($|\\/)/,N:/((5w?|7f)[^\\s]+\\.)(mx?g|j0|jR)(\\?[^\\s-]+)?/ig,2h:/(5w?:\\/\\/(?:7f\\.|(?!7f))[^\\s\\.]+\\.[^\\s]{2,}|7f\\.[^\\s]+\\.[^\\s]{2,})/ig,}},8l:O};43.fn=$.43.5K={3t:{7x:8,8n:46,mC:38,ci:40,6R:13,kT:32,am:27,ce:9,fh:17,fg:91,fj:16,fi:18,g8:39,mA:37,iA:91},3N:C(el,3Y){q.$2k=$(el);q.2G=2G++;q.7k=O;q.$5b=O;q.kJ(3Y);q.kD();q.3b={};$.mz(q.G.9a,q.G.8q);q.hG=29 2l(\'^(\'+q.G.9a.3d(\'|\')+\')$\',\'i\');q.1I.jY();if(q.G.49!==O){E 2d=[\'B\',\'dO\',\'V\',\'3c\',\'5k\',\'my\'];2C(E i=0;i<2d.12;i++){q.G.49.2R(2d[i])}}q.1H.2K();$.7w(q.G.6i,q.G.kH);q.1W.2q(\'2b\');q.2b=1r;q.2r.es()},kJ:C(3Y){q.G=$.7w({},$.7w(1r,{},$.43.G),q.$2k.1f(),3Y)},cN:C(41){F gU.ms(41).dc(C(ab){F 1s 41[ab]==\'C\'})},kD:C(){E 2o=$.43.bI.12;2C(E i=0;i<2o;i++){q.kK($.43.bI[i])}},kK:C(6y){if(1s q[6y]==\'1y\')F;q[6y]=q[6y]();E 6l=q.cN(q[6y]);E 2o=6l.12;2C(E z=0;z<2o;z++){q[6y][6l[z]]=q[6y][6l[z]].9T(q)}},3a:C(){F{2c:C(){q.3a.1U(\'\')},4z:C(){q.3a.1U(\'4z\')},5E:C(){q.3a.1U(\'5E\')},9r:C(){q.3a.1U(\'9r\')},1U:C(1m){if(!q.L.1P(\'2F\'))q.$T.2m();q.28.1U();q.J.3m();q.3a.1Z=q.J.42();q.3a.1m=1m;if(q.3a.kw()){q.3a.k4()}M{q.3a.k3()}q.J.3g();q.1d.1S()},k4:C(){E 4P=q.J.62(\'1j\');$(4P).1c(\'1f-9z\',\'I\').1O(\'1g-5a\',q.3a.1m)},k3:C(){$.1z(q.3a.1Z,$.1e(C(i,el){E $el=q.L.bp(el);if(!$el)F;if(q.3a.jV($el)){q.3a.jT($el)}M{q.3a.k0($el)}},q))},kw:C(){F(q.G.1K&&q.3a.1Z[0]===O)},jV:C($el){F(q.3a.1m===\'\'&&1s($el.1f(\'9z\'))!==\'1y\')},jT:C($el){$el.2u($el.B())},k0:C($el){$el.1O(\'1g-5a\',q.3a.1m);q.L.5H($el,\'1p\')}}},3o:C(){F{B:O,a7:C(){if(!q.G.3o)F;q.3o.1x=(q.G.bU)?q.G.bU:q.$2v.1c(\'1x\');if(q.G.bR)F;q.8M=mo(q.3o.2K,q.G.8M*nr)},gr:C(){if(!q.G.bR)F;q.3o.2K()},2K:C(){if(!q.G.3o)F;q.3o.4B=q.1d.1b();if(q.3o.B===q.3o.4B)F;E 1f={};1f[\'1x\']=q.3o.1x;1f[q.3o.1x]=q.3o.4B;1f=q.3o.71(1f);E kk=$.ns({2h:q.G.3o,1m:\'nm\',1f:1f});kk.nC(q.3o.kt)},71:C(1f){if(q.G.aF===O||1s q.G.aF!==\'41\'){F 1f}$.1z(q.G.aF,$.1e(C(k,v){if(v!==4d&&v.4s().4I(\'#\')===0)v=$(v).2J();1f[k]=v},q));F 1f},kt:C(1f){E 2P;52{2P=$.iw(1f)}4U(e){2P=1f}E kg=(1s 2P.6X==\'1y\')?\'3o\':\'lO\';q.1W.2q(kg,q.3o.1x,2P);q.3o.B=q.3o.4B},lM:C(){i0(q.8M)}}},R:C(){F{3b:C(1x){q.R.a2=O;E 1m,1E;if(1s q.3b[1x].1f!=\'1y\')1m=\'1f\';M if(1s q.3b[1x].1c!=\'1y\')1m=\'1c\';M if(1s q.3b[1x][\'1G\']!=\'1y\')1m=\'1G\';if(1s q.3b[1x].9d!=\'1y\'){q.R.a2=1r}if(1m)1E=q.3b[1x][1m];q.R.31(q.3b[1x].Y,1m,1E)},31:C(Y,1m,1E){if(Y==\'e1\')Y=\'26\';E ke=[\'p\',\'2H\',\'26\',\'h1\',\'h2\',\'h3\',\'h4\',\'h5\',\'h6\'];if($.3q(Y,ke)==-1)F;q.R.8H=(Y==\'2H\'||Y.3L(/h[1-6]/i)!=-1);if(!q.L.1P(\'2F\'))q.$T.2m();E B=$.3k(q.$T.B());q.R.3z=q.L.3z(B);if(q.L.1P(\'4g\')&&!q.2m.cp()){if(q.R.3z){E $3H;if(!q.G.1K){$3H=q.$T.3O().3H();q.1T.3J($3H)}}}q.R.1Z=q.J.42();q.R.7i=q.R.1Z.12;q.R.1m=1m;q.R.1E=1E;q.28.1U();q.J.3m();q.R.1U(Y);q.J.3g();q.1d.1S();q.1R.2K()},1U:C(Y){q.J.1b();q.R.6c=q.14.kO.1n;if(q.14.4Y){q.R.kn(Y)}M{q.R.k9(Y)}},kn:C(Y){if(q.G.1K&&q.R.3z&&Y!=\'p\'){E Q=1k.3y(Y);q.$T.B(Q);q.1T.3J(Q);F}E R=q.R.1Z[0];if(R===O)F;if(R.1n==\'5y\'){if(Y!=\'26\')F;q.R.aB();F}E b0=(q.R.6c==\'6w\'||q.R.6c==\'cz\');if(b0&&!q.G.1K){1k.47(\'a0\',O,\'<\'+Y+\'>\');R=q.J.4a();q.R.3j($(R))}M if(R.1n.3f()!=Y){if(q.G.1K&&Y==\'p\'){$(R).1F(\'<br>\');q.L.6p(R)}M{E $1X=q.L.4J(R,Y);q.R.3j($1X);if(Y!=\'p\'&&Y!=\'26\')$1X.1h(\'1M\').1t();if(q.R.8H)q.L.56($1X);if(Y==\'p\'||q.R.bX)$1X.1h(\'p\').2a().44();q.R.bT($1X)}}M if(Y==\'26\'&&R.1n.3f()==Y){if(q.G.1K){$(R).1F(\'<br>\');q.L.6p(R)}M{E $el=q.L.4J(R,\'p\');q.R.3j($el)}}M if(R.1n.3f()==Y){q.R.3j($(R))}if(1s q.R.1m==\'1y\'&&1s q.R.1E==\'1y\'){$(R).1L(\'1G\').1L(\'1p\')}},k9:C(Y){E R=q.R.1Z[0];E b0=(q.R.6c==\'6w\'||q.R.6c==\'cz\');if(R!==O&&q.R.7i===1){if(R.1n.3f()==Y&&Y==\'26\'){if(q.G.1K){$(R).1F(\'<br>\');q.L.6p(R)}M{E $el=q.L.4J(R,\'p\');q.R.3j($el)}}M if(R.1n==\'5y\'){if(Y!=\'26\')F;q.R.aB()}M if(q.R.6c==\'bd\'){q.R.fE(Y)}M if(q.G.1K&&((b0)||(q.14.kO!=R))){q.R.ap(Y)}M{if(q.G.1K&&Y==\'p\'){$(R).6u(\'<br>\').1F(\'<br>\');q.L.6p(R)}M if(R.1n===\'6w\'){q.R.ap(Y)}M{E $1X=q.L.4J(R,Y);q.R.3j($1X);if(q.R.8H)q.L.56($1X);if(Y==\'p\'||q.R.bX)$1X.1h(\'p\').2a().44()}}}M{if(q.G.1K||Y!=\'p\'){if(Y==\'26\'){E bQ=0;2C(E i=0;i<q.R.7i;i++){if(q.R.1Z[i].1n==\'bd\')bQ++}if(bQ==q.R.7i){$.1z(q.R.1Z,$.1e(C(i,s){E $1X=O;if(q.G.1K){$(s).6u(\'<br>\').1F(\'<br>\');$1X=q.L.6p(s)}M{$1X=q.L.4J(s,\'p\')}if($1X&&1s q.R.1m==\'1y\'&&1s q.R.1E==\'1y\'){$1X.1L(\'1G\').1L(\'1p\')}},q));F}}q.R.ap(Y)}M{E 8V=0;E 5M=O;if(q.R.1m==\'1G\'){5M=\'3j\';8V=$(q.R.1Z).dc(\'.\'+q.R.1E).12;if(q.R.7i==8V)5M=\'3j\';M if(q.R.7i>8V)5M=\'1U\';M if(8V===0)5M=\'1U\'}E 8g=[\'3s\',\'ol\',\'li\',\'2Z\',\'5S\',\'dl\',\'dt\',\'dd\'];$.1z(q.R.1Z,$.1e(C(i,s){if($.3q(s.1n.3f(),8g)!=-1)F;E $1X=q.L.4J(s,Y);if(5M){if(5M==\'3j\')q.R.3j($1X);M if(5M==\'1t\')q.R.1t($1X);M if(5M==\'1U\')q.R.fH($1X)}M q.R.3j($1X);if(Y!=\'p\'&&Y!=\'26\')$1X.1h(\'1M\').1t();if(q.R.8H)q.L.56($1X);if(Y==\'p\'||q.R.bX)$1X.1h(\'p\').2a().44();if(1s q.R.1m==\'1y\'&&1s q.R.1E==\'1y\'){$1X.1L(\'1G\').1L(\'1p\')}},q))}}},fH:C($el){if(q.R.a2){$el.1L(\'1G\').1L(\'1p\')}if(q.R.1m==\'1G\'){$el.2f(q.R.1E);F}M if(q.R.1m==\'1c\'||q.R.1m==\'1f\'){$el.1c(q.R.1E.1x,q.R.1E.1E);F}},3j:C($el){if(q.R.a2){$el.1L(\'1G\').1L(\'1p\')}if(q.R.1m==\'1G\'){$el.7C(q.R.1E);F}M if(q.R.1m==\'1c\'||q.R.1m==\'1f\'){if($el.1c(q.R.1E.1x)==q.R.1E.1E){$el.1L(q.R.1E.1x)}M{$el.1c(q.R.1E.1x,q.R.1E.1E)}F}M{$el.1L(\'1p 1G\');F}},1t:C($el){$el.2U(q.R.1E)},aB:C(){E R=$(q.R.1Z[0]).2p(\'3s, ol\',q.$T[0]);$(R).1h(\'3s, ol\').2a().44();$(R).1h(\'li\').1F($(\'<br>\')).2a().44();E $el=q.L.4J(R,\'26\');q.R.3j($el)},fE:C(Y){1k.47(\'7a\');1k.47(\'a0\',O,Y);q.1v.4y();q.$T.1h(\'p:g2\').1t();E 1X=q.J.4a();if(Y!=\'p\'){$(1X).1h(\'1M\').1t()}if(!q.G.1K){q.R.3j($(1X))}q.$T.1h(\'3s, ol, 6S, 26, p\').1z($.1e(q.L.3S,q));if(q.G.1K&&Y==\'p\'){q.L.6p(1X)}},ap:C(Y){if(q.R.6c==\'8y\'||q.R.6c==\'8t\'){if(Y==\'26\'){q.R.aB()}M{F}}E 1X=q.J.62(Y);if(1X===O)F;E $1X=$(1X);q.R.bT($1X);E $fq=$1X.1h(q.G.9a.3d(\',\')+\', 2Z, 3T, dP, dJ, dQ, 5S, 6S\');$fq.2a().44();if(Y!=\'p\'&&Y!=\'26\')$1X.1h(\'1M\').1t();$.1z(q.R.1Z,$.1e(q.L.3S,q));$1X.1F(q.J.6Q(2));if(!q.G.1K){q.R.3j($1X)}q.$T.1h(\'3s, ol, 6S, 26, p\').1z($.1e(q.L.3S,q));$1X.1h(\'26:g2\').1t();if(q.R.8H){q.L.56($1X)}if(q.G.1K&&Y==\'p\'){q.L.6p($1X)}if(q.G.1K){E $1N=$1X.1N().1N();if($1N.82()!=0&&$1N[0].1n===\'5l\'){$1N.1t()}}},bT:C($1X){if($1X.2p(\'3T\',q.$T[0]).12===0)F;if($1X.2p(\'6S\',q.$T[0]).12===0)$1X.62(\'<6S>\');if($1X.2p(\'2Z\',q.$T[0]).12===0&&$1X.2p(\'5S\').12===0){$1X.62(\'<2Z>\')}},i6:C(1x,1E){E 1Z=q.J.42();$(1Z).1L(\'1f-\'+1x);q.1d.1S()},nj:C(1x,1E){E 1Z=q.J.42();$(1Z).1c(\'1f-\'+1x,1E);q.1d.1S()},nh:C(1x,1E){E 1Z=q.J.42();$.1z(1Z,C(){if($(q).1c(\'1f-\'+1x)){$(q).1L(\'1f-\'+1x)}M{$(q).1c(\'1f-\'+1x,1E)}})},1L:C(1c,1E){E 1Z=q.J.42();$(1Z).1L(1c);q.1d.1S()},nq:C(1c,1E){E 1Z=q.J.42();$(1Z).1c(1c,1E);q.1d.1S()},mQ:C(1c,1E){E 1Z=q.J.42();$.1z(1Z,C(){if($(q).1c(1x)){$(q).1L(1x)}M{$(q).1c(1x,1E)}})},2U:C(3G){E 1Z=q.J.42();$(1Z).2U(3G);q.L.5H(1Z,\'1G\');q.1d.1S()},8W:C(3G){E 1Z=q.J.42();$(1Z).2f(3G);q.1d.1S()},7C:C(3G){E 1Z=q.J.42();$(1Z).7C(3G);q.1d.1S()}}},28:C(){F{1U:C(1m){if(1s 1m==\'1y\'||1m==\'9v\'){q.28.fM()}M{q.28.fQ()}},fM:C(){q.J.3m();q.G.28.2R(q.$T.B());q.J.3g()},fQ:C(){q.J.3m();q.G.9L.2R(q.$T.B());q.J.3g()},fT:C(){q.$T.B(q.G.28.fV())},ez:C(){q.$T.B(q.G.9L.fV())},bZ:C(){q.G.28.2R(q.$T.B())},9v:C(){if(q.G.28.12===0)F;q.28.1U(\'bG\');q.28.fT();q.J.3g();3u($.1e(q.1R.2K,q),50)},bG:C(){if(q.G.9L.12===0)F;q.28.1U(\'9v\');q.28.ez();q.J.3g();3u($.1e(q.1R.2K,q),50)}}},2r:C(){F{es:C(){q.2r.eo();q.2r.eU();q.2r.eN();q.2r.f0();q.2r.et()},ay:C(){F(q.$2k[0].1n===\'n2\')},eo:C(){q.$2N=$(\'<1j 1G="I-2N" 9D="mB" />\')},eF:C(){q.$2v=$(\'<2v />\').1c(\'1x\',q.2r.ep())},ep:C(){F((1s(1x)==\'1y\'))?\'cT-\'+q.2G:q.$2k.1c(\'id\')},eU:C(){E 1C=(q.2r.ay())?\'2J\':\'B\';q.cT=$.3k(q.$2k[1C]())},f0:C(){q.$T.1c({\'5c\':1r,\'hR\':q.G.cX})},eN:C(){E 1C=(q.2r.ay())?\'eL\':\'eM\';q.2r[1C]()},eL:C(){q.$T=$(\'<1j />\');q.$2v=q.$2k;q.$2N.ex(q.$2k).1F(q.$T).1F(q.$2k);q.$T.2f(\'I-T\');q.$2k.3p()},eM:C(){q.$T=q.$2k;q.2r.eF();q.$2N.ex(q.$T).1F(q.$T).1F(q.$2v);q.$T.2f(\'I-T\');q.$2v.3p()},et:C(){q.1d.1U(q.cT);q.2r.hP();q.2r.hO();if(q.G.6e)F;3u($.1e(q.1d.ck,q),ag)},hO:C(){q.2r.it();q.2r.ii();q.2r.hx();q.2r.il();if(q.G.1B){q.G.1B=q.1B.3N();q.1B.2r()}q.1a.j9();q.2r.8F();3u($.1e(q.1R.2K,q),4);q.1W.2q(\'3N\')},hP:C(){$(q.$2v).1c(\'hR\',q.G.cX);if(q.G.1K)q.$T.2f(\'I-1K\');if(q.G.6H)q.$T.1c(\'6H\',q.G.6H);if(q.G.as)q.$T.1O(\'as\',q.G.as);if(q.G.9O)q.$T.1O(\'9O\',q.G.9O)},hD:C(e){e.2t();if(!q.G.ht||!q.G.hq)F;E 5T=e.9Z.5T;q.1w.hL(5T[0],e)},hy:C(e){q.1d.1S();3u(q.1v.4y,1);q.1W.2q(\'58\',e)},hx:C(){q.$T.on(\'58.I\',$.1e(C(e){e=e.87||e;if(3l.9V===1y||!e.9Z)F 1r;if(e.9Z.5T.12===0){F q.2r.hy(e)}M{q.2r.hD(e)}3u(q.1v.4y,1);q.1W.2q(\'58\',e)},q));q.$T.on(\'2A.I\',$.1e(C(e){E 8c=q.1W.76();E 1m=(8c==\'2A\'||8c==\'57\')?O:\'2A\';q.1W.9k(1m);q.L.8u();q.1W.2q(\'2A\',e)},q));q.$T.on(\'5u.I\',$.1e(q.5u.3N,q));q.$T.on(\'np.I\',$.1e(q.1d.1S,q));q.$T.on(\'1D.I\',$.1e(q.1D.3N,q));q.$T.on(\'2x.I\',$.1e(q.2x.3N,q));if($.5s(q.G.hW)){q.$2v.on(\'1D.I-2v\',$.1e(q.G.hW,q))}if($.5s(q.G.hX)){q.$2v.on(\'2x.I-2v\',$.1e(q.G.hX,q))}q.$T.on(\'2m.I\',$.1e(C(e){if($.5s(q.G.nn))q.1W.2q(\'2m\',e);if(q.J.3v()===O){q.J.1b();q.14.2Q(q.$T[0],0);q.14.3J(q.$T[0],0);q.J.4b()}},q));$(1k).on(\'68.I-ct.\'+q.2G,$.1e(C(e){if(q.2b)F;if(q.7k)F;if($(e.1Q).2p(\'.I-T, .I-1B, .I-1o\').82()!==0){F}q.L.8u();if($.5s(q.G.ni))q.1W.2q(\'ct\',e)},q))},il:C(){if(q.2z.b6()){q.2z.31()}q.3e.a7();if(q.G.2m)3u(q.2m.2Q,6G);if(q.G.ix)3u(q.2m.3J,6G)},8F:C(){if(!q.G.8F)F;$.1z(q.G.8F,$.1e(C(i,s){E 1C=(1s cO!==\'1y\'&&1s cO[s]!==\'1y\')?cO:43.fn;if(!$.5s(1C[s])){F}q[s]=1C[s]();E 6l=q.cN(q[s]);E 2o=6l.12;2C(E z=0;z<2o;z++){q[s][6l[z]]=q[s][6l[z]].9T(q)}if($.5s(q[s].3N)){q[s].3N()}},q))},it:C(){if(!q.L.1P(\'4g\'))F;52{1k.47(\'nw\',O,O);1k.47(\'ny\',O,O)}4U(e){}},ii:C(){if(!q.L.1P(\'2F\'))F;1k.47("nf",O,O)}}},1u:C(){F{2r:C(2i,2T){E $1u=$(\'<a 2j="#" 1G="3I-8f 3I-\'+2i+\'" 3X="\'+2i+\'" />\').1c({\'9D\':\'1u\',\'4Q-2M\':2T.1J,\'6H\':\'-1\'});if(2T.1C||2T.4x||2T.1o){q.1u.ih($1u,2i,2T)}if(2T.1o){$1u.2f(\'I-1B-V-1o\').1c(\'4Q-i9\',1r);E $1o=$(\'<1j 1G="I-1o I-1o-\'+q.2G+\' I-1o-2N-\'+2i+\'" 1p="72: 5z;">\');$1u.1f(\'1o\',$1o);q.1o.2r(2i,$1o,2T.1o)}if(q.L.7n()){q.1u.i3($1u,2i,2T.1J)}F $1u},ih:C($1u,2i,2T){$1u.on(\'5B 2A\',$.1e(C(e){if($1u.3r(\'I-1u-7c\'))F O;E 1m=\'1C\';E 2y=2T.1C;if(2T.4x){1m=\'4x\';2y=2T.4x}M if(2T.1o){1m=\'1o\';2y=O}q.1u.9X(e,2i,1m,2y)},q))},i3:C($1u,1x,1J){E $3n=$(\'<1i>\').2f(\'I-1B-3n I-1B-3n-\'+q.2G+\' I-1B-3n-\'+1x).3p().B(1J);$3n.ax(\'3c\');$1u.on(\'a8\',C(){if($(q).3r(\'I-1u-7c\'))F;E 3x=$1u.2D();$3n.2O();$3n.1O({2X:(3x.2X+$1u.6b())+\'px\',2c:(3x.2c+$1u.7t()/2-$3n.7t()/2)+\'px\'})});$1u.on(\'a9\',C(){$3n.3p()})},9X:C(e,2i,1m,2y){q.1u.n0=q.1T.an();e.2t();$(1k).1h(\'.I-1B-3n\').3p();if(q.L.1P(\'2F\'))e.8s=O;if(1m==\'4x\')q.25.31(2y);M if(1m==\'1o\')q.1o.2O(e,2i);M q.1u.i4(e,2y,2i)},i4:C(e,2y,2i){E 1C;if($.5s(2y))2y.5Z(q,2i);M if(2y.3L(/\\./)!=\'-1\'){1C=2y.4p(\'.\');if(1s q[1C[0]]==\'1y\')F;q[1C[0]][1C[1]](2i)}M q[2y](2i);q.1R.4k(e,2i)},1b:C(1l){F q.$1B.1h(\'a.3I-\'+1l)},8j:C(1l){q.1u.1b(1l).2f(\'I-8K\')},gD:C(1l){q.1u.1b(1l).2U(\'I-8K\')},bV:C(1l){if(1s 1l===\'1y\'){q.$1B.1h(\'a.3I-8f\').2U(\'I-8K\')}M{q.$1B.1h(\'a.3I-8f\').6q(\'.3I-\'+1l).2U(\'I-8K\')}},gI:C(){q.$1B.1h(\'a.3I-8f\').6q(\'a.3I-B, a.3I-i2\').2U(\'I-1u-7c\')},gc:C(){q.$1B.1h(\'a.3I-8f\').6q(\'a.3I-B, a.3I-i2\').2f(\'I-1u-7c\')},mS:C(1l,aP){q.1u.1b(1l).2f(\'3I-\'+aP)},mT:C(1l,aP){q.1u.1b(1l).2U(\'3I-\'+aP)},m1:C(1l,1x){E $1u=q.1u.1b(1l);$1u.2U(\'I-23-N\').2f(\'fa-I-23\');$1u.B(\'<i 1G="fa \'+1x+\'"></i>\')},cL:C($23,2y){if($23=="28")F;E 1m=(2y==\'1o\')?\'1o\':\'1C\';E 1l=$23.1c(\'3X\');$23.on(\'5B 2A\',$.1e(C(e){if($23.3r(\'I-1u-7c\'))F O;q.1u.9X(e,1l,1m,2y)},q))},dn:C($23,1o){$23.2f(\'I-1B-V-1o\').1c(\'4Q-i9\',1r);E 1l=$23.1c(\'3X\');q.1u.cL($23,\'1o\');E $1o=$(\'<1j 1G="I-1o I-1o-\'+q.2G+\' I-1o-2N-\'+1l+\'" 1p="72: 5z;">\');$23.1f(\'1o\',$1o);if(1o)q.1o.2r(1l,$1o,1o);F $1o},bZ:C(1l,1J){if(!q.G.1B)F;if(q.1u.8J(1l))F"28";E 23=q.1u.2r(1l,{1J:1J});23.2f(\'I-23-N\');q.$1B.1F($(\'<li>\').1F(23));F 23},nc:C(1l,1J){if(!q.G.1B)F;if(q.1u.8J(1l))F"28";E 23=q.1u.2r(1l,{1J:1J});23.2f(\'I-23-N\');q.$1B.6u($(\'<li>\').1F(23));F 23},na:C(ho,1l,1J){if(!q.G.1B)F;if(q.1u.8J(1l))F"28";E 23=q.1u.2r(1l,{1J:1J});23.2f(\'I-23-N\');E $23=q.1u.1b(ho);if($23.12!==0)$23.1q().3C($(\'<li>\').1F(23));M q.$1B.1F($(\'<li>\').1F(23));F 23},n5:C(gA,1l,1J){if(!q.G.1B)F;if(q.1u.8J(1l))F"28";E 23=q.1u.2r(1l,{1J:1J});23.2f(\'I-23-N\');E $23=q.1u.1b(gA);if($23.12!==0)$23.1q().bi($(\'<li>\').1F(23));M q.$1B.1F($(\'<li>\').1F(23));F 23},1t:C(1l){q.1u.1b(1l).1t()},8J:C(1l){F(1l=="9v"||1l=="bG")&&!q.L.7n()}}},1T:C(){F{2Q:C(Q){if(!q.L.6J(Q)){E 3h=q.L.aN();$(Q).6u(3h);q.1T.3J(3h)}M{q.1T.1U(Q,0,Q,0)}},3J:C(Q){Q=Q[0]||Q;if(Q.gz.bH==1){F q.1T.55(Q.gz)}q.1T.1U(Q,1,Q,1)},1U:C(4O,gv,7o,gw){4O=4O[0]||4O;7o=7o[0]||7o;if(q.L.7L(4O.1n)&&4O.3A===\'\'){4O.3A=q.G.5R}if(4O.1n==\'5l\'&&q.G.1K===O){E 1q=$(q.G.6s)[0];$(4O).2u(1q);4O=1q;7o=4O}q.J.1b();52{q.14.2Q(4O,gv);q.14.3J(7o,gw)}4U(e){}q.J.4b()},55:C(Q){52{E Y=$(Q)[0].1n;if(Y!=\'5l\'&&!q.L.6J(Q)){E 3h=q.L.aN();$(Q).3C(3h);q.1T.3J(3h)}M{if(Y!=\'5l\'&&q.L.1P(\'2F\')){q.1T.2Q($(Q).1N())}M{q.1T.db(Q,\'3C\')}}}4U(e){E 3h=q.L.aN();$(Q).3C(3h);q.1T.3J(3h)}},cd:C(Q){if(q.L.6J(Q)){q.1T.3J($(Q).4D())}M{q.1T.db(Q,\'bi\')}},db:C(Q,1m){if(!q.L.1P(\'2F\'))q.$T.2m();Q=Q[0]||Q;q.J.1b();if(1m==\'3C\'){52{q.14.9p(Q);q.14.l6(Q)}4U(e){}}M{52{q.14.l4(Q);q.14.jL(Q)}4U(e){}}q.14.48(O);q.J.4b()},8D:C(Q){Q=Q[0]||Q;q.J.1b();E aQ=q.14.7I();aQ.95(Q);aQ.3J(q.14.cG,q.14.d8);F $.3k(aQ.4s()).12},an:C(){E 2D=0;E 2V=3l.4E();if(2V.7b>0){E 14=3l.4E().6f(0);E aH=14.7I();aH.95(q.$T[0]);aH.3J(14.cG,14.d8);2D=aH.4s().12}F 2D},dC:C(2b,2g){if(1s 2g==\'1y\')2g=2b;if(!q.2m.cp())q.2m.2Q();E 2V=q.J.1b();E Q,2D=0;E ge=1k.ll(q.$T[0],ln.kX,4d,4d);53(Q==ge.kV()){2D+=Q.6o.12;if(2D>2b){q.14.2Q(Q,Q.6o.12+2b-2D);2b=l1}if(2D>=2g){q.14.3J(Q,Q.6o.12+2g-2D);6k}}q.14.48(O);q.J.4b()},l7:C(2b,2g){q.1T.dC(2b,2g)},kW:C(){F q.1T.an()}}},1v:C(){F{go:C(B){B=q.1v.h7(B);B=B.K(/<3V(.*?[^>]?)>([\\w\\W]*?)<\\/3V>/gi,\'<2H 1G="I-3V-Y" 1p="72: 5z;" $1>$2</2H>\');B=B.K(/\\$/g,\'&#36;\');B=B.K(/<a 2j="(.*?[^>]?)®(.*?[^>]?)">/gi,\'<a 2j="$1&lh$2">\');if(q.G.6r&&!q.G.1K)B=q.1v.6r(B);if(q.G.1K)B=q.1v.9q(B);B=q.1v.c0(B);E $1j=$(\'<1j>\');$1j.B(B);E d6=$1j.1h(\'3P[1p]\');if(d6.12!==0){d6.2u(C(){E $el=$(q);E $1i=$(\'<1i>\').1c(\'1p\',$el.1c(\'1p\'));F $1i.1F($el.2a())});B=$1j.B()}$1j.1t();B=B.K(/<3P(.*?)>/gi,\'\');B=B.K(/<\\/3P>/gi,\'\');B=q.1I.2K(B);if(q.G.2W)B=q.2W.2K(B);B=q.1v.7Q(B);B=q.1v.c1(B);B=B.K(/&9F;/g,\'&\');F B},9Y:C(B){B=B.K(/\\5X/g,\'\');B=B.K(/&#aZ;/gi,\'\');if(q.G.gq){B=B.K(/&5i;/gi,\' \')}if(B.3L(/^<p>(||\\s||<br\\s?\\/?>||&5i;)<\\/p>$/i)!=-1){F\'\'}B=B.K(/<2H 1G="I-3V-Y" 1p="72: 5z;"(.*?[^>]?)>([\\w\\W]*?)<\\/2H>/gi,\'<3V$1>$2</3V>\');B=q.1v.gm(B);E gL={\'\\lP\':\'&lQ;\',\'\\lN\':\'&lJ;\',\'\\lK\':\'&lL;\',\'\\lS\':\'&lY;\',\'\\lX\':\'&lW;\'};$.1z(gL,C(i,s){B=B.K(29 2l(i,\'g\'),s)});if(q.L.1P(\'4g\')){B=B.K(/<br\\s?\\/?>$/gi,\'\')}B=B.K(29 2l(\'<br\\\\s?/?></li>\',\'gi\'),\'</li>\');B=B.K(29 2l(\'</li><br\\\\s?/?>\',\'gi\'),\'</li>\');B=B.K(/<(.*?)3X="\\s*?"(.*?[^>]?)>/gi,\'<$1$2">\');B=B.K(/<(.*?)1p="\\s*?"(.*?[^>]?)>/gi,\'<$1$2">\');B=B.K(/="">/gi,\'>\');B=B.K(/""">/gi,\'">\');B=B.K(/"">/gi,\'">\');B=B.K(/<1j(.*?)1f-9z="I"(.*?[^>])>/gi,\'<1j$1$2>\');B=B.K(/<(.*?) 1f-3K="I"(.*?[^>])>/gi,\'<$1$2>\');E $1j=$("<1j/>").B($.ei(B,1k,1r));$1j.1h("1i").1L("3X");$1j.1h(\'2H .I-7H-3h\').1z(C(){$(q).2a().44()});B=$1j.B();B=B.K(/<1M(.*?[^>])3X="(.*?[^>])"(.*?[^>])>/gi,\'<1M$1$3>\');B=B.K(/<1i 1G="I-7H-3h">(.*?)<\\/1i>/gi,\'$1\');B=B.K(/ 1f-3m-2h="(.*?[^>])"/gi,\'\');B=B.K(/<1i(.*?)id="I-N-2N"(.*?[^>])>([\\w\\W]*?)<1M(.*?)><\\/1i>/gi,\'$3<1M$4>\');B=B.K(/<1i(.*?)id="I-N-9g"(.*?[^>])>(.*?)<\\/1i>/gi,\'\');B=B.K(/<1i(.*?)id="I-N-5D"(.*?[^>])>(.*?)<\\/1i>/gi,\'\');B=B.K(/<3P(.*?)>/gi,\'\');B=B.K(/<\\/3P>/gi,\'\');B=q.1I.2K(B);if(q.G.hd){B=B.K(/<a(.*?)3X="hb"(.*?[^>])>/gi,\'<a$1$2>\');B=B.K(/<a(.*?[^>])>/gi,\'<a$1 3X="hb">\')}B=B.K(/\\lU-I-(Y|1G|1p)="(.*?[^>])"/gi,\'\');B=B.K(29 2l(\'<(.*?) 1f-3K="I"(.*?[^>])>\',\'gi\'),\'<$1$2>\');B=B.K(29 2l(\'<(.*?) 1f-3K="I">\',\'gi\'),\'<$1>\');B=B.K(/&9F;/g,\'&\');F B},8B:C(B,9b){B=$.3k(B);B=B.K(/\\$/g,\'&#36;\');B=B.K(/<1i 1G="s[0-9]">/gi,\'<1i>\');B=B.K(/<1i 1G="ha-lV-3h">&5i;<\\/1i>/gi,\' \');B=B.K(/<1i 1G="ha-5C-1i"[^>]*>\\t<\\/1i>/gi,\'\\t\');B=B.K(/<1i[^>]*>(\\s|&5i;)<\\/1i>/gi,\' \');if(q.G.hg){F q.1v.aC(B)}if(!q.L.8m()&&1s 9b==\'1y\'){if(q.L.4Z([\'hm\',\'A\'])){F q.1v.aC(B,O)}if(q.L.4Z(\'8P\')){B=B.K(/”/g,\'"\');B=B.K(/“/g,\'"\');B=B.K(/‘/g,\'\\\'\');B=B.K(/’/g,\'\\\'\');F q.1v.hl(B)}if(q.L.4Z([\'bd\',\'ec\',\'e9\',\'e3\',\'ef\',\'eg\',\'ee\'])){B=q.1v.hf(B);if(!q.L.1P(\'2F\')){E R=q.J.4a();if(R&&R.1n==\'P\'){B=B.K(/<1M(.*?)>/gi,\'<p><1M$1></p>\')}}F B}if(q.L.4Z([\'6w\'])){B=q.1v.aI(B,\'2Z\');if(q.G.1K)B=q.1v.9q(B);B=q.1v.gn(B);F B}if(q.L.4Z([\'5y\'])){F q.1v.aI(B,\'li\')}}B=q.1v.gM(B,9b);if(!q.1v.9l){if(q.G.1K)B=q.1v.9q(B);if(q.G.6r)B=q.1v.6r(B);B=q.1v.c0(B)}B=q.1v.hk(B);B=q.1v.gV(B);B=q.1v.aI(B,\'h0\');if(!q.1v.9l&&q.G.2W){B=q.2W.2K(B)}B=q.1v.he(B);B=q.1v.gO(B);B=q.1v.gT(B);B=q.1v.c1(B);F B},hk:C(B){B=B.K(/<!--[\\s\\S]*?-->/gi,\'\');B=B.K(/<1p[^>]*>[\\s\\S]*?<\\/1p>/gi,\'\');B=B.K(/<o\\:p[^>]*>[\\s\\S]*?<\\/o\\:p>/gi,\'\');if(B.1V(/1G="?gY|1p="[^"]*\\hj-|1p=\'[^\'\']*\\hj-|w:lH/i)){B=B.K(/<!--[\\s\\S]+?-->/gi,\'\');B=B.K(/<(!|3V[^>]*>.*?<\\/3V(?=[>\\s])|\\/?(\\?lx(:\\w+)?|1M|5k|V|1p|\\w:\\w+)(?=[\\s\\/>]))[^>]*>/gi,\'\');B=B.K(/<(\\/?)s>/gi,"<$lp>");B=B.K(/ /gi,\' \');B=B.K(/<1i\\s+1p\\s*=\\s*"\\s*aL-lq\\s*:\\s*lr\\s*;?\\s*"\\s*>([\\s\\bg]*)<\\/1i>/gi,C(5h,bc){F(bc.12>0)?bc.K(/./," ").de(8p.ly(bc.12/2)).4p("").3d("\\bg"):\'\'});B=q.1v.gN(B);B=B.K(/<1M(.*?)v:lz=(.*?)>/gi,\'\');B=B.K(/4r="22\\:\\/\\/(.*?)"/,\'4r=""\');E $1j=$("<1j/>").B(B);E 5V=O;E 9K=1;E d7=[];$1j.1h("p[1p]").1z(C(){E 3Q=$(q).1c(\'1p\').1V(/aL\\-2e\\:l([0-9]+)\\lF([0-9]+)/);if(3Q){E 64=5J(3Q[1]);E 5U=5J(3Q[2]);E da=$(q).B().1V(/^[\\w]+\\./)?"ol":"3s";E $li=$("<li/>").B($(q).B());$li.B($li.B().K(/^([\\w\\.]+)</,\'<\'));$li.1h("1i:3H").1t();if(5U==1&&$.3q(64,d7)==-1){E $2e=$("<"+da+"/>").1c({"1f-7s":5U,"1f-2e":64}).B($li);$(q).2u($2e);5V=64;d7.2R(64)}M{if(5U>9K){E $b1=$1j.1h(\'[1f-7s="\'+9K+\'"][1f-2e="\'+5V+\'"]\');E $5V=$b1;2C(E i=9K;i<5U;i++){$2e=$("<"+da+"/>");$2e.ax($5V.1h("li").30());$5V=$2e}$5V.1c({"1f-7s":5U,"1f-2e":64}).B($li)}M{E $b1=$1j.1h(\'[1f-7s="\'+5U+\'"][1f-2e="\'+64+\'"]\').30();$b1.1F($li)}9K=5U;5V=64;$(q).1t()}}});$1j.1h(\'[1f-7s][1f-2e]\').1L(\'1f-7s 1f-2e\');B=$1j.B();B=B.K(/·/g,\'\');B=B.K(/<p 1G="gY(.*?)"/gi,\'<p\');B=B.K(/ 1G=\\"(aL[^\\"]*)\\"/gi,"");B=B.K(/ 1G=(aL\\w+)/gi,"");B=B.K(/<o:p(.*?)>([\\w\\W]*?)<\\/o:p>/gi,\'$2\');B=B.K(/\\n/g,\' \');B=B.K(/<p>\\n?<li>/gi,\'<li>\')}F B},gV:C(B){B=B.K(/<b\\lB="gW-4B-2s(.*?)">([\\w\\W]*?)<\\/b>/gi,"$2");B=B.K(/<b(.*?)id="lw-gW-nL(.*?)">([\\w\\W]*?)<\\/b>/gi,"$3");B=B.K(/<1i[^>]*(3P-1p: 4m; 3P-7z: 4n|3P-7z: 4n; 3P-1p: 4m)[^>]*>/gi,\'<1i 1p="3P-7z: 4n;"><1i 1p="3P-1p: 4m;">\');B=B.K(/<1i[^>]*3P-1p: 4m[^>]*>/gi,\'<1i 1p="3P-1p: 4m;">\');B=B.K(/<1i[^>]*3P-7z: 4n[^>]*>/gi,\'<1i 1p="3P-7z: 4n;">\');B=B.K(/<1i[^>]*1g-80: 5p[^>]*>/gi,\'<1i 1p="1g-80: 5p;">\');B=B.K(/<1M>/gi,\'\');B=B.K(/\\n{3,}/gi,\'\\n\');B=B.K(/<3P(.*?)>([\\w\\W]*?)<\\/3P>/gi,\'$2\');B=B.K(/<p><p>/gi,\'<p>\');B=B.K(/<\\/p><\\/p>/gi,\'</p>\');B=B.K(/<li>(\\s*|\\t*|\\n*)<p>/gi,\'<li>\');B=B.K(/<\\/p>(\\s*|\\t*|\\n*)<\\/li>/gi,\'</li>\');B=B.K(/<\\/p>\\s<p/gi,\'<\\/p><p\');B=B.K(/<1M 4r="89-qp-2h\\:\\/\\/(.*?)"(.*?)>/gi,\'\');B=B.K(/<p>•([\\w\\W]*?)<\\/p>/gi,\'<li>$1</li>\');if(q.L.1P(\'4g\')){B=B.K(/<br\\s?\\/?>$/gi,\'\')}F B},aI:C(B,1m){E 2d=[\'1i\',\'a\',\'2H\',\'26\',\'9h\',\'em\',\'5e\',\'1d\',\'aO\',\'7O\',\'c4\',\'9u\',\'E\',\'bz\',\'cc\',\'7V\',\'7Z\',\'b\',\'i\',\'u\',\'4l\',\'ol\',\'3s\',\'li\',\'dl\',\'dt\',\'dd\',\'p\',\'br\',\'6E\',\'9C\',\'4R\',\'7g\',\'9I\',\'41\',\'1M\',\'3T\',\'2Z\',\'5S\',\'6S\',\'dJ\',\'dQ\',\'dP\',\'h1\',\'h2\',\'h3\',\'h4\',\'h5\',\'h6\'];E ca=O;E cb=[[\'a\',\'*\'],[\'1M\',[\'4r\',\'7l\']],[\'1i\',[\'1G\',\'3X\',\'1f-3K\']],[\'4R\',\'*\'],[\'6E\',\'*\'],[\'9C\',\'*\'],[\'7g\',\'*\'],[\'41\',\'*\'],[\'9I\',\'*\'],[\'4B\',\'*\']];if(1m==\'h0\'){ca=[\'p\',\'1i\',\'h1\',\'h2\',\'h3\',\'h4\',\'h5\',\'h6\'];cb=[[\'3T\',\'1G\'],[\'2Z\',[\'qM\',\'qE\']],[\'a\',\'*\'],[\'1M\',[\'4r\',\'7l\',\'1f-I-9J-N\']],[\'1i\',[\'1G\',\'3X\',\'1f-3K\']],[\'4R\',\'*\'],[\'6E\',\'*\'],[\'9C\',\'*\'],[\'7g\',\'*\'],[\'41\',\'*\'],[\'9I\',\'*\'],[\'4B\',\'*\']]}M if(1m==\'2Z\'){2d=[\'3s\',\'ol\',\'li\',\'1i\',\'a\',\'9h\',\'em\',\'5e\',\'1d\',\'aO\',\'7O\',\'9u\',\'E\',\'bz\',\'cc\',\'7V\',\'7Z\',\'b\',\'i\',\'u\',\'4l\',\'ol\',\'3s\',\'li\',\'dl\',\'dt\',\'dd\',\'br\',\'4R\',\'6E\',\'9C\',\'7g\',\'9I\',\'41\',\'1M\',\'h1\',\'h2\',\'h3\',\'h4\',\'h5\',\'h6\']}M if(1m==\'li\'){2d=[\'3s\',\'ol\',\'li\',\'1i\',\'a\',\'9h\',\'em\',\'5e\',\'1d\',\'aO\',\'7O\',\'9u\',\'E\',\'bz\',\'cc\',\'7V\',\'7Z\',\'b\',\'i\',\'u\',\'4l\',\'br\',\'4R\',\'6E\',\'9C\',\'7g\',\'9I\',\'41\',\'1M\']}E 3Y={49:(q.G.49)?q.G.49:O,4t:(q.G.4t)?q.G.4t:2d,6C:1r,pG:1r,1L:(q.G.1L)?q.G.1L:O,4T:(q.G.4T)?q.G.4T:cb,3S:ca};F q.1I.2K(B,3Y)},gT:C(B){B=B.K(/<(p|h[1-6])>(|\\s|\\n|\\t|<br\\s?\\/?>)<\\/(p|h[1-6])>/gi,\'\');if(!q.G.1K)B=B.K(/<br>$/i,\'\');F B},gO:C(B){B=B.K(/<1i>(.*?)<\\/1i>/gi,\'$1\');B=B.K(/<1i[^>]*>\\s|&5i;<\\/1i>/gi,\' \');F B},gN:C(B){if(!q.L.1P(\'2F\'))F B;E 5x=$.3k(B);if(5x.3L(/^<a(.*?)>(.*?)<\\/a>$/i)===0){B=B.K(/^<a(.*?)>(.*?)<\\/a>$/i,"$2")}F B},gM:C(B,9b){q.1v.9l=O;if(!q.L.8m()&&1s 9b==\'1y\'){E 1Z=q.G.9a.3d(\'|\').K(\'P|\',\'\').K(\'7p|\',\'\');E gQ=B.1V(29 2l(\'</(\'+1Z+\')>\',\'gi\'));E bk=B.1V(/<\\/(p|1j)>/gi);if(!gQ&&(bk===4d||(bk&&bk.12<=1))){E gR=B.1V(/<br\\s?\\/?>/gi);if(!gR){q.1v.9l=1r;B=B.K(/<\\/?(p|1j)(.*?)>/gi,\'\')}}}F B},pu:C(3E,5q){5q=(((5q||\'\')+\'\').3f().1V(/<[a-z][a-7E-9]*>/g)||[]).3d(\'\');E 2d=/<\\/?([a-z][a-7E-9]*)\\b[^>]*>/gi;F 3E.K(2d,C($0,$1){F 5q.4I(\'<\'+$1.3f()+\'>\')>-1?$0:\'\'})},h7:C(B){B=q.1v.h8(B);B=q.1v.hi(B);B=q.1v.hh(B);F B},h8:C(B){E 2H=B.1V(/<2H(.*?)>([\\w\\W]*?)<\\/2H>/gi);if(2H!==4d){$.1z(2H,$.1e(C(i,s){E 2B=s.1V(/<2H(.*?)>([\\w\\W]*?)<\\/2H>/i);2B[2]=2B[2].K(/<br\\s?\\/?>/g,\'\\n\');2B[2]=2B[2].K(/&5i;/g,\' \');if(q.G.6T){2B[2]=2B[2].K(/\\t/g,9i(q.G.6T+1).3d(\' \'))}2B[2]=q.1v.bj(2B[2]);2B[2]=2B[2].K(/\\$/g,\'&#36;\');B=B.K(s,\'<2H\'+2B[1]+\'>\'+2B[2]+\'</2H>\')},q))}F B},hi:C(B){E 1d=B.1V(/<1d(.*?)>([\\w\\W]*?)<\\/1d>/gi);if(1d!==4d){$.1z(1d,$.1e(C(i,s){E 2B=s.1V(/<1d(.*?)>([\\w\\W]*?)<\\/1d>/i);2B[2]=2B[2].K(/&5i;/g,\' \');2B[2]=q.1v.bj(2B[2]);2B[2]=2B[2].K(/\\$/g,\'&#36;\');B=B.K(s,\'<1d\'+2B[1]+\'>\'+2B[2]+\'</1d>\')},q))}F B},hh:C(B){B=B.K(/&lt;1i id=&63;J-2s-([0-9])&63; 1G=&63;I-J-2s&63; 1f-3K=&63;I&63;&gt;​&lt;\\/1i&gt;/g,\'<1i id="J-2s-$1" 1G="I-J-2s" 1f-3K="I">​</1i>\');F B},cf:C(B){B=B.K(/<br\\s?\\/?>|<\\/H[1-6]>|<\\/p>|<\\/1j>|<\\/li>|<\\/2Z>/gi,\'\\n\');E 5x=1k.3y(\'1j\');5x.3A=B;B=5x.pr||5x.pz;F $.3k(B)},aC:C(B,2W){B=q.1v.cf(B);B=B.K(/\\n/g,\'<br />\');if(q.G.2W&&1s 2W==\'1y\'&&!q.L.1P(\'4g\')){B=q.2W.2K(B)}F B},hl:C(B){B=B.K(/<1M(.*?) 1p="(.*?)"(.*?[^>])>/gi,\'<1M$1$3>\');B=B.K(/<1M(.*?)>/gi,\'&lt;1M$1&gt;\');B=q.1v.cf(B);if(q.G.6T){B=B.K(/\\t/g,9i(q.G.6T+1).3d(\' \'))}B=q.1v.bj(B);F B},hf:C(B){B=B.K(/<1M(.*?)>/gi,\'[1M$1]\');B=B.K(/<([qc]*?)>/gi,\'\');B=B.K(/\\[1M(.*?)\\]/gi,\'<1M$1>\');F B},pW:C(B){B=B.K(/<a(.*?)2j="(.*?)"(.*?)>([\\w\\W]*?)<\\/a>/gi,\'[a 2j="$2"]$4[/a]\');B=B.K(/<1M(.*?)>/gi,\'[1M$1]\');B=B.K(/<(.*?)>/gi,\'\');B=B.K(/\\[a 2j="(.*?)"\\]([\\w\\W]*?)\\[\\/a\\]/gi,\'<a 2j="$1">$2</a>\');B=B.K(/\\[1M(.*?)\\]/gi,\'<1M$1>\');F B},bj:C(5h){5h=5Y(5h).K(/&9F;/g,\'&\').K(/&lt;/g,\'<\').K(/&gt;/g,\'>\').K(/&63;/g,\'"\');F 5h.K(/&/g,\'&9F;\').K(/</g,\'&lt;\').K(/>/g,\'&gt;\').K(/"/g,\'&63;\')},he:C(B){if(q.L.1P(\'2F\'))F B;E 1j=1k.3y(\'1j\');1j.3A=B;q.1v.c8($(1j));B=1j.3A;$(1j).1t();F B},4y:C(){if(q.L.1P(\'2F\'))F;q.1v.c8(q.$T);E c9=q.$T.1h(\'h1, h2, h3, h4, h5, h6\');c9.1h(\'1i\').1L(\'1p\');c9.1h(q.G.c2.3d(\', \')).1L(\'1p\');q.1d.1S()},c8:C($T){$T.1h(q.G.c2.3d(\', \')).1L(\'1p\');$T.1h(\'1i\').6q(\'[1f-3K="I"]\').1L(\'1p\');$T.1h(\'1i[1f-3K="I"], 1M[1f-3K="I"]\').1z(C(i,s){E $s=$(s);$s.1c(\'1p\',$s.1c(\'3X\'))})},pQ:C(){},7Q:C(B){if(q.L.1P(\'2F\'))F B;B=B.K(29 2l(\'<1M(.*?[^>])>\',\'gi\'),\'<1M$1 1f-3K="I">\');B=B.K(29 2l(\'<1i(.*?[^>])>\',\'gi\'),\'<1i$1 1f-3K="I">\');E 3Q=B.1V(29 2l(\'<(1i|1M)(.*?)1p="(.*?)"(.*?[^>])>\',\'gi\'));if(3Q){E 2o=3Q.12;2C(E i=0;i<2o;i++){52{E gK=3Q[i].K(/1p="(.*?)"/i,\'1p="$1" 3X="$1"\');B=B.K(3Q[i],gK)}4U(e){}}}F B},c1:C(B){E $1j=$(\'<1j />\').B(B);E 2d=q.G.4N;2d.2R(\'1i\');$1j.1h(2d.3d(\',\')).1z(C(){E $el=$(q);E Y=q.1n.3f();$el.1c(\'1f-I-Y\',Y);if(Y==\'1i\'){if($el.1c(\'1p\'))$el.1c(\'1f-I-1p\',$el.1c(\'1p\'));M if($el.1c(\'1G\'))$el.1c(\'1f-I-1G\',$el.1c(\'1G\'))}});B=$1j.B();$1j.1t();F B},ar:C(){q.$T.1h(\'li\').1z(C(i,s){E $1N=$(s).1N();if($1N.12!==0&&($1N[0].1n==\'8y\'||$1N[0].1n==\'8t\')){$(s).1F($1N)}})},cB:C(B){B=B.K(/\\n/g,\'\');B=B.K(/[\\t]*/g,\'\');B=B.K(/\\n\\s*\\n/g,"\\n");B=B.K(/^[\\s\\n]*/g,\' \');B=B.K(/[\\s\\n]*$/g,\' \');B=B.K(/>\\s{2,}</g,\'> <\');B=B.K(/\\n\\n/g,"\\n");B=B.K(/\\5X/g,\'\');F B},6r:C(B){if(q.G.1K){B=B.K(/<1j><br\\s?\\/?><\\/1j>/gi,\'<br />\');B=B.K(/<1j(.*?)>([\\w\\W]*?)<\\/1j>/gi,\'$2<br />\')}M{B=B.K(/<1j(.*?)>([\\w\\W]*?)<\\/1j>/gi,\'<p$1>$2</p>\')}B=B.K(/<1j(.*?[^>])>/gi,\'\');B=B.K(/<\\/1j>/gi,\'\');F B},gn:C(B){B=B.K(/<1j\\s(.*?)>/gi,\'<p>\');B=B.K(/<1j><br\\s?\\/?><\\/1j>/gi,\'<br /><br />\');B=B.K(/<1j>([\\w\\W]*?)<\\/1j>/gi,\'$1<br /><br />\');F B},9q:C(B){B=B.K(/<p\\s(.*?)>/gi,\'<p>\');B=B.K(/<p><br\\s?\\/?><\\/p>/gi,\'<br />\');B=B.K(/<p>([\\w\\W]*?)<\\/p>/gi,\'$1<br /><br />\');B=B.K(/(<br\\s?\\/?>){1,}\\n?<\\/26>/gi,\'</26>\');F B},c0:C(B){F B.K(/<69(.*?)>([\\w\\W]*?)<\\/69>/gi,\'<4h$1 3X="I-69-Y">$2</4h>\')},gm:C(B){F B.K(/<4h(.*?) 3X="I-69-Y"(.*?)>([\\w\\W]*?)<\\/4h>/gi,\'<69$1$2>$3</69>\')}}},1d:C(){F{1U:C(B){B=$.3k(B.4s());B=q.1v.go(B);if(q.L.1P(\'2F\')){B=B.K(/<1i(.*?)id="J-2s-(1|2)"(.*?)><\\/1i>/gi,\'\')}q.$T.B(B);q.1d.1S();if(B!==\'\')q.3e.1t();3u($.1e(q.28.bZ,q),15);if(q.2b===O)q.1R.2K()},1b:C(){E 1d=q.$2v.2J();if(q.G.6r)1d=q.1v.6r(1d);if(q.G.1K)1d=q.1v.9q(1d);1d=q.2I.1b(1d);F 1d},1S:C(){3u($.1e(q.1d.gp,q),10)},gp:C(){E B=q.$T.B();if(q.1d.c5&&q.1d.c5==B){F}q.1d.c5=B;B=q.1W.2q(\'q9\',B);B=q.1v.9Y(B);q.$2v.2J(B);q.1W.2q(\'1S\',B);if(q.2b===O){q.1W.2q(\'iz\',B)}q.2b=O;if(q.3o.B==O){q.3o.B=q.1d.1b()}if(q.G.8l){q.$2v.1N(\'.3D\').1z(C(i,el){el.3D.gk(B)})}q.3o.gr();q.3o.a7()},3j:C(){if(q.G.6e){q.1d.ck()}M{q.1d.gf()}},ck:C(){q.J.3m();q.1d.2D=q.1T.an();E 6m=$(3l).3U();E 2L=q.$T.7t(),3i=q.$T.6b();q.$T.3p();E B=q.$2v.2J();q.gE=q.1v.cB(B);B=q.2I.1b(B);E 2b=0,2g=0;E $6Y=$("<1j/>").1F($.ei(q.1v.9Y(q.$T.B()),1k,1r));E $aj=$6Y.1h("1i.I-J-2s");if($aj.12>0){E al=q.2I.1b($6Y.B()).K(/&9F;/g,\'&\');if($aj.12==1){2b=q.L.bh(al,$6Y.1h("#J-2s-1").6a("7T"));2g=2b}M if($aj.12==2){2b=q.L.bh(al,$6Y.1h("#J-2s-1").6a("7T"));2g=q.L.bh(al,$6Y.1h("#J-2s-2").6a("7T"))-$6Y.1h("#J-2s-1").6a("7T").4s().12}}q.J.8O();q.$2v.2J(B);if(q.G.8l){q.$2v.1N(\'.3D\').1z(C(i,el){$(el).2O();el.3D.gk(B);el.3D.q4(\'6G%\',3i);el.3D.q5();if(2b==2g){el.3D.pP(el.3D.7M(2b).3M,el.3D.7M(2g).ch)}M{el.3D.pO({3M:el.3D.7M(2b).3M,ch:el.3D.7M(2b).ch},{3M:el.3D.7M(2g).3M,ch:el.3D.7M(2g).ch})}el.3D.2m()})}M{q.$2v.3i(3i).2O().2m();q.$2v.on(\'1D.I-2v-gJ\',q.1d.gC);$(3l).3U(6m);if(q.$2v[0].gd){q.$2v[0].gd(2b,2g)}q.$2v[0].3U=0}q.G.6e=O;q.1u.gc();q.1u.8j(\'B\');q.1W.2q(\'4B\',B)},gf:C(){E B;if(q.G.6e)F;E 2b=0,2g=0;if(q.G.8l){E J;q.$2v.1N(\'.3D\').1z(C(i,el){J=el.3D.pA();2b=el.3D.gj(J[0].gg);2g=el.3D.gj(J[0].dO);B=el.3D.pB()})}M{2b=q.$2v.1b(0).cv;2g=q.$2v.1b(0).co;B=q.$2v.3p().2J()}if(2b>2g&&2g>0){E gs=2g;E gu=2b;2b=gs;2g=gu}2b=q.1d.cn(B,2b);2g=q.1d.cn(B,2g);B=B.4q(0,2b)+q.J.5f(1)+B.4q(2b);if(2g>2b){E cx=q.J.5f(1).4s().12;B=B.4q(0,2g+cx)+q.J.5f(2)+B.4q(2g+cx)}if(q.gE!==q.1v.cB(B)){q.1d.1U(B)}if(q.G.8l){q.$2v.1N(\'.3D\').3p()}q.$T.2O();if(!q.L.3z(B)){q.3e.1t()}q.J.3g();q.$2v.2Y(\'1D.I-2v-gJ\');q.1u.gI();q.1u.gD(\'B\');q.1R.2K();q.G.6e=1r;q.1W.2q(\'6e\',B)},gC:C(e){if(e.3t!==9)F 1r;E $el=q.$2v;E 2b=$el.1b(0).cv;$el.2J($el.2J().aV(0,2b)+"\\t"+$el.2J().aV($el.1b(0).co));$el.1b(0).cv=$el.1b(0).co=2b+1;F O},cn:C(B,2D){E cs=B.12;E c=0;if(B[2D]==\'>\'){c++}M{2C(E i=2D;i<=cs;i++){c++;if(B[i]==\'>\'){6k}M if(B[i]==\'<\'||i==cs){c=0;6k}}}F 2D+c}}},1W:C(){F{pC:C(){F $.7w({},q)},pD:C(){F q.$T},pL:C(){F q.$2N},pM:C(){F q.$2k},pN:C(){F q.$2v},pJ:C(){F(q.$1B)?q.$1B:O},9k:C(1x){q.1W.8c=1x},76:C(){F q.1W.8c},2q:C(1m,e,1f){E ah=1m+\'pI\';E ia=\'I\';E 2y=q.G[ah];if(q.$2v){E 8s=O;E 8r=$.pE(q.$2v[0],\'8r\');if(1s 8r!=\'1y\'&&1s 8r[ah]!=\'1y\'){$.1z(8r[ah],$.1e(C(1l,1E){if(1E[\'qI\']==ia){E 1f=(1s 1f==\'1y\')?[e]:[e,1f];8s=(1s 1f==\'1y\')?1E.7W.5Z(q,e):1E.7W.5Z(q,e,1f)}},q))}if(8s)F 8s}if($.5s(2y)){F(1s 1f==\'1y\')?2y.5Z(q,e):2y.5Z(q,e,1f)}M{F(1s 1f==\'1y\')?e:1f}},ib:C(){q.G.je=1r;q.1W.2q(\'ib\');q.$2k.2Y(\'.I\').i6(\'I\');q.$T.2Y(\'.I\');$(1k).2Y(\'68.I-ct.\'+q.2G);$(1k).2Y(\'68.I.\'+q.2G);$(1k).2Y(\'2A.I-N-75.\'+q.2G);$(1k).2Y(\'2A.I-N-4M-3p.\'+q.2G);$(1k).2Y(\'5B.I.\'+q.2G+\' 2A.I.\'+q.2G);$("3c").2Y(\'6m.I.\'+q.2G);$(q.G.6B).2Y(\'6m.I.\'+q.2G);q.$T.2U(\'I-T I-1K I-3e\');q.$T.1L(\'5c\');E B=q.1d.1b();if(q.G.1B){q.$1B.1h(\'a\').1z(C(){E $el=$(q);if($el.1f(\'1o\')){$el.1f(\'1o\').1t();$el.1f(\'1o\',{})}})}if(q.2r.ay()){q.$2N.3C(q.$2k);q.$2N.1t();q.$2k.2J(B).2O()}M{q.$2N.3C(q.$T);q.$2N.1t();q.$2k.B(B).2O()}if(q.$5b)q.$5b.1t();if(q.$4C)q.$4C.1t();if(q.$81)q.$81.1t();$(\'.I-1B-3n-\'+q.2G).1t();i0(q.8M)}}},1o:C(){F{2r:C(1x,$1o,cr){if(1x==\'3b\'&&q.G.cu){$.1z(q.G.cu,$.1e(C(i,s){E 1x=s.Y,1C;if(1s s[\'1G\']!=\'1y\'){1x=1x+\'-\'+s[\'1G\']}s.1m=(q.L.7L(s.Y))?\'R\':\'25\';if(1s s.1C!=="1y"){1C=s.1C}M{1C=(s.1m==\'25\')?\'25.3b\':\'R.3b\'}if(q.G.1K&&s.1m==\'R\'&&s.Y==\'p\')F;q.3b[1x]={Y:s.Y,1p:s.1p,\'1G\':s[\'1G\'],1c:s.1c,1f:s.1f,9d:s.9d};cr[1x]={1C:1C,1J:s.1J}},q))}$.1z(cr,$.1e(C(2i,2T){E $2w=$(\'<a 2j="#" 1G="I-1o-\'+2i+\'" 9D="1u">\'+2T.1J+\'</a>\');if(1x==\'3b\')$2w.2f(\'I-3b-\'+2i);$2w.on(\'2A\',$.1e(C(e){e.2t();E 1m=\'1C\';E 2y=2T.1C;if(2T.4x){1m=\'4x\';2y=2T.4x}M if(2T.1o){1m=\'1o\';2y=2T.1o}if($(e.1Q).3r(\'I-1o-V-dA\'))F;q.1u.9X(e,2i,1m,2y);q.1o.7d()},q));q.1R.dn($2w,2i,2T);$1o.1F($2w)},q))},2O:C(e,1l){if(!q.G.6e){e.2t();F O}E $1u=q.1u.1b(1l);E $1o=$1u.1f(\'1o\').ax(1k.3c);if(q.G.cH){$1o.2f("I-1o-iI")}if($1u.3r(\'77\')){q.1o.7d()}M{q.1o.7d();q.1R.7r();q.1W.2q(\'qS\',{1o:$1o,1l:1l,1u:$1u});q.1u.8j(1l);$1u.2f(\'77\');E 7h=$1u.2D();E cq=$1o.2L();if((7h.2c+cq)>$(1k).2L()){7h.2c=8p.qR(0,7h.2c-cq)}E 2c=7h.2c+\'px\';if(q.$1B.3r(\'1B-7Y-2N\')){E 2X=q.$1B.6b()+q.G.6z;E 4e=\'7Y\';if(q.G.6B!==1k){2X=(q.$1B.6b()+q.$1B.2D().2X)+q.G.6z;4e=\'9x\'}$1o.1O({4e:4e,2c:2c,2X:2X+\'px\'}).2O()}M{E 2X=($1u.6b()+7h.2X)+\'px\';$1o.1O({4e:\'9x\',2c:2c,2X:2X}).2O()}q.1W.2q(\'qO\',{1o:$1o,1l:1l,1u:$1u});q.$1o=$1o}$(1k).cm(\'2A.I-1o\',$.1e(q.1o.3p,q));q.$T.cm(\'2A.I-1o\',$.1e(q.1o.3p,q));$(1k).cm(\'2x.I-1o\',$.1e(q.1o.8T,q));$1o.on(\'a8.I-1o\',$.1e(q.L.dH,q)).on(\'a9.I-1o\',$.1e(q.L.aK,q));e.kN()},8T:C(e){if(e.7m!=q.3t.am)F;q.1o.7d();q.$T.2m()},7d:C(){q.$1B.1h(\'a.77\').2U(\'I-8K\').2U(\'77\');q.L.aK();$(\'.I-1o-\'+q.2G).3p();$(\'.I-1o-V-iu\').2U(\'I-1o-V-iu\');if(q.$1o){q.$1o.2Y(\'.I-1o\');q.1W.2q(\'qk\',q.$1o);q.$1o=O}},3p:C(e){E $1o=$(e.1Q);if(!$1o.3r(\'77\')&&!$1o.3r(\'I-1o-V-dA\')){$1o.2U(\'77\');$1o.2Y(\'a8 a9\');q.1o.7d()}}}},22:C(){F{2O:C(){q.1a.2K(\'22\',q.1H.1b(\'22\'),iy);q.1w.3N(\'#I-1a-22-1w\',q.G.7D,q.22.1Y);q.J.3m();q.J.1b();E 1g=q.2V.4s();$(\'#I-6h\').2J(1g);q.1a.2O()},1Y:C(2P,4V,e){if(1s 2P.6X!=\'1y\'){q.1a.4j();q.J.3g();q.1W.2q(\'qj\',2P);F}E V;if(1s 2P==\'6W\'){V=2P}M{E 1g=$(\'#I-6h\').2J();if(1s 1g==\'1y\'||1g===\'\')1g=2P.6h;V=\'<a 2j="\'+2P.9t+\'" id="9t-2s">\'+1g+\'</a>\'}if(4V){q.J.8O();E 2s=q.J.6Q();q.1Y.c3(e,2s)}M{q.1a.4j()}q.J.3g();q.28.1U();q.1Y.eA(V);if(1s 2P==\'6W\')F;E 8X=$(q.$T.1h(\'a#9t-2s\'));if(8X.12!==0){8X.1L(\'id\').1L(\'1p\')}M 8X=O;q.1W.2q(\'7D\',8X,2P)}}},2m:C(){F{2Q:C(){q.$T.2m();E 3H=q.$T.3O().3H();if(3H.12===0)F;if(3H[0].12===0||3H[0].1n==\'5l\'||3H[0].bH==3){F}if(3H[0].1n==\'8y\'||3H[0].1n==\'8t\'){E 4A=3H.1h(\'li\').3H();if(!q.L.6J(4A)&&4A.1g()===\'\'){q.1T.2Q(4A);F}}if(q.G.1K&&!q.L.7L(3H[0].1n)){q.J.1b();q.14.2Q(q.$T[0],0);q.14.3J(q.$T[0],0);q.J.4b();F}q.1T.2Q(3H)},3J:C(){E 30=q.$T.3O().30();q.$T.2m();if(30.82()===0)F;if(q.L.3z(q.$T.B())){q.J.1b();q.14.48(1r);q.14.9p(30[0]);q.14.3J(30[0],0);q.J.4b()}M{q.J.1b();q.14.95(30[0]);q.14.48(O);q.J.4b()}},cp:C(){E 93=1k.4E().93;if(93===4d)F O;if(q.G.1K&&$(93.e8).3r(\'I-1K\'))F 1r;M if(!q.L.4v(93.e8))F O;F q.$T.is(\':2m\')}}},N:C(){F{2O:C(){q.1a.2K(\'N\',q.1H.1b(\'N\'),iy);q.1w.3N(\'#I-1a-N-4c\',q.G.7J,q.N.1Y);q.J.3m();q.1a.2O()},hK:C($N){E $V=$N.2p(\'a\',q.$T[0]);q.1a.2K(\'j8\',q.1H.1b(\'7e\'),qf);q.1a.cI();q.N.iq=q.1a.iS(q.1H.1b(\'ir\'));q.N.ik=q.1a.cJ(q.1H.1b(\'3m\'));q.N.iq.on(\'2A\',$.1e(C(){q.N.1t($N)},q));q.N.ik.on(\'2A\',$.1e(C(){q.N.hA($N)},q));$(\'.I-V-3n\').1t();$(\'#I-N-1J\').2J($N.1c(\'7l\'));if(!q.G.ij)$(\'.I-N-V-3Z\').3p();M{E $cw=$(\'#I-N-V\');$cw.1c(\'2j\',$N.1c(\'4r\'));if($V.12!==0){$cw.2J($V.1c(\'2j\'));if($V.1c(\'1Q\')==\'7v\')$(\'#I-N-V-8a\').6a(\'bC\',1r)}}if(!q.G.im)$(\'.I-N-4e-3Z\').3p();M{E ip=($N.1O(\'72\')==\'R\'&&$N.1O(\'7K\')==\'5z\')?\'5E\':$N.1O(\'7K\');$(\'#I-N-5a\').2J(ip)}q.1a.2O();$(\'#I-N-1J\').2m()},hz:C($N){E io=$(\'#I-N-5a\').2J();E b4=\'\';E cC=\'\';E 9G=\'\';fe(io){9o\'2c\':b4=\'2c\';9G=\'0 \'+q.G.8o+\' \'+q.G.8o+\' 0\';6k;9o\'4z\':b4=\'4z\';9G=\'0 0 \'+q.G.8o+\' \'+q.G.8o;6k;9o\'5E\':cC=\'R\';9G=\'ad\';6k}$N.1O({\'7K\':b4,72:cC,4G:9G});$N.1c(\'3X\',$N.1c(\'1p\'))},hA:C($N){q.N.7u();q.28.1U();E $V=$N.2p(\'a\',q.$T[0]);E 1J=$(\'#I-N-1J\').2J().K(/(<([^>]+)>)/ig,"");$N.1c(\'7l\',1J);q.N.hz($N);E V=$.3k($(\'#I-N-V\').2J());E V=V.K(/(<([^>]+)>)/ig,"");if(V!==\'\'){E 7A=\'((kb--)?[a-7E-9]+(-[a-7E-9]+)*\\\\.)+[a-z]{2,}\';E 3I=29 2l(\'^(8U|8d|5w)://\'+7A,\'i\');E bA=29 2l(\'^\'+7A,\'i\');if(V.3L(3I)==-1&&V.3L(bA)===0&&q.G.5g){V=q.G.5g+\'://\'+V}E 1Q=($(\'#I-N-V-8a\').6a(\'bC\'))?1r:O;if($V.12===0){E a=$(\'<a 2j="\'+V+\'">\'+q.L.5N($N)+\'</a>\');if(1Q)a.1c(\'1Q\',\'7v\');$N.2u(a)}M{$V.1c(\'2j\',V);if(1Q){$V.1c(\'1Q\',\'7v\')}M{$V.1L(\'1Q\')}}}M if($V.12!==0){$V.2u(q.L.5N($N))}q.1a.4j();q.1R.9W();q.1d.1S()},jC:C($N){if(q.G.cA){$N.on(\'qz\',$.1e(q.N.bD,q))}E 7W=$.1e(C(e){q.1R.N=$N;q.N.9g=q.N.gb($N);$(1k).on(\'68.I-N-4M-3p.\'+q.2G,$.1e(q.N.7u,q));if(!q.G.cE)F;q.N.9g.on(\'68.I 5B.I\',$.1e(C(e){q.N.hB(e,$N)},q))},q);$N.2Y(\'68.I\').on(\'68.I\',$.1e(q.N.7u,q));$N.2Y(\'2A.I 5B.I\').on(\'2A.I 5B.I\',7W)},hB:C(e,$N){e.2t();q.N.4i={x:e.hC,y:e.b9,el:$N,cD:$N.2L()/$N.3i(),h:$N.3i()};e=e.87||e;if(e.9e){q.N.4i.x=e.9e[0].hC;q.N.4i.y=e.9e[0].b9}q.N.hE()},hE:C(){$(1k).on(\'qv.I-N-4M qu.I-N-4M\',$.1e(q.N.hs,q));$(1k).on(\'g3.I-N-4M qq.I-N-4M\',$.1e(q.N.hw,q))},hs:C(e){e.2t();e=e.87||e;E 3i=q.N.4i.h;if(e.9e)3i+=(e.9e[0].b9-q.N.4i.y);M 3i+=(e.b9-q.N.4i.y);E 2L=8p.hu(3i*q.N.4i.cD);if(3i<50||2L<6G)F;E 3i=8p.hu(q.N.4i.el.2L()/q.N.4i.cD);q.N.4i.el.1c({2L:2L,3i:3i});q.N.4i.el.2L(2L);q.N.4i.el.3i(3i);q.1d.1S()},hw:C(){q.iJ=O;$(1k).2Y(\'.I-N-4M\');q.N.7u()},bD:C(e){if(q.$T.1h(\'#I-N-2N\').12!==0){e.2t();F O}q.$T.on(\'58.I-N-hv-58\',$.1e(C(){3u($.1e(q.N.au,q),1)},q))},au:C(){q.N.hF();q.1R.9W();q.$T.2Y(\'58.I-N-hv-58\');q.1v.4y();q.1d.1S()},hF:C(){q.$T.1h(\'1M[1f-3m-2h]\').1z(C(){E $el=$(q);$el.1c(\'4r\',$el.1c(\'1f-3m-2h\'));$el.1L(\'1f-3m-2h\')})},7u:C(e){if(e&&$(e.1Q).2p(\'#I-N-2N\',q.$T[0]).12!==0)F;if(e&&e.1Q.1n==\'bF\'){E $N=$(e.1Q);$N.1c(\'1f-3m-2h\',$N.1c(\'4r\'))}E 3F=q.$T.1h(\'#I-N-2N\');if(3F.12===0)F;$(\'#I-N-5D\').1t();$(\'#I-N-9g\').1t();3F.1h(\'1M\').1O({6d:3F[0].1p.6d,bE:3F[0].1p.bE,bm:3F[0].1p.bm,bt:3F[0].1p.bt});3F.1O(\'4G\',\'\');3F.1h(\'1M\').1O(\'hI\',\'\');3F.2u(C(){F $(q).2a()});$(1k).2Y(\'68.I-N-4M-3p.\'+q.2G);if(1s q.N.4i!==\'1y\'){q.N.4i.el.1c(\'3X\',q.N.4i.el.1c(\'1p\'))}q.1d.1S()},hM:C($N,3F){if(q.G.cE&&!q.L.6A()){E 9B=$(\'<1i id="I-N-9g" 1f-I="3K"></1i>\');if(!q.L.7n()){9B.1O({2L:\'hT\',3i:\'hT\'})}9B.1c(\'5c\',O);3F.1F(9B);3F.1F($N);F 9B}M{3F.1F($N);F O}},gb:C($N){E 3F=$(\'<1i id="I-N-2N" 1f-I="3K">\');3F.1O(\'7K\',$N.1O(\'7K\')).1c(\'5c\',O);if($N[0].1p.4G!=\'ad\'){3F.1O({6d:$N[0].1p.6d,bE:$N[0].1p.bE,bm:$N[0].1p.bm,bt:$N[0].1p.bt});$N.1O(\'4G\',\'\')}M{3F.1O({\'72\':\'R\',\'4G\':\'ad\'})}$N.1O(\'hI\',\'.5\').3C(3F);if(q.G.cA){q.N.5D=$(\'<1i id="I-N-5D" 1f-I="3K">\'+q.1H.1b(\'7e\')+\'</1i>\');q.N.5D.1c(\'5c\',O);q.N.5D.on(\'2A\',$.1e(C(){q.N.hK($N)},q));3F.1F(q.N.5D);E hN=q.N.5D.7t();q.N.5D.1O(\'4G-2c\',\'-\'+hN/2+\'px\')}F q.N.hM($N,3F)},1t:C(N){E $N=$(N);E $V=$N.2p(\'a\',q.$T[0]);E $70=$N.2p(\'70\',q.$T[0]);E $1q=$N.1q();if($(\'#I-N-2N\').12!==0){$1q=$(\'#I-N-2N\').1q()}E $1N;if($70.12!==0){$1N=$70.1N();$70.1t()}M if($V.12!==0){$1q=$V.1q();$V.1t()}M{$N.1t()}$(\'#I-N-2N\').1t();if($70.12!==0){q.1T.2Q($1N)}M{q.1T.2Q($1q)}q.1W.2q(\'cj\',$N[0].4r,$N);q.1a.4j();q.1d.1S()},1Y:C(2P,4V,e){if(1s 2P.6X!=\'1y\'){q.1a.4j();q.J.3g();q.1W.2q(\'oe\',2P);F}E $1M;if(1s 2P==\'6W\'){$1M=$(2P).1c(\'1f-I-9J-N\',\'1r\')}M{$1M=$(\'<1M>\');$1M.1c(\'4r\',2P.9t).1c(\'1f-I-9J-N\',\'1r\')}E Q=$1M;E cy=q.L.4Z(\'P\');if(cy){Q=$(\'<26 />\').1F($1M)}if(4V){q.J.8O();E 2s=q.J.6Q();q.1Y.c3(e,2s)}M{q.1a.4j()}q.J.3g();q.28.1U();q.1Y.B(q.L.5N(Q),O);E $N=q.$T.1h(\'1M[1f-I-9J-N=1r]\').1L(\'1f-I-9J-N\');if(cy){$N.1q().2a().44().62(\'<p />\')}M if(q.G.1K){if(!q.L.3z(q.1d.1b())){$N.bi(\'<br>\')}$N.3C(\'<br>\')}if(1s 2P==\'6W\')F;q.1W.2q(\'7J\',$N,2P)}}},3B:C(){F{bB:C(){if(!q.L.1P(\'2F\'))q.$T.2m();q.28.1U();q.J.3m();E R=q.J.4a();if(R&&R.1n==\'5y\'){q.3B.ek()}M if(R===O&&q.G.1K){q.3B.eV()}M{q.3B.ej()}q.J.3g();q.1d.1S()},ek:C(){1k.47(\'3B\');q.3B.a1();q.1v.ar();q.1v.4y()},ej:C(){$.1z(q.J.42(),$.1e(C(i,4X){if(4X.1n===\'6w\'||4X.1n===\'cz\')F;E $el=q.L.bp(4X);E 2c=q.L.eb($el.1O(\'4G-2c\'))+q.G.b7;$el.1O(\'4G-2c\',2c+\'px\')},q))},eV:C(){E 4P=q.J.62(\'1j\');$(4P).1c(\'1f-9z\',\'I\');$(4P).1O(\'4G-2c\',q.G.b7+\'px\')},9j:C(){q.28.1U();q.J.3m();E R=q.J.4a();if(R&&R.1n==\'5y\'){q.3B.eY()}M{q.3B.fb()}q.J.3g();q.1d.1S()},eY:C(){1k.47(\'7a\');E 1A=q.J.3v();E $2w=$(1A).2p(\'li\',q.$T[0]);q.3B.a1();if(!q.G.1K&&$2w.12===0){1k.47(\'a0\',O,\'p\');q.$T.1h(\'3s, ol, 26, p\').1z($.1e(q.L.3S,q))}q.1v.4y()},fb:C(){$.1z(q.J.42(),$.1e(C(i,4X){E $el=q.L.bp(4X);E 2c=q.L.eb($el.1O(\'4G-2c\'))-q.G.b7;if(2c<=0){if(q.G.1K&&1s($el.1f(\'9z\'))!==\'1y\'){$el.2u($el.B()+\'<br />\')}M{$el.1O(\'4G-2c\',\'\');q.L.5H($el,\'1p\')}}M{$el.1O(\'4G-2c\',2c+\'px\')}},q))},a1:C(){E R=q.J.4a();if(q.14.4Y&&R&&R.1n==\'5y\'&&q.L.3z($(R).1g())){E $R=$(R);$R.1h(\'1i\').6q(\'.I-J-2s\').2a().44();$R.1F(\'<br>\')}}}},25:C(){F{3b:C(1x){E 1m,1E;if(1s q.3b[1x].1p!=\'1y\')1m=\'1p\';M if(1s q.3b[1x][\'1G\']!=\'1y\')1m=\'1G\';if(1m)1E=q.3b[1x][1m];q.25.31(q.3b[1x].Y,1m,1E)},31:C(Y,1m,1E){E 1A=q.J.3v();if(1A&&1A.1n===\'o9\')F;if(q.L.4Z(\'8P\')||q.L.fk())F;E 2d=[\'b\',\'4n\',\'i\',\'4m\',\'5p\',\'eZ\',\'5W\',\'eK\',\'eP\'];E eG=[\'5e\',\'5e\',\'em\',\'em\',\'u\',\'4l\',\'4l\',\'7V\',\'7Z\'];2C(E i=0;i<2d.12;i++){if(Y==2d[i])Y=eG[i]}if(q.G.4t){if($.3q(Y,q.G.4t)==-1)F}M{if($.3q(Y,q.G.49)!==-1)F}q.25.1m=1m||O;q.25.1E=1E||O;q.28.1U();if(!q.L.1P(\'2F\')&&!q.G.1K){q.$T.2m()}q.J.1b();if(q.14.4Y){q.25.eQ(Y)}M{q.25.eR(Y)}},eQ:C(Y){E 1A=q.J.3v();E $1q=$(1A).2p(Y+\'[1f-I-Y=\'+Y+\']\',q.$T[0]);if($1q.12!==0&&(q.25.1m!=\'1p\'&&$1q[0].1n!=\'6M\')){if(q.L.3z($1q.1g())){q.1T.55($1q[0]);$1q.1t();q.1d.1S()}M if(q.L.6D($1q)){q.1T.55($1q[0])}F}E Q=$(\'<\'+Y+\'>\').1c(\'1f-3K\',\'I\').1c(\'1f-I-Y\',Y);Q.B(q.G.5R);Q=q.25.cl(Q);E Q=q.1Y.Q(Q);q.1T.3J(Q);q.1d.1S()},eR:C(Y){q.25.eD(Y);q.J.3m();1k.47(\'eZ\');q.$T.1h(\'7U\').1z($.1e(C(i,s){E $el=$(s);q.25.eS($el,Y);E $1i;if(q.25.1m){$1i=$(\'<1i>\').1c(\'1f-I-Y\',Y).1c(\'1f-3K\',\'I\');$1i=q.25.cl($1i)}M{$1i=$(\'<\'+Y+\'>\').1c(\'1f-I-Y\',Y).1c(\'1f-3K\',\'I\')}$el.2u($1i.B($el.2a()));E $1q=$1i.1q();if($1i[0].1n===\'A\'&&$1q&&$1q[0].1n===\'U\'){$1i.1q().2u($1i)}if(Y==\'1i\'){if($1q&&$1q[0].1n===\'6M\'&&q.25.1m===\'1p\'){E 2B=q.25.1E.4p(\';\');2C(E z=0;z<2B.12;z++){if(2B[z]===\'\')F;E 1p=2B[z].4p(\':\');$1q.1O(1p[0],\'\');if(q.L.5H($1q,\'1p\')){$1q.2u($1q.2a())}}}}},q));if(Y!=\'1i\'){q.$T.1h(q.G.4N.3d(\', \')).1z($.1e(C(i,s){E $el=$(s);if(s.1n===\'U\'&&s.4u.12===0){$el.2u($el.2a());F}E ab=$el.1O(\'1g-80\');if(ab===\'3M-fc\'){$el.1O(\'1g-80\',\'\');q.L.5H($el,\'1p\')}},q))}if(Y!=\'4l\'){E eT=q;q.$T.1h(\'25\').1z(C(i,s){eT.L.4J(s,\'4l\')})}q.J.3g();q.1d.1S()},eS:C($el,Y){E 3w=q;$el.3O(Y).1z(C(){E $4A=$(q);if(!$4A.3r(\'I-J-2s\')){if(3w.25.1m==\'1p\'){E 2B=3w.25.1E.4p(\';\');2C(E z=0;z<2B.12;z++){if(2B[z]===\'\')F;E 1p=2B[z].4p(\':\');$4A.1O(1p[0],\'\');if(3w.L.5H($4A,\'1p\')){$4A.2u($4A.2a())}}}M{$4A.2a().44()}}})},eD:C(Y){q.J.3m();E 1h=\'\';if(q.25.1m==\'1G\')1h=\'[1f-I-1G=\'+q.25.1E+\']\';M if(q.25.1m==\'1p\'){1h=\'[1f-I-1p="\'+q.25.1E+\'"]\'}E 3w=q;if(Y!=\'4l\'){q.$T.1h(\'4l\').1z(C(i,s){3w.L.4J(s,\'25\')})}if(Y!=\'1i\'){q.$T.1h(Y).1z(C(){E $el=$(q);$el.2u($(\'<7U />\').B($el.2a()))})}q.$T.1h(\'[1f-I-Y="\'+Y+\'"]\'+1h).1z(C(){if(1h===\'\'&&Y==\'1i\'&&q.1n.3f()==Y)F;E $el=$(q);$el.2u($(\'<7U />\').B($el.2a()))});q.J.3g()},cl:C(Q){fe(q.25.1m){9o\'1G\':if(Q.3r(q.25.1E)){Q.2U(q.25.1E);Q.1L(\'1f-I-1G\')}M{Q.2f(q.25.1E);Q.1c(\'1f-I-1G\',q.25.1E)}6k;9o\'1p\':Q[0].1p.oj=q.25.1E;Q.1c(\'1f-I-1p\',q.25.1E);6k}F Q},ok:C(){q.28.1U();E 1A=q.J.3v();E 21=q.J.e7();q.J.3m();if(1A&&1A.1n===\'6M\'){E $s=$(1A);$s.1L(\'1p\');if($s[0].4u.12===0){$s.2u($s.2a())}}$.1z(21,$.1e(C(i,s){E $s=$(s);if($.3q(s.1n.3f(),q.G.4N)!=-1&&!$s.3r(\'I-J-2s\')){$s.1L(\'1p\');if($s[0].4u.12===0){$s.2u($s.2a())}}},q));q.J.3g();q.1d.1S()},ov:C(1x){q.28.1U();E 1q=q.J.5Q();E 21=q.J.e7();q.J.3m();if(1q&&1q.1n===\'6M\'){E $s=$(1q);$s.1O(1x,\'\');q.L.5H($s,\'1p\');if($s[0].4u.12===0){$s.2u($s.2a())}}$.1z(21,$.1e(C(i,s){E $s=$(s);if($.3q(s.1n.3f(),q.G.4N)!=-1&&!$s.3r(\'I-J-2s\')){$s.1O(1x,\'\');q.L.5H($s,\'1p\');if($s[0].4u.12===0){$s.2u($s.2a())}}},q));q.J.3g();q.1d.1S()},c6:C(){q.28.1U();E 1A=q.J.3v();q.J.3m();1k.47(\'c6\');if(1A&&1A.1n===\'6M\'){$(1A).2u($(1A).2a())}$.1z(q.J.6V(),$.1e(C(i,s){E $s=$(s);if($.3q(s.1n.3f(),q.G.4N)!=-1&&!$s.3r(\'I-J-2s\')){$s.2u($s.2a())}},q));q.J.3g();q.1d.1S()},7C:C(3G){q.25.31(\'1i\',\'1G\',3G)},ow:C(1E){q.25.31(\'1i\',\'1p\',1E)}}},1Y:C(){F{1U:C(B,1v){q.3e.1t();B=q.1v.7Q(B);if(1s 1v==\'1y\'){B=q.1v.8B(B,O)}q.$T.B(B);q.J.1t();q.2m.3J();q.1v.ar();q.1d.1S();q.1R.2K();if(1s 1v==\'1y\'){3u($.1e(q.1v.4y,q),10)}},1g:C(1g){q.3e.1t();1g=1g.4s();1g=$.3k(1g);1g=q.1v.aC(1g,O);q.$T.2m();if(q.L.1P(\'2F\')){q.1Y.c7(1g)}M{q.J.1b();q.14.4S();E el=1k.3y("1j");el.3A=1g;E 4L=1k.9P(),Q,5G;53((Q=el.9N)){5G=4L.83(Q)}q.14.3R(4L);if(5G){E 14=q.14.7I();14.9p(5G);14.48(1r);q.2V.9E();q.2V.4b(14)}}q.1d.1S();q.1v.4y()},eA:C(B){q.1Y.B(B,O)},B:C(B,1v){q.3e.1t();if(1s 1v==\'1y\')1v=1r;if(!q.G.1K){q.$T.2m()}B=q.1v.7Q(B);if(1v){B=q.1v.8B(B)}if(q.L.1P(\'2F\')){q.1Y.c7(B)}M{if(q.1v.9l)q.1Y.fS(B);M 1k.47(\'ox\',O,B);q.1Y.ew()}q.1v.ar();if(!q.G.1K){q.$T.1h(\'p\').1z($.1e(q.L.3S,q))}q.1d.1S();q.1R.2K();if(1v){q.1v.4y()}},ew:C(){if(!q.L.1P(\'4g\'))F;E $1N=$(q.J.4a()).1N();if($1N.12>0&&$1N[0].1n==\'P\'&&$1N.B()===\'\'){$1N.1t()}},c7:C(B){if(q.L.iK()){E 1q=q.L.4Z(\'P\');E $B=$(\'<1j>\').1F(B);E ga=$B.2a().is(\'p, :7S, dl, 3s, ol, 1j, 3T, 2Z, 26, 2H, c4, 4h, 7S, cR, eC, eH\');if(1q&&ga)q.1Y.fX(1q,B);M q.1Y.ff(B);F}1k.J.8b().jF(B)},fS:C(B){B=q.1v.7Q(B);q.J.1b();q.14.4S();E el=1k.3y(\'1j\');el.3A=B;E 4L=1k.9P(),Q,5G;53((Q=el.9N)){5G=4L.83(Q)}q.14.3R(4L);q.14.48(1r);q.1T.55(5G)},Q:C(Q,4S){Q=Q[0]||Q;E B=q.L.5N(Q);B=q.1v.7Q(B);if(B.1V(/</g)!==4d){Q=$(B)[0]}q.J.1b();if(4S!==O){q.14.4S()}q.14.3R(Q);q.14.48(O);q.J.4b();F Q},oy:C(Q,x,y){Q=Q[0]||Q;q.J.1b();E 14;if(1k.aD){E 3x=1k.aD(x,y);q.14.2Q(3x.fL,3x.2D);q.14.48(1r);q.14.3R(Q)}M if(1k.a5){14=1k.a5(x,y);14.3R(Q)}M if(1s 1k.3c.9Q!="1y"){14=1k.3c.9Q();14.9S(x,y);E 85=14.fN();85.9S(x,y);14.fO("fW",85);14.7F()}},c3:C(e,Q){Q=Q[0]||Q;E 14;E x=e.ou,y=e.ot;if(1k.aD){E 3x=1k.aD(x,y);E 2V=1k.4E();14=2V.6f(0);14.2Q(3x.fL,3x.2D);14.48(1r);14.3R(Q)}M if(1k.a5){14=1k.a5(x,y);14.3R(Q)}M if(1s 1k.3c.9Q!="1y"){14=1k.3c.9Q();14.9S(x,y);E 85=14.fN();85.9S(x,y);14.fO("fW",85);14.7F()}},fX:C(1q,B){E Q=1k.3y(\'1i\');Q.3G=\'I-ie-5u\';q.1Y.Q(Q);E 7N=$(1q).B();7N=\'<p>\'+7N.K(/<1i 1G="I-ie-5u"><\\/1i>/gi,\'</p>\'+B+\'<p>\')+\'</p>\';7N=7N.K(/<p><\\/p>/gi,\'\');$(1q).2u(7N)},ff:C(B){q.J.1b();q.14.4S();E el=1k.3y("1j");el.3A=B;E 4L=1k.9P(),Q,5G;53((Q=el.9N)){5G=4L.83(Q)}q.14.3R(4L);q.14.48(O);q.J.4b()}}},1D:C(){F{3N:C(e){if(q.7k)F;E 1l=e.7m;E 57=(1l>=37&&1l<=40);q.1D.4f=e.8w||e.6I;q.1D.1A=q.J.3v();q.1D.1q=q.J.5Q();q.1D.R=q.J.4a();q.1D.2H=q.L.aa(q.1D.1A,\'2H\');q.1D.26=q.L.aa(q.1D.1A,\'26\');q.1D.7G=q.L.aa(q.1D.1A,\'7G\');q.6i.3N(e,1l);if(q.L.7n()){q.1D.ft(57,1l);q.1D.fu(e,1l)}q.1D.fl(57);q.1D.fG(e,1l);E g7=q.1W.2q(\'1D\',e);if(g7===O){e.2t();F O}if(q.G.bu&&(q.L.1P(\'2F\')||q.L.1P(\'4g\'))&&(1l===q.3t.ci||1l===q.3t.g8)){E cg=O;E $3T=O;if(q.1D.R&&q.1D.R.1n===\'6w\'){$3T=$(q.1D.R).2p(\'3T\',q.$T[0])}if($3T&&$3T.1h(\'2Z\').30()[0]===q.1D.R){cg=1r}if(q.L.6D()&&cg){E Q=$(q.G.6s);$3T.3C(Q);q.1T.2Q(Q)}}if(q.G.bu&&1l===q.3t.ci){q.1D.fC()}if(!q.G.bu&&1l===q.3t.6R){e.2t();if(!q.14.4Y)q.14.4S();F}if(1l==q.3t.6R&&!e.6O&&!e.8w&&!e.6I){E g0=q.1W.2q(\'os\',e);if(g0===O){e.2t();F O}if(q.1D.26&&q.1D.kI(e)===1r){F O}E 1A,$1N;if(q.1D.2H){F q.1D.kB(e)}M if(q.1D.26||q.1D.7G){1A=q.J.3v();$1N=$(1A).1N();if($1N.12!==0&&$1N[0].1n==\'5l\'){F q.1D.6U(e)}M if(q.L.6D()&&(1A&&1A!=\'6M\')){F q.1D.9H(e)}M{F q.1D.6U(e)}}M if(q.G.1K&&!q.1D.R){1A=q.J.3v();$1N=$(q.1D.1A).1N();if($1N.12!==0&&$1N[0].1n==\'5l\'){F q.1D.6U(e)}M if(1A!==O&&$(1A).3r(\'I-7H-3h\')){q.1T.55(1A);$(1A).2a().44();F q.1D.9H(e)}M{if(q.L.dI()){F q.1D.9H(e)}M if($1N.12===0&&1A===O&&1s $1N.o7!=\'1y\'){F q.1D.6U(e)}F q.1D.6U(e)}}M if(q.G.1K&&q.1D.R){3u($.1e(q.1D.fA,q),1)}M if(!q.G.1K&&q.1D.R){3u($.1e(q.1D.hU,q),1);if(q.1D.R.1n===\'5y\'){1A=q.J.3v();E $1q=$(1A).2p(\'li\',q.$T[0]);E $2e=$1q.2p(\'3s,ol\',q.$T[0]);if($1q.12!==0&&q.L.3z($1q.B())&&$2e.1N().12===0&&q.L.3z($2e.1h("li").30().B())){$2e.1h("li").30().1t();E Q=$(q.G.6s);$2e.3C(Q);q.1T.2Q(Q);F O}}}M if(!q.G.1K&&!q.1D.R){F q.1D.kF(e)}}if(1l===q.3t.6R&&(e.8w||e.6O)){F q.1D.fB(e)}if(1l===q.3t.ce||e.6I&&1l===dS||e.6I&&1l===dG){F q.1D.fx(e,1l)}if(1l===q.3t.7x||1l===q.3t.8n){E 21=q.J.6V();if(21){E 2o=21.12;E 30;2C(E i=0;i<2o;i++){E 3O=$(21[i]).3O(\'1M\');if(3O.12!==0){E 3w=q;$.1z(3O,C(z,s){E $s=$(s);if($s.1O(\'7K\')!=\'5z\')F;3w.1W.2q(\'cj\',s.4r,$s);30=s})}M if(21[i].1n==\'bF\'){if(30!=21[i]){q.1W.2q(\'cj\',21[i].4r,$(21[i]));30=21[i]}}}}}if(1l===q.3t.7x){E R=q.J.4a();E fp=($(R).1O(\'4G-2c\')!==\'nP\');if(R&&fp&&q.14.4Y&&q.L.ic()){q.3B.9j();e.2t();F}if(q.L.1P(\'4g\')){E 4D=q.J.jp();E bl=$(4D).4D()[0];if(4D&&4D.1n===\'fr\')$(4D).1t();if(bl&&bl.1n===\'fr\')$(bl).1t()}q.1D.k2();q.1D.k1(e)}q.1d.1S()},ft:C(57,1l){if(!57&&(q.1W.76()==\'2A\'||q.1W.76()==\'57\')){q.1W.9k(O);if(q.1D.fo(1l)){q.28.1U()}}},fo:C(1l){E k=q.3t;E 51=[k.7x,k.8n,k.6R,k.am,k.ce,k.fh,k.fg,k.fi,k.fj];F($.3q(1l,51)==-1)?1r:O},fl:C(57){if(!57)F;if((q.1W.76()==\'2A\'||q.1W.76()==\'57\')){q.1W.9k(O);F}q.1W.9k(\'57\')},fu:C(e,1l){if(q.1D.4f&&1l===90&&!e.6O&&!e.fD&&q.G.28.12){e.2t();q.28.9v();F}M if(q.1D.4f&&1l===90&&e.6O&&!e.fD&&q.G.9L.12!==0){e.2t();q.28.bG();F}M if(!q.1D.4f){if(1l==q.3t.7x||1l==q.3t.8n||(1l==q.3t.6R&&!e.8w&&!e.6O)){q.28.1U()}}},fG:C(e,1l){if(q.1D.4f&&1l===65){q.L.fZ()}M if(1l!=q.3t.iA&&!q.1D.4f){q.L.8u()}},fC:C(){E 2d=[q.1D.26,q.1D.2H,q.1D.7G];2C(E i=0;i<2d.12;i++){if(2d[i]){q.1D.kx(2d[i]);F O}}},fB:C(e){q.28.1U();if(q.L.6D()){F q.1D.9H(e)}F q.1D.6U(e)},fx:C(e,1l){if(!q.G.fw)F 1r;if(q.L.3z(q.1d.1b())&&q.G.aR===O)F 1r;e.2t();E Q;if(q.1D.2H&&!e.6O){Q=(q.G.6T)?1k.8A(9i(q.G.6T+1).3d(\'\\bg\')):1k.8A(\'\\t\');q.1Y.Q(Q);q.1d.1S()}M if(q.G.aR!==O){Q=1k.8A(9i(q.G.aR+1).3d(\'\\bg\'));q.1Y.Q(Q);q.1d.1S()}M{if(e.6I&&1l===dG)q.3B.9j();M if(e.6I&&1l===dS)q.3B.bB();M if(!e.6O)q.3B.bB();M q.3B.9j()}F O},fA:C(){E 4H=q.J.4a();E aT=4H.3A.K(/<br\\s?\\/?>/gi,\'\');if((4H.1n===\'7p\'||4H.1n===\'P\')&&aT===\'\'&&!$(4H).3r(\'I-T\')){E br=1k.3y(\'br\');$(4H).2u(br);q.1T.cd(br);q.1d.1S();F O}},hU:C(){E 4H=q.J.4a();E aT=4H.3A.K(/<br\\s?\\/?>/gi,\'\');if(4H.1n===\'7p\'&&q.L.3z(aT)&&!$(4H).3r(\'I-T\')){E p=1k.3y(\'p\');p.3A=q.G.5R;$(4H).2u(p);q.1T.2Q(p);q.1d.1S();F O}M if(q.G.kG&&4H.1n==\'P\'){$(4H).1L(\'1G\').1L(\'1p\')}},kF:C(e){e.2t();q.J.1b();E p=1k.3y(\'p\');p.3A=q.G.5R;q.14.4S();q.14.3R(p);q.1T.2Q(p);q.1d.1S();F O},kI:C(e){if(!q.L.6D())F;E 5x=$.3k($(q.1D.R).B());if(5x.3L(/(<br\\s?\\/?>){2}$/i)!=-1){e.2t();if(q.G.1K){E br=1k.3y(\'br\');$(q.1D.26).3C(br);q.1T.cd(br);$(q.1D.R).B(5x.K(/<br\\s?\\/?>$/i,\'\'))}M{E Q=$(q.G.6s);$(q.1D.26).3C(Q);q.1T.2Q(Q)}F 1r}F},kx:C(2k){if(!q.L.6D())F;q.28.1U();if(q.G.1K){E 2a=$(\'<1j>\').1F($.3k(q.$T.B())).2a();E 30=2a.30()[0];if(30.1n==\'6M\'&&30.3A===\'\'){30=2a.4D()[0]}if(q.L.5N(30)!=q.L.5N(2k))F;E br=1k.3y(\'br\');$(2k).3C(br);q.1T.55(br)}M{if(q.$T.2a().30()[0]!==2k)F;E Q=$(q.G.6s);$(2k).3C(Q);q.1T.2Q(Q)}},kB:C(e){e.2t();E Q=1k.8A(\'\\n\');q.J.1b();q.14.4S();q.14.3R(Q);q.1T.55(Q);q.1d.1S();F O},6U:C(e){F q.1D.cF(e)},9H:C(e){F q.1D.cF(e,1r)},cF:C(e,kv){e.kN();q.J.1b();E 5v=1k.3y(\'br\');if(q.L.1P(\'2F\')){q.14.48(O);q.14.3J(q.14.cG,q.14.d8)}M{q.14.4S()}q.14.3R(5v);E $b3=$(5v).1q("a");if($b3.12>0){$b3.1h(5v).1t();$b3.3C(5v)}if(kv===1r){E $1N=$(5v).1N();if($1N.12!==0&&$1N[0].1n===\'5l\'&&q.L.dI()){q.1T.55(5v);q.1d.1S();F O}E d9=1k.3y(\'br\');q.14.3R(d9);q.1T.55(d9)}M{if(q.L.1P(\'2F\')){E 3h=1k.3y(\'1i\');3h.3A=\'&#aZ;\';$(5v).3C(3h);q.1T.55(3h);$(3h).1t()}M{E 14=1k.8b();14.9p(5v);14.48(1r);E J=3l.4E();J.9E();J.4b(14)}}q.1d.1S();F O},k2:C(){E $1A=$(q.1D.1A);if($1A.1g().3L(/^\\5X$/g)===0){$1A.1t()}},k1:C(e){E $1A=$(q.1D.1A);E $1q=$(q.1D.1q);E 2Z=$1A.2p(\'2Z\',q.$T[0]);if(2Z.12!==0&&$1A.2p(\'li\',q.$T[0])&&$1q.3O(\'li\').12===1){if(!q.L.3z($1A.1g()))F;e.2t();$1A.1t();$1q.1t();q.1T.2Q(2Z)}}}},2x:C(){F{3N:C(e){if(q.7k)F;E 1l=e.7m;q.2x.1A=q.J.3v();q.2x.1q=q.J.5Q();E $1q=q.L.4v($(q.2x.1q).1q());E jU=q.1W.2q(\'2x\',e);if(jU===O){e.2t();F O}if(!q.G.1K&&q.2x.1A.bH===3&&q.2x.1A.12<=1&&(q.2x.1q===O||q.2x.1q.1n==\'eh\')){q.2x.b8()}if(!q.G.1K&&q.L.4v(q.2x.1A)&&q.2x.1A.1n===\'7p\'){q.2x.b8(O)}if(!q.G.1K&&$(q.2x.1q).3r(\'I-7H-3h\')&&($1q===O||$1q[0].1n==\'eh\')){$(q.2x.1q).2a().44();q.2x.b8()}if(q.2z.b6()&&q.2z.k5(1l))q.2z.31();if(1l===q.3t.8n||1l===q.3t.7x){if(q.L.1P(\'4g\')){E 2Z=$(q.1D.1A).2p(\'2Z\',q.$T[0]);if(2Z.82()!==0&&2Z.1g()!==\'\'){e.2t();F O}}q.1v.4y();if(q.1R.N){e.2t();q.N.7u();q.28.1U();q.N.1t(q.1R.N);q.1R.N=O;F O}q.$T.1h(\'p\').1z($.1e(C(i,s){q.L.3S(i,$(s).B())},q));if(q.G.1K&&q.2x.1A&&q.2x.1A.1n==\'7p\'&&q.L.3z(q.2x.1A.3A)){$(q.2x.1A).3C(q.J.5f());q.J.3g();$(q.2x.1A).1t()}F q.2x.kr(e)}},b8:C(8N){E $1A=$(q.2x.1A);E Q;if(8N===O){Q=$(\'<p>\').1F($1A.B())}M{Q=$(\'<p>\').1F($1A.8N())}$1A.2u(Q);E 1N=$(Q).1N();if(1s(1N[0])!==\'1y\'&&1N[0].1n==\'5l\'){1N.1t()}q.1T.3J(Q)},kr:C(e){E B=$.3k(q.$T.B());if(!q.L.3z(B))F;e.2t();if(q.G.1K){q.$T.B(q.J.5f());q.J.3g()}M{q.$T.B(q.G.6s);q.2m.2Q()}q.1d.1S();F O}}},1H:C(){F{2K:C(){q.G.bY=q.G.ku[q.G.1H]},1b:C(1x){F(1s q.G.bY[1x]!=\'1y\')?q.G.bY[1x]:\'\'}}},3M:C(){F{1Y:C(){q.28.1U();E 1Z=q.J.42();if(1Z[0]!==O&&q.3M.kl(1Z)){if(!q.L.1P(\'2F\'))q.$T.2m();F}if(q.L.1P(\'2F\')){q.3M.a3()}M{q.3M.ki()}},kl:C(1Z){E 8g=[\'li\',\'2Z\',\'5S\',\'26\',\'7G\',\'2H\',\'dl\',\'dt\',\'dd\'];E 3H=1Z[0].1n.3f();E 30=q.J.ji();30=(1s 30==\'1y\')?3H:30.1n.3f();E d2=$.3q(3H,8g)!=-1;E kh=$.3q(30,8g)!=-1;if((d2&&kh)||d2){F 1r}},a3:C(){q.L.8k();q.28.1U();q.1Y.Q(1k.3y(\'hr\'));q.L.aX();q.1d.1S()},ki:C(){q.28.1U();E d3=\'<p id="I-1Y-3M"><br /></p>\';if(q.G.1K)d3=\'<br id="I-1Y-3M">\';1k.47(\'nJ\',O,\'<hr>\'+d3);q.3M.km();q.1d.1S()},km:C(){E Q=q.$T.1h(\'#I-1Y-3M\');E 1N=$(Q).1N()[0];E 1Q=1N;if(q.L.1P(\'4g\')&&1N&&1N.3A===\'\'){1Q=$(1N).1N()[0];$(1N).1t()}if(1Q){Q.1t();if(!q.G.1K){q.$T.2m();q.3M.2Q(1Q)}}M{Q.1L(\'id\');q.3M.2Q(Q[0])}},2Q:C(Q){if(1s Q===\'1y\')F;E kM=1k.8A(\'\\5X\');q.J.1b();q.14.2Q(Q,0);q.14.3R(kM);q.14.48(1r);q.J.4b()}}},V:C(){F{2O:C(e){if(1s e!=\'1y\'&&e.2t)e.2t();if(!q.1R.cY(\'a\')){q.1a.2K(\'V\',q.1H.1b(\'bx\'),ko)}M{q.1a.2K(\'V\',q.1H.1b(\'dB\'),ko)}q.1a.cI();E kA=!q.1R.cY(\'a\')?q.1H.1b(\'1Y\'):q.1H.1b(\'7e\');q.V.kz=q.1a.cJ(kA);q.J.1b();q.V.kj();q.V.kp();if(q.V.1Q==\'7v\')$(\'#I-V-8a\').6a(\'bC\',1r);q.V.$8R=$(\'#I-V-2h\');q.V.$d4=$(\'#I-V-2h-1g\');q.V.$d4.2J(q.V.1g);q.V.$8R.2J(q.V.2h);q.V.kz.on(\'2A\',$.1e(q.V.1Y,q));$(\'.I-V-3n\').1t();q.J.3m();q.1a.2O();q.V.$8R.2m()},kp:C(){E ks=3w.kf.2j.K(/\\/$/i,\'\');if(1s q.V.2h!=="1y"){q.V.2h=q.V.2h.K(ks,\'\');q.V.2h=q.V.2h.K(/^\\/#/,\'#\');q.V.2h=q.V.2h.K(\'d5:\',\'\');if(!q.G.5g){E 3I=29 2l(\'^(8U|8d|5w)://\'+3w.kf.nT,\'i\');q.V.2h=q.V.2h.K(3I,\'\')}}},kj:C(){q.V.$Q=O;E $el=$(q.J.3v()).2p(\'a\',q.$T[0]);if($el.12!==0&&$el[0].1n===\'A\'){q.V.$Q=$el;q.V.2h=$el.1c(\'2j\');q.V.1g=$el.1g();q.V.1Q=$el.1c(\'1Q\')}M{q.V.1g=q.2V.4s();q.V.2h=\'\';q.V.1Q=\'\'}},1Y:C(){q.3e.1t();E 1Q=\'\';E V=q.V.$8R.2J();E 1g=q.V.$d4.2J().K(/(<([^>]+)>)/ig,"");if($.3k(V)===\'\'){q.V.$8R.2f(\'I-3E-6X\').on(\'2x\',C(){$(q).2U(\'I-3E-6X\');$(q).2Y(\'2x\')});F}if(V.3L(\'@\')!=-1&&/(8U|8d|5w):\\/\\//i.ac(V)===O){V=\'d5:\'+V}M if(V.3L(\'#\')!==0){if($(\'#I-V-8a\').6a(\'bC\')){1Q=\'7v\'}E 7A=\'((kb--)?[a-7E-9]+(-[a-7E-9]+)*\\\\.)+[a-z]{2,}\';E 3I=29 2l(\'^(8U|8d|5w)://\'+7A,\'i\');E bA=29 2l(\'^\'+7A,\'i\');E jW=29 2l(\'\\.(B|o1)$\',\'i\');if(V.3L(3I)==-1&&V.3L(jW)==-1&&V.3L(bA)===0&&q.G.5g){V=q.G.5g+\'://\'+V}}q.V.1U(1g,V,1Q);q.1a.4j()},1U:C(1g,V,1Q){1g=$.3k(1g.K(/<|>/g,\'\'));q.J.3g();E 1Z=q.J.42();if(1g===\'\'&&V===\'\')F;if(1g===\'\'&&V!==\'\')1g=V;if(q.V.$Q){q.28.1U();E $V=q.V.$Q,$el=$V.3O();if($el.12>0){53($el.12){$el=$el.3O()}$el=$el.2g()}M{$el=$V}$V.1c(\'2j\',V);$el.1g(1g);if(1Q!==\'\'){$V.1c(\'1Q\',1Q)}M{$V.1L(\'1Q\')}q.J.9s($V);q.1d.1S()}M{if(q.L.1P(\'4g\')&&q.V.1g===\'\'){E $a=$(\'<a />\').1c(\'2j\',V).1g(1g);if(1Q!==\'\')$a.1c(\'1Q\',1Q);$a=$(q.1Y.Q($a));if(q.G.1K){$a.3C(\'&5i;\')}q.J.9s($a)}M{E $a;if(q.L.1P(\'2F\')){$a=$(\'<a 2j="\'+V+\'">\').1g(1g);if(1Q!==\'\')$a.1c(\'1Q\',1Q);$a=$(q.1Y.Q($a));if(q.J.dr().1V(/\\s$/)){$a.3C(" ")}q.J.9s($a)}M{1k.47(\'nW\',O,V);$a=$(q.J.3v()).2p(\'a\',q.$T[0]);if(q.L.1P(\'4g\')){$a=$(\'a[ka=""]\')}if(1Q!==\'\')$a.1c(\'1Q\',1Q);$a.1L(\'1p\').1L(\'ka\');if(q.J.dr().1V(/\\s$/)){$a.3C(" ")}if(q.V.1g!==\'\'||q.V.1g!=1g){if(!q.G.1K&&1Z&&1Z.12<=1){$a.1g(1g)}M if(q.G.1K){$a.1g(1g)}q.J.9s($a)}}}q.1d.1S();q.1W.2q(\'nV\',$a)}3u($.1e(C(){q.1R.5A()},q),5)},6t:C(e){if(1s e!=\'1y\'&&e.2t){e.2t()}E 21=q.J.6V();if(!21)F;q.28.1U();E 2o=21.12;E 5A=[];2C(E i=0;i<2o;i++){if(21[i].1n===\'A\'){5A.2R(21[i])}E $Q=$(21[i]).2p(\'a\',q.$T[0]);$Q.2u($Q.2a())}q.1W.2q(\'nX\',5A);$(\'.I-V-3n\').1t();q.1d.1S()},7C:C(3G){q.V.8W(3G,\'7C\')},2f:C(3G){q.V.8W(3G,\'2f\')},2U:C(3G){q.V.8W(3G,\'2U\')},8W:C(3G,1C){E 5A=q.J.jh([\'a\']);if(5A===O)F;$.1z(5A,C(){$(q)[1C](3G)})}}},2z:C(){F{k5:C(1l){F 1l==q.3t.6R||1l==q.3t.kT},b6:C(){F q.G.bs&&(q.G.dk||q.G.dj||q.G.8C)&&!q.L.4Z(\'8P\')},31:C(){E 2z=q.2z,G=q.G;q.$T.1h(":6q(4R,1M,a,2H)").nZ().2a().dc(C(){F q.bH===3&&$.3k(q.6o)!=""&&!$(q).1q().is("2H")&&(q.6o.1V(G.2z.4w.6K)||q.6o.1V(G.2z.4w.6F)||q.6o.1V(G.2z.4w.N)||q.6o.1V(G.2z.4w.2h))}).1z(C(){E 1g=$(q).1g(),B=1g;if(G.8C&&(B.1V(G.2z.4w.6K)||B.1V(G.2z.4w.6F))){B=2z.8C(B)}M if(G.dj&&B.1V(G.2z.4w.N)){B=2z.j1(B)}M if(G.dk){B=2z.bs(B)}$(q).bi(1g.K(1g,B)).1t()});E ky=q.$T.1h(\'.I-2z-41\').1z(C(){E $el=$(q);$el.2U(\'I-2z-41\');if($el.1c(\'1G\')===\'\')$el.1L(\'1G\');F $el[0]});3u($.1e(C(){q.1R.2K();q.1W.2q(\'2z\',ky)},q),6G);q.1d.1S()},8C:C(B){E dm=\'<4R 1G="I-2z-41" 2L="p9" 3i="pa" 4r="\',di=\'" pb="0" p7></4R>\';if(B.1V(q.G.2z.4w.6K)){B=B.K(q.G.2z.4w.6K,dm+\'//7f.6K.bw/7g/$1\'+di)}if(B.1V(q.G.2z.4w.6F)){B=B.K(q.G.2z.4w.6F,dm+\'//p4.6F.bw/6E/$2\'+di)}F B},j1:C(B){E 3Q=B.1V(q.G.2z.4w.N);if(3Q){B=B.K(B,\'<1M 4r="\'+3Q+\'" 1G="I-2z-41" />\');if(q.G.1K){if(!q.L.3z(q.1d.1b())){B=\'<br>\'+B}}B+=\'<br>\'}F B},bs:C(B){E 3Q=B.1V(q.G.2z.4w.2h);if(3Q){3Q=$.pe(3Q,C(v,k){F $.3q(v,3Q)===k});E 12=3Q.12;2C(E i=0;i<12;i++){E 2j=3Q[i],1g=2j,5g=q.G.5g+\'://\';if(2j.1V(/(5w?|8d):\\/\\//i)!==4d){5g=""}if(1g.12>q.G.dh){1g=1g.aV(0,q.G.dh)+\'...\'}if(1g.3L(\'%\')===-1){1g=hn(1g)}E df="\\\\b";if($.3q(2j.de(-1),["/","&","="])!=-1){df=""}E iV=29 2l(\'(\'+2j.K(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\$&")+df+\')\',\'g\');B=B.K(iV,\'<a 2j="\'+5g+$.3k(2j)+\'" 1G="I-2z-41">\'+$.3k(1g)+\'</a>\')}}F B}}},2e:C(){F{3j:C(4F){q.3e.1t();if(!q.L.1P(\'2F\'))q.$T.2m();q.28.1U();q.J.3m();E 1q=q.J.5Q();E $2e=$(1q).2p(\'ol, 3s\',q.$T[0]);if(!q.L.4v($2e)&&$2e.12!==0){$2e=O}E d1,d0;E 1t=O;if($2e&&$2e.12){1t=1r;E dg=$2e[0].1n;d1=(4F===\'5o\'&&dg===\'8y\');d0=(4F===\'5n\'&&dg===\'8t\')}if(d1){q.L.4J($2e,\'ol\')}M if(d0){q.L.4J($2e,\'3s\')}M{if(1t){q.2e.1t(4F,$2e)}M{q.2e.1Y(4F)}}q.J.3g();q.1d.1S()},1Y:C(4F){E 1A=q.J.3v();E $2Z=$(1A).2p(\'2Z, 5S\',q.$T[0]);if(q.L.1P(\'2F\')&&q.G.1K){q.2e.a3(4F)}M{1k.47(\'1Y\'+4F)}E 1q=q.J.5Q();E $2e=$(1q).2p(\'ol, 3s\',q.$T[0]);if($2Z.12!==0){E ja=$2Z.8N();$2Z.3C(ja).1t(\'\')}if(q.L.3z($2e.1h(\'li\').1g())){E $3O=$2e.3O(\'li\');$3O.1h(\'br\').1t();$3O.1F(q.J.5f());if(q.G.1K&&q.L.1P(\'4g\')&&$3O.82()==2&&q.L.3z($3O.eq(1).1g())){$3O.eq(1).1t()}}if($2e.12){E $88=$2e.1q();if(q.L.4v($88)&&$88[0].1n!=\'5y\'&&q.L.6J($88[0])){$88.2u($88.2a())}}if(!q.L.1P(\'2F\')){q.$T.2m()}q.1v.4y()},a3:C(4F){E 4P=q.J.62(\'1j\');E a4=$(4P).B();E 86=(4F==\'5o\')?$(\'<ol>\'):$(\'<3s>\');E 8S=$(\'<li>\');if($.3k(a4)===\'\'){8S.1F(q.J.5f());86.1F(8S);q.$T.1h(\'#J-2s-1\').2u(86)}M{E 8i=a4.4p(/<br\\s?\\/?>/gi);if(8i){2C(E i=0;i<8i.12;i++){if($.3k(8i[i])!==\'\'){86.1F($(\'<li>\').B(8i[i]))}}}M{8S.1F(a4);86.1F(8S)}$(4P).2u(86)}},1t:C(4F,$2e){if($.3q(\'3s\',q.J.42()))4F=\'5n\';1k.47(\'1Y\'+4F);E $1A=$(q.J.3v());q.3B.a1();if(!q.G.1K&&$1A.2p(\'li, 5S, 2Z\',q.$T[0]).12===0){1k.47(\'a0\',O,\'p\');q.$T.1h(\'3s, ol, 26\').1z($.1e(q.L.3S,q))}E $3T=$(q.J.3v()).2p(\'3T\',q.$T[0]);E $4D=$3T.4D();if(!q.G.1K&&$3T.12!==0&&$4D.12!==0&&$4D[0].1n==\'5l\'){$4D.1t()}q.1v.4y()}}},1a:C(){F{ao:{},j9:C(){q.G.1a={j8:5Y()+\'<4h id="I-1a-N-7e">\'+\'<2M>\'+q.1H.1b(\'1J\')+\'</2M>\'+\'<3E 1m="1g" id="I-N-1J" />\'+\'<2M 1G="I-N-V-3Z">\'+q.1H.1b(\'V\')+\'</2M>\'+\'<3E 1m="1g" id="I-N-V" 1G="I-N-V-3Z" 4Q-2M="\'+q.1H.1b(\'V\')+\'" />\'+\'<2M 1G="I-N-V-3Z"><3E 1m="j6" id="I-N-V-8a" 4Q-2M="\'+q.1H.1b(\'at\')+\'"> \'+q.1H.1b(\'at\')+\'</2M>\'+\'<2M 1G="I-N-4e-3Z">\'+q.1H.1b(\'cP\')+\'</2M>\'+\'<7F 1G="I-N-4e-3Z" id="I-N-5a" 4Q-2M="\'+q.1H.1b(\'cP\')+\'">\'+\'<3Z 1E="5z">\'+q.1H.1b(\'5z\')+\'</3Z>\'+\'<3Z 1E="2c">\'+q.1H.1b(\'2c\')+\'</3Z>\'+\'<3Z 1E="5E">\'+q.1H.1b(\'5E\')+\'</3Z>\'+\'<3Z 1E="4z">\'+q.1H.1b(\'4z\')+\'</3Z>\'+\'</7F>\'+\'</4h>\',N:5Y()+\'<4h id="I-1a-N-1Y">\'+\'<1j id="I-1a-N-4c"></1j>\'+\'</4h>\',22:5Y()+\'<4h id="I-1a-22-1Y">\'+\'<1j id="I-1a-22-1w-2N">\'+\'<2M>\'+q.1H.1b(\'6h\')+\'</2M>\'+\'<3E 1m="1g" id="I-6h" 4Q-2M="\'+q.1H.1b(\'6h\')+\'" /><br><br>\'+\'<1j id="I-1a-22-1w"></1j>\'+\'</1j>\'+\'</4h>\',V:5Y()+\'<4h id="I-1a-V-1Y">\'+\'<2M>cM</2M>\'+\'<3E 1m="2h" id="I-V-2h" 4Q-2M="cM" />\'+\'<2M>\'+q.1H.1b(\'1g\')+\'</2M>\'+\'<3E 1m="1g" id="I-V-2h-1g" 4Q-2M="\'+q.1H.1b(\'1g\')+\'" />\'+\'<2M><3E 1m="j6" id="I-V-8a"> \'+q.1H.1b(\'at\')+\'</2M>\'+\'</4h>\'};$.7w(q.G,q.G.1a)},cL:C(1x,2y){q.1a.ao[1x]=2y},oT:C($1a){q.1a.$8L=$(\'<1j>\').1c(\'id\',\'I-1a-8L\');$1a.6u(q.1a.$8L)},oY:C(id,1x,8I){E $5C=$(\'<a 2j="#" 3X="5C\'+id+\'">\').1g(1x);if(8I){$5C.2f(\'8I\')}E 3w=q;$5C.on(\'2A\',C(e){e.2t();$(\'.I-5C\').3p();$(\'.I-\'+$(q).1c(\'3X\')).2O();3w.1a.$8L.1h(\'a\').2U(\'8I\');$(q).2f(\'8I\')});q.1a.$8L.1F($5C)},oD:C(1x,iG){q.G.1a[1x]=iG},iB:C(1x){F q.G.1a[1x]},oL:C(){F q.$az.1h(\'4h\')},2K:C(6g,1J,2L){q.1a.6g=6g;q.1a.2L=2L;q.1a.2r();q.1a.iN();q.1a.iF(1J);q.1a.jS();q.1a.iE();if(1s q.1a.ao[6g]!=\'1y\'){q.1a.ao[6g].5Z(q)}},2O:C(){q.L.dH();if(q.L.6A()){q.1a.do()}M{q.1a.av()}if(q.G.cH){q.$4C.2f("I-1a-iI")}q.$81.2O();q.$4C.2O();q.$1a.1c(\'6H\',\'-1\');q.$1a.2m();q.1a.iP();q.L.8k();if(!q.L.6A()){3u($.1e(q.1a.av,q),0);$(3l).on(\'4M.I-1a\',$.1e(q.1a.4M,q))}q.1W.2q(\'pl\',q.1a.6g,q.$1a);$(1k).2Y(\'pd.1a\');q.$1a.1h(\'3E[1m=1g],3E[1m=2h],3E[1m=p1]\').on(\'1D.I-1a\',$.1e(q.1a.iQ,q))},av:C(){E 3i=q.$1a.p2();E a6=$(3l).3i();E 7q=$(3l).2L();if(q.1a.2L>7q){q.$1a.1O({2L:\'96%\',6d:(a6/2-3i/2)+\'px\'});F}if(3i>a6){q.$1a.1O({2L:q.1a.2L+\'px\',6d:\'p6\'})}M{q.$1a.1O({2L:q.1a.2L+\'px\',6d:(a6/2-3i/2)+\'px\'})}},do:C(){q.$1a.1O({2L:\'96%\',6d:\'2%\'})},4M:C(){if(q.L.6A()){q.1a.do()}M{q.1a.av()}},iF:C(1J){q.$8Z.B(1J)},iE:C(){q.$az.B(q.1a.iB(q.1a.6g))},jS:C(){if(1s $.fn.iD===\'1y\')F;q.$1a.iD({iJ:q.$8Z});q.$8Z.1O(\'nK\',\'nH\')},iQ:C(e){if(e.7m!=13)F;e.2t();q.$1a.1h(\'1u.I-1a-7B-23\').2A()},cI:C(){E 1u=$(\'<1u>\').2f(\'I-1a-23 I-1a-4j-23\').B(q.1H.1b(\'iR\'));1u.on(\'2A\',$.1e(q.1a.4j,q));q.$8Q.1F(1u)},iS:C(2M){F q.1a.cK(2M,\'75\')},cJ:C(2M){F q.1a.cK(2M,\'7B\')},cK:C(2M,3G){E 1u=$(\'<1u>\').2f(\'I-1a-23\').2f(\'I-1a-\'+3G+\'-23\').B(2M);q.$8Q.1F(1u);F 1u},iP:C(){E 4k=q.$8Q.1h(\'1u\');E cQ=4k.12;if(cQ===0)F;4k.1O(\'2L\',(6G/cQ)+\'%\')},2r:C(){q.1a.iM();q.$4C=$(\'<1j id="I-1a-2N"/>\').3p();q.$1a=$(\'<1j id="I-1a" 9D="nI" 4Q-nN="I-1a-7S" />\');q.$8Z=$(\'<7S id="I-1a-7S"/>\');q.$8v=$(\'<1u 1m="1u" id="I-1a-4j" 6H="1" 4Q-2M="nS" />\').B(\'&nR;\');q.$az=$(\'<1j id="I-1a-3c" />\');q.$8Q=$(\'<cR />\');q.$1a.1F(q.$8Z);q.$1a.1F(q.$8v);q.$1a.1F(q.$az);q.$1a.1F(q.$8Q);q.$4C.1F(q.$1a);q.$4C.ax(1k.3c)},iM:C(){q.$81=$(\'<1j id="I-1a-op">\').3p();$(\'3c\').6u(q.$81)},iN:C(){q.$8v.on(\'2A.I-1a\',$.1e(q.1a.4j,q));$(1k).on(\'2x.I-1a\',$.1e(q.1a.8T,q));q.$T.on(\'2x.I-1a\',$.1e(q.1a.8T,q));q.$4C.on(\'2A.I-1a\',$.1e(q.1a.4j,q))},jd:C(){q.$8v.2Y(\'2A.I-1a\');$(1k).2Y(\'2x.I-1a\');q.$T.2Y(\'2x.I-1a\');q.$4C.2Y(\'2A.I-1a\');$(3l).2Y(\'4M.I-1a\')},8T:C(e){if(e.7m!=q.3t.am)F;q.1a.4j(O)},4j:C(e){if(e){if(!$(e.1Q).3r(\'I-1a-4j-23\')&&e.1Q!=q.$8v[0]&&e.1Q!=q.$4C[0]){F}e.2t()}if(!q.$4C)F;q.1a.jd();q.L.aK();q.$81.1t();q.$4C.jr(\'oh\',$.1e(C(){q.$4C.1t();3u($.1e(q.L.aX,q),0);if(e!==1y)q.J.3g();$(1k.3c).1O(\'aY\',q.1a.of);q.1W.2q(\'pp\',q.1a.6g)},q))}}},1R:C(){F{2K:C(){if(1s q.G.je!="1y")F;if(q.L.1P(\'2F\')){E 3w=q;q.$T.1h(\'2H, 1d\').on(\'a8\',C(){3w.$T.1c(\'5c\',O);$(q).1c(\'5c\',1r)}).on(\'a9\',C(){3w.$T.1c(\'5c\',1r);$(q).1L(\'5c\')})}q.1R.9W();q.1R.5A()},1B:C(e,2i){q.1R.4k(e,2i);q.1R.7r()},cY:C($el,$1A){if(1s $1A==\'1y\'){E $1A=$(q.J.3v())}F $1A.is($el)||$1A.fY($el).12>0},7r:C(){E $1A=$(q.J.3v());$.1z(q.G.1R.7r,$.1e(C(1l,1E){E 1R=1E.1R,2k=1R.2k,$2w=1E.2w,cW=1s 1R[\'in\']!=\'1y\'?1R[\'in\']:O,cZ=1s 1R[\'2n\']!=\'1y\'?1R[\'2n\']:O;if($1A.2p(2k).82()>0){q.1R.cV($2w,cW,cZ)}M{q.1R.cV($2w,cZ,cW)}},q))},cV:C($2w,8z,ak){if(ak&&1s ak[\'1c\']!=\'1y\'){q.1R.cS($2w,ak.1c,1r)}if(1s 8z[\'1c\']!=\'1y\'){q.1R.cS($2w,8z.1c)}if(1s 8z[\'1J\']!=\'1y\'){$2w.1g(8z[\'1J\'])}},cS:C($2w,jE,cU){$.1z(jE,C(1l,1E){if(1l==\'1G\'){if(!cU){$2w.2f(1E)}M{$2w.2U(1E)}}M{if(!cU){$2w.1c(1l,1E)}M{$2w.1L(1l)}}})},dn:C($2w,2i,2T){if(1s 2T.1R=="1y")F;2T.2w=$2w;q.G.1R.7r.2R(2T)},4k:C(e,2i){E 1A=q.J.3v();E 1q=q.J.5Q();if(e!==O){q.1u.bV()}M{q.1u.bV(2i)}if(e===O&&2i!==\'B\'){if($.3q(2i,q.G.bq)!=-1)q.1u.q7(2i);F}$.1z(q.G.bJ,$.1e(C(1l,1E){E ae=$(1q).2p(1l,q.$T[0]);E bN=$(1A).2p(1l,q.$T[0]);if(ae.12!==0&&!q.L.4v(ae))F;if(!q.L.4v(bN))F;if(ae.12!==0||bN.2p(1l,q.$T[0]).12!==0){q.1u.8j(1E)}},q));E $1q=$(1q).2p(q.G.8q.4s().3f(),q.$T[0]);if(q.L.4v(1q)&&$1q.12){E 5a=($1q.1O(\'1g-5a\')===\'\')?\'2c\':$1q.1O(\'1g-5a\');q.1u.8j(\'5a\'+5a)}},q1:C(Y,2i){q.G.bq.2R(2i);q.G.bJ[Y]=2i},9W:C(){q.$T.1h(\'1M\').1z($.1e(C(i,1M){E $1M=$(1M);$1M.2p(\'a\',q.$T[0]).on(\'2A\',C(e){e.2t()});if(q.L.1P(\'2F\'))$1M.1c(\'pX\',\'on\');q.N.jC($1M)},q));$(1k).on(\'2A.I-N-75.\'+q.2G,$.1e(C(e){q.1R.N=O;if(e.1Q.1n==\'bF\'&&q.L.4v(e.1Q)){q.1R.N=(q.1R.N&&q.1R.N==e.1Q)?O:e.1Q}},q))},5A:C(){if(!q.G.jz)F;q.$T.1h(\'a\').on(\'5B.I.\'+q.2G+\' 2A.I.\'+q.2G,$.1e(q.1R.jB,q));q.$T.on(\'5B.I.\'+q.2G+\' 2A.I.\'+q.2G,$.1e(q.1R.bM,q));$(1k).on(\'5B.I.\'+q.2G+\' 2A.I.\'+q.2G,$.1e(q.1R.bM,q))},jI:C($V){F $V.2D()},jB:C(e){E $el=$(e.1Q);if($el[0].1n==\'bF\')F;if($el[0].1n!==\'A\')$el=$el.2p(\'a\',q.$T[0]);if($el[0].1n!==\'A\')F;E $V=$el;E 3x=q.1R.jI($V);E 3n=$(\'<1i 1G="I-V-3n"></1i>\');E 2j=$V.1c(\'2j\');if(2j===1y){2j=\'\'}if(2j.12>24)2j=2j.aV(0,24)+\'...\';E jP=$(\'<a 2j="\'+$V.1c(\'2j\')+\'" 1Q="7v" />\').B(2j).2f(\'I-V-3n-7B\');E jQ=$(\'<a 2j="#" />\').B(q.1H.1b(\'7e\')).on(\'2A\',$.1e(q.V.2O,q)).2f(\'I-V-3n-7B\');E jN=$(\'<a 2j="#" />\').B(q.1H.1b(\'6t\')).on(\'2A\',$.1e(q.V.6t,q)).2f(\'I-V-3n-7B\');3n.1F(jP).1F(\' | \').1F(jQ).1F(\' | \').1F(jN);3n.1O({2X:(3x.2X+5J($V.1O(\'3M-3i\'),10))+\'px\',2c:3x.2c+\'px\'});$(\'.I-V-3n\').1t();$(\'3c\').1F(3n)},bM:C(e){e=e.87||e;E 1Q=e.1Q;E $1q=$(1Q).2p(\'a\',q.$T[0]);if($1q.12!==0&&$1q[0].1n===\'A\'&&1Q.1n!==\'A\'){F}M if((1Q.1n===\'A\'&&q.L.4v(1Q))||$(1Q).3r(\'I-V-3n-7B\')){F}$(\'.I-V-3n\').1t()}}},2W:C(){F{2K:C(B){if(q.G.1K)F B;if(B===\'\'||B===\'<p></p>\')F q.G.6s;B=B+"\\n";q.2W.aA=[];q.2W.z=0;B=B.K(/(<br\\s?\\/?>){1,}\\n?<\\/26>/gi,\'</26>\');B=q.2W.jK(B);B=q.2W.jy(B);B=q.2W.jf(B);B=q.2W.jj(B);B=q.2W.9d(B);B=q.2W.jk(B);B=B.K(29 2l(\'<br\\\\s?/?>\\n?<(\'+q.G.bL.3d(\'|\')+\')(.*?[^>])>\',\'gi\'),\'<p><br /></p>\\n<$1$2>\');F $.3k(B)},jK:C(B){E $1j=$(\'<1j />\').1F(B);$1j.1h(\'26 p\').2u(C(){F $(q).1F(\'<br />\').2a()});B=$1j.B();$1j.1h(q.G.bL.3d(\', \')).1z($.1e(C(i,s){q.2W.z++;q.2W.aA[q.2W.z]=s.7T;B=B.K(s.7T,\'\\n{K\'+q.2W.z+\'}\')},q));F B},jy:C(B){E bS=B.1V(/<!--([\\w\\W]*?)-->/gi);if(!bS)F B;$.1z(bS,$.1e(C(i,s){q.2W.z++;q.2W.aA[q.2W.z]=s;B=B.K(s,\'\\n{K\'+q.2W.z+\'}\')},q));F B},jk:C(B){$.1z(q.2W.aA,C(i,s){s=(1s s!==\'1y\')?s.K(/\\$/g,\'&#36;\'):s;B=B.K(\'{K\'+i+\'}\',s)});F B},jj:C(B){E 4K=B.4p(29 2l(\'\\n\',\'g\'),-1);B=\'\';if(4K){E 2o=4K.12;2C(E i=0;i<2o;i++){if(!4K.qJ(i))F;if(4K[i].3L(\'{K\')==-1){4K[i]=4K[i].K(/<p>\\n\\t?<\\/p>/gi,\'\');4K[i]=4K[i].K(/<p><\\/p>/gi,\'\');if(4K[i]!==\'\'){B+=\'<p>\'+4K[i].K(/^\\n+|\\n+$/g,"")+"</p>"}}M B+=4K[i]}}F B},jf:C(B){B=B.K(/<br \\/>\\s*<br \\/>/gi,"\\n\\n");B=B.K(/<br\\s?\\/?>\\n?<br\\s?\\/?>/gi,"\\n<br /><br />");B=B.K(29 2l("\\r\\n",\'g\'),"\\n");B=B.K(29 2l("\\r",\'g\'),"\\n");B=B.K(29 2l("/\\n\\n+/"),\'g\',"\\n\\n");F B},9d:C(B){B=B.K(29 2l(\'</26></p>\',\'gi\'),\'</26>\');B=B.K(29 2l(\'<p></26>\',\'gi\'),\'</26>\');B=B.K(29 2l(\'<p><26>\',\'gi\'),\'<26>\');B=B.K(29 2l(\'<26></p>\',\'gi\'),\'<26>\');B=B.K(29 2l(\'<p><p \',\'gi\'),\'<p \');B=B.K(29 2l(\'<p><p>\',\'gi\'),\'<p>\');B=B.K(29 2l(\'</p></p>\',\'gi\'),\'</p>\');B=B.K(29 2l(\'<p>\\\\s?</p>\',\'gi\'),\'\');B=B.K(29 2l("\\n</p>",\'gi\'),\'</p>\');B=B.K(29 2l(\'<p>\\t?\\t?\\n?<p>\',\'gi\'),\'<p>\');B=B.K(29 2l(\'<p>\\t*</p>\',\'gi\'),\'\');F B}}},5u:C(){F{3N:C(e){if(!q.G.jg){3u($.1e(q.1d.1S,q),1);F}q.7k=1r;q.28.1U();q.J.3m();q.L.8k();q.5u.jo();$(3l).on(\'6m.I-jn\',$.1e(C(){$(3l).3U(q.aJ)},q));3u($.1e(C(){E B=q.$5b.B();q.$5b.1t();q.J.3g();q.L.aX();q.5u.1Y(B);$(3l).2Y(\'6m.I-jn\');if(q.2z.b6()){q.2z.31()}},q),1)},jo:C(){q.$5b=$(\'<1j>\').B(\'\').1c(\'5c\',\'1r\').1O({4e:\'7Y\',2L:0,2X:0,2c:\'-qN\'});if(q.L.1P(\'2F\')){q.$2N.1F(q.$5b)}M{if($(\'.1a-3c\').12>0){$(\'.1a.in .1a-3c\').1F(q.$5b)}M{$(\'3c\').1F(q.$5b)}}q.$5b.2m()},1Y:C(B){B=q.1W.2q(\'qi\',B);B=(q.L.8m())?q.1v.8B(B,O):q.1v.8B(B);B=q.1W.2q(\'5u\',B);if(q.L.8m()){q.1Y.1U(B,O)}M{q.1Y.B(B,O)}q.L.8u();q.7k=O;3u($.1e(q.1v.4y,q),10);3u($.1e(C(){E jq=q.$T.1h(\'1i\');$.1z(jq,C(i,s){E B=s.3A.K(/\\5X/,\'\');if(B===\'\'&&s.4u.12===0)$(s).1t()})},q),10)}}},3e:C(){F{a7:C(){if(!q.3e.is())F;q.$T.1c(\'3e\',q.$2k.1c(\'3e\'));q.3e.3j();q.$T.on(\'1D.I-3e\',$.1e(q.3e.3j,q))},3j:C(){3u($.1e(C(){E 1C=q.L.3z(q.$T.B(),O)?\'2f\':\'2U\';q.$T[1C](\'I-3e\')},q),5)},1t:C(){q.$T.2U(\'I-3e\')},is:C(){if(q.G.3e){F q.$2k.1c(\'3e\',q.G.3e)}M{F!(1s q.$2k.1c(\'3e\')==\'1y\'||q.$2k.1c(\'3e\')===\'\')}}}},5I:C(){F{2O:C(){$(1k.3c).1F($(\'<1j id="I-5I"><1i></1i></1j>\'));$(\'#I-5I\').qt()},3p:C(){$(\'#I-5I\').jr(qr,C(){$(q).1t()})}}},J:C(){F{1b:C(){q.2V=1k.4E();if(1k.4E&&q.2V.6f&&q.2V.7b){q.14=q.2V.6f(0)}M{q.14=1k.8b()}},4b:C(){52{q.2V.9E()}4U(e){}q.2V.4b(q.14)},3v:C(){E el=O;q.J.1b();if(q.2V&&q.2V.7b>0){el=q.2V.6f(0).jl}F q.L.4v(el)},5Q:C(4X){4X=4X||q.J.3v();if(4X){F q.L.4v($(4X).1q()[0])}F O},jp:C(){F 3l.4E().jv.qw},qh:C(){F 3l.4E().jv.qG},4a:C(Q){Q=Q||q.J.3v();53(Q){if(q.L.7L(Q.1n)){F($(Q).3r(\'I-T\'))?O:Q}Q=Q.e8}F O},e7:C(21,2d){q.J.1b();if(q.14&&q.14.4Y){F O}E 67=[];21=(1s 21==\'1y\'||21===O)?q.J.6V():21;E 4N=q.G.4N;4N.2R(\'1i\');if(1s 2d!==\'1y\'){2C(E i=0;i<2d.12;i++){4N.2R(2d[i])}}$.1z(21,$.1e(C(i,Q){if($.3q(Q.1n.3f(),4N)!=-1){67.2R(Q)}},q));F(67.12===0)?O:67},jh:C(2d){q.J.1b();if(q.14&&q.14.4Y){F O}E 67=[];E 21=q.J.6V();$.1z(21,$.1e(C(i,Q){if($.3q(Q.1n.3f(),2d)!=-1){67.2R(Q)}},q));F(67.12===0)?O:67},42:C(21){q.J.1b();if(q.14&&q.14.4Y){F[q.J.4a()]}E 1Z=[];21=(1s 21==\'1y\')?q.J.6V():21;$.1z(21,$.1e(C(i,Q){if(q.L.6J(Q)){q.J.jm=Q;1Z.2R(Q)}},q));F(1Z.12===0)?[q.J.4a()]:1Z},ji:C(){F q.J.jm},6V:C(){q.J.1b();E 7R=q.J.dX(1);E 9f=q.J.dX(2);if(q.14.4Y===O){if(3l.4E){E 2V=3l.4E();if(2V.7b>0){E 14=2V.6f(0);E jx=14.jl,ed=14.ed;E 84=14.7I();84.48(O);84.3R(9f);84.2Q(jx,ed);84.48(1r);84.3R(7R);14.9p(7R);14.jL(9f);2V.9E();2V.4b(14)}}}M{q.J.jJ(q.14,7R,1r);9f=7R}E 21=[];E 9c=0;E 3w=q;q.$T.1h(\'*\').1z(C(){if(q==7R){E 1q=$(q).1q();if(1q.12!==0&&1q[0].1n!=\'eh\'&&3w.L.4v(1q[0])){21.2R(1q[0])}21.2R(q);9c=1}M{if(9c>0){21.2R(q);9c=9c+1}}if(q==9f){F O}});E e6=[];E 2o=21.12;2C(E i=0;i<2o;i++){if(21[i].id!=\'21-2s-1\'&&21[i].id!=\'21-2s-2\'){e6.2R(21[i])}}q.J.jM();F e6},dX:C(5P){F $(\'<1i id="21-2s-\'+5P+\'" 1G="I-21-2s" 1f-3K="I">\'+q.G.5R+\'</1i>\')[0]},jJ:C(14,Q,1m){E 14=14.7I();52{14.48(1m);14.3R(Q)}4U(e){}},jM:C(){$(1k).1h(\'1i.I-21-2s\').1t();q.$T.1h(\'1i.I-21-2s\').1t()},qd:C(2b,2g){q.1T.dC(2b,2g)},62:C(Y){q.J.1b();if(q.14.4Y)F O;E 4P=1k.3y(Y);4P.83(q.14.ps());q.14.3R(4P);F 4P},9s:C(Q){if(q.L.1P(\'4g\')){Q=Q[0]||Q;E 14=1k.8b();14.95(Q)}M{q.1T.1U(Q,0,Q,1)}},af:C(){q.J.1b();q.14.95(q.$T[0]);q.J.4b()},1t:C(){q.J.1b();q.2V.9E()},3m:C(){q.J.jO()},jO:C(){q.J.1b();E 6n=q.J.6Q(1);q.J.dE(q.14,6n,1r);if(q.14.4Y===O){E 92=q.J.6Q(2);q.J.dE(q.14,92,O)}q.jA=q.$T.B()},6Q:C(5P){if(1s 5P==\'1y\')5P=1;F $(\'<1i id="J-2s-\'+5P+\'" 1G="I-J-2s"  1f-3K="I">\'+q.G.5R+\'</1i>\')[0]},5f:C(5P){F q.L.5N(q.J.6Q(5P))},dE:C(14,Q,1m){14=14.7I();52{14.48(1m);14.3R(Q)}4U(e){q.2m.2Q()}},3g:C(){E 6n=q.$T.1h(\'1i#J-2s-1\');E 92=q.$T.1h(\'1i#J-2s-2\');if(q.L.1P(\'4g\')){q.$T.2m()}if(6n.12!==0&&92.12!==0){q.1T.1U(6n,0,92,0)}M if(6n.12!==0){q.1T.1U(6n,0,6n,0)}M{q.$T.2m()}q.J.8O();q.jA=O},8O:C(){q.$T.1h(\'1i.I-J-2s\').1z(C(i,s){E 1g=$(s).1g().K(/\\5X/g,\'\');if(1g===\'\')$(s).1t();M $(s).2u(C(){F $(q).2a()})})},dr:C(){q.J.1b();F q.2V.4s()},pY:C(){E B=\'\';q.J.1b();if(q.2V.7b){E ds=1k.3y(\'1j\');E 2o=q.2V.7b;2C(E i=0;i<2o;++i){ds.83(q.2V.6f(i).pZ())}B=ds.3A}F q.1v.9Y(B)},jG:C(B){q.J.1b();q.14.4S();E 1j=1k.3y("1j");1j.3A=B;E 4L=1k.9P(),4A;53((4A=1j.9N)){4L.83(4A)}q.14.3R(4L)},q8:C(B){B=q.J.5f(1)+B+q.J.5f(2);q.J.1b();if(3l.4E&&3l.4E().6f){q.J.jG(B)}M if(1k.J&&1k.J.8b){q.14.jF(B)}q.J.3g();q.1d.1S()}}},6i:C(){F{3N:C(e,1l){if(!q.G.6i){if((e.8w||e.6I)&&(1l===66||1l===73))e.2t();F O}$.1z(q.G.6i,$.1e(C(5h,4x){E 51=5h.4p(\',\');E 2o=51.12;2C(E i=0;i<2o;i++){if(1s 51[i]===\'6W\'){q.6i.7W(e,$.3k(51[i]),$.1e(C(){E 1C;if(4x.1C.3L(/\\./)!=\'-1\'){1C=4x.1C.4p(\'.\');if(1s q[1C[0]]!=\'1y\'){q[1C[0]][1C[1]].8E(q,4x.6j)}}M{q[4x.1C].8E(q,4x.6j)}},q))}}},q))},7W:C(e,51,kP){E kC={8:"pv",9:"5C",10:"F",13:"F",16:"6L",17:"4f",18:"7l",19:"qP",20:"qn",27:"qe",32:"3h",33:"pt",34:"o8",35:"2g",36:"oc",37:"2c",38:"oq",39:"4z",40:"nQ",45:"1Y",46:"4l",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",6G:"4",o2:"5",o4:"6",o5:"7",pn:"8",po:"9",oF:"*",oN:"+",oW:"-",oO:".",oR:"/",od:"f1",oS:"f2",oQ:"f3",oP:"f4",oU:"f5",oX:"f6",oV:"f7",oM:"f8",oE:"f9",oB:"oC",oG:"oH",oK:"oJ",oI:"oZ",p0:"6m",pi:"-",ph:";",pg:"=",pf:",",pj:"-",pk:".",pm:"/",pc:"`",dG:"[",p5:"\\\\",dS:"]",p3:"\'"};E dM={"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"p8","=":"+",";":": ","\'":"\\"",",":"<",".":">","/":"?","\\\\":"|"};51=51.3f().4p(" ");E bn=kC[e.3t],8G=5Y.oA(e.7m).3f(),74="",79={};$.1z(["7l","4f","5k","6L"],C(4W,by){if(e[by+\'oz\']&&bn!==by){74+=by+\'+\'}});if(bn)79[74+bn]=1r;if(8G){79[74+8G]=1r;79[74+dM[8G]]=1r;if(74==="6L+"){79[dM[8G]]=1r}}2C(E i=0,2o=51.12;i<2o;i++){if(79[51[i]]){e.2t();F kP.8E(q,kU)}}}}},2I:C(){F{1b:C(1d){if(!q.G.2I)F 1d;E dv=[\'kS\',\'3c\',\'dO\',\'hr\',\'i?nY\',\'V\',\'5k\',\'o0\',\'1p\',\'3V\',\'3T\',\'dJ\',\'dP\',\'dQ\'];E du=[\'li\',\'dt\',\'dt\',\'h[1-6]\',\'3Z\',\'3V\'];E 8x=[\'p\',\'26\',\'1j\',\'dl\',\'kd\',\'69\',\'nU\',\'k7\',\'ol\',\'2H\',\'7F\',\'2Z\',\'5S\',\'6S\',\'3s\'];q.2I.kq=29 2l(\'^<(/?\'+dv.3d(\'|/?\')+\'|\'+du.3d(\'|\')+\')[ >]\');q.2I.kc=29 2l(\'^<(br|/?\'+dv.3d(\'|/?\')+\'|/\'+du.3d(\'|/\')+\')[ >]\');q.2I.8x=29 2l(\'^</?(\'+8x.3d(\'|\')+\')[ >]\');E i=0,aU=1d.12,3W=0,2b=4d,2g=4d,Y=\'\',2n=\'\',5j=\'\';q.2I.94=0;2C(;i<aU;i++){3W=i;if(-1==1d.4q(i).4I(\'<\')){2n+=1d.4q(i);F q.2I.dq(2n)}53(3W<aU&&1d.5O(3W)!=\'<\'){3W++}if(i!=3W){5j=1d.4q(i,3W-i);if(!5j.1V(/^\\s{2,}$/g)){if(\'\\n\'==2n.5O(2n.12-1))2n+=q.2I.7y();M if(\'\\n\'==5j.5O(0)){2n+=\'\\n\'+q.2I.7y();5j=5j.K(/^\\s+/,\'\')}2n+=5j}if(5j.1V(/\\n/))2n+=\'\\n\'+q.2I.7y()}2b=3W;53(3W<aU&&\'>\'!=1d.5O(3W)){3W++}Y=1d.4q(2b,3W-2b);i=3W;E t;if(\'!--\'==Y.4q(1,3)){if(!Y.1V(/--$/)){53(\'-->\'!=1d.4q(3W,3)){3W++}3W+=2;Y=1d.4q(2b,3W-2b);i=3W}if(\'\\n\'!=2n.5O(2n.12-1))2n+=\'\\n\';2n+=q.2I.7y();2n+=Y+\'>\\n\'}M if(\'!\'==Y[1]){2n=q.2I.aW(Y+\'>\',2n)}M if(\'?\'==Y[1]){2n+=Y+\'>\\n\'}M if(t=Y.1V(/^<(3V|1p|2H)/i)){t[1]=t[1].3f();Y=q.2I.dy(Y);2n=q.2I.aW(Y,2n);2g=5Y(1d.4q(i+1)).3f().4I(\'</\'+t[1]);if(2g){5j=1d.4q(i+1,2g);i+=2g;2n+=5j}}M{Y=q.2I.dy(Y);2n=q.2I.aW(Y,2n)}}F q.2I.dq(2n)},7y:C(){E s=\'\';2C(E j=0;j<q.2I.94;j++){s+=\'\\t\'}F s},dq:C(1d){1d=1d.K(/\\n\\s*\\n/g,\'\\n\');1d=1d.K(/^[\\s\\n]*/,\'\');1d=1d.K(/[\\s\\n]*$/,\'\');1d=1d.K(/<3V(.*?)>\\n<\\/3V>/gi,\'<3V$1></3V>\');q.2I.94=0;F 1d},dy:C(Y){E 8e=\'\';Y=Y.K(/\\n/g,\' \');Y=Y.K(/\\s{2,}/g,\' \');Y=Y.K(/^\\s+|\\s+$/g,\' \');E dF=\'\';if(Y.1V(/\\/$/)){dF=\'/\';Y=Y.K(/\\/+$/,\'\')}E m;53(m=/\\s*([^= ]+)(?:=(([\'"\']).*?\\3|[^ ]+))?/.5d(Y)){if(m[2])8e+=m[1].3f()+\'=\'+m[2];M if(m[1])8e+=m[1].3f();8e+=\' \';Y=Y.4q(m[0].12)}F 8e.K(/\\s*$/,\'\')+dF+\'>\'},aW:C(Y,2n){E nl=Y.1V(q.2I.8x);if(Y.1V(q.2I.kq)||nl){2n=2n.K(/\\s*$/,\'\');2n+=\'\\n\'}if(nl&&\'/\'==Y.5O(1))q.2I.94--;if(\'\\n\'==2n.5O(2n.12-1))2n+=q.2I.7y();if(nl&&\'/\'!=Y.5O(1))q.2I.94++;2n+=Y;if(Y.1V(q.2I.kc)||Y.1V(q.2I.8x)){2n=2n.K(/ *$/,\'\')}F 2n}}},1I:C(){F{jY:C(){E 4W=$.3q(\'1i\',q.G.3S);if(4W!==-1){q.G.3S.9n(4W,1)}if(q.G.4t)q.G.49=O;if(q.G.4T)q.G.1L=O;if(q.G.1K)F;E 2d=[\'p\',\'4h\'];if(q.G.4t)q.1I.jX(2d);if(q.G.49)q.1I.k8(2d)},jX:C(2d){E 2o=2d.12;2C(E i=0;i<2o;i++){if($.3q(2d[i],q.G.4t)==-1){q.G.4t.2R(2d[i])}}},k8:C(2d){E 2o=2d.12;2C(E i=0;i<2o;i++){E 3x=$.3q(2d[i],q.G.49);if(3x!=-1){q.G.49.9n(3x,1)}}},2K:C(B,3Y){q.1I.2E={49:q.G.49,4t:q.G.4t,6C:q.G.6C,5F:q.G.5F,5r:q.G.5r,5m:q.G.5m,1L:q.G.1L,4T:q.G.4T,6N:q.G.6N,3S:q.G.3S};$.7w(q.1I.2E,3Y);B=q.1I.6C(B);q.1I.$1j=$(\'<1j />\').1F(B);q.1I.5F();q.1I.5r();q.1I.k6();q.1I.1L();q.1I.3S();q.1I.kR();q.1I.5m();q.1I.6N();B=q.1I.$1j.B();q.1I.$1j.1t();F B},6C:C(B){if(!q.1I.2E.6C)F B;F B.K(/<!--[\\s\\S]*?-->/gi,\'\')},5F:C(B){if(!q.1I.2E.5F)F B;E 2o=q.1I.2E.5F.12;E 5L=[],e2=[];2C(E i=0;i<2o;i++){e2.2R(q.1I.2E.5F[i][1]);5L.2R(q.1I.2E.5F[i][0])}$.1z(5L,$.1e(C(1l,1E){q.1I.$1j.1h(1E).2u(C(){F $("<"+e2[1l]+" />",{B:$(q).B()})})},q))},5r:C(){if(!q.1I.2E.5r)F;E 2o=q.1I.2E.5r.12;q.1I.$1j.1h(\'1i\').1z($.1e(C(n,s){E $el=$(s);E 1p=$el.1c(\'1p\');2C(E i=0;i<2o;i++){if(1p&&1p.1V(29 2l(\'^\'+q.1I.2E.5r[i][0],\'i\'))){E 1n=q.1I.2E.5r[i][1];$el.2u(C(){E Y=1k.3y(1n);F $(Y).1F($(q).2a())})}}},q))},k6:C(){if(!q.1I.2E.49&&q.1I.2E.4t){q.1I.$1j.1h(\'*\').6q(q.1I.2E.4t.3d(\',\')).1z(C(i,s){if(s.3A===\'\')$(s).1t();M $(s).2a().44()})}if(q.1I.2E.49){q.1I.$1j.1h(q.1I.2E.49.3d(\',\')).1z(C(i,s){if($(s).3r(\'I-3V-Y\')||$(s).3r(\'I-J-2s\'))F;if(s.3A===\'\')$(s).1t();M $(s).2a().44()})}},1L:C(){E 2o;if(!q.1I.2E.1L&&q.1I.2E.4T){E e4=[],e5=[];2o=q.1I.2E.4T.12;2C(E i=0;i<2o;i++){e4.2R(q.1I.2E.4T[i][0]);e5.2R(q.1I.2E.4T[i][1])}q.1I.$1j.1h(\'*\').1z($.1e(C(n,s){E $el=$(s);E 3x=$.3q($el[0].1n.3f(),e4);E 5t=q.1I.kQ(3x,e5,$el);if(5t){$.1z(5t,C(z,f){$el.1L(f)})}},q))}if(q.1I.2E.1L){2o=q.1I.2E.1L.12;2C(E i=0;i<2o;i++){E 9w=q.1I.2E.1L[i][1];if($.b2(9w))9w=9w.3d(\' \');q.1I.$1j.1h(q.1I.2E.1L[i][0]).1L(9w)}}},kQ:C(3x,5q,$el){E 5t=[];if(3x==-1){$.1z($el[0].4u,C(i,2w){5t.2R(2w.1x)})}M if(5q[3x]==\'*\'){5t=[]}M{$.1z($el[0].4u,C(i,2w){if($.b2(5q[3x])){if($.3q(2w.1x,5q[3x])==-1){5t.2R(2w.1x)}}M if(5q[3x]!=2w.1x){5t.2R(2w.1x)}})}F 5t},kL:C(el,ba){ba=29 2l(ba,"g");F el.1z(C(){E 3w=$(q);E 2o=q.4u.12-1;2C(E i=2o;i>=0;i--){E 2w=q.4u[i];if(2w&&2w.nM&&2w.1x.3L(ba)>=0){3w.1L(2w.1x)}}})},3S:C(){if(!q.1I.2E.3S)F;q.1I.$1j.1h(q.1I.2E.3S.3d(\',\')).1z(C(){E $el=$(q);E 1g=$el.1g();1g=1g.K(/\\5X/g,\'\');1g=1g.K(/&5i;/gi,\'\');1g=1g.K(/\\s/g,\'\');if(1g===\'\'&&$el.3O().12===0){$el.1t()}})},kR:C(){q.1I.$1j.1h(\'li p\').2a().44()},5m:C(){if(!q.1I.2E.5m)F;E 2d=q.1I.2E.5m;if($.b2(q.1I.2E.5m))2d=q.1I.2E.5m.3d(\',\');q.1I.kL(q.1I.$1j.1h(2d),\'^(1f-)\')},6N:C(){if(!q.1I.2E.6N)F;q.1I.$1j.1h(q.1I.2E.6N.3d(\',\')).1z(C(){if(q.4u.12===0){$(q).2a().44()}})}}},1B:C(){F{3N:C(){F{B:{1J:q.1H.1b(\'B\'),1C:\'1d.3j\'},3b:{1J:q.1H.1b(\'3b\'),1o:{p:{1J:q.1H.1b(\'kE\'),1C:\'R.31\'},26:{1J:q.1H.1b(\'e1\'),1C:\'R.31\'},2H:{1J:q.1H.1b(\'1d\'),1C:\'R.31\'},h1:{1J:q.1H.1b(\'iC\'),1C:\'R.31\'},h2:{1J:q.1H.1b(\'fz\'),1C:\'R.31\'},h3:{1J:q.1H.1b(\'fy\'),1C:\'R.31\'},h4:{1J:q.1H.1b(\'fF\'),1C:\'R.31\'},h5:{1J:q.1H.1b(\'fv\'),1C:\'R.31\'}}},4n:{1J:q.1H.1b(\'4n\'),1C:\'25.31\'},4m:{1J:q.1H.1b(\'4m\'),1C:\'25.31\'},5W:{1J:q.1H.1b(\'5W\'),1C:\'25.31\'},5p:{1J:q.1H.1b(\'5p\'),1C:\'25.31\'},5n:{1J:\'&nO; \'+q.1H.1b(\'5n\'),1C:\'2e.3j\'},5o:{1J:\'1. \'+q.1H.1b(\'5o\'),1C:\'2e.3j\'},7a:{1J:\'< \'+q.1H.1b(\'7a\'),1C:\'3B.9j\'},3B:{1J:\'> \'+q.1H.1b(\'3B\'),1C:\'3B.bB\'},N:{1J:q.1H.1b(\'N\'),1C:\'N.2O\'},22:{1J:q.1H.1b(\'22\'),1C:\'22.2O\'},V:{1J:q.1H.1b(\'V\'),1o:{V:{1J:q.1H.1b(\'bx\'),1C:\'V.2O\',1R:{2k:\'a\',in:{1J:q.1H.1b(\'dB\'),},2n:{1J:q.1H.1b(\'bx\')}}},6t:{1J:q.1H.1b(\'6t\'),1C:\'V.6t\',1R:{2k:\'a\',2n:{1c:{\'1G\':\'I-1o-V-dA\',\'4Q-7c\':1r}}}}}},3a:{1J:q.1H.1b(\'3a\'),1o:{2c:{1J:q.1H.1b(\'fm\'),1C:\'3a.2c\'},5E:{1J:q.1H.1b(\'fs\'),1C:\'3a.5E\'},4z:{1J:q.1H.1b(\'fI\'),1C:\'3a.4z\'},9r:{1J:q.1H.1b(\'fJ\'),1C:\'3a.9r\'}}},aE:{1J:q.1H.1b(\'aE\'),1C:\'3M.1Y\'}}},2r:C(){q.1B.ey();q.1B.eB();q.1B.eu();if(q.G.4k.12===0)F;q.$1B=q.1B.g9();q.1B.fU();q.1B.1F();q.1B.g5();q.1B.g6();q.1B.fK();if(q.G.bq){q.$T.on(\'g3.I 2x.I 2m.I\',$.1e(q.1R.1B,q))}},g9:C(){F $(\'<3s>\').2f(\'I-1B\').1c({\'id\':\'I-1B-\'+q.2G,\'9D\':\'1B\'})},g5:C(){$.1z(q.G.1B.3b.1o,$.1e(C(i,s){if($.3q(i,q.G.3b)==-1)75 q.G.1B.3b.1o[i]},q))},g6:C(){$.1z(q.G.4k,$.1e(C(i,2i){if(!q.G.1B[2i])F;if(2i===\'22\'){if(q.G.7D===O)F;M if(!q.G.7D&&q.G.7P===O)F}if(2i===\'N\'){if(q.G.7J===O)F;M if(!q.G.7J&&q.G.7P===O)F}E 2T=q.G.1B[2i];q.$1B.1F($(\'<li>\').1F(q.1u.2r(2i,2T)))},q))},1F:C(){if(q.G.9M){q.$1B.2f(\'I-1B-oo\');$(q.G.9M).B(q.$1B)}M{q.$2N.6u(q.$1B)}},fK:C(){if(!q.L.7n())F;if(q.G.9M)F;if(!q.G.fP)F;q.1B.dU();$(q.G.6B).on(\'6m.I.\'+q.2G,$.1e(q.1B.dU,q))},fU:C(){if(q.L.6A()&&q.G.fR){q.$1B.2f(\'I-1B-aY\')}},eu:C(){if(q.G.4B)F;E 4W=q.G.4k.4I(\'B\');if(4W!==-1){q.G.4k.9n(4W,1)}},ey:C(){if(q.G.dK.12===0)F;$.1z(q.G.dK,$.1e(C(i,s){E 4W=q.G.4k.4I(s);q.G.4k.9n(4W,1)},q))},eB:C(){if(!q.L.6A()||q.G.dW.12===0)F;$.1z(q.G.dW,$.1e(C(i,s){E 4W=q.G.4k.4I(s);q.G.4k.9n(4W,1)},q))},dU:C(){E 3U=$(q.G.6B).3U();E 6v=1;if(q.G.6B===1k){6v=q.$2N.2D().2X}if((3U+q.G.6z)>6v){q.1B.er(3U,6v)}M{q.1B.eW()}},er:C(3U,6v){E 2X=q.G.6z+3U-6v;E 2c=0;E 2g=6v+q.$2N.3i()-32;E 2L=q.$2N.7t();q.$1B.2f(\'1B-7Y-2N\');q.$1B.1O({4e:\'9x\',2L:2L,2X:2X+\'px\',2c:2c});if(3U>2g)$(\'.I-1o-\'+q.2G+\':dw\').3p();q.1B.eJ();q.$1B.1O(\'eX\',(3U<2g)?\'dw\':\'hV\')},eW:C(){q.$1B.1O({4e:\'ob\',2L:\'ad\',2X:0,2c:0,eX:\'dw\'});q.1B.eO();q.$1B.2U(\'1B-7Y-2N\')},eJ:C(){E 2X=q.$1B.6b()+q.G.6z;E 4e=\'7Y\';if(q.G.6B!==1k){2X=(q.$1B.6b()+q.$1B.2D().2X)+q.G.6z;4e=\'9x\'}$(\'.I-1o-\'+q.2G).1z(C(){$(q).1O({4e:4e,2X:2X+\'px\'})})},eO:C(){E 2X=(q.$1B.6b()+q.$1B.2D().2X);$(\'.I-1o-\'+q.2G).1z(C(){$(q).1O({4e:\'9x\',2X:2X+\'px\'})})}}},1w:C(){F{3N:C(id,2h,2y){q.1w.4V=O;q.1w.2y=2y;q.1w.2h=2h;q.1w.$el=$(id);q.1w.$4c=$(\'<1j id="I-4c" />\');q.1w.$e0=$(\'<1j id="I-4c-3e" />\').1g(q.1H.1b(\'ev\'));q.1w.$3E=$(\'<3E 1m="22" 1x="22" />\');q.1w.$e0.1F(q.1w.$3E);q.1w.$4c.1F(q.1w.$e0);q.1w.$el.1F(q.1w.$4c);q.1w.$4c.2Y(\'I.1w\');q.1w.$3E.2Y(\'I.1w\');q.1w.$4c.on(\'pq.I.1w\',$.1e(q.1w.bD,q));q.1w.$4c.on(\'oi.I.1w\',$.1e(q.1w.iv,q));q.1w.$3E.on(\'iz.I.1w\',$.1e(C(e){e=e.87||e;q.1w.9R(q.1w.$3E[0].5T[0],e)},q));q.1w.$4c.on(\'58.I.1w\',$.1e(C(e){e.2t();q.1w.$4c.2U(\'7X-dL\').2f(\'7X-58\');q.1w.au(e)},q))},hL:C(22,e){q.1w.4V=1r;q.1w.9R(22,e)},au:C(e){e=e.87||e;E 5T=e.9Z.5T;q.1w.9R(5T[0],e)},9R:C(22,e){if(q.G.7P){q.1w.dZ(22);q.1w.i1(22);F}E 4o=!!3l.9V?29 9V():4d;if(3l.9V){q.1w.dZ(22);E 1x=(q.1w.1m==\'N\')?q.G.hH:q.G.hJ;4o.1F(1x,22)}q.5I.2O();q.1W.2q(\'og\',e,4o);q.1w.hp(4o,e)},dZ:C(22){q.1w.hS(22);if(q.1w.4V){q.1w.2h=(q.1w.1m==\'N\')?q.G.7J:q.G.7D;q.1w.2y=(q.1w.1m==\'N\')?q.N.1Y:q.22.1Y}},hS:C(22){q.1w.1m=\'N\';if(q.G.hQ.4I(22.1m)==-1){q.1w.1m=\'22\'}},71:C(7j,fd){if(7j===O||1s 7j!==\'41\')F fd;$.1z(7j,$.1e(C(k,v){if(v!==4d&&v.4s().4I(\'#\')===0)v=$(v).2J();fd.1F(k,v)},q));F fd},hp:C(4o,e){if(q.1w.1m==\'N\'){4o=q.1w.71(q.G.qs,4o);4o=q.1w.71(q.1w.bv,4o)}M{4o=q.1w.71(q.G.qy,4o);4o=q.1w.71(q.1w.9U,4o)}E 2S=29 bf();2S.aM(\'qx\',q.1w.2h);2S.dY("X-qo-qg","bf");2S.i7=$.1e(C(){if(2S.dR==4){E 1f=2S.gx;1f=1f.K(/^\\[/,\'\');1f=1f.K(/\\]$/,\'\');E 2P;52{2P=(1s 1f===\'6W\'?$.iw(1f):1f)}4U(nG){2P={6X:1r}}q.5I.3p();if(!q.1w.4V){q.1w.$4c.2U(\'7X-58\')}q.1w.2y(2P,q.1w.4V,e)}},q);2S.dz(4o)},bD:C(e){e.2t();q.1w.$4c.2f(\'7X-dL\')},iv:C(e){e.2t();q.1w.$4c.2U(\'7X-dL\')},ql:C(){q.1w.bv={}},qA:C(1x,1E){q.1w.bv[1x]=1E},qB:C(1x){75 q.1w.bv[1x]},qQ:C(){q.1w.9U={}},qT:C(1x,1E){q.1w.9U[1x]=1E},qL:C(1x){75 q.1w.9U[1x]},i1:C(22){q.1w.hZ(22,$.1e(C(hY){q.1w.gG(22,hY)},q))},hZ:C(22,2y){E 2S=29 bf();E 7O=(q.G.7P.3L(/\\?/)!==\'-1\')?\'?\':\'&\';2S.aM(\'qD\',q.G.7P+7O+\'1x=\'+22.1x+\'&1m=\'+22.1m,1r);if(2S.i5)2S.i5(\'1g/qC; qH=x-qK-qF\');E i8=q;2S.i7=C(e){if(q.dR==4&&q.dp==ag){i8.5I.2O();2y(hn(q.gx))}M if(q.dR==4&&q.dp!=ag){}};2S.dz()},gF:C(aS,2h){E 2S=29 bf();if("pw"in 2S){2S.aM(aS,2h,1r)}M if(1s gH!="1y"){2S=29 gH();2S.aM(aS,2h)}M{2S=4d}F 2S},gG:C(22,2h){E 2S=q.1w.gF(\'py\',2h);if(!2S){}M{2S.q3=$.1e(C(){if(2S.dp==ag){q.5I.3p();E ai=2h.4p(\'?\');if(!ai[0]){F O}if(!q.1w.4V){q.1w.$4c.2U(\'7X-58\')}E 2P={9t:ai[0]};if(q.1w.1m==\'22\'){E 2B=ai[0].4p(\'/\');2P.6h=2B[2B.12-1]}q.1w.2y(2P,q.1w.4V,O)}M{}},q);2S.q2=C(){};2S.1w.q6=C(e){};2S.dY(\'qb-qa\',22.1m);2S.dY(\'x-q0-pT\',\'pS-pU\');2S.dz(22)}}}},L:C(){F{6A:C(){F/(hc|h9|gS|gP)/.ac(aq.aw)},7n:C(){F!/(hc|h9|pR|gS|gP)/.ac(aq.aw)},pK:C(7j){F gU.5K.4s.5Z(7j)==\'[41 5Y]\'},3z:C(B,gZ){B=B.K(/[\\5X-\\pF\\pH]/g,\'\');B=B.K(/&5i;/gi,\'\');B=B.K(/<\\/?br\\s?\\/?>/g,\'\');B=B.K(/\\s/g,\'\');B=B.K(/^<p>[^\\W\\w\\D\\d]*?<\\/p>$/i,\'\');B=B.K(/<4R(.*?[^>])>$/i,\'4R\');B=B.K(/<4B(.*?[^>])>$/i,\'4B\');if(gZ!==O){B=B.K(/<[^\\/>][^>]*><\\/[^>]+>/gi,\'\');B=B.K(/<[^\\/>][^>]*><\\/[^>]+>/gi,\'\')}B=$.3k(B);F B===\'\'},eb:C(5h){if(1s(5h)===\'1y\')F 0;F 5J(5h.K(\'px\',\'\'),10)},qm:C(6P){if(1s 6P==\'1y\')F;if(6P.3L(/^#/)==-1)F 6P;E gX=/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;6P=6P.K(gX,C(m,r,g,b){F r+r+g+g+b+b});E bb=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.5d(6P);F\'lD(\'+5J(bb[1],16)+\', \'+5J(bb[2],16)+\', \'+5J(bb[3],16)+\')\'},5N:C(el){F $(\'<1j>\').1F($(el).eq(0).8N()).B()},bp:C(el){if($.3q(el.1n,q.G.8q)!==-1){F $(el)}M{F $(el).2p(q.G.8q.4s().3f(),q.$T[0])}},5H:C(el,1c){E $el=$(el);if(1s $el.1c(1c)==\'1y\'){F 1r}if($el.1c(1c)===\'\'){$el.1L(1c);F 1r}F O},3S:C(i,s){E $s=$($.ei(s));$s.1h(\'.I-7H-3h\').1L(\'1p\').1L(\'1G\');if($s.1h(\'hr, br, 1M, 4R, 4B\').12!==0)F;E 1g=$.3k($s.1g());if(q.L.3z(1g,O)){$s.1t()}},8k:C(){q.gl=q.$T.3U();q.aJ=$(3l).3U();if(q.G.8h)q.gh=$(q.G.8h).3U()},aX:C(){if(1s q.8k===\'1y\'&&1s q.aJ===\'1y\')F;$(3l).3U(q.aJ);q.$T.3U(q.gl);if(q.G.8h)$(q.G.8h).3U(q.gh)},aN:C(){E 3h=1k.3y(\'1i\');3h.3G=\'I-7H-3h\';3h.3A=q.G.5R;F 3h},56:C(Q){E 2d=q.G.4N;2d.2R(\'1i\');if(Q.1n==\'8P\')2d.2R(\'a\');$(Q).1h(2d.3d(\',\')).6q(\'1i.I-J-2s\').2a().44()},6p:C(Q,56){E 3w=q;$(Q).2u(C(){if(56===1r)3w.L.56(q);F $(q).2a()});F $(Q)},4J:C(Q,Y,56){E 5L;E 3w=q;$(Q).2u(C(){5L=$(\'<\'+Y+\' />\').1F($(q).2a());2C(E i=0;i<q.4u.12;i++){5L.1c(q.4u[i].1x,q.4u[i].1E)}if(56===1r)3w.L.56(5L);F 5L});F 5L},ic:C(){E R=q.J.4a();if(!R)F O;E 2D=q.1T.8D(R);F(2D===0)?1r:O},6D:C(2k){if(1s 2k==\'1y\'){E 2k=q.J.4a();if(!2k)F O}E 2D=q.1T.8D(2k);E 1g=$.3k($(2k).1g()).K(/\\n\\r\\n/g,\'\');F(2D==1g.12)?1r:O},nA:C(){E 2D=q.1T.8D(q.$T[0]);F(2D===0)?1r:O},dI:C(){E R=q.$T[0];E 2D=q.1T.8D(R);E 1g=$.3k($(R).B().K(/(<([^>]+)>)/gi,\'\'));F(2D==1g.12)?1r:O},6J:C(R){R=R[0]||R;F R&&q.L.7L(R.1n)},7L:C(Y){if(1s Y==\'1y\')F O;F q.hG.ac(Y)},aa:C(1A,Y){E 2k=$(1A).2p(Y,q.$T[0]);if(2k.12==1){F 2k[0]}F O},8m:C(){F q.af},fZ:C(){q.af=1r},8u:C(){q.af=O},4v:C(el){if(!el){F O}if($(el).fY(\'.I-T\').12===0||$(el).3r(\'I-T\')){F O}F el},fk:C(){F q.L.4Z([\'ec\',\'e9\',\'e3\',\'ef\',\'eg\',\'ee\'])},4Z:C(1n){E 1q=q.J.5Q();E 1A=q.J.3v();if($.b2(1n)){E dV=0;$.1z(1n,$.1e(C(i,s){if(q.L.dN(1A,1q,s)){dV++}},q));F(dV===0)?O:1r}M{F q.L.dN(1A,1q,1n)}},dN:C(1A,1q,1n){1n=1n.mJ();F 1q&&1q.1n===1n?1q:1A&&1A.1n===1n?1A:O},mb:C(){F(q.L.1P(\'2F\')&&5J(q.L.1P(\'b5\'),10)<9)?1r:O},ml:C(){F(q.L.1P(\'2F\')&&5J(q.L.1P(\'b5\'),10)<10)?1r:O},iK:C(){F!!aq.aw.1V(/nd\\/7\\./)},1P:C(1P){E 54=aq.aw.3f();E 1V=/(dD)[\\/]([\\w.]+)/.5d(54)||/(g1)[ \\/]([\\w.]+)/.5d(54)||/(89)[ \\/]([\\w.]+).*(ea)[ \\/]([\\w.]+)/.5d(54)||/(89)[ \\/]([\\w.]+)/.5d(54)||/(ls)(?:.*b5|)[ \\/]([\\w.]+)/.5d(54)||/(2F) ([\\w.]+)/.5d(54)||54.4I("o3")>=0&&/(dT)(?::| )([\\w.]+)/.5d(54)||54.4I("mP")<0&&/(4g)(?:.*? dT:([\\w.]+)|)/.5d(54)||[];if(1P==\'ea\')F(1s 1V[3]!=\'1y\')?1V[3]==\'ea\':O;if(1P==\'b5\')F 1V[2];if(1P==\'89\')F(1V[1]==\'g1\'||1V[1]==\'dD\'||1V[1]==\'89\');if(1V[1]==\'dT\')F 1P==\'2F\';if(1V[1]==\'dD\')F 1P==\'89\';F 1P==1V[1]},bh:C(gB,gy,2D){E i=gB.4I(gy,2D);F i>=0?i:O},dH:C(){E $3c=$(\'B\');E 7q=3l.7t;if(!7q){E dx=1k.lG.lE();7q=dx.4z-8p.pV(dx.2c)}E eI=1k.3c.g4<7q;E aG=q.L.eE();$3c.1O(\'aY\',\'hV\');if(eI)$3c.1O(\'jZ-4z\',aG)},eE:C(){E $3c=$(\'3c\');E 78=1k.3y(\'1j\');78.3G=\'I-jD-jH\';$3c.1F(78);E aG=78.om-78.g4;$3c[0].o6(78);F aG},aK:C(){$(\'B\').1O({\'aY\':\'\',\'jZ-4z\':\'\'});$(\'3c\').1t(\'I-jD-jH\')}}}};$(3l).on(\'2K.ju.I\',C(){$(\'[1f-ju="I"]\').I()});43.5K.3N.5K=43.5K})(oa);',62,1668,'||||||||||||||||||||||||||this|||||||||||html|function||var|return|opts||redactor|selection|replace|utils|else|image|false||node|block||editor||link|||tag||||length||range||||||modal|get|attr|code|proxy|data|text|find|span|div|document|key|type|tagName|dropdown|style|parent|true|typeof|remove|button|clean|upload|name|undefined|each|current|toolbar|func|keydown|value|append|class|lang|tidy|title|linebreaks|removeAttr|img|next|css|browser|target|observe|sync|caret|set|match|core|formatted|insert|blocks||nodes|file|btn||inline|blockquote||buffer|new|contents|start|left|tags|list|addClass|end|url|btnName|href|element|RegExp|focus|out|len|closest|setCallback|build|marker|preventDefault|replaceWith|textarea|item|keyup|callback|linkify|click|arr|for|offset|settings|msie|uuid|pre|tabifier|val|load|width|label|box|show|json|setStart|push|xhr|btnObject|removeClass|sel|paragraphize|top|off|td|last|format|||||||||alignment|formatting|body|join|placeholder|toLowerCase|restore|space|height|toggle|trim|window|save|tooltip|autosave|hide|inArray|hasClass|ul|keyCode|setTimeout|getCurrent|self|pos|createElement|isEmpty|innerHTML|indent|after|CodeMirror|input|imageBox|className|first|re|setEnd|verified|search|line|init|children|font|matches|insertNode|removeEmpty|table|scrollTop|script|point|rel|options|option||object|getBlocks|Redactor|unwrap|||execCommand|collapse|deniedTags|getBlock|addRange|droparea|null|position|ctrl|mozilla|section|resizeHandle|close|buttons|del|italic|bold|formData|split|substr|src|toString|allowedTags|attributes|isRedactorParent|regexps|command|clearUnverified|right|child|source|modalBox|prev|getSelection|cmd|margin|blockElem|indexOf|replaceToTag|htmls|frag|resize|inlineTags|orgn|wrapper|aria|iframe|deleteContents|allowedAttr|catch|direct|index|elem|collapsed|isCurrentOrParent||keys|try|while|ua|setAfter|removeInlineTags|arrow|drop||align|pasteBox|contenteditable|exec|strong|getMarkerAsHtml|linkProtocol|str|nbsp|cont|meta|BR|removeDataAttr|unorderedlist|orderedlist|underline|allowed|replaceStyles|isFunction|attributesRemove|paste|br1|https|tmp|LI|none|links|touchstart|tab|editter|center|replaceTags|lastNode|removeEmptyAttr|progress|parseInt|prototype|replacement|toggleType|getOuterHtml|charAt|num|getParent|invisibleSpace|th|files|currentLevel|lastList|deleted|u200B|String|call|||wrap|quot|currentList|||inlines|mousedown|form|prop|innerHeight|containerTag|marginTop|visual|getRangeAt|templateName|filename|shortcuts|params|break|methods|scroll|node1|nodeValue|replaceWithContents|not|replaceDivs|emptyHtml|unlink|prepend|boxTop|TD|Insert|module|toolbarFixedTopOffset|isMobile|toolbarFixedTarget|removeComments|isEndOfElement|video|vimeo|100|tabindex|metaKey|isBlock|youtube|shift|SPAN|removeWithoutAttr|shiftKey|hex|getMarker|ENTER|tr|preSpaces|insertBreakLine|getNodes|string|error|editorDiv|instance|figure|getHiddenFields|display||modif|delete|getEvent|dropact|scrollDiv|possible|outdent|rangeCount|disabled|hideAll|edit|www|embed|keyPosition|blocksSize|obj|rtePaste|alt|which|isDesktop|focn|DIV|windowWidth|dropdowns|level|innerWidth|hideResize|_blank|extend|BACKSPACE|getTabs|weight|pattern|action|toggleClass|fileUpload|z0|select|figcaption|invisible|cloneRange|imageUpload|float|isBlockTag|posFromIndex|parHtml|mark|s3|setVerified|startNode|header|outerHTML|strike|sup|handler|drag|fixed|sub|decoration|modalOverlay|size|appendChild|boundaryRange|endRange|tmpList|originalEvent|listParent|webkit|blank|createRange|event|ftp|tagout|icon|exceptTags|scrollTarget|items|setActive|saveScroll|codemirror|isSelectAll|DELETE|imageFloatMargin|Math|alignmentTags|events|returnValue|OL|disableSelectAll|modalClose|ctrlKey|newLevel|UL|addProperties|createTextNode|onPaste|convertVideoLinks|getOffsetOfElement|apply|plugins|character|isRemoveInline|active|isMobileUndoRedo|act|tabber|autosaveInterval|clone|removeMarkers|PRE|modalFooter|inputUrl|tmpLi|closeHandler|http|classSize|setClass|linkmarker|Header|modalHeader|||node2|focusNode|cleanlevel|selectNodeContents|||||blockLevelElements|setMode|counter|clear|targetTouches|endNode|resizer|small|Array|decrease|addEvent|singleLine|Add|splice|case|setStartAfter|replaceParagraphsToBr|justify|selectElement|filelink|cite|undo|attrs|absolute|Delete|tagblock||imageResizer|audio|role|removeAllRanges|amp|imageMargin|insertDblBreakLine|param|inserted|lastLevel|rebuffer|toolbarExternal|firstChild|maxHeight|createDocumentFragment|createTextRange|traverseFile|moveToPoint|bind|fileFields|FormData|images|onClick|onSync|dataTransfer|formatblock|fixEmptyIndent|clearStyle|insertInIe|wrapperHtml|caretRangeFromPoint|windowHeight|enable|mouseover|mouseout|isTag|property|test|auto|parentEl|selectAll|200|eventName|s3file|selectionMarkers|deleteProperties|editorHtml|ESC|getOffset|callbacks|formatWrap|navigator|normalizeLists|minHeight|link_new_tab|onDrop|showOnDesktop|userAgent|appendTo|isTextarea|modalBody|safes|formatListToBlockquote|getPlainText|caretPositionFromPoint|horizontalrule|autosaveFields|scrollbarWidth|caretRange|onPasteTidy|saveBodyScroll|enableBodyScroll|mso|open|createSpaceElement|kbd|classname|cloned|tabAsSpaces|method|blockHtml|codeLength|substring|placeTag|restoreScroll|overflow|x200b|isContainerTable|prevList|isArray|parentA|imageFloat|version|isEnabled|indentValue|replaceToParagraph|pageY|regex|result|spaces|BLOCKQUOTE||XMLHttpRequest|u00a0|strpos|before|encodeEntities|matchContainers|prev2|marginLeft|special|methodVal|getAlignmentElement|activeButtons||convertLinks|marginRight|enterKey|imageFields|com|link_insert|specialKey|samp|re2|increase|checked|onDrag|marginBottom|IMG|redo|nodeType|modules|activeButtonsStates|Column|paragraphizeBlocks|closeTooltip|currentEl|Row|Table|count|autosaveOnChange|commentsMatches|formatTableWrapping|autosaveName|setInactiveAll|Link|headTag|curLang|add|saveFormTags|convertInline|verifiedTags|nodeToCaretPositionFromPoint|address|syncCode|removeFormat|htmlIe|clearUnverifiedRemove|headers|tagsEmpty|attrAllowed|dfn|setBefore|TAB|getTextFromHtml|isEndOfTable||DOWN|imageDelete|showCode|setFormat|one|enlargeOffset|selectionEnd|isFocused|dropdownWidth|dropdownObject|htmlLength|blur|formattingAdd|selectionStart|redactorImageLink|markerLength|isP|TH|imageEditable|removeSpaces|imageDisplay|ratio|imageResizable|insertBreakLineProcessing|endContainer|highContrast|createCancelButton|createActionButton|createButton|addCallback|URL|getModuleMethods|RedactorPlugins|image_position|buttonsSize|footer|setDropdownAttr|content|isDelete|setDropdownProperties|inValues|direction|isCurrent|outValues|isOrderedCmdUnordered|isUnorderedCmdOrdered|firstFound|extra|inputText|mailto|fonts|listsIds|endOffset|br2|listType|setAfterOrBefore|filter||slice|regexB|listTag|linkSize|iframeEnd|convertImageLinks|convertUrlLinks||iframeStart|addDropdown|showOnMobile|status|finish|getText|container||contOwnLine|ownLine|visible|documentElementRect|cleanTag|send|inactive|link_edit|setOffset|opr|setMarker|suffix|219|disableBodyScroll|isEndOfEditor|tbody|buttonsHide|hover|hotkeysShiftNums|isCurrentOrParentOne|head|thead|tfoot|readyState|221|rv|observeScroll|matched|buttonsHideOnMobile|getNodesMarker|setRequestHeader|setConfig|placeholdler|quote|rTags|H3|allowedAttrTags|allowedAttrData|finalNodes|getInlines|parentNode|H2|safari|normalize|H1|startOffset|H6|H4|H5|BODY|parseHTML|increaseBlocks|increaseLists||||createContainerBox|getTextareaName||observeScrollEnable|run|setCodeAndCall|isButtonSourceNeeded|upload_label|htmlFixMozilla|insertAfter|hideButtons|getRedo|htmlWithoutClean|hideButtonsOnMobile|aside|formatConvert|measureScrollbar|createTextarea|replaced|article|isOverflowing|setDropdownsFixed|superscript|fromTextarea|fromElement|loadEditor|unsetDropdownsFixed|subscript|formatCollapsed|formatMultiple|formatRemoveSameChildren|_this|loadContent|increaseText|observeScrollDisable|visibility|decreaseLists|strikethrough|enableEditor|||||||||||decreaseBlocks|through||switch|ie11PasteFrag|META|CTRL|ALT|SHIFT|isCurrentOrParentHeader|addArrowsEvent|align_left||checkKeyEvents|indented|elements|HR|align_center|checkEvents|setupBuffer|header5|tabKey|onTab|header3|header2|replaceDivToBreakLine|onShiftEnter|onArrowDown|altKey|formatBlockquote|header4|setupSelectAll|setForce|align_right|align_justify|setFixed|offsetNode|setUndo|duplicate|setEndPoint|toolbarFixed|setRedo|toolbarOverflow|execHtml|getUndo|setOverflow|pop|EndToEnd|ie11FixInserting|parents|enableSelectAll|stop|chrome|empty|mouseup|clientWidth|setFormattingTags|loadButtons|keydownStop|RIGHT|createContainer|blocksMatch|loadEditableControls|setInactiveInCode|setSelectionRange|walker|showVisual|anchor|saveTargetScroll||indexFromPos|setValue|saveEditorScroll|restoreFormTags|replaceDivsToBr|onSet|startSync|cleanSpaces|onChange|tempStart||tempEnd|orgo|foco|responseText|needle|lastChild|beforekey|haystack|textareaIndenting|setInactive|modified|s3createCORSRequest|s3uploadToS3|XDomainRequest|setActiveInVisual|indenting|newTag|chars|isSingleLine|onPasteIeFixLinks|onPasteRemoveSpans|Android|matchBlocks|matchBR|BlackBerry|onPasteRemoveEmpty|Object|onPasteExtra|internal|shorthandRegex|Mso|removeEmptyTags|all|||||||savePreCode|savePreFormatting|iPod|Apple|nofollow|iPhone|linkNofollow|removeDirtyStyles|getOnlyImages|pastePlainText|restoreSelectionMarker|saveCodeFormatting|bmso|onPasteWord|getPreCode|FIGCAPTION|decodeURIComponent|afterkey|sendData|dragFileUpload||moveResize|dragImageUpload|round|inside|stopResize|setEvents|setEventDrop|setFloating|update|setResizable|pageX|setEventDropUpload|startResize|fixImageSourceAfterDrop|reIsBlock|imageUploadParam|opacity|fileUploadParam|showEdit|directUpload|loadResizableControls|editerWidth|callEditor|setOptions|imageTypes|dir|getType|15px|replaceDivToParagraph|hidden|codeKeydownCallback|codeKeyupCallback|signedURL|s3executeOnSignedUrl|clearInterval|s3uploadFile|fullscreen|createTooltip|onClickCallback|overrideMimeType|removeData|onreadystatechange|that|haspopup|eventNamespace|destroy|isStartOfElement|||||setEvent|disableIeLinks|imageLink|buttonSave|setHelpers|imagePosition||floating|floatValue|buttonDelete|_delete||disableMozillaEditing|selected|onDragLeave|parseJSON|focusEnd|700|change|LEFT_WIN|getTemplate|header1|draggable|setContent|setTitle|template|Head|contrast|handle|isIe11|Color|buildOverlay|enableEvents|List|setButtonsWidth|setEnter|cancel|createDeleteButton|Left|Right|regexp|the|to|Edit|Drop|png|convertImages|here|Align|Center|Video|checkbox|Image|imageEdit|loadTemplates|newTd|choose|Code|disableEvents|destroyed|replaceBreaksToNewLines|cleanOnPaste|getInlinesTags|getLastBlock|replaceBreaksToParagraphs|restoreSafes|startContainer|lastBlock|freeze|createPasteBox|getPrev|spans|fadeOut|Function|scope|tools|anchorNode|args|startPointNode|getSafesComments|linkTooltip|savedSel|showTooltip|setEditable|scrollbar|properties|pasteHTML|replaceSelection|measure|getTooltipPosition|setNodesMarker|getSafes|setEndBefore|removeNodesMarkers|aUnlink|createMarkers|aLink|aEdit|gif|setDraggable|replaceElement|keyupStop|isNeedReplaceElement|re3|addToAllowed|setupAllowed|padding|alignElement|removeEmptyListInTable|removeInvisibleSpace|setBlocks|setText|isKey|removeTags|map|removeFromDenied|setMultiple|_moz_dirty|xn|lineAfter|fieldset|formatTags|location|callbackName|lastFound|insertInOthersBrowsers|getData|jsxhr|isExceptLastOrFirst|setFocus|setCollapsed|600|cleanUrl|lineBefore|formatEmpty|thref|success|langs|dbl|isLinebreaksOrNoBlocks|insertAfterLastElement|objects|buttonInsert|buttonText|insertNewLine|hotkeysSpecialKeys|loadModules|paragraph|insertParagraph|cleanStyleOnEnter|shortcutsAdd|exitFromBlockquote|loadOptions|bindModuleMethods|removeAttrs|textNode|stopPropagation|commonAncestorContainer|origHandler|removeAttrGetRemoves|removeParagraphsInLists|area|SPACE|arguments|nextNode|getCoords|SHOW_TEXT|hgroup|nav|details|Infinity|HEADER|FOOTER|setStartBefore|alignleft|setEndAfter|setToPoint|alignright|DD|OUTPUT|summary|DT|ins|DL|jpeg|ADDRESS|reg||aligncenter|menu|createTreeWalker|SECTION|NodeFilter|ltr|1strike|spacerun|yes|opera||No|such|docs|xml|floor|shapes|strict|sid|use|rgb|getBoundingClientRect|slevel|documentElement|WordDocument|VERSION|copy|u2026|hellip|disable|u00a9|autosaveError|u2122|trade|math|u2014|10px|sdata|converted|dash|u2010|mdash|uploadImageField|legend|setAwesome|web|video_html_code|Email|Text|Web|Embed|Youtube|Upload|File|isOldIe|Vimeo|image_web_link|None|columns|Columns|Rows|rows|delete_table|add_head|isLessIe10|Position|Title|setInterval|delete_head|download|Download|getOwnPropertyNames|youtu|optional|Name|Alignment|jpe|applet|merge|LEFT|application|UP|Underline|Open|drop_file_here|Or|or_choose|Choose|toUpperCase|Justify|Anchor|Deleted|Rule|Horizontal|compatible|toggleAttr|backcolor|changeIcon|removeIcon|Font|fontcolor|Back|Unordered|Indent|Outdent|caretOffset|Ordered|TEXTAREA|Italic|Formatting|addBefore|Unlink|HTML|ARTICLE|Normal|addAfter|Bold|addFirst|Trident|Quote|AutoUrlDetect|Cancel|toggleData|blurCallback|setData|delete_column||post|focusCallback|delete_row|cut|setAttr|1000|ajax|insert_column_right|insert_column_left|insert_table|enableObjectResizing|Save|enableInlineTableEditing|insert_row_above|isStartOfEditor|Below|done|insert_row_below|Above|ASIDE|err|move|dialog|insertHtml|cursor|guid|specified|labelledby|bull|0px|down|times|Close|host|frameset|insertedLink|createLink|deletedLink|frame|addBack|noscript|php|101|trident|102|103|removeChild|context|pagedown|TR|jQuery|relative|home|112|imageUploadError|bodyOveflow|uploadStart|fast|dragleave|cssText|removeStyle||offsetWidth||external|overlay|up||enter|clientY|clientX|removeStyleRule|toggleStyle|insertHTML|nodeToPoint|Key|fromCharCode|121|f10|addTemplate|120|106|122|f11|144|f12|123|getModal|119|107|110|115|114|111|113|createTabber|116|118|109|117|addTab|numlock|145|email|outerHeight|222|player|220|20px|allowfullscreen|_|500|281|frameborder|192|focusin|grep|188|187|186|173|189|190|modalOpened|191|104|105|modalClosed|dragover|textContent|extractContents|pageup|stripTags|backspace|withCredentials||PUT|innerText|listSelections|getValue|getObject|getEditor|_data|u200D|removePhp|uFEFF|Callback|getToolbar|isString|getBox|getElement|getTextarea|setSelection|setCursor|cleanEmptyParagraph|iPad|public|acl|read|abs|getOnlyLinksAndImages|unselectable|getHtml|cloneContents|amz|addButton|onerror|onload|setSize|refresh|onprogress|toggleActive|replaceWithHtml|syncBefore|Type|Content|Ss|fromPoint|esc|705|With|getNext|pasteBefore|fileUploadError|dropdownHide|clearImageFields|hexToRgb|capslock|Requested|fake|touchend|1500|uploadImageFields|fadeIn|touchmove|mousemove|previousSibling|POST|uploadFileFields|dragstart|addImageFields|removeImageFields|plain|GET|rowspan|defined|nextSibling|charset|namespace|hasOwnProperty|user|removeFileFields|colspan|9999px|dropdownShown|pause|clearFileFields|max|dropdownShow|addFileFields'.split('|'),0,{}))
var AU = {
  Klass: {},
  View: {},
  SubView: {}
},
au = {
  data: {},
  view: {},
  subView: {}
};

Backbone.View.prototype._afterEnsureElement = function (func) {
  if(func && _.isFunction(func)) {
    func.apply(this, arguments);
  }
}

Backbone.View.prototype._ensureElement = function() {
  if (!this.el) {
    var attrs = _.extend({}, _.result(this, 'attributes'));
    if (this.id) attrs.id = _.result(this, 'id');
    if (this.className) attrs['class'] = _.result(this, 'className');
    var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
    this.setElement($el, false);
  } else {
    this.setElement(_.result(this, 'el'), false);
  }
  this._afterEnsureElement.call(this);
}

Qor = {};
Qor.View = Backbone.View.extend({
  el: function() {
    var cname = this.reference,
        kluss = cname.replace(/[A-Z]/g, function(s, i) {
          if(i) {
            return '-'+ s.toLowerCase();
          } else {
            return s.toLowerCase();
          }
        });

    var self = this;

    this._afterEnsureElement(function() {
      $(self.ele).addClass(kluss);
    });

    return '#' + kluss;
  },
  ele: '',
  initialize: function() {

  }
});

Qor.SubView = Backbone.View.extend({
  el: function() {
    var cname = this.reference,
        kluss = cname.replace(/[A-Z]/g, function(s, i) {
          if(i) {
            return '-'+ s.toLowerCase();
          } else {
            return 'sub-' + s.toLowerCase();
          }
        });

    var self = this;

    this._afterEnsureElement(function() {
      $(self.ele).not('.' + kluss).addClass(kluss);
    });

    return '.' + kluss;
  },
  ele: '',
  id: function() {

  }
});

$(function() {
  for (var view in AU.View) {
    AU.View[view].prototype.reference = view;
    au.view[view] = new AU.View[view]();
  }
  for (var sub in AU.SubView) {
    AU.SubView[sub].prototype.reference = sub;
  }

  if ($('#dashboard').length) {
    AU.SubView.Orders.prototype.reference = 'orders';
    $('#dashboard .orders').each(function(i, item) {
      new AU.SubView.Orders({
        el: item
      });
    });

    new AU.SubView.CheckinOutToday({
      el: '#dashboard .checkin-out-today'
    });
  }

  Backbone.history.start();
});

AU.Klass.AjaxForm = Qor.View.extend({
  AjaxForm: function(options) {
    var self = this;

    options = $.extend({
      beforeSerialize: function() {
        self.beforeSerialize(this);
      },
      beforeSubmit: function() {
        self.beforeSubmit(this);
        if (!this.cancel) {
          self._disableButton();
        }
        if (this.options.type.toLowerCase() !== 'get') {
          this.options.data = JSON.stringify(this.options.data);
        }
      },
      success: function(data) {
        if (self.success) self.success(data);
      },
      done: function(data, textStatus, jqXHR) {
        self._enableButton();
        self.done(data, textStatus, jqXHR);
      },
      fail: function(jqXHR, textStatus, errorThrown) {
        self._enableButton();
        self.fail(jqXHR, textStatus, errorThrown);
      },
      reset: function(data, textStatus, jqXHR) {
        self.resetForm();
      }
    }, options);

    return this.$("form").length ? this.$("form").fugue(options) : this.$el.fugue(options);
  },

  _disableButton: function() {
    var $submit = this.$('[type="submit"]');

    if (!$submit.length) {
      return
    }

    $submit.each(function() {
      var processingText = $(this).data('processing-text').replace(/\\/g, '');
      $(this).attr("disabled", true).html(processingText);
    });
  },

  _enableButton: function() {
    var $submit = this.$('[type="submit"]');

    if (!$submit.length) {
      return
    }

    $submit.each(function() {
      var originalText = $(this).data('original-text').replace(/\\/g, '');
      $(this).attr("disabled", false).html(originalText);
    });
  },

  beforeSerialize: function(that) {},

  beforeSubmit: function(that) {},

  done: function(data, textStatus, jqXHR) {},
  fail: function(jqXHR, textStatus, errorThrown) {},
  resetForm: function(data) {}
});

AU.View.OrderForm = AU.Klass.AjaxForm.extend({
  events: {
    'click .cancel, .close': 'cancel',
    'click .j-action-btn': 'doAction',
    'click .collapse': 'collapse',
    'click .edit-status': 'showStatusSelector',
    'click .cancel-edit-states': 'hideStatusSelector',

    'change select[name="CleanProductId"], select[name="ParkingProductName"]': 'rate',
    'change .time-select': 'rate',
    'change input, select': 'dirty'
  },
  dirty: function() {
    this.$el.addClass('dirty');
  },
  initialize: function() {
    this.$fugue = this.AjaxForm({
      reset: null
    });

    this.monitDatepickers();

    this.$editStatusButton = this.$('.edit-status');
  },
  load: function(data, scope) {
    var self = this;
    var checkin = this.$('.checkin');
    var checkout = this.$('.checkout');
    checkin.attr('disabled', !_.contains(['pay_on_site', 'paypal_paid', 'confirmed'], data.State));
    checkout.attr('disabled', data.State != 'check-in');

    if (_.contains(['pay_on_site', 'ready', 'new'], data.State)) {
      this.$('.confirm').show();
    } else {
      this.$('.confirm').hide();
    }

    setTimeout(function() {
      self.$el.removeClass('dirty');
    }, 0);

    this.hideStatusSelector();
    var isPaypalPaid = !!data.PaypalRef;
    this.$('option[value="unconfirmed"]').attr('hidden', isPaypalPaid);
    this.$('option[value="confirmed"]').attr('hidden', isPaypalPaid);

    this.$('.confirm-wrapper .j-action-btn.red').attr('disabled', data.State == 'cancelled');

    var dateFrom = moment(data.From).zone(AUGloabl.ServerTimeZone).format("DD/MM/YYYY HH:mm"),
        dateTo = moment(data.To).zone(AUGloabl.ServerTimeZone).format("DD/MM/YYYY HH:mm");

    data.CheckInDate = dateFrom.split(' ')[0];
    data.ArrivalTime = dateFrom.split(' ')[1];

    data.CheckOutDate = dateTo.split(' ')[0];
    data.ReturnTime = dateTo.split(' ')[1];

    this.$('.paypal-ref').toggle(!!data.PaypalRef);

    for (var key in data) {
      var value = data[key],
          $field = this.$el.find('[name="'+ key +'"]');
      if ($field.is(':input')) {
        $field.val(value);
      } else if (key == 'Amount') {
        $field.text(value.toFixed(2));
      } else {
        $field.text(value);
      }
    }

    this.$('.datepicker').datepicker('update');

    this.loadPriceBreakdown(data);
    scope && this.switchActionButtons(data, scope);
  },
  done: function(data) {
    var self = this,
        orderId = data.Id || this.$el.data('order-id'),
        $curRow, $noteCell, originalNotes, x = 0, y = 0;

    if (this._notNewState()) {
      $curRow = $('.order-item[data-id="' + orderId + '"].cur');
      $curRow = $curRow.length ? $curRow : $('#order-' + orderId);
      $noteCell = $curRow.find('[name="Notes"] .data');
      originalNotes = $noteCell.find('textarea').text();
      originalNotes = JSON.parse(originalNotes || '[]') || [];
      y = $noteCell.offset().top;
      x = $noteCell.offset().left; //evaluate before update!

      // au.view.Orders.update(data);
      Backbone.Events.trigger('orders:update', data);

      if (data.Notes.length - (originalNotes.length || 0)) {
        au.view.NoteForm.load(data.Notes)//.pos(x, y).show(orderId).editNote();
      }

    } else {

      var deferred = $.Deferred();

      // au.view.Orders.add(data);
      Backbone.Events.trigger('orders:add', data, deferred);

      deferred.progress(function() {
        $curRow = $('.order-item[data-id="' + orderId + '"].cur');
        $curRow = $curRow.length ? $curRow : $('#order-' + orderId);

        if (!$curRow.length) return;

        $noteCell = $curRow.find('[name="Notes"] .data');
        originalNotes = $noteCell.find('textarea').text();
        originalNotes = JSON.parse(originalNotes || '[]') || [];
        y = $noteCell.offset().top;
        x = $noteCell.offset().left; //evaluate after added!

        // if (x*y) {
        //   au.view.NoteForm.pos(x, y).show(orderId);
        // }
      });
    }

    this.$el.removeClass('dirty');

    AU.closeForm(function() {
      self.resetForm();
    });
  },
  fail: function(data) {
    if (!data.responseJSON) {
      alert('error: can not save!');
    } else if (data.responseJSON.error) {
      alert(data.responseJSON.error);
    } else if (data.responseJSON.errors) {
      var msg = '';
      _.each(data.responseJSON.errors, function(error) {
        if (error.Message) msg += error.Message + '; ';
      });
      alert(msg ? msg : 'error: can not save!');
    };
  },
  cancel: function(e) {
    if (!$(e.target).hasClass('close')) {
      this.$el.removeClass('dirty');
    }
    AU.closeForm(this.resetForm.bind(this));
  },
  resetForm: function() {
    this.$('form')[0].reset();
    this.$('.datepicker').datepicker('update');
    this.$('.breakdown').hide();

    this.$('strong[name="Days"]').text('0');
    this.$('strong[name="PaymentType"]').text('On Site');
    this.$('strong[name="Amount"]').text('--.--');
    $('.orders .order-item').removeClass('cur');

    this.hideStatusSelector();
    this.$el.removeClass('dirty');

    this.$('.error').removeClass('error');
  },
  beforeSubmit: function(that) {
    if (!this.validate(true, true)) return;

    var data = that.options.data;
    data['From'] = AU.Helpers.formatDateForSubmit(data.CheckInDate) + ' ' + data.ArrivalTime;
    data['To']   = AU.Helpers.formatDateForSubmit(data.CheckOutDate) + ' ' + data.ReturnTime;

    if (!this._notNewState()) {
      data.State = "confirmed";
      data.PaymentType = "On Site";
    }

    that.options.data = data;

    if (this._notNewState()) {
      var currentDate = $('#date-start input').val();
      if (currentDate !== '') currentDate = moment(currentDate, "DD/MM/YYYY").format("YYYY-MM-DD");
      that.options.url = this.$('form').attr('action') + '/' + this.$el.data('order-id') + '?current_date=' + currentDate;
    }
  },
  _notNewState: function() {
    return this.$el.attr('state') !== 'new';
  },
  doAction: function(e) {
    var id = this.$el.data('order-id');

    if (!id) return;

    var self = this,
        btn = $(e.currentTarget),
        url = btn.data('url'),
        action = url.split('/').reverse()[0].toLowerCase(),
        $orderItem = $('#order-' + id);

    if (action === 'cancel') {
      var r = confirm("Are you sure you want to cancel this booking?");
      if (r == false) {
        return false;
      }
    }

    $.ajax({
      url: url,
      method: 'PUT',
      dataType: 'json',
      data: {'primary_values[]': id}
    }).success(function() {
      var originalText = btn.data('original-text'),
          processingText = btn.data('processing-text'),
          finishText = btn.data('finish-text');

      btn.addClass('finished').text(finishText);

      switch(action) {
        case 'confirm':
          $orderItem.attr('state', 'confirmed').find('[name="State"]').text('confirmed');
          break;
        case 'check_in':
          $orderItem.find('[name="State"]').text('check-in');
          break;
        case 'check_out':
          $orderItem.find('[name="State"]').text('check-out');
          break;
        case 'cancel':
          $orderItem.attr('state', 'cancelled').find('[name="State"]').text('cancelled');
          break;
      }

      AU.closeForm(function() {
        self.resetForm();
        btn.removeClass('finished').text(originalText);
      });

      // reload all tables in dashboard page
      if ($('#dashboard').length) Backbone.Events.trigger('suborders:update');
    });
  },
  loadPriceBreakdown: function(order) {
    if (!order.PriceBreakdown) return;

    var tmpl = "<% _.each(Items, function(item) { %> " +
                  "<tr>" +
                    "<td><%= item.Date %></td>" +
                    "<td>$<%= item.Rate.toFixed(2) %></td>" +
                    "<td><%= item.Description %></td>" +
                    "<td>$<%= item.DayTotal.toFixed(2) %></td>" +
                  "</tr>" +
                "<% }); %>";
    this.$('.j-breakdown-body').html(_.template(tmpl)(order.PriceBreakdown));
    this.$('.j-breakdown-total').text(order.PriceBreakdown.Total.toFixed(2));
    this.$('.breakdown').show();
  },
  collapse: function(e) {
    $(e.target).toggleClass('open').parent().find('.collapse-body').toggleClass('hidden');
  },
  monitDatepickers: function() {
    var self = this;

    this.$('.datepicker').datepicker({
      autoclose: true,
      todayHighlight: true,
      format: 'dd/mm/yyyy'
    }).on("changeDate", function(e) {
      self.rate();
    });

    this.validate();
  },
  validate: function(toIndicate, fullValidation) {
    // reset cancel state
    var fugue = this.$fugue.data('fugue');
    fugue && (fugue.cancel = false);

    if (fullValidation) {
      var $emailWrapper = this.$('.email'),
          email = $emailWrapper.find('input').val();
      this.showOrCleanError($emailWrapper, !this.isEmail(email), toIndicate);
    }

    var $datepickerWrapper = this.$('.datepicker-wrapper'),
        $from = $datepickerWrapper.find('.from'),
        $to = $datepickerWrapper.find('.to'),
        startDate = $from.val(),
        endDate = $to.val(),
        $arrival = $datepickerWrapper.find('[name="ArrivalTime"]'),
        $back = $datepickerWrapper.find('[name="ReturnTime"]'),
        startTime = $arrival.val(),
        endTime = $back.val();

    $to.datepicker('setStartDate', startDate);

    this.showOrCleanError($from.parent(), !startDate, toIndicate);
    this.showOrCleanError($to.parent(), !endDate, toIndicate);
    this.showOrCleanError($arrival.parent(), !startTime, toIndicate);
    this.showOrCleanError($back.parent(), !endTime, toIndicate);

    // stop validation if one of the date value is empty
    if (fugue && fugue.cancel) return false;

    this.showOrCleanError($to.parent(), AU.Helpers.formatDateForSubmit(startDate) > AU.Helpers.formatDateForSubmit(endDate), toIndicate);

    if (startDate == endDate && startTime && endTime) {
      var self = this;
      setTimeout(function () {
        self.showOrCleanError($back.parent(), startTime >= endTime, toIndicate)
      }, 0);
    }

    return (fugue && !fugue.cancel);
  },
  showOrCleanError: function($elem, hasError, toIndicate) {
    if (hasError) {
      if (toIndicate) $elem.addClass('error');
      var fugue = this.$fugue.data('fugue');
      fugue && (fugue.cancel = true);
    } else {
      $elem.removeClass('error');
    }
  },
  // isEmail: function(text) { return /^([\w-\+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(text); },
  // isEmail is made for Safari for it doesn't support HTML5 email input!
  isEmail: function(text) { return /\S+@\S+/.test(text); },
  isPhone: function(text) { return /[0-9 -()+]+$/.test(text); },
  rate: function() {
    if (this._notNewState() || !this.validate(true)) return;

    var dateFormator = AU.Helpers.formatDateForSubmit,
        checkInDate = dateFormator(this.$('input[name="CheckInDate"]').val()),
        arrivalTime = this.$('select[name="ArrivalTime"]').val(),
        checkOutDate = dateFormator(this.$('input[name="CheckOutDate"]').val()),
        returnTime = this.$('select[name="ReturnTime"]').val();

    var data = {
      From: checkInDate + ' ' + arrivalTime,
      To: checkOutDate + ' ' + returnTime,
      ParkingProductName: this.$('select[name="ParkingProductName"]').val(),
      CleanProductId: this.$('select[name="CleanProductId"]').val()
    };

    var self = this;
    $.ajax({
      url: '/order',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json'
    }).done(function(data) {
      var amount = data.PaymentType == "Paypal" ? data.Amount : data.OnSiteAmount;
      self.$('strong[name="Amount"]').text(amount.toFixed(2));
      self.$('[name="Days"]').text(data.Days);
    });
  },
  showStatusSelector: function(e) {
    this.$('.edit-status').parent().addClass('hidden');
    var $selector = this.$('.state-wrap').removeClass('hidden').find('select'),
        status = $selector.removeAttr('disabled').val();

    this.$editStatusButton = $(e.target);

    $selector.data('status', status);
  },
  hideStatusSelector: function() {
    this.$editStatusButton.parent().removeClass('hidden');
    var $selector = this.$('.state-wrap').addClass('hidden').find('select').attr('disabled', 'disabled'),
        status = $selector.data('status');

    $selector.val(status);
  },
  switchActionButtons: function(data, scope) {
    this.$('.j-button-panel').addClass('hidden');
    switch (scope) {
      case 'Checkins & Checkouts Today':
        this.$('#confirm-check').removeClass('hidden');
        break;
      case 'Car Detailing (Internal) For Checkout Due Tomorrow':
        if (data.Cleaning == 'pending') this.$('#clean-order').removeClass('hidden');
        break;
      case 'Car Detailing (Outsourced)':
        if (data.Cleaning == 'pending') this.$('#outsource-clean').removeClass('hidden');
        else if (data.Cleaning == 'ordered') this.$('#clean-order').removeClass('hidden');
        break;
      case 'Calling List (Unconfirmed Bookings)':
        this.$('#confirm-order').removeClass('hidden');
        break;
    }
  }
});

AU.View.Orders = Qor.View.extend({
  events: {
    'click .order-item': 'edit',
    'click .add-note': 'addNote',
    'click .has-note': 'hasNote'
  },
  el: '#container .orders',
  initialize: function() {
    Backbone.Events.on('orders:add', this.add, this);
    Backbone.Events.on('orders:update', this.update, this);
  },
  _build: function(row) {
    var tmpl = this.$el.parent().find('.order-template').html(),
        id = 'order-' + row.Id,
        $tmpl = $(tmpl);

      $tmpl.attr('id', id);
      $tmpl.attr('data-id', id);
      $tmpl.attr('state', row.State);

      for (var key in row) {
        if (key === 'Notes') {
          var notes = row[key],
              $cell = $tmpl.find('[name="'+ key +'"] .data');

          if (notes.length) {
            notes = JSON.stringify(notes);
            $cell.addClass('has-note').find('textarea').text(notes);
          } else {
            $cell.addClass('add-note');
          }
        } else {
          var text = row[key];

          if (['From', 'To'].indexOf(key) !== -1) {
            text = moment(text).zone(AUGloabl.ServerTimeZone).format("HH:mm DD MMM");
          }

          $tmpl.find('[name="'+ key +'"] a').attr('title', row[key]).text(text);
        }
      }

      return $tmpl;
  },
  load: function(data) {
    var container = document.createDocumentFragment();

    for (var i = 0; i < data.length; ++i) {
      var $row = this._build(data[i]);

      container.appendChild($row[0]);
    }

    this.$el.html(container);
  },
  add: function(data) {
    var $row = this._build(data);
    this.$el.prepend($row.attr('state', 'confirmed').addClass('cur'));
  },
  update: function(data) {
    var $row = this._build(data);

    $('#order-' + data.Id).replaceWith($row.addClass('cur'));
  },
  edit: function(e) {
    this.$('.order-item').removeClass('cur');

    var $order = $(e.target).closest('.order-item').addClass('cur'),
        id = $order.attr('id').replace('order-', ''),
        data = {};

    $order.find('.data').each(function() {
      var name = $(this).parent().attr('name'),
          value = $(this).attr('title');

      data[name] = value;
    });

    var $form = $('#order-form');
    function switchForm() {
      var state = $('body').hasClass('admin') ? 'confirm' : 'edit',
          newText = $form.find('h1').data('edit-text');

      $form.attr('state', state);
      $form.find('h1').text(newText);
      $form.data('order-id', id);

      au.view.OrderForm.load(data);

      AU.openForm(function() {
        $.ajax({
          url: '/admin/orders/' + id + '.json',
          dataType: 'json',
          success: function(data) {
            au.view.OrderForm.load(data);
          }
        });
      });
    }

    if ($form.hasClass('hidden')) {
      switchForm();
    } else if ($form.attr('state') === 'new' || $form.data('order-id') !== id) {
      AU.closeForm(function() {
        switchForm();
      });
    } else {
      AU.closeForm(function() {
        $('.order-item').removeClass('cur');
      });
    }
  },
  addNote: function(e) {
    e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;

    var x = e.pageX - (e.offsetX || 18) + $(e.target).width()/2 + 2,
        y = e.pageY - (e.offsetY || 12) + $(e.target).height()/2 - 2,
        $order = $(e.target).closest('.order-item'),
        id = $order.attr('id').replace('order-', '');

    au.view.NoteForm.$el.attr('state', 'new');
    au.view.NoteForm.resetForm().pos(x, y).toggle(id);
  },
  hasNote: function(e) {
    e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;

    var x = e.pageX - (e.offsetX || 0) + $(e.target).width()/2,
        y = e.pageY - (e.offsetY || 0) + $(e.target).height()/2,
        $order = $(e.target).closest('.order-item'),
        id = $order.attr('id').replace('order-', ''),
        notes = $(e.target).find('textarea').text();

    au.view.NoteForm.$el.attr('state', 'add');
    au.view.NoteForm.resetForm().load(notes).pos(x, y).toggle(id);
  }
});

AU.View.OrderFilters = AU.Klass.AjaxForm.extend({
  events: {
    'click .icon-search': 'openSearch',
    'click .close-icon': 'closeSearch',
    'change .select-type': 'searchOrder',
    'keyup .keyword': 'searchOrder'
  },
  initialize: function() {
    var isDashboard = !!this.$el.parents('#dashboard').length;
    if (isDashboard) return;

    this.lock = true;

    this.$form = this.AjaxForm({
      reset: null
    });

    this.today = moment().format('DD/MM/YYYY');
    this.dateText = 'TODAY';
    this.$('.datepicker').datepicker({
      autoclose: true,
      todayHighlight: true,
      format: 'dd/mm/yyyy',
      clearBtn: true
    });
    this.$('.datepicker').val(this.today).datepicker('update');

    var self = this;
    this.$('.datepicker').on('clearDate', function() {
      self.dateText = 'ANY DAY';
    }).on('changeDate', function() {
      var dateText = $(this).val() || self.dateText;
      self.dateText = self.today === dateText ? 'TODAY' : dateText;

      self.$('.date-text').text(self.dateText);

      var result = '';
      if (self.dateText === 'TODAY') {
        result = self.today;
      } else {
        result = self.dateText === 'ANY DAY' ? '' : self.dateText;
      }

      self.$('.datepicker').val(result).datepicker('update');
      self.searchOrder();
    });

    // TODO: disable this on dashboard page
    if (location.pathname == '/admin/orders') {
      this.$('.j-order-stat').show();
      this.refreshStat(this.today);
    }
  },
  searchOrder: function(e) {
    if (!this.lock) {
      return;
    }

    if((!e) || (!e.keyCode) || (e.keyCode && e.keyCode == '13')) {

      if (e && e.keyCode && e.keyCode == '13') {
        this.$('.datepicker').val('').datepicker('update');
        this.$('.date-text').text('ANY DAY');
      }

      this.$form.submit();

      if (location.pathname == '/admin/orders') {
        this.refreshStat(this.$('.datepicker').val());
      }

      this.lock = false;
    }
  },
  beforeSubmit: function(that) {
    $('#container .orders').addClass('invisible');
    $('#container .table-loader').removeClass('hidden');
    var data = that.options.data;
    data['current_date'] = AU.Helpers.formatDateForSubmit(data['current_date']);
  },
  done: function(data) {
    au.view.Orders.load(data);
    this.lock = true;
    $('#container .orders').removeClass('invisible');
    $('#container .table-loader').addClass('hidden');

    var self = this;
    setTimeout(function() {
      var isSearch = self.$('.date-text').text() === 'ANY DAY',
          isAllBookings = self.$('.today .select-type').val() === 'all';

      $('[name="From"], [name="To"]').toggleClass('show', isSearch);
      $('[name="BookingListInOutTime"]').toggleClass('hide', isSearch);
      $('[name="BookingListIn/Out"]').toggleClass('hide', isSearch || !isAllBookings);
    }, 0);
  },
  refreshStat: function(date) {
    if (!date) return;

    date = AU.Helpers.formatDateForSubmit(date);
    $.get('/order/stat/'+date).done(function(stat) {
      self.$('.j-order-check-in').text(stat.CheckIns);
      self.$('.j-order-check-out').text(stat.CheckOuts);
      self.$('.j-slot-available').text(stat.Availables);
    });
  },
  openSearch: function() {
    if (!this.$('.keyword').hasClass('focus')) {
      this.$('.keyword').addClass('focus').focus();
      this.$('.keyword').parent().addClass('focus');
    }
  },
  closeSearch: function() {
    if (this.$('.keyword').hasClass('focus')) {
      this.$('.keyword').removeClass('focus').val('');
      this.$('.keyword').parent().removeClass('focus');
    }
  }
});

AU.View.CalendarPage = Qor.View.extend({
  events: {
    'click .j-cal-option': 'toggleReportOptions',
    'click .adjust-price': 'showPriceForm',
    'click .adjust-discounts': 'showDiscountForm',
    'click .nav .next': 'next',
    'click .nav .prev': 'prev',
    'click .nav .calendar-today': 'today'
  },
  initialize: function() {
    var self = this;

    this.calendar = $('#calendar').fullCalendar({
      header: {
        right: null
      },
      firstDay: 1,
      displayEventEnd: true,
      editable: false,
      eventLimit: false,
      timeFormat: '',
      eventSources: [function(start, end, timezone, callback) {
        self.loadReports(start, end, timezone, callback);
      }]
    });

    this.$el.tabSwitch({
      click: function() {
        $('#calendar').fullCalendar('removeEventSource', au.view.CalendarPage.loadLastYearReports);

        var checked = self.$('.tab-page.cur input[value="previous-year-data"]').is(':checked');
        if (checked) {
          $('#calendar').fullCalendar('addEventSource', au.view.CalendarPage.loadLastYearReports);
        }

        $('#calendar').fullCalendar('refetchEvents');
      }
    });

    this.drawMonthlyBookingsKPIChart();
  },
  next: function() {
    $('#calendar').fullCalendar('next');
  },
  prev: function() {
    $('#calendar').fullCalendar('prev');
  },
  today: function() {
    $('#calendar').fullCalendar('today');
  },
  toggleReportOptions: function(event) {
    var current = $(event.currentTarget),
        val = current.val(),
        data = $('.j-'+val+'-data');
    if (val != 'previous-year-data') {
      data.toggle();
    } else {
      if (current.is(':checked')) {
        $('#calendar').fullCalendar('addEventSource', au.view.CalendarPage.loadLastYearReports);
      } else {
        $('#calendar').fullCalendar('removeEventSource', au.view.CalendarPage.loadLastYearReports);
        this.refreshData();
      }
    }
  },
  loadLastYearReports: function(start, end, timezone, callback) {
    au.view.CalendarPage.loadReports(start, end, timezone, callback, true);
  },
  loadReports: function(start, end, timezone, callback, isLastYear) {
    var self = this,
        dtype = self.$('.tab.cur').data('type'),
        month = $('#calendar').fullCalendar('getDate');

    if (isLastYear) month = month.subtract(1, 'year');

    $.ajax({
        url: '/calendar/'+dtype+'/'+month.format('YYYY-MM'),
        success: function(result) {
          var events = [];
          _.each(result.Reports, function(report) {
            var day = report.Day;
            // remove trailing timezone, also for out-of-the-country tests
            if (day.indexOf('Z') != -1) day = day.substring(0, day.indexOf('Z'));
            if (day.indexOf(AUGloabl.ServerTimeZone) != -1) day = day.substring(0, day.indexOf(AUGloabl.ServerTimeZone));

            var udtype;
            switch(dtype) {
              case 'indoor':
                udtype = 'Indoor'
                break;
              case 'under cover':
                udtype = 'UnderCover'
                break;
              case 'outdoor':
                udtype = 'Outdoor'
                break;
            }

            var start = moment(day),
                percentage = report[udtype+'Occupancy'] / result[udtype+'SlotAvailablity'] * 100;

            // add 1 year to show data of last year in the current view
            if (isLastYear) start = start.add(1, 'year');

            if (percentage < 1 && percentage > 0) {
              percentage = percentage.toFixed(2);
            } else {
              percentage = percentage.toFixed(0);
            }
            events.push({
              title: '$'+report[udtype+'SetPrice'].toFixed(2)+'',
              color: '#E0E0E0',
              allDay: false,
              className: ['j-set-price-data', 'set-price'],
              start: start.clone().add(10, 's')
            }, {
              title: report[udtype+'Occupancy']+' ('+percentage+'%)',
              color: '#FEDF88',
              allDay: false,
              className: ['j-occupancy-data', 'occupancy'],
              start: start.clone().add(20, 's')
            }, {
              title: '$'+report[udtype+'Billing'].toFixed(2)+'',
              color: '#179588',
              allDay: false,
              className: ['j-billing-data', 'billing'],
              start: start.clone().add(30, 's')
            }, {
              title: report[udtype+'DropOffRate'].toFixed(2)+'%',
              color: '#E0E0E0',
              allDay: false,
              className: ['j-drop-off-rate-data', 'drop-off-rate'],
              start: start.clone().add(40, 's')
            });

            // handle discounts data
            var secondOffset = 50;
            var index = 0.6;
            _.each(report.PromotionBenefit.Discounts, function(discount) {
              _.each(discount.Products, function(product) {
                if (result.Products[dtype].Id != product.ProductId) return;

                events.push({
                  title: discount.Days+'+ $'+product.Discount.toFixed(2),
                  color: 'rgba(241, 69, 61, '+index+')',
                  allDay: false,
                  className: ['j-discounts-data', 'discounts'],
                  start: start.clone().add(secondOffset, 's')
                });
                secondOffset += 10;
                index += 0.15;
                if (index > 1) index = 1;
              })
            });
          });

          if (isLastYear) {
            _.each(events, function(e) {
              e.className.push('cal-last-year');
              e.start = e.start.add(1, 's');
            });
          } else {
            $('.j-daily-average').text(result.DailyAverage.toFixed(2));
            $('.j-total-billing').text(result.TotalBilling.toFixed(2));
          }

          callback(events);

          self.refreshData();
        }
    });
  },
  showPriceForm: function() {
    $('.price-form-wrapper').removeClass('hidden');
    au.view.PriceForm.show();
    au.view.PriceForm.el.reset();
  },
  showDiscountForm: function() {
    $('.discount-form-wrapper').removeClass('hidden');
    au.view.DiscountForm.show();
    au.view.DiscountForm.el.reset();
  },
  refreshData: function() {
    this.$('.tab-page.cur .j-cal-option').each(function() {
      var option = $(this),
          val = option.val();
      if (val != 'previous-year-data' && !option.is(':checked')) {
        $('.j-'+val+'-data').hide();
      }
    });
  },
  drawMonthlyBookingsKPIChart: function() {
    return;
    var elem = document.getElementById('monthly-bookings-chart');
    if (!elem) return;

    $.get('/calendar_monthly_bookings').done(function(resp) {
      var data = {
          labels: ['JAN', 'Feb', 'MAR', 'APR', 'May', 'Jun', 'Jul', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [
              {
                  label: 'This year',
                  fillColor: 'transparent',
                  strokeColor: '#009688',
                  pointColor: '#BFE5E1',
                  pointStrokeColor: '#E6E6E6',
                  pointHighlightFill: '#BFE5E1',
                  pointHighlightStroke: '#009688',
                  data: resp.ThisYear
              },
              {
                  label: 'Last year',
                  fillColor: 'transparent',
                  strokeColor: '#FFC107',
                  pointColor: '#FFF8E1',
                  pointStrokeColor: '#E6E6E6',
                  pointHighlightFill: '#FFF8E1',
                  pointHighlightStroke: '#FFC107',
                  data: resp.LastYear
              }
          ]
      };
      var ctx = elem.getContext("2d");
      new Chart(ctx).Line(data, {
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: false,
        bezierCurve : false,
        pointDotRadius: 3
      });
    })
  }
});

AU.Helpers = {
  // For Calendar Price Form and Discount Form
  addDatePicker: function(form) {
    form.$('.datepicker').datepicker({
      autoclose: true,
      todayHighlight: true,
      format: 'dd/mm/yyyy',
      startDate: new Date()
    }).on('changeDate', function() {
      AU.Helpers.validateStartAndEnd(form);
    });
  },
  // For Calendar Price Form and Discount Form
  validateStartAndEnd: function(view) {
    var startField = view.$el.find('input[name="Start"]').parent(),
        endField = view.$el.find('input[name="End"]').parent(),
        start = view.$el.find('input[name="Start"]').val(),
        end = view.$el.find('input[name="End"]').val();

    view.$el.find('input[name="End"]').datepicker('setStartDate', start);

    // clean
    startField.removeClass('error');
    endField.removeClass('error');

    // validate
    if (start == "") {
      view.$fugue.data('fugue').cancel = true;
      startField.addClass('error');
    }
    if (end == "") {
      view.$fugue.data('fugue').cancel = true;
      endField.addClass('error');
    }

    if (this.formatDateForSubmit(start) > this.formatDateForSubmit(end)) {
      view.$fugue.data('fugue').cancel = true;
      endField.addClass('error');
    }
  },
  formatDateForSubmit: function(dateStr) {
    if (dateStr == '') return '';
    return moment(dateStr, "DD/MM/YYYY").format("YYYY-MM-DD");
  }
};

AU.View.DiscountForm = AU.Klass.AjaxForm.extend({
  events: {
    'click .cancel, .close': 'hide',
    'click #add-discount-item': 'add',
    'click .discount-item .x': 'remove'
  },
  initialize: function() {
    var self = this;

    AU.Helpers.addDatePicker(this);

    this.resetDiscountListInputNames();

    this.$fugue = this.AjaxForm({
      reset: null,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      beforeSubmit: function(data) {
        self.$fugue.data('fugue').cancel = false;
        AU.Helpers.validateStartAndEnd(self);
        self.$('.discount-list .discount-inputs .j-non-empty').each(function() {
          var input = $(this);
          input.removeClass('error');
          if (input.val() == "") {
            input.addClass('error');
            self.$fugue.data('fugue').cancel = true;
          }
        })

        var data = this.$el.serializeArray();
        _.each(data, function(item, index) {
          if (item.name == 'Start' || item.name == 'End') {
            item.value = AU.Helpers.formatDateForSubmit(item.value);
            data[index] = item;
          };
        });
        this.options.data = data;
      }
    });
  },
  success: function() {
    $('#calendar').fullCalendar('refetchEvents');
    this.hide();
  },
  add: function() {
    var tpl = $('#discount-item-tpl').html();
    $('.discount-list').append(tpl);
    this.resetDiscountListInputNames();
  },
  remove: function(e) {
    $(e.target).parent().remove();
    this.resetDiscountListInputNames();
  },
  show: function() {
    this.$el.removeClass('hidden');
  },
  hide: function() {
    this.$el.addClass('hidden');
    $('.discount-form-wrapper').addClass('hidden');
  },
  resetDiscountListInputNames: function() {
    this.$('.discount-list .j-discount-item').each(function(index) {
      $(this).find('.j-input').each(function() {
        $(this).attr('name', $(this).data('name').replace("%d", index));
      });
    })
  }
});

AU.View.PriceForm = AU.Klass.AjaxForm.extend({
  events: {
    'click .cancel, .close': 'hide',
    'click .collapse': 'collapse'
  },
  initialize: function() {
    var self = this;

    AU.Helpers.addDatePicker(this);

    this.$fugue = this.AjaxForm({
      reset: null,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      beforeSubmit: function(data) {
        self.$fugue.data('fugue').cancel = false;
        AU.Helpers.validateStartAndEnd(self);

        var data = this.$el.serializeArray();
        _.each(data, function(item, index) {
          if (item.name == 'Start' || item.name == 'End') {
            item.value = AU.Helpers.formatDateForSubmit(item.value);
            data[index] = item;
          };
        });
        this.options.data = data;
      }
    });
  },
  done: function() {},
  success: function() {
    $('#calendar').fullCalendar('refetchEvents');
    this.hide();
  },
  failed: function() {},
  show: function() {
    this.$el.removeClass('hidden');
  },
  hide: function() {
    this.$el.addClass('hidden');
    $('.price-form-wrapper').addClass('hidden');
  },
  collapse: function(e) {
    $(e.target).toggleClass('open').parent().find('.collapse-body').toggleClass('hidden');
  }
});


AU.View.NoteForm = AU.Klass.AjaxForm.extend({
  events: {
    'click .cancel': 'cancel',
    'click .new-btn': 'toggleNewForm',
    'click .cancel-edit': 'cancelEdit',
    'click .save-edit': 'saveEdit',
    'click .close': 'close'
  },
  initialize: function() {
    this.$form = this.AjaxForm({
      reset: null
    });

    this.tmpl = this.$('.note-tmpl').html();
    this.$('.note-tmpl').html('');
    this.orderId = '';
    this.$('textarea').textareaAutoSize();

    this.$el.on('keydown', 'input[type="number"]', function(e) {
      if (e.keyCode == '13') {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;
      }
    });
  },
  pos: function(x, y) {
    var self = this;

    this.$el.css({
      top: y + 'px',
      left: x - self.$el.outerWidth() + 'px'
    });

    return this;
  },
  show: function(id) {
    this.$el.hide().fadeIn(200);
    this.$('.record-id').val(id);
    this.orderId = id;

    if (this.$el.attr('state') === 'new') {
      this.$('.create-fields').removeClass('hidden');
      this.$('.create-fields textarea').focus();
    } else {
      this.$('.create-fields').addClass('hidden');
    }

    return this;
  },
  hide: function() {
    this.$el.hide();
    this.$('.notes-wrapper').html('');
    return this;
  },
  toggle: function(id) {
    if (this.$el.is(':visible') && id == this.orderId) {
      this.hide();
    } else {
      this.show(id);
    }
    return this;
  },
  cancel: function() {
    this.hide();
    this.resetForm();
  },
  resetForm: function() {
    this.$form[0].reset();
    this.$('.notes-wrapper').html('');
    this.$('.create-fields').addClass('hidden');

    return this;
  },
  done: function(data) {
    this.hide();
    this.resetForm();
    var $order = $('#order-' + data.OrderId),
        $orders = $('[data-id="order-' + data.OrderId + '"]'),
        $note = $order.find('[name="Notes"] .data'),
        notes = $note.find('textarea').text(),
        notes = JSON.parse(notes || "[]") || [];

    notes = JSON.stringify(notes.concat(data));

    $orders.each(function() {
      $(this).find('[name="Notes"] .data').removeClass('add-note').addClass('has-note').find('textarea').text(notes);
    });
  },
  load: function(data) {
    this.$('.notes-wrapper').html('');

    data = $.isArray(data) ? data : JSON.parse(data || '[]') || [];

    var self = this;

    $.each(data, function(i) {
      var $tmpl = $(self.tmpl),
          formattedDate = moment(data[i].CreatedAt).format("MMM DD, YYYY hh:mm");

      $tmpl.attr('note-id', data[i].Id);
      $tmpl.find('.note-date').text(formattedDate);
      $tmpl.find('.note-contents .pre').text(data[i].Note);
      $tmpl.find('.edit-area').text(data[i].Note).attr('disabled', true);
      $tmpl.find('.edit-area').attr('id', data[i].Id);
      $tmpl.find('.change-amount input').val(data[i].ChangedAmount).attr('disabled', true);
      $tmpl.find('.change-amount-text em').text(data[i].ChangedAmount);

      self.$('.notes-wrapper').prepend($tmpl);
      $tmpl.find('textarea').textareaAutoSize();
    });

    return this;
  },
  toggleNewForm: function() {
    this.$('.note-item .note-contents').removeClass('hidden');
    this.$('.note-item .edit-area-wrapper').addClass('hidden');

    this.$('.create-fields').toggleClass('hidden');
    this.$('.create-fields textarea').focus();
  },
  editNote: function(e) {
    this.$('.create-fields').addClass('hidden');

    var $noteItem = this.$('.note-item').first(),
        $contents = $noteItem.find('.note-contents'),
        $editArea = $noteItem.find('.edit-area-wrapper');

    $contents.addClass('hidden');
    $editArea.removeClass('hidden').find('.edit-area').val($contents.find('.pre').text());
    $noteItem.find('.j-explanation-area').focus();

    // if (!e.isTrigger) {
    //   $editArea.find('textarea').focus();
    // }
  },
  cancelEdit: function(e) {
    var $noteItem = $(e.target).parents('.note-item'),
        $contents = $noteItem.find('.note-contents'),
        $editArea = $noteItem.find('.edit-area-wrapper');

    $editArea.addClass('hidden');
    $contents.removeClass('hidden');
  },
  saveEdit: function(e) {
    var self = this,
        $noteItem = $(e.target).parents('.note-item'),
        $contents = $noteItem.find('.note-contents'),
        $editArea = $noteItem.find('.edit-area-wrapper'),
        $textarea = $editArea.find('textarea'),
        id = $textarea.attr('id');

    var $orderItems = $('[data-id="order-' + this.orderId + '"]'),
        changedAmount = $editArea.find('.change-amount input').val();

    $noteItem.find('.change-amount-text em').text(changedAmount);

    $.ajax({
      url: '/admin/notes/' + id + '.json',
      type: 'POST',
      contentType: 'application/json; charset=UTF-8',
      dataType: 'JSON',
      data: JSON.stringify({
        OrderId: self.orderId,
        Explanation: $editArea.find('.j-explanation-area').val()
      }),
      success: function(noteItem) {
        $contents.find('.pre').text(noteItem.Note);
        $editArea.addClass('hidden');
        $contents.removeClass('hidden');

        $orderItems.each(function(index, item) {
          var $noteCell = $(item).find('.has-note'),
              notes = $noteCell.find('textarea').text();

          notes = JSON.parse(notes || '[]') || [];

          for(var i = 0; i < notes.length; ++i) {
            if (notes[i].Id == id) {
              notes.splice(i, 1, noteItem);
            }
          }

          notes = JSON.stringify(notes);
          $noteCell.find('textarea').text(notes);
          self.close();
        });
      }
    });
  },
  close: function() {
    this.hide()
  }
});

AU.View.MaskLayer = Qor.View.extend({
  events: {
    'click .return': 'cancel',
    'click .discard': 'discard'
  },
  init: function(func) {
    this.func = func;
    return this;
  },
  show: function() {
    var self = this;
    this.$el.removeClass('hidden');
    setTimeout(function() {
      self.$el.addClass('show');
    }, 42);
  },
  hide: function() {
    var self = this;
    this.$el.removeClass('show');
    setTimeout(function() {
      self.$el.addClass('hidden');
    }, 233);
  },
  cancel: function() {
    this.hide();
  },
  discard: function() {
    this.hide();
    this.func && this.func();
  }
});

AU.SubView.Orders = Qor.SubView.extend({
  events: {
    'click .order-item': 'edit',
    'click .add-note': 'addNote',
    'click .has-note': 'hasNote'
  },
  initialize: function() {
    Backbone.Events.on('orders:add', this.add, this);
    Backbone.Events.on('orders:update', this.update, this);
    Backbone.Events.on('suborders:update', this.update, this);
  },
  _build: function(row) {
    var tmpl = this.$el.parent().find('.order-template').html(),
        id = 'order-' + row.Id,
        $tmpl = $(tmpl);

    $tmpl.attr('id', id);
    $tmpl.attr('data-id', id);
    $tmpl.attr('state', row.State);
    $tmpl.attr('data-due', row.Due);
    $tmpl.attr('data-inout', row["In/Out"]);
    $tmpl.attr('data-cleaning', row.Cleaning);
    $tmpl.attr('data-is-late-check-in-out', row.IsLateCheckInOut);

    for (var key in row) {
      if (key === 'Notes') {
        var notes = row[key],
            $cell = $tmpl.find('[name="'+ key +'"] .data');

        if (notes.length) {
          notes = JSON.stringify(notes);
          $cell.addClass('has-note').find('textarea').text(notes);
        } else {
          $cell.addClass('add-note');
        }
      } else {
        var text = row[key];

        if (['From', 'To'].indexOf(key) !== -1) {
          text = moment(text).format("HH:mm DD MMM");
        }

        $tmpl.find('[name="'+ key +'"] a').attr('title', row[key]).text(text);
      }
    }

    return $tmpl;
  },
  load: function(data) {
    var container = document.createDocumentFragment();

    for (var i = 0; i < data.length; ++i) {
      var $row = this._build(data[i]);

      container.appendChild($row[0]);
    }

    this.$el.html(container);

    Backbone.Events.trigger('subviewOrders:CURD');
  },
  add: function(data, deferred) {
    var self = this;
    var scope = this.$el.data('scope');
    var url = '/admin/orders.json?scopes=';
    $.get(url + encodeURIComponent(scope), function(datas) {
      datas = $.isArray(datas) ? datas : JSON.parse(datas || '[]') || [];

      if (datas.length) {
        self.load(datas);
        deferred.notify(datas.length);
      }
    });
  },
  update: function() {
    var self = this;
    var scope = this.$el.data('scope');
    var url = '/admin/orders.json?scopes=';
    $.get(url + encodeURIComponent(scope), function(datas) {
      datas = $.isArray(datas) ? datas : JSON.parse(datas || '[]') || [];
      self.load(datas);
    });
  },
  edit: function(e) {
    $('.order-item').removeClass('cur');

    var $order = $(e.target).closest('.order-item').addClass('cur'),
        id = $order.attr('id').replace('order-', ''),
        scope = $order.parent().data('scope'),
        data = {};

    $order.find('.data').each(function() {
      var name = $(this).parent().attr('name'),
          value = $(this).attr('title');

      data[name] = value;
    });

    var $form = $('#order-form');
    var scope = this.$el.data('scope');
    function switchForm() {
      var state = $('body').hasClass('admin') ? 'confirm' : 'edit',
          newText = $form.find('h1').data('edit-text');

      $form.attr('state', state);
      $form.find('h1').text(newText);
      $form.data('order-id', id);
      $form.data('scope', scope);

      au.view.OrderForm.load(data, scope);

      AU.openForm(function() {
        $.ajax({
          url: '/admin/orders/' + id + '.json',
          dataType: 'json',
          success: function(data) {
            au.view.OrderForm.load(data, scope);
          }
        });
      });
    }

    if ($form.hasClass('hidden')) {
      switchForm();
    } else if ($form.attr('state') === 'new' || $form.data('order-id') !== id || $form.data('scope') !== scope) {
      AU.closeForm(function() {
        switchForm();
      });
    } else {
      AU.closeForm(function() {
        $('.order-item').removeClass('cur');
      });
    }
  },
  addNote: function(e) {
    e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;

    var x = e.pageX - (e.offsetX || 18) + $(e.target).width()/2 + 2,
        y = e.pageY - (e.offsetY || 12) + $(e.target).height()/2 - 2,
        $order = $(e.target).closest('.order-item'),
        id = $order.attr('id').replace('order-', '');

    au.view.NoteForm.$el.attr('state', 'new');
    au.view.NoteForm.resetForm().pos(x, y).toggle(id);
  },
  hasNote: function(e) {
    e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;

    var x = e.pageX - (e.offsetX || 0) + $(e.target).width()/2,
        y = e.pageY - (e.offsetY || 0) + $(e.target).height()/2,
        $order = $(e.target).closest('.order-item'),
        id = $order.attr('id').replace('order-', ''),
        notes = $(e.target).find('textarea').text();

    au.view.NoteForm.$el.attr('state', 'add');
    au.view.NoteForm.resetForm().load(notes).pos(x, y).toggle(id);
  }
});

AU.View.Drafts = Qor.View.extend({
  events: {
    'change .qor-check-all': 'checkAll',
    'click .record-item': 'check',
    'click .diff a': 'diff',
    'click [type="submit"]': 'comfirm'
  },
  initialize: function() {
    var $modal = $('#diffModal'),
        $content = $modal.find('.modal-content');

    $modal.on('click', function(e) {
      var $target = $(e.target);
      if ($target.hasClass('close') || $target.parents('.modal-content').length === 0) {
        $modal.removeClass('fadeIn').addClass('fadeOut');
        $content.removeClass('slideInDown').addClass('slideOutUp');
        setTimeout(function() {
          $modal.addClass('hidden fadeIn');
          $content.addClass('hidden slideInDown');
        }, 300);
      }
    });
  },
  comfirm: function(e) {
    var notify = $(e.target).data('confirm');
    var r = confirm(notify);
    if (r == false) {
      return false;
    }
  },
  checkAll: function(e) {
    var isChecked = $(e.target).is(':checked');
    this.$('.tbody input[type="checkbox"]').prop('checked', isChecked);
  },
  check: function(e) {
    if ($(e.target)[0].nodeName !== "TD") {
      return;
    }
    var $check = $(e.target).parents('.record-item').find('input[type="checkbox"]'),
        isChecked = $check.prop('checked');

    $check.prop('checked', !isChecked);
  },
  diff: function(e) {
    var remoteURL = $(e.target).data('remote');
    $.ajax({
      url: remoteURL
    }).done(function(html) {
      var $modal = $('#diffModal'),
          $content = $modal.find('.modal-content');

      $content.html(html);
      $modal.removeClass('fadeOut hidden');
      $content.removeClass('slideOutUp hidden');
    });
  }
});

AU.SubView.CheckinOutToday = Qor.SubView.extend({
  events: {
    'change .tomorrow .select-type': 'selectType',
  },
  initialize: function() {
    Backbone.Events.on('subviewOrders:CURD', this.update, this);

    this.refresh();
  },
  update: function() {
    this.refresh();
    this.selectType();
  },
  selectType: function() {
    var $target = this.$('.tomorrow .select-type'),
        value   = $.trim( $target.val() ),
        $table  = this.$('.tbody'),
        $rows   = $table.find('.order-item');

    if ( value === 'all' ) {
      $rows.show();
    } else {
      $rows.each(function(index, row) {
        var inout = $(row).data('inout').replace(/(?:ed)* /gi, '').toLowerCase();
        $(row).toggle(inout === value);
      });
    }
  },
  refresh: function() {
    var self = this,
        date = moment().format('YYYY-MM-DD');

    $.get('/order/stat/'+date).done(function(stat) {
      self.$('.j-order-check-in').text(stat.CheckIns);
      self.$('.j-order-check-out').text(stat.CheckOuts);
      self.$('.j-slot-available').text(stat.Availables);
    });
  }
});

AU.View.Article = Qor.View.extend({
  initialize: function() {
    autosize(this.$('textarea'));
  },
});

;(function($, w) {
  $(function() {
    $('#menu .nav-item a').each(function() {
      var pathname = location.pathname.replace(/\/$/, '');
      if ($(this).attr('href').replace(/\/$/, '') === pathname) {
        $(this).addClass('cur');

        var top = pathname.split('/').reverse()[0];
        $('body').addClass(top);
      }
    });

    // $('.time-select').timeEntry({
    //   show24Hours: true,
    //   timeSteps: [1, 1, 0],
    //   defaultTime: '00:00'
    // });

    $('#new').on('click', function() {
      var $form = $('#order-form');
      if ($form.hasClass('hidden')) {
        $form.attr('state', 'new');
        var newText = $form.find('h1').data('new-text');
        $form.find('h1').text(newText);

        // if($form.attr('state') !== 'new') {
          au.view.OrderForm.resetForm();
        // }
        AU.openForm();
      } else if ($form.attr('state') !== 'new') {
        AU.closeForm(function() {
          $form.attr('state', 'new');
          var newText = $form.find('h1').data('new-text');
          $form.find('h1').text(newText);

          au.view.OrderForm.resetForm();
          AU.openForm();
        });
      } else {
        AU.closeForm();
      }
    });

    $('.form-header .close').on('click', function() {
      AU.closeForm();
    });

    AU.openForm = function(func) {
      $('.form-inner').css('top', $(window).scrollTop()+'px');

      $('.form-wrapper').removeClass('hidden');
      $('.form-inner').stop().animate({
        right: 0
      },
      {
        queue: false,
        duration: 200,
        complete: function() {
          func && func();
        }
      });
    };

    AU.closeForm = function(func) {
      function hideForm () {
        $('.form-inner').stop().animate({
          right: -700
        },
        {
          queue: false,
          duration: 200,
          complete: function() {
            $('.form-wrapper').addClass('hidden');
            func && func();
          }
        });
      }

      if ($('#order-form').hasClass('dirty')) {
        au.view.MaskLayer.init(hideForm).show();
        return
      } else {
        hideForm();
      }
    }

    // mobile
    $('#menu-trigger').on('click', function() {
      $('#menu').toggleClass('invisi open');
    });
    $('#menu').on('click', function() {
      var self = this;
      $(this).removeClass('open');
      setTimeout(function() {
        $(self).addClass('invisi');
      }, 300);
    });

    $('#menu a').on('click', function(e) {
      e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;
    });

    $('.field-wrap [name]').on('focus', function() {
      $(this).parent().addClass('focus');
    }).on('blur', function() {
      $(this).parent().removeClass('focus');
    });

    function drawMonthlyBookingsKPIChart() {
      var elem = document.getElementById('monthly-bookings-chart');
      if (!elem) return;

      $.get('/calendar_monthly_bookings').done(function(resp) {
        var data = {
            labels: ['JAN', 'Feb', 'MAR', 'APR', 'May', 'Jun', 'Jul', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [
                {
                    label: 'This year',
                    fillColor: 'transparent',
                    strokeColor: '#009688',
                    pointColor: '#BFE5E1',
                    pointStrokeColor: '#E6E6E6',
                    pointHighlightFill: '#BFE5E1',
                    pointHighlightStroke: '#009688',
                    data: resp.ThisYear
                },
                {
                    label: 'Last year',
                    fillColor: 'transparent',
                    strokeColor: '#FFC107',
                    pointColor: '#FFF8E1',
                    pointStrokeColor: '#E6E6E6',
                    pointHighlightFill: '#FFF8E1',
                    pointHighlightStroke: '#FFC107',
                    data: resp.LastYear
                }
            ]
        };
        var ctx = elem.getContext("2d");
        new Chart(ctx).Line(data, {
          scaleShowHorizontalLines: true,
          scaleShowVerticalLines: false,
          bezierCurve : false,
          pointDotRadius: 3
        });
      })
    }

    drawMonthlyBookingsKPIChart();

    if ( $('#container.booking-list').length ) {

      function alignThead() {
        var $head = $('.thead .thr-inner'),
            $row = $('.tbody .tr:first');

        $row.find('.td:visible').each(function(index, item) {
          var width = $(item).children('.data').width(),
              name = $(item).attr('name'),
              $th = $head.find('[name="'+name+'"]').addClass('align').children('a');

          $th.width(width);
        });
      }


      var timer  = '',
          $table = $('.table'),
          $thead = $('.thr-inner'),
          theadOffsetTop = $thead.offset().top;

      $(window).on('scroll', function(e) {
        var top = $(this).scrollTop();

        if (theadOffsetTop <= top) {
          $table.addClass('fixed');

          clearTimeout(timer);
          timer = setTimeout(function() {
            alignThead();
          }, 10);

        } else {
          $table.removeClass('fixed');
        }
      });

      $(window).on('resize', function() {
        if ( $table.hasClass('fixed') ) {
          clearTimeout(timer);
          timer = setTimeout(function() {
            alignThead();
          }, 10);
        }
      });
    }

    if ( $('#dashboard').length || $('#container.booking-list').length ) {
      function grabData($table) {
        var matrix = [];
        $table.find('.tbody .order-item:visible:not([state="cancelled"])').each(function(index) {

          matrix[index] = [];

          var row = matrix[index];

          $(this).find('.td').each(function(index) {
            var text = $(this).find('a').text(),
                name = $(this).attr('name');

            if ( ($(this).is(':visible') && name != 'Notes') || name == 'TagNo' ) {
              row.push([text, name]);
            }
          });
        });

        return matrix;
      }

      function grabHead($table) {
        var heads = [];
        $table.find('.th').each(function(index) {

        var text = $(this).find('a').text(),
            name = $(this).attr('name');

          if ( ($(this).is(':visible') && name != 'Notes') || name == 'TagNo' ) {
            heads.push([text, name]);
          }
        });

        return heads;
      }

      function generateTable(heads, matrix) {
        var table = '<table><thead><tr>';

        for (var h = 0; h < heads.length; ++h) {
          table += '<th name="' + heads[h][1] + '">' + heads[h][0] + '</th>';
        }

        table += '</tr></thead><tbody>';

        for (var i = 0; i < matrix.length; ++i) {
          table += '<tr>';

          var row = matrix[i];

          if (row[0][0].length > 5) {
            table = table.replace(/\>$/, ' class="out-of-date">');
          }

          for (var j = 0; j < row.length; ++j) {
            table += '<td name="' + row[j][1] + '">' + row[j][0] + '</td>'
          }

          table += '</tr>';
        }

        table += '</tbody></table>';

        return table;
      }

      function tableCompletion($table) {
        var height = 1122 - $table.outerHeight() % 1122,
            rowsCount = (height / 33 >> 0) - ($table.outerHeight() / 1122 >> 0),
            colsCount = $table.find('th').size(),
            rowx = '<tr class="extra">',
            rows = '';

        for (var j = 0; j < colsCount; ++j) {
          rowx += '<td>&nbsp;</td>';
        }

        rowx += '</tr>';

        for (var i = 0; i < rowsCount; ++i) {
          rows += rowx;
        }

        $table.find('tbody').append(rows);
      }

      function onPrintFinished() {
        $('#print-table').remove();
        $('.hidden-print').removeClass('hidden-print');
      }

      $('.action-print').on('click', function() {
        $('#order-form').addClass('hidden-print');
        $('#header').addClass('hidden-print');
        $('.chart-container').addClass('hidden-print');
        $('.table-item-wrapper').addClass('hidden-print');

        var $current = $(this).parents('.table-item-wrapper, .booking-list');

        $current.removeClass('hidden-print');

        var heads  = grabHead($current),
            matrix = grabData($current),
            table  = generateTable(heads, matrix);

        var $table = $('<div id="print-table">'),
            heading = $current.find('.heading').text();

        if ( $current.hasClass('checkin-out-today') ) {
          var type = $current.find('.tomorrow .select-type').val();

          switch(type) {
            case 'checkin':
                heading = 'Checkins Today';
            break;
            case 'checkout':
                heading = 'Checkouts Today';
            break;
            default:
                heading = 'Checkins & Checkouts Today';
          }
        }

        if ( $current.hasClass('booking-list') ) {
          var type = $current.find('.today .select-type').val();

          switch(type) {
            case 'checkin':
                heading = 'Checkins for ';
            break;
            case 'checkout':
                heading = 'Checkouts for ';
            break;
            default:
                heading = 'All bookings for ';
          }

          var dateText = $('#date-start .date-text').text().toLowerCase();

          if (dateText === "today") {
            dateText = moment().format('DD/MM/YYYY');
          }

          $table.append('<div id="print-logo"></div><h1>' + heading + dateText + '</h1>');

        } else {

          $table.append('<h1>' + heading
            .replace(/Today/i, '<span>' + moment().format('DD/MM/YYYY') + '</span>')
            .replace(/Tomorrow/i, '<span>' + moment().add(1, 'days').format('DD/MM/YYYY') + '</span>')
            .replace(/\)$/, ') <span>' + moment().format('DD/MM/YYYY') + '</span>')
            + '</h1>');
        }

        $table.append(table);
        $current.addClass('hidden-print');

        $('body').append($table);

        tableCompletion($table);

        onPrintFinished(window.print());
      });
    }
  });
})(jQuery, Window, undefined);

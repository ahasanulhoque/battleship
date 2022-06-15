(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"#page-title {\n  size: 24px;\n  color: blue;\n}\n\n#play-area {\n  display: flex;\n  justify-content: space-around;\n  height: 80vh;\n}\n\n.row {\n  display: flex;\n  height: 3rem;\n  width: 30rem;\n}\n\n.space {\n  border: solid thin;\n  background-color: rgba(51, 100, 235, 0.788);\n  width: 10%;\n}\n\n.ship-space,\n.shot-space {\n  display: flex;\n  justify-content: center;\n  font-weight: bolder;\n}\n\n.shot-space {\n  color: white;\n}\n\n.hit-space {\n  color: red;\n}\n\n#information-area {\n  display: flex;\n  justify-content: space-around;\n  border: solid;\n  margin-top: -7rem;\n}\n\n#restart-game-button {\n  text-align: center;\n  height: 2rem;\n}\n\n#game-over-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  top: 30%;\n  left: 45%;\n  border: solid;\n  padding: 1rem;\n  text-align: center;\n}\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=r.base?l[0]+r.base:l[0],u=a[d]||0,s="".concat(d," ").concat(u);a[d]=u+1;var p=n(s),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:s,updater:o(m,r),references:1}),i.push(s)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),l=n.n(c),d=n(216),u=n.n(d),s=n(589),p=n.n(s),m=n(426),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=function(e){const t=document.createElement("h1");t.id="page-title",t.innerHTML="BATTLESHIP";const n=document.createElement("section");n.id="play-area",n.setAttribute("style","pointer-events: none");const r=document.createElement("section");r.id="board-one";const o=document.createElement("section");o.id="board-two";const a=function(e,t){for(let n=0;n<10;n++){const r=document.createElement("div");r.id=`board-${t}-row-${n}`,r.classList.add("row");for(let e=0;e<10;e++){const o=document.createElement("div");o.id=`board-${t}-space-${n}-${e}`,o.classList.add("space"),r.appendChild(o)}e.appendChild(r)}};a(r,1),a(o,2),n.appendChild(r),n.appendChild(o);const i=document.createElement("section");i.id="information-area";const c=document.createElement("section");c.id="human-ships-wrapper";const l=document.createElement("label");l.setAttribute("for","human-ships");const d=document.createElement("select");d.setAttribute("name","human-ships"),d.id="human-ships-select";const u=document.createElement("option");u.setAttribute("value","carrier"),u.innerHTML="Carrier",d.appendChild(u);const s=document.createElement("option");s.setAttribute("value","battleship"),s.innerHTML="Battleship",d.appendChild(s);const p=document.createElement("option");p.setAttribute("value","destroyer"),p.innerHTML="Destroyer",d.appendChild(p);const m=document.createElement("option");m.setAttribute("value","submarine"),m.innerHTML="Submarine",d.appendChild(m);const h=document.createElement("option");h.setAttribute("value","patrol"),h.innerHTML="Patrol Boat",d.appendChild(h);const f=document.createElement("section");f.id="ship-placement-wrapper";const b=document.createElement("label");b.setAttribute("for","x-coord");const v=document.createElement("select");v.setAttribute("name","x-coord"),v.id="x-coord";const y=document.createElement("option");y.setAttribute("value","1"),y.innerHTML="1",v.appendChild(y);const C=document.createElement("option");C.setAttribute("value","2"),C.innerHTML="2",v.appendChild(C);const S=document.createElement("option");S.setAttribute("value","3"),S.innerHTML="3",v.appendChild(S);const A=document.createElement("option");A.setAttribute("value","4"),A.innerHTML="4",v.appendChild(A);const E=document.createElement("option");E.setAttribute("value","5"),E.innerHTML="5",v.appendChild(E);const T=document.createElement("option");T.setAttribute("value","6"),T.innerHTML="6",v.appendChild(T);const M=document.createElement("option");M.setAttribute("value","7"),M.innerHTML="7",v.appendChild(M);const L=document.createElement("option");L.setAttribute("value","8"),L.innerHTML="8",v.appendChild(L);const g=document.createElement("option");g.setAttribute("value","9"),g.innerHTML="9",v.appendChild(g);const H=document.createElement("option");H.setAttribute("value","10"),H.innerHTML="10",v.appendChild(H);const q=document.createElement("label");q.setAttribute("for","y-coord");const k=document.createElement("select");k.setAttribute("name","y-coord"),k.id="y-coord";const x=document.createElement("option");x.setAttribute("value","1"),x.innerHTML="1",k.appendChild(x);const w=document.createElement("option");w.setAttribute("value","2"),w.innerHTML="2",k.appendChild(w);const $=document.createElement("option");$.setAttribute("value","3"),$.innerHTML="3",k.appendChild($);const B=document.createElement("option");B.setAttribute("value","4"),B.innerHTML="4",k.appendChild(B);const P=document.createElement("option");P.setAttribute("value","5"),P.innerHTML="5",k.appendChild(P);const z=document.createElement("option");z.setAttribute("value","6"),z.innerHTML="6",k.appendChild(z);const I=document.createElement("option");I.setAttribute("value","7"),I.innerHTML="7",k.appendChild(I);const j=document.createElement("option");j.setAttribute("value","8"),j.innerHTML="8",k.appendChild(j);const O=document.createElement("option");O.setAttribute("value","9"),O.innerHTML="9",k.appendChild(O);const Z=document.createElement("option");Z.setAttribute("value","10"),Z.innerHTML="10",k.appendChild(Z);const D=document.createElement("label");D.setAttribute("for","orientation");const N=document.createElement("select");N.setAttribute("name","orientation"),N.id="orientation-select";const R=document.createElement("option");R.setAttribute("value","horizontal"),R.innerHTML="Horizontal",N.appendChild(R);const F=document.createElement("option");F.setAttribute("value","vertical"),F.innerHTML="Vertical",N.appendChild(F);const U=document.createElement("button");U.id="place-ship",U.innerHTML="Place Ship",f.appendChild(b),f.appendChild(v),f.appendChild(q),f.appendChild(k),f.appendChild(D),f.appendChild(N),f.appendChild(U),c.appendChild(l),c.appendChild(d),c.appendChild(f);const Y=document.createElement("section");Y.id="start-restart-wrapper";const _=document.createElement("button");_.id="start-game-button",_.setAttribute("disabled",!0),_.innerHTML="Start";const J=document.createElement("button");J.id="restart-game-button",J.innerHTML="Restart",Y.appendChild(_),Y.appendChild(J);const V=document.createElement("section");V.id="ai-ships-wrapper";const X=document.createElement("ul");X.id="ai-list";const G=document.createElement("li");G.id="ai-carrier",G.innerHTML="Carrier",X.appendChild(G);const K=document.createElement("li");K.id="ai-battleship",K.innerHTML="Battleship",X.appendChild(K);const Q=document.createElement("li");Q.id="ai-destroyer",Q.innerHTML="Destroyer",X.appendChild(Q);const W=document.createElement("li");W.id="ai-submarine",W.innerHTML="Submarine",X.appendChild(W);const ee=document.createElement("li");ee.id="ai-patrol",ee.innerHTML="Patrol Boat",X.appendChild(ee),V.appendChild(X),i.appendChild(c),i.appendChild(Y),i.appendChild(V);const te=document.createElement("div");te.id="game-over-modal";const ne=document.createElement("p");ne.id="game-over-text";const re=document.createElement("button");re.id="play-again-button",re.innerHTML="Play again",te.appendChild(ne),te.appendChild(re),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(te)},b=function(e,t){for(let n=0;n<10;n++)for(let r=0;r<10;r++)if(0!=e[n][r]&&!t.querySelector(`#board-1-space-${n}-${r}`).firstChild){const o=document.createElement("p");o.classList.add("ship-space"),"0"===e[n][r].charAt(1)?o.innerHTML="C":"1"===e[n][r].charAt(1)?o.innerHTML="B":"2"===e[n][r].charAt(1)?o.innerHTML="D":"3"===e[n][r].charAt(1)?o.innerHTML="S":"4"===e[n][r].charAt(1)&&(o.innerHTML="P"),t.querySelector(`#board-1-space-${n}-${r}`).appendChild(o)}},v=function(e){e.removeAttribute("style")},y=()=>{const e=[],t=(function(){for(let t=0;t<10;t++)e.push([0,0,0,0,0,0,0,0,0,0])}(),[]),n=[];return{board:e,missedShots:t,allShips:n,placeShip:function(t,r,o,a){if(r<10&&o<10)if("vertical"===a&&r+t.length<10)for(let a=0;a<t.length;a++){if(0!==e[r+a][o]){for(a--;a>=0;)e[r+a][o]=0,a--;break}e[r+a][o]=t.shipHealth[a],a===t.length-1&&n.push(t)}else if("horizontal"===a&&o+t.length<10)for(let a=0;a<t.length;a++){if(0!==e[r][o+a]){for(a--;a>=0;)e[r][o+a]=0,a--;break}e[r][o+a]=t.shipHealth[a],a===t.length-1&&n.push(t)}},receiveAttack:function(r,o){if(0!=e[r][o]&&-1!=e[r][o]){const t=e[r][o].charAt(e[r][o].length-2),a=e[r][o].charAt(e[r][o].length-1);n[t].hit(a),e[r][o]=-1}else 0===e[r][o]&&(t.push([r,o]),e[r][o]="miss")},checkAllSunk:function(){return!!n.every((e=>e.isSunk()))}}},C=(e,t)=>({playerType:e,enemyBoard:t,chooseTarget:function(n,r){if("AI"===e){let e,n;do{e=Math.floor(10*Math.random()),n=Math.floor(10*Math.random())}while("miss"===t[e][n]||-1===t[e][n]);return[e,n]}return"miss"!==t[n][r]&&-1!==t[n][r]&&[n,r]}}),S=(e,t)=>{const n=[];return function(){for(let r=0;r<e;r++)n.push(`${t}${r}`)}(),{length:e,shipCode:t,shipHealth:n,hit:function(e){-1!=n[e]&&(n[e]=-1)},isSunk:function(){return!!n.every((e=>-1===e))}}};!function(){f(document.querySelector("#content"));let e=y(),t=y(),n=C("human",t.board),r=C("AI",e.board),o=document.querySelector("#board-one"),a=document.querySelector("#board-two"),i=document.querySelector("#start-game-button"),c=document.querySelector("#restart-game-button"),l=document.querySelector("#play-again-button"),d=document.querySelector("#place-ship");t.placeShip(S(5,"B0"),0,2,"vertical"),t.placeShip(S(4,"B1"),6,3,"horizontal"),t.placeShip(S(3,"B2"),9,0,"horizontal"),t.placeShip(S(3,"B3"),1,3,"vertical"),t.placeShip(S(2,"B4"),5,7,"vertical");const u=function(){let t,n;var r,o;"carrier"==document.querySelector("#human-ships-select").value?(t=5,n="A0"):"battleship"==document.querySelector("#human-ships-select").value?(t=4,n="A1"):"destroyer"==document.querySelector("#human-ships-select").value?(t=3,n="A2"):"submarine"==document.querySelector("#human-ships-select").value?(t=3,n="A3"):"patrol"==document.querySelector("#human-ships-select").value&&(t=2,n="A4"),e.placeShip(S(t,n),document.querySelector("#y-coord").value-1,document.querySelector("#x-coord").value-1,document.querySelector("#orientation-select").value),e.board[document.querySelector("#y-coord").value-1][document.querySelector("#x-coord").value-1]==n+"0"&&(r=document.querySelector("#human-ships-select"),o=document.querySelector(`option[value=${document.querySelector("#human-ships-select").value}`),r.removeChild(o)),document.querySelector("#human-ships-select").firstChild||i.removeAttribute("disabled")},s=function(i){const c=n.chooseTarget(i.target.id.charAt(14),i.target.id.charAt(16));if(c){t.receiveAttack(c[0],c[1]),function(e,t,n,r){const o=document.createElement("p");o.classList.add("shot-space"),-1===e[t][n]?(o.innerHTML="X",o.classList.add("hit-space")):"miss"===e[t][n]&&(o.innerHTML="O"),r.querySelector(`#board-2-space-${t}-${n}`).appendChild(o)}(t.board,c[0],c[1],a),p();const n=r.chooseTarget();e.receiveAttack(n[0],n[1]),function(e,t,n,r){if(-1===e[t][n])r.querySelector(`#board-1-space-${t}-${n}`).querySelector(".ship-space").classList.add("hit-space");else if("miss"===e[t][n]){const e=document.createElement("p");e.classList.add("shot-space"),e.innerHTML="O",r.querySelector(`#board-1-space-${t}-${n}`).appendChild(e)}}(e.board,n[0],n[1],o),p()}},p=function(){if(e.checkAllSunk()||t.checkAllSunk()){let n;e.checkAllSunk()?n="lose":t.checkAllSunk()&&(n="win"),function(e,t,n){"win"===n?t.innerHTML="You won!":"lose"===n&&(t.innerHTML="You lost"),e.style.display="block"}(document.querySelector("#game-over-modal"),document.querySelector("#game-over-text"),n)}},m=function(){for(;document.querySelector("#content").firstChild;)document.querySelector("#content").removeChild(document.querySelector("#content").firstChild);f(document.querySelector("#content")),o=document.querySelector("#board-one"),a=document.querySelector("#board-two"),i=document.querySelector("#start-game-button"),c=document.querySelector("#restart-game-button"),l=document.querySelector("#play-again-button"),e=y(),t=y(),n=C("human",t.board),r=C("AI",e.board),d=document.querySelector("#place-ship"),t.placeShip(S(5,"B0"),0,2,"vertical"),t.placeShip(S(4,"B1"),6,3,"horizontal"),t.placeShip(S(3,"B2"),9,0,"horizontal"),t.placeShip(S(3,"B3"),1,3,"vertical"),t.placeShip(S(2,"B4"),5,7,"vertical"),d.onclick=()=>{u(),b(e.board,o)},i.onclick=()=>{v(document.querySelector("#play-area"))},a.onclick=e=>{s(e)},c.onclick=()=>{m()},l.onclick=()=>{m()}};d.onclick=()=>{u(),b(e.board,o)},i.onclick=()=>{v(document.querySelector("#play-area"))},a.onclick=e=>{s(e)},c.onclick=()=>{m()},l.onclick=()=>{m()}}()})()})();
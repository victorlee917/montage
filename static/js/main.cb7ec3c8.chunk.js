(this.webpackJsonp2021_silhouette=this.webpackJsonp2021_silhouette||[]).push([[0],{38:function(A,n,e){"use strict";e.r(n);var t,c,o,i,r,a,l,f,x,s,g,h,j,w,b,p,d,u,m,v,O,E,H,y,B,C,M,P,D,z,R,X,Z,I,Q,F,K,N,G,W,T,U,S,k,L,V=e(1),J=e.n(V),q=e(19),Y=e.n(q),_=e(3),$=e(2),AA=e(20),nA=Object($.a)(t||(t=Object(_.a)(["\n",";\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover, \ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus {\n    -webkit-text-fill-color: white;\n    -webkit-box-shadow: 0 0 0px 1000px #000 inset;\n}\n\n::selection {\n   background: rgba(255, 255, 255, 1);\n}\n\n\na{\n    text-decoration:none;\n    color:inherit\n\n}\n\n*{\n    box-sizing:border-box;\n}\n\nbutton {\n    outline: none;\n    border: none;\n}\n\ninput {\n    border: none;\n    outline: none;\n}\n\ntextarea {\n    border:none;\n    outline:none;\n    resize: none;\n    &:focus {\n        border:none;\n        outline:none;\n    }\n}\n\nhtml {\n    margin: 0;\n}\n\nbody{\n    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;\n    font-size: 14px;\n    overflow-x: hidden;\n    display: flex;\n    justify-content: center;\n}\n\n.dD{\n    -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n}\n\n.swipe-container {\n    width: 100%;\n    position: absolute;\n}\n\n.swiper-slide {\n    width: 240px;\n    height: 400px;\n}\n\n\n\n/* width */\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: transparent;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n}\n"])),AA.a),eA=e(26),tA=e(5),cA=e(0),oA=$.c.div(c||(c=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  height: 100%;\n"]))),iA=$.c.div(o||(o=Object(_.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  max-width: 1300px;\n  height: 100%;\n  position: relative;\n  @media screen and (max-width: 1000px) {\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100vw;\n  }\n"]))),rA=function(A){var n=A.children;return Object(cA.jsx)(oA,{children:Object(cA.jsx)(iA,{children:n})})},aA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA6SSURBVHic7dcxjhzGGYTRhg04MaDLOOLNmTqxb2NAJ7AiApSwoljk7sxU9XvAl3dWf58Dr+HTOefzOeeXZz8EAHiMT+ecX885/z/n/Oc4AgBg3tfj/yVHAAAMe2v8HQEAMOxb4+8IAIBB3zP+jgAAGJKMvyMAAAb8yPg7AgCg2M+MvyMAAAq9x/g7AgCgyHuOvyMAAAp8xPg7AgDghX3k+DsCAOAFPWL8HQEA8EIeOf6OAAB4Ac8Yf0cAADzRM8ffEQAAT/AK4+8IAIAHeqXxdwQAwAO84vg7AgDgA73y+DsCAOADNIy/IwAA3lHT+DsCAOAdNI6/IwAAfkLz+DsCAOAHLIy/IwAAAkvj7wgAgO+wOP6OAAD4huXxdwQAwBtuGH9HAAB85abxdwQAwLlz/B0BAFzt5vF3BABwJePvCADgMsbfEQDAZYy/IwCAyxh/RwAAlzH+jgAALmP8HQEAXMb4OwIAuIzxdwQAcBnj7wgA4DLG3xEAwGWMvyMAgMsYf0cAAJcx/o4AAC5j/B0BAFzG+DsCALiM8X9+jgAAHsr4v06OAAAewvi/Xo4AAD6U8X/dHAEAfAjj//o5AgB4V8a/J0cAAO/C+PflCADgpxj/3hwBAPwQ49+fIwCAiPHfyREAwHcx/ns5AgD4JuO/myMAgDcZ//0cAQD8jvG/J0cAAOcc439jjgCAyxn/e3MEAFzK+MsRAHAZ468vOQIALmH89cccAQDjjL/+LEcAwCjjr7/KEQAwxvjre3MEAAz5fJ4/LOrJEQAw4p/nnH+f5w+LenIEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA0hwBACMcAUpzBACMcAQozREAMMIRoDRHAMAIR4DSHAEAIxwBSnMEAIxwBCjNEQAwwhGgNEcAwAhHgNIcAQAjHAFKcwQAjHAEKM0RADDCEaA0RwDACEeA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",lA=$.c.div(i||(i=Object(_.a)(["\n  display: flex;\n"]))),fA=$.c.a(r||(r=Object(_.a)(["\n  width: 28px;\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin-right: 15px;\n  &:hover {\n    transition: 0.5s ease-in-out;\n    border: 1px solid rgba(0, 0, 0, 1);\n  }\n  &:hover img {\n    transition: 0.5s ease-in-out;\n    opacity: 1;\n  }\n"]))),xA=$.c.img(a||(a=Object(_.a)(["\n  height: 14px;\n  opacity: 0.3;\n"]))),sA=function(A){var n=A.channelArray;return Object(cA.jsx)(lA,{children:n.map((function(A,n){return Object(cA.jsx)(fA,{target:"_blank",href:A.url,children:Object(cA.jsx)(xA,{src:A.platform})},n)}))})},gA=$.c.div(l||(l=Object(_.a)(["\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  height: 100vh;\n  width: 440px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 80px 0px 80px 80px;\n  @media screen and (max-width: 1000px) {\n    position: relative;\n    padding: 80px 30px 0px 30px;\n    height: auto;\n    width: 100%;\n  }\n  @media screen and (max-width: 479px) {\n    padding: 80px 20px 0px 20px;\n  }\n"]))),hA=$.c.div(f||(f=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  @media screen and (max-width: 1000px) {\n    margin-bottom: 60px;\n  }\n"]))),jA=$.c.div(x||(x=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  margin-bottom: 20px;\n"]))),wA=$.c.img(s||(s=Object(_.a)(["\n  height: 100%;\n  transform: rotate(180deg);\n"]))),bA=$.c.div(g||(g=Object(_.a)(['\n  font-weight: 800;\n  line-height: 1.5;\n  font-size: 48px;\n  font-family: "Outfit", sans-serif;\n  margin-bottom: 30px;\n']))),pA=$.c.div(h||(h=Object(_.a)(["\n  font-size: 16px;\n  line-height: 2;\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 5px;\n"]))),dA=($.c.a(j||(j=Object(_.a)(["\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.5);\n  &:hover {\n    transition: 0.5s ease-in-out;\n    color: rgba(0, 0, 0, 1);\n  }\n"]))),$.c.div(w||(w=Object(_.a)(["\n  display: flex;\n  justify-content: flex-start;\n"])))),uA=$.c.a(b||(b=Object(_.a)(["\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: 500;\n  font-size: 12px;\n  &:hover {\n    transition: 0.5s ease-in-out;\n    color: rgba(0, 0, 0, 1);\n  }\n"]))),mA=function(A){var n=A.title,e=void 0===n?"Montage.gif":n,t=A.desc,c=A.channelArray,o=A.stage,i=A.history,r=A.author,a=A.authorurl;return Object(cA.jsxs)(gA,{children:[Object(cA.jsxs)(hA,{children:["About"===o?Object(cA.jsx)(jA,{onClick:function(){return i.goBack(1)},children:Object(cA.jsx)(wA,{src:aA})}):null,Object(cA.jsx)(bA,{className:"dD",children:e}),Object(cA.jsx)(pA,{className:"dD",children:t}),Object(cA.jsx)(sA,{channelArray:c})]}),Object(cA.jsx)(dA,{children:Object(cA.jsxs)(uA,{className:"dD",href:a,target:"_blank",children:["\u24d2",r]})})]})},vA=$.c.div(p||(p=Object(_.a)(["\n  background: ",";\n  background-size: 200px;\n  min-width: 100%;\n  min-height: 250px;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 20px;\n  position: relative;\n  box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  &:hover {\n    transition: 0.5s ease-in-out;\n    background-size: 300px;\n  }\n  &:hover .detail {\n    transition: 0.5s ease-in-out;\n    opacity: 1;\n  }\n"])),(function(A){return" rgba(255,255,255,0) url(".concat(A.bannerimg,") no-repeat 110% 150%")})),OA=$.c.div(d||(d=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),EA=$.c.div(u||(u=Object(_.a)(['\n  margin-bottom: 15px;\n  font-family: "Outfit", sans-serif;\n']))),HA=$.c.div(m||(m=Object(_.a)(["\n  font-size: 24px;\n  font-weight: 200;\n  line-height: 1.4;\n"]))),yA=$.c.div(v||(v=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  opacity: 0.5;\n"]))),BA=$.c.div(O||(O=Object(_.a)(["\n  color: rgba(0, 0, 0, 1);\n  margin-right: 5px;\n  font-size: 12px;\n"]))),CA=$.c.img(E||(E=Object(_.a)(["\n  height: 8px;\n"]))),MA=function(A){var n=A.history;return Object(cA.jsxs)(vA,{bannerimg:aA,onClick:function(){return n.push("/about")},children:[Object(cA.jsxs)(OA,{children:[Object(cA.jsx)(EA,{children:"Get My Montage.gif"}),Object(cA.jsxs)(HA,{children:["\uc774\uc57c\uae30\ub97c \ub4e4\ub824\uc8fc\uc2dc\uba74,",Object(cA.jsx)("p",{}),"\ubabd\ud0c0\uc8fc\ub97c \uadf8\ub824\ub4dc\ub824\uc694!"]})]}),Object(cA.jsxs)(yA,{className:"detail",children:[Object(cA.jsx)(BA,{children:"\uc790\uc138\ud788 \ubcf4\uae30"}),Object(cA.jsx)(CA,{src:aA})]})]})},PA=e.p+"static/media/mockup.b1c5e7b2.gif",DA=$.c.div(H||(H=Object(_.a)(["\n  background: ",";\n  background-size: 100%;\n  min-width: 100%;\n  min-height: 300px;\n  margin-bottom: 30px;\n  box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.5);\n  &:hover {\n    transition: 0.5s ease-in-out;\n    background-size: 120%;\n  }\n  &:hover .detail {\n    transition: 0.5s ease-in-out;\n    opacity: 1;\n  }\n"])),(function(A){return" rgba(255,255,255,0) url(".concat(A.montageimg,") no-repeat center center")})),zA=function(){return Object(cA.jsx)(DA,{montageimg:PA})},RA=$.c.div(y||(y=Object(_.a)(["\n  z-index: 1000;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  margin-left: 45%;\n  width: 55%;\n  @media screen and (max-width: 1000px) {\n    margin-left: 0px;\n    width: 100%;\n    margin-top: 50px;\n  }\n"]))),XA=$.c.div(B||(B=Object(_.a)(["\n  padding: 80px 80px 0px 10px;\n  height: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  @media screen and (max-width: 1000px) {\n    width: 100%;\n    padding: 10px 30px 0px 30px;\n  }\n  @media screen and (max-width: 479px) {\n    padding: 10px 20px 0px 20px;\n  }\n"]))),ZA=$.c.div(C||(C=Object(_.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n"]))),IA=$.c.div(M||(M=Object(_.a)(["\n  display: flex;\n  align-items: center;\n"]))),QA=$.c.div(P||(P=Object(_.a)(["\n  width: 10px;\n  height: 10px;\n  background-color: rgba(0, 0, 0, 1);\n  margin-right: 5px;\n"]))),FA=$.c.div(D||(D=Object(_.a)(['\n  font-family: "Outfit", sans-serif;\n  font-size: 16px;\n']))),KA=$.c.div(z||(z=Object(_.a)([""]))),NA=function(A){var n=A.listTitle,e=void 0===n?"Montages":n,t=A.stage,c=A.children,o=A.history;return Object(cA.jsx)(RA,{children:Object(cA.jsxs)(XA,{children:["Home"===t?Object(cA.jsx)(MA,{history:o}):null,"Detail"===t?Object(cA.jsx)(zA,{history:o}):null,Object(cA.jsxs)(ZA,{children:[Object(cA.jsxs)(IA,{children:[Object(cA.jsx)(QA,{}),Object(cA.jsx)(FA,{className:"dD",children:e})]}),Object(cA.jsx)(KA,{})]}),c]})})},GA=$.c.div(R||(R=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-height: 232px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  overflow: hidden;\n  cursor: ",";\n  &:hover {\n    border-color: ",";\n  }\n  &:hover .tagChips {\n    transition: 0.5s ease-in-out;\n    opacity: 1;\n  }\n"])),(function(A){return"Home"===A.stage?"pointer":"default"}),(function(A){return A.categoryColor})),WA=$.c.div(X||(X=Object(_.a)(['\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px;\n  font-family: "Outfit", sans-serif;\n  font-size: 12px;\n  background-color: ',";\n  color: ",";\n"])),(function(A){return A.categoryColor}),(function(A){return A.textColor})),TA=$.c.div(Z||(Z=Object(_.a)(["\n  opacity: 1;\n"]))),UA=$.c.div(I||(I=Object(_.a)(["\n  opacity: 0.5;\n"]))),SA=$.c.div(Q||(Q=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  height: auto;\n  flex-direction: column;\n  /* @media screen and (max-width: 550px) {\n    flex-direction: column;\n  } */\n"]))),kA=$.c.div(F||(F=Object(_.a)(["\n  width: 100%;\n  min-height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  background-size: cover;\n  @media screen and (max-width: 550px) {\n    width: 100%;\n  }\n"])),(function(A){return" rgba(0,0,0,0.2) url(".concat(A.img,") no-repeat center center")})),LA=$.c.div(K||(K=Object(_.a)(["\n  width: 100%;\n  min-height: 120px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 20px 20px 10px;\n  /* @media screen and (max-width: 550px) {\n    width: 100%;\n  } */\n"]))),VA=$.c.div(N||(N=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),JA=$.c.div(G||(G=Object(_.a)(["\n  font-size: 20px;\n  font-family: ",";\n  margin-bottom: 12px;\n  font-weight: ",";\n"])),(function(A){return"Home"===A.stage?'"Outfit", sans-serif':"default"}),(function(A){return"Home"===A.stage?"default":"800"})),qA=$.c.div(W||(W=Object(_.a)(["\n  margin-bottom: 12px;\n  line-height: 1.5;\n"]))),YA=$.c.div(T||(T=Object(_.a)(["\n  font-weight: 200;\n  line-height: 1.5;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 30px;\n"]))),_A=$.c.div(U||(U=Object(_.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),$A=$.c.div(S||(S=Object(_.a)(["\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n  background-color: ",";\n  opacity: 0.5;\n"])),(function(A){return A.themeColor})),An=$.c.span(k||(k=Object(_.a)(["\n  color: ",";\n  opacity: 1;\n  font-weight: 200;\n  font-size: 10px;\n"])),(function(A){return A.textColor})),nn=function(A){var n=A.stage,e=A.themeColor,t=void 0===e?"black":e,c=A.category,o=A.categoryColor,i=void 0===o?"black":o,r=A.leftText,a=A.textColor,l=void 0===a?"white":a,f=A.title,x=A.subTitle,s=A.desc,g=A.img,h=A.func,j=void 0===h?null:h;return Object(cA.jsxs)(GA,{className:"dD",categoryColor:i,stage:n,onClick:function(){return j?j(f):null},children:[Object(cA.jsxs)(WA,{categoryColor:i,textColor:l,children:[Object(cA.jsx)(TA,{children:r}),Object(cA.jsx)(UA,{children:c})]}),Object(cA.jsxs)(SA,{children:[Object(cA.jsx)(kA,{img:g}),Object(cA.jsxs)(LA,{children:[Object(cA.jsxs)(VA,{children:[Object(cA.jsx)(JA,{stage:n,children:f}),Object(cA.jsx)(qA,{children:x}),Object(cA.jsx)(YA,{children:s})]}),Object(cA.jsx)(_A,{children:"About"===n?null:Object(cA.jsxs)(cA.Fragment,{children:[Object(cA.jsx)($A,{themeColor:t,className:"tagChips",children:Object(cA.jsx)(An,{textColor:l,children:"#\uae30\ud68d\uc790"})}),Object(cA.jsx)($A,{themeColor:t,className:"tagChips",children:Object(cA.jsx)(An,{textColor:l,children:"#\uae00\uc4f0\uae30"})}),Object(cA.jsx)($A,{themeColor:t,className:"tagChips",children:Object(cA.jsx)(An,{textColor:l,children:"#\uc0ac\uc774\ub4dc\ud5c8\uc2ac\ub7ec"})})]})})]})]})]})},en=e.p+"static/media/instagram.9836f120.png",tn=e(10),cn=function(A){var n=A.history;Object(V.useEffect)((function(){window.scrollTo(0,0)}),[]);return Object(cA.jsxs)(rA,{children:[Object(cA.jsxs)(tn.a,{children:[Object(cA.jsx)("title",{children:"Montage.gif"}),Object(cA.jsx)("meta",{property:"og:title",content:"Montage.gif"}),Object(cA.jsx)("meta",{property:"og:description",content:"\ubabd\ud0c0\uc8fc\ub97c \uadf8\ub9ac\ub294 \ub9e4\uac70\uc9c4"}),Object(cA.jsx)("meta",{property:"og:image",content:"https://victorlee917.github.io/montage/ogimg.png"})]}),Object(cA.jsx)(mA,{stage:"Home",desc:Object(cA.jsxs)(cA.Fragment,{children:["\uc804\uccb4\ub294 \ubd80\ubd84\uc758 \ud569\ubcf4\ub2e4 \ud06c\ub2e4.",Object(cA.jsx)("p",{}),"\ubabd\ud0c0\uc8fc\ub97c \uadf8\ub9ac\ub294 \ub9e4\uac70\uc9c4",Object(cA.jsx)("p",{}),"-"]}),channelArray:[{url:"https://www.instagram.com/montage.gif/",platform:en}],author:"junwoolee",authorurl:"https://junwoolee.me"}),Object(cA.jsx)(NA,{stage:"Home",history:n,children:Object(cA.jsx)(nn,{stage:"Home",themeColor:"darkred",textColor:"white",leftText:"#1.",category:"People",title:"Bogus",subTitle:"\uc0ac\uc774\ub4dc \ud504\ub85c\uc81d\ud2b8\ub97c \uc0ac\ub791\ud558\ub294 \uae30\ud68d\uc790",func:function(A){n.push("/".concat(A))}})})]})},on=$.c.a(L||(L=Object(_.a)(["\n  cursor: pointer;\n  text-decoration: underline;\n  &:hover {\n    color: ",";\n  }\n"])),(function(A){return A.themeColor})),rn=function(A){var n=A.url,e=A.text,t=A.themeColor,c=void 0===t?"rgba(0,0,0,1)":t;return Object(cA.jsx)(on,{target:"_blank",href:n,themeColor:c,children:e})},an=function(A){var n=A.history;return Object(V.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(cA.jsxs)(rA,{children:[Object(cA.jsxs)(tn.a,{children:[Object(cA.jsx)("title",{children:"Get My Montage.gif"}),Object(cA.jsx)("meta",{property:"og:title",content:"Get My Montage.gif"}),Object(cA.jsx)("meta",{property:"og:description",content:"\ub098\ub9cc\uc758 \ubabd\ud0c0\uc8fc \ud398\uc774\uc9c0\ub97c \uac00\uc838\ubcf4\uc138\uc694."})]}),Object(cA.jsx)(mA,{history:n,stage:"About",title:"Get My Montage.gif",channelArray:[{url:"https://www.instagram.com/montage.gif/",platform:en}],desc:Object(cA.jsxs)(cA.Fragment,{children:["\uc18c\uac1c\ud574\ub4dc\ub9ac\ub294 \uc2a4\ud15d\uc5d0 \ub530\ub77c \uc800\ud76c\uc5d0\uac8c \uc774\uc57c\uae30\ub97c \ub4e4\ub824\uc8fc\uc2dc\uba74,",Object(cA.jsx)("p",{}),"\ub098\ub97c \ub3cc\uc544\ubcf4\uace0 \uc18c\uac1c\ud560 \uc218 \uc788\ub294 \uba4b\uc9c4 \ubabd\ud0c0\uc8fc\ub97c \uadf8\ub824\ub4dc\ub824\uc694!",Object(cA.jsx)("p",{}),"-"]}),author:"Montage.gif",authorurl:"http://localhost:3000/#/"}),Object(cA.jsxs)(NA,{listTitle:"Steps",stage:"About",children:[Object(cA.jsx)(nn,{stage:"About",textColor:"white",leftText:"Step 1.",title:"\uc81c\uc791 \uac00\ub2a5 \uc5ec\ubd80 \ud655\uc778\ud558\uae30",subTitle:"\uc800\ud76c\uc5d0\uac8c \uba3c\uc800 \ubb38\uc758\uc8fc\uc138\uc694!",desc:Object(cA.jsxs)(cA.Fragment,{children:["\ubabd\ud0c0\uc8fc \uc81c\uc791\uc774 \uac00\ub2a5\ud560\uc9c0 \ubabd\ud0c0\uc8fc \uc778\uc2a4\ud0c0\uadf8\ub7a8 \ucc44\ub110(",Object(cA.jsx)(rn,{url:"https://www.instagram.com/montage.gif/",text:"@montage.gif"}),")\uc744 \ud1b5\ud574 \uba3c\uc800 \ud655\uc778\ud574\uc8fc\uc138\uc694. \uc778\uc2a4\ud0c0\uadf8\ub7a8 \uacc4\uc815\uc774 \uc5c6\uc73c\uc2dc\ub2e4\uba74 victorlee917@gmail.com\ub85c \uba54\uc77c \ubb38\uc758 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4. \ud611\uc758\ub97c \ud1b5\ud574 \uc9c4\ud589\uc774 \uac00\ub2a5\ud55c \uacbd\uc6b0 \uc544\ub798\uc758 \uc2a4\ud15d\uc5d0 \ub530\ub77c \uc9c4\ud589\ub429\ub2c8\ub2e4."]}),category:"1/6"}),Object(cA.jsx)(nn,{stage:"About",textColor:"white",leftText:"Step 2.",title:"\ud37c\uc2a4\ub110 \uceec\ub7ec \uc815\ud558\uae30",subTitle:"\ub0b4\uac00 \uc88b\uc544\ud558\ub294 \uc0c9\uc0c1\uc744 \uc815\ud574\ubcf4\uc138\uc694!",desc:"\uc88b\uc544\ud558\ub294 \uc0c9\uc0c1 \ud639\uc740 \uc790\uc2e0\uacfc \uc5b4\uc6b8\ub9ac\ub294 \uc0c9\uc0c1\uc774 \uc788\ub2e4\uba74 \ud558\ub098 \uc815\ud574\uc8fc\uc138\uc694. \ubabd\ud0c0\uc8fc\uc758 \ubc30\uacbd \uc0c9\uc0c1\uc774 \ub41c\ub2f5\ub2c8\ub2e4.",category:"2/6"}),Object(cA.jsx)(nn,{stage:"About",textColor:"white",leftText:"Step 3.",title:"\ub300\ud45c \uc0ac\uc9c4 \uc815\ud558\uae30",subTitle:"\ub098\ub97c \ub300\ud45c\ud558\ub294 \uc0ac\uc9c4\uc744 \uc815\ud574\ubcf4\uc138\uc694!",desc:"\ub098\ub97c \uc798 \ud45c\ud604\ud560 \uc218 \uc788\ub294 \uc0ac\uc9c4\uc744 \uace8\ub77c\uc8fc\uc138\uc694. \ub300\ud45c \uc0ac\uc9c4\uc5d0\uc11c \ubabd\ud0c0\uc8fc\uc758 \uc2e4\ub8e8\uc5e3\uc744 \uc7a1\uc73c\ub2c8 \uc790\uc2e0\uc758 \ubaa8\uc2b5\uc774 \uc798 \ub4dc\ub7ec\ub09c \uc815\uba74 \uc0ac\uc9c4\uc744 \ucd94\ucc9c\ud574\uc694.",category:"3/6"}),Object(cA.jsx)(nn,{stage:"About",textColor:"white",leftText:"Step 4.",title:"\ub0b4\uc6a9 \uc0ac\uc9c4 \uc815\ud558\uae30",subTitle:"\ub098\ub97c \ud45c\ud604\ud574\uc8fc\ub294 \uc0ac\uc9c4\ub4e4\uc744 \uc815\ud574\ubcf4\uc138\uc694!",desc:"\ub300\ud45c \uc0ac\uc9c4\uc5d0 \uc774\uc5b4 \ub098\ub97c \uc798 \ud45c\ud604\ud560 \uc218 \uc788\ub294 \ub0b4\uc6a9 \uc0ac\uc9c4\ub4e4\uc744 \uace8\ub77c\uc8fc\uc138\uc694. \ub098\uc5d0\uac8c \uc911\uc694\ud55c \uc758\ubbf8\uac00 \uc788\ub294 \uc0ac\uc9c4\uc774\ub77c\uba74 \ubb34\uc5c7\uc774\ub4e0 \uc88b\uc544\uc694. \uace8\ub77c\uc8fc\uc2e0 \uc0ac\uc9c4\ub4e4\uc774 \ubc30\uacbd\uacfc \uc2e4\ub8e8\uc5e3 \uc548\uc5d0\uc11c \uc21c\ucc28\uc801\uc73c\ub85c \ubcc0\uacbd\ub420 \uac70\uc608\uc694.",category:"4/6"}),Object(cA.jsx)(nn,{stage:"About",textColor:"white",leftText:"Step 5.",title:"\uc0ac\uc9c4\ubcc4\ub85c \ucf54\uba58\ud2b8 \ub0a8\uae30\uae30",subTitle:"\uc5b4\ub5a4 \uc810\uc5d0\uc11c \ub098\uc5d0\uac8c \uc911\uc694\ud55c \uc758\ubbf8\uac00 \uc788\ub294\uc9c0 \ub0a8\uaca8\ubd10\uc694!",desc:"\ub300\ud45c \uc774\ubbf8\uc9c0\ub97c \ud3ec\ud568\ud558\uc5ec \uac01 \uc0ac\uc9c4\ub4e4\uc774 \ub0b4\uac8c \uc65c \uc911\uc694\ud55c \uc758\ubbf8\uac00 \uc788\ub294\uc9c0 \uae30\ub85d\ud574\ubd10\uc694. \uae38\uac8c \uc4f8 \ud544\uc694\ub294 \uc5c6\uc5b4\uc694! \uc0ac\uc9c4 \uad00\ub828 \uc81c\ubaa9, \ubd80\uc81c\ubaa9, \uac04\ub2e8\ud55c \uc124\uba85, \ud574\uc2dc\ud0dc\uadf8 \ub4f1\uc744 \ubd99\uc5ec\uc8fc\uc2dc\uba74 \ud070 \ub3c4\uc6c0\uc774 \ub3fc\uc694.",category:"5/6"}),Object(cA.jsx)(nn,{stage:"About",textColor:"white",leftText:"Step 6.",title:"Montage.gif\uc5d0 \uc804\ub2ec\ud558\uae30",subTitle:"\uc5b4\ub290 \uc815\ub3c4 \uc815\ub9ac\uac00 \ub418\uba74 \uc800\ud76c\uc5d0\uac8c \uc804\ub2ec\ud574\uc8fc\uc138\uc694!",desc:"\uc704\uc758 \ub0b4\uc6a9\uc5d0 \ub300\ud574 \uc5b4\ub290 \uc815\ub3c4 \uc815\ub9ac\uac00 \ub418\uba74 \uba54\uc77c \uc8fc\uc18c victorlee917@gmail.com\uc73c\ub85c \uc815\ub9ac\ub41c \ub0b4\uc6a9\uc744 \ubcf4\ub0b4\uc8fc\uc138\uc694. \ub0b4\ubd80 \ud655\uc778 \ud6c4 \ud68c\uc2e0\ub4dc\ub9bd\ub2c8\ub2e4.",category:"6/6"}),Object(cA.jsx)(nn,{stage:"About",textColor:"white",leftText:"Goal!",title:"Montage \uc644\uc131\ud83c\udf89",subTitle:"\ubabd\ud0c0\uc8fc\uac00 \ub2e4 \ub9cc\ub4e4\uc5b4\uc9c0\uba74 \ub9d0\uc500\ub4dc\ub824\uc694!",desc:"\uac00\uae4c\uc6b4 \uc0ac\ub78c\ub4e4 \uadf8\ub9ac\uace0 \uc55e\uc73c\ub85c \uce5c\ud574\uc9c8 \uc0ac\ub78c\ub4e4\uc5d0\uac8c \ub098\uc758 Montage.gif\ub97c \uacf5\uc720\ud574\ubcf4\uc138\uc694."})]})]})},ln=e.p+"static/media/mockup1.20d96c88.jpeg",fn=e.p+"static/media/mockup2.48903dbf.jpeg",xn=function(A){var n=A.history;return Object(V.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(cA.jsxs)(rA,{children:[Object(cA.jsxs)(tn.a,{children:[Object(cA.jsx)("title",{children:"Shinji.gif"}),Object(cA.jsx)("meta",{property:"og:title",content:"Shinji.gif"}),Object(cA.jsx)("meta",{property:"og:description",content:"\uc0ac\uc774\ub4dc \ud504\ub85c\uc81d\ud2b8\ub97c \uc0ac\ub791\ud558\ub294 \uae30\ud68d\uc790"})]}),Object(cA.jsx)(mA,{stage:"Detail",title:"Shinji.gif",desc:Object(cA.jsxs)(cA.Fragment,{children:["Shinji Ikari.",Object(cA.jsx)("p",{}),"-"]}),channelArray:[{url:"https://www.instagram.com/jwluoe/",platform:en},{url:"https://junwoolee.me",platform:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABmPAAAZjwFYKXXPAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAt9QTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf32oYwAAAPR0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc5Ojs8PT4/QEFCQ0RFRkdISkxNTk9QUVJTVFVXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1d3h5ent8fn+AgYKDhIWGh4iJi4yNjo+QkZKTlJWWl5iZmpudnp+goaOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru9vr/AwcLDxMXGx8jJysvNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/nQWgroAABeUSURBVHja7d37Q1ZVugfw9YICpQwiymgBGuaVbNLROnnFGzZYWTlHZcxm1I6Ok5kpIVbOqDNWShdLdFCThlBMPGFjY40XHGtMqUHFyylQMUwUUK4v6w84ZvJDMyq4bns/a3+/f4A86/ks33e9e6+9NmOIgbQbOH7KrPmLX0vPzN35WWHxueLCz3bmZqa/tnj+rCnjB7ZDg6xNaP8JC9ftLeM3T9nedQsn9A9Fu2xK2zHJa3eV8ltJ6a61yWPaonX0E574p/31XCwN+5ePC0cL6Sby8bSDjVwujYdef6ITWkkvEZPeKeSqciQ9qQNaSihtJm6r42pT/2ESVoY0EpSYeYnryOWsR4LRXpcnIH71ea4v5WtGBaLJ7s2AV09x3Tmz8gE02pUJefowN5OiWbeh3a77vZ9ylptLWWoEWu6mRL1ayc3m0souaLtbEpdRx82nfsO9aL0bMiS3kTuUvOFov8PxPbKXO5n9j/mA4GD67eFO5x8DweBUIt72c+fTmN4RFE4kcOZ33B0pn43Lg+Yz+AvunhwaChCzueNd7q5svBMo5hI0v5K7LZXzgwBjKGOPcDfm6FjQmEjIm9yteTMEPNrT6wvu3hzsDSDNebKKuzmXngKRzoRu4G5P5k/ApC0/L+Luz3FcG9aVObWcQurm4QaRjkTkcirJiwSX8gwr4XRyZhTAFGd6A6cU/2yQKU0qp5YlQFOXgLc4vazBPWJVCc7mFLMVTw+oSdgnnGb2tAeegnQ+yKnmqyjwSafHSU43xX0AKJmB33LK+e5BEEoloYrTzuVEIEpkch2nnoYkMApnqp/TTwM+Azztf+VbYBAovezP+fk4YHrZn/OSGHB62Z/zQhwo4ml/zve1AamX/TnPaw1UL/tzvh4bBT3tz/krcPW0P+fzIOtpf+6Ph21L8qSl/pyfxm5xT/tz/hEWgp725zwZwC7xv1Swe3t2xhvLFj63cNkbGdnbdxdcMvFn63FfyGn/2sIPlk+Pj/rPz2JfVPz05R8Uan788BvsE3XQv2J7ypDm3vkRPOSFvAqNNWyFsjP+F3KeHdDSJzUC+8/ZpO29I8/C2bz/pb88fKtHeLXW9eahOhwfYNi/btsksVeAtpmYq2NL4okwWBv0/3KGzK349jO+VF9SFrCN+e9OlL304kvcrbyqX4D7PzJFg39jrppf3YNUv5HiOI4TNOBfv07dVsy4dfVKa0uFuHb/v/ZSWmGvj1QWd/kumOv1P/mo8iIfPq6wvg+ArtP/cqqOL9ngFIXPKT4Edn3+7+vahR+VqazGY3gNtS7/c+M0FjtW2cPqCyGvx/9TvYdydP5Y1dcUXjyqw9//ku6juQJSFB1YmAN89f6nTLzJc9DXaorF+0WU+2/rYKTq8Bwl1RYGeN7/V2r9/2hsy+ViJfU+Bn+lV/7nGCx9lorSP4e/yr1+vzRa/BM1CmoeA3912/1GGi4//qJ80Z/AX1VK+xkfwH1n5Mv+L/gr2mUV68AQYuXvDuXCX829P2euqsVKfwY09oU/Xf8r3wLS64CN8Cfsz9hw2d8CDd3gT9ifscdkh/I2/Cn7M/a0ZPk1neFP2Z+xFyUHsNRr/kl2+TO2VW4EJQHwJ+3P2n8jN4Z4+JP2Z2yQ3DMDa+BP25+xBVKjuBACf9r+zLddahyPw5+2P2MdT2NzoJf9GRsltZMhHP7E/RmTemJkOvyp+7M7KmUeZYA/dX/G5sncFI6BP3V/1uorifEssN5/su3+jA2XGFAB/Mn7M7ZRYkjd4X8L+/9c+lTlnTX4HWDE37UrprexM8zT/qyb+GPDp+FP31/qalAP+NP3Z/dhEeBpf8bysAjwtD8bikWAp/0ZyxceXE/4W+DPpgmPbgb8LfBn7YQvBmXa5z/Je/6MbRYd3xn42+DPxmMR0OTf4EV/FlwuOsQn4W+BP2PpeETM0/5smOggN8HfBn/mO4tNIV72ZyxLcJjVAfC3wZ/NFB1oF/jb4M/6iI50tCX+E5X6H6e3Y1p0ETDLDv/4eo/7Cy8CVlrhH3tOqX80wRaILgLybPBvW+B5f+FFwHEL/H1b4M9YhdhwG4LoT4Bn4H8lnwsOuDd5/9Ay+DPxzcHjyE+AVPh/n5cFhzyVun/ERfh/n8mCY55NfQIsh//VPCA46GTi/kEV8L+acMFRLyE+AUbD/1oEL4alEZ8AafCX+x24lviwT8D/Wj4RG3gW7VHHwb8puWIj/5D2qKfDX/JK0C7ao14E/6asFhv7AdqjXgX/prwiNvgi2qPOgX9TXvLk02H58v7H7PAXPTW0kvaoj8C/KbMENwR4/BPAGn+PfgLIrgGORdni79E1wCr4e/tXwCL4e/s6wDT4S14J/DvtUfeGf1O8eS+AHYP/tXjzbiBbAf9r8eh+gJHwvxaP7ghqfRH+VyO6J/AP1Ae+zF3+jp244dVdwSy83B3+HZLSsnYVVTaWFexYv3S0+Sfukrz6XAB7wQX+fZP3/PiEyorsKR3NtmGxV58MYm1KnfYfse96f6Y+3eh9pvcEJ0Ai/eXPTGf9799xo79UsyLSXBf+KTgBetGfAL4sB/073fSg5qrUQFNNEHyNsA3nA7DbDzjmP6Ckmb+3vZ2ZHtwjej3Eit/AMS0+I6tIrf/k6mb/4lEzJzD8VnACfGjFBGCDa53wD2zRk8kXjSyzsgUnwApLroMltOhqQH4nlX+z1fst67HfwAzwfSs4AWbaciW0x+HmB5sR7IT/lc8A/d8CoksAPsqWCcDCmnt9XsNc5oz/lXWA9pWg6BKAx1gzAVjAkpsuBIoTHPO/8ltA969B0SXAZR+zKF0zbvjGoLK5IQ76c56qefKLnpR2iNmVPpuuO8yKRaHMUX9epfea4AjRb4BsZlviUvb928dA5aap7ZnD/rp/bq0RnQBLmIWJnJqZf/LqFZrywp1pY9Rf6xTw5zU67wyFXBCdAFOYtWnXs0uwnn9ZxJ/zdI1jfVx4Z2x3hpjx5/Ua9wcIPyB3Cpym/HV+2obXik6Ad+FpzF/jglv88ahpADXmzyu03XnfhyUAAX99L+gSfm0oL4GoQX9t7+ndLlzRBpAa9Ofr9VTVT7yi38DUoD/foaesLPGK7gaqQX9NL2ru7scSgIY/L9NSVzrHEoCGP2/U8dxgdC2WAET89RzIJlNXN7ia9NdyHpfMC1MOwtWov46D2YMOS9TzPGCN+us4jWeBRDn+KMga9ddwGEt0lUQ5f4OsWX+epLy0bJlyfg1as/7+DqpLe0imnJow2Br153tUl9bprEw52bA166/8NKaAj6XKeRS4Zv15X8W1yb01/XwQdM3671Nc27AGqXJWu6vTcdMXrcrJP5Kfs2rRtN5W+vMRamvreEqunKHuwQ8anfbj978eWzGytXX+ijcD+PLkyvnaNQ+FRiy/3vvfLy4Lt8uf36+2uKWS5fzeJfyhqTc66rf8hTY2+W9WW9xsyXKqf+oKft8zN3uquXSmzxr/EqVn07AJfsl63nKFf9stzd09ud0S/+oBSosbUStZT8NdbvCPLWi20AMxVvjzyUqL61chW48r9oLFt+QFB2cH2+C/XO1/nFLZehr7usB/Yn2Laq1NoO//vtIDgrqckC4o1wX+k1p6Hau8B3n/Vkr9T8pX9CAhf84Ph8Ffrf+npPw5zwuAv0p/PpaWv+GDjOz3P0DNn9d2hb86fz6Bmj/nGfBX538kkJw/9/eBvyp//hA9f843wV+V/xaK/pzHwV+N/+UuJP15CvzVVJVC01/5hjqv+h8NpunP/ZHwV5EEov76X3DqDf9ssv48E/7yqYom68/z4S+fBXT9+Un4S6cwiK4/r4a/dEYR9uc8DP6S+TNpf94T/pJfAG1I+/OuXvSPOaGssMt9afvzEPhLZRpx/3L4SyWTuD8vhL9MikKJ+/Od8JdITX/q/hrO2POQP59N3p+Pgb94NtP3rwyCv3D+rx15fw2bAr3jX/cAfX/12wG8489nWOBf0R7+onnRAn++CP6ieccG/7JQ+AsmJ9ACfz4X/oLZFWKDf3EI/MXyZTsb/BsS4C+Wb+60wV/xF4CH/L/rbYV/BvwFt4A8aIV/fjD8xb45E63wL+rkHf/jSv0n2+Ef5Rn/aLX+k+APf/jDH/7whz/84Q9/+MMf/vCHP/zhD3/4wx/+8Ic//OEPf/jDH/7whz/84Q9/+Bv0PwZ/+MPfq/5R8Ic//OEPf/jDH/7whz/84Q9/+MMf/vCHP/zhD3/4wx/+8Ic//OEPf/jDH/7wp+1fZIX/ZPiLpZMd/onwF0twvhX+gy7DXywZVvjHnYe/WOZa4R9dDH+xJDTY4N/+X/AXS0ixDf6374W/C74AHPNvtQ3+ggkts8Cf/Rn+ollkg/9S+AuvnSos8P8d/IUz1QL/IQ3wF84m+v4RxfAXTlAleX/fNviLZwx5f6U/Yz3nz9LI+w+sg79EdlL3DzsBf5kUEvdnWfCXSjlx/6fhL3cjiLj/vdXwl0pX2v5tCuEvl56k/RXeAvKoPwsj7T8K/tKpJuwfVAh/6Zyk688WwF8++XT9o6vgL59Msv4sG/4KMpWsfwL8VSTST9Q/+Cj8lWQfTX+WAn9HG+m0f5fL8FeTOJL+bAv8VWUTRf+H4K8sffz0/AOPwF9dMsj5swnwV5iutdT82QH4q8wSav5j4a80AXm0/Nmn8FebsMOk/B+Ev+r0KCfkz3KlW3xMqX8geX/GElq2EKyf6AL/vo2yLS6NVVrQcvr+jA0+24LazsW7wJ9tkG1xRT+l9Uy2wZ+xmOZ/WhXEusH/LtlnwWtHKK1nQLUV/ozd3twzNlvausGfvSXZYv8EpeV0KrHEnzHfzNKblFb2jM8V/j+V/Q83W209m63xv5I2L9zo18DF1FDmjvxessdL1ZZzv03+VxK+7OL1Vk3LI1zCz3xfy/U4T/Hn2A67/K+k9cgVP35zwIm00UHMNRkq1+NTHdWWM8I6/6vpPW3Rqpz8I/k5qxZNj2OuymqpHjcMU1zOPiv9XZwguQPBU1Vfk4K/4Twq1eSPAxSXkwx/w5F6GORsJ9Xl7IG/2YTVyHT5IdXldPDD32x+LdPlbOXlJMHfcP4m0eWqaOXlpMHfbKJkPnIXqK8nC/5m87xEmw9ruJq1C/5mc1Ciz6M11FMEf6PpJtNnHQVVwt9ofiOxCSRaQz0BjfA3Gom9YOlaCiqDv9GI773xd9dSUAH8TeZu8U5n6aloB/yJLAH66aloPfxpLAG2a6poKfxpLAGGaapoNPwNprtwr/fpKimoAv7mMk242dO01ZQNf3N5V/giULi2mqbA31xOiU6AHH01dayHv/uXAI9prCrdTf4hXXuG2TsBRD9t+YUQjVVF17jCP2hM2s7Cq091VZ/Mz5waaeMEWCI6AdZoLWuF8/7tp276t9uS/n0pcdZNAOEF9witZUVWOewfuuj6v0U39bFsAhwS9C8L0FtXqqP+IXNveEfSn9HVJn+f6OHQ2ZoLC9zuoH9C8U1//y4JsGcCxIh+A/xWd2XtjjrmP7e5w1Ly7PlVIPyGuHu0l9b7ojP+wS044/dwD1smwExB/28NnGuS6HfCv1OL3vdVnmDJBFjh0iXADzOgRZ8BywNV/s2oFm5Jrh1sxwT40K1LgB++BZpfB1RPZk74c342xooJcMy1S4AfVoLN/RYoGaDW/xb6ceB2C/yDBA8HrDR1tFlg6k2vCG3u5Jg/51k++hOgl+AHwD/NlRi54ob3BXbczxz053wm/QmQKDgB3jNZZHT6de8O71N9MfpW/XlpG/ITQPQFp4vNltlxSvaPr8z79yT3ZU77c/4C+QkwW3ACJJlfrYxeun5HQVljZdGurLSkDur/gIA/Lw+nPgGSBSfAA04VrO0qfJTQ76Fl1CfAHwQnAPmZr8afX2hNfNyCh7Gcg/+1xBMf+FqxYX8O/6br0MRHLngazyfwv5ZC4kMXvBWQC/+mxNIe+9/FRp0J/6b8ivbgBd8Vuxr+TVlAe/SC53G9Av+mpNEe/hmxUb8Ef6M7Y/RF8EC2ebb4R8v68720GyC4HWAW/JtyBJ8Anvan/gng6TVA9HF5f+prAC//ClDiz1/HdQBP+/Nk2l0QPJg9E/5NmUK7DZ69F6DKn99Nuw9evRuozJ/4r0Cv7gdQ5s9fJd4Jb+4IUufPRxKfAKInBIXD/2oqgohPAHK7gt3lT35HmPBzAZPh/30uRlCfAKJPBr0M/++TSt2fjRMceSb8r6QslPwE6M299TtQqT9/hv4FUdHzASrgz/kWC84HYKId6QP/grYW+LM8wdHP9Lz/uVgb/NlKweFn0RtqjFL/+ngr/NkswfGf9bh/w0Q7/MVf0EVtERBzQqn/JEv8WRfujUUA/G+QgGpPLALgf8OIvqj5rA/+VmSTaBuGwd+KCL+nNx3+VuRJ0UaUB8PfhvQUbsV4+FuRM6K92Ax/K5Ip2oyadvC3ITOE2zEN/t5eBOTD34qcFu7IUPjbkI3CLcmDvw2ZLt6U++BvQXqIdyUT/t5eBDR0g7+nFwH8bfh7exFQc6c7h9QF/reQ7hK92ehO/5Pwv5UUSHRnOPzpZ4FEe75qBX/yiWmUaNA8+NPPpxIdqrwD/l7+HeC2q0HwF0l4rUyXRsGffHJk2nS6I/yp53GpRm33wZ94Qi5ItWoB/Klnjdyz0oPgTzzxct36pj38aSegRK5fW+FPPEslO7YI/rRzR41kz2bAn3ZWyzbtEfiTzt0Nkm2rHgJ/0nlPtnHl98Cfcu6Tbl1JDPwpJ0+6eUecmAGx2P+nKEPl23eqr/Gq+5XCX1X2yDew3PTzgiMr4K8sv1DQwmqzB4f8shb+6uI7pKCJ/v8xWPGcRvirzCQlfTT2PhnfHzn8lSZQzYHKOWbeKtdhG/xV52E1vfzaxP6A4afgrz7/q6ibKQG6P6xe8sNfQ7rVKGrox5211hn1KYe/lrysqqXfjtVY5bhz8NeU29RdWM+M0lRjzPsc/vr+c6nra1WKjvOEQ1Ivw19nVP64Ov6w8vIePcnhrzWx1Sq7+1EvpcX1+iuHv+68qLS/9evilFUWt64e/voTckJtixtz1VwXGpTbyOFvIonK27w7UfbxQV/ibs7hbyhZ6jv95QyZh4ciZnzJ4W8uYSc0NLsud2IboWraTtpWx+FvNAP1dPxSZmLrW6wk6OG/XOIc/qbzrK6mn8/+3c9aeqMooN+czRc4h78T2aqv8fz81ucGBDbz91vd/3yuRnz4N5f232jtPq86kLXkqSHXu2XYeehTS9//4hLXHPg396u7nhtIVcHu7dkZbyxb+NzCZW9kZG/fXVDFjQT+zSaZWxz4t+DSy0fw93YiT8Pf24n3w9/bmQd/j+cV+Ht8Ibge/t5O6zz4eztt9sHf24kohL+3E1MCf28n7jz8PX5f6DL8vZ3EBvh7O0n0Z0Ddf4NR5jOA+rdAVQIQpfLgd6T9vx0IQsn0KSbsf7IHAKUT9RVZ/4Odwacg7fcQ9f8kDHhKcttWkv7ZwaBTlMA1BP3fCgCcuiwh558KNKWZTWufYMN0kCnOqDOE/EuGAUx5IulsEsqNAJeG+ObVkeCvnQMrTRl4nIB/0c8BpS0/yXS9/4ZQMOnMU5dczV/1JIg0p/dBF/t/0QtA2hPypmv93wwBj4mMPepK/iNjQWMoQfMrXcdfOT8IMOZy50aX+b97B1DMZughNy3+BgPEeAJnl7uE/7uZgeBwIh3TG13A738bV/6duzb8D8f99/QDg4PxPbbfUf69j/iA4HCGO3abuDF3CNrvhty7od4B/rqMOLTeLemy0vQ9ospXo9B2NyUitcwg/9mUcLTcbbltVpEh/sNP46aPO/PASv07R0+9OgCNdvHlwVFrdF4fPL86Ho97uD3Bj2TpOVTgUmYibvjRSGjSh6p/GNZtE3z3GOJMOiSlH1GmX/jOJFzvJ5hOT7x+SPZ2UePBtMcj0Uq6CR+3fL/oSVP1+/+UiN/7FqTtmOS1u0pvyb5019rkMW3ROqtWhv0nLFy3t7nrhWV71y2c0B8Pd9ibdgPHT5k1f/Fr6Zm5Oz8rLD5XXPjZztzM9NcWz581ZfzAdmiQifw/JB1Mjns9LCAAAAAASUVORK5CYII="}],author:"Montage.gif",authorurl:"http://localhost:3000/#/"}),Object(cA.jsxs)(NA,{stage:"Detail",history:n,listTitle:"About Montage",children:[Object(cA.jsx)(nn,{stage:"Detail",themeColor:"darkred",textColor:"white",leftText:"#1.",category:"Brand",title:"\ub0af\uc120 \ucc9c\uc7a5",subTitle:"\ubd80\uc81c",desc:"\uc124\uba85",img:ln}),Object(cA.jsx)(nn,{stage:"Detail",themeColor:"darkred",textColor:"white",leftText:"#2.",category:"People",title:"\ub2e8\uc9dd",subTitle:"\ubd80\uc81c",desc:"\uc124\uba85",img:fn})]})]})},sn=function(){return Object(cA.jsxs)(eA.a,{children:[Object(cA.jsx)(tn.a,{children:Object(cA.jsx)("link",{rel:"shortcut icon",type:"image/png",href:"https://victorlee917.github.io/montage/favicon.png"})}),Object(cA.jsxs)(tA.d,{children:[Object(cA.jsx)(tA.b,{path:"/",exact:!0,component:cn}),Object(cA.jsx)(tA.b,{path:"/about",exact:!0,component:an}),Object(cA.jsx)(tA.b,{path:"/bogus",exact:!0,component:xn}),Object(cA.jsx)(tA.a,{from:"*",to:"/"})]})]})};var gn=function(){return Object(cA.jsxs)(cA.Fragment,{children:[Object(cA.jsx)(nA,{}),Object(cA.jsx)(sn,{})]})};Y.a.render(Object(cA.jsx)(J.a.StrictMode,{children:Object(cA.jsx)(gn,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.cb7ec3c8.chunk.js.map
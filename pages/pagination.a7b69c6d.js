var list=document.querySelector(".list"),load=document.querySelector(".load"),page=1,lordOfTheRingsAPI=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n="https://the-one-api.dev/v2/character",t="XJlq9OFMcHAy8pAQK7xj",o={headers:{Authorization:"Bearer ".concat(t)}};return fetch("".concat(n,"?limit=30&page=").concat(e),o).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))};lordOfTheRingsAPI().then((function(e){creatMakeup(e.docs),load.hidden=!1}));var creatMakeup=function(e){var n=e.map((function(e){var n=e.name,t=e.race;return"<li>\n        <h2>".concat(n,"</h2>\n        <h3>").concat(t,"</h3>\n    </li>")})).join("");list.insertAdjacentHTML("beforeend",n)};load.addEventListener("click",(function(){lordOfTheRingsAPI(page+=1).then((function(e){console.log(e)}))}));
//# sourceMappingURL=pagination.a7b69c6d.js.map

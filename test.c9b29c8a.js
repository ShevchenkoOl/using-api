var form=document.querySelector(".js-weather"),list=document.querySelector(".user-list"),onSearch=function(t){t.preventDefault();var e=t.currentTarget.elements,n=e.query.value,a=e.days.value;if(!n)return alert("add value");weatherApi(n,a).then((function(t){return list.innerHTML=creatMakeUp(t.forecast.forecastday)}))},weatherApi=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Prague",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n="http://api.weatherapi.com/v1/forecast.json",a="94a040c94bab4dcabf9130808222712";return fetch("".concat(n,"?key=").concat(a,"&q=").concat(t,"&days=").concat(e)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))};form.addEventListener("submit",onSearch);var creatMakeUp=function(t){return t.map((function(t){var e=t.day,n=e.condition,a=n.icon,r=n.text,c=e.avgtemp_c,o=t.date;return'<li>\n        <img src="'.concat(a,'" alt="').concat(r,'">\n        <h2>Опис: ').concat(r,"</h2>\n        <h3>Дата: ").concat(o,"</h3>\n        <h4>Середня температура: ").concat(c,"</h4>\n    </li> ")})).join("")};
//# sourceMappingURL=test.c9b29c8a.js.map

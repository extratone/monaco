"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[1913],{1913:(t,n,e)=>{e.r(n),e.d(n,{default:()=>r});const r='monaco.languages.register({ id: "mySpecialLanguage" });\n\nmonaco.languages.registerHoverProvider("mySpecialLanguage", {\n\tprovideHover: function (model, position) {\n\t\treturn xhr("./playground.html").then(function (res) {\n\t\t\treturn {\n\t\t\t\trange: new monaco.Range(\n\t\t\t\t\t1,\n\t\t\t\t\t1,\n\t\t\t\t\tmodel.getLineCount(),\n\t\t\t\t\tmodel.getLineMaxColumn(model.getLineCount())\n\t\t\t\t),\n\t\t\t\tcontents: [\n\t\t\t\t\t{ value: "**SOURCE**" },\n\t\t\t\t\t{\n\t\t\t\t\t\tvalue:\n\t\t\t\t\t\t\t"```html\\n" +\n\t\t\t\t\t\t\tres.responseText.substring(0, 200) +\n\t\t\t\t\t\t\t"\\n```",\n\t\t\t\t\t},\n\t\t\t\t],\n\t\t\t};\n\t\t});\n\t},\n});\n\nmonaco.editor.create(document.getElementById("container"), {\n\tvalue: "\\n\\nHover over this text",\n\tlanguage: "mySpecialLanguage",\n});\n\nfunction xhr(url) {\n\tvar req = null;\n\treturn new Promise(\n\t\tfunction (c, e) {\n\t\t\treq = new XMLHttpRequest();\n\t\t\treq.onreadystatechange = function () {\n\t\t\t\tif (req._canceled) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (req.readyState === 4) {\n\t\t\t\t\tif (\n\t\t\t\t\t\t(req.status >= 200 && req.status < 300) ||\n\t\t\t\t\t\treq.status === 1223\n\t\t\t\t\t) {\n\t\t\t\t\t\tc(req);\n\t\t\t\t\t} else {\n\t\t\t\t\t\te(req);\n\t\t\t\t\t}\n\t\t\t\t\treq.onreadystatechange = function () {};\n\t\t\t\t}\n\t\t\t};\n\n\t\t\treq.open("GET", url, true);\n\t\t\treq.responseType = "";\n\n\t\t\treq.send(null);\n\t\t},\n\t\tfunction () {\n\t\t\treq._canceled = true;\n\t\t\treq.abort();\n\t\t}\n\t);\n}\n'}}]);
//# sourceMappingURL=1913.js.map
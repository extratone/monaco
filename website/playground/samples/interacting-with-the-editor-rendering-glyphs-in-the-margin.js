// This is a generated file. Please do not edit directly.
var SAMPLES = this.SAMPLES || [];
SAMPLES.push({"id":"interacting-with-the-editor-rendering-glyphs-in-the-margin","js":"//---------------------------------------------------\n// Interacting with the editor > Rendering glyphs in the margin\n//---------------------------------------------------\n\nvar jsCode = [\n\t'\"use strict\";',\n\t'function Person(age) {',\n\t'\tif (age) {',\n\t'\t\tthis.age = age;',\n\t'\t}',\n\t'}',\n\t'Person.prototype.getAge = function () {',\n\t'\treturn this.age;',\n\t'};'\n].join('\\n');\n\nvar editor = monaco.editor.create(document.getElementById(\"container\"), {\n\tvalue: jsCode,\n\tlanguage: \"javascript\",\n\tglyphMargin: true\n});\n\nvar decorationId = editor.changeDecorations(function(changeAccessor) {\n\treturn changeAccessor.addDecoration({\n\t\tstartLineNumber: 3,\n\t\tstartColumn: 1,\n\t\tendLineNumber: 3,\n\t\tendColumn: 1\n\t}, {\n\t\tisWholeLine: true,\n\t\tclassName: 'myContentClass',\n\t\tglyphMarginClassName: 'myGlyphMarginClass'\n\t});\n});\n\n\n// You can now use `decorationId` to change or remove the decoration\n","html":"<div id=\"container\" style=\"height:100%;\"></div>\n","css":".myGlyphMarginClass {\n\tbackground: red;\n}\n.myContentClass {\n\tbackground: lightblue;\n}\n"});
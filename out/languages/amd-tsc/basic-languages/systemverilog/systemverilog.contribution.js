define(["require","exports","../_.contribution"],(function(e,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),(0,i.registerLanguage)({id:"systemverilog",extensions:[".sv",".svh"],aliases:["SV","sv","SystemVerilog","systemverilog"],loader:function(){return AMD?new Promise((function(s,i){e(["vs/basic-languages/systemverilog/systemverilog"],s,i)})):new Promise((function(s,i){e(["./systemverilog"],s,i)}))}}),(0,i.registerLanguage)({id:"verilog",extensions:[".v",".vh"],aliases:["V","v","Verilog","verilog"],loader:function(){return AMD?new Promise((function(s,i){e(["vs/basic-languages/systemverilog/systemverilog"],s,i)})):new Promise((function(s,i){e(["./systemverilog"],s,i)}))}})}));
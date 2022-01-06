/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(99e7d02e43e815267ba8b5bac89863162aec2743)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/bicep/bicep",[],()=>{
var moduleExports=(()=>{var o=Object.defineProperty;var r=e=>o(e,"__esModule",{value:!0});var i=(e,n)=>{r(e);for(var t in n)o(e,t,{get:n[t],enumerable:!0})};var d={};i(d,{conf:()=>x,language:()=>u});var s=e=>`\\b${e}\\b`,c="[_a-zA-Z]",a="[_a-zA-Z0-9]",g=s(`${c}${a}*`),l=["targetScope","resource","module","param","var","output","for","in","if","existing"],m=["true","false","null"],p="[ \\t\\r\\n]",k="[0-9]+",x={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"'",close:"'"},{open:"'''",close:"'''"}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:"'''",close:"'''",notIn:["string","comment"]}],autoCloseBefore:`:.,=}])' 
	`,indentationRules:{increaseIndentPattern:new RegExp("^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$"),decreaseIndentPattern:new RegExp("^((?!.*?\\/\\*).*\\*/)?\\s*[\\}\\]].*$")}},u={defaultToken:"",tokenPostfix:".bicep",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"}],symbols:/[=><!~?:&|+\-*/^%]+/,keywords:l,namedLiterals:m,escapes:"\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\${)",tokenizer:{root:[{include:"@expression"},{include:"@whitespace"}],stringVerbatim:[{regex:"(|'|'')[^']",action:{token:"string"}},{regex:"'''",action:{token:"string.quote",next:"@pop"}}],stringLiteral:[{regex:"\\${",action:{token:"delimiter.bracket",next:"@bracketCounting"}},{regex:"[^\\\\'$]+",action:{token:"string"}},{regex:"@escapes",action:{token:"string.escape"}},{regex:"\\\\.",action:{token:"string.escape.invalid"}},{regex:"'",action:{token:"string",next:"@pop"}}],bracketCounting:[{regex:"{",action:{token:"delimiter.bracket",next:"@bracketCounting"}},{regex:"}",action:{token:"delimiter.bracket",next:"@pop"}},{include:"expression"}],comment:[{regex:"[^\\*]+",action:{token:"comment"}},{regex:"\\*\\/",action:{token:"comment",next:"@pop"}},{regex:"[\\/*]",action:{token:"comment"}}],whitespace:[{regex:p},{regex:"\\/\\*",action:{token:"comment",next:"@comment"}},{regex:"\\/\\/.*$",action:{token:"comment"}}],expression:[{regex:"'''",action:{token:"string.quote",next:"@stringVerbatim"}},{regex:"'",action:{token:"string.quote",next:"@stringLiteral"}},{regex:k,action:{token:"number"}},{regex:g,action:{cases:{"@keywords":{token:"keyword"},"@namedLiterals":{token:"keyword"},"@default":{token:"identifier"}}}}]}};return d;})();
return moduleExports;
});

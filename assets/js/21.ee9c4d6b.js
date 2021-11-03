(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{257:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration"}},[t._v("#")]),t._v(" Migration")]),t._v(" "),a("h2",{attrs:{id:"zxcvbn-ts-0-3-x-to-zxcvbn-ts-1-x-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zxcvbn-ts-0-3-x-to-zxcvbn-ts-1-x-x"}},[t._v("#")]),t._v(" "),a("code",[t._v("zxcvbn-ts 0.3.x")]),t._v(" to "),a("code",[t._v("zxcvbn-ts 1.x.x")])]),t._v(" "),a("p",[t._v("To decrease the bundle size of the core package the keyboard layout are now optional and can be customized.\nThis means that if you want to have the recommended scoring you need to add it to your "),a("code",[t._v("setOptions")]),t._v(" call.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" zxcvbn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ZxcvbnOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbnCommonPackage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/language-common'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbnEnPackage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/language-en'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'somePassword'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  translations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zxcvbnEnPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dictionary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("zxcvbnCommonPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("zxcvbnEnPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The next line is now recommended to get a good scoring.")]),t._v("\n  graphs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zxcvbnCommonPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("adjacencyGraphs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nZxcvbnOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zxcvbn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"zxcvbn-ts-0-2-x-to-zxcvbn-ts-0-3-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zxcvbn-ts-0-2-x-to-zxcvbn-ts-0-3-x"}},[t._v("#")]),t._v(" "),a("code",[t._v("zxcvbn-ts 0.2.x")]),t._v(" to "),a("code",[t._v("zxcvbn-ts 0.3.x")])]),t._v(" "),a("p",[t._v("We moved the options handling out of the "),a("strong",[t._v("zxcvbn")]),t._v(" call to improve performance.")]),t._v(" "),a("p",[t._v("Related "),a("a",{attrs:{href:"https://github.com/zxcvbn-ts/zxcvbn/issues/31",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("@zxcvbn-ts/core has only named exports")]),t._v(" "),a("li",[t._v("options need to be set by "),a("code",[t._v("ZxcvbnOptions.setOptions")])])]),t._v(" "),a("p",[t._v("Old")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbnCommonPackage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/language-common'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbnEnPackage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/language-en'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'somePassword'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  translations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zxcvbnEnPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dictionary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("zxcvbnCommonPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("zxcvbnEnPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zxcvbn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("New")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" zxcvbn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ZxcvbnOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbnCommonPackage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/language-common'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbnEnPackage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/language-en'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'somePassword'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  translations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zxcvbnEnPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dictionary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("zxcvbnCommonPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("zxcvbnEnPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nZxcvbnOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zxcvbn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("ZxcvbnOptions.setOptions")]),t._v(" should be in another place as the "),a("strong",[t._v("zxcvbn")]),t._v(" call for example directly after you load your options.")]),t._v(" "),a("h2",{attrs:{id:"zxcvbn-4-4-2-to-zxcvbn-ts-0-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zxcvbn-4-4-2-to-zxcvbn-ts-0-1-0"}},[t._v("#")]),t._v(" "),a("code",[t._v("zxcvbn 4.4.2")]),t._v(" to "),a("code",[t._v("zxcvbn-ts 0.1.0")])]),t._v(" "),a("ul",[a("li",[t._v("Everything is written in TypeScript, this should make it easier for other people to contribute, and it will generate types that everybody can use.")]),t._v(" "),a("li",[t._v("There are now some more options. This is how it changed:")])]),t._v(" "),a("p",[t._v("Old")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zxcvbn'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'somePassword'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zxcvbn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("New")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbnCommonPackage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/language-common'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbnEnPackage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/language-en'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'somePassword'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  translations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zxcvbnEnPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dictionary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("zxcvbnCommonPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("zxcvbnEnPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zxcvbn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("It is a lot more but this is the configuration to improve the handling. This way you could add some more dictionaries.\nE.g. if you are from Germany you could also include the German package to improve efficacy.\nYou can even generate your own dictionaries and include them.")]),t._v(" "),a("ul",[a("li",[t._v("the userInputs options from before is now just a dictionary in the dictionary part of options with specific sanitizing.\nIf you are using it you need to move the parameter into the options like this:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/core'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'somePassword'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dictionary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    userInputs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'someEmail@email.de'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zxcvbn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("there are a few things that will slightly change the password crack estimation:\n"),a("ul",[a("li",[t._v("the password list is newly generated: this means that some passwords are in a different rank.")]),t._v(" "),a("li",[t._v("dates should be recognized better")]),t._v(" "),a("li",[t._v("passwords as single tokens are now consistently ranked better for capitalization like in "),a("a",{attrs:{href:"https://github.com/dropbox/zxcvbn/issues/232",target:"_blank",rel:"noopener noreferrer"}},[t._v("#232"),a("OutboundLink")],1),t._v(" described.")]),t._v(" "),a("li",[t._v("there are new keyboard layouts.")])])]),t._v(" "),a("li",[t._v("the german language package should not be used without the english and common language package because it is not matured yet")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
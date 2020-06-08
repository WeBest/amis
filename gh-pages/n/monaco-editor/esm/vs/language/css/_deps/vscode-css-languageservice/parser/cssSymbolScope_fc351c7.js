define("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/cssSymbolScope",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("node_modules/tslib/tslib"),r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=n.__importStar(e("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/cssNodes")),i=e("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/utils/arrays"),a=function(){function e(e,t){this.offset=e,this.length=t,this.symbols=[],this.parent=null,this.children=[]}return e.prototype.addChild=function(e){this.children.push(e),e.setParent(this)},e.prototype.setParent=function(e){this.parent=e},e.prototype.findScope=function(e,t){return void 0===t&&(t=0),this.offset<=e&&this.offset+this.length>e+t||this.offset===e&&this.length===t?this.findInScope(e,t):null},e.prototype.findInScope=function(e,t){void 0===t&&(t=0);var n=e+t,r=i.findFirst(this.children,function(e){return e.offset>n});if(0===r)return this;var o=this.children[r-1];return o.offset<=e&&o.offset+o.length>=e+t?o.findInScope(e,t):this},e.prototype.addSymbol=function(e){this.symbols.push(e)},e.prototype.getSymbol=function(e,t){for(var n=0;n<this.symbols.length;n++){var r=this.symbols[n];if(r.name===e&&r.type===t)return r}return null},e.prototype.getSymbols=function(){return this.symbols},e}();t.Scope=a;var s=function(e){function t(){return e.call(this,0,Number.MAX_VALUE)||this}return r(t,e),t}(a);t.GlobalScope=s;var l=function(){function e(e,t,n,r){this.name=e,this.value=t,this.node=n,this.type=r}return e}();t.Symbol=l;var f=function(){function e(e){this.scope=e}return e.prototype.addSymbol=function(e,t,n,r){if(-1!==e.offset){var o=this.scope.findScope(e.offset,e.length);o&&o.addSymbol(new l(t,n,e,r))}},e.prototype.addScope=function(e){if(-1!==e.offset){var t=this.scope.findScope(e.offset,e.length);if(t&&(t.offset!==e.offset||t.length!==e.length)){var n=new a(e.offset,e.length);return t.addChild(n),n}return t}return null},e.prototype.addSymbolToChildScope=function(e,t,n,r,o){if(e&&-1!==e.offset){var i=this.addScope(e);i&&i.addSymbol(new l(n,r,t,o))}},e.prototype.visitNode=function(e){switch(e.type){case o.NodeType.Keyframe:return this.addSymbol(e,e.getName(),void 0,o.ReferenceType.Keyframe),!0;case o.NodeType.CustomPropertyDeclaration:return this.visitCustomPropertyDeclarationNode(e);case o.NodeType.VariableDeclaration:return this.visitVariableDeclarationNode(e);case o.NodeType.Ruleset:return this.visitRuleSet(e);case o.NodeType.MixinDeclaration:return this.addSymbol(e,e.getName(),void 0,o.ReferenceType.Mixin),!0;case o.NodeType.FunctionDeclaration:return this.addSymbol(e,e.getName(),void 0,o.ReferenceType.Function),!0;case o.NodeType.FunctionParameter:return this.visitFunctionParameterNode(e);case o.NodeType.Declarations:return this.addScope(e),!0;case o.NodeType.For:var t=e,n=t.getDeclarations();return n&&this.addSymbolToChildScope(n,t.variable,t.variable.getName(),void 0,o.ReferenceType.Variable),!0;case o.NodeType.Each:var r=e,i=r.getDeclarations();if(i)for(var a=r.getVariables().getChildren(),s=0,l=a;s<l.length;s++){var f=l[s];this.addSymbolToChildScope(i,f,f.getName(),void 0,o.ReferenceType.Variable)}return!0}return!0},e.prototype.visitRuleSet=function(e){var t=this.scope.findScope(e.offset,e.length);if(t)for(var n=0,r=e.getSelectors().getChildren();n<r.length;n++){var i=r[n];i instanceof o.Selector&&1===i.getChildren().length&&t.addSymbol(new l(i.getChild(0).getText(),void 0,i,o.ReferenceType.Rule))}return!0},e.prototype.visitVariableDeclarationNode=function(e){var t=e.getValue()?e.getValue().getText():void 0;return this.addSymbol(e,e.getName(),t,o.ReferenceType.Variable),!0},e.prototype.visitFunctionParameterNode=function(e){var t=e.getParent().getDeclarations();if(t){var n=e.getDefaultValue(),r=n?n.getText():void 0;this.addSymbolToChildScope(t,e,e.getName(),r,o.ReferenceType.Variable)}return!0},e.prototype.visitCustomPropertyDeclarationNode=function(e){var t=e.getValue()?e.getValue().getText():"";return this.addCSSVariable(e.getProperty(),e.getProperty().getName(),t,o.ReferenceType.Variable),!0},e.prototype.addCSSVariable=function(e,t,n,r){-1!==e.offset&&this.scope.addSymbol(new l(t,n,e,r))},e}();t.ScopeBuilder=f;var c=function(){function e(e){this.global=new s,e.acceptVisitor(new f(this.global))}return e.prototype.findSymbolsAtOffset=function(e,t){for(var n=this.global.findScope(e,0),r=[],o={};n;){for(var i=n.getSymbols(),a=0;a<i.length;a++){var s=i[a];s.type!==t||o[s.name]||(r.push(s),o[s.name]=!0)}n=n.parent}return r},e.prototype.internalFindSymbol=function(e,t){var n=e;if(e.parent instanceof o.FunctionParameter&&e.parent.getParent()instanceof o.BodyDeclaration&&(n=e.parent.getParent().getDeclarations()),e.parent instanceof o.FunctionArgument&&e.parent.getParent()instanceof o.Function){var r=e.parent.getParent().getIdentifier();if(r){var i=this.internalFindSymbol(r,[o.ReferenceType.Function]);i&&(n=i.node.getDeclarations())}}if(!n)return null;for(var a=e.getText(),s=this.global.findScope(n.offset,n.length);s;){for(var l=0;l<t.length;l++){var f=t[l],c=s.getSymbol(a,f);if(c)return c}s=s.parent}return null},e.prototype.evaluateReferenceTypes=function(e){if(e instanceof o.Identifier){var t=e.referenceTypes;if(t)return t;if(e.isCustomProperty)return[o.ReferenceType.Variable];var n=o.getParentDeclaration(e);if(n){var r=n.getNonPrefixedPropertyName();if(("animation"===r||"animation-name"===r)&&n.getValue()&&n.getValue().offset===e.offset)return[o.ReferenceType.Keyframe]}}else if(e instanceof o.Variable)return[o.ReferenceType.Variable];var i=e.findAParent(o.NodeType.Selector,o.NodeType.ExtendsReference);return i?[o.ReferenceType.Rule]:null},e.prototype.findSymbolFromNode=function(e){if(!e)return null;for(;e.type===o.NodeType.Interpolation;)e=e.getParent();var t=this.evaluateReferenceTypes(e);return t?this.internalFindSymbol(e,t):null},e.prototype.matchesSymbol=function(e,t){if(!e)return!1;for(;e.type===o.NodeType.Interpolation;)e=e.getParent();if(t.name.length!==e.length||t.name!==e.getText())return!1;var n=this.evaluateReferenceTypes(e);if(!n||-1===n.indexOf(t.type))return!1;var r=this.internalFindSymbol(e,n);return r===t},e.prototype.findSymbol=function(e,t,n){for(var r=this.global.findScope(n);r;){var o=r.getSymbol(e,t);if(o)return o;r=r.parent}return null},e}();t.Symbols=c});
define("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/cssErrors",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=e("node_modules/tslib/tslib"),d=c.__importStar(e("node_modules/monaco-editor/esm/vs/language/css/fillers/vscode-nls")),p=d.loadMessageBundle(),r=function(){function e(e,t){this.id=e,this.message=t}return e}();t.CSSIssueType=r,t.ParseError={NumberExpected:new r("css-numberexpected",p("expected.number","number expected")),ConditionExpected:new r("css-conditionexpected",p("expected.condt","condition expected")),RuleOrSelectorExpected:new r("css-ruleorselectorexpected",p("expected.ruleorselector","at-rule or selector expected")),DotExpected:new r("css-dotexpected",p("expected.dot","dot expected")),ColonExpected:new r("css-colonexpected",p("expected.colon","colon expected")),SemiColonExpected:new r("css-semicolonexpected",p("expected.semicolon","semi-colon expected")),TermExpected:new r("css-termexpected",p("expected.term","term expected")),ExpressionExpected:new r("css-expressionexpected",p("expected.expression","expression expected")),OperatorExpected:new r("css-operatorexpected",p("expected.operator","operator expected")),IdentifierExpected:new r("css-identifierexpected",p("expected.ident","identifier expected")),PercentageExpected:new r("css-percentageexpected",p("expected.percentage","percentage expected")),URIOrStringExpected:new r("css-uriorstringexpected",p("expected.uriorstring","uri or string expected")),URIExpected:new r("css-uriexpected",p("expected.uri","URI expected")),VariableNameExpected:new r("css-varnameexpected",p("expected.varname","variable name expected")),VariableValueExpected:new r("css-varvalueexpected",p("expected.varvalue","variable value expected")),PropertyValueExpected:new r("css-propertyvalueexpected",p("expected.propvalue","property value expected")),LeftCurlyExpected:new r("css-lcurlyexpected",p("expected.lcurly","{ expected")),RightCurlyExpected:new r("css-rcurlyexpected",p("expected.rcurly","} expected")),LeftSquareBracketExpected:new r("css-rbracketexpected",p("expected.lsquare","[ expected")),RightSquareBracketExpected:new r("css-lbracketexpected",p("expected.rsquare","] expected")),LeftParenthesisExpected:new r("css-lparentexpected",p("expected.lparen","( expected")),RightParenthesisExpected:new r("css-rparentexpected",p("expected.rparent",") expected")),CommaExpected:new r("css-commaexpected",p("expected.comma","comma expected")),PageDirectiveOrDeclarationExpected:new r("css-pagedirordeclexpected",p("expected.pagedirordecl","page directive or declaraton expected")),UnknownAtRule:new r("css-unknownatrule",p("unknown.atrule","at-rule unknown")),UnknownKeyword:new r("css-unknownkeyword",p("unknown.keyword","unknown keyword")),SelectorExpected:new r("css-selectorexpected",p("expected.selector","selector expected")),StringLiteralExpected:new r("css-stringliteralexpected",p("expected.stringliteral","string literal expected")),WhitespaceExpected:new r("css-whitespaceexpected",p("expected.whitespace","whitespace expected")),MediaQueryExpected:new r("css-mediaqueryexpected",p("expected.mediaquery","media query expected"))}});
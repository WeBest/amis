define("node_modules/monaco-editor/esm/vs/editor/editor.worker",function(e,o){"use strict";function r(e){if(!i){i=!0;var o=new n.EditorSimpleWorkerImpl(e),r=new s.SimpleWorkerServer(function(e){self.postMessage(e)},o);self.onmessage=function(e){r.onmessage(e.data)}}}Object.defineProperty(o,"__esModule",{value:!0});var s=e("node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker"),n=e("node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker"),i=!1;o.initialize=r,self.onmessage=function(){i||r(null)}});
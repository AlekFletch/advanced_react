(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[792],{"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react-webpack5/node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react-webpack5/node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./config/storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'*{margin:0;padding:0;box-sizing:border-box}input,button,textarea,select{margin:0;font:inherit}:root{--font-family-main: consolas, "Times New Roman", serif;--font-size-m: 16px;--font-line-m: 24px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-size-l: 24px;--font-line-l: 32px;--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--font-size-xl: 32px;--font-line-xl: 40px;--font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);--navbar-height: 50px;--sidebar-width: 300px;--sidebar-width-collapsed: 80px;--modal-z-index: 10;--overlay-color: rgba(0 0 0 / 60%)}:root{--bg-color: #e8e8ea;--inverted-bg-color: #090949;--primary-color: #0232c2;--secondary-color: #0449e0;--inverted-primary-color: #04ff04;--inverted-secondary-color: #049604}.app.dark{--bg-color: #090949;--inverted-bg-color: #e8e8ea;--primary-color: #04ff04;--secondary-color: #049604;--inverted-primary-color: #0232c2;--inverted-secondary-color: #0452ff}.body{font:var(--font-m);color:var(--primary-color)}.app{min-height:100vh}.content-page{display:flex}.page-wrapper{flex-grow:1;padding:20px}',"",{version:3,sources:["webpack://./src/app/styles/reset.scss","webpack://./src/app/styles/variables/global.scss","webpack://./src/app/styles/themes/normal.scss","webpack://./src/app/styles/themes/dark.scss","webpack://./src/app/styles/index.scss"],names:[],mappings:"AAAA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,6BAII,QAAA,CACA,YAAA,CCXJ,MACI,sDAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,oBAAA,CACA,oBAAA,CACA,4EAAA,CAGA,qBAAA,CACA,sBAAA,CACA,+BAAA,CAGC,mBAAA,CAGD,kCAAA,CCrBJ,MACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCNJ,UACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCDJ,MACI,kBAAA,CACA,0BAAA,CAGJ,KACI,gBAAA,CAGJ,cACI,YAAA,CAGJ,cACI,WAAA,CACA,YAAA",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    margin: 0;\n    font: inherit;\n}\n",':root {\n    --font-family-main: consolas, "Times New Roman", serif;\n    --font-size-m: 16px;\n    --font-line-m: 24px;\n    --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\n    --font-size-l: 24px;\n    --font-line-l: 32px;\n    --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\n    --font-size-xl: 32px;\n    --font-line-xl: 40px;\n    --font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);\n\n    // Размеры\n    --navbar-height: 50px;\n    --sidebar-width: 300px;\n    --sidebar-width-collapsed: 80px;\n\n    // я - Индексы\n     --modal-z-index: 10;\n\n    // Цвета\n    --overlay-color: rgba(0 0 0  / 60%);\n}\n',":root {\n    --bg-color: #e8e8ea;\n    --inverted-bg-color: #090949;\n    --primary-color: #0232c2;\n    --secondary-color: #0449e0;\n    --inverted-primary-color: #04ff04;\n    --inverted-secondary-color: #049604;\n}\n",".app.dark {\n    --bg-color: #090949;\n    --inverted-bg-color: #e8e8ea;\n    --primary-color: #04ff04;\n    --secondary-color: #049604;\n    --inverted-primary-color: #0232c2;\n    --inverted-secondary-color: #0452ff;\n}\n",'@import "reset";\n@import "/src/app/styles/variables/global";\n@import "themes/normal";\n@import "themes/dark";\n\n.body {\n    font: var(--font-m);\n    color: var(--primary-color);\n}\n\n.app {\n    min-height: 100vh;\n}\n\n.content-page {\n    display: flex;\n}\n\n.page-wrapper {\n    flex-grow: 1;\n    padding: 20px;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/app/styles/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals},"./config/storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators,default:()=>storybook_preview});__webpack_require__("./src/app/styles/index.scss");var react=__webpack_require__("./node_modules/react/index.js"),react_router_dom=__webpack_require__("./node_modules/react-router-dom/index.js"),RouterDecorator=function(StoryComponent){return react.createElement(react_router_dom.Kd,null,StoryComponent())};RouterDecorator.__docgenInfo={description:"",methods:[],displayName:"RouterDecorator"};const storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}};var decorators=[function(story){return story()},RouterDecorator]},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./pages/AboutPage/ui/AboutPage.stories":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",14],"./pages/AboutPage/ui/AboutPage.stories.tsx":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",14],"./pages/MainPage/ui/MainPage.stories":["./src/pages/MainPage/ui/MainPage.stories.tsx",38],"./pages/MainPage/ui/MainPage.stories.tsx":["./src/pages/MainPage/ui/MainPage.stories.tsx",38],"./pages/NotFoundPage/ui/NotFoundPage.stories":["./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",466],"./pages/NotFoundPage/ui/NotFoundPage.stories.tsx":["./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",466],"./shared/ui/AppLink/AppLink.stories":["./src/shared/ui/AppLink/AppLink.stories.tsx",739],"./shared/ui/AppLink/AppLink.stories.tsx":["./src/shared/ui/AppLink/AppLink.stories.tsx",739],"./shared/ui/Button/Button.stories":["./src/shared/ui/Button/Button.stories.tsx",425],"./shared/ui/Button/Button.stories.tsx":["./src/shared/ui/Button/Button.stories.tsx",425],"./shared/ui/Loader/Loader.stories":["./src/shared/ui/Loader/Loader.stories.tsx",495],"./shared/ui/Loader/Loader.stories.tsx":["./src/shared/ui/Loader/Loader.stories.tsx",495],"./shared/ui/Modal/Modal.stories":["./src/shared/ui/Modal/Modal.stories.tsx",7],"./shared/ui/Modal/Modal.stories.tsx":["./src/shared/ui/Modal/Modal.stories.tsx",7],"./shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories":["./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",965,404],"./shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx":["./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",965,404],"./widgets/Navbar/ui/Navbar.stories":["./src/widgets/Navbar/ui/Navbar.stories.tsx",207],"./widgets/Navbar/ui/Navbar.stories.tsx":["./src/widgets/Navbar/ui/Navbar.stories.tsx",207],"./widgets/PageError/ui/PageError.stories":["./src/widgets/PageError/ui/PageError.stories.tsx",445],"./widgets/PageError/ui/PageError.stories.tsx":["./src/widgets/PageError/ui/PageError.stories.tsx",445],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",942,965,248],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",942,965,248]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[300],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
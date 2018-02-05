webpackJsonp([51],{fSfT:function(n,r){n.exports="\u5feb\u901f\u4e0a\u624b\r\n===\r\nNG ZORRO \u81f4\u529b\u4e8e\u63d0\u4f9b\u7ed9 Angular \u5f00\u53d1\u8005**\u6109\u60a6**\u7684\u5f00\u53d1\u4f53\u9a8c\u3002\r\n\r\n---\r\n> \u5b98\u65b9\u6307\u5357\u5047\u8bbe\u4f60\u5df2\u7ecf\u62e5\u6709\u5df2\u6709 HTML\u3001CSS \u548c JavaScript \u4e2d\u7ea7\u524d\u7aef\u77e5\u8bc6\u5e76\u4e14\u5bf9 Angular \u6846\u67b6\u8db3\u591f\u4e86\u89e3\u3002\u5982\u679c\u4f60\u521a\u5f00\u59cb\u5b66\u4e60\u524d\u7aef\u6216\u8005 Angular\uff0c\u5c06\u7ec4\u4ef6\u4f5c\u4e3a\u7b2c\u4e00\u6b65\u53ef\u80fd\u5e76\u4e0d\u662f\u4e00\u4e2a\u597d\u4e3b\u610f\uff0c\u63a8\u8350\u5148\u5b66\u4e60 <a href=\"http://www.angular.cn\" target=\"_blank\"> Angular </a> \u548c <a href=\"https://www.typescriptlang.org/\" target=\"_blank\"> TypeScript</a>\u3002\r\n\r\n\r\n## \u6807\u51c6\u5f00\u53d1\r\n\r\n\u5b9e\u9645\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u4f60\u4f1a\u9700\u8981\u5bf9 TypeScript \u4ee3\u7801\u7684\u6784\u5efa\u3001\u8c03\u8bd5\u3001\u4ee3\u7406\u3001\u6253\u5305\u90e8\u7f72\u7b49\u4e00\u7cfb\u5217\u5de5\u7a0b\u5316\u7684\u9700\u6c42\u3002\r\n\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u5b98\u65b9\u7684`@angular/cli`\u5de5\u5177\u94fe\u8f85\u52a9\u8fdb\u884c\u5f00\u53d1\uff0c\u4e0b\u9762\u6211\u4eec\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u6765\u8bf4\u660e\u3002\r\n\r\n### 1. \u5b89\u88c5\u811a\u624b\u67b6\u5de5\u5177\r\n\r\n> \u4f7f\u7528 `@angular/cli` \u524d\uff0c\u52a1\u5fc5\u786e\u8ba4 [Node.js](https://nodejs.org/en/) \u5df2\u7ecf\u5347\u7ea7\u5230 v6.9 \u6216\u4ee5\u4e0a\uff0c\u5f3a\u70c8\u5efa\u8bae\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\u7684 `@angular/cli`\u3002\r\n\r\n```bash\r\n$ npm install -g @angular/cli@latest\r\n```\r\n\r\n\u66f4\u591a\u529f\u80fd\u8bf7\u53c2\u8003 [\u811a\u624b\u67b6\u5de5\u5177](https://github.com/angular/angular-cli) \u548c [CLI Wiki](https://github.com/angular/angular-cli/wiki)\u3002\r\n\r\n### 2. \u521b\u5efa\u4e00\u4e2a\u9879\u76ee\r\n\r\n\u5728\u521b\u5efa\u9879\u76ee\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd `@angular/cli` \u5df2\u88ab\u6210\u529f\u5b89\u88c5\r\n```bash\r\n$ ng new PROJECT-NAME\r\n```\r\n\r\n`@angular/cli` \u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u540d\u79f0\u4e3a `PROJECT-NAME` \u7684\u6587\u4ef6\u5939\uff0c\u5e76\u81ea\u52a8\u5b89\u88c5\u597d\u76f8\u5e94\u4f9d\u8d56\r\n\r\n### 3. \u4f7f\u7528\u7ec4\u4ef6\r\n\r\n\u73b0\u5728\u9879\u76ee\u4e0b\u5b89\u88c5 ng-zorro-antd\r\n```bash\r\n$ cd PROJECT_NAME\r\n$ npm install ng-zorro-antd --save\r\n```\r\n\r\n\u76f4\u63a5\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u66ff\u6362 `/src/app/app.module.ts` \u7684\u5185\u5bb9\r\n\r\n> **\u6ce8\u610f**\uff1a\u5728\u6839 module \u4e2d\u9700\u8981\u4f7f\u7528 `NgZorroAntdModule.forRoot()`\uff0c\u5728\u5b50 module \u9700\u8981\u4f7f\u7528 `NgZorroAntdModule` \r\n\r\n```typescript\r\nimport { BrowserModule } from '@angular/platform-browser';\r\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\r\nimport { NgModule } from '@angular/core';\r\nimport { FormsModule } from '@angular/forms';\r\nimport { HttpClientModule } from '@angular/common/http';\r\nimport { NgZorroAntdModule } from 'ng-zorro-antd';\r\nimport { AppComponent } from './app.component';\r\n\r\n@NgModule({\r\n  declarations: [\r\n    AppComponent\r\n  ],\r\n  imports: [\r\n    BrowserModule,\r\n    FormsModule,\r\n    HttpClientModule,\r\n    BrowserAnimationsModule,\r\n    NgZorroAntdModule.forRoot()\r\n  ],\r\n  bootstrap: [AppComponent]\r\n})\r\nexport class AppModule { }\r\n\r\n```\r\n\u8fd9\u6837\u5c31\u6210\u529f\u5728\u5168\u5c40\u5f15\u5165\u4e86 ng-zorro-antd\u3002\r\n\r\n> `NgZorroAntdModule.forRoot()` \u65b9\u6cd5\u80fd\u591f\u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u7684\u914d\u7f6e\u5bf9\u8c61\uff0c\u7528\u4e8e\u5f15\u5165\u5916\u90e8\u7684\u5b57\u4f53\u6587\u4ef6\uff0c\u7c7b\u578b\u4e3a `{ extraFontName: string, extraFontUrl: string }`\u3002\r\n\r\n\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u66ff\u6362 `/src/app/app.component.html`\r\n\r\n```html\r\n<button nz-button [nzType]=\"'primary'\">\u6d4b\u8bd5\u6309\u94ae</button>\r\n```\r\n[\u67e5\u770b](#/components/button)\u6700\u7b80\u5355\u7684Button\u6548\u679c\r\n\r\n\r\n### 4. \u5f00\u53d1\u8c03\u8bd5\r\n\r\n\u4e00\u952e\u542f\u52a8\u8c03\u8bd5\r\n\r\n```bash\r\n$ ng serve --port 0 --open\r\n```\r\n\r\n\u5982\u679c\u9700\u8981\u5b9e\u65f6\u8c03\u8bd5AoT\u6548\u679c\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\r\n\r\n```bash\r\n$ ng serve --port 0 --open --aot\r\n```\r\n\r\n### 5. \u6784\u5efa\u548c\u90e8\u7f72\r\n\r\n```bash\r\n$ ng build --prod\r\n```\r\n\r\n\u5165\u53e3\u6587\u4ef6\u4f1a\u6784\u5efa\u5230 `dist` \u76ee\u5f55\u4e2d\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u90e8\u7f72\u5230\u4e0d\u540c\u73af\u5883\u4e2d\u8fdb\u884c\u5f15\u7528\u3002\r\n\r\n\r\n\r\n## \u4e86\u89e3\u66f4\u591a\r\n\r\n\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591aCLI\u5de5\u5177\u94fe\u7684\u529f\u80fd\u548c\u547d\u4ee4\uff0c\u5efa\u8bae\u8bbf\u95ee [Angular CLI](https://github.com/angular/angular-cli) \u4e86\u89e3\u66f4\u591a\r\n"},qDGv:function(n,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=o("LMZF"),l=function(){},a=o("DQNQ"),u=o("AXbG"),e=function(){return function(){this._markdownCode=o("fSfT")}}(),p=t._5({encapsulation:2,styles:[],data:{}});function i(n){return t._31(0,[(n()(),t._7(0,0,null,null,1,"nz-markdown",[],null,null,null,a.b,a.a)),t._6(1,4308992,null,0,u.a,[t.l,t.D],{nzContent:[0,"nzContent"]},null),(n()(),t._29(-1,null,["\n"]))],function(n,r){n(r,1,0,r.component._markdownCode)},null)}var s=t._3("nz-intro-get-started",e,function(n){return t._31(0,[(n()(),t._7(0,0,null,null,1,"nz-intro-get-started",[],null,null,null,i,p)),t._6(1,49152,null,0,e,[],null,null)],null,null)},{},{},[]),g=o("Un6q"),c=o("jlvU"),m=o("UHIZ"),d=function(){},f=o("1n7c");o.d(r,"NzIntroGetStartedModuleNgFactory",function(){return _});var _=t._4(l,[],function(n){return t._15([t._16(512,t.k,t.Z,[[8,[s]],[3,t.k],t.w]),t._16(4608,g.n,g.m,[t.t,[2,g.v]]),t._16(512,g.c,g.c,[]),t._16(512,c.a,c.a,[]),t._16(512,m.o,m.o,[[2,m.t],[2,m.l]]),t._16(512,d,d,[]),t._16(512,f.a,f.a,[]),t._16(512,l,l,[]),t._16(1024,m.j,function(){return[[{path:"",component:e}]]},[])])})}});
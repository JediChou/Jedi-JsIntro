# JavaScript Lang

The note write by Jedi Chou (skyzhx@163.com). And content reference
[JavaScript.info](https://javascript.info).

## 1. JavaScript Introduction

### 1.1 What is JavaScript

* Target: JavaScript was initially created to "make web pages alive".
* JavaScript, ECMAScript
* The JavaScript engines
  * V8
  * SpiderMonkey
* The JavaScript game engines
  * [Reference](https://blogs.jscrambler.com/10-javascript-engines-to-develop-your-own-mobile-and-web-gaems)
  * Phaser
  * Pixi.js
  * Babylon.js
  * Cocos2d
  * PlayCanvas
  * Kiwi.js
  * Panda Engine
  * MenlonJS
  * QICI Engine
  * Crafty
  * Final Thoughts

JavaScript引擎的基本工作原理

1. 引擎（通常嵌入在浏览器中）读取（“解析”）脚本
2. 然后将脚本转换（“编译”）为机器语言
3. 然后这机器语言代码快速地运行

### 1.2 What can in-browser JavaScript do?

* Add new HTML to the page, change the existing content, modify styles.
* React to user actions, run on mouse clicks, pointer movenments, key presses
* Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
* Get and set cookies, ask questions to the visitor, shown messages.
* Remember the data on the client-side ("local storage").

### 1.3 What CAN'T in-browser JavaScript do?

* 网页中的JS不能读、写、复制及执行用户磁盘上的文件或程序。
* 不同浏览器标签之间基本彼此不相关。
  * 同源策略
  * 举例：用户在http://anysite.com的网页肯定不能访问http://gmail.com，也不能从那里窃取信息
* JavaScript通过互联网可以轻松和当前网页域名的服务器进行通讯

### 1.4 是什么使得JavaScript与众不同

* 至少有3件事
  * 和HTML/CSS完全的集成
  * 使用简单的工具完成简单的任务
  * 被所有的主浏览器支持，并且默认开启

### 1.5 比JavaScript“更好”的语言

* CoffeeScript
* TypeScript
* Flow
* Dart

### 1.6 Summary

* JavaScript最开始是为浏览器设计的一门语言，但现在也可以在其他地方使用
* JavaScript在浏览器中能很好的集成HTML、CSS
* 有很多其他语言可以被编译成JavaScript

## 2. 手册与规范

### 2.1 规范

* ECMA-262规范包含了大部分深入的、详细的、规范化的关于JavaScript的信息
* [最新版本](https://tc39.es/ecma262/)

### 2.2 手册

* MDN (Mozilla) JavaScript索引
  * [url](https://developer.mozilla.org/en-Us/docs/Web/JavaScript/Reference)
  * [Search with https://google.com/serach?=MDN+parseInt]

* [MSDN](http://msdn.microsoft.com/)

### 2.3 兼容性列表

* http://caniuse.com
* https://kangax.github.io/compat-table

## 3. 代码编辑器

### 3.1 IDE

* Visual Studio Code
* WebStorm
* Visual Studio Community

### 3.2 轻量编辑器

* Atom
* Visual Studio Code
* Sublime Text
* Notepad++
* Vim/Emacs

## 4. 开发者控制台

* Chrome: F12, Cmd+Opt+J
* Firefox, Edge: F12
* Safari: Cmd+Opt+C
* 详细的调试方法在后面会给出

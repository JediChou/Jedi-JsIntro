# JavaScript Lang

The note write by Jedi Chou (skyzhx@163.com). And content reference
[JavaScript.info](https://javascript.info).

## 1. Hello, World

### 1.1 Script标签

```html
<script>
  alter("hello, world!");
</script>
```

### 1.2 现代的标记(markup)

新的方式不用指定属性，旧的方式要指定属性。

```html
<script type="text/javascript"><!--
  alter("hello, world!");
//--></script>
```

### 1.3 外部脚本

* 简单的加载

```html
<script src="/path/to/script.js"></script>
```

* 简单的加载（附上完整示例）

```html
<script src="http://cdnjs.com/lodash.js"></script>
```

* 加载多个脚本

```html
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
```

* 注意：如果设置了src属性，则script标签内容较会被忽略

```html
<script src="js-scritpt.js">
  // ignore
  alter("hello, world");
</script>
```

### 1.4 任务

* Task 1: 显示一个提示语
  * 创建一个页面，然后显示一个消息“I'm JavaScript!"
  * 在沙箱或者在你的硬盘上做这件事都无所谓，只要确保它能运行起来。
  * Solution: JsIntro-Ch0201-Task1.js

* Task 2: 使用外部的脚本显示一个提示语
  * 打开前一个任务显示一个提示语的答案。将脚本提取到一个外部的alter.js文件中，放置在相同的文件夹中。
  * Solution: JsIntro-Ch0201-Task2.js, alter.js

## 2. 代码结构

### 2.1 语句

普通的示例

```javascript
alert('Hello'); alert('World');
```

为了可读性，每条语句独占一行

```javascript
alert("Hello");
alert("World");
```

### 2.2 分号

没有分号以下代码还是可以运行的

```javascript
// task0202-01.js
console.log("Hello")
console.log("World")
```

大部分情况换行相当于一个分号，但也不总是这个样子

```javascript
// task0202-02.js
console.log(3 +
1
+ 2);
```

但存在JavaScript无法确定是否真的需要自动插入分号的情况

```javascript
// task0202-03.js
// Jedi: 在node中的输出比较奇怪
[1,2].forEach(console.log)
```

换一种方式输出

```javascript
// task0202-04.js
// Jedi: 这个输出是比较合理的
function output(elt) {
  console.log(elt);
}
[1,2].forEach(output);
```

### 2.3 注释

略过

## 3. 现代模式，“use strict”

### 3.1 "use strict"

* 这个指令看上去像一个字符串 "use strict" 或者 'use strict'。当它处于脚本文件的顶部时，则整个脚本文件都将以“现代”模式进行工作。

* 注意要点
  * 确保 “use strict” 出现在最顶部
  * 没有办法取消use strict

### 3.2 浏览器控制台

以后，当你使用浏览器控制台去测试功能时，请注意 use strict 默认不会被启动。

```note
'use strict'; <Shift+Enter 换行>
//  ...你的代码
<按下 Enter 以运行>
```

它在大部分浏览器中都有效，像 Firefox 和 Chrome。如果依然不行，那确保 use strict 被开启的最可靠的方法是，像这样将代码输入到控制台：

```javascript
(function() {
  'use strict';
  // ...你的代码...
})()
```

### 3.3 总是使用 “use strict”

* "use strict" 指令将浏览器引擎转换为“现代”模式，改变一些内建特性的行为。我们会在之后的学习中了解这些细节。
* 严格模式通过将 "use strict" 放置在整个脚本或函数的顶部来启用。一些新语言特性诸如 “classes” 和 “modules” 也会自动开启严格模式。
* 所有的现代浏览器都支持严格模式。
* 我们建议始终使用 "use strict" 启动脚本。本教程的所有例子都默认采用严格模式，除非特别指定（非常少）。

## 4 变量

* 变量就是用来储存这些信息的。

### 4.1 变量

### 4.2 一个现实生活的类比

### 4.3 变量命名

1. 变量名称必须仅包含字母，数字，符号 $ 和 _。
2. 首字符必须非数字。

### 4.4 常量

* 大写形式的常数

### 4.5 正确命名变量


## 5. 数据类型


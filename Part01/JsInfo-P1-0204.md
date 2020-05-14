## 2.4. 变量

Jedi: 课程中将进行两个示例“一个网上商店”、“一个聊天应用”。本节课程的[url](https://zh.javascript.info/variables)。

### 2.4.1 变量

定义变量

```javascript
// task0401-01.js
let message
console.log(message)
```

定义变量后进行赋值

```javascript
// demo0402-02.js
let message
message = "jedi chou"
console.log(message)
```

定义变量后直接赋值

```javascript
// demo0402-03.js
let message = "jedi chou"
console.log(message)
```

也可以在一行中声明多个变量：

```javascript
// demo0402-04.js
let first_name = "jedi", last_name = "chou", age = 42
console.log(first_name, last_name, "'s age is", age)
```

多行变量声明有点长，但更容易阅读

```javascript
// demo0402-05.js
let first_name = "jedi"
let last_name = "chou"
let age = 12
console.log(first_name, last_name, "'s age is", age)
```

以下两种写的方式有强烈的个人风格在其中

```javascript
// demo0402-06.js
let dept1 = "cfa-ca",
    server1 = "ca-app node1",
    nums1 = 3

let dept2 = "cfa-fawu"
  , server2 = "fawu-app legal cloud"
  , nums2 = 20

console.log(dept1, server1, nums1)
console.log(dept2, server2, nums2)
```

var而不是let

```javascript
// demo0402-07.js
var message = "hello world"
console.log(message)
```

### 2.4.2 一个现实生活的类比

如果将变量想象成一个“数据”的盒子，盒子上有一个唯一的标注盒子名字的贴纸。这样我们能更轻松地掌握“变量”的概念。

```javascript
// JsInfo-P1-020402-01.js
// 将变量想象成一个有标签的盒子
let box
box = "hello"; console.log(box)
box = "world"; console.log(box)
```

我们还可以声明两个变量，然后将其中一个变量的数据拷贝到另一个变量。

```javascript
// JsInfo-P1-020402-02.js
// 将变量的值赋给其他变量
let box1, box2
box1 = "Hello World"
box2 = box1
console.log(box1)
console.log(box2)
```

* 函数式编程（Jedi: 这是补充知识）
  * 书中举例: Scala, Erlang
  * 接触到的函数式编程还有: F#, Caml, Python
  * 可以实现函数编程的还有: C#, JavaScript

### 2.4.3 变量名命名

* JavaScript 的变量命名有两个限制：
  * 变量名称必须仅包含字母，数字，符号 $ 和 _。
  * 首字符必须非数字。

合法的命名：

```javascript
// JsInfo-P1-020403-01.js
let userName
let test123
```

下面的命名是有效的：

```javascript
// JsInfo-P1-020403-02.js
let $ = 1; // 使用 "$" 声明一个变量
let _ = 2; // 现在用 "_" 声明一个变量
console.log($ + _); // 3
```

下面的变量命名不正确：

```javascript
// JsInfo-P1-020403-03.js
let 1a; // 不能以数字开始
let my-name; // 连字符 '-' 不允许用于变量命名
```

区分大小写：

```javascript
// JsInfo-P1-020403-04.js
let comic = "comics"
let Comic = "Comics: One Punch"
console.log(comic, Comic)
```

允许非英文字母，但不推荐：

```javascript
// JsInfo-P1-020403-05.js
let 周颢 = "屌丝一名"
let 星星 = "一堆小星星"
console.log(周颢, 星星)
```

保留字：

```javascript
// JsInfo-P1-020403-06.js
// Descritpion: 不能用关键字来命名变量
let abstract = "Hello World"
let arguments = "Hello World"
let boolean = "Hello World"
let break = "Hello World"
let byte = "Hello World"
let case = "Hello World"
let catch = "Hello World"
let char = "Hello World"
let class = "Hello World"
let const = "Hello World"
let continue = "Hello World"
let debugger = "Hello World"
let default = "Hello World"
let delete = "Hello World"
let do = "Hello World"
let double = "Hello World"
let else = "Hello World"
let enum = "Hello World"
let eval = "Hello World"
let export = "Hello World"
let extends = "Hello World"
let false = "Hello World"
let final = "Hello World"
let finally = "Hello World"
let float = "Hello World"
let for = "Hello World"
let function = "Hello World"
let goto = "Hello World"
let if = "Hello World"
let implements = "Hello World"
let import = "Hello World"
let in = "Hello World"
let instanceof = "Hello World"
let int = "Hello World"
let interface = "Hello World"
let let = "Hello World"
let long = "Hello World"
let native = "Hello World"
let new = "Hello World"
let null = "Hello World"
let package = "Hello World"
let private = "Hello World"
let protected = "Hello World"
let public = "Hello World"
let return = "Hello World"
let short = "Hello World"
let static = "Hello World"
let super = "Hello World"
let switch = "Hello World"
let synchronized = "Hello World"
let this = "Hello World"
let throw = "Hello World"
let throws = "Hello World"
let transient = "Hello World"
let true = "Hello World"
let try = "Hello World"
let typeof = "Hello World"
let var = "Hello World"
let void = "Hello World"
let volatile = "Hello World"
let while = "Hello World"
let with = "Hello World"
let yield = "Hello World"
```


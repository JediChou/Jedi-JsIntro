// file: variables-demo03.js
// reference: https://zh.javascript.info/variables
// keywords: 我们还可以声明两个变量，然后将其中一个变量的数据拷贝到另一个变量。

let message = "hello world from jedi's wsl"
let otherMessage
otherMessage = message

console.log(message == otherMessage)
console.log("message ->", message)
console.log("otherMessage ->", otherMessage)
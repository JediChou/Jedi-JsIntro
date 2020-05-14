// JsInfo-P1-020403-06.js
// Descritpion: 不能用关键字来命名变量

//////////////////////////////////////////////////////////////
// 简化console.log
out = console.log

//////////////////////////////////////////////////////////////
// 以下的关键字在node中是可以输出的
let abstract = "abstract"; out(abstract)
let arguments = "arguments"; out(arguments)
let boolean = "boolean"; out(boolean)
let byte = "byte"; out(byte)
let char = "char"; out(char)

//////////////////////////////////////////////////////////////
// 以下关键字是不可以输出的，报错均为：
//   SyntaxError: Unexpected token break
//
// let break = "Hello World"; out(break)
// let case = "case"; out(case)
// let catch = "catch"; out(catch)
// let class = "class"; out(class)
// let const = "const"; out(const)
// let continue = "continue"; out(continue)
// let debugger = "debugger"; out(debugger)
// let default = "default"; out(default)
// let delete = "delete"; out(delete)
// let do = "do"; out(do)

// let double = "Hello World"
// let else = "Hello World"
// let enum = "Hello World"
// let eval = "Hello World"
// let export = "Hello World"
// let extends = "Hello World"
// let false = "Hello World"
// let final = "Hello World"
// let finally = "Hello World"
// let float = "Hello World"
// let for = "Hello World"
// let function = "Hello World"
// let goto = "Hello World"
// let if = "Hello World"
// let implements = "Hello World"
// let import = "Hello World"
// let in = "Hello World"
// let instanceof = "Hello World"
// let int = "Hello World"
// let interface = "Hello World"
// let let = "Hello World"
// let long = "Hello World"
// let native = "Hello World"
// let new = "Hello World"
// let null = "Hello World"
// let package = "Hello World"
// let private = "Hello World"
// let protected = "Hello World"
// let public = "Hello World"
// let return = "Hello World"
// let short = "Hello World"
// let static = "Hello World"
// let super = "Hello World"
// let switch = "Hello World"
// let synchronized = "Hello World"
// let this = "Hello World"
// let throw = "Hello World"
// let throws = "Hello World"
// let transient = "Hello World"
// let true = "Hello World"
// let try = "Hello World"
// let typeof = "Hello World"
// let var = "Hello World"
// let void = "Hello World"
// let volatile = "Hello World"
// let while = "Hello World"
// let with = "Hello World"
// let yield = "Hello World"

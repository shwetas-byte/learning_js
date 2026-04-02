// two types of mudules:
// 1. Builtin 
// 2.userdefine iske two types:
// 2.1 Common Js (module.export/reuire())
// 2.2 Es Modules(export/import)

// script me type module likhna pdega agr es module use krna h to nahi to enable nahi hoga
// jb single function ko export krare h toh default multiple ke liye default nhi 
// 2 types of import export
// default for single and named for multiple
// named is denoted by curly braces

// jb koi default function export ho gya hai toh import ke time uska name change kr skte hai
// jb named me krna h toh copy bnake use krenge
// import demo from'./js_module1.js'
import sum from'./js_module1.js'

// import fun from'./js_module2.js'
// import {fun,fun1} from'./js_module2.js'
import {fun as fn,fun1} from'./js_module2.js'
sum()
fn()
fun1()    


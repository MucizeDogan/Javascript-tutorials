/*

DİZİLER (ARRAYS)


*/

let names = Array()
console.log(names)

let names2 = []
console.log(names2)

let denemeArray = ["Mucize", "Doğan", 24, 2000]
console.log(denemeArray.length) // 4
console.log(denemeArray[0].length) // Mucize = 6

// Creating an array using split 
let js = "Javascript"
let charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]


// Methods to manipulate array
//Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// fill - array i doldurmak için kullanılır.
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

//concat - arrayleri birleştirmek için
let a = [1,2,3]
let b = [4,5,6]
let c = a.concat(b)
console.log(c) // [1, 2, 3, 4, 5, 6]

// lastIndexOf - dizide parametrede verdiğimiz elemanın son kullanıldığı indexi verir.
let numbers = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers.lastIndexOf(2)) // 7

// join - Dizi elemanlarını birleştirmek için, parametrede verdiğimiz şekilde dizide birleşecek ve bir string olarak dönecektir. Varsayılan olarak virgülle birleşir
console.log(numbers.join()) // 1,2,3,4,5,3,1,2

// push - dizinin sonuna yeni eleman ekler
const arr  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr) // ['item1', 'item2','item3','new item']

// pop - dizideki SON elemanı kaldırır. Ama son elemanı kullanmak istersen bir değişkenin içine de atabilirsin
let d = ["a", "b", "c", "d"]
let dSonEleman = d.pop()
console.log(d,dSonEleman) // d = ['a', 'b', 'c']  dSonEleman = 'd'

// shift - dizideki İLK elemanı kaldırır. Ama ilk elemanı kullanmak istersen bir değişkenin içine de atabilirsin

// unshift - dizinin başına yeni eleman ekler
let e = [1,2,3,4]
e.unshift(0)
console.log(e) // [0, 1, 2, 3, 4]

// reverse - diziyi tersten sıralar
let f = [1,2,3,4,5]
f.reverse()
console.log(f) // [5, 4, 3, 2, 1]

//EXERCISE
//Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM","Oracle", "Amazon"]
let lastCompany = companies[companies.length-1]
let lastSentence = "are big IT companies."
companies.pop()
let result = companies.join(', ') + " and " + lastCompany + lastSentence
console.log(result)
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazonare big IT companies.





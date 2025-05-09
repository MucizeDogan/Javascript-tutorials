/*

FONKSİYONLAR

*/

function sayHello(){
    console.log("hello")
}
sayHello()

function printFullName(){
    let firstName = "Mucize Doğan"
    let lastName = "Sarıkürkcü"
    let space = " "
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())


let dizi = [0,2,4,6,8]
function sumArrayValues(array){
    let total = 0
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}
console.log("Toplam", sumArrayValues(dizi))


function multiply(num1, num2 = 2){ //2. parametrenin default değeri 2
    return num1 * num2
}
console.log(multiply(10)) // 20
console.log(multiply(10,3)) // 30 




/*

EXERCISE

*/

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
let dizi2 = ["Mucize", "Doğan", "Sarıkürkcü", 24, 2000]
printArray(dizi2)
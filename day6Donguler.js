/*

DÖNGÜLER

*/

for(let i=0; i<=5; i++){
    console.log(i) // 0 1 2 3 4 5
}

let number = [5,10,15,20,25]
let sum = 0
for(let i = 0; i < number.length; i++){
    sum += number[i]
}
console.log("Toplam =",sum) // 15


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Türkiye']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toLocaleUpperCase())
}
console.log(newArr)
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]


/* for of loop 

Dizilerin indexleriyle ilgilenilmiyorsa diziler için for of döngüsü kullanılır. 
*/
let names = ["Mucize","Doğan","İrem","Mami","Ziya","Emre"]
for(let name of names){
    console.log("Name:", name)
}


// break
// döngüyü bitirmek için kullanılır

for(let i = 0; i<=7; i++){
    if(i==4)
        break;
    console.log(i) // 0 1 2 3 
}

// continue
// mevcut iterasyonu atlamak için kullanılır. yani bi nevi koşulu sağlayan olayı atla

for(let i = 0; i <= 5; i++){
    if(i == 4)
        continue;
    console.log(i); // 0 1 2 3 5   -> 4 yok
}




// EXERCISE

/*
Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
let pattern = '';
for (let i = 1; i <= 7; i++) {
  pattern += '#';
  console.log(pattern);
}


/*
Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
let i2 = 0 
let i3 = 0
console.log ("i", "i^2", "i^3")
for(let i = 0; i <= 10; i++){
    i2 = 0
    i2 = i * i
    i3 = 0
    i3 = i2 * i 
    console.log(i, i2, i3)
}


/*
Use for loop to iterate from 0 to 100 and print only even numbers
*/

for(let i = 0; i<=100; i++){
    if(i%2==0){
        console.log(i)
    }
}
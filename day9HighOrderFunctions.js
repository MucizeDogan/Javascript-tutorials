/*

HIGH ORDER FUNCTIONS

*/

/*  High Order fonksiyonları parametre olarak fonksiyon alan yada geriye fonksiyon döndüren fonksiyonlardır. Parametre olarak geçilen fonksiyonlara callback deniliyor. */


// Callback

function callBack (number){
    return number ** 2
}

function cube (callBack, number){
    return callBack(number) * number
}

console.log(cube(callBack,5)) // 125
// Buradaki mantık cube fonksiyonu içerisinde bir fonksiyon daha kullanıyor ve parametre olarak alıyor bunu callBack fonksiyonumuz parametre olan fonksiyon


// Returning function
// fonksiyonun içinde geriye fonskiyon döndüren


function a (s1) {
    function b (s2){
        function c (s3){
            return s1 + s2 + s3
        }
        return c
    }
    return b
}

console.log(a(5)(10)(20)) // 35
// Burada iç içe fonskiyonlarla bir yapı kuruldu yazdırırken a()()() diğer parantezlerde içdeki fonksiyonların parametreleri
// yukarıdaki iç içe fonksiyonları arrow function ile aşağıdaki gibi de yazabiliriz..

const a1 = s1 => {
    const a2 = s2 => {
        const a3 = s3 => {
            return s1 + s2 + s3
        }
        return a3
    }
    return a2
}
console.log(a1(10)(20)(30)) // 60


// forEach function
// Arrayleri içindeki elemanları tek tek ele almamızı sağlar. normalde bir for döngüsüdür ama parametre olarak fonksiyon olduğu için o da bir high order functiondur.

const numbers = [1,3,5,7,9]
let total = 0
numbers.forEach(number => total += number) // arrow function şeklinde yazımı
console.log(total)


// setInterval   ---> belli aralıklarla çalışacak olan (her 10 saniyede bir gibi)
// setTimeout    ---> tek seferlik çalışcak (10 saniye sonra çalış)
// javascriptte bazı olayları belli bir zaman aralığında çalıştırabildiğimiz gibi belli bir zamanda da çalışacak şekilde ayarlabiliriz.

function sayHello(){
    console.log("Hello!")
}

//setTimeout(sayHello, 2000) // 2 saniye sonra console a Hello yazdı.

//setInterval(sayHello, 2000) // her 2 saniyede bir hello yazdı

// yukarıdaki örnekleri console da karışmaması için kapattım

// şimdi setInterval i belirli bir süre sonra durmak için de clearInterval metodu var bunu da başka bir örnekle göstereyim. İleri tarihli bir şey yaptırlıcağı için setTimeout kullanılacak
const interval = setInterval(sayHello, 2000)
setTimeout(function(){
    clearInterval(interval) 
    console.log("interval fonksiyonu iptal edildi")
}, 10000) //// 10. saniyede interval değişkenini durdur.
// yukarıda yapılanla 5 kere hello yazdırılıyor ve durduruluyor



// map
// map forEach e benziyor yani izideki elemanları bir iterasyona sokuyoruz ama burada elemanları düzenleyebiliyoruz

let users = [
    {
        id: 1,
        name: "Mucize",
        age: 24
    },
    {
        id: 2,
        name: "İrem",
        age: 23
    },
    {
        id: 3,
        name: "Mami",
        age: 25
    }
]
 // diyorum ki maple id si 2 olanın name i artık ayşe olsun
 users = users.map(user => { // user ile her bir user ı ele almış oluyoruz
    if( user.id === 2){
        user.name = "Ayşe"
    }
    return user
 }) 
 console.log(users)
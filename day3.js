/* ATAMA OPERATÖRLERİ

x += y    -----   x = x + y -> - * / de aynısı
x %= y    -----   x = x% y

*/

/* KARŞILAŞTIRMA OPERATÖRLERİ

== 2 değerin aynı olup olmadığını karşılaştırır.

=== 2 değerin aynı olup olmadığını ve aynı veri türünde olup olmadığını karşılaştırır. (denk mi)

*/

console.log(5 == '5') // true
console.log(5 === '5') // false

// Ternary Operations

let isRaining = true
isRaining
    ? console.log('weather is raining')
    : console.log('weather is NOT raining')
// ? den sonra true ise yapmak istediğimizi : den sonra false ise


// WINDOW METHODS
// alert(message)

alert('Merhaba bu mesaj alert method deneme mesajıdır.')


//prompt('required text', 'default value')

let a = prompt('Bir sayı giriniz', 1)
console.log(a)


//confirm()   ---> Onaylama

confirm('Emin misiniz?') //day3.html sil butonuna bak


/*
    DATE OBJECT
    let now = new Date()    ---> date objesini oluşturuyoruz
    now.getFullYear()  ---> 2025
    now.getMonth()+1   ---> (0-11 arasında olduğu için +1 vermeliyiz)     

*/
let now = new Date()  
console.log(now)  // Mon Apr 28 2025 21:07:45 GMT+0300 (GMT+03:00)
console.log(now.getMonth() + 1)
console.log(now.getDate())






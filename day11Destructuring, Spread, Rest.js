/*

Destructuring and Spread

*/

// Destructuring
// Arrayde bulunan elemanların bazılarını veya tamamını diziden çıkarıp değişken(ler)e atma diyebiliriz. Her bir eleman bir değişkene atanıyor... indexe göre

const numbers = [10,11,12]

const [number1, number2] = numbers

console.log(numbers[0]) // 10
console.log(number1) // 10

console.log(numbers[1]) // 11   
console.log(number2) // 11



const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'], // fullStack dizisinin 1. elamanı
  ['Node', 'Express', 'MongoDB'] // 2. elamanı
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)

const [[html]] = fullStack    
console.log(html) // HTML  // dizinin ilk elmanı da dizinin onun içinden de ilk elemanı aldım.

// bir değeri es geçmek istersek , , kullanabiliriz

const [[html2, , js]] = fullStack
console.log(html2, js) // HTML JS --> CSS i atladık.


// Dizideki bütün elemanları tek tek değişkene atamayız. İhtiyacımız olanlarıdeğişkene atıp gerikalanını dizi halinde tutabiliriz. [num1,num2,num3, ...rest] diyerek

const [num1, ...otherNumbers] = numbers
console.log(num1, otherNumbers) // 10 (2) [11, 12] --> ilkelemanıdeğişkene aldık. Kalan elemanları rest dizisine aldık.


// iterasyonda

const countries = [
    ['Finland', 'Helsinki'], 
    ['Sweden', 'Stockholm'], 
    ['Norway', 'Oslo'],
    ['Türkiye', 'Ankara']
]

for (const [country, city] of countries) { 
console.log(`Ülke: ${country}, Başkent: ${city}`)
}

for(const country of countries){
    console.log(country[0], country[1])
}

// Yukarıdaki 2 for da aynı sonucu vermektedir.. 1. destructiring yaparak 2.si ise normal



// Objeleri Destruct etme
// Objelerdeki değerleri bir değişkene atmak için değişkenin ismi o değerin key i ile aynı olmak zorundadır.


const user = {
    firstName: 'Mucize Doğan',
    surname: 'Sarıkürkcü',
    age: 24,
    pets:{
        cats: false,
        dogs: ['Lale']
    }
}

const {firstName} = user
console.log(firstName) // Mucize Doğan

//Dışarı çıkartırken objedeki key inadı olmasılazımama sonradan değiştirebiliyoruz,
const {surname: soyad} = user
console.log(soyad)

const {pets} = user
console.log(pets)

const {pets: {cats,dogs: kopekler}} = user
console.log(kopekler)



// Referans almadan bir dizi kopyalama
const nums = [1,3,5]
nums2 =[... nums]
nums2.push(7)
console.log(nums2)
console.log(nums)
// Eğer = leyerek almış olsaydım nums a da push edecekti çünkü referans alıyorr.

// Aynı şey obje kopyalamada da geçerli 
const user2 = {...user}
console.log(user2)


// Şimdi şöyle bir senaryo var aşağıdaki gibi bir dizimiz var başına 0 sonuna 6 koymak istiyoruz
const sayilar = [1,3,5]

console.log(
    [0, ... sayilar, 6]
) //  [0, 1, 3, 5, 6]


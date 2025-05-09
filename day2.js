// Non-Primitive Data Types (İlkel Olmayan veri tipleri)
// Dizilerin değerleri değiştirilebilir. örnein string de let word = 'Mucize' ise word[0] = 'K' dediğimizde M -> K olmuyor.

let nums = [1,2,3]
console.log(nums)

nums[0] = 10

let words = ['Mucize', 'Doğan', 'Sarıkürkcü']
console.log(words)

words[0] = 'Ali'
console.log(words)

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

// Diziler, fonskisyonlar yada nesneler birbirleriyle karşılaştırılamaz(nums[1,2,3] == nums2[1,2,3 ) false döner. Ama aşağıdaki şekilde dinin değerlerini değişkene atarsak karşılaştırılabilir.

let numbers = nums
console.log(numbers == nums)

// NOT
// `` --> baclink ile string içinde ${} şeklinde istediğin başka değişkeni (özellikle int değerler için) kullanılabilir

let deneme1 = `Mucize Doğan ${numbers}`
console.log(deneme1)

let a = 5
let b = 12
console.log(`${a} ile ${b} nin toplamı ${a+b} dir`)


//.split() --> split metodu string bir ifadeyi parçalar ve diziye alır.

let string = 'Mucize,Doğan,Sarıkürkcü'
let strinName  = string.split(',')
console.log(strinName)


//.includes() --> string in içeriside içerip içermediğini sorarız bool değer döner

let include = 'Beşiktaş Türkiye\'nin en iyi takımıdır'
console.log(include.includes('Beşiktaş'))


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* Changing Data Types (Casting)    --> parseInt(), parseFloat(), Number(), str()
    + ile de string i number a çevirebiliriz
*/

let stringNumber = '5'
console.log(typeof +stringNumber) // --> parseInt() veya Number() yapmışız gibi kısayolu



//Practice --> Access the 'JavaScript' string characters using a random number.

let java = 'JavaScript'
let splitJava = java.split('')
console.log(splitJava)
let length = splitJava.length
let num = Math.floor(Math.random() * length);
console.log(java[num])



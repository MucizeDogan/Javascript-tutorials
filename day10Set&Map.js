/*

SET & MAP

*/

// SET ve map array ve object e benzerler. Set'in arraydan farkı set de her bir eleman unique olmalı... Yani aynı elemandan 2 kez eklenemez
// MAP in Object den en büyük farkı Object de keyleri sadece string olarak oluşturabiliyoduk; Map de herhangi bir veri türü ile oluşturabiliyoruz.


//SET
//Boş bir set oluşturma
const names = new Set()
console.log(names)

// Bir arrayden set oluşturma
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages) // English , Finnish, French, Spanish

// iterate edilebilir
for(let language of setOfLanguages){
    console.log("Dil: ", language)
}

//.add ile set e ekleme yapılabilir.. En büyük avantajı tekrar eden elemanı eklemiyorrr.
// Örneğin bir dizimizin içinde kendini tekrar eden elemanları kaldırmak tekrar bir dizi olarak istersek
const names2 = ["Mucize", "Doğan", "İrem", "Doğan", "Mucize","Ali"];
console.log([... new Set(names2)]) // Mucize Doğan İrem Ali


//dizide kaç tane kendini tekrar eden eleman var bunu da gösterebiliriz. languages dizisine bak yukarıdaki
const counts = []

for(let l of setOfLanguages){
  const filteredLang = languages.filter(lng => lng === l) // Aynı olanları bir diziye alıyor
  counts.push({
    language: l,
    count: filteredLang.length
  })
}
console.log(counts)



// MAP
// Object gibi demiştik... İstediğimiz bir veri türünden key verebilyioruz.. Aslında array in içinde ki obje oluyo
// Boş bir map oluşturma
const map = new Map()
console.log(map)
map.set('name', 'Mucize') // dizinin 0. indexindeki eleman içerisi object
map.set("age", 25)
map.set(1, "num1")
map.set(true, 'bool1')
map.set(false, 'bool2')
console.log(map)
console.log(
  map.get(1) // num1 
)
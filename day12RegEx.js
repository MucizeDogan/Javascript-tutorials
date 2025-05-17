/*

REGULAR EXPRESSIONS

*/

// RegEx
// Farklı veri türlerinde bizim desenimiz olup olmadığını kontrol etmel için kullanılıyor.
// RegEx; bilinmeyeni bulmak diyebiliriz... örneğin bir stringin içinden sayıları çıkaran bir desen oluşturabilirz. Yada dahageliştirip yıl olan yani hem sayı hem de 4 hane
//olanları çıkaranbir desen oluşturabiliriz.
// RegExi kullanmak için RegEx class ından türetebiliriz yada  // (2 tane //) lada tasarım deseni oluşturabiliyoruz.
// 2 tane parametre alabilir. 1.si zorunlu aranan desen 2. si flag (g,i,m,s,u,y)

// Flags
// i : büyük küçük harf farketmesizin getirir.
// g : g olmadan kullanılırsa aranan şey 1 den fazlakez geçiyorsa ilk bulduğunu döner. g kullanılırsa hepsini döner


// Regexp Sınıfı Kullanarak Desen Oluşturma

let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)
let regex = /love/gi //bu da yukarıdakinin aynısı


// RegEx methodları

// test(): içerisinde geçip geçmediğini kontrol eder. geçiyorsa true döner. (.contains e benzerr)
let testingSentence = 'I love you so much bro. You fcking idiot'
console.log(
    regex.test(testingSentence) // true
)

// prompt tan alınan değerde salak yazıyorsa alert göster
/*
let comment = prompt('Yorumunuzu yazınız...')
let word = /salak/i // i flag i ile büyük küçük harf farketmeksizin kontrol sağlıyoruz..
if(word.test(comment)){
    alert('Yasaklı kelime kullandınız. Lütfen yazdığınız yoruma dikkat edin.....!!!!')
}
*/
// promptan sürekli çıkmasın diye yorum satırına aldım :)



// match(): eşleşenleri dizi olarak döner.  Eşleşmeyen bir şey yoksa null döner..

let str = ' I love javascript and i love .NET'
console.log(
    str.match(/love/i), // ['love', index: 3, input: ' I love javascript', groups: undefined]  --> bu şekilde br array dönüyor
    str.match(/love/ig) // ['love', 'love']
)


// replace() : Arama desenine uyan şeyi başka bir şeyle değiştirir.
// Aşağıdaki txt cümleciğinde Python yada python yazanı JavaScript ile değiştir diyoruz. /Python|python/g bu fade global olarak hem ilk yazdığımı hem 2.yazdığımı ara demek.
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')  // --> /(P|p)ython/g dediyebilirizzz ;)
console.log(matchReplaced) //2 tane python geçiyordu ikisinide JavaScript e çevirdik.


// KARAKTER KÜMELERİ
/*
[]: Bir karakter kümesi
    [a-c], a veya b veya c anlamına gelir
    [a-z], a'dan z'ye herhangi bir harf anlamına gelir
    [A-Z], A'dan Z'ye herhangi bir karakter anlamına gelir
    [0-3], 0 veya 1 veya 2 veya 3 anlamına gelir
    [0-9], 0'dan 9'a herhangi bir sayı anlamına gelir
    [A-Za-z0-9], a'dan z'ye, A'dan Z'ye, 0'dan 9'a herhangi bir karakter anlamına gelir
*/

let str2 = "Ben 24 yaşındayım. 2000 yılında Afyonkarahisar'da doğdum."
console.log(
    str2.match(/[0-9]/g) // ['2', '4', '2', '0', '0', '0']
)

/*
\: özel karakterlerden kaçmak için kullanılır
    \d anlamı: dizenin rakamlar (0-9 arası sayılar) içerdiği yerde eşleşme
    \D anlamı: dizenin rakamlar içermediği yerde eşleşme
*/

console.log(
    str2.match(/\d/g) // ['2', '4', '2', '0', '0', '0'] // yukarıdaki ile aynı sonucu alırız
)

console.log(
    str2.match(/\D/g) // sayılar hariç geri kalan bütün karakterleri
)


// ^ : bununla başlar demek.





/*

KOŞULLAR

if else yapısını biliyorsun C# ile aynı... Sana switvh case i göstereceğim o da aynı sadece break in sonuna; koymuyorsun :)
*/

let value = prompt("5 + 2 = ?")

switch(value){
    case '5':
        console.log('5 Yanlış Cevap')
    break

    case '6':
        console.log('6 Yanlış Cevap')
    break

    case '7':
        console.log('7 DOĞRU CEVAP')
    break

    default:
        console.log('Yanlış Cevap')

}


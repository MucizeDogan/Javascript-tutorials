/*

NESNELER

*/

// Neseneler genelde const ile tanımlanıp {} gerektirir

const user = {} // Bu bir boş nesne oluşturma örneğidir. Değişkene {} bu verilirse nesne oluyor  
console.log(user)

// Değeriyle birlikte bir object oluşturma aşağıdaki gibi
const person = {
    firstName: 'Mucize Doğan',
    lastName: 'Sarıkürkcü',
    age: 250,
    country: 'Türkiye',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
    ],
    isMarried: true,
    deneme: {
        deneme2: 10,
        deneme3: "deneme3"
    }
  }
  console.log(person)


  // Nesneden değerlere erişmek
  // key-name bir kelimeden oluşuyorsa . kullanarak erişebiliyoruz
  console.log(person.firstName) // Mucize Doğan

  // yukarıdaki object içinde yer alan deneme içindeki deneme2 ye erişmek için ise 
  console.log(person.deneme.deneme2)

  // başka bir erişme yöntemi ise [''] içinde key-name verilerek erişilebilir
  console.log(person['city'])
  
  const person2 = {
    firstName: "Ali",
    lastName:  "Veli",
    brothers:[
        {
            firstName: "Mehmet",
            lastName: "Kara"
        }
    ]
  }
  // yukarıda obje içinde array, array içinde obje var.
  console.log(person2.brothers) // bu şekilde arraye ulaşıyoruz.
  console.log(person2.brothers[0].firstName) // bu şekilde arrayin 0. indexi içindei nesnedeki firstName e ulaşabiliyoruz



  // Nesne içinde method oluşturma
  const person3 = {
    firstName: "Oğuzhan",
    lastName:  "Karakaya",
    brothers:[
        {
            firstName: "Adil",
            lastName: "Meşeci"
        }
    ],
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
  }

  console.log(person3.getFullName()) // burada Oğuzhan Karakaya dönüyor

  // Obje içersindeki bir key in valuesini değiştirebiliriz..
  person3.firstName = "Artık Oğuzhan değil"
  console.log(person3.firstName)
  console.log(person3) // burada da firstname "Artık Oğuzhan değil" oldu


// bu noktadan sonra en üstteki person objesine odaklan

  // Obje ye yeni bir value nasıl eklenir?
  person.skills.push("Angular") // --> person3 değil person baştaki nesne. --> skills arrayine yeni bir eleman ekledim
  console.log(person.skills[person.skills.length-1]) 

  // burada person objesine bir metod eklenecek. Bu metod un işlevi skill deki verileri getirmek. Ayrıca sondaki elemanı bölüp araya and eklemek
  person.getFullName = function(){ // bu person objesine yeni bir metod ekler
    return `${person.firstName} ${person.lastName}`
  }
  person.title = 'Developer' // person objesinde title diye bir key-name yok bu yeni bir key dir
  person.getPersonInfo = function(){
    let skillsWithoutLastOne = this.skills.splice(0, this.skills.length - 1).join(', ')
    let lastOne = this.skills[this.skills.length-1]
    let lastSkill = this.skills.at(-1) // bir üst satırdakinin aynı işlevi
    let skills = `${skillsWithoutLastOne} and ${lastSkill}`
    let fullName = person.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${this.skills}`
    return statement
  } 

  console.log(person.getPersonInfo())


  // Object Methods
  /* Object.assign: orjinal objeyi bozmadan kopyalar. */

  let newPerson = person // bu referanslı kopyalama olur
  console.log(person) // firstName = Mucize Doğan
  newPerson.firstName = "Murat"
  console.log(person) // firstName = Murat
  // burada baktığımızda ben newPerson da firstName i değiştirdim ve person ı yazdırdım baktığımızda person daki firstName de Murat oldu ... Bu referanslı kopyalama olur.

  let newPersonNew = Object.assign({}, person)
  console.log(person) // firstname Murat
  newPersonNew.firstName = "Ayşe"
  console.log(person) // burası hala Murat
  // Yani orijinal obje değişmemiş oldu 

  
  /* Object.keys: Objedeki keyleri almamızı sağlar  */
  console.log(Object.keys(person))

  /* Object.values: Objedeki value leri almamızı sağlar  */
  console.log(Object.values(person))

  //Getting object keys and values using Object.entries()
  //Object.entries:To get the keys and values in an array
  //Object.entries() bu objecti arraye çevirir



  /*

  EXERCISES

  */

  /*

2-Count logged in users, count users having greater than equal to 50 points from the following object.

3-Find people who are MERN stack developer from the users object

4-Set your name in the users object without modifying the original users object

5-Get all keys or properties of users object

6-Get all the values of users object

7-Use the countries object to print a country name, capital, populations and languages.
*/

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
console.log(users)


//2-Count logged in users, count users having greater than equal to 50 points from the following object.
  const usersArray = Object.entries(users)
  console.log(usersArray)
  let count = 0
  let unloginCount=0
  let greater50count = 0
  for(let i = 0; i < usersArray.length; i++  ){
    if(usersArray[i][1].isLoggedIn == true){
        count++;
    }else{
        unloginCount ++;
    }
    if(usersArray[i][1].points >= 50){
        greater50count ++;
    }
  }
  console.log("Giriş Yapanların sayısı ", count)
  console.log("Giriş yapmayanların sayısı ", unloginCount)
  console.log("50 puan ve fazlasına sahip kullanıcı sayısı ", greater50count)


  function findMernDevelopers(users) {
    const MongoDB = "MongoDB";
    const Express = "Express";
    const React = "React";
    const Nodejs = "Node";
  
    const usersArray = Object.entries(users);
  
    for (let i = 0; i < usersArray.length; i++) {
      const userSkills = usersArray[i][1].skills;
      if (
        userSkills.includes(MongoDB) && userSkills.includes(Express) && userSkills.includes(React) && userSkills.includes(Nodejs)
      ) {
        console.log("MERN Developer is:", usersArray[i][0]);
      }
    }
  }
  
  findMernDevelopers(users);

  




  
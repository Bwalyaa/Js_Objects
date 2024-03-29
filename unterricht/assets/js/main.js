// const input = document.querySelector("#myInput")


// ein object ist immer mit einer geschweiften klammer 
const user = {
    name: "Jim",
    alter: 60,
    beruf: "Verkäufer",
    hobbies: ["zocken", "lesen", "sport machen"],
    adresse: {
        stadt: "Hamburg",
        straße: "mustermann",
        plz: "2000"
    },
    auto: false
}

console.log(user.alter);
console.log(user.beruf);
console.log(user.adresse.stadt);

console.log(user.hobbies[1]);

console.log(user["alter"]);

user.hobbies.forEach((hobby) => console.log(hobby))

delete user.auto

user.auto = "Tesla"

// du kannst neuue eigenschaften hunzufügen ohne es vorher deklariert zu haben 
user.verheiratet = true

user.clubhouse = "Golf Club"

const admin = {}

admin.name = "Bwalya"
admin.job = "Microsoft Developer"
admin.age = 30;
admin.rights = true

console.log(admin);

// Methoden in Objekten

const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    multi: (a, b) => a * b
}

console.log(calculator.add(2,5));
console.log(calculator.sub(2,5));
console.log(calculator.multi(2,5));

const spieler = {
    name: "Ironman",
    class: "Hero",
    level: 100,
    spell: ["heilen", "fliegen", "lazer"],
    login: () => {
        console.log(spieler.name + " " + "ist eingeloggt");
    },
    castSpell: function () {
        console.log("castigSpell"+ " " + this.spell[0]);
    },
    logOut(){

    }
}

console.log(spieler);
spieler.login()
spieler.castSpell()

// Objekten Methoden => Object.keys()
// Object.kexs() gibt mir nur die keys zurück
const keysVomSpielerObject = Object.keys(spieler)

console.log(keysVomSpielerObject);

keysVomSpielerObject.forEach((key)=>{
    console.log("key", key);
    const myValue = spieler[key]
    console.log("myValue", myValue);
})

// Object.entries()
// Object entries erstellt uns ein Array
const entriesObjectDieKeysUndValuesAlsArray = Object.entries(spieler)

console.log(entriesObjectDieKeysUndValuesAlsArray);

// bei Arrays hatten for-of loop

//hier brauchen wir For-In

for (let akey in spieler) {
    console.log(akey);
}


const grades = {
    math: 4,
    sport: 1,
    informatik: 2,
    chemie: 1
}

let summe = 0;

for (let fach in grades) {
    summe += grades[fach]
}


console.log(summe);

console.log(grades.length);

const gradesLength = Object.values(grades).length

console.log(gradesLength);

const durchsnitt = summe / gradesLength

console.log(durchsnitt);



// spread Operator

const user2 = {
    name: "Hannah",
    age: 30,
}

console.log(user2);

const updatedUser = { ...user2, age: 33, email: "hannah@gmail.de" }

console.log(updatedUser);



// bs2

const user1 = {
    name: "Alice",
    age: 30
}

const mehrInfoÜberUser1 = {
    adresse: {
        street: "123 MainSt",
        city: "Wonderland"
    }
}

console.log(user1);
console.log(mehrInfoÜberUser1);

const user1mitMehrInfoÜberUser1zusammenführen = { ...user1, ...mehrInfoÜberUser1 }

console.log(user1mitMehrInfoÜberUser1zusammenführen);

const einArrayVomUnserObject = Object.entries(user1mitMehrInfoÜberUser1zusammenführen)

console.log(einArrayVomUnserObject);


const someArray = [1, 2, 3, 4, 5]
console.log(someArray);

const reversedArray = [...someArray].reverse()
console.log(reversedArray);

const nochmalKopie = [...reversedArray].shift()

console.log(nochmalKopie);




const movies = [
    {

    },
    {

    }, {

    }
]


let author = {
    firstName: "Kim",
    lastName: "Mustermann",
    book1: {
        nameBook: "Der Schatz",
        price: {
            ebook: {
                dollar: 19.99,
                euro: 20,
            },
            hardcover: {
                dollar: 29.99,
                euro: 20,
            },
            paparback: {
                dollar: 19.99,
                euro: 20,
            }
        }
    },
    book2: {
        nameBook: "mein König",
        price: {
            ebook: {
                dollar: 12.99,
                euro: 10,
            },
            hardcover: {
                dollar: 29.99,
                euro: 20,
            },
            paparback: {
                dollar: 19.99,
                euro: "20$",
            }
        }
    }
}

console.log(author.book2.price.hardcover.dollar);

author.book1.nameBook = "das Gold"



const dollarZeichenWegMachen = author.book2.price.paparback.euro.replace("$", "")

console.log(dollarZeichenWegMachen);

console.log(Number(dollarZeichenWegMachen));

console.log(author);



const gegner = {
    name: "rambo",
    fähigkeiten: ["boxen", "arm drücken", "karaten"],
    logIn: () => {
        console.log(`${gegner.name} ist eingeloggt`);
    }
}

// gegner.logIn()


const myBtn = document.createElement("button")

document.body.appendChild(myBtn)

myBtn.textContent = "gegner"

// console.log(myBtn);

myBtn.addEventListener("submit", gegner.logIn(() => { return false }))
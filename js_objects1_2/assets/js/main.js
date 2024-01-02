const person = {
    name: "Gustav",
    alter: 30,
    sagNameAlter: () => {
        alert(person.name + " " + person.alter)
    }
}

console.log(person.name);
console.log(person.alter);

person.sagNameAlter()
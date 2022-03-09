console.log("\n Zadanie 1 \n")

const name = "Jan"
const number = 22
const isOpen = true
const stringBoolean = "true"
const stringNumber = "100"

console.log("\n Zadanie 2 \n")
const divisionResult = 10 % 4
console.log(divisionResult)

const personName = "Tomasz"
const personAge = 33
const sentence = personName + " ma " + personAge + " lata"
console.log(sentence)

const firstName = "jan"
const lastName = "kowalski"
console.log(firstName + " " + lastName)
console.log("jan kowalski")

console.log("\n Zadanie 3 \n")

let sum = 0
sum += 1
sum += 2
console.log("wynik " + sum)

console.log("\n Zadanie 4 \n")

// a) 3 elementową z cyframi od 1 do 3
const numbers = [1, 2, 3]

// b) 3 elementową z markami aut
const cars = ["Bugatti La Voiture Noire", "Pagani Zonda HP Barchetta", "Rolls Royce Sweptail"]

// c) 3 elementową składającą się z wartości true, false i true
const bolleans = [true, false, true]

// d) pustą tablicę
const emptyTable = []

// e) składającą się z 5 dowolonych wartości z pomieszanymi typami
const crazyTable = ["jeden", "2", 3, 4.0, [5]]

// f) zrób console.loga w którym z powyższej tablicy wyświetlasz wartość która jest druga 
console.log(crazyTable[1])

// g) *** Jaka właściwość i jak użyta słuzy do wyświetlenia długości tablicy? 
const tableLength = cars.length

// h) *** Czy wiesz jak stworzyć pustę tablicę ? dodać do niej losową wartość i wyświetlić 
let table = []
let randomValue = Math.random();
table.push(randomValue)
console.log(table)

// i) *** Stwórz tablicę z obiektami, które będą zawierały imię, nazwisko i wiek osoby i wyświetl imię drugiej osoby z tej tablicy
const person1 = {
    firstName: "Adam",
    lastName: "Nowak",
    age: 20
}

const person2 = {
    firstName: "Anna",
    lastName: "Kowalska",
    age: 30
}

const person3 = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 40
}

const persons = [person1, person2, person3]
console.log(persons[1].firstName)

// j) *** stwórz zmienną z wartością = 2 czy da sie tą zmienną umieścić w deklaracji tablicy tak aby uzyskać tablicę const arr = [2] ? TAK
const numberTwo = 2
const arr = [numberTwo]
console.log(arr)

console.log("\n Zadanie 5 \n")

// a) pusty obiekt
const obiect = {
}

// b) obiekt o nazwe person zawierający klucz name i jego wartość 'Iza'
const person = {
    name: "Iza"
}

// c) obiekt o nazwe personDetails zawierający name, lastName, age, drivingLicence
const personDetails = {
    name: "Jan",  
    lastName: "Kowalski", 
    age: 40, 
    drivingLicence: false
}

// d) z obiektu personDetails zrób console.log samego wieku
console.log(personDetails.age)

// e) zrób console.log całego obiektu
console.log(personDetails)

// f) stwórz obiekt, który zawiera marke, kolor, rok produkcji auta oraz tablicę z latami w których samochód był sprzedany 
const car = {
    brand: "Jan",  
    color: "Kowalski", 
    yearOfProduction: 40, 
    saleDates: [2000, 2010, 2020]
}

console.log("\n Zadanie 5 \n") 

// a) typ prosty - wskazuje na wartość
const type1 = 10
console.log(typeof type1)
// typ referencyjny - wskazuje na miejsce w pamięci 
const type2 = [1, 2, 3]
console.log(typeof type2)

// b) Stwórz obiekt person zawierający dane takie jak imie, nazwisko, wiek, posiadanie prawa
personDetails.isDrunk = true

if (personDetails.age >= 18 && personDetails.drivingLicence && !personDetails.isDrunk) {
    console.log("Person can drive a car")
} else {
    console.log("Person cannot drive a car")
}

// c) aby móc w bardzo łatwy sposób użyć kluczy w nim zawartych
const car1 = {
  name: "mustang",
  productionYear: 2020,
  color: "red"
}
const result = "Moje auto to " + car1.name + " i zostało wyprodukowane w roku " + car1.productionYear
console.log(result)

// d) Skróć zapis kodu jak najbardziej się da bez użycia ternary operatora i z uzyciem

const isAdult = true

if(isAdult) {
  console.log("Możesz kupić alko")
} else if(!isAdult) {
  console.log("Nie możesz kupić alko")
}

console.log(isAdult ? "Możesz kupić alko" : "Nie możesz kupić alko")

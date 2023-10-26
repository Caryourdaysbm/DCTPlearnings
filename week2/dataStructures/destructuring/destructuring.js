// Destructuring an Array
let names = ["Oluwakayode","Samuel", "Adeyemi"]

let [firstname, middlename, lastname] = names

console.log(firstname)
console.log(lastname)

//get the firstname

let [name1] = names
console.log(name1)

//get the middlename
// Get the middle name
let [, name2] = names
console.log(name2) //samuel


//get the lastname
let[, ,name3] = names
console.log(name3)

// Use the rest operator to get the rest of the names
let [name4, ...restofthenames] = names
console.log(name4)//Oluwakayode
console.log(restofthenames) // ['Samuel', 'Adeyemi']



// Destructuring an Object
let settings = { theme: "Dark", fontSize: 20, fullscreen: true}
let {theme, fontSize, fullscreen} = settings
console.log(theme, fontSize, fullscreen)

// Get only the theme, and assign it to a new variable
let {theme: newTheme} = settings
console.log(newTheme) //Dark

// Use the rest operator to get the rest of the settings
let {theme: theme1, ...restofsettings} = settings
console.log(theme1)
console.log(restofsettings)

// Destructuring in a function
function getUserInfo({ name, age }) {
    console.log("My name is:", name)
    console.log("My age is:" , age)
}

const user = {
    name: "john",
    age: 34
}

console.log(getUserInfo(user))
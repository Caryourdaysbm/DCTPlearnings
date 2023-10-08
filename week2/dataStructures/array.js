// array
    // create an array
    // let users = new Array(); //u using class method

    let users = ["mary", "Yemi", 20, 25.22, { theme: "dark" }]; //array is not a primitive type

    // console.log(users)
    // console.log(users.length)

    // create an animals array 
    // let animals = ["Lion", "Tiger", "Cat"]

    // get values from array

    // console.log(animals[0])
    // console.log(animals[2])

    //update an element from array
    // animals[2] = { name: "Goat", type: "herbivores" , }
    // console.log(animals)

// Array methods
    // add a value to the end of aray
    // animals.push("turkey")
    // console.log(animals)
    
    // // remove an element from end of an array
    // animals.pop()
    // console.log(animals)

    // // remove an element from front of an array
    // animals.shift()
    // console.log(animals)

    // // Add an element to the beginnig of an array
    // animals.unshift("snake")
    // console.log(animals)

    // // Get the index of a value
    // console.log(animals.indexOf("Cat"))

    // // Get a Slice of the array
    // console.log(animals.slice(2, 4)) // it starts from the first number but doesn't include the last

    // //Get a copy of the array
    // let copyOfslice = animals.slice()
    // console.log(copyOfslice)

    // // Reverse the array
    // console.log(animals.reverse())


let animals = ["Lion", "Tiger", "Cat"]
// // iterate over an array with for..of
// for (let animal of animals){
//     console.log(animal)
// }

// for..of loop is used to loop over iterable properties of an object
// for..in wtatement iterates over all enumerable(like object) properties but in case of array, looping over array, you will not get the value but index

// // Iterate over an array with for..in
// for (let index in animals){
//     console.log(`The index is: ${index} and the value is: ${animals[index]}`)
// }

// // Iterate over an array with forEach
// animals.forEach((animal) => {
//     console.log(`This animal is: ${animal}`)
// })

// Iterate over an array with map
let usernames = ["James", "John", "Peace", "Favour"]
let usernamesInUpperCase = usernames.map((username) => {
    // do the transformation
    console.log(username)
    const transformedUsername = username.toUpperCase()
    return transformedUsername

})
console.log(usernamesInUpperCase)

// // Iterate over the array with filter
// let population = [200, 100, 30, 4, 5, 60]
// let populationGreaterThan30 = population.filter((population) => {
//     if (population > 30 ){
//         return population
//     }
// })

// console.log(populationGreaterThan30)

// 2D Array
let matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matrix[1][2]) //6







// MAP
let userMap = new Map()
// //object can take a diff type of string but this object must be a string datatype eg
// let user = {
//     name: "Kay",
//     age: "24",

// }//you cant use object or boolean as a key on map
// //map is a collection of keyed data items, just like an object. But the main difference is that Map allows keys of any type

// Add a value to the map
userMap.set(1, "this is an int key")
userMap.set(true, "this is a boolean key")

let mary = {name: "Mary", age:20 }
userMap.set(mary , "An object key")

console.log(userMap)

// //display the key in a map
// console.log(userMap.keys)

// // Display the values
// console.log(userMap.values)

// // Display the entries
// console.log(userMap.entries)

// // Display the size
// console.log(userMap.size)

// // Check if a key exists
// console.log(userMap.has(1))

// // Remove key
// userMap.delete(1)

// Iterate over the map
for (let entry of userMap){
    console.log(`the key is: ${JSON.stringify(entry[0])} and the value is: ${JSON.stringify(entry[1])} `)
}

// Convert map to Array
let mapArray = Array.from(userMap)
console.log(mapArray)

// Conver map to object
let mapObject = Object.fromEntries(userMap)
console.log(mapObject)

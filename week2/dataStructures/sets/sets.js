let theSet = new Set()

let mat = {name: "Mary", age: 20}
let John = {name: "John", age: 24}

theSet.add(mat)
theSet.add(John)
// theSet.add(mary) //Won't get added again
console.log(theSet)

// Get the size of the set
console.log(theSet.size) // 2

// Check if a value is in the set
console.log(theSet.has(mat)) // true

// Remove a value from the set
theSet.delete(mat)
console.log(theSet.has(mat)) // false

// Iterate over the set
for (let user of theSet) {
    console.log(user) 
}

// Convert the set to an array
let usersArray = Array.from(theSet)
console.log(usersArray) // [{name: "John", age: 23}, {name: "Mary", age: 20}]
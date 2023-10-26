// Creating a new element

// Create element node
newElement = document.createElement("span")

// Add content and style to the new element
newElement.innerText = "I added this element"
newElement.style.color = "red"

// // Insert the new element to the end of body element
// document.body.append("newElement")

// // Insert the new element to the beginning of body element
// document.body.prepend("newElement")

// Insert the new element after the first table element
document.body.insertBefore(newElement, document.querySelectorAll("table")[1])

// Insert element in specific position using insertAdjacentHTML
const secTable = document.querySelectorAll("table")[1]
secTable.insertAdjacentHTML('afterbegin', "<h1>I used adjancentHTML</h1>")
// Other variants are "beforebegin", "afterbegin", "beforeend", "afterend"

// Removing an element
const elemToRemove = document.querySelector("h1")
elemToRemove.remove()

// Clone an element
const elementToClone = document.querySelector("h1")
const clonedElem = elementToClone.cloneNode(true)
document.body.append(clonedElem)
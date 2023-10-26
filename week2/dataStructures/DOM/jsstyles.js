// Set style of an element
// Access and set all styles of an element, by calling .style property

const elementToStyle = document.querySelector("h1")
elementToStyle.style.fontSize = '30px'
elementToStyle.style.color = "green"
elementToStyle.style.backgroundColor = "orange"

// Set Class of an element
// Access and set all classes of an element, by calling .classList property
const elementToClass = document.querySelector("h1")
elementToClass.classList.add("my_class") // Add a class to an 
elementToClass.classList.remove("my_class") // Remove a class from an element



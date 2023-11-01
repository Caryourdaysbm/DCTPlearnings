// // A promise call cleanly handle multiple asynchronous operations.

// xhr callback method
// function getData(url) {
//     return new Promise((resolve, reject) => {
//         if (!url) {
//             reject("No URL provided");
//         }

//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.send();
//         xhr.onload = function () {
//             if (xhr.status === 200) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.status);
//             }

//         };
//     });
// }

// the async and await method. shorter
async function getData(url) {
    const response = await fetch(url);
    const result = await response.json()
    return result
}


async function getAllData(url){
    const result = await getData(url);
    console.log("Success1", result);

    const result2 = await getData("https://reqres.in/api/unknown/2");
    console.log("Success2", result2);

    const result3 = await getData("https://reqres.in/api/https://reqres.in/api/users/2");
    console.log("Success2", result3)

    const result4 = await getData("https://reqres.in/api/unknown");
    console.log("Success 4", result4);
}


const url = prompt("Enter a url");
getAllData(url)
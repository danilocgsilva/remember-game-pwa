import { createTermContent } from './pages/create_term.js'

const contentAreaElement = document.getElementById('contentArea')

let db
const request = window.indexedDB.open("memorygame", 3);
request.onerror = (event) => {
    alert("Got an error!!")
}
request.onsuccess = (event) => {
    alert("Success on db request!!")
    db = event.target.result
    db.onerror = (dbevent) => {
        alert(`Some error o data manipulation: ${dbevent.target.errorCode}`)
    }
}
request.onupgradeneeded = (event) => {
    const dbUpgrading = event.target.result
    const objectStore = dbUpgrading.createObjectStore("name", {keyPath: "myKey"})
}

document.getElementById('createTerms').addEventListener("click", function () {
    contentAreaElement.innerHTML = createTermContent
    
})

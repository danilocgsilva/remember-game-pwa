import { createTermContent } from './pages/create_term.js'

const contentAreaElement = document.getElementById('contentArea')

let db
let objectStore
const request = window.indexedDB.open("memorygame3", 1);
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
    db = event.target.result
    objectStore = db.createObjectStore("myObjectStore", { keyPath: "id" })
    // objectStore.createIndex("nameIndex", "name", { unique: false })
}

document.getElementById('createTerms').addEventListener("click", function () {
    contentAreaElement.innerHTML = createTermContent
    document.getElementById('save_term').addEventListener('submit', (event) => {
        event.preventDefault()

        let newTerm = event.target.elements.namedItem('new_term').value
        let equivalent = event.target.elements.namedItem('term_equivalent').value

        let transaction = db.transaction("myObjectStore", "readwrite")
        let objectStoreAdd = transaction.objectStore("myObjectStore")

        const firstData = {
            id: newTerm,
            equivalents: equivalent
        }

        let addRequest = objectStoreAdd.add(firstData)
        addRequest.onsuccess = function (event) {
            alert(`Data added with success! ${firstData.id}, ${firstData.equivalents}`)
        }
    })
})

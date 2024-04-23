import { createTermContent } from './pages/create_term.js'

const contentAreaElement = document.getElementById('contentArea')

let db
let objectStore
const request = window.indexedDB.open("memorygame", 1);
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
}

document.getElementById('createTerms').addEventListener("click", function () {
    contentAreaElement.innerHTML = createTermContent
    document.getElementById('save_term').addEventListener('submit', (event) => {
        event.preventDefault()
        
        let newTerm = event.target.elements.namedItem('new_term').value
        let equivalent = event.target.elements.namedItem('term_equivalent').value

        const firstData = [
            {
                key: newTerm,
                equivalents: equivalent
            }
        ]

        let transaction = db.transaction([""])

        alert(`Adding stuffs: ${newTerm}, ${equivalent}`)
    })
})

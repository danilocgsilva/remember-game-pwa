import 'bulma/css/bulma.css'
import { createTermContent } from './pages/create_term.js'
import { trainingContent } from './pages/training.js'
import { configurationsContent } from './pages/configurations.js'

const contentAreaElement = document.getElementById('contentArea')

document.getElementById('createTerms').addEventListener("click", function() {
  contentAreaElement.innerHTML = createTermContent
})

document.getElementById('training').addEventListener("click", function() {
  contentAreaElement.innerHTML = trainingContent
})

document.getElementById('configurations').addEventListener("click", function() {
  contentAreaElement.innerHTML = configurationsContent
})
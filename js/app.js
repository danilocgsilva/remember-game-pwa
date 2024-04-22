import 'bulma/css/bulma.css'
import './mobile_menu.js'

import { trainingContent } from './pages/training.js'
import { configurationsContent } from './pages/configurations.js'
import { listTermContent } from './pages/list_terms.js'
import './database.js'


function prepareShow(elementId, content) {
  document.getElementById(elementId).addEventListener("click", function() {
    contentAreaElement.innerHTML = content
  })  
}



const contentAreaElement = document.getElementById('contentArea')

//prepareShow('createTerms', createTermContent)

prepareShow('training', trainingContent)
prepareShow('configurations', configurationsContent)
prepareShow('listing', listTermContent)

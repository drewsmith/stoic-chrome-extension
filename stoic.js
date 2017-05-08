'use strict'

const passage = document.getElementById('passage')
const attribution = document.getElementById('attribution')

fetch('https://d8ivtvzu8e.execute-api.us-west-2.amazonaws.com/prod/stoicChromeGetPassage').then((response) => {
    response.json().then((json) => {
        passage.innerHTML = json.passage
        attribution.innerHTML = json.attribution || 'Anonymous'
    })
})
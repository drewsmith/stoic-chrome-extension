'use strict'

const passage = document.getElementById('passage')
const attribution = document.getElementById('attribution')

fetch('http://google.com').then((response) => {
    passage.innerHTML = response
    attribution.innerHTML = 'Anonymous'
})
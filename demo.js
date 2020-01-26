const htm = require('htm')
const vhtml = require('vhtml')
let h = htm.bind(vhtml)

const nlp = require('compromise')
// const nlp = require('/Users/spencer/mountain/compromise')
nlp.extend(require('./src'))
// nlp.extend(require('compromise-align'))

let str = document.querySelector('#text').value
let doc = nlp(str)

doc.htmlAlign('i #Verb')

document.querySelector('#result').innerHTML = h`<div>hi</div>`

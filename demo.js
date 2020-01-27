const nlp = require('compromise')
// const nlp = require('/Users/spencer/mountain/compromise/src')
nlp.extend(require('./src'))

const el = document.querySelector('#text')

const doit = function(match) {
  let doc = nlp(el.value)
  let html = doc.htmlAlign(match)
  document.querySelector('#result').innerHTML = html
}

let m = document.querySelector('#match')
m.onkeyup = function(e) {
  doit(e.target.value)
}

doit(m.value)

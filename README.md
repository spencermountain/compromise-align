<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />

  <div>a plugin for <a href="https://github.com/spencermountain/compromise/">compromise</a></div>
  
  <!-- npm version -->
  <a href="https://npmjs.org/package/compromise-align">
    <img src="https://img.shields.io/npm/v/compromise-align.svg?style=flat-square" />
  </a>
  
  <!-- file size -->
  <a href="https://unpkg.com/compromise-align/builds/compromise-align.min.js">
    <img src="https://badge-size.herokuapp.com/spencermountain/compromise-align/master/builds/compromise-align.min.js" />
  </a>
   <hr/>
</div>

<div align="center">
  <code>npm install compromise-align</code>
</div>

![image](https://user-images.githubusercontent.com/399657/73189686-d2231800-40f2-11ea-94d7-2a49de46666f.png)

```js
const nlp = require('compromise')
nlp.extend(require('compromise-align'))

let doc = nlp(myNovel)
let html = doc.htmlAlign('the #Adjective of times')
document.querySelector('#myId').innerHTML = html
```

generate html output to line-up matches in a text, for easy viewing.

### [Demo](http://spencermounta.in/compromise-align/)

### Usage

in terms of CSS styling, it does most of the layout, and tags the middle text as `.matchText`.
You can style it however you'd like.

the method returns html-strings by default, but the library uses [Jason Miller's htm library](https://github.com/developit/htm) so you can return React Components, or anything:

```js
doc.htmlAlign(matchStr, {bind: React.createElement})
```

work-in-progress

MIT

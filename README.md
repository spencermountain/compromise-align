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

```js
const nlp = require('compromise')
nlp.extend(require('compromise-align'))

let doc = nlp('')
nlp().htmlAlign()
```

generate html output to line-up matches in a text, for easy viewing.

the method returns html-strings by default, but the library uses [Jason Miller's htm library](https://github.com/developit/htm) so you can return React Components, or anything:

```js
doc.htmlAlign(
  {},
  {
    bind: React.createElement,
  }
)
```

work-in-progress

MIT

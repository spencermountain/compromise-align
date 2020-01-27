const htm = require('htm')
const vhtml = require('vhtml')
let h = htm.bind(vhtml)

const styles = {
  row: `display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  align-self: stretch;
  flex-wrap: nowrap;
  margin-top:1.5rem;
  width:100%;
  `,
  middle: `
  `,
  side: `  
  overflow:hidden;
  white-space: nowrap;
  flex: 1 1 0;
  `,
}

const compromiseAlign = function(Doc) {
  Doc.prototype.htmlAlign = function(str) {
    let m = this.match(str)
    let arr = m.map(d => {
      let s = d.fullSentences()
      // let three = s.splitOn(d)
      return [d.lookBehind('.*').text(), d.text(), d.lookAhead('.*').text()]
      // return three.out('array')
    })
    console.log(arr)
    let lines = arr
      .map(a => {
        return h`<div style=${styles.row}>
      <div style=${styles.side + ' text-align:right;'}>${a[0]}</div>
      <div class="matchText">${a[1]}</div>
      <div style=${styles.side + ' text-align:left;'}>${a[2]}</div>
      </div>`
      })
      .join(' ')
    return `<div class="w100p ">${lines}</div>`
    // console.log(lines.out('array'))
    // let segment = {}
    // segment[str] = 'Green'
    // console.log(m.segment(segment))
  }
}
module.exports = compromiseAlign

const compromiseAlign = function(Doc) {
  Doc.prototype.htmlAlign = function(str) {
    let sentences = this.match(str)
    let lines = sentences.map(m => {
      return m.sentences()
      // let after = m.lookAfter('.{3}')
      // return m.concat(after)
    })
    console.log(lines.out('array'))
    // let segment = {}
    // segment[str] = 'Green'
    // console.log(m.segment(segment))
  }
}
module.exports = compromiseAlign

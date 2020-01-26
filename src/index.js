const compromiseAlign = function(Doc) {
  Doc.prototype.htmlAlign = function(str) {
    let m = this.match(str)
    let lines = m.fullSentences()
    console.log(lines.out('array'))
    // let segment = {}
    // segment[str] = 'Green'
    // console.log(m.segment(segment))
  }
}
module.exports = compromiseAlign

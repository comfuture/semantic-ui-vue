var hljs = require('highlight.js')
// require('css-loader!highlight.js/styles/github.css')

function makeSourceBlock(match, p1, offset, string) {
  /*
    This function used by StringReplacePlugin on webpack.

    expacted pattern:
      /<docs-example(?:[^>]*)>((?:.|\n)*?)<\/docs-example>/igm
    output:
      <docs-example>$1<code slot="code" class="xml js">$coloredSource</code></docs-example>
  */

  // make a long enough string
  const LONGTEXT = new Array(100).join('.')

  // split source lines into array
  let sourceLines = p1.replace(/(\s+)$/g, '').split('\n')

  // count leading indent char length but except non indented line, then grab minimum one
  let minIndent = Math.min.apply(Math, sourceLines.map(
    line => (/^(\s+)/.exec(line) || [LONGTEXT])[0].length
  ))

  // make regex pattern by using `minIndent`
  let leadingIndent = new RegExp('^\\s{' + minIndent + '}')

  // shrink leading indent of each line
  let sourceBlock = sourceLines.map(line => line.replace(leadingIndent, '')).join('\n')

  // inject code slot just after original code
  var hl = hljs.highlightAuto(sourceBlock, ['xml', 'javascript'])
  return '<docs-example>' +
            p1 +
            '<pre slot="code"><code class="xml js" v-pre>' +
              hl.value +
            '</code></pre>' +
          '</docs-example>'
}

exports.makeSourceBlock = makeSourceBlock

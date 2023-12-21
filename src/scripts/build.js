const Fs = require('fs')
const Path = require('path')
const Sass = require('node-sass')

const result = Sass.render({
    data: Fs.readFileSync(

    ).toString(),
    outputStyle: 'expanded',
    outFile: 'global.css',
    includePaths: [Path.resolve('src')]
})

console.log(result.css.toString())

Fs.writeFileSync(
    Path.resolve('src/lib/global.css'),
    result.css.toString()
)
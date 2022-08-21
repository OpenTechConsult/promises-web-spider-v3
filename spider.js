import { readFile } from 'node:fs/promises'
import { urlToFilename } from './utils.js'
import superagent from 'superagent';

function download(url, filename) {
    console.log(`Downloading ${url}`);
    let content
    superagent.get(url).then(res => {
        content = res.text
    })
    console.log(content)
    return Promise.resolve('OK')

}


const spidering = new Set()

export function spider(url, nesting) {
    if (spidering.has(url)) {
        return Promise.resolve()
    }
    spidering.add(url)

    const filename = urlToFilename(url)

    return readFile(filename, 'utf8')
        .catch((err) => {
            if (err.code !== 'ENOENT') {
                throw err
            }

            // the file doesn't exist, so let's download it
            return download(url, filename)
        })

}
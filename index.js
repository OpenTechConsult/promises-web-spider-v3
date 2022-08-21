import { spider } from './spider.js'

const url = process.argv[2]
const nesting = Number.parseInt(process.argv[3], 10) || 1

spider(url, nesting)
    .then((result) => console.log('Download complete ' + result))
    .catch(err => console.error(err))
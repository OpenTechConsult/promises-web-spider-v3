import { join, extname } from 'path'
import slug from 'slug'

export function urlToFilename(url) {
    console.log('inside of urlToFilename')
    const parsedUrl = new URL(url)
    const urlPath = parsedUrl.pathname.split('/')
        .filter((component) => {
            return component !== ''
        })
        .map((component) => {
            return slug(component, { remove: null })
        })
        .join('/')
    let filename = join(parsedUrl.hostname, urlPath)
    if (!extname(filename).match(/html/)) {
        filename += '.html'
    }
    return filename
}
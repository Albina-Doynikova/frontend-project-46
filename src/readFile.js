import path from 'path'
import fs from 'fs'

const readFile = pathFile => fs.readFileSync(path.resolve(pathFile), 'utf-8')
export default readFile

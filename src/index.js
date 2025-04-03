import path from 'path';
import fs from 'fs';
import parser from './parser.js';

export default (filepath1, filepath2) => {
    const content1 = fs.readFileSync(path.resolve(filepath1), 'utf-8');
    const content2 = fs.readFileSync(path.resolve(filepath2), 'utf-8');

    const parserData1 = parser(content1, 'yml');
    const parserData2 = parser(content2, 'yml');

    const genDiff = (obj1, obj2) => {
        const keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])].sort();

        return `{\n` + keys.map((key) => {
            if (!obj2.hasOwnProperty(key)) {
                return `  - ${key}: ${obj1[key]}`;
            }

            if (!obj1.hasOwnProperty(key)) {
                return `  + ${key}: ${obj2[key]}`;
            }

            if (obj1[key] !== obj2[key]) {
                return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
            }

            return `    ${key}: ${obj1[key]}`;
        }).join('\n') + `\n}`;
    };

    return genDiff(parserData1, parserData2);
};

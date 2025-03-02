import path from 'path';
import fs from 'fs';
import parser from "./parser.js"

export default (filepath1, filepath2) => {
    const content1 = fs.readFileSync(path.resolve(filepath1), 'utf-8');
    const content2 = fs.readFileSync(path.resolve(filepath2), 'utf-8');
    const parserData1 = parser(content1);
    const parserData2 = parser(content2);
    console.log('parserData1', parserData1);
    console.log('parserData2', parserData2);
    const genDiff = (obj1, obj2) => {
        const keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];
      
        return keys.map((key) => {
          if (!obj2.hasOwnProperty(key)) {
            return { key, status: 'removed', value: obj1[key] };
          }
      
          if (!obj1.hasOwnProperty(key)) {
            return { key, status: 'added', value: obj2[key] };
          }
      
          if (obj1[key] !== obj2[key]) {
            return { key, status: 'changed', oldValue: obj1[key], newValue: obj2[key] };
          }
      
          return { key, status: 'unchanged', value: obj1[key] };
        });
      };
      
    return genDiff(parserData1, parserData2);
};
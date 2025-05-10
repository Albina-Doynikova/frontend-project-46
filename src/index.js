import path from 'path';
import readFile from './readFile.js';
import createTree from './createTree.js';
import parser from './parser.js';
import formater from './formatters/index.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const content1 = readFile(filepath1);
  const content2 = readFile(filepath2);

  const format1 = path.extname(filepath1);
  const format2 = path.extname(filepath2);

  const parserData1 = parser(content1, format1);
  const parserData2 = parser(content2, format2);

  const tree = createTree(parserData1, parserData2);

  const string = formater(tree, format);

  return string;
};

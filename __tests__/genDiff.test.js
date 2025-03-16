import genDiff from '../src/index.js';
import path from 'path';
import fs from 'fs';import { expect, test } from '@jest/globals';

const getFixturesPath = (filename) => path.resolve(process.cwd(), filename);
const result = fs.readFileSync(getFixturesPath('result.txt'), 'utf-8');
test('genDiff', () => {
    expect(
        genDiff(getFixturesPath('file1.json'),getFixturesPath('file2.json'))
    ).toBe(result);
});



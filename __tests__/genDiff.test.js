import genDiff from '../src/index.js';
import path from 'path';
import fs from 'fs';
import { expect, test } from '@jest/globals';

const getFixturesPath = (filename) => path.resolve(process.cwd(), '__fixtures__', filename);
const resultStylish = fs.readFileSync(getFixturesPath('resultStylish.txt'), 'utf-8');
const resultPlain = fs.readFileSync(getFixturesPath('resultPlain.txt'), 'utf-8');
const resultJson = fs.readFileSync(getFixturesPath('resultJson.txt'), 'utf-8');
test('genDiff', () => {
    expect(
        genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')
    ).toBe(resultStylish);
});

test('genDiff', () => {
    expect(
        genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'stylish')
    ).toBe(resultStylish);
});

test('genDiff', () => {
    expect(
        genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')
    ).toBe(resultPlain);
});

test('genDiff', () => {
    const actual = JSON.parse(genDiff(getFixturesPath('file1.json'), getFixturesPath('file2.json'), 'json'));
    const expected = JSON.parse(resultJson);
    expect(actual).toEqual(expected);
});
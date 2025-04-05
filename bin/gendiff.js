#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')

const gendiff = program
    .name('gendiff')
    .option('-f, --format', 'type format')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .action((filepath1, filepath2, options) => {
        const diff = genDiff(filepath1, filepath2);
        console.log(diff);
    });

gendiff
    .command('split')
    .argument('<string>', 'String to split')
    .option('-s, --separator <sep>', 'Separator', ':') 
    .action((str, options) => {
        console.log(str.split(options.separator));
    });
program.parse();

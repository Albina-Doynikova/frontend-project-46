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
    .action((a, b, options) => {
        console.log('a', a);
        console.log('b', b);
        console.log('options', options);
    });

gendiff
    .command('split')
    .argument('<string>', 'String to split')
    .action((str) => {
        console.log(str.split(':'));
    })
program.parse();

    

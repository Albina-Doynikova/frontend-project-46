#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

const gendiff = program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
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

    

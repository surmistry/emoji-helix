#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const templateGenerator = require('../lib/template-generator');

const optionDefinitions = [
  {
    name: 'symbols',
    alias: 's',
    defaultOption: true,
    multiple: true,
    type: String,
  },
  {
    name: 'cycles',
    alias: 'c',
    type: Number,
  },
  {
    name: 'width',
    alias: 'w',
    type: Number,
  },
  {
    name: 'output',
    alias: 'o',
    type: String
  }
]

const options = commandLineArgs(optionDefinitions);

const outputHelix = templateGenerator(options.symbols, options.width, options.cycles);

console.log(outputHelix);

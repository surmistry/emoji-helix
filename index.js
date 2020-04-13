const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  {
    name: 'emojis',
    alias: 'e',
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
    name: 'output',
    alias: 'o',
    type: String
  }
]

const options = commandLineArgs(optionDefinitions);

const TEMPLATE_HELIX =
  ` 01          02
  01        02
   01      02
     01  02
       01
     02  01
   02      01
  02        01
 02          01
 02          01
  02        01
   02      01
     02  01
       02
     01  02
   01      02
  01        02
 01          02
 `;

const { emojis, cycles } = options

const output = emojis.reduce(
  (updatingHelix, helixValue, index) => {
    const target = index + 1;
    let newHelix = updatingHelix.replace(
      new RegExp(`0${target}`, 'g'),
      helixValue
    )
    return newHelix;
  },
  TEMPLATE_HELIX
);

let outputHelix = '';
for (let i = 0; i < cycles; i++)
  outputHelix += output;

console.log(outputHelix);

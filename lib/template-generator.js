
const WIDTH_DEFAULT = 6;
const CYCLES_DEFAULT = 1;
const DIR_FORWARD = 'forward';
const DIR_BACKWARD = 'backward';

const isEmpty = (arr) => !arr || (arr.length === 0);

const fillTemplate = (indexes, width, spacer) => {
  let updatedTemplate = [...new Array(width)].map((_, i) => '  ');

  for (let index of Object.keys(indexes)) {
    updatedTemplate[index] = indexes[index][0]
  }
  return updatedTemplate
}

const initializeMatrix = (inputs, width, spacer) => {
  let baseIndex = 0;
  let indexes = {};
  for (let character of inputs) {
    indexes[baseIndex] = [
      character,
      (baseIndex === (width - 1)) ? DIR_BACKWARD : DIR_FORWARD
    ]
    baseIndex += spacer;
  }
  let completeTemplate = fillTemplate(indexes, width);
  return { template: completeTemplate, indexes };
}

const calcNextStep = (index, charInfo, width) => {
  const [character, direction] = charInfo;
  let numIndex = Number(index);
  let newIndex = 0;
  let newDirection = direction;
  const SLOW_WIDTH = 2;
  const SEPARATE_WIDTH = 2;
  if (
    (numIndex === (width - 1) && direction === DIR_FORWARD)
    ||
    (numIndex === 0 && direction === DIR_BACKWARD)
  ) {
    newIndex = numIndex;
    newDirection = direction === DIR_FORWARD ? DIR_BACKWARD : DIR_FORWARD;
  }
  else {
    newIndex = ((numIndex < SLOW_WIDTH) || (numIndex >= (width - 1 - SLOW_WIDTH)))
      ? direction === DIR_FORWARD ? ++numIndex : --numIndex
      : direction === DIR_FORWARD
        ? Number(numIndex) + SEPARATE_WIDTH
        : Number(numIndex) - SEPARATE_WIDTH;
  }
  return ([newIndex, character, newDirection]);
}

const incrementIndexes = (indexes, width) => {
  const newIndexes = {};
  for (let value of Object.keys(indexes)) {
    const [_, direction, overlappingChar] = indexes[value];
    if (!isEmpty(overlappingChar)) {
      [newIndex, ...characterMovement] = calcNextStep(value, overlappingChar, width);
      newIndexes[newIndex] = characterMovement;
    }
    [newIndex, ...characterMovement] = calcNextStep(value, indexes[value], width);
    if (newIndexes[newIndex]) {
      newIndexes[newIndex].push(characterMovement);
    }
    else {
      newIndexes[newIndex] = characterMovement;
    }
  }
  return (newIndexes);


};

const checkFullCycle = (inputs, newLine, template) => {
  return inputs.every((character) => {
    return newLine.indexOf(character) === template.indexOf(character);
  })
}

const DEFAULT_FAILED_WIDTH = 'Please input an even width, by default width=8.'
const isEven = (value) => (Number(value) % 2) === 0;

const generateTemplate = (inputs, width = WIDTH_DEFAULT, cycles = CYCLES_DEFAULT) => {
  if (!isEven(width)) return DEFAULT_FAILED_WIDTH;
  const helixWidth = ((inputs.length - 1) * width + 1);
  const { indexes, template } = initializeMatrix(inputs, helixWidth, width);
  let newIndexes = indexes;
  let matrix = [];
  let newLine = [];
  console.log(`Generating ${inputs.length}-helix strand`)
  matrix.push(template);
  while (!checkFullCycle(inputs, newLine, template)) {
    newIndexes = incrementIndexes(newIndexes, helixWidth);
    newLine = fillTemplate(newIndexes, helixWidth);
    matrix.push(newLine);
  }
  matrix.pop(newLine);
  const templateString = matrix.join('\n').replace(/,/g, '') + '\n';
  let outputHelix = '';
  for (let i = 0; i < cycles; i++)
    outputHelix += templateString;


  return outputHelix;
}

module.exports = generateTemplate;
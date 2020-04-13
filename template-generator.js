
const WIDTH_DEFAULT = 6;
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

const moveForward = (index, charInfo, width) => {
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
      [newIndex, ...characterMovement] = moveForward(value, overlappingChar, width);
      newIndexes[newIndex] = characterMovement;
    }
    [newIndex, ...characterMovement] = moveForward(value, indexes[value], width);
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

const generateTemplate = (inputs, width = WIDTH_DEFAULT) => {
  const helixWidth = ((inputs.length - 1) * width + (inputs.length - 1));
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

  console.log(matrix.join('\n').replace(/,/g, ''));
  return;
}

const matrix = generateTemplate(['🤡', '😡', '🤢'], 8)

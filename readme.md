# helix generator

[![npm version](https://badge.fury.io/js/helix-generator.svg)](https://badge.fury.io/js/helix-generator)

generate a string of any two characters in combination.

## __installation__


Install globally to use anywhere and get CLI a output a desired helix combination.
```
npm i -g helix-generator
```


Local installation can be done as follows.
```
npm i -S helix-generator
```

<aside class="warning">Width works best with even numbers.</aside>


## __usage__

Global usabe
```
helix-generator <helix arguments> -w <width> --cycles <number of cycles> 
```

Local Usage
```
import helixGenerator from 'helix-generator';

helixGenerator(<helix arguments>, <width default=8>, <number of cycles>);
```


## __example__

### CLI example

The following CLI input, with helix arguments `🍯 🐞` and two cycles as `-c 2`:

```
$ helix-generator 🍯 🐞 -c 2
```

will generate the following output: 

```
 🍯          🐞
  🍯        🐞
   🍯      🐞
     🍯  🐞
       🍯
     🐞  🍯
   🐞      🍯
  🐞        🍯
 🐞          🍯
 🐞          🍯
  🐞        🍯
   🐞      🍯
     🐞  🍯
       🐞
     🍯  🐞
   🍯      🐞
  🍯        🐞
 🍯          🐞
 🍯          🐞
  🍯        🐞
   🍯      🐞
     🍯  🐞
       🍯
     🐞  🍯
   🐞      🍯
  🐞        🍯
 🐞          🍯
 🐞          🍯
  🐞        🍯
   🐞      🍯
     🐞  🍯
       🐞
     🍯  🐞
   🍯      🐞
  🍯        🐞
 🍯          🐞
```

### Node example


Run the following commands to initialize npm and install helix-generator

```
npm init -y
npm i -S helix-generator
```

Then create an `index.js` file with the following line.

```
const generator = require('helix-generator');

console.log(generator(['🤡', '👿', '🤘🏽'], 4, 2));
```

This will yeild the following output.

```
🤡      👿      🤘🏽
  🤡        👿🤘🏽  
    🤡      🤘🏽👿  
        🤡🤘🏽    👿
      🤘🏽    🤡  👿
  🤘🏽          🤡  
🤘🏽          👿  🤡
🤘🏽        👿    🤡
  🤘🏽  👿      🤡  
  👿🤘🏽      🤡    
👿      🤘🏽🤡      
👿    🤡    🤘🏽    
  👿          🤘🏽  
🤡  👿          🤘🏽
🤡      👿      🤘🏽
  🤡        👿🤘🏽  
    🤡      🤘🏽👿  
        🤡🤘🏽    👿
      🤘🏽    🤡  👿
  🤘🏽          🤡  
🤘🏽          👿  🤡
🤘🏽        👿    🤡
  🤘🏽  👿      🤡  
  👿🤘🏽      🤡    
👿      🤘🏽🤡      
👿    🤡    🤘🏽    
  👿          🤘🏽  
🤡  👿          🤘🏽
```

## incoming features

- [ ] output to file
- [ ] error messages
- [x] implement as npm package
- [x] dynamically changing template for 3+ symbols
- [x] extendable number of symbols 


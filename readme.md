# helix generator (WIP)

generate a string of any two characters in combination.

## usage

```
node index.js <helix arguments> -cycles <period cycle number>
```

## example

the following input, with helix arguments `🍯 🐞` and two cycles as `-c 2`:

```
node index.js 🍯 🐞 -c 2
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

## incoming features

- implement as npm package
- dynamically changing template for 3+ symbols
- extendable number of symbols 

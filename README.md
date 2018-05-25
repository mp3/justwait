[![npm version](https://badge.fury.io/js/%40itabashi%2Fwait.svg)](https://badge.fury.io/js/%40itabashi%2Fwait)

## Installation

```
yarn add @itabashi/wait
```

## Usage

```
import wait from '@itabashi/wait'

// async/await
await wait(4000) // will wait 4000ms

// Promise
wait(4000).then(() => {
  // do something
})

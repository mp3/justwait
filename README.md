## Installation

```
yarn add wait
```

## Usage

```
import wait from 'wait'

// async/await
await wait(4000) // will wait 4000ms

// Promise
wait(4000).then(() => {
  // do something
})

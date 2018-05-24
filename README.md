## Installation

```
yarn add justwait
```

## Usage

```
import justwait from 'justwait'

// async/await
await justwait(4000) // will wait 4000ms

// Promise
justwait(4000).then(() => {
  // do something
})

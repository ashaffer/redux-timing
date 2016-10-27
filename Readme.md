
# redux-timing

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Timing functions (throttle/debounce) for redux actions

## Installation

    $ npm install redux-timing

## Usage

Each instance of these middleware debounce/throttle a single action. You use it like this:

```javascript
import {throttle, debounce} from 'redux-timing'

applyMiddleware(
  debounce('saveDocument', 1000),
  throttle('updateScrollSpy', 100),
  ...otherMiddleware
)
```

## Shouldn't I be using the `meta` property to do this?

Yes, generally if you are using redux as a global middleware system for your app. This library is specifically designed to work with [vdux](https://github.com/vdux/vdux)'s fractal component-level middleware stacks, and makes more sense in that sort of setting.

## License

MIT

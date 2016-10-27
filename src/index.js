/**
 * Imports
 */

import debounce from '@f/debounce'
import throttle from '@f/throttle'

/**
 * redux-timing
 */

function debounceMiddleware (type, ms) {
  return ctx => next => {
    let latestAction
    const debouncedFn = debounce(() => next(latestAction), ms)

    return action => {
      if (action.type === type) {
        latestAction = action
        debouncedFn()
        return
      }

      return next(action)
    }
  }
}

function throttleMiddleware (type, ms) {
  return ctx => next => {
    let latestAction
    const throttledFn = throttle(() => next(latestAction), ms)

    return action => {
      if (action.type === type) {
        latestAction = action
        throttledFn()
        return
      }

      return next(action)
    }
  }
}

/**
 * Exports
 */

export {
  debounceMiddleware as debounce,
  throttleMiddleware as throttle
}

/**
 * Imports
 */

import test from 'tape'
import {throttle, debounce} from '../src'

/**
 * Tests
 */

test('debounce should work', t => {
  let n = 0
  const fn = () => n++
  let debounced = debounce('test')({})(action => action.type === 'test' && fn())

  debounced({type: 'test'})
  debounced({type: 'test'})
  debounced({type: 'test'})

  setTimeout(() => {
    t.equal(n, 1)
    t.end()
  })
})

test('should debounce properly', t => {
  let n = 0
  const fn = () => n++
  const debounced = debounce('test', 1000)({})(action => action.type === 'test' && fn())

  debounced({type: 'test'})
  setTimeout(() => debounced({type: 'test'}), 100)
  setTimeout(() => debounced({type: 'test'}), 200)
  setTimeout(() => debounced({type: 'test'}), 300)
  setTimeout(() => {
    t.equal(n, 1)
    debounced({type: 'test'})
    setTimeout(() => {
      t.equal(n, 2)
      t.end()
    }, 1000)
  }, 1500)
})

test('throttle should work', t => {
  let n = 0
  const fn = () => n++
  let throttled = throttle('test')({})(action => action.type === 'test' && fn())

  throttled({type: 'test'})
  throttled({type: 'test'})
  throttled({type: 'test'})

  setTimeout(() => {
    t.equal(n, 1)
    t.end()
  })
})

test('should throttle properly', t => {
  let n = 0
  const fn = () => n++
  const throttled = throttle('test', 1000)({})(action => action.type === 'test' && fn())

  throttled({type: 'test'})
  setTimeout(() => throttled({type: 'test'}), 100)
  setTimeout(() => throttled({type: 'test'}), 200)
  setTimeout(() => throttled({type: 'test'}), 300)
  setTimeout(() => {
    t.equal(n, 1)
    throttled({type: 'test'})
    setTimeout(() => {
      t.equal(n, 2)
      t.end()
    }, 1000)
  }, 1500)
})

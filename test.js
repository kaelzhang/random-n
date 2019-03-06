const test = require('ava')
const log = require('util').debuglog('random-n')
const random = require('.')

const isArrayUnique = array => array.length === new Set(array).size
const isArrayContains = (array, target) =>
  target.every(n => ~ array.indexOf(n))
const randomInt = n => Math.floor(Math.random() * n)

const testResult = (t, array, n, expect_n, result) => {
  log(`random(%j, %s) = %j`, array, n, result)
  t.is(result.length, expect_n, 'length')
  t.true(isArrayUnique(result), 'not unique')
  t.true(isArrayContains(array, result), 'not contains')
}

const MAX = 20
let count = 100

const array = n => {
  let i = 0
  const ret = []

  while (n --) {
    ret.push(i ++)
  }

  return ret
}

const tested = Object.create(null)

const run = (arr, has_count, n) => {
  const title = has_count
    ? `random(${JSON.stringify(arr)}, ${n})`
    : `random(${JSON.stringify(arr)})`
  const {length} = arr

  if (tested[title]) {
    return
  }

  tested[title] = true

  test(title, t => {
    if (has_count) {
      testResult(
        t, arr,
        n,
        n > 0
          ? Math.min(n, length)
          : 0,
        random(arr, n)
      )
      return
    }

    testResult(
      t, arr,
      'NONE',
      arr.length,
      random(arr)
    )
  })
}

while (count --) {
  const length = randomInt(MAX)
  const arr = array(length)
  const n = randomInt(length * 3) - length

  run(arr, true, n)
  run(arr, false)
}

test('undefined', t => {
  const arr = [1, 2, 3, 4]
  testResult(t, arr, undefined, 0, random(arr, undefined))
})

test('null', t => {
  const arr = [1, 2, 3, 4]
  testResult(t, arr, null, 0, random(arr, null))
})

test('{}', t => {
  const arr = [1, 2, 3, 4]
  testResult(t, arr, {}, 0, random(arr, {}))
})

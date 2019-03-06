module.exports = function (array, count) {
  // random(array, undefined)
  // random(array, null)
  if (arguments.length === 2 && !(count > 0)) {
    return []
  }

  // `ceil - 1` is the max index we will randomly get from the array
  let ceil = array.length

  // counter
  let length = count
    ? Math.min(ceil, count)
    // count is not specified
    : ceil

  let r     // random index
  let i = 0

  const collected = new Array(length)
  const map = Object.create(null)
  const v = n => n in map
    ? map[n]
    : array[n]

  for (; i < length; i ++) {
    r = Math.floor(Math.random() * ceil --)
    // Then ceil is the max index

    collected[i] = v(r)

    if (r !== ceil) {
      // swap index `r` with index `ceil`
      map[r] = v(ceil)
    }
  }

  return collected
}

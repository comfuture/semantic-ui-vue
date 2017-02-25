function unique(arr) {
  let seen = {}
  return arr.filter((item) => {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true)
  })
}

if (typeof Array.prototype.reduce !== "function") {
  Array.prototype.reduce = function(callback, acc=null) {
    if (!this) {
      throw new TypeError("Array.prototype.reduce called on null or undefined")
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function")
    }
    let length = this.length >>> 0
    var start = 0
    if (length < 1) {
      throw new TypeError("Reduce of empty array with no initial value")
    }
    if (!acc) {
      acc = this[0]
      start = 1
    }
    for (var i = 0; i < length; i++) {
      acc = callback(acc, this[i], i, this)
    }
    return acc
  }
}

export function addClass(el, classes) {
  let classArray = classes.split(' ')
  if (el.classList) {
    el.classList.add(classArray)
  } else {
    let classList = el.className.split(' ')
    classList.splice(classList.length, 0, ...classArray)
    el.className = unique(classList).join(' ')
  }
}

export function dict(pairs) {
  return pairs.reduce((a, b) => {
    a[b[0]] = b[1]
    return a
  }, {})
}

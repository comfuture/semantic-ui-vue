function unique(arr) {
  let seen = {}
  return arr.filter((item) => {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true)
  })
}

export function addClass(el, classes) {
  let classArray = classes.split(' ')
  if (el.classList) {
    el.classList.add(...classArray)
  } else {
    let classList = el.className.split(' ')
    classList.splice(classList.length, 0, ...classArray)
    el.className = unique(classList).join(' ')
  }
}

export function removeClass(el, classes) {
  let classArray = classes.split(' ')
  if (el.classList) {
    el.classList.remove(...classArray)
  } else {
    let classList = el.className.split(' ')
    classList.forEach((name) => {
      el.className = el.className.replace(new RegExp(`(^| )${name}( |$)`), '')
    })
  }
}

export function dict(pairs) {
  return pairs.reduce((a, b) => {
    a[b[0]] = b[1]
    return a
  }, {})
}

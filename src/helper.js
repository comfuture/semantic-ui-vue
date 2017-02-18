function unique(arr) {
  let seen = {}
  return arr.filter((item) => {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true)
  })
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

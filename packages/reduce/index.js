const add = require("add")

console.log("1 + 1:", add(1, 1))

function reduce(a, b) {
  return a - b
}

module.exports = reduce

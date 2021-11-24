Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



function longest(s1, s2) {
let result = []
for (let i = 0; i < s1.length; i++) {
  if (result.indexOf(s1[i]) === -1) {
    result.push(s1[i])
  }
  }
for (let x = 0; x < s2.length; x++) {
  if (result.indexOf(s2[x]) === -1) {
    result.push(s2[x])
  }
}
  return result.
         sort((a,b) => { return a === b ? 0 : a > b ? 1 : -1}).
         join('')
}

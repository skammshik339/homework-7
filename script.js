class Mystring {
  reverseStr(string) {
    let arr = string.split('')
    arr = arr.reverse()
    return arr.join('')
  }
}
let str = new Mystring();
console.log(str.reverseStr('abcde'));
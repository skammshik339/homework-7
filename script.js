class Mystring {
  reverseStr(string) {
    let arr = string.split('')
    arr = arr.reverse()
    return arr.join('')
  }
  ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1,)
  }
}
let str = new Mystring();
console.log(str.reverseStr('abcde'));
console.log(str.ucFirst('abcde'));
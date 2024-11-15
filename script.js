class Mystring {
  reverseStr(string) {
    let arr = string.split('')
    arr = arr.reverse()
    return arr.join('')
  }
  ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1,)
  }
  ucWords(string) {
    let arr = string.split(' ')
    arr.forEach((element, i, array) => {
      array[i] = array[i][0].toUpperCase() + array[i].slice(1,)
    });
    return arr.join(' ')
  }
}
let str = new Mystring();
console.log(str.reverseStr('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));
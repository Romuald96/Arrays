function sumArray (arr) {
return arr.reduce((acc,num) => {
  acc+=num;
  return acc;
},0);
}
function stringLengths (arr) {
  return arr.map(str=> str.length)
}
function incrementArray(arr) {
  return arr.map(num=>num+=1)
}
function uppercaseArray(arr) {
  return arr.map(el=> el.toUpperCase())
}
function uniqueArray(arr) {
  const x = [];
  arr.forEach(item=> {
    if (x.indexOf(item)===-1)
    x.push(item);
  })
  return x;
}
function squareArray(arr) {
  return arr.map(num=> num*num)
}
function filterByLength(arr, length) {
  return arr.filter(str=> str.length>length)
}
function commonElements(arr1, arr2) {
  let concatedArr = arr1.concat(arr2);
  let commonArr = [];
  concatedArr.forEach(el=> {
    if (commonArr.indexOf(el)==-1)
    commonArr.push(el)
  })
  return commonArr
}
function extractNames(users) {
  return users.map(user=>user.name)
}
function sortArray(arr) {
  return arr.sort((a,b) => (a-b))
}
module.exports = {incrementArray,sumArray,sortArray,squareArray,uniqueArray,uppercaseArray,extractNames,commonElements,filterByLength,stringLengths}

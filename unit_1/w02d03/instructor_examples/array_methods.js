console.log('arrays')

const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road'];


const updatedIceCreams = iceCreams.map((flavor)=>{
  return flavor + " Ice Cream"
})

// console.log('original array', iceCreams)
// console.log('updated array', updatedIceCreams)

const originalArray = [2,4,6,8,10]

const newNumArray = originalArray.map((num) => {
  console.log('in the map function here is num', num)
  console.log('this is num * 2', num * 2)
  return num * 2
})

console.log(newNumArray)

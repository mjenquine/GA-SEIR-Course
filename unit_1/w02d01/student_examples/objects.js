//
// const car = {
//   color: 'blue',
//   hp: 4000,
//   year: 1989,
// }
// //console.log(car.color);
//
// const house = {
//   doors: 9,
// }
// house.windows = 30
// house.windows = 40
// //console.log(house);
//
// const mogwai = {}
// mogwai.name = 'Gizmo'
// console.log(mogwai);
//
//
// const goblin = {badGuy: true}
// console.log(goblin['badGuy']);
// console.log(goblin.badGuy);
//
// const foo = [
//   ['0,0', '0,1', '0,2'],
//   ['1,0', '1,1', '1,2'],
//   ['2,0', '2,1', '2,2']
// ]
// console.log(foo[0][0]);
//
// for (let row of foo) {
//   //first time through row = ['0,0', '0,1', '0,2'],
//   //second time through row = ['1,0', '1,1', '1,2'],
//   //third time through row = ['2,0', '2,1', '2,2']
//   for (let element of row){
//     //first time////////////
//     //element 0,0
//     //element 0,1
//     //element 0,2
//     //second time//////////
//     //element 1,0
//     //element 1,1
//     //element 1,2
//     //third time///////////
//     //element 2,0
//     //element 2,1
//     //element 2,2
//     //console.log(element);
//   }
// }

const summonBird = () => {
//below I am returning an object
  return {
    color: 'blue'
  }
};
//we ran the function
//if returned this object {
//  color: 'blue'
//}
console.log(summonBird().color)

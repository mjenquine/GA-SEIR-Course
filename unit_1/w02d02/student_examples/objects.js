const adventurer = {
  name: 'Mark',
  type: 'bard',
  hitpoints: 200,
  attack: ()=> {
    console.log('Un-guard');
    return 'I attacked'
  },
  belongings: ['sword', 'potion', 'Tums'],
  companion: {
    name: 'Scott',
    type: 'White Mage',
    hitpoints: 100,
    companion: {
      name: 'John',
      type: "Paladin",
      hitpoints: 2000,
      belongings: ['sword', 'shield', 'potion', 'unbreakable will']
    }
  }
}
console.log(adventurer.attack());

// for (let i = 0; i < adventurer.belongings.length; i++) {
//   console.log(adventurer.belongings[i]);
// }
//console.log(adventurer.companion.companion.belongings[3]);

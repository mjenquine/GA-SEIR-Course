class Person {
  constructor(
    name,
    friends = ['Charlie', 'Dennis', 'Ron', 'Sweet Dee', 'Frank']
  ) {
    this.name = name
    this.friends = friends
  }
  secretAdmirer() {
    this.friends.forEach(function(f) {
      // console.log(this)
      console.log(this.name + ' sends flowers to ' + f)
    })
  }
  giveOldSchoolLove() {
    const self = this
    // console.log(this)
    // console.log(self)
    this.friends.forEach(function(f) {
      console.log(self.name + ' likes ' + f)
    })
  }
  giveBindingAffection() {
    // console.log(this)
    this.friends.forEach(
      function(f) {
        // console.log(this)
        console.log(this.name + ' makes friendship bracelets for ' + f)
      }.bind(this)
    )
  }
  giveNewSchoolLove() {
    this.friends.forEach(f => console.log(this.name + ' hearts ' + f))
  }
  allTheLove() {
    // errors
    // this.secretAdmirer()
    // these all work
    this.giveOldSchoolLove()
    this.giveBindingAffection()
    this.giveNewSchoolLove()
  }
}

k = new Person('Karolin')
// console.log('\nSecret Admirer:')
// // k.secretAdmirer() // errors undefined
//
// console.log('\nShow old school love:')
// k.giveOldSchoolLove()
// console.log('\nShow binding affection love:')
// k.giveBindingAffection()
// console.log('\nShow new school love:')
// k.giveNewSchoolLove()
// k.allTheLove()

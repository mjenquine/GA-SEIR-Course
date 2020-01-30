class Animal {
 constructor (name) {
  this.name = name;
 }
  walk () {
     console.log('I am walking');
   }
}

class Dog extends Animal {
  constructor (name){
    super(name)
    this.legs = 4
  }
  playFetch () {
    console.log('throw me the ball again')
  }
}

class FlyingDog extends Dog {
  fly (){
    console.log('flying')
  }
}

class GermanShepard extends Dog {
  beLoyal () {
    console.log('I know you love cats but I am a cool Dog')
  }
}

console.log('We are now back in week two');


class Thing {
  constructor(name){
    this.name = name
  }

  render(){
    const app = document.querySelector('#app')
    app.innerHTML = `<h1>${this.name} says hi</h1>`
  }
}

const myThing = new Thing('Mark')


myThing.render()

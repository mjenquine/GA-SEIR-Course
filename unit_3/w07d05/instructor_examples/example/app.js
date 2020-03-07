console.log('We are now back in week 2')


class Thing {
  constructor(element, name, child, childData){
    this.name = name
    this.child = child
    this.element = element
  }

  render () {
    const app = document.querySelector(element)
    app.innerHTML = `<h1>${this.name} says hi</h1>`
    if (children){
      const renderedChildren = new Thing(child, name, )
    }
  }
}

const myThing = new Thing('cartoon')

myThing.render()

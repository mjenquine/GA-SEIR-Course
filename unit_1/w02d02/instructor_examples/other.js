class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    if (data < this.data && this.left){
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data &&  this.right) {
      this.right.insert(data);
    } else if (data > this.data){
      this.right = new Node(data);
    }
  }
  doesItContain(data){
    if (this.data === data){
      return this
    }
    if (this.data < data && this.right){
      return this.right.doesItContain(data);
    } else if (this.data > data && this.left) {
      return this.left.doesItContain(data);
    }
    return null;
  }
}

const bst = new Node(10);
const array = [1,2,3,5,9,13]

const generateBst = (arr) => {
  return arr.map()
}


bst.insert(5)
bst.insert(15)
bst.insert(99)

if (bst.left.data === 5){
  console.log('Arthur is awesome')
}

if (bst.right.data === 15){
  console.log('Arthur is even awesomer')
}

if(bst.right.right.data === 99){
  console.log('Whoa arthur you rule')
}

if (bst.doesItContain(99)){
  console.log('Yes of course this worked')
}

if(bst.doesItContain(337) !== null){
  console.log('Arthur you suck fix this your embarrrassing yourself')
}

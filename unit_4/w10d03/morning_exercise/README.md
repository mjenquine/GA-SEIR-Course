# LINKED LISTS
​
## Lesson Objectives
​
1. Explain what a Linked list is
1. Demonstrate what a link does
1. Give an example of what a link list implementation can do
​
​
## What is a Linked List?
  1. A simple often used data structure that has 3 necessary properties
  1. A head
  1. A tail
  1. A size or length property
​
## Linked List Architecture
  1. Linked List consist of element known as nodes
  1. Each node points to the next node in the list if there is no next node it point to null
  1. Nodes have one property known as value or data and contain some primitive value or object value
​
​
​
![linked-list](https://media.git.generalassemb.ly/user/15881/files/c1409700-692a-11ea-98b9-15dab7ba6fff)
​
<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>constructor</td>
      <td>-</td>
      <td>(LinkedList)</td>
      <td>
        Create a class to represent a linked list.  When created,
        a linked list should have *no* head node associated with it.
        The LinkedList instance will have one property, 'head', which
        is a reference to the first node of the linked list.  By default
        'head' should be 'null'.
      </td>
    </tr>
  </tbody>
</table>
### Example
``` javascript
  const list = new LinkedList();
  list.head // null
```

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>constructor</td>
    <td>(Data, Node)</td>
    <td>Node</td>
    <td>
      Creates a class instance to represent a node.  The node should
      have two properties, 'data' and 'next'.  Accept both
      of these as arguments to the 'Node' constructor, then
      assign them to the instance as properties 'data' and 'next'.
      If 'next' is not provided to the constructor, then default its
      value to be 'null'.
    </td>
    <td>
      <pre>
        const n = new Node('Hi');
        n.data // 'Hi'
        n.next // null
        const n2 = new Node('There', n);
        n.next // returns n
      </pre>
    </td>
  </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>insertFirst</td>
    <td>(data)</td>
    <td>-</td>
    <td>
      Creates a new Node from argument 'data' and assigns the resulting
      node to the 'head' property.  Make sure to handle the case in which
      the linked list already has a node assigned to the 'head' property.
    </td>
    <td>
      <pre>
        const list = new LinkedList();
        list.insertFirst('Hi There'); // List has one node
      </pre>
    </td>
  </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>size</td>
    <td>-</td>
    <td>(integer)</td>
    <td>
      Returns the number of nodes in the linked list.
    </td>
    <td>
      <pre>
        const list = new LinkedList();
        list.insertFirst('a');
        list.insertFirst('b');
        list.insertFirst('c');
        list.size(); // returns 3
      </pre>
    </td>
  </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>getFirst</td>
    <td>-</td>
    <td>(Node)</td>
    <td>
      Returns the first node of the linked list.
    </td>
    <td>
      <pre>
        const list = new LinkedList();
        list.insertFirst('a');
        list.insertFirst('b');
        list.getFirst(); // returns Node instance with data 'a'
      </pre>
    </td>
  </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      getLast
    </td>
    <td>
      -
    </td>
    <td>
      (Node)
    </td>
    <td>
      Returns the last node of the linked list
    </td>
    <td>
      <pre>
        const list = new LinkedList();
        list.insertFirst('a');
        list.insertFirst('b');
        list.getLast(); // returns node with data 'a'
      </pre>
    </td>
  </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      clear
    </td>
    <td>
      -
    </td>
    <td>
      -
    </td>
    <td>
      Empties the linked list of any nodes.
    </td>
    <td>
      <pre>
        const list = new LinkedList();
        list.insertFirst('a');
        list.insertFirst('b');
        list.clear();
        list.size(); // returns 0
      </pre>
    </td>
  </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      removeFirst
    </td>
    <td>
      -
    </td>
    <td>
      -
    </td>
    <td>
      Removes only the first node of the linked list.  The list's head should
      now be the second element.
    </td>
    <td>
      <pre>
        const list = new LinkedList();
        list.insertFirst('a');
        list.insertFirst('b');
        list.removeFirst();
        list.getFirst(); // returns node with data 'a'
      </pre>
    </td>
  </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      removeLast
    </td>
    <td>
      -
    </td>
    <td>
      -
    </td>
    <td>
      Removes the last node of the chain
    </td>
    <td>
      <pre>
        const list = new LinkedList();
        list.insertFirst('a');
        list.insertFirst('b');
        list.removeLast();
        list.size(); // returns 1
        list.getLast(); // returns node with data of 'b'
      </pre>
    </td>
  </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      insertLast
    </td>
    <td>
      (Data)
    </td>
    <td>
      -
    </td>
    <td>
      Inserts a new node with provided data at the end of the chain
    </td>
    <td>
      <pre>
        const list = new LinkedList();
        list.insertFirst('a');
        list.insertFirst('b');
        list.insertLast('c');
        list.getLast(); // returns node with data 'C'
      </pre>
    </td>
  </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      getAt
    </td>
    <td>
      (integer)
    </td>
    <td>
      (Node)
    </td>
    <td>
      Returns the node at the provided index
    </td>
    <td>
      <pre>
        const list = new List();
        list.insertFirst('a');
        list.insertFirst('b');
        list.insertFirst('c');
        list.getAt(1); // returns node with data 'b'
      </pre>
    </td>
  </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      removeAt
    </td>
    <td>
      (integer)
    </td>
    <td>
      -
    </td>
    <td>
      Removes node at the provided index
    </td>
    <td>
      <pre>
        const list = new List();
        list.insertFirst('a');
        list.insertFirst('b');
        list.insertFirst('c');
        list.removeAt(1);
        list.getAt(1); // returns node with data 'a'
      </pre>
    </td>
  </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td>Function</td>
      <td>Arguments</td>
      <td>Returns</td>
      <td>Directions</td>
      <td>Example</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      insertAt
    </td>
    <td>
      (Data, integer)
    </td>
    <td>
      -
    </td>
    <td>
      Create an insert a new node at provided index.
      If index is out of bounds, add the node to the end
      of the list.
    </td>
    <td>
      <pre>
        const list = new List();
        list.insertFirst('a');
        list.insertFirst('b');
        list.insertFirst('c');
        list.insertAt('Hi', 1)
        list.getAt(1); // returns node with data 'Hi'
      </pre>
    </td>
  </tr>
  </tbody>
</table>

```javascript
// Linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
 // If your hungry for more
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
// If you're absolutely starving
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
```

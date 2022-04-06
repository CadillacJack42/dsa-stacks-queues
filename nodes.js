//  Create new class object to construct nodeLists

class nodeList {
  // Define the properties of 'this' class
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  // Allow users to 'add' nodes to the list via add method
  add(node) {
    this.next ? this.next.add(node) : (this.next = node);
  }
  //  Allow users to fetch each node in the list via getList method
  getList() {
    return this.next ? this.data + ", " + this.next.getList() : this.data;
  }

  //   Allow users to remove a node
  remove(index) {
    return this.head;
  }
}

const myNewList = new nodeList("blues");
myNewList.add(new nodeList("rock'n'roll"));

myNewList.add(new nodeList("metal"));
myNewList.add(new nodeList("punk"));
myNewList.add(new nodeList("alternative"));
console.log(myNewList.getList());

class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // console.log("NODE VALUE : ", this.data, node.data, node.data > this.data);

    if (node.data > this.data) {
      this.right ? this.right.add(node) : (this.right = node);
    } else {
      this.left ? this.left.add(node) : (this.left = node);
    }
  }
}

const B = new BinaryTreeNode(2);
const A = new BinaryTreeNode(1);
const C = new BinaryTreeNode(3);
const D = new BinaryTreeNode(4);

B.add(A);
B.add(D);
B.add(C);

class PersonTreeNode {
  constructor(person) {
    this.data = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.data > this.data) {
      this.right ? this.right.add(node) : (this.right = node);
    } else {
      this.left ? this.left.add(node) : (this.left = node);
    }
  }

  findPerson(name) {
    if (this.data === name) {
      return this.person;
    } else {
      return this.data > name
        ? this.left?.findPerson(name) ?? null
        : this.right?.findPerson(name) ?? null;
    }
  }
}

const Ba = new PersonTreeNode({
  name: "jack",
  phone: "702 - 764 - 5555",
  address: "123 abc st",
});
const Aa = new PersonTreeNode({
  name: "anthony",
  phone: "702 - 764 - 5554",
  address: "122 abc st",
});
const Ca = new PersonTreeNode({
  name: "alice",
  phone: "702 - 764 - 5552",
  address: "120 abc st",
});
const Da = new PersonTreeNode({
  name: "zack",
  phone: "702 - 764 - 5553",
  address: "121 abc st",
});
const Ea = new PersonTreeNode({
  name: "brad",
  phone: "702 - 764 - 5552",
  address: "120 abc st",
});

Ba.add(Aa);
Ba.add(Da);
Ba.add(Ca);
Ba.add(Ea);

// console.log(JSON.stringify(Ba, true, 2));
console.log(Ba.findPerson("zak"));
console.log(Ba.findPerson("brad"));
console.log(Ba.findPerson("jack"));

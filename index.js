// define new class object with methods for interaction

class Stack {
  constructor() {
    this.stack = [];
  }
  //  return length of array / stack
  get length() {
    return this.stack.length;
  }
  //  allow user to insert to stack
  push(item) {
    return this.stack.push(item);
  }
  //  allow user to get last item on stack
  pop() {
    return this.stack.pop();
  }
  //  allow user to check last item in stack
  peek() {
    return this.stack[this.length - 1];
  }
  // allow user to check if stack has properties
  isEmpty() {
    return this.length === 0;
  }
}
//  Create new instance of stack class
const cohort = new Stack();
cohort.push("jack");
cohort.push("alice");
cohort.pop();
cohort.push("dan");
cohort.push("alice");
cohort.push("josh");
console.log(cohort);
cohort.push("trevor");
cohort.push("carolyyn");
cohort.push("arma");
console.log(cohort.stack[0]);
cohort.pop();
cohort.pop();
console.log(cohort.peek());
cohort.pop();
cohort.pop();
cohort.pop();
console.log(cohort.isEmpty());
cohort.pop();
console.log(cohort.isEmpty());
cohort.pop();
console.log(cohort.isEmpty());

//  define new class object decribing a queue
class movieGoers {
  constructor() {
    this.queue = [];
    this.index = 0;
  }

  get length() {
    return this.queue.length;
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    const item = this.queue(this.index);
    if (!this.hasNext()) return null;
    this.index++;
    return item;
  }

  peek() {
    return this.queue[this.length - 1];
  }

  hasNext() {
    return !!this.size;
  }

  get size() {
    return this.queue.length - this.index;
  }

  isEmpty() {
    return this.length === 0;
  }
}

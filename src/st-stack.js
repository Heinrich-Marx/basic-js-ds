const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
module.exports = class Stack {
  constructor() {
    this.stack = [];
    this.count = 0;
  }
  push(element) {
    this.stack.push(element);
    this.count++;
  }

  pop() {
    let el = this.stack.splice(this.stack.length - 1, 1);
    this.count--;
    return el[0];
  }

  peek() {
    return this.stack[this.count - 1];
  }
};

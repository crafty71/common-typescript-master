import { IStack } from './IStack';
export class ArrayStack<T> implements IStack<T> {

  private stack = new Array<T>()
  
  push(element: T): void {
    this.stack.push(element)
  }
  pop(): T {
    return this.stack.pop()
  }
  peek(): T {
    return this.stack[this.stack.length - 1]
  }
  isEmpty(): Boolean {
    return this.stack.length === 0
  }
  size(): number {
    return this.stack.length
  }
}
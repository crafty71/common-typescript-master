import { IQueue } from "./IQueue";

export class Queue<T> implements IQueue<T> {

  private queue = new Array()
  enqueue(element: T): void {
    this.queue.push(element)
  }
  dequeue(): T | undefined{
    return this.queue.shift()
  }
  peek(): T {
    return this.queue[0]
  }
  isEmpty(): boolean {
    return this.queue.length === 0
  }
  size(): number {
    return this.queue.length
  }

}
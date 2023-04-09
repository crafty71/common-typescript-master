import IList from "../types/IList"

class Nodes<T> {
  private value: T
  private next: Nodes<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }

  getValue() {
    return this.value
  }
  getNext() {
    return this.next
  }

  setValue(value: T) {
    this.value = value
  }
  setNext(value: Nodes<T>) {
    this.next = value
  }
}

export class LinkedList<T> implements IList<T> {
  
  head: Nodes<T> | null = null
  size: number = 0

  get length() {
    return this.size
  }

  peek(): T | undefined {
    return this.head?.getValue()
  }

  private getNode(position: number):Nodes<T> {
    let index = 0
    let current = this.head
    while(index ++ < position) {
      current = current?.getNext()
    }
    return current
  }

  /**
   * @description: 链表中追加元素
   * @param {T} value
   * @return {*}
   */
  append(value: T): void {
    const newNode = new Nodes(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.getNext()) {
        current = current.getNext()
      }
      current.setNext(newNode)
    }
    this.size++
  }
  /**
   * @description: 遍历链表
   * @return {*}
   */
  traverse(): void {
    const values: T[] = []
    let current = this.head
    while (current) {
      values.push(current.getValue())
      current = current.getNext()
    }
    console.log(values.join('-->'))
  }

  /**
   * @description: 链表中插入元素
   * @param {T} element
   * @param {number} position
   * @return {*} boolean
   */  
  insert(element: T, position: number): boolean {
    if (position < 0 || position > this.length) return false
    const newNode = new Nodes<T>(element)
    if (position === 0) {
      newNode.setNext(this.head)
      this.head = newNode
    } else {
      const previous = this.getNode(position - 1)
      newNode.setNext(previous?.getNext())
      previous?.setNext(newNode)
    }
    this.size ++
    return true
  }
  /**
   * @description: 获取相应位置的元素
   * @param {number} position
   * @return {*}
   */  
  removeAt(position: number): T | null{
    if (position < 0 || position >= this.length) {
      return null
    }
    let current =  this.head
    if(position === 0) {
      this.head = current?.getNext() ?? null
    } else {
      const previous = this.getNode(position - 1)
      previous?.setNext(previous.getNext().getNext() ?? null)
    }
    this.size --
    return current?.getValue() ?? null
  }
  /**
   * @description: 获取当前元素
   * @param {number} position
   * @return {*}
   */  
  get(position: number):  T {
    if (position < 0 || position >= this.length) {
      throw new Error('ArrayIndexOutOfBoundsException')
    }
    return this.getNode(position).getValue()
  }

  /**
   * @description: 更新链表元素
   * @param {number} position
   * @param {T} element
   * @return {*}
   */  
  updated(position: number, element: T): void | boolean {
    if (position < 0 || position >= this.length) {
      return false;
    }
    const current = this.getNode(position)
    current?.setValue(element)
  }
  /**
   * @description: 查看链表是否包含某一元素
   * @param {T} element
   * @return {*}
   */  
  indexOf(element:T): number{
    let current = this.head
    let index = 0
    while(current){
      if(current.getValue() ===  element) {
        return index
      }
      current = current.getNext()
      index ++
    }
    return -1
  }
  /**
   * @description: 移除元素
   * @param {T} value
   * @return {*}
   */  
  remove(value: T): T | null {
    const index = this.indexOf(value)
    if(index === -1) {
      return null;
    }
    return this.removeAt(index)
  }

  /**
   * @description: 查看链表是否为空
   * @return {*}
   */  
  isEmpty(): boolean {
    return this.length === 0
  }
}


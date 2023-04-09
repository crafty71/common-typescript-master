export interface IStack<T> {
  /**
   * @description: 添加一个新的元素到栈顶
   * @return {*} void
   */  
  push(element: T): void
  /**
   * @description: 移除栈顶元素
   * @return {*} T
   */  
  pop(): T
  /**
   * @description: 返回栈顶元素
   * @return {*} T
   */  
  peek():T
  /**
   * @description: 查看栈是否为空
   * @return {*} Boolean
   */  
  isEmpty(): Boolean
  /**
   * @description: 返回栈元素个数
   * @return {*} number
   */  
  size(): number
}
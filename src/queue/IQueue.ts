export interface IQueue<T> {
  /**
   * @description: 向队列尾部加入元素
   * @return {*} void
   */  
  enqueue(element: T): void
  /**
   * @description: 移除队列的顶部元素
   * @return {*} T | undefined
   */  
  dequeue(): T | undefined
  /**
   * @description: 查看队列第一个元素
   * @return {*} T | undefined
   */  
  peek(): T | undefined

  /**
   * @description: 查看队列是否为空
   * @return {*} boolean
   */  
  isEmpty(): boolean

  /**
   * @description: 查看队列包含元素个数
   * @return {*} number
   */  
  size(): number
}
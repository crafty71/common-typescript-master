import { Queue } from "../queue/queue";
import Nodes from "../types/Node";

import { btPrint } from 'hy-algokit'


class TreeNode<T> extends Nodes<T>  {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null  = null 

  // 当前节点的父节点
  parent: TreeNode<T> | null = null

   // 判断当前节点是父节点的左子节点
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this)
  }

  // 判断当前节点是父节点的右子节点
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this)
  }
}

class BSTree<T> {

  private root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }

  /**
   * @description: 将插入的元素安排到合理节点
   * @param {TreeNode} node
   * @param {TreeNode} newNode
   * @return {*}
   */  
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if(newNode.value < node.value) {
      switch (node.left) {
        case null:
          node.left = newNode
          break;
        default:
          this.insertNode(node.left, newNode);
      }
    } else {
      switch (node.right) {
        case null:
          node.right = newNode
          break;
        default:
          this.insertNode(node.right, newNode);
      }
    }
  }


  /**
   * @description: 先序遍历
   * @param {TreeNode} node
   * @return {*}
   */  
  private preOrderTraverseNode(node: TreeNode<T> | null): void {
    if(node) {
      console.log(node.value)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }

  /**
   * @description: 中序遍历树
   * @param {TreeNode} node
   * @return {*}
   */  
  private inOrderTraverseNode(node: TreeNode<T> | null): void {
    if(node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }

  /**
   * @description: 后续遍历节点
   * @param {TreeNode} node
   * @return {*}
   */  
  private postOrderTraverseNode(node: TreeNode<T> | null): void {
    if(node) {
      const {left, right} = node
      this.postOrderTraverseNode(left)
      this.postOrderTraverseNode(right)
      console.log(node.value)
    }
  }

  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    let parent: TreeNode<T> | null = null
    while (current) {
      if (current.value === value) {
        return current
      }
      parent = current
      if (current.value < value) {
        current = current.right
      } else {
        current = current.left
      }
      if (current) current.parent = parent
    }

    return null
  }

  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    let current = delNode.right

    let successor: TreeNode<T> | null = null

    while (current) {
      successor = current
      current = current.left
      if(current) {
        current.parent = successor
      }
    }

    if(successor !== delNode.right) {
      successor.parent.left = successor.right
      successor.right = delNode.right
    }

    successor.left = delNode.left

    return successor
  }

  /**
   * @description: 二叉搜索树中插入数据
   * @param {T} value 
   * @return {*}
   */  
  insert(value: T): void {
    const newNode = new TreeNode(value)

    if(!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  /**
   * @description: 先序遍历
   * @return {*} void
   */  
  preOrderTraverse(): void {
    this.preOrderTraverseNode(this.root)
  }

  /**
   * @description: 中序遍历
   * @return {*}
   */  
  inOrderTraverse(): void {
    this.inOrderTraverseNode(this.root)
  }

  /**
   * @description: 后序遍历
   * @return {*}
   */  
  postOrderTraverse(): void {
    this.postOrderTraverseNode(this.root)
  }

  /**
   * @description: 层序遍历
   * @return {*} void
   */  
  levelOrderTraverse(): void {

    if(!this.root) return null;

    const queue = new Queue<TreeNode<T>>()

    queue.enqueue(this.root)

    while(queue.size() !== 0) {

      const current = queue.dequeue()

      console.log(current.value)

      if(current.left) {
        queue.enqueue(current.left)
      }

      if(current.right) {
        queue.enqueue(current.right)
      }
    }
  }

  /**
   * @description: 获取最大值
   * @return {*}
   */  
  getMaxValue(): T | null {
    let current = this.root
    while(current && current.right) {
      current = current.right
    }

    return current.value ?? null
  }

  /**
   * @description: 获取最小值
   * @return {*}
   */  
  getMinValue(): T | null {
    let current = this.root
    while(current && current.left) {
      current = current.left
    }

    return current.value ?? null
  }

  /**
   * @description: 查找特定值
   * @param {T} value
   * @return {*}
   */  
  search(value: T) : boolean {
    return !!this.searchNode(value)
  }

/**
 * @description: 删除节点
 * @return {*}
 */  
  remove(value: T ): boolean {
    const current = this.searchNode(value)

    if(!current) return false

     // 2.获取到三个东西: 当前节点/父节点/是属于父节点的左子节点, 还是右子节点

    if(current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null
      } else if (current.isLeft ) {
        current.parent.left = null
      } else {
        current.parent.right = null
      }
    }

    else if (current.right === null ) {
      if(current === this.root) {
        this.root = current.left
      } else if (current.isLeft) {
        current.parent.left = current.left
      } else {
        current.parent.right = current.left
      }
    }

    else if(current.left === null ) {
      if(current === this.root) {
        this.root = current.right
      } else if (current.isLeft) {
        current.parent.left = current.left
      } else {
        current.parent.right = current.right
      }
    }

    else {
      const successor = this.getSuccessor(current)
      if(current === this.root) {
        this.root = successor
      } else if (current.isLeft) {
        current.parent.left = successor
      } else {
        current.parent.right = successor
      }
    }

    return true
  }
}

const bst = new BSTree<number>()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

bst.print()

// bst.levelOrderTraverse()

// console.log(bst.getMinValue())
// console.log(bst.getMaxValue())

// console.log(bst.search(20))

// console.log(bst.search(50))

bst.remove(11)
bst.print()
bst.remove(15)
bst.print()
bst.remove(9)
bst.print()
bst.remove(7)
bst.print()


// bst.preOrderTraverse()
import { ArrayStack } from "../stack/stack";
import ListNode from "./leetcode_ListNode";

export function reverseList(head: ListNode | null): ListNode | null {
  if(head === null || head.next === null) return head

  const stack: ArrayStack<ListNode> = new ArrayStack()
  let current: ListNode | null = head
  while(current) {
    stack.push(current)
    current = current.next
  }
  const newHead: ListNode = stack.pop()!
  let newHeadCurrent = newHead
  while(stack.size() !== 0) {
    const node = stack.pop()!
    /** 让当前节点的next指向下一个节点 */
    newHeadCurrent.next! = node
    /** 将指针移向下一个节点 */
    newHeadCurrent = newHeadCurrent.next
  }

  newHeadCurrent.next = null
  return newHead
};

// 模拟数据进行测试
const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const newHead = reverseList(node1)

let current = newHead
while (current) {
  console.log(current.val)
  current = current.next
}
import ListNode from "./leetcode_ListNode";

export function reverseList(head: ListNode | null): ListNode | null {
  if(head === null || head.next === null) return head

  let newHead: ListNode | null = null

  while(head) {
    /** 防止断开链表后被回收 */
    const current = head.next
    
    head.next = newHead // null 

    /** 后续相当于在链表头部添加元素 */
    newHead = head 

    head = current
  }
  
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
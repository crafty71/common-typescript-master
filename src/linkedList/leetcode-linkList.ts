/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start
class Nodes {
    value: number
    next: Nodes | null
    constructor(value: number) {
        this.value = value
        this.next = null
    }
}
class MyLinkedList {
    head: Nodes | null
    size: number
    constructor() {
        this.head = null
        this.size = 0
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) return -1;
        let current = this.head
        let position = 0
        while (position++ < index) {
            current = current!.next
        }
        return current?.value ?? null
    }

    addAtHead(val: number): void {
        const newNode = new Nodes(val)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    addAtTail(val: number): void {
        const newNode = new Nodes(val)
        let current = this.head
        if (this.size === 0) {
            this.addAtHead(val)
        } else {
            while (current?.next) {
                current = current.next
            }
            current!.next = newNode
            this.size++
        }
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.size) return;
        const newNode = new Nodes(val)
        if (index === 0) {
            this.addAtHead(val)
        } else {
            let current = this.head
            let position = 0
            while (position++ < index - 1) {
                current = current?.next!
            }
            newNode.next = current?.next!
            current!.next = newNode
            this.size++
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) return;

        let current = this.head

        if (index === 0) {
            this.head = current?.next ?? null
            this.size--
        } else {
            let position = 0
            while (position++ < index - 1) {
                current = current?.next!
            }
            current!.next = current?.next?.next ?? null
            this.size--
        }
    }
}
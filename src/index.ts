// 测试栈

import { ArrayStack } from "./stack/stack";

const stack = new ArrayStack<string>()

stack.push('liMing');
stack.push('lucy');
console.log(stack.isEmpty())
console.log(stack.peek())
stack.pop()
console.log(stack.size())



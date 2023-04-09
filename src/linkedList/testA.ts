import { LinkedList } from "."

const linkedList = new LinkedList<string>()
console.log('------------ 测试append ------------')
linkedList.append("aaa")
linkedList.append("bbb")
linkedList.append("ccc")
linkedList.append("ddd")
linkedList.traverse()

console.log('------------ 测试insert ------------')
linkedList.insert("abc", 0)
linkedList.traverse()
linkedList.insert("cba", 2)
linkedList.insert("nba", 6)
linkedList.traverse()

// 测试删除节点
console.log('------------ 测试removeAt ------------')
linkedList.removeAt(0)
linkedList.removeAt(0)
linkedList.traverse()

console.log(linkedList.removeAt(2))
linkedList.traverse()
console.log(linkedList.removeAt(3))
linkedList.traverse()

console.log('------------ 测试get ------------')
console.log(linkedList.get(0))
console.log(linkedList.get(1))
console.log(linkedList.get(2))

console.log('------------ 测试update ------------')
linkedList.updated( 1,"why")
linkedList.updated( 2, "kobe")


console.log('------------ 测试indexOf ------------')
console.log(linkedList.indexOf("cba"))
console.log(linkedList.indexOf("why"))
console.log(linkedList.indexOf("kobe"))
console.log(linkedList.indexOf("james"))
linkedList.traverse()


console.log('------------ 测试remove ------------')
linkedList.remove("why")
linkedList.remove("cba")
linkedList.remove("kobe")
linkedList.traverse()
console.log(linkedList.isEmpty())
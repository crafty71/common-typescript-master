import { LinkedList } from ".";

const LinkListNum = new LinkedList<number>()

LinkListNum.append(1)
LinkListNum.append(2)
LinkListNum.append(3)
LinkListNum.append(4)

LinkListNum.insert(5,4)

LinkListNum.insert(6,4)

LinkListNum.removeAt(4)

console.info(LinkListNum.get(4))


LinkListNum.updated(4,6)

console.log(LinkListNum.indexOf(5))

console.log(LinkListNum.indexOf(4))

LinkListNum.remove(1)
LinkListNum.remove(2)
LinkListNum.remove(3)
LinkListNum.remove(4)
LinkListNum.remove(6)

console.info(LinkListNum.isEmpty())

LinkListNum.traverse()
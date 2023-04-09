import { Queue } from './queue';


const hopPotato = (name: string[], num: number) => {
  const queue = new Queue<string>()

  for (const item of name) {
    queue.enqueue(item)
  }

  while(queue.size() > 1) {
    for (let index = 0; index < num; index++) {
      const member =  queue.dequeue()
      queue.enqueue(member)    
    }
    queue.dequeue()
  }

  const leftName = queue.dequeue()
  const index = name.indexOf(leftName)

  return index
}

const names = ["why", "james", "kobe", "curry","abc", "cba", "nba", "mba"]
const leftIndex = hopPotato(["why", "james", "kobe", "curry","abc", "cba", "nba", "mba"], 5)
console.log(leftIndex)
console.log(names[leftIndex])
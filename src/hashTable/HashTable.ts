class hashTable<T> {
  public storage: [string, T][][] = []
  private count: number = 0
  private limit: number = 7

  private hashIndex(str: string, max: number) {
    let hashCode = 0

    /** 霍纳算法 */
    for (let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i)      
    }

    return hashCode % max
  }

  private isPrime(num: number) {
    const sqrt = Math.sqrt(num)
    for (let i = 2; i < sqrt; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  private getNextPrime(num: number) {
    let newPrime = num

    while(!this.isPrime(newPrime)){
      newPrime ++ 
    }

    return newPrime
  }

  put(key: string, value: T) {
    const index = this.hashIndex(key, this.limit)

    let bucket = this.storage[index]

    if(!bucket) {
      bucket = []
      this.storage[index] = bucket
    }

    let isUpdate = false
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      if(tuple[0] ===key) {
        tuple[1] = value
        isUpdate = true
        break
      }
    }

    if(!isUpdate) {
      bucket.push([key,value])
      this.count ++ 
      if (this.count > this.limit * 0.75) {
        this.resize(this.limit * 2)
      }
    }
  }

  get(key: string): T | undefined {
    const index = this.hashIndex(key, this.limit)

    const bucket = this.storage[index]

    if(!bucket) {
      return null
    }

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      if(tuple[0] === key) {
        return tuple[1]
      }
      
    }
    return null
  }

  delete(key: string): T | null {
    const index = this.hashIndex(key, this.limit)

    const bucket = this.storage[index]

    if(!bucket) return null

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      if(tuple[0] === key) {
        bucket.splice(i, 1)
        this.count --
        if (this.limit > 8 && this.count < this.limit * 0.25) {
          this.resize(Math.floor(this.limit / 2))
        }
        return tuple[1]
      }
    }

    return null
  }

  resize(newLimit: number) {
    const oldStorage = this.storage


    this.limit = this.getNextPrime(newLimit) 

    if(this.limit < 7) {
      this.limit = 7
    }

    this.count = 0 

    this.storage = []

    oldStorage.forEach(bucket => {
      if(!bucket) return 

      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i]
        this.put(tuple[0],tuple[1])      
      }
    })
  }
}

const hashTables = new hashTable<number>()

hashTables.put('aaa', 1)
hashTables.put('bbb', 2)
hashTables.put('ccc', 3)
hashTables.put('ddd', 4)
hashTables.put('eee', 5)
hashTables.put('fff', 6)
hashTables.put('ggg', 7)
hashTables.put('fff', 8)

console.log(hashTables.get('aaa'))
console.log(hashTables)

hashTables.delete('fff')
hashTables.delete('ggg')
hashTables.delete('eee')
hashTables.delete('aaa')
hashTables.delete('bbb')
hashTables.delete('ccc')

console.log(hashTables)
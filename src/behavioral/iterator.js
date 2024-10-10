/**
 * Iterator provides controls to traverse a collection of elements without exposing the underlying representation of the collection.
 * So, that means, we should not allow any client to add or remove elements from the collection. There is a concrete iterator that
 * traverses the collection and provides the current element.
 *
 *
 */

function CustomArray(contents) {
    if (!Array.isArray(contents)) {
        throw new Error('CustomArray only accepts array as argument')
    }
    this.contents = contents
    this.iterator = new Iterator(this.contents)

    this.getIterator = function () {
        return this.iterator
    }
}

function Iterator(array) {
    this.array = array
    this.index = 0

    this.next = function () {
        if (this.index === this.array.length) {
            console.log('Already at the end of the array')
            return
        }
        this.index++
    }

    this.prev = function () {
        if (this.index === 0) {
            console.log('Already at the start of the array')
            return
        }
        this.index--
    }

    this.current = function () {
        return this.array[this.index]
    }

    this.isDone = function () {
        return this.index >= this.array.length
    }
}

// Usage 
const myList = new CustomArray([
    1,
    2,
    3,
    4,
    5,
    { name: 'John' },
    [1, 2, 3],
    'hello',
    'world',
])
const iterator = myList.getIterator()
console.log(iterator.current()) // 1
iterator.next()
console.log(iterator.current()) // 2
for (let i = 0; i < 4; i++) {
    iterator.next()
}
console.log(iterator.current()) // { name: 'John' }
for (let i = 0; i < 4; i++) {
    iterator.next()
}
console.log(iterator.isDone()) // true

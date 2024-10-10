/**
 * Strategy defines a set of interchangeable algorithms that is selected by the client. Rather than
 * implementing the logic directly in the client (or even create a central strategy class with large
 * conditional statement), the algorithms are encapsulated in their own classes and the client can set
 * the algorithm that it uses.
 *
 * Contexts can pass themselves to the strategy to allow the strategy to access the context's data.
 */

// These are the encapsulated algorithms.
const searchObjectStrings = {
    search: function (data, searchString) {
        return Object.entries(data).filter(([key, value]) =>
            value.includes(searchString)
        )
    },
}

const searchArrayStrings = {
    search: function (data, searchString) {
        return data.filter((value) => value.includes(searchString))
    },
}

const searchInString = {
    search: function (str, searchString) {
        return str.includes(searchString)
    },
}

// The context class
function SearchContext(searchString) {
    this.strategy = null
    this.data = null
    this.searchString = searchString

    this.setData = function (data) {
        if (data === this.data) return

        if (data === null) {
            throw new Error('Data is required')
        }

        this.data = data

        if (Array.isArray(this.data)) {
            this.strategy = searchArrayStrings
        } else if (typeof this.data === 'string') {
            this.strategy = searchInString
        } else {
            this.strategy = searchObjectStrings
        }
    }

    this.setSearchString = function (searchString) {
        this.searchString = searchString
    }

    this.search = function () {
        return this.strategy.search(this.data, this.searchString)
    }
}

// Usage
const myArray = ['hello', 'world', 'foo', 'bar', 'hello world']
const myObject = {
    key1: 'hello',
    key2: 'world',
    key3: 'foo',
    key4: 'bar',
    key5: 'hello world',
}
const myString = 'hello world foo bar'

const searchContext = new SearchContext('hello')
searchContext.setData(myArray)
console.log(searchContext.search()) // [ 'hello', 'hello world' ]

searchContext.setData(myObject)
console.log(searchContext.search()) // [ [ 'key1', 'hello' ], [ 'key5', 'hello world' ] ]

searchContext.setData(myString)
console.log(searchContext.search()) // true

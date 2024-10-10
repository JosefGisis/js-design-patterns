/**
 * Visitor pattern encapsulates the methods in an object, so they are easier to understand
 * and modify. It is useful when you have a complex object structure and each object has
 * different methods that need to be called. The visitor contains the methods for the object structure
 * and the object structure contains the accept method that calls the visitor's method. The visitor
 * "visits" and "lends" its methods to the object.
 *
 * This pattern makes it easier to add new methods and simplifies the object structure. It also good
 * for separating concerns. The object structure does not need to know about the visitor's methods.
 * However, the visitor violates the encapsulation principle because it contains the methods for the
 * object structure.
 *
 * Because functions are first-class objects in JavaScript, we can use functions as objects and pass
 * them around. This makes it easy to implement the visitor pattern in JavaScript.
 * We just need to bind the object to the method.
 */

const loggerMethods = {
    logNumber: function () {
        console.log(this.number)
    },
    logString: function () {
        console.log(this.string)
    },
    logArray: function () {
        this.array.forEach((item) => console.log(item))
    },
}

const incrementerMethods = {
    incrementNumber: function () {
        this.number++
    },
    incrementString: function () {
        this.string = String(parseInt(this.string) + 1)
    },
    incrementArray: function (array) {
        this.array = this.array.map((item) => item + 1)
    },
}

// This is not a complex inheritance structure, but it is a good example of how the visitor pattern
// can be used to encapsulate methods.
function CustomNumber(number) {
    this.number = number
    this.log = loggerMethods.logNumber.bind(this)
    this.increment = incrementerMethods.incrementNumber.bind(this)
}

function CustomString(str) {
    this.string = str
    this.log = loggerMethods.logString.bind(this)
    this.increment = incrementerMethods.incrementString.bind(this)
}

function CustomArray(array) {
    this.array = array
    this.log = loggerMethods.logArray.bind(this)
    this.increment = incrementerMethods.incrementArray.bind(this)
}

// Usage
const number = new CustomNumber(5)
const string = new CustomString('5')
const array = new CustomArray([1, 2, 3])

number.increment()
string.increment()
array.increment()

number.log() // 5
string.log() // 5
array.log() // 1 2 3

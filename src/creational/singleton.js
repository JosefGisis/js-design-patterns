/**
 * The singleton pattern is a creational pattern that ensures that only one instance of a class is created.
 * This is useful when exactly one object is needed to coordinate actions across the system.
 *
 * JavaScript can create singleton objects in a much easier way, using an object literal.
 */

const mySingleton = {
    property1: 'something',
    property2: 'something else',

    someOperation: function () {
        console.log(`doing ${this.property1} and ${this.property2}`)
    },
}

mySingleton.someOperation()

/**
 * However, this does not provide some of this nifty features that a class-based singleton can provide,
 * such as protecting the singleton's properties and methods.
 *
 * Here are a couple of ways we can accomplish that:
 */

// If we don't want the singleton to ever change we could just use Object.freeze()
// This allows us to directly access property1 and property2 but it is read only and
// cannot change.
const mySingleton2 = Object.freeze({
    property1: 'something',
    property2: 'something else',

    someOperation: function () {
        console.log(`doing ${this.property1} and ${this.property2}`)
    },
})

mySingleton2.someOperation()
try {
    mySingleton2.property1 = 'something new' // This will throw an error
} catch (error) {
    console.error(error)
}

// Another method that can be more flexible is to use an IIFE (Immediately Invoked Function Expression)
// to create a closure around the singleton's properties and methods. We can also use Object.seal() to
// prevent additional properties from being added or removed from the object.

const mySingleton3 = (function () {
    let text = 'hello world'

    function getText() {
        return text
    }

    function setText(newValue) {
        if (typeof newValue === 'string') {
            text = newValue
        } else {
            throw new Error('Text must be a string')
        }
    }

    return {
        getText,
        setText,
    }
})()
Object.seal(mySingleton3)
console.log(mySingleton3.getText())
mySingleton3.setText('goodbye world')
console.log(mySingleton3.getText())

// What if we want to do something like creating a static instance to control instantiation?
function Singleton() {
    // The constructor function checks if there is an instance
    // of the class and if not, creates one.
    if (Singleton.prototype._instance === undefined) {
        const instance = {
            _message: 'this worked',
            get message() {
                return this._message
            },
            set message(value) {
                console.log('You should not change this')
                this._message = value
            },
        }

        // Seals the instance so that it cannot be modified
        Object.seal(instance)

        Singleton.prototype._instance = instance
    }
    return Singleton.prototype._instance    
}

const constructorSingleton = new Singleton()
const constructorSingleton2 = new Singleton()
console.log(constructorSingleton === constructorSingleton2) // true
constructorSingleton.message = 'another message'
console.log(constructorSingleton2.message) // another message

// This is quite a lot of voodoo for our purposes, but you get the point.

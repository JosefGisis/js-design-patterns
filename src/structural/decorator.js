/**
 * AKA: Wrapper
 *
 * The Decorator design pattern allows behavior to be added to individual objects dynamically to avoid
 * subclassing to achieve extensibility. It does this by wrapping an object
 * in an invisible object (that is, its interface conforms to the one the client expects).
 * Because the "wrapper" is invisible, you can recursively wrap objects in wrappers, which allows
 * for an unlimited number of added responsibilities.
 *
 * Wrapper are subclasses of the decorator class and are used to add responsibilities to the component.
 * Decorator class creates an invisible wrapper around the component and is subclassed to
 * add responsibilities.
 * One way of doing this is by making the decorator class an abstract class that extends the component
 * class and forwards all requests to the component. See code.
 *
 * This example will use prototypical inheritance that uses wrapper functions to decorate the objects.
 * We create a clone of the text manager that decorate the text and provide additional functionality.
 */

function TextManager(text) {
    let _text = text

    return {
        logText: function () {
            console.log(_text)
        },

        setText: function (text) {
            if (!text || !text.length) {
                _text = 'hello world'
                return
            }
            _text = text
        },

        getText: function () {
            return _text
        },
    }
}

// This function creates a decorator that will surround the text with a dunder.
// This function creates a wrapper and is literally a wrapper function.
function DunderDecorator(textManager) {
    const text = `__${textManager.getText()}__`
    return Object.create(new TextManager(text), {
        removeDunders: {
            value: function () {
                return Object.create(new TextManager(text.replace(/__/g, '')))
            },
            configurable: true,
            writable: true,
            enumerable: true,
        },
    })
}

function AsteriskDecorator(textManager) {
    const text = `*${textManager.getText()}*`
    return Object.create(new TextManager(text), {
        removeAsterisks: {
            value: function () {
                return Object.create(new TextManager(text.replace(/\*/g, '')))
            },
            configurable: true,
            writable: true,
            enumerable: true,
        },
    })
}

// We can recursively nest these objects
const helloWorld = new TextManager('hello world')
const dunderedHelloWorld = new DunderDecorator(helloWorld)
const asteriskedDunderedHelloWorld = new AsteriskDecorator(dunderedHelloWorld)
const dunderedAsteriskedDunderedHelloWorld = new DunderDecorator(
    asteriskedDunderedHelloWorld
)

dunderedAsteriskedDunderedHelloWorld.logText() // __*__hello world__*__

// We can remove dunders as this a dundered text
const dunderlessAsteriskedHelloWorld =
    dunderedAsteriskedDunderedHelloWorld.removeDunders()
dunderlessAsteriskedHelloWorld.logText() // *hello world*

// Have to make it a double asterisk to get the removeAsterisks method
const doubleAsteriskedHelloWorld = new AsteriskDecorator(
    dunderlessAsteriskedHelloWorld
)
const asterisklessHelloWorld = doubleAsteriskedHelloWorld.removeAsterisks()
asterisklessHelloWorld.logText() // hello world

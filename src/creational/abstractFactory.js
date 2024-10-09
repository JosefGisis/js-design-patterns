/**
 * The abstract factory pattern provides an interface for creating related or dependant objects
 * without specifying their concrete classes. This allows the client to be separated from the
 * specifics of the object conformities and dependencies.
 *
 * The intent of the abstract factory is to "provide an interface for creating families of related
 * or dependent objects without specifying their concrete classes."
 *
 * The heart of the problem  abstract factory is trying to solve is that sometimes we want to coordinate
 * the creation of of certain related objects; however, if it is a large number of objects, then just creating
 * those objects on the client side can lead to a lot of complexity.
 *
 * We cannot create interfaces for classes in JavaScript, but we can create a factory that will
 * provide prototypical methods for instantiating objects.
 */

function GreeterFactory() {}
GreeterFactory.prototype = {
    constructor: GreeterFactory,
    createGreeting: function () {
        return new Greeting('hello')
    },
    createGreetingTone: function () {
        return new GreetingTone('.')
    },
}

function NeutralGreeter() {}
NeutralGreeter.prototype = new GreeterFactory()

function HappyGreeter() {}
HappyGreeter.prototype = new GreeterFactory()
HappyGreeter.prototype.createGreetingTone = function () {
    return new GreetingTone('!')
}

function Greeting(text) {
    this.text = text
}

function GreetingTone(tone) {
    if (tone !== '.' && tone !== '!') {
        console.log('Invalid tone. Tone must be either "." or "!"')
        this.tone = '.'
    } else this.tone = tone
}

const happyGreeter = new HappyGreeter()
const greetingMessage = happyGreeter.createGreeting()
const greetingTone = happyGreeter.createGreetingTone()
console.log(greetingMessage.text + greetingTone.tone)

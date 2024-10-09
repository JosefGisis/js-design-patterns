/**
 * The prototype pattern is a creational design pattern in software development.
 * It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.
 * This pattern is particularly useful when the kind of objects to be created is open-ended.
 *
 * JavaScript is inherently prototype-based, so we can do this automatically by
 */

function Pet(name) {
    this.name = name
}

Pet.prototype.sayName = function () {
    console.log(this.name)
}

const rover = new Pet('Rover')

const fido = Object.create(rover, {
    name: {
        value: 'Fido',
        writable: true,
        enumerable: true,
        configurable: true,
    },
})

fido.sayName()
// super simple

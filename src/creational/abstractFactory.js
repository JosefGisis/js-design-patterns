/**
 * The abstract factory pattern provides an interface for creating related or dependant objects
 * without specifying their concrete classes. This allows the client to be separated from the
 * specifics of the object conformities and dependencies.
 *
 * The intent of the abstract factory is to "provide an interface for creating families of related
 * or dependent objects without specifying their concrete classes." While we cannot create an interface with
 * JavaScript, we can try to solve the core problem the design pattern is trying to solve. The purpose of the
 * abstract factory is that allows us to regulate the instantiation of a group of classes that have a common
 * theme or are dependent on each other.
 */

// Because we do not have interfaces in JavaScript, we can use a duck typing (if it acts like a concrete factory, it is a concrete factory)
// Rather than constructing objects directly, the client calls the creation methods of the factory to create the objects.
const redClothingFactory = {
    createClothingSet: function () {
        this.createShirt()
        this.createPants()
        this.createShoes()
    },
    createShirt: function () {
        return new RedShirt()
    },
    createPants: function () {
        return new RedPants()
    },
    createShoes: function () {
        return new RedShoes()
    },
}

// Blue clothing factory
const blueClothingFactory = {
    createClothingSet: function () {
        this.createShirt()
        this.createPants()
        this.createShoes()
    },
    createShirt: function () {
        return new BlueShirt()
    },
    createPants: function () {
        return new BluePants()
    },
    createShoes: function () {
        return new BlueShoes()
    },
}

// Red clothing products
function RedShirt() {
    console.log('Red shirt created')
}

function RedPants() {
    console.log('Red pants created')
}

function RedShoes() {
    console.log('Red shoes created')
}

// Blue clothing products
function BlueShirt() {
    console.log('Blue shirt created')
}

function BluePants() {
    console.log('Blue pants created')
}

function BlueShoes() {
    console.log('Blue shoes created')
}

// Usage (client)
let clothingFactory = redClothingFactory
clothingFactory.createClothingSet()

clothingFactory = blueClothingFactory
clothingFactory.createClothingSet()

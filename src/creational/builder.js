/**
 * The builder design pattern separates the construction of a complex object from its representation.
 * This allows greater flexibility and control over the construction process and allows quick changes to the
 * object being built.
 *
 * The following example demonstrates prototypical inheritance as a way to implement the builder design pattern.
 * The prototype contains default values and methods for building a bread object. Constructors or objects that inherit from
 * the prototype can override the default values and methods to create a different type of bread.
 */

// BreadBuilder prototype
function BreadBuilder() {}
BreadBuilder.prototype = {
    ingredients: 'eggs, flour, and water',
    addIngredients: function () {
        console.log('adding ' + this.ingredients)
    },
    letRise: function () {
        console.log('letting the dough rise for one hour')
    },
    bake: function () {
        console.log('baking the bread')
    },
}

// Prototyping white bread builder
// Whole wheat bread builder
const wholeWheatBreadBuilder = Object.create(BreadBuilder.prototype, {
    ingredients: {
        value: 'whole wheat flour, eggs, and water',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    letRise: {
        value: function () {
            console.log('letting the whole wheat dough rise for two hours')
        },
    },
})

// Usage (client)
const whiteBreadBuilder = new BreadBuilder()

let breadBuilder = whiteBreadBuilder

// You could make this an object with a method that calls the functions, but this still seperates the construction of the object from its representation
function bakeBread() {
    breadBuilder.addIngredients()
    breadBuilder.letRise()
    breadBuilder.bake()
}

bakeBread()

breadBuilder = wholeWheatBreadBuilder

bakeBread()

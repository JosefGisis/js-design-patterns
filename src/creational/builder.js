/**
 * The builder design pattern seperates the construction of a complex object from its representation.
 * This allows greater flexibility and control over the construction process and allows quick changes to the
 * object being built.
 */

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

const whiteBreadBuilder = new BreadBuilder()

let breadBuilder = whiteBreadBuilder

function bakeBread() {
    breadBuilder.addIngredients()
    breadBuilder.letRise()
    breadBuilder.bake()
}

bakeBread()

breadBuilder = wholeWheatBreadBuilder

bakeBread()

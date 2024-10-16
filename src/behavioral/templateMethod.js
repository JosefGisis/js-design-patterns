/**
 * A template method defines the steps of an algorithm but defers the implementation of some steps to subclasses.
 * The steps of the algorithm are methods that can be defined in the base class or overridden in the subclass. One of
 * the methods can be a hook, which is a method that does nothing by default but can be overridden by the subclass. Either way,
 * all the methods are called in the same order by the template method.
 * This pattern is useful when you have an algorithm that has a fixed set of steps but the implementation of those steps can vary.
 *
 * The template method is related the builder patterns in that the builder pattern often uses a template method to define the building process.
 *
 * With prototypes, all prototype methods are essentially hooks; that is, they have a default implementation that can be overridden
 * by the "subclass" if needed. We could leave some prototype methods empty and throw an error if they are called, but what is the
 * point of prototyping if we don't use its features?
 */

function BakeBread() {}
BakeBread.prototype = {
    doMakeBread: function () {
        this.prepareIngredients()
        this.mixIngredients()
        this.kneadDough()
        this.letDoughRise()
        this.bakeDough()
    },
    prepareIngredients: function () {
        console.log('Getting flour, water, and yeast')
    },
    mixIngredients: function () {
        console.log('Mixing ingredients')
    },
    kneadDough: function () {
        console.log('Kneading dough')
    },
    letDoughRise: function () {
        console.log('Letting dough rise')
    },
    bakeDough: function () {
        console.log('Baking dough')
    },
}

// Set sourdough as the prototype inheritor of bake bread
function BakeSourdough() {
    // override the prepareIngredients and letDoughRise methods
    this.prepareIngredients = function () {
        console.log('Getting flour, water, and sourdough starter')
    }
    // override the letDoughRise method
    this.letDoughRise = function () {
        console.log('Letting dough rise for 24 hours')
    }
}
BakeSourdough.prototype = new BakeBread()
BakeSourdough.prototype.constructor = BakeSourdough

// Set whole wheat as the prototype inheritor of bake bread
function BakeWholeWheat() {
    this.prepareIngredients = function () {
        console.log('Getting whole wheat flour, water, and yeast')
    }
    this.bakeDough = function () {
        console.log('Baking dough for 40 minutes')
    }
}
BakeWholeWheat.prototype = new BakeBread()
BakeWholeWheat.prototype.constructor = BakeWholeWheat

// Usage
const sourdough = new BakeSourdough()
sourdough.doMakeBread()

console.log('-------------------')

const wholeWheat = new BakeWholeWheat()
wholeWheat.doMakeBread()

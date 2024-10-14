/**
 * Factory Method is a creational design pattern that provides an interface for creating objects in a superclass,
 * but allows subclasses to alter the type of objects that will be created. This is important when the particular
 * object that will be created is not known. The abstract factory delegate the responsibility of creating objects to
 * its subclasses.
 *
 * The intent of factory method is to "Define an interface for creating an object, but let the subclasses decide
 * which class to instantiate. Factory Method lets a class defer instantiation to subclasses." The intent is a
 * class based pattern that uses inheritance to create objects. We don't have interface in JavaScript, so we can
 * use prototypical inheritance. We will have an object that will implement some default instantiation logic, and
 * then we will have other objects that will inherit from the default object and override the instantiation logic.
 */

function AggregateManager() {
    this.aggregate = new Array(['hello', 'world', 'how', 'are', 'you'])
}
AggregateManager.prototype.logElements = function () {
    if (Array.isArray(this.aggregate)) {
        this.aggregate.forEach((element) => {
            console.log(element)
        })
    } else {
        for (const key in this.aggregate) {
            console.log(this.aggregate[key])
        }
    }
}
AggregateManager.prototype.logAggregate = function () {
    console.log(this.aggregate)
}

// objectManager adopts the AggregateManager prototype, but uses an object as its aggregate
// rather than an array.
const objectManager = Object.create(AggregateManager.prototype, {
    aggregate: {
        value: new Object({
            string1: 'hello',
            string2: 'world',
            string3: 'how',
            string4: 'are',
            string5: 'you',
        }),
        writable: true,
        enumerable: true,
        configurable: true,
    },
})

// Usage (client)
objectManager.logElements()
objectManager.logAggregate()

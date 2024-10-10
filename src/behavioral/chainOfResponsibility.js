/**
 * Chain of responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers.
 * This decouples senders and receivers of a request and promote loose coupling. The downside is that receipt of
 * a request is not guaranteed.
 *
 * Think of the way React components passes an error up the component tree. Usually the root component will catch
 * this error and will render the whole app as an error page. However, we can use an error boundary to catch the
 * error and render a specific error page. This is the equivalent of the chain of responsibility pattern and the
 * error boundary is the object that handles the error rather than passing it up the chain.
 *
 * Notice how the following example is similar to the composite pattern. The difference is that the chain of
 * responsibility pattern is used to pass a request up the chain of responsibility.
 *
 * JavaScript is uniquely suited to implement the chain of responsibility pattern because of its prototype-based
 * inheritance. This allows us to easily pass a request up the chain of responsibility. The base prototype object
 * will handle the request, and other prototypes will pass the request up the chain.
 */

// Widget defines the "interface" for the chain of responsibility
// It has a detailed constructor because it will be reused by other constructors
function Widget(name, successor) {
    Object.defineProperties(this, {
        _successor: {
            value: successor,
            writable: true,
            configurable: false,
            enumerable: false,
        },
        successor: {
            // Successor is read-only
            get: function () {
                return this._successor
            },
        },
        // Name is useful for debugging
        name: {
            value: name,
            writable: false,
            configurable: false,
            enumerable: true,
        },
    })
}
// Widget is the base prototype object
Widget.prototype = {
    constructor: Widget,
    handleError: function (error) {
        this.successor.handleError(error)
    },
    addWidget: function (widget) {
        this.successor.handleError(new Error('addWidget is not implemented'))
    },
    getWidgets: function () {
        this.successor.handleError(new Error('getWidgets is not implemented'))
    },
}

// Leaf prototype just copies the Widget prototype
function Leaf(name, successor) {
    // We call the Widget constructor with the name and successor, so leaf can acquire the properties
    // of the base prototype object
    Widget.prototype.constructor.call(this, name, successor)
}
Leaf.prototype = new Widget()
Leaf.prototype.constructor = Leaf

// Composite prototype is the base prototype object for the composite objects
function Composite(name, successor) {
    Widget.prototype.constructor.call(this, name, successor)
    this.widgets = []
}
// We copy the Widget prototype to the Composite prototype and modify the relevant methods
Composite.prototype = Object.create(Widget.prototype, {
    constructor: {
        value: Composite,
        writable: true,
        configurable: true,
        enumerable: true,
    },
    addWidget: {
        value: function (widget) {
            this.widgets.push(widget)
        },
        writable: true,
        configurable: true,
        enumerable: true,
    },
    getWidgets: {
        value: function () {
            return this.widgets
        },
        writable: true,
        configurable: true,
        enumerable: true,
    },
})

// ErrorHandlingComposite is a composite object that "inherits" from Composite
// It only modifies the handleError method
function ErrorHandlingComposite(name, successor) {
    Composite.prototype.constructor.call(this, name, successor)
    this.handleError = function (error) {
        console.log(`Error handled in ${this.name}: ${error.message}`)
    }
}
ErrorHandlingComposite.prototype = new Composite()
ErrorHandlingComposite.prototype.constructor = ErrorHandlingComposite

// Usage
const root = new ErrorHandlingComposite('root', null)
const firstMainDiv = new Composite('non-error handling div', root)
const secondMainDiv = new ErrorHandlingComposite('error handling div', root)
root.addWidget(firstMainDiv)
root.addWidget(secondMainDiv)

const firstLeaf = new Leaf('leaf', firstMainDiv)
firstMainDiv.addWidget(firstLeaf)
const secondLeaf = new Leaf('leaf', secondMainDiv)
secondMainDiv.addWidget(secondLeaf)
firstLeaf.getWidgets() // will throw an error that will do up the chain to the root

console.log('\n', secondMainDiv.successor) // root

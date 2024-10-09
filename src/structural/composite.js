/**
 * The Composite design pattern composes objects into part-whole hierarchies, with the purpose of
 * allowing client to uniformly interact with composite and individual objects.
 *
 * This structure also supports recursive composition, which allows an object to be a part of multiple
 * objects at the same time.
 */

// This example will use strings as the leaf objects and arrays as the composite objects.
// Component prototype
function Component() {}
Component.prototype = {
    constructor: Component,
    isComposite: function () {
        return this.children ? true : false
    },
    isLeaf: function () {
        return this.text ? true : false
    },
    logText: function () {
        console.log(this.text)
    },
    remove: function () {
        console.log('Component does not necessarily contain any children')
    },
    getChild: function () {
        console.log('Component does not necessarily contain any children')
    },
    getChildren: function () {
        console.log('Component does not necessarily contain any children')
    },
}

// Leaf object
function Sentence(text) {
    this.text = text
    this.add = function () {
        console.log('Cannot add to a leaf')
    }
    this.remove = function () {
        console.log('Leaves do not have children')
    }
    this.getChild = function () {
        console.log('Leaves do not have children')
    }
    this.getChildren = function () {
        return []
    }
}
Sentence.prototype = new Component()

// Composite object
function Paragraph() {
    this.children = []

    this.logText = function () {
        this.children.forEach((child) => {
            if (child instanceof Sentence) child.logText()
            else {
                console.log(' ')
                child.logText()
                console.log(' ')
            }
        })
    }

    this.add = function (child) {
        this.children.push(child)
    }
    this.remove = function (i) {
        this.children.splice(i, 1)
    }
    this.getChild = function (i) {
        if (i < 0 || i >= this.children.length) return null
        return this.children[i]
    }
    this.getChildren = function () {
        return this.children
    }
}
Paragraph.prototype = new Component()

// Usage (client)
const paragraph = new Paragraph()
paragraph.add(new Sentence('Hello world'))
paragraph.add(new Sentence('This is a sentence.'))
paragraph.add(new Sentence('It is contained in a paragraph.'))

// I can recursively add composites to composites until I run out of life.
const superParagraph = new Paragraph()
superParagraph.add(paragraph)
superParagraph.add(new Sentence('This is a sentence in the super paragraph.'))

const anotherParagraph = new Paragraph()
anotherParagraph.add(new Sentence('This is a sentence in another paragraph.'))
anotherParagraph.add(
    new Sentence('This is another sentence in another paragraph.')
)

superParagraph.add(anotherParagraph)

superParagraph.logText()

// lets remove a sentence
anotherParagraph.remove(1)
superParagraph.logText()

// lets remove a paragraph
superParagraph.remove(1)
superParagraph.logText()

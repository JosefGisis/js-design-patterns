/**
 * The Composite design pattern composes objects into part-whole hierarchies, with the purpose of
 * allowing client to uniformly interact with composite and individual objects.
 *
 * This structure also supports recursive composition, which allows an object to be a part of multiple
 * objects at the same time.
 *
 * In a class-based example we would a component superclass that would define the interface for both
 * leaf and composite objects. Leaf objects would be the primitive objects that do not have children,
 * while composite objects would be the objects that can contain children. However, in JavaScript we
 * can use prototypical inheritance to create a similar structure, but given the fact that not much of
 * the implementation for composite and leaf objects would be shared, a prototype just adds complexity
 * without much benefit. Instead we utilize duck typing to conduct behavior.
 */

// Leaf object
// Sentence really would benefit from a prototype as may have many instances
// that should share the same methods.
function Sentence(text) {
    this.text = text
}
Sentence.prototype = {
    constructor: Sentence,
    logText: function () {
        console.log(this.text)
    },
    add: function () {
        console.log('Cannot add to a leaf')
    },
    remove: function () {
        console.log('Leaves do not have children')
    },
    getChild: function () {
        console.log('Leaves do not have children')
    },
    getChildren: function () {
        return []
    },
}

// Composite object
function Paragraph() {
    this.children = []
}
Paragraph.prototype = {
    constructor: Paragraph,
    logText: function () {
        this.children.forEach((child) => {
            if (child instanceof Sentence) child.logText()
            else {
                console.log(' ')
                child.logText()
                console.log(' ')
            }
        })
    },
    add: function (child) {
        this.children.push(child)
    },
    remove: function (i) {
        this.children.splice(i, 1)
    },
    getChild: function (i) {
        if (i < 0 || i >= this.children.length) return null
        return this.children[i]
    },
    getChildren: function () {
        return this.children
    },
}

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

/** The the flyweight design pattern uses sharing to allow a large number of objects
 * to be created and used efficiently.
 *
 * Sharing objects may add more processing overhead than creating new objects; however,
 * it allows a large number of objects to be created without being very costly on memory.
 *
 * Flyweight usually uses composite for recursive composition, and a factory method to
 * manage the creation of flyweight objects.
 */

const FlyweightFactory = (function () {
    const charMap = new Map()

    function Character(char) {
        this.character = char.toLowerCase()
        this.draw = function () {
            console.log(this.character)
        }
    }

    function Space() {
        this.draw = function () {
            console.log(' ')
        }
    }

    return {
        getCharacter: function (char) {
            if (!charMap.has(char)) {
                if (char === ' ') {
                    charMap.set(char, new Space())
                } else {
                    charMap.set(char, new Character(char))
                }
            }
            return charMap.get(char)
        },
    }
})()

// Usage
const helloWorld = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
helloWorld.forEach((char) => {
    FlyweightFactory.getCharacter(char).draw()
})

const h1 = FlyweightFactory.getCharacter('h')
const h2 = FlyweightFactory.getCharacter('h')
console.log('Are h1 and h2 the same object?', h1 === h2)

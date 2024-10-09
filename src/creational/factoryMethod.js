/**
 * Factory Method is a creational design pattern that provides an interface for creating objects in a superclass
 * , but allows subclasses to alter the type of objects that will be created. This is important when the particular
 * object that will be created is not known. The abstract factory delegate the responsibility of creating objects to
 * its subclasses.
 *
 * JavaScript is not inherently class-based, so we can use function as our factory method.
 */

function objectNumber1() {
    this.name = 'objectNumber1'
}

function objectNumber2() {
    this.name = 'objectNumber2'
}

function objectNumber3() {
    this.name = 'objectNumber3'
}

function NameLogger() {
    this.loggerObject = {}
}
NameLogger.prototype = {
    setLoggerObject: function (object) {
        throw new Error('This method must be overwritten')
    },
    logName: function () {
        console.log(this.loggerObject.name)
    },
}

function FavoriteNumberLogger() {
    this.loggerObject = {}
    this.setLoggerObject = function (favoriteNumber) {
        if (favoriteNumber === 1) {
            this.loggerObject = new objectNumber1()
        } else if (favoriteNumber === 2) {
            this.loggerObject = new objectNumber2()
        } else if (favoriteNumber === 3) {
            this.loggerObject = new objectNumber3()
        } else {
            throw new Error('Invalid favorite number')
        }
    }
}
FavoriteNumberLogger.prototype = new NameLogger()

const favoriteNumberObjectLogger = new FavoriteNumberLogger()
favoriteNumberObjectLogger.setLoggerObject(2)
favoriteNumberObjectLogger.logName()

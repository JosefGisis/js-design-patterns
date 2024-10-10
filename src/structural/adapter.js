/**
 * The adapter pattern allow an object (the adoptee) to be able to be used with client code that expects a different interface.
 * The adapter can be done through a class which subclasses the adoptee, or it can be done through object composition (in which
 * case a delegate transforms the expected object).
 *
 * Two-way adapters can be used to easily swap interfaces in both directions.
 * Pluggable adapters are adapters that are contained in the adaptee. This is the case when the adaptee needs to make minimal
 * assumptions about the interfaces clients expect.
 */

function ContactV1(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

function ContactV2(name) {
    this.name = name
}

// Adapter
const contactAdapter = (function ContactAdapter() {
    return {
        adaptToV1: function (contact) {
            if (contact instanceof ContactV1) return contact

            const nameParts = contact.name.split(' ')
            return { firstName: nameParts[0], lastName: nameParts[1] }
        },
        adaptToV2: function (contact) {
            if (contact instanceof ContactV2) return contact

            return { name: contact.firstName + ' ' + contact.lastName }
        },
    }
})()

// Usage
const johnDoe = new ContactV1('John', 'Doe')
const janeSmith = new ContactV2('Jane Smith')

function logContactName(contact) {
    console.log(contact.name)
}

function logFirstName(contact) {
    console.log(contact.firstName)
}

logContactName(contactAdapter.adaptToV2(johnDoe))
logContactName(contactAdapter.adaptToV2(janeSmith))
console.log('\n')
logFirstName(contactAdapter.adaptToV1(johnDoe))
logFirstName(contactAdapter.adaptToV1(janeSmith))

/**
 * This method matches the object based adapter pattern; however, we could also do some
 * prototype adapting by returning an object with a new adapter.
 */
function ContactV3(name) {
    this.name = name
}
ContactV3.prototype.logName = function () {
    console.log(this.name)
}

function ContactV4(name) {
    this.name = name
}
ContactV4.prototype.nameLogger = function () {
    console.log(this.name)
}

const contactPrototypeAdapter = (function () {
    return {
        toV3Prototype: function (contact) {
            if (contact instanceof ContactV3) return contact
            return Object.create(new ContactV3(), {
                name: {
                    value: contact.name,
                    writable: true,
                    enumerable: true,
                    configurable: true,
                },
            })
        },
        toV4Prototype: function (contact) {
            if (contact instanceof ContactV4) return contact
            return Object.create(new ContactV4(), {
                name: {
                    value: contact.name,
                    writable: true,
                    enumerable: true,
                    configurable: true,
                },
            })
        },
    }
})()

const johnDoeV3 = new ContactV3('John Doe')
const janeSmithV4 = new ContactV4('Jane Smith')

console.log('\n')

// If we were to call the nameLogger method on johnDoeV3, it would throw an error because the name property is undefined
// so lets adapt it
const adaptedJohnDoe = contactPrototypeAdapter.toV4Prototype(johnDoeV3)
adaptedJohnDoe.nameLogger()

// If we were to call the logName method on janeSmithV4, it would throw an error because the name property is undefined
// so lets adapt it
const adaptedJaneSmith = contactPrototypeAdapter.toV3Prototype(janeSmithV4)
adaptedJaneSmith.logName()

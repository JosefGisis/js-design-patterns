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
function ContactAdapter(contact) {
    this.adaptToV1 = function (contact) {
        if (contact instanceof ContactV1) {
            return contact
        } else {
            const nameParts = contact.name.split(' ')
            return { firstName: nameParts[0], lastName: nameParts[1] }
        }
    }
    this.adaptToV2 = function (contact) {
        if (contact instanceof ContactV2) {
            return contact
        } else {
            return { name: contact.firstName + ' ' + contact.lastName }
        }
    }
}

// Usage
const contactAdapter = new ContactAdapter()
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

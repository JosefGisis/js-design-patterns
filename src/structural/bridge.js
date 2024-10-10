/**
 * The bride design pattern decouples an interface from its implementation so that the two can vary independently.
 * This is useful when implementation details can vary independently from the interface. An example would be an SDK
 * that can be used with different operating systems. The bridge pattern can be used to abstract the operating system
 * details from the SDK, so developers can use the SDK without worrying about the underlying operating system.
 */

/**
 * In this example: we should be able to make or return payments without concerning ourselves as to how those payments
 * are processed. So instead of subclassing the payment processor, we use the bridge pattern to abstract the payment
 * processor from the payment object and we can easily swap out the payment processor without changing the payment object.
 */

// example payment processor. These are the implementations that we want to abstract from the payment object.
const mastercardProcessor = (function () {
    return {
        processPayment: function (amount) {
            console.log(`Processing ${amount} via Mastercard`)
        },
        refundPayment: function (amount) {
            console.log(`Refunding ${amount} via Mastercard`)
        },
    }
})()

const visaProcessor = (function () {
    return {
        processPayment: function (amount) {
            console.log(`Processing ${amount} via Visa`)
        },
        refundPayment: function (amount) {
            console.log(`Refunding ${amount} via Visa`)
        },
    }
})()

const paypalProcessor = (function () {
    return {
        processPayment: function (amount) {
            console.log(`Processing ${amount} via Paypal`)
        },
        refundPayment: function (amount) {
            console.log(`Refunding ${amount} via Paypal`)
        },
    }
})()

// payment abstraction (also a prototype)
function Payment(processor, amount) {
    this.processor = processor
    this.amount = amount
}
Payment.prototype.makePayment = function (amount) {
    this.processor.processPayment(amount)
}
Payment.prototype.refundPayment = function (amount) {
    this.processor.refundPayment(amount)
}

// Extend Payment for canadian payments
function CanadianPayment(processor, amount) {
    this.processor = processor
    this.amount = amount * 1.3
}
CanadianPayment.prototype = new Payment()
CanadianPayment.prototype.constructor = CanadianPayment

// Usage
const canadianPayment = new CanadianPayment(mastercardProcessor)
canadianPayment.makePayment(100)
canadianPayment.refundPayment(100)

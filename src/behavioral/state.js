/**
 * The State design pattern allows an object to change its behavior when its internal state changes.
 * While it is possible for an object to change its behavior by having large conditional statements,
 * this can be hard to understand and difficult to maintain. The State pattern delegates the behavior
 * to an external object.
 */

// These states manage the state of the context (Order). That is
// they move state when an action is performed such as checkout or pay.
function CartState(order) {
    this.order = order
    this.addItems = function () {
        console.log('item added to cart')
    }
    this.removeItems = function () {
        console.log('item removed from cart')
    }
    this.checkout = function () {
        console.log('proceeding to checkout')
        this.order.setState(this.order.checkoutState)
    }
    this.pay = function () {
        console.log('please checkout first')
    }
}

function CheckoutState(order) {
    this.order = order
    this.addItems = function () {
        console.log('cannot add items after checkout')
    }
    this.removeItems = function () {
        console.log('cannot remove items after checkout')
    }
    this.checkout = function () {
        console.log('already checked out')
    }
    this.pay = function () {
        console.log('payment successful')
        this.order.setState(this.order.paidState)
    }
}

function PaidState(order) {
    this.order = order
    this.addItems = function () {
        console.log('start a new order to add items')
    }
    this.removeItems = function () {
        console.log('start a new order to remove items')
    }
    this.checkout = function () {
        console.log('order complete')
    }
    this.pay = function () {
        console.log('order complete')
    }
}

// context. Contains the state and seems to change behavior
// based on the state
function Order() {
    this.cartState = new CartState(this)
    this.checkoutState = new CheckoutState(this)
    this.paidState = new PaidState(this)

    this.state = this.cartState

    this.setState = function (state) {
        this.state = state
    }

    this.addItems = function () {
        this.state.addItems()
    }

    this.removeItems = function () {
        this.state.removeItems()
    }

    this.checkout = function () {
        this.state.checkout()
    }

    this.pay = function () {
        this.state.pay()
    }
}

// Usage (client code)
const order = new Order()

// in card
order.addItems()
order.removeItems()
order.pay()

// move to checkout
order.checkout()

// in checkout
console.log('\n', '---')
order.addItems()
order.removeItems()
order.checkout()

// pay
order.pay()

// in paid
console.log('\n', '---')
order.addItems()
order.removeItems()
order.checkout()
order.pay()

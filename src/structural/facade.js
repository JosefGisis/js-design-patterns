/**
 * The facade design pattern provides a unified interface to a set of interfaces in a subsystem.
 * Clients can use the facade class to access the subsystem with ease, which reduces the number of
 * objects that the client needs to deal with because the facade class does all the work to access
 * the subsystem.
 *
 * Clients can still use the subsystem directly if they need to.
 */

// Baker manager is a facade for the subsystems at work in a bakery.
// In this example clients need not be aware of inventory management, or the details of baking a cake
// and selling a cake.

const bakeryManager = (function BakeryManager() {
    const baker = new Baker()
    const cashier = new Cashier()

    return {
        bakeCake: function () {
            baker.bakeCake()
        },
        sellCake: function () {
            cashier.sellCake(baker.cake)
        },
        checkRegister: function () {
            console.log('made ' + cashier.money + ' dollars today')
        },
    }
})()
// We can/should freeze the bakeryManager object to prevent clients from modifying it.
Object.freeze(bakeryManager)

function InventoryManager() {
    this.flour = 0
    this.sugar = 0
    this.eggs = 0

    this.stockUp = function () {
        this.flour += 100
        this.sugar += 100
        this.eggs += 100
    }

    this.useIngredients = function () {
        if (this.flour < 10 || this.sugar < 10 || this.eggs < 10) {
            console.log('Not enough ingredients. Stock up first.')
            this.stockUp()
        }
        this.flour -= 10
        this.sugar -= 10
        this.eggs -= 10
    }
}

function Baker() {
    this.cake = null

    this.bakeCake = function () {
        const inventoryManager = new InventoryManager()
        inventoryManager.stockUp()
        inventoryManager.useIngredients()
        this.cake = {
            flour: 10,
            sugar: 10,
            eggs: 10,
        }
        return this.cake
    }
}

function Cashier() {
    this.money = 0

    this.sellCake = function (cake) {
        if (!cake) {
            console.log('No cake to sell. Bake a cake first.')
            return
        }
        console.log('Sold cake:')
        console.log(cake)
        this.money += 10
    }
}

// Usage
bakeryManager.bakeCake()
bakeryManager.sellCake()
bakeryManager.bakeCake()
bakeryManager.sellCake()
bakeryManager.checkRegister()

export {}

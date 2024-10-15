/**
 * Memento stores an objects state without violating encapsulation, so it can be restored later.
 * This memento is a snapshot of an objects values at a particular time and is used for undo/redo
 * functionality.
 *
 * This is similar (although not the same) to React's useRef hook which allows us to store a mutable
 * value in a component. This value does not change on re-renders, so it is useful for restoring or
 * comparing previous values. It is not the same as memento because its value is not encapsulated.
 */

function UserOriginator(name, gender, age) {
    this.user = {
        name,
        age,
        gender,
    }

    this.setUser = function (name, gender, age) {
        this.user = {
            name,
            gender,
            age,
        }
    }

    this.getUser = function () {
        return this.user
    }

    this.createMemento = function () {
        const memento = new UserMemento(this)
        memento.setState(this, this.user)
        Object.freeze(memento)
        // We return a frozen object to prevent the memento from being changed somewhere along the way.
        return memento
    }

    this.restoreState = function (memento) {
        const oldState = memento.getState(this)
        if (!oldState) {
            console.log(
                'cannot restore state from provided memento as it does not exist'
            )
            return
        }
        this.user = oldState
    }
}

function UserMemento(originator) {
    this.state = null
    this.originator = originator

    this.setState = function (originator, state) {
        if (originator !== this.originator) {
            console.log('Cannot set state from another originator')
            return
        }
        this.state = state
    }
    
    this.getState = function (originator) {
        if (originator !== this.originator) {
            console.log('Cannot get state for another originator')
            return
        }
        return this.state
    }
}

// Usage

// Create two originators
const johnUser = new UserOriginator('John Doe', 'male', 25)
const janeUser = new UserOriginator('Jane Doe', 'female', 23)
console.log(johnUser.getUser())

// Create a memento for John
const johnMemento = johnUser.createMemento()
johnUser.setUser('Jon Doe', 'female', 30)
console.log(johnUser.getUser())

// trying to set jane's state using john's memento will not work
janeUser.restoreState(johnMemento)
johnUser.restoreState(johnMemento)
console.log(johnUser.getUser())

export {}

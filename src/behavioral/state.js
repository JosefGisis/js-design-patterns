/**
 * The State design pattern allows an object to change its behavior when its internal state changes.
 * While it is possible for an object to change its behavior by having large conditional statements,
 * this can be hard to understand and difficult to maintain. The State pattern delegates the behavior
 * to an external object.
 */

// These are state singletons. Because they are object literals, we do not have to instantiate out states
const guestState = {
    showBanner: function (name) {
        console.log('welcome to out website, create an account to get started')
    },
}

const memberState = {
    showBanner: function (name) {
        console.log('welcome back to our website ' + name)
    },
}

// The website object is the context. It has a state property that is initially set to null
// The state property is then set to either the guestState or memberState object.
const website = {
    state: null,
    userName: '',

    showBanner: function () {
        this.state.showBanner(this.userName)
    },

    openWebsite: function () {
        this.state = guestState
    },

    login: function (userName) {
        this.userName = userName
        this.state = memberState
    },
}

// Usage
website.openWebsite()
website.showBanner()
website.login('John Doe')
website.showBanner()

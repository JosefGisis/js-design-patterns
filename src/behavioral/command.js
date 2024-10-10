/**
 * Command encapsulates the a request an object. Rather than directly calling a method from an object and coupling/limiting that command
 * (say, there are a given number of argument type), we create a command class and subclasses to encapsulate the request. An invoker calls
 * that requests and the receiver and command handle it from there.
 *
 * Think of a react button component. Rather than binding the receiver and the request directly, we can create a command class that is invoked
 * by a third party (in this case the button component). Now we can call that command from anywhere and move it at will without changing the
 * button component. We can also easily add and subtract commands (such as onCLick, onHover, etc) without changing the button component.
 */

// We create a user object that has several requests. Invokers will create requests and pass them to the user object.
function User(name, age, gender) {
    // Prepended these with an underscore because "apparently" they are defined somewhere else.
    let _name = name
    let _gender = gender
    let _age = age

    return {
        setName: function (newName) {
            _name = newName
        },
        setGender: function (newGender) {
            _gender = newGender
        },

        setAge: function (newAge) {
            _age = newAge
        },
        getInfo: function () {
            return {
                _name,
                _gender,
                _age,
            }
        },
    }
}

function SetGenderRequest(user, newGender) {
    this.user = user
    this.newGender = newGender

    this.execute = function () {
        user.setGender(newGender)
    }
}

function SetAgeRequest(user, newAge) {
    this.user = user
    this.newAge = newAge

    this.execute = function () {
        user.setAge(newAge)
    }
}

// Usage
const josefGisis = new User('Josef Gisis', 28, 'female')

console.log(josefGisis.getInfo()) // Oops, I am not 28 nor female.

const setGenderRequest = new SetGenderRequest(josefGisis, 'male')
const setAgeRequest = new SetAgeRequest(josefGisis, 25)

setGenderRequest.execute()
setAgeRequest.execute()

console.log('\n', josefGisis.getInfo())

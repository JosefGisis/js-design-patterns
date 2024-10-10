/**
 * The Mediator DS is used to reduce the complexity of communication between multiple objects or classes.
 * It creates a master object that controls the communication between the objects. This promotes loose coupling and allows for
 * easy extensibility via inheritance.
 *
 * Think of React component such as a edit user dialogue. When we open the edit user dialogue, we need to ensure certain conditions
 * before allowing a user to edit the user. We may even need to force the user to change one selection after they edit another. It would
 * become confusing if each sub-component directly communicated with each other. Instead, we can use a mediator to control the communication
 * between the components.
 */

// Modal comp
function Modal() {
    this.open = false
    this.widgets = []
    this.addWidget = function (widget) {
        this.widgets.push(widget)
    }
    this.openModal = function () {
        console.log('modal opened')
        this.open = true
    }
    this.closeModal = function () {
        console.log('modal closed')
        this.open = false
    }
}

// Text input comp
function TextInput(mediator) {
    this.text = ''
    this.mediator = mediator

    this.getValue = function () {
        return this.text
    }

    this.setValue = function (text) {
        this.text = text
        this.mediator.widgetChanged(this)
    }
}

// Button comp
function OkButton(mediator) {
    this.mediator = mediator
    this.status = 'unchecked'
    this.clickable = false

    this.click = function () {
        this.status = 'checked'
        this.mediator.widgetChanged(this)
    }
}

function CancelButton(mediator) {
    this.mediator = mediator
    this.status = 'unchecked'

    this.click = function () {
        this.status = 'checked'
        this.mediator.widgetChanged(this)
    }
}

// Mediator regulates the communication between the components
const mediator = (function () {
    return {
        textEntered: false,
        modal: undefined,
        textInput: undefined,
        okButton: undefined,
        cancelButton: undefined,

        // To prevent instantiation issues and circular dependencies, we can instantiate the components in a separate method
        instantiate: function () {
            this.modal = new Modal()
            this.textInput = new TextInput(this)
            this.okButton = new OkButton(this)
            this.cancelButton = new CancelButton(this)
            this.modal.addWidget(this.textInput)
            this.modal.addWidget(this.okButton)
            this.modal.addWidget(this.cancelButton)
        },

        // Clear the values of the widgets
        clearWidgetValues: function () {
            this.textInput.text = ''
            this.okButton.status = 'unchecked'
            this.cancelButton.status = 'unchecked'
        },

        // Long conditional to determine which widget was clicked
        widgetChanged: function (widget) {
            if (!modal.open) {
                console.log('Modal is closed. How are you clicking buttons?')
                return
            }

            // If the ok button is clicked we need to check if text was entered before closing the modal
            if (widget === this.okButton) {
                console.log('OK button clicked')
                if (this.textEntered) {
                    console.log(
                        `Thank you for entering text. Text: ${this.textInput.getValue()}`
                    )
                    this.modal.closeModal()
                    this.clearWidgetValues()
                } else {
                    this.okButton.status = 'unchecked'
                    console.log('Please enter text before clicking OK')
                }
                // When text input value changes we check if the input has been cleared or filled and we set the textEntered flag
                // to the correct value
            } else if (widget === this.textInput) {
                console.log('Text entered')
                if (this.textInput.getValue() === '') {
                    this.textEntered = false
                    console.log('You have cleared the text field')
                } else {
                    this.textEntered = true
                    console.log(
                        'You have entered a valid value in the text field'
                    )
                }
                // The user has clicked the cancel button and the modal can close without any checks
            } else {
                console.log('Cancel button clicked')
                this.modal.closeModal()
                this.clearWidgetValues()
            }
        },
    }
})()

// Usage
// Calling class methods will mimic a GUI
mediator.instantiate()
const { cancelButton, modal, okButton, textInput } = mediator
// Click button before modal is open
cancelButton.click()
modal.openModal()
// Click OK button without entering text
okButton.click()
cancelButton.click()
// reopen modal
modal.openModal()
// Enter text
textInput.setValue('Hello World')
// Click OK button
okButton.click()

export {}

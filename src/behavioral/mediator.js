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

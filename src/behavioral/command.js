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
/**
 * Chain of responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers.
 * This decouples senders and receivers of a request and promote loose coupling. The downside is that receipt of
 * a request is not guaranteed.
 *
 * Think of the way React components passes an error up the component tree. Usually the root component will catch
 * this error and will render the whole app as an error page. However, we can use an error boundary to catch the
 * error and render a specific error page. This is the equivalent of the chain of responsibility pattern and the
 * error boundary is the object that handles the error rather than passing it up the chain.
 *
 * Notice how the following example is similar to the composite pattern. The difference is that the chain of
 * responsibility pattern is used to pass a request up the chain of responsibility.
 */

// We will create an example of mock components that will pass an error up the chain of responsibility.


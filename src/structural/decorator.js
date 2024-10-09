/**
 * The Decorator design pattern allows behavior to be added to individual objects dynamically and
 * is a good way to avoid subclassing to achieve extensibility. It does this by wrapping an object
 * in an invisible object (that is, its interface conforms to the one the client expects).
 * Because the "wrapper" is invisible, you can recursively wrap objects in wrappers, which allows
 * for an unlimited number of added responsibilities.
 *
 * Wrapper are subclasses of the decorator class and are used to add responsibilities to the component.
 * Decorator class creates an invisible wrapper around the component and is subclassed to
 * add responsibilities.
 * One way of doing this is by making the decorator class an abstract class that extends the component
 * class and forwards all requests to the component. See code.
 *
 * AKA: Wrapper
 */


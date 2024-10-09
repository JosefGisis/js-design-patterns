/**
 * Visitor pattern encapsulates the methods in an object, so they are easier to understand
 * and modify. It is useful when you have a complex object structure and each object has
 * different methods that need to be called. The visitor contains the methods for the object structure
 * and the object structure contains the accept method that calls the visitor's method. The visitor
 * "visits" and "lends" its methods to the object.
 *
 * This pattern makes it easier to add new methods and simplifies the object structure. It also good
 * for separating concerns. The object structure does not need to know about the visitor's methods.
 * However, the visitor violates the encapsulation principle because it contains the methods for the
 * object structure.
 */

// The abstract visitor class contains methods for each element in the object structure.
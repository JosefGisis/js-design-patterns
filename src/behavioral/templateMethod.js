/**
 * A template method defines the steps of an algorithm but defers the implementation of some steps to subclasses.
 * The steps of the algorithm are methods that can be defined in the base class or overridden in the subclass. One of
 * the methods can be a hook, which is a method that does nothing by default but can be overridden by the subclass. Either way,
 * all the methods are called in the same order by the template method.
 * This pattern is useful when you have an algorithm that has a fixed set of steps but the implementation of those steps can vary.
 *
 * The template method is related the builder patterns in that the builder pattern often uses a template method to define the building process.
 */
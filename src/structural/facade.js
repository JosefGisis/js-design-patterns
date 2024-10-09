/**
 * The facade design pattern provides a unified interface to a set of interfaces in a subsystem.
 * Clients can use the facade class to access the subsystem with ease, which reduces the number of
 * objects that the client needs to deal with because the facade class does all the work to access
 * the subsystem.
 *
 * Clients can still use the subsystem directly if they need to.
 */

// Baker manager is a facade for the subsystems at work in a bakery.
// In this example clients need not be aware of inventory management, or the details of baking a cake and selling a cake.
/**
 * Strategy defines a set of interchangeable algorithms that is selected by the client. Rather than
 * implementing the logic directly in the client (or even create a central strategy class with large
 * conditional statement), the algorithms are encapsulated in their own classes and the client can set
 * the algorithm that it uses.
 */

// Context is not really necessary in this example because it is really simple, but it is included to
// demonstrate how a more complex system would use the strategy pattern (say the strategy requires a lot more data).
// Contexts can pass themselves to the strategy to allow the strategy to access the context's data.
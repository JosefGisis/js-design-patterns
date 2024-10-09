/**
 * The adapter pattern allow an object (the adoptee) to be able to be used with client code that expects a different interface.
 * The adapter can be done through a class which subclasses the adoptee, or it can be done through object composition (in which
 * case a delegate transforms the expected object).
 *
 * Two-way adapters can be used to easily swap interfaces in both directions.
 * Pluggable adapters are adapters that are contained in the adaptee. This is the case when the adaptee needs to make minimal
 * assumptions about the interfaces clients expect.
 */

// Class Adapter
// Adaptee
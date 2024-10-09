/**
 * Iterator provides controls to traverse a collection of elements without exposing the underlying representation of the collection.
 * So, that means, we should not allow any client to add or remove elements from the collection. There is a concrete iterator that
 * traverses the collection and provides the current element.
 *
 * When we have multiple aggregate types and need different iterators for each of them, the aggregate is responsible for creating the
 * iterator.
 */
/**
 * The Observer pattern (AKA Publish-Subscribe) create a one-to-many dependency between an object (usually containing data)
 * to facets that utilize the data. When the data changes, the facets (subscribers) are notified and update accordingly.
 *
 * The Observer pattern is similar to the Model - View - Controller architecture in that multiple views can share a single model,
 * but the difference being that the Controller is responsible for notifying the view and not the Model itself.
 *
 * This is also very similar to dependencies in React. React hooks that are provided a dependency are subscribed to changes in
 * the data. React dependencies also suffer from similar pitfalls to the observer pattern; that is, errors can be hard to
 * debug, and changes can cause cascading and unpredictable effects.
 */
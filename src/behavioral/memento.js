/**
 * Memento stores an objects state without violating encapsulation, so it can be restored later.
 * This memento is a snapshot of an objects values at a particular time and is used for undo/redo
 * functionality.
 *
 * This is similar (although not the same) to React's useRef hook which allows us to store a mutable
 * value in a component. This value does not change on re-renders, so it is useful for restoring or
 * comparing previous values. It is not the same as memento because its value is not encapsulated.
 */

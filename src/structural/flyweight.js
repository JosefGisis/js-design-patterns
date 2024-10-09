/** The the flyweight design pattern uses sharing to allow a large number of objects
 * to be created and used efficiently.
 *
 * Sharing objects may add more processing overhead than creating new objects; however,
 * it allows a large number of objects to be created without being very costly on memory.
 *
 * Flyweight usually uses composite for recursive composition, and a factory method to
 * manage the creation of flyweight objects.
 *
 * This example is based on the text editor example from the book "Design Patterns".
 * It is a good exmaple of how flyweight can be used to create a large number of objects
 * without using a lot of memory. Each letter and layout object is a flyweight object.
 * The layout objects (row and column) may not need to take up a lot of memory, but the
 * characters can quickly add up and become a large memory drain.
 */

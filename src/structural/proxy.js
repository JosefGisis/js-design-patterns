/** The proxy design pattern assigns a delegate object to represent an object that
 * shares the same interface as the real object.
 *
 * There are several types of proxies:
 * 1. Virtual Proxy: only creates the real object when it is needed due to the
 *   object being expensive to create.
 * 2. Protection Proxy: controls access to the real object (checks authority or scope).
 * 3. Remote Proxy: provides a local representation of an object that is in a different address.
 *
 * In this example we will use a virtual proxy to simplify the example. The object will be a large
 * photo.
 * We will use a timeout to simulate the time it would take for users to scroll down to the
 * position where the photo is located.
 */
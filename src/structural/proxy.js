/** The proxy design pattern assigns a delegate object to represent an object that
 * shares the same interface as the real object.
 *
 * There are several types of proxies:
 * 1. Virtual Proxy: only creates the real object when it is needed due to the
 *   object being expensive to create.
 * 2. Protection Proxy: controls access to the real object (checks authority or scope).
 * 3. Remote Proxy: provides a local representation of an object that is in a different address.
 */

// In this example, the proxy displays a fetching message before the actual data is fetched.

// Mimic a fetch request
function makeRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'John Doe',
                age: 30,
                email: 'johndoe@gmail.com',
            })
        }, 1000)
    })
}

// For a more complex example, consider creating a prototype.
function Proxy() {
    this.request = function () {
        console.log('Proxy: Making request...')
        const data = new Data()
        data.request()
    }
}

// Actually fetch the data
function Data() {
    this.request = function () {
        makeRequest().then((data) => {
            console.log(data)
        })
    }
}

// Usage
const proxy = new Proxy()
proxy.request() // Proxy: Making request...
// after 1 second
// { name: 'John Doe', age: 30, email: '

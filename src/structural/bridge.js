/**
 * The bride design pattern decouples an interface from its implementation so that the two can vary independently.
 * This is useful when implementation details can vary independently from the interface. An example would be an SDK
 * that can be used with different operating systems. The bridge pattern can be used to abstract the operating system
 * details from the SDK, so developers can use the SDK without worrying about the underlying operating system.
 */

/**
 * In this example: we should be able to make or return payments without concerning ourselves as to how those payments
 * are processed. So instead of subclassing the payment processor, we use the bridge pattern to abstract the payment
 * processor from the payment object and we can easily swap out the payment processor without changing the payment object.
 */

// example payment processor
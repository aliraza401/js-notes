// Design patterns::

// 3 types of design patterns:
//  Creational, Bheavirol, Structural

// Singleton::
// Object that can be created only once.
// Share a single global instance throughout our application.
// Singletons are classes which can be instantiated once, and can be accessed globally.
// This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.
class Counter {
  constructor() { this.count = 0; }
  getCount() { return this.count; }
  increment() { this.count++; }
}
const instance = new Counter();
export default instance;

// Prototype: (Clone)
// inheretence from objects instead of class.
// Which is supported by javasctipt out of the box.

// Builder::
// Create object step by step using methods.(not once by using constructor)
// hotDog.addKetchup().addMustured().addSause();

// Factory::
// instead of using new keyword we used function to do this for us.

// Facade::
// simplified api to hide low lavel details of library.
// libs/

// Proxy::
// e.g: vue js reactivity

// Iterator::
// triverse throught item of data.

// Observer::
// subscribe to event that are emit by other object.
// defines a one-to-many relationship between objects so that when one object changes state, all its dependents are notified and updated automatically.
// firebase events, Socket, Redux

// Publisher-Subscriber::
// event-based middleware system that supports distributed communications. Components communicate by publishing messages to one or more topics, or subscribing to receive messages from one or more topics.

// Mediator::
// e.g: middleware in express

// SOLID:::
// 1. Single Reponsibility
// Every component/function/class should only have single responsibility.
// Make hooks for userState and useRef.

// 2. Open Close
// open for extension and closed for modification.
// Don't change internal of library code rather extend commponent.

// 3. Losvok Substitution
// Child should be able to do what parent is able to do.
// child shold be able to take all props and pass into ....  <input {props} />

// 4. interface Segregation
// Component shouldnot depend on props they are not goning to use.
// only take props which we are going to use.

// 5. Dependency Inversion

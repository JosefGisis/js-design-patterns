## Design Patterns

This repository contains practice examples for all 23 design patterns from "Design Patterns: Elements of Reusable Object-Oriented Software" by Gamma, Helm, Johnson, and Vlissides in JavaScript.

### Design Pattern in JavaScript.

In order to demonstrate JavaScript's native functionality, none of the examples in this repository utilize ES6 classes. JavaScript objects work through prototypical inheritance: all objects are created by cloning existing objects. These cloned objects "inherit" their prototype's methods (really they use their prototypes methods). Functions and arrays are first-class objects that inherit from the root prototype which is the Object.prototype.

This is all to say that JavaScript is quite different than a typical class-based object-oriented language. The design patterns by the "Gang of Four" are class/interface based, so we cannot copy their implementations; instead, we want to mimic the functionality of the design patterns by using JavaScript's prototypical and dynamic nature. We also want to balance conforming to the design patterns without over-complicating the code by trying to force JavaScript to work like a class based language.

Prototypes can mimic class inheritance and interface by having constructors (constructor functions responsible for instantiating objects) inheriting prototypes instead of objects inheriting their prototypes directly. We do this by adding the prototype of a pseudo-abstract constructor to another "inheriting" constructor. The pseudo-abstract constructor is not really an abstract because it can be instantiated, but it is similar to an abstract class in that it provides a default implementation and can even prevent usage by throwing an error if the methods are called without being overridden. The inheriting constructors can then either use its prototypes methods or override them. We can also borrow the super-constructors functionality (such as its constructor functionality) by directly referencing its prototype, such as sub-constructor.constructor = super-constructor.prototype.constructor. This is the equivalent of super() in ECMAScript classes.

But! Prototypical inheritance only makes sense if some of the implementation can be shared amongst inheriting objects. Oftentimes, inheriting constructors have no implementations in common; that is, sub-constructors always need to override their inherited methods. When this is the case, prototypical inheritance, only adds complexity and boilerplate. Use duck typing instead.

Duck typing does not use interface or inheritance to compose behavior. The idea behind duck typing is "if it walks like a duck and quacks like a duck, it is a duck!" Meaning we use object as if they share an interface, because we compose them with the same signatures. This allows us to use polymorphism without class inheritance. If we forgot to add a method or property to one the objects, we catch the error at run-time.

Another feature of objects in JavaScript is the object literal notation. We can create objects without defining a class. This simplifies design patterns because in many situations we only need a single instance of an object for the design. We can also leverage object composition by using object literal notation instead of composing classes. 

We can also use 

### What are design patterns?

Design patterns describe a frequently occurring problem in object-oriented programming and provide a solution to that problem. By utilizing design patterns, applications become eminently more understandable, extensible, modifiable, and error resilient (pp. 2-3).

Design Patterns are divided into three categories:

1. Creational: the way objects are created.
2. Structural: the way objects relate to each other.
3. Behavioral: the way objects communicate with each other.

These categories are further divided by class and object scopes. Class based design patterns or object based design patterns specify whether the pattern relies on class composition or object composition, respectively.

### Design Pattern Catalogue.

-   #### Creational

    -   #### Class Based

        -   ##### Factory Method

            > Define an interface for creating an object, but let the subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

    -   #### Object Based

        -   ##### Abstract Factory

            > Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

        -   ##### Builder

            > Separate the construction of a complex object from its representation so that the same construction processes can create different representations.

        -   ##### Prototype

            > Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

        -   ##### Singleton

            > Ensure a class only has one instance, and provide a global point of access to it.

-   #### Structural

    -   #### Class Based

        -   ##### Adapter (class)

            > Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatibility interfaces.

    -   #### Object Based

        -   ##### Adapter (object)

            Same as adapter class except it converts an instance of the adaptee class rather than adapting the class via subclassing.

        -   ##### Bridge

            > Decouple an abstraction from its implementation so that the two can vary independently.

        -   ##### Composite

            > Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

        -   ##### Decorator

            > Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

        -   ##### Facade

            > Provide a unified interface to a set of interfaces in a system. Façade defines a higher-level interface that makes the subsystem easier to use.

        -   ##### Flyweight

            > Use sharing to support large numbers of fine-grained objects efficiently. A flyweight is a shared object that can be used in multiple contexts simultaneously. The flyweight acts as an independent object in each context; it’s indistinguishable from an instance of the object that’s not shared.

        -   ##### Proxy

            > Provide a surrogate or placeholder for another object to control access to it.

-   #### Behavioral

    -   #### Class Based

        -   ##### Interpreter

            > Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

        -   ##### Template Method

            > Define a skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithms structure.

    -   #### Object Based

        -   ##### Chain of Responsibility

            > Avoid coupling the sender of a request to its receiver by giving more then one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.

        -   ##### Command

            > Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

        -   ##### Iterator

            > Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

        -   ##### Mediator

            > Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and lets you vary their interaction independently.

        -   ##### Memento

            > Without violating encapsulation, capture and externalize an object’s internal state so that the object can be restored to this state later.

        -   ##### Observer

            > Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

        -   ##### State

            > Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.

        -   ##### Strategy

            > Defines a family of algorithms, encapsulates each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients who use it.

        -   ##### Visitor

            > Represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.

### Design patterns outline some basic principles.

1. <h4>Program to an interface, not an implementation:</h4> Polymorphism requires clients to be able to work with exchangeable implementations, and in order to do so, all objects of a subclass need to be able to stand in for objects of its superclass (think of Liskov's substitution principle). By programming to an interface, we can interchange all objects that share an interface (pp. 17-8).

2. <h4>Favor object composition over inheritance:</h4> Class inheritance results in large, monolithic, static structures. Changes to parent classes, necessitates refactoring all inheriting classes. Furthermore, class inheritance fundamentally breaks encapsulation by exposing classes' structures. Object composition (while suffering from its own downsides, namely being harder to understand) is preferable (pp. 18-20).

3. <h4>Encapsulate variation:</h4> When an aspect of a program varies or is highly dynamic, encapsulating that functionality simplifies the application's logic and makes it easier to modify and extend. This is the principle behind most behavioral design patterns (p. 345).

Josef Gisis 10/6/2024

---

Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1995). _Design Patterns: Elements of Reusable Object-Oriented Software_. Addison-Wesley.

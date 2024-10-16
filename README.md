## Design Patterns

This repository contains practice examples for all 23 design patterns from "Design Patterns: Elements of Reusable Object-Oriented Software" by Gamma, Helm, Johnson, and Vlissides in JavaScript.

Josef Gisis 10/16/2024

### Discussion of Design Pattern in JavaScript.

In order to demonstrate JavaScript's native functionality, none of the examples in this repository utilize ES6 classes. JavaScript objects work through prototypical inheritance: all objects are created by cloning existing objects. These cloned objects "inherit" their prototype's methods (really they use their prototype's methods). Functions and arrays are first-class objects that inherit from the root prototype which is the Object.prototype.

This is all to say that JavaScript is quite different from a typical class-based object-oriented language. The design patterns by the "Gang of Four" are class/interface based, so we cannot copy their implementations; instead, we want to mimic the functionality of the design patterns by using JavaScript's prototypical and dynamic nature. We also want to balance conforming to the design patterns without over-complicating the code by trying to force JavaScript to work like a class based language.

Constructor functions are JavaScript's equivalent of classes as they provide a blueprint for instantiating matching objects. However, they cannot extend other constructors, nor do they support many features found in classes. We can however, through various methods, mimic the functionality of classes, such as inheritance, private members/properties, and interfaces.

We can mimic class inheritance and interfaces by giving constructors a prototype (via constructorFunction.prototype = { some methods or static instance properties }) and sharing that prototype among "inheriting" constructors. For brevity's sake, I will refer to constructors that are sharing their prototype as super-constructors, and constructors that receive a prototype as sub-constructors. This is as close to class inheritance as we can get in JavaScript, but it is not really inheritance because a prototype is really just a reference to the prototype object (think of it as an address to a shared resource). We can also create something like an abstract super-constructor by giving it a default implementation, and discouraging instantiation by throwing an error when some of its non-implemented methods are called.

But! Prototypical inheritance only makes sense if some of the implementation can be shared amongst inheriting objects. Oftentimes sub-constructors have no implementations in common; that is, sub-constructors always need to override their inherited methods. Using prototypical inheritance in this case only adds complexity and boilerplate; instead, we need to use other methods to achieve the functionality of class inheritance and interfaces.

Duck typing gives dynamic, non-class based languages a way of mimicking interfaces. The idea behind duck typing is "if it walks like a duck and quacks like a duck, it is a duck!" Meaning we can use objects polymorphically without actually using interfaces because we compose them with the same signatures without the assistance of classes or interfaces. If we make a mistake in their composition - say we forgot to add a method or property to one the objects, or we dynamically add/remove one of its properties - we will catch the error at run-time and then make the necessary adjustments. More often than not, you will probably use duck typing over prototypical inheritance.

Another feature of objects in JavaScript is the object literal notation. We can keep things simple and short by creating objects without defining a constructor. This simplifies design patterns because in many situations we only need a single instance of an object for the design.

By effectively leveraging the capabilities of JavaScript, we can adopt class/interface based design patterns. We want to try mimicking the functionality of the design pattern's implementation without forcing a JavaScript shaped peg into a C++ shaped hole. This can be accomplished by focusing on the intent of the design patterns; not so much on their implementations. When the intent of a design pattern is based around interfaces or class inheritance, we focus on the core problem the pattern is trying to solve (this is laid out in the motivation section of each design pattern). That being said, it is very possible that some design patterns just are not very useful in JavaScript. Ultimately, the goal is to use design patterns as a tool for writing clean, maintainable code, and adapting them each to languages strengths and weaknesses.

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

---

Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1995). _Design Patterns: Elements of Reusable Object-Oriented Software_. Addison-Wesley.

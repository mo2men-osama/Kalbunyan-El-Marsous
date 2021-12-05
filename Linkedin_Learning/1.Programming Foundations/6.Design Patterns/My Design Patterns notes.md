Linkedin Learning
Programming Foundation: Design Patterns
___________________________________________

1.Design Patterns:

Benefits:
-Not reinventing the wheel
-Building resilient code 
-Preparing for future additions

-Design Patterns are all about reusing experience, design experience.
-aren't algorithms
-aren't code
_______________________

2.The Strategy Pattern:
This pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. This lets the algorithm vary independently from clients that use it.

Composition - HAS A  better than IS A
Inheritance - IS A
_______________________

3.The Adapter Pattern:
This pattern converts the interface of a class into another interface that clients expect. It allows classes to work together that couldn't otherwise because of incompatible interfaces.

Adapters use Composition
-The client is composed with the class with the target interface
-The adapter is composed with the adaptee
-The adapter delegates calls to the adaptee, and returns any needed value
-The client and the adaptee don't know there's an adapter in between
______________________________________________________________________

4.The Observer Pattern:
This pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

Loose Coupling: Strive for loosely coupled designs between objects that interact.
________________________________________________________________________________

5.The Decorator Pattern:
This pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

5.2.The Open-Closed Principle: 
Classes should be open for extension but closed for modification.
_________________________________________________________________

6.The Iterator Pattern:
This pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

Aggregate object: An aggregate object is one which contains other objects. For example, an Airplane class would contain Engine, Wing, Tail, Crew objects.
-Arrays, Array lists, Lists, Sets, Maps and Dictionaries.

6.5.The Single Responsibility Principle:
A class should have only one reason to change.
_______________________________________________

7.The Factory Method Pattern:
The Factory Method pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.



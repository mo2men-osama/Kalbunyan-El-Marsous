Linkedin Learning
Programming Foundations: Data Structures
____________________________________________

In computer science,
Data is information that is stored or processed by a computer.

Common Types of Data
-Numbers, Letters, True(1), False(0)

Data Type: An attribute of data that describes the values it can have and how the data can be used.

1.2.Numerical data types:

Whole Numbers: 
Short (-32,768 to 32,767) 16 bits, 
Int (-2 billion to 2 billion) 32 bits, 
Long (-(2^63) to 2^63) 64 bits

Decimal Nubmers: 
Float (7 decimal digits) 32 bits, 
Double (16 decimal digits) 64 bits

1.3.Booleans and characters:

A Boolean is a true or false value.

1.4.Primitive types in memory:  

-ints, shorts, doubles, booleans, longs, chars, floats

1.5.Intro. to data structures:
Data structures give us organization, storage, and access.
_________________________________________________________

2.Arrays:
Collection of elements, where each item is identified by an index or key.

Data Structure: A collection with a defined way of accessing and storing items.

2.7.Resizable arrays and language support:

-In Java and C++, basic arrays cannot be resized
-Ruby and JavaScript, basic arrays can be resized
-Resizable/dynamic/mutable arrays

2.10.Big O notation:
Notation used to describe the performance or complexity of an algorithm
__________________________________________________________________________

3.Lists:
3.1.What are linked lists:
A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

Node: contains data and a pointer
 
3.5.Singly vs. doubly linked lists:

Singly linked list (SLL):		 
SLL nodes contains 2 field -data field and next link field.	

Doubly linked list (DLL):
DLL nodes contains 3 fields -data field, a previous link field and a next link field.
______________________________________________________________________________

4.Stacks and Queues:

Stacks: Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).

4.5.What are queues:

-A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).

-Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue).

peek(): See the first item in the queue without removing it.(same as the stacks)

-there is no indexing with queues

4.9.Specialized queues:

Priority Queue: Each element has a priority associated with it.
-In a priority queue, an element with high priority is served before an element with low priority.

Deque: Double-ended queue

4.10.Pros and cons of stacks and queues:

What Stacks are great for:
-Reversing things, 
-Keeping track of state, 
-Add/remove from back of a structure
______________________________________

5.Hash-Based Data Structures:

5.1.What are associative arrays?:
Associative arrays are used to store key value pairs.

5.2.Understanding hash functions:

Hashing: Data conversion process, passing some data through a formula that produces a result, called a hash.

Hash functions:  A hash function is a function that takes a set of inputs of any arbitrary size and fits them into a table or other data structure that contains fixed-size elements.

ASCII: Numerical representation of text characters

Collision: Anytime two inputs produce the same hash value

5.3.Understanding hash tables: 
A hash table is an implementation of the associative array abstract data structure.
_________________________________________________________________________________

6.Trees and Graphs:
6.1.What are sets?:

Set: -A collection of unique items
-Order doesn't matter
-None of the elements are duplicated

6.3.Intro. to tree data structures:
A tree is a widely used abstract data type that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

6.4.Understand binary search trees:

Binary Search Tree (BST) is a node-based binary tree data structure which has the following properties:
-The left subtree of a node contains only nodes with keys lesser than the node’s key.
-The right subtree of a node contains only nodes with keys greater than the node’s key.

6.5.Understand heaps: 
Heap: A data structure implemented as a binary tree
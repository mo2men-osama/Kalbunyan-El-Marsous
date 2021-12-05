Linkedin Learning
Programming Foundations: Algorithms
________________________________________

1.Overview:
1-3.Measuring algorithm performance:

*Big-O notation: -Classifies performance as the input size grows 
-"O" indicates the order of operation: time scale to perform an operation

*Many algorithms and data structures have more than one O

Common Big-O Terms

Notation:       Description:
O(1)	       Constant time	 

O(log n)          Logarithmic  

O(n)                 Linear time 

O(n log n)      Log-linear

O(n^2)            Quadratic 
____________________________

2.Common Data Structures:

Arrays, Linked lists, Stacks and queues, Trees, Hash tables

Stacks and queues: 
-Stack: collection that supports push and pop operations 
-The last item pushed is the first one popped

Queue: collection that supports adding and removing
-First item added is the first item out

Practical Applications

Stack -Expression processing -Backtracking: browser back stack, for example

Queue -Order processing -Messaging

Hash tables: A hash table is an associative array where a hash function uses a key to compute an index value and to map to the data value.
Keys are mapped to data values by using a hash to compute an index value.
___________________________________________________________________________

3.Recursion:
Recursion is when a function calls itself

-Recursive functions need to have a breaking condition
-This prevents infinite loops and eventual crashes
-Each time the function is called, the old arguments are saved 
-This is called the "call stack" 
____________________________

4.Sorting Data:

The Bubble Sort: 
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
All value pairs are compared to each other until the largest is at the top, two values are compared to each other incrementally, the largest value is shifted until it is at the top.

The Merge Sort: 
Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. 

The Quicksort:
Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 
1-Always pick first element as pivot.
2-Always pick last element as pivot (implemented below)
3-Pick a random element as pivot.
4-Pick median as pivot.


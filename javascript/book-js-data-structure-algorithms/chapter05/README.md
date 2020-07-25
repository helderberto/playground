# Linked List

Explanation about how methods work at `LinkedList`:

### append(element)

Add a new item as last on the list.

### insert(position, element)

Insert a new item in a specific position on the list.

### remove(element)

Remove an item from list.

### indexOf(element)

It returns the index of the element in the list. If it didn't found return -1.

### removeAt(position)

Remove an item in a specific position on the list.

### isEmpty()

It returns `true` if the list doesn't have any items and `false` if contain any items.

### size()

It returns the size of the list it's similar to length method from the array.

### toString()

Considering the `LinkedList` uses `Node` as an item we need to rewrite the default method `toString` inherited from JavaScript object and show only the elements values.

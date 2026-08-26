# Introduction to Linked List

- Linear data structure
- Linked List doesn't stores data collectively like array. It has nodes
- Nodes are linked together by a reference field
- They have a reference pointer which points to the next node
- Linked List is represented by its head
- Head: Starting node of the Linked List
- Tail: Last node of the linked list
- Usually the next pointer of last node (tail) points to null

### Each node has 2 things:

1. Value/data
2. Pointer(s) (1/2)

## Two types of Linked List:

1. Singly Linked List: 1 pointer to next node
2. Doubly Linked List: 2 pointers to next & previous node.

### Difference between Linked List and Array

#### Linked List

- linear
- non-contigeous
- dynamic size (change easliy)
- node = value + pointer
- getting/fetching element is hard
- Time complexity: O(n)
- insertion/deletion is easy
- extra memory

<hr/>

#### Arrays

- linear
- contigeous
- Fixed size (can be dynamic)
- just value
- getting/fetching element is easy
- Time complexity: O(1)
- insertion/deletion is complex
- memory efficient

### Difference Between Linked List and Array

| Feature                | Linked List                      | Array                               |
| ---------------------- | -------------------------------- | ----------------------------------- |
| Data structure         | Linear                           | Linear                              |
| Memory allocation      | Non-contiguous                   | Contiguous                          |
| Size                   | Dynamic size (changes easily)    | Usually fixed size (can be dynamic) |
| Storage                | Node = value + pointer           | Just value                          |
| Element access         | Getting/fetching element is hard | Getting/fetching element is easy    |
| Access time complexity | O(n)                             | O(1)                                |
| Insertion and deletion | Easy                             | Complex                             |
| Memory usage           | Extra memory                     | Memory-efficient                    |

### Use Cases:

If you want to:

1. Accessing/fetching elements fast by index: **ARRAY**
2. Insert/delete at head or tail frequently: **LINKED LIST**
3. Memory-efficient storage for static size: **ARRAY**
4. Avoid resizing overhead or unknown size upfront: **LINKED LIST**
5. Do lots of traversal/manipulation: **LINKED LIST**

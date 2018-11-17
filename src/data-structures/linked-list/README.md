# Linked list

## Definition

An abstract data type which contains zero or more node linked together to form a list which can be only traversed from its `head` with each node contains 2 items: a node value, and a node pointer that references or points to a subsequent node.

## Operations

Assuming all the `value`s used in the example are of type `Number`,

1. `push`/ `append`
2. `pop`/ `removeTail`
3. `shift`/ `prepend`
4. `unshift`/ `removeHead`
5. `hasHead`
6. `hasTail`
7. `peek`
8. `search`
9. `remove`
10. `reverse`
11. `size`

## Implementations

1. Create custom data structure instead of any built-ins

## Complexity analysis

`O(n)` space for a typical linked list, and

| Operation | Time complexity |
| --- | --- |
| `push`/ `append` | `O(1)` |
| `pop`/ `removeTail` | `O(1)` |
| `shift`/ `prepend` | `O(1)` |
| `unshift`/ `removeHead` | `O(1)` |
| `hasHead` | `O(1)` |
| `hasTail` | `O(1)` |
| `peek` | `O(1)` |
| `search` | `O(n)` |
| `reverse` | `O(n)` |
| `size` | `O(n)` |

declare type LinkedListNode = import('./linked-list-node').LinkedListNode | null;
declare type AcceptValueOutputLinkedListFn = (value: number) => LinkedList;
declare type AcceptNoneOutputTypeFn<T> = () => T;
declare interface LinkedList {
  tail: LinkedListNode;
  head: LinkedListNode;

  push: AcceptValueOutputLinkedListFn;
  pop: AcceptNoneOutputTypeFn<LinkedListNode>;
  shift: AcceptValueOutputLinkedListFn;
  unshift: AcceptNoneOutputTypeFn<LinkedListNode>;
  hasHead: AcceptNoneOutputTypeFn<boolean>;
  hasTail: AcceptNoneOutputTypeFn<boolean>;
  peek: AcceptNoneOutputTypeFn<LinkedListNode>;
  search: AcceptValueOutputLinkedListFn;
  remove: AcceptValueOutputLinkedListFn;
  reverse: AcceptNoneOutputTypeFn<LinkedList>;
  size: AcceptNoneOutputTypeFn<number>;
}

import { linkedListNode } from './linked-list-node';

function size(ll: LinkedList): number {
  if (ll.head == null) {
    return 0;
  }

  if (ll.head === ll.tail) {
    return 1;
  }

  let len = 0;
  let currentNode: LinkedListNode = ll.head;
  while (currentNode && currentNode.next) {
    len += 1;
    currentNode = currentNode.next;
  }

  return len + 1;
}

// 0
// nextNode     v
// prevNode     v
//              null  5->1->2->3->3->null
// currentNode        ^
// while:start
// 1a
// nextNode              v
// prevNode     v
//              null<-5  1->2->3->3->null
// currentNode        ^
// 1b
// nextNode     v
// prevNode           v
//              null<-5  1->2->3->3->null
// currentNode           ^
// 2a
// nextNode                 v
// prevNode           v
//              null<-5<-1  2->3->3->null
// currentNode           ^
// 2b
// nextNode     v
// prevNode              v
//              null<-5<-1  2->3->3->null
// currentNode              ^
// 3a
// nextNode                    v
// prevNode              v
//              null<-5<-1<-2  3->3->null
// currentNode              ^
// 3b
// nextNode     v
// prevNode                 v
//              null<-5<-1<-2  3->3->null
// currentNode                 ^
// 4a
// nextNode                       v
// prevNode                 v
//              null<-5<-1<-2<-3  3->null
// currentNode                 ^
// 4a
// nextNode     v
// prevNode                    v
//              null<-5<-1<-2<-3  3->null
// currentNode                    ^
// 4a
// nextNode     v
// prevNode                    v
//              null<-5<-1<-2<-3  3->null
// currentNode                    ^
// while:end
// 5b
// nextNode     v
// prevNode                    v
//              null<-5<-1<-2<-3<-3  null
// currentNode                    ^
function reverse(ll: LinkedList): LinkedList {
  if (ll.head == null || ll.head === ll.tail) {
    return ll;
  }

  let previousNode: LinkedListNode = null;
  let currentNode: LinkedListNode = ll.head;
  while (currentNode && currentNode.next) {
    const nextNode = currentNode.next;
    currentNode.next = previousNode;

    previousNode = currentNode;
    currentNode = nextNode;
  }

  currentNode!.next  = previousNode;
  ll.tail = ll.head;
  ll.head = currentNode;

  return ll;
}

// 1
// prevNode     v
//              null 5 1 2 3 3 null
// currentNode       ^
// 2
// prevNode          v
//              null 5 1 2 3 3 null
// currentNode         ^
// 3
// prevNode            v
//              null 5 1 2 3 3 null
// currentNode           ^
// 4
// prevNode              v--->
//              null 5 1 2 3 3 null
// currentNode             x ^
// 5
// prevNode              v
//              null 5 1 2 3 null
// currentNode             ^
function remove(ll: LinkedList, value: number): LinkedList {
  if (ll.head == null) {
    return ll;
  }

  let previousNode: LinkedListNode = null;
  let currentNode: LinkedListNode = ll.head;
  while (currentNode && currentNode.next) {
    if (currentNode.value === value) {
      if (currentNode === ll.head) {
        currentNode = currentNode.next;
        ll.head.next = null;
        ll.head = currentNode;
        // ll.unshift();
        continue;
      }

      if (currentNode === ll.tail) {
        previousNode!.next = null;
        ll.tail = previousNode;
        return ll;
      }

      // if (previousNode)
      previousNode!.next = currentNode.next;
      currentNode.next = null;
      currentNode = previousNode!.next;
      continue;
    }

    previousNode = currentNode;
    currentNode = currentNode!.next;
  }

  if (currentNode && currentNode.value === value) {
    if (currentNode === ll.head) {
      ll.head = null;
      ll.tail = null;
      return ll;
    }

    // if (currentNode === ll.tail)
    previousNode!.next = null;
    ll.tail = previousNode;
  }

  return ll;
}

function search(ll: LinkedList, value: number): LinkedListNode {
  if (ll.head == null) {
    return null;
  }

  let currentNode: LinkedListNode = ll.head;
  while (currentNode && currentNode.next) {
    if (currentNode.value === value) {
      return currentNode;
    }

    currentNode = currentNode.next;
  }

  return currentNode.value === value ? currentNode : null;
}

function peek(ll: LinkedList): LinkedListNode {
  return ll.head;
}

function hasTail(ll: LinkedList): boolean {
  return Boolean(ll.tail);
}

function hasHead(ll: LinkedList): boolean {
  return Boolean(ll.head);
}

function unshift(ll: LinkedList): LinkedListNode {
  if (ll.head == null) {
    return null;
  }

  const removedNode = ll.head;
  const newHeadNode = ll.head.next;
  ll.head.next = null;
  ll.head = newHeadNode;

  return removedNode;
}

function shift(ll: LinkedList, value: number): LinkedList {
  const newNode = linkedListNode({ value, next: null });

  if (ll.head == null) {
    ll.head = newNode;
    ll.tail = newNode;

    return ll;
  }

  newNode.next = ll.head;
  ll.head = newNode;

  return ll;
}

function pop(ll: LinkedList): LinkedListNode {
  if (ll.tail == null || ll.head == null) {
    return null;
  }

  const removedNode: LinkedListNode = ll.tail;
  let currentNode: LinkedListNode = ll.head;
  while (currentNode.next && currentNode.next !== ll.tail) {
    currentNode = currentNode.next;
  }

  currentNode.next = null;
  ll.tail = currentNode;

  return removedNode;
}

function push(ll: LinkedList, value: number): LinkedList {
  const newNode = linkedListNode({ value, next: null });

  if (ll.tail == null) {
    ll.tail = newNode;
    ll.head = newNode;

    return ll;
  }

  ll.tail.next = newNode;
  ll.tail = newNode;

  return ll;
}

export function linkedList(): LinkedList {
  const ll: LinkedList = {} as LinkedList;

  ll.tail = null;
  ll.head = null;
  ll.push = push.bind(ll, ll);
  ll.pop = pop.bind(ll, ll);
  ll.shift = shift.bind(ll, ll);
  ll.unshift = unshift.bind(ll, ll);
  ll.hasHead = hasHead.bind(ll, ll);
  ll.hasTail = hasTail.bind(ll, ll);
  ll.peek = peek.bind(ll, ll);
  ll.search = search.bind(ll, ll);
  ll.remove = remove.bind(ll, ll);
  ll.reverse = reverse.bind(ll, ll);
  ll.size = size.bind(ll, ll);

  return ll;
}

export default linkedList;

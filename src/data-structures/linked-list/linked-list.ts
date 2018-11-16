declare type LinkedListNode = import('./linked-list-node').LinkedListNode | null;
declare type PushFn = (value: number) => LinkedList;
declare type PopFn = () => LinkedListNode;
declare type ShiftFn = PushFn;
declare type UnshiftFn = PopFn;
declare type HasHeadFn = () => boolean;
declare type HasTailFn = HasHeadFn;
declare type PeekFn = PopFn;
declare interface LinkedList {
  tail: LinkedListNode;
  head: LinkedListNode;

  push: PushFn;
  pop: PopFn;
  shift: ShiftFn;
  unshift: UnshiftFn;
  hasHead: HasHeadFn;
  hasTail: HasTailFn;
  peek: PeekFn;
}

import { linkedListNode } from './linked-list-node';

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

  return ll;
}

export default linkedList;

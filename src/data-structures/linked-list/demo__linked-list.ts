import { linkedList } from './linked-list';

const pretty = d => JSON.stringify(d, null, 2);

const ll = linkedList();
const ll2 = linkedList();

console.log('[demo] Linked list ', pretty(ll), pretty(ll2));

ll.push(1);
ll.push(2);
ll.push(3);
ll.push(3);
ll.push(3);
ll.push(4);
ll.push(99);

console.log('[demo] LinkedList#push ', pretty(ll));

ll.pop();
ll.pop();
ll.pop();

console.log('[demo] LinkedList#pop ', pretty(ll));

ll.shift(5);
ll.shift(6);
ll.shift(7);

console.log('[demo] LinkedList#shift ', pretty(ll));

ll.unshift();
ll.unshift();

console.log('[demo] LinkedList#unshift ', pretty(ll));

console.log('[demo] LinkedList#hasHead ', ll.hasHead());

console.log('[demo] LinkedList#hasTail ', ll.hasTail());

console.log('[demo] LinkedList#peek ', ll.peek());

export interface LinkedListNode {
  value: number;
  next: LinkedListNode | null;
}

export function linkedListNode({
  value,
  next,
}: LinkedListNode): LinkedListNode {
  return {
    value,
    next,
  };
}

export default linkedListNode;

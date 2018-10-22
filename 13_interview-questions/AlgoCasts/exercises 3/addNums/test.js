const addNums = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;


test('Adds two linked list numbers (complicated to explain)', () => {
  const l1 = new List();
  const l2 = new List();

  l1.insertLast(1);
  l1.insertLast(5);
  l2.insertLast(6);
  l2.insertLast(3);

  expect(addNums(l1, l2)).toEqual(87);
});

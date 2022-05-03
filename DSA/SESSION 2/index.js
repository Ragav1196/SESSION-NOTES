// CREATING A LINKED LIST :
{
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }

    add(data) {
      let node = new Node(data);

      if (this.head == null) {
        this.head = node;
      } else {
        let current = this.head;

        while (current.next != null) {
          current = current.next;
        }

        current.next = node;
      }
    }

    print() {
      let current = this.head;
      let array = [];

      while (current != null) {
        array.push(current.data);
        current = current.next;
      }
      console.log(array.join("->"));
    }
  }

  let List = new LinkedList();

  List.add(1);
  List.add(2);
  List.add(3);

  List.print();
}

// INSERTING ELEMENTS TO THE SPECIFIED INDEX OF AN ARRAY:
{
  let dataSet = [10, 5, 3, 6, 2, 14];

  const insertAT = (data, index) => {
    for (let i = dataSet.length; i > index; i--) {
      dataSet[i] = dataSet[i - 1];
    }
    dataSet[index] = data;
  };

  insertAT(10, 10);

  console.log(dataSet);
}

// INSERTING NEW NODE TO THE LINKED LIST:
{
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }

    add(data) {
      let node = new Node(data);

      if (this.head == null) {
        this.head = node;
      } else {
        let current = this.head;

        while (current.next != null) {
          current = current.next;
        }

        current.next = node;
      }
    }

    print() {
      let current = this.head;
      let array = [];

      while (current != null) {
        array.push(current.data);
        current = current.next;
      }
      console.log(array.join("->"));
    }

    insertAT(data, index) {
      let node = new Node(data);

      if (index == 0) {
        node.next = this.next;
        this.head = node;
        return;
      }

      let current = this.head;

      for (let i = 0; i < index; i++) {
        current = current.next;
      }

      node.next = current.next;
      current.next = node;
    }
  }

  let List = new LinkedList();

  List.add(1);
  List.add(2);
  List.add(3);

  List.print();

  List.insertAT(5, 0);

  List.print();
}

/*!AUTHOR: Dianey Marcela Macias Vargas;Programación III 2021*/
console.log("script loaded! =Prueba LIKEDLIST")

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }


    append(data){
        var newNode = new Node(data);
        var currentNode = this.head;
        if(this.head == null){
            this.head = newNode;
            console.log("if yes head luego");
            console.log(this.head);
            console.log("if yes head luego");
        }else{
            console.log("Head");
            console.log(this.head);
            console.log("Head");
            while (currentNode.next != null){
                console.log("if no current.next != null");
                console.log(currentNode);
                currentNode = currentNode.next
                console.log(currentNode);
                console.log("if no current.next != null");  
            }  
            console.log("if NO current.next == null");
            console.log(currentNode);
            currentNode.next = newNode;
            console.log(currentNode);
            console.log("if NO current.next == null"); 
        }
    }
}


const linkedList = new LinkedList();
linkedList.append(2);
console.log("-------------------");
linkedList.append(4);
console.log("-------------------");
linkedList.append(6);
console.log("-------------------");
linkedList.append(8);






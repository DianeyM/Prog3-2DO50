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
        this.size = 0;
    }


    append(data){
        var newNode = new Node(data);
        var currentNode = this.head;
        if(this.head == null){
            this.head = newNode;
        }else{
            while (currentNode.next != null){
                currentNode = currentNode.next  
            }  
            currentNode.next = newNode;
        }
        this.size++;
    }

    print(){
        var currentNode = this.head;
        var textToDisplay = "";
        if (this.size != 0) {
            while (currentNode != null){
                textToDisplay += currentNode.data + "\n" 
                currentNode = currentNode.next;
            } 
        }else{
            textToDisplay += "La lista está Vacía"
        }
        return textToDisplay;
    }

    removeNode(data){
        var currentNode = this.head;
        var previousNode = null;
        while (currentNode != null){
            if (currentNode.data == data) {
                if (previousNode == null) {
                    this.head = currentNode.next;
                    console.log("head eliminada")
                }else{
                    previousNode.next = currentNode.next;
                }
                this.size--;
                return currentNode.data;
            }else{
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        return false;         
    }
}


const linkedList = new LinkedList();
linkedList.append("Juan Guillermo Quiroga");
console.log(linkedList.size);
console.log(linkedList.print());
linkedList.removeNode("Juan Guillermo Quiroga");
console.log(linkedList.size);
console.log(linkedList.print());
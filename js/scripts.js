/*!AUTHOR: Dianey Marcela Macias Vargas;Programación III 2021*/
console.log("script loaded! =Prueba")

/*!CLASE NODO Y LIKEDLIST->*/
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
        this.idData = 0;
    }

    append(data){
        var newNode = new Node(this.idData + '. ' +data);
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
        this.idData++;
    }

    printInConsole(){
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
                    console.log("Nodo no head eliminado")
                }
                this.size--;
                return currentNode.data;
            }else{
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        console.log("Ningún nodo eliminado")
        return false;         
    }

}

/*!<-CLASE NODO Y LIKEDLIST*/

var linkedListForm = document.getElementById("linkedListForm")
var formContentTextArea = document.getElementById("formContentTextArea")
const linkedList = new LinkedList();

linkedListForm.addEventListener("submit", preventDefaultEvents);
/*linkedListForm.addEventListener("submit", extractElementFromForm);*/
linkedListForm.addEventListener("submit", extractElementFromForm);
linkedListForm.addEventListener("submit", showElementsOnPage2);
/*linkedListForm.addEventListener("submit", removeNode);*/
formContentTextArea.addEventListener('select', getSelectionToString);
linkedListForm.addEventListener("submit", updateForm);


function preventDefaultEvents(event){
    event.preventDefault();
}

function updateForm(event){
    linkedListForm.reset();
}

function extractElementFromForm(event){
    var element = linkedListForm.elements["elemetN"].value; /*El valor entre [] puede ser el nombre o el id del input (en clase se uso el nombre y no el id)*/
    appendElements(element);
}

function appendElements(data){
	linkedList.append(data);
	console.log(linkedList.size);
	console.log(linkedList.printInConsole());
	console.log("--------------------");
}

function showElementsOnPage(event){
    var formContentTittle = document.getElementById("formContentTittle");
    formContentTittle.innerHTML = "The elements you entered to the list were:";
    var element = linkedListForm.elements["elemetN"].value; /*El valor entre [] puede ser el nombre o el id del input (en clase se uso el nombre y no el id)*/
    formContentTextArea.innerHTML += "Element; " + element + "<br/>";
}


function showElementsOnPage2(event){
    var formContentTittle = document.getElementById("formContentTittle");
    formContentTittle.innerHTML = "The elements you entered to the list were:";
    formContentTextArea.innerHTML = linkedList.printInConsole();
}

function getSelectionToString(){
    var selection =  window.getSelection().toString();
    console.log("INIT")
    console.log(selection)
    console.log("FIN")
    removeNode(selection);
}

function removeNode(data){
    linkedList.removeNode(data);
    updateElementsOnPage();
    console.log(linkedList.size);
    console.log(linkedList.printInConsole());
    console.log("--------------------------------");
}

function updateElementsOnPage(){
    formContentTextArea.innerHTML = linkedList.printInConsole();
}










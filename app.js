function addTodo(){

var todoItem = document.getElementById("todoItem");
var tbl = document.getElementById("tbl");
var tr = document.createElement("tr");
var td1 = document.createElement("td");
td1.setAttribute("class","todoText")
var td1Text = document.createTextNode(todoItem.value);
todoItem.value =""

var tdDlt = document.createElement("td");
var btnDlt = document.createElement("button");
var btnDltText = document.createTextNode("DELETE");
btnDlt.appendChild(btnDltText);
tdDlt.appendChild(btnDlt);
btnDlt.setAttribute("onclick","dltTodo(this)");
btnDlt.setAttribute("class","btnList");

var tdEdit = document.createElement("td");
var btnEdit = document.createElement("button");
var btnEditText = document.createTextNode("EDIT");
btnEdit.appendChild(btnEditText);
tdEdit.appendChild(btnEdit);
btnEdit.setAttribute("onclick","editTodo(this)");
btnEdit.setAttribute("class","btnList");


tbl.appendChild(tr);
tr.appendChild(td1);
tr.appendChild(tdDlt);
tr.appendChild(tdEdit);
td1.appendChild(td1Text);
td1.setAttribute("class","todoText");
}

function dltTodo(e){
   e.parentNode.parentNode.remove();
}

function editTodo(e){
    var val = e.parentNode.parentNode.firstChild.innerHTML;
    var editText = prompt("Edit yuor todo here",val)
    e.parentNode.parentNode.firstChild.innerHTML = editText;
}

function dltAll(){
    tbl.innerHTML = ""
}


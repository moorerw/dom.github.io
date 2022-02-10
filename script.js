var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}
function creatListElement(){
     var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
button = document.addEventListener("click", function () {
    if(inputLength() > 0){
    creatListElement();
    } 
})

button = document.addEventListener("keypress", function (event) {
    if(inputLength() > 0 && event.which === 13){
   creatListElement();
    } 
})
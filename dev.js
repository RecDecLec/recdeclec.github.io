var score = 0;
function edittext(id, text) {
    document.getElementById(id).innerHTML = text;
 }
 function maketag(tag, id, value) {
    var para = document.createElement(tag);
    var node = document.createTextNode(value);
    para.appendChild(node);
    para.id=Math.floor(Math.random() * 11);
 }
 function scorechange(value) {
     var score = score + value;
     updatescore();
 }
function updatescore(){
    document.getElementById("score").innerHTML = score;
}

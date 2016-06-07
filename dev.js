function edittext(id, text) {
    document.getElementById(id).innerHTML = text;
 }
 function maketag(tag, id, value) {
    var para = document.createElement(tag);
    var node = document.createTextNode(value);
    para.appendChild(node);
    document.getElementsByTagName(tag).id= id
 }
 


function allowDrop(ev) {

    ev.preventDefault();
}


function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
    document.getElementById('targetDiv').innerHTML ="Correct!";
    document.getElementById('div1').innerHTML = " + ";
    
  
}
// funcion enviar datos´

var documentosRegistrados = [];

function enviardatos(){
    var cc = document.getElementById("cc").value;
    var na = document.getElementById("nombres").value;
    var em = document.getElementById("email").value;
    var pw = document.getElementById("pwd").value;
    var rl = document.getElementById("roles").value;

    // if (documentosRegistrados.includes(cc)){
    //     alert("Ya existe un elemento con el ID: " + cc);
    // }

    // else{
    //     documentosRegistrados.push(cc); // Agrega al array
    //     var fila = "<tr><td>" + cc + "</td><td>" + na + "</td><td>" + em + "</td><td>" + pw + "</td><td>" + rl + "</td></tr>";
    //     document.getElementById("tableD").innerHTML += fila;
        
    // }

    // ------ otra forma---------

    var id = false;

    for (var i = 0; i < documentosRegistrados.length; i++) {
        if (documentosRegistrados[i] === cc) {
            id = true;
            break;
        }
    }

    if (id) {
        alert("Ya existe un elemento con el ID: " + cc);
    } 
    else {
        documentosRegistrados.push(cc);
        var fila = "<tr><td>" + cc + "</td><td>" + na + "</td><td>" + em + "</td><td>" + pw + "</td><td>" + rl + "</td></tr>";
        document.getElementById("tableD").innerHTML += fila;
    }  
}   


function limpiar(){
    document.getElementById("cc").value ="";
    document.getElementById("nombres").value ="";
    document.getElementById("email").value ="";
    document.getElementById("pwd").value ="";
    document.getElementById("roles").value ="";
}
class Persona{
    // atributos
    //constructor
    constructor(id,nombre,email,clave,rol){
        this.id= id;
        this.nombre= nombre;
        this.email= email;
        this.clave= clave;
        this.rol= rol;
    }
    
    // metodos

    
    creaObjeto(){

        // input H....Html

        const idH=document.getElementById("cc").value;
        const nombreH=document.getElementById("nombres").value;
        const claveH=document.getElementById("pwd").value;
        const emailH=document.getElementById("email").value;
        const rolH=document.getElementById("roles").value;
        
        persona.id=idH;
        persona.nombre=nombreH;
        persona.clave=claveH;
        persona.email=emailH;
        persona.rol=rolH;

        persona.leaObjeto();
        
    }

    leaObjeto(){
        var fila = "<tr><td>" + persona.id + "</td><td>" +persona.nombre+ "</td><td>" +persona.email+ "</td><td>" + persona.clave+ "</td><td>" + persona.rol + "</td></tr>";
        document.getElementById("tableD").innerHTML+=fila;

    }



}
let button = document.getElementById("button")
let contador =  Math.floor(Math.random() * 9 );


let personajes = [
  { nombre: "Harry Potter", url: "./images/harry.jpg", escuela: "Gryffindor" }, 
  { nombre: "Oliver Wood", url: "./images/oliver.jpg", escuela: "Gryffindor" },
  { nombre: "Draco Malfoy", url: "./images/draco.jpg", escuela: "Gryffindor" },
  { nombre: "Hermione Granger", url: "./images/hermione.jpg", escuela: "Gryffindor" },
  { nombre: "Ginny Weasley", url: "./images/ginny.jpg", escuela: "Gryffindor" },
  { nombre: "Luna Lovegood", url: "./images/luna.jpg", escuela: "Gryffindor" },
  { nombre: "Minerva Mcgonagall", url: "./images/minerva.jpg", escuela: "Gryffindor" },
  { nombre: "Neville Longbottom", url: "./images/neville.jpg", escuela: "Gryffindor" },
  { nombre: "Ron Weasley", url: "./images/ron.jpg", escuela: "Gryffindor" },
  { nombre: "Rubeus Hagrid", url: "./images/rubeus.jpg", escuela: "Gryffindor" }
];

let personaje = personajes[contador]

     nombre.value = personaje["nombre"]
     escuela.value = personaje["escuela"]
     document.getElementById("imag").src = personaje["url"];

     function cambiar(){
         window.location.href = 'index2.html';
     }



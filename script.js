function agregar() {
    var persona = document.createElement('div'); // Crear un nuevo elemento de persona
    persona.classList.add('persona'); // Agregar la clase 'persona'

    var clavo = document.createElement('div'); // Crear un nuevo elemento de clavo
    clavo.classList.add('clavo'); // Agregar la clase 'clavo' al clavo

    var total = document.createElement('div'); // Crear un nuevo elemento de clavo
    total.classList.add('total'); // Agregar la clase 'clavo' al clavo


    persona.appendChild(clavo);
    persona.appendChild(total); // Agregar el clavo dentro del elemento persona

    document.getElementById('mesas').appendChild(persona); // Agregar la persona al contenedor de mesas
}


function borrar() {
    // Selecciona todos los elementos con la clase 'persona'
    var elementos = document.querySelectorAll('.persona');

    // Itera sobre los elementos y elimina cada uno
    elementos.forEach(function(elemento) {
        elemento.remove(); // Elimina el elemento del DOM
    });
}

//function expandir(elemento) {
    // Remover la clase 'active' de todos los elementos del footer
 //   var elementos = document.querySelectorAll('.footer .provedores');
   // elementos.forEach(function(elem) {
  //      elem.classList.remove('active');
  //  });
    // Agregar la clase 'active' al elemento clickeado
  //  elemento.classList.add('active');
//}

function expandir(elemento) {
    var elementos = document.querySelectorAll('.footer > div');
    elementos.forEach(function(elem) {
        if (elem !== elemento) {
            elem.classList.remove('active');
        }
    });
    elemento.classList.toggle('active');
}
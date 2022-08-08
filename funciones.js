function capturar() {
    let contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        apellido: apellido.value,
        apodo: apodo.value,
        numero: numero.value,
        email: email.value,
        cumpleaños: cumpleaños.value,
        signo: signo.value,
        direccion: direccion.value
    }
    console.log(contacto);
    guardarContacto(db, contacto);
}

function guardarContacto(db, contacto, parentNode) {
    db.setItem(contacto.id, JSON.stringify(contacto));
    window.location.href = '/index.html';
}

function mostratContacto(db, parentNode) {
    let claves = Object.keys(db); //super objeto 
    for (clave of claves) {
        let contacto = JSON.parse(db.getItem(clave));
        crearContacto(parentNode, contacto, db);
    }
}

function crearContacto(parentNode, contacto, db) {
    let divcontacto = document.createElement('div');
    let nombreContacto = document.createElement('p');
    let apellidoContacto = document.createElement('p');
    let apodoContacto = document.createElement('p');
    let numeroContacto = document.createElement('p');
    let emailContacto = document.createElement('p');
    let cumpleañosContacto = document.createElement('p');
    let signoContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let btnDelete = document.createElement('button');
    let btnEdit = document.createElement('button');

    nombreContacto.textContent = contacto.nombre;
    apellidoContacto.textContent = contacto.apellido;
    apodoContacto.textContent = contacto.apodo;
    numeroContacto.textContent = contacto.numero;
    emailContacto.textContent = contacto.email;
    cumpleañosContacto.textContent = contacto.cumpleaños;
    signoContacto.textContent = contacto.signo;
    direccionContacto.textContent = contacto.direccion;
    btnEdit.textContent = 'edit';
    btnDelete.textContent = 'delete';

    /*  divcontacto.classList.add('contacto');
     btnEdit.classList.add('edit');
     btnDelete.classList.add('delete'); */

    divcontacto.appendChild(nombreContacto);
    divcontacto.appendChild(apellidoContacto);
    divcontacto.appendChild(apodoContacto);
    divcontacto.appendChild(numeroContacto);
    divcontacto.appendChild(emailContacto);
    divcontacto.appendChild(cumpleañosContacto);
    divcontacto.appendChild(signoContacto);
    divcontacto.appendChild(direccionContacto);
    divcontacto.appendChild(btnEdit);
    divcontacto.appendChild(btnDelete);

    parentNode.appendChild(divcontacto);

    btnDelete.onclick = () => {
        var respuesta = confirm("¿Estas seguro de Eliminar este Contacto?");
        if (respuesta == true) {
            db.removeItem(contacto.id);
            window.location.href = '/index.html';
        } else {
            window.location.href = '/index.html';
        }

    }



    btnEdit.onclick = () => {

        console.log('editando. . .')
        const nombreEdit = document.querySelector('.nombre').value = contacto.nombre;
        const apellidoEdit = document.querySelector('.apellido').value = contacto.apellido;
        const apodoEdit = document.querySelector('.apodo').value = contacto.apodo;
        const numeroEdit = document.querySelector('.numero').value = contacto.numero;
        const emailEdit = document.querySelector('.email').value = contacto.email;
        const cumpleañosEdit = document.querySelector('.cumpleaños').value = contacto.cumpleaños;
        const signoEdit = document.querySelector('.signo').value = contacto.signo;
        const direccionEdit = document.querySelector('.direccion').value = contacto.direccion;
        db.removeItem(contacto.id);


    }

}




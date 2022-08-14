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
    window.location.href='/index.html'
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
    let icono = document.createElement('div')
    let nombreContacto = document.createElement('p');
    let apellidoContacto = document.createElement('p');
    let apodoContacto = document.createElement('p');
    let numeroContacto = document.createElement('p');
    let emailContacto = document.createElement('p');
    let cumpleañosContacto = document.createElement('p');
    let signoContacto = document.createElement('p');
    let direccionContacto = document.createElement('p'); 
    let btnConsultar = document.createElement('button');
    let btnDelete = document.createElement('button');
    let btnEdit = document.createElement('button');
    let btnCancelar = document.createElement('button')

    icono.textContent = iconoLetters(contacto);
    nombreContacto.textContent = contacto.nombre;
    apellidoContacto.textContent = contacto.apellido;
    btnConsultar.textContent = 'consultar';
    
    divcontacto.appendChild(icono);
    divcontacto.appendChild(nombreContacto);
    divcontacto.appendChild(apellidoContacto);
    divcontacto.appendChild(btnConsultar);
    
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

        btnDelete.disabled = true;
        btnConsultar.disabled =true;
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

    btnConsultar.onclick = ()=>{
        console.log('consultadno')
        let consulta =document.createElement('div')
        let nombreContactoConsul = document.createElement('p');
        let apellidoContactoConsul = document.createElement('p');
        let apodoContactoConsul = document.createElement('p');
        let numeroContactoConsul = document.createElement('p');
        let emailContactoConsul = document.createElement('p');
        let cumpleañosContactoConsul = document.createElement('p');
        let signoContactoConsul = document.createElement('p');
        let direccionContactoConsul = document.createElement('p');
       
        nombreContactoConsul.textContent = `Nombre: ${contacto.nombre}`;
        apellidoContactoConsul.textContent = `Apellido: ${contacto.apellido}`;
        apodoContactoConsul.textContent = `Apodo: ${contacto.apodo}`;
        numeroContactoConsul.textContent = `Numero: ${contacto.numero}`;
        emailContactoConsul.textContent = `Email: ${contacto.email}`;
        cumpleañosContactoConsul.textContent = `Cumpleaños: ${contacto.cumpleaños}`;
        signoContactoConsul.textContent = `Signo: ${contacto.signo}`;
        direccionContactoConsul.textContent = `Direccion: ${contacto.direccion}`;
        btnEdit.textContent = 'edit';
        btnDelete.textContent = 'delete';
        btnCancelar.textContent = 'cancelar';



        consulta.appendChild(nombreContactoConsul);
        consulta.appendChild(apellidoContactoConsul);
        consulta.appendChild(apodoContactoConsul);
        consulta.appendChild(numeroContactoConsul);
        consulta.appendChild(emailContactoConsul);
        consulta.appendChild(cumpleañosContactoConsul);
        consulta.appendChild(signoContactoConsul);
        consulta.appendChild(direccionContactoConsul);
        consulta.appendChild(btnEdit);
        consulta.appendChild(btnDelete);
        consulta.appendChild(btnCancelar);

        contactoDetalles.appendChild(consulta);
    }

    btnCancelar.onclick = ()=>{
        db.setItem(contacto.id, JSON.stringify(contacto));
        window.location.href = '/index.html'
    }

}
function iconoLetters(contacto){
    const lettername = contacto.nombre.substr(0,1);
    const letterlastname = contacto.apellido.substr(0,1);
    return lettername + letterlastname;
}




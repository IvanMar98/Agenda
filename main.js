const nombre = document.querySelector('.nombre');
const apellido = document.querySelector('.apellido');
const apodo = document.querySelector('.apodo');
const numero= document.querySelector('.numero');
const email = document.querySelector('.email');
const cumpleaños = document.querySelector('.cumpleaños');
const signo = document.querySelector('.signo');
const direccion = document.querySelector('.direccion');


const btnDelete = document.querySelector('.eliminar');

const btnAgregar = document.querySelector('.btn-agregar');
btnAgregar.addEventListener("click", capturar);

const listado = document.querySelector('.listado');

const db = window.localStorage;

mostratContacto(db, listado);


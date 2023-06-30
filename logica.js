// Calculando la fecha para el DOM
const date_Dom = document.getElementById('fecha_inventario');
const today = new Date();
date_Dom.innerText = today.toLocaleDateString();

// Ingresando el usuario
const input_user = document.getElementById('nombre_empleado');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const alertTrigger = document.getElementById('liveAlertBtn');
const elementoOculto = document.getElementById('generarTabla');

// Función de alert para validar usuario
function appendAlert(message, type) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible alert-info" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
}

// Condición para validar usuario
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        if ((input_user.value.toLowerCase()== 'juan')|| (input_user.value.toLowerCase()== 'pedro') || (input_user.value.toLowerCase()== 'ana') || (input_user.value.toLowerCase()== 'mary')){
            input_user.style.border = '1px solid transparent';
            input_user.style.backgroundColor = 'rgb(208, 245, 233);';
            elementoOculto.style.visibility = "visible";
            appendAlert('Usuario registrado, Bienvenido', 'success');
        } else{
            input_user.style.border = '1px solid red';
            input_user.style.backgroundColor = 'rgb(231, 154, 154)';
            elementoOculto.style.visibility = "hidden";
            appendAlert('Usuario Inválido', 'success');
        }
    })
}

// Sumando o restando los productos ya existentes
// Stock Agua con Gas 
let aguaCGas = 0; 
const stockAguaCGas = document.getElementById('stockAguaCGas');

// Stock Red Bull
let redBull = 0; 
const stockRedBull = document.getElementById('stockRedBull');

// Stock Absolute Vodka 
let absolute = 0; 
const stockAbsolute = document.getElementById('stockAbsolute');

// Stock Agua Sin Gas
let aguaSGas = 0; 
const stockAguaSGas = document.getElementById('stockAguaSGas');

// Stock Jack Daniels
let jackDaniel = 0; 
const stockJackD = document.getElementById('stockJackDaniels');

// Stock Johnnie Walker
let johnnieWal = 0; 
const stockJohnnie = document.getElementById('stockJohnnie');

// Stock Fernet Branca
let fernet = 0; 
const stockFernet = document.getElementById('stockFernet');

// Stock Bombay
let bombay = 0; 
const stockBombay = document.getElementById('stockBombay');

// Local Storage 
// botones de sumar y restar productos 

const btnAddBombay = document.getElementById('btn-add-bombay');
const btnSubtractBombay = document.getElementById('btn-subtract-bombay');
const btnAddFernet = document.getElementById('btn-add-fernet')
const btnSubtractFernet = document.getElementById('btn-subtract-fernet');
const btnAddJohn = document.getElementById('btn-add-john');
const btnSubtractJohn = document.getElementById('btn-subtract-john');
const btnAddJack = document.getElementById('btn-add-jack');
const btnSubtractJack = document.getElementById('btn-subtract-jack');
const btnAddAgua = document.getElementById('btn-add-agua');
const btnSubtractAgua = document.getElementById('btn-subtract-agua');
const btnAddAbsolute = document.getElementById('btn-add-absolute');
const btnSubtractAbsolute = document.getElementById('btn-subtract-absolute');
const btnAddaGas = document.getElementById('btn-add-aGas');
const btnSubtractaGas = document.getElementById('btn-subtract-aGas');
const btnAddRedBull = document.getElementById('btn-add-redBull');
const btnSubtractRedBull = document.getElementById('btn-subtract-redBull');

// Verificar si hay datos guardados en el almacenamiento local
const storedBebidas = localStorage.getItem('bebidas');
const bebidas = storedBebidas ? JSON.parse(storedBebidas) : [
{
    codigo: 1,
    nombre: 'Bombay Sapphire',
    tamaño: '750ml',
    precio: '$13510',
    stock: 0
},
{
    codigo: 2,
    nombre: 'Fernet Branca',
    tamaño: 750 + 'ml',
    precio: '$'+ 2635,
    stock: 0
},
{
    codigo: 3,
    nombre: 'Johnnie Walker Black Label',
    tamaño: 750 + 'ml',
    precio: '$'+ 14500,
    stock: 0
},
{
    codigo: 4,
    nombre: 'Jack Daniels',
    tamaño: 750 + 'ml',
    precio: '$'+ 12200,
    stock: 0
},
{
    codigo: 5,
    nombre: 'Agua S/Gas',
    tamaño: 500 + 'ml',
    precio: '$'+ 279,
    stock: 0
},
{
    codigo: 6,
    nombre: 'Absolut Vodka',
    tamaño: 700 + 'ml',
    precio: '$'+ 6290,
    stock: 0  
},
{
    codigo: 7,
    nombre: 'Agua C/Gas',
    tamaño: 500 + 'ml',
    precio: '$'+ 150,
    stock: 0
},
{
    codigo: 8,
    nombre: 'Energy Drink Red Bull',
    tamaño: 250 + 'ml',
    precio: '$'+ 810,
    stock: 0
},
];

// Función para actualizar el valor del stock en el DOM
function actualizarStockValueBombay() {
    const stockValueB = bebidas[0].stock; 
    stockBombay.textContent = stockValueB;
    }

function actualizarStockValueFernet() {
    const stockValueF = bebidas[1].stock; 
    stockFernet.textContent = stockValueF;
    }

function actualizarStockValueJohn() {
    const stockValueJ = bebidas[2].stock; 
    stockJohnnie.textContent = stockValueJ;
    }

function actualizarStockValueJack() {
    const stockValueJack = bebidas[3].stock; 
    stockJackD.textContent = stockValueJack;
    }

function actualizarStockValueAgua() {
    const stockValueAgua = bebidas[4].stock;
    stockAguaSGas.textContent = stockValueAgua;
    }

function actualizarStockValueAbs() {
    const stockValueAbs = bebidas[5].stock; 
    stockAbsolute.textContent = stockValueAbs;
    }

function actualizarStockValueAgas() {
    const stockValueAgas = bebidas[6].stock; 
    stockAguaCGas.textContent = stockValueAgas;
    }

function actualizarStockValueRedBull() {
    const stockValueRed = bebidas[7].stock; 
    stockRedBull.textContent = stockValueRed;
    }

// Manejador de eventos para el botón "Añadir Stock"
btnAddBombay.addEventListener('click', function() {
    bebidas[0].stock++; 
    actualizarStockValueBombay();
    guardarDatosLocalStorage();
});

btnAddFernet.addEventListener('click', function() {
    bebidas[1].stock++; 
    actualizarStockValueFernet();
    guardarDatosLocalStorage();
});

btnAddJohn.addEventListener('click', function() {
    bebidas[2].stock++; 
    actualizarStockValueJohn();
    guardarDatosLocalStorage();
});

btnAddJack.addEventListener('click', function() {
    bebidas[3].stock++; 
    actualizarStockValueJack();
    guardarDatosLocalStorage();
});

btnAddAgua.addEventListener('click', function() {
    bebidas[4].stock++; 
    actualizarStockValueAgua();
    guardarDatosLocalStorage();
});

btnAddAbsolute.addEventListener('click', function() {
    bebidas[5].stock++; 
    actualizarStockValueAbs();
    guardarDatosLocalStorage();
});

btnAddaGas.addEventListener('click', function() {
    bebidas[6].stock++; 
    actualizarStockValueAgas();
    guardarDatosLocalStorage();
});

btnAddRedBull.addEventListener('click', function() {
    bebidas[7].stock++; 
    actualizarStockValueRedBull();
    guardarDatosLocalStorage();
});

  // Manejador de eventos para el botón "Restar Stock"
btnSubtractBombay.addEventListener('click', function() {
    if (bebidas[0].stock > 0) { 
        bebidas[0].stock--; 
        actualizarStockValueBombay();
        guardarDatosLocalStorage();
    }
});

btnSubtractFernet.addEventListener('click', function() {
    if (bebidas[1].stock > 0) { 
        bebidas[1].stock--;
        actualizarStockValueFernet();
        guardarDatosLocalStorage();
    }
});

btnSubtractJohn.addEventListener('click', function() {
    if (bebidas[2].stock > 0) { 
        bebidas[2].stock--; 
        actualizarStockValueJohn();
        guardarDatosLocalStorage();
    }
});

btnSubtractJack.addEventListener('click', function() {
    if (bebidas[3].stock > 0) { 
        bebidas[3].stock--;
        actualizarStockValueJack();
        guardarDatosLocalStorage();
    }
});

btnSubtractAgua.addEventListener('click', function() {
    if (bebidas[4].stock > 0) { 
        bebidas[4].stock--;
        actualizarStockValueAgua();
        guardarDatosLocalStorage();
    }
});

btnSubtractAbsolute.addEventListener('click', function() {
    if (bebidas[5].stock > 0) { 
        bebidas[5].stock--; 
        actualizarStockValueAbs();
        guardarDatosLocalStorage();
    }
});

btnSubtractaGas.addEventListener('click', function() {
    if (bebidas[6].stock > 0) { 
        bebidas[6].stock--; 
        actualizarStockValueAgas();
        guardarDatosLocalStorage();
    }
});

btnSubtractRedBull.addEventListener('click', function() {
    if (bebidas[7].stock > 0) { 
        bebidas[7].stock--; 
        actualizarStockValueRedBull();
        guardarDatosLocalStorage();
    }
});

  // Función para guardar los datos en el almacenamiento local
function guardarDatosLocalStorage() {
    localStorage.setItem('bebidas', JSON.stringify(bebidas));
}




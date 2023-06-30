bebidas = [
    {
        codigo: 1,
        nombre: 'Bombay Sapphire',
        tamaño: 750 + 'ml',
        precio: '$'+ 13510,
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
]

const formBebida = document.getElementById('form_new_bebida');

formBebida.addEventListener('submit', function(e){
    e.preventDefault();
    const nombreInput = document.getElementById('inputName');
    const tamañoInput = document.getElementById('inputTamaño');
    const precioInput = document.getElementById('inputPrecio');
    const stockInput = document.getElementById('inputStock');
    
    const bebidaExistente = bebidas.find(bebida => bebida.nombre.toUpperCase() === nombreInput.value.toUpperCase());

    if (bebidaExistente) {
        console.log('Ya existe una bebida con el mismo código');
        alertProdName('Ya existe una bebida con el mismo nombre');
        return;
    }
    
    // Función que crea el alert por el producto ya existente
    function alertProdName(message) {
        const crearArc = document.createElement('div');
        crearArc.innerHTML = [
        `<div class="alert alert-dismissible alert-info" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
        ].join('');
    
        formBebida.append(crearArc);
    } 

// Objeto constructor
let codigo = 8;
const nuevaBebida = {
    codigo: codigo++,
    nombre: nombreInput.value,
    tamaño: tamañoInput.value,
    precio: precioInput.value,
    stock: parseInt(stockInput.value)
};

bebidas.push(nuevaBebida);
formBebida.reset();

console.table(bebidas); 
// agregarDatosATabla(bebidas);
guardarDatosLocalStorage();
});



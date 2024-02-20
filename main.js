const formularioCalculadora = document.getElementById('formulario-calorias');
const resultado = document.getElementById('resultado');
const retornoButton = document.getElementById('retorno');

retornoButton.addEventListener('click', () => {
   
    formularioCalculadora.reset();
    
    resultado.innerHTML = '';
    
    
    mostrarFormulario();
});

formularioCalculadora.addEventListener('submit', (evento) => {
    evento.preventDefault();
    calcularCalorias();
});

function calcularCalorias() {
    const nombre = document.querySelector('#nombre').value;
    const tipoDocumento = document.querySelector('#tipo-documento').value;
    const documento = document.querySelector('#documento').value;
    const edad = document.querySelector('#edad').value;
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    const actividad = document.querySelector('#actividad').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    const multiplicadorTMB = {
        peso: 10,
        altura: 6.25,
        edad: 5,
    };

    let mensajeEdad = '';
    let imagenEdad = '';


    if(sexo === 'F'){
        if(edad >=15 && edad <= 29){
            mensajeEdad = 'Joven';
            imagenEdad = 'img/mujer.png';
        }else if (edad >= 30 && edad <= 59){
            mensajeEdad = 'Adulto';
            imagenEdad = 'img/adulta.png';
        }else{
            mensajeEdad = 'Adulto Mayor';
            imagenEdad = 'img/anciana.png';
        }
    }else{
        if(edad >=15 && edad <= 29){
            mensajeEdad = 'Joven';
            imagenEdad = 'img/hombre.png';
        }else if (edad >= 30 && edad <= 59){
            mensajeEdad = 'Adulto';
            imagenEdad = 'img/adulto.png';
        }else{
            mensajeEdad = 'Adulto Mayor';
            imagenEdad = 'img/anciano.png';
        }
    }
    



    let calculoCalorias = sexo === 'femenino' ?
    actividad * ((multiplicadorTMB.peso * peso) +
    (multiplicadorTMB.altura * altura) -
    (multiplicadorTMB.edad * edad)) - 161 :
    actividad * ((multiplicadorTMB.peso * peso) +
    (multiplicadorTMB.altura * altura) -
    (multiplicadorTMB.edad * edad)) - 5;

    resultado.innerHTML = `
        <h3>${nombre} - ${mensajeEdad}</h3>
        <img src="${imagenEdad}" alt="${mensajeEdad}" style="width:150px; margin: 30px;">
        <p class="text-center" style="font-size: 20px;">El paciente ${nombre} identificado con ${tipoDocumento} NO.${documento}, requiere un total de <span class="h6" style="font-size: 20px;">${Math.floor(calculoCalorias)} kcal</span> para el sostenimiento de su TBM.</p>

    `

    ocultarFormulario();

    console.log(calculoCalorias);
}
function ocultarFormulario() {
    formularioCalculadora.style.display = 'none';
    formularioCalculadora.classList.add('hidden'); 
    resultado.classList.remove('hidden');
    retornoButton.style.display = '';
    retornoButton.classList.remove('hiden');
    document.body.classList.add('body-reset')
}
function mostrarFormulario() {
    formularioCalculadora.style.display = '';
    formularioCalculadora.classList.remove('hidden');
    retornoButton.classList.add('hiden');
    retornoButton.style.display = 'none';
    formularioCalculadora.classList.add('mostrar-animacion');
    document.body.classList.remove('body-reset')

}
 




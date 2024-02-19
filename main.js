const formularioCalculadora = document.getElementById('formulario-calorias');
const resultado = document.getElementById('resultado');
const retornoButton = document.getElementById('retorno');

retornoButton.addEventListener('click', () => {
    mostrarFormulario();
});

formularioCalculadora.addEventListener('submit', (evento) => {
    evento.preventDefault();
    calcularCalorias();
});

function calcularCalorias() {
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

    let calculoCalorias = sexo === 'femenino' ?
    actividad * ((multiplicadorTMB.peso * peso) +
    (multiplicadorTMB.altura * altura) -
    (multiplicadorTMB.edad * edad)) - 161 :
    actividad * ((multiplicadorTMB.peso * peso) +
    (multiplicadorTMB.altura * altura) -
    (multiplicadorTMB.edad * edad)) - 5;

    resultado.innerHTML = `
        <h3>Resultado</h3>
        <input class="form-control text-center" value="${Math.floor(calculoCalorias)} kcal" style="font-size: 2rem; background-color: transparent;" disabled>
        
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
    
}
function mostrarFormulario() {
    formularioCalculadora.style.display = '';
    resultado.classList.add('hidden'); 
    formularioCalculadora.classList.remove('hidden');
    retornoButton.classList.add('hiden');
    retornoButton.style.display = 'none';

}
 




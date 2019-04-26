var titulo = document.querySelector(".container");
titulo.textContent = "Maria Aparecida Nutricionista";

var trPaciente = document.querySelector('#primeiro-paciente');

var tdPeso = trPaciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = trPaciente.querySelector('.info-altura'); 
var altura = tdAltura.textContent;

var tdImc = trPaciente.querySelector('.info-imc');

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <=0 || peso >= 1000) {
    pesoEhValido = false;
    tdImc.textContent = 'peso inválido';
 }
 
 if(altura <= 0 || altura >= 3.00) {
   alturaEhValida = false;
   tdImc.textContent = 'altura inválida';
 }

 console.log(pesoEhValido);
 console.log(alturaEhValida);
 
 if(pesoEhValido && alturaEhValida) {
    var imc = peso / ( altura * altura);
    tdImc.textContent = imc; 
 }

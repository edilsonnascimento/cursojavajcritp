var titulo = document.querySelector(".container");
titulo.textContent = "Maria Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){   

   var trPaciente = pacientes[i];

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
      trPaciente.classList.add("paciente-invalido");
   }
   
   if(altura <= 0 || altura >= 3.00) {
      alturaEhValida = false;
      tdImc.textContent = 'altura inválida';
      trPaciente.classList.add("paciente-invalido");
   }
   
   if(pesoEhValido && alturaEhValida) {
      var imc = peso / ( altura * altura);
      tdImc.textContent = imc.toFixed(2);
   }         
}


var botaoAdiciona = document.querySelector("#adicionar-paciente");

botaoAdiciona.addEventListener("click", function(event){
   //desativa comportamento padrão do form 
   event.preventDefault();
   //captura formulário.
   var form = document.querySelector("#form-adiciona");   
   //capitura valores do form
   var nome = form.nome.value;
   var peso = form.peso.value;
   var altura = form.altura.value;
   var gordura = form.gordura.value;

   //cria linha
   var pacienteTr = document.createElement("tr");
   
   //cria celula
   var nomeTd = document.createElement("td");
   //atribui valor do campo
   nomeTd.textContent = nome;
   //adicona celcula na linha;
   pacienteTr.appendChild(nomeTd);

   var pesoTd = document.createElement("td");
   pesoTd.textContent = peso;
   pacienteTr.appendChild(pesoTd);

   var alturaTd = document.createElement("td");
   alturaTd.textContent = altura;
   pacienteTr.appendChild(alturaTd);

   var gorduraTd = document.createElement("td");
   gorduraTd.textContent = gordura;
   pacienteTr.appendChild(gorduraTd);

   //captura tabela
   var tabela = document.querySelector("#tabela-pacientes");
   //adiciona linha preenchida.
   tabela.appendChild(pacienteTr);


});
document.getElementById("formulario").addEventListener("submit",cadastrocarro);

function cadastrocarro(e){
    var nomecondutor = document.getElementById("nomecondutor").value;
    var modelodecarro = document.getElementById("modelodecarro").value;
    var placadecarro = document.getElementById("placadecarro").value;
    var horadeentrada = new Date();
    

    if (!modelodecarro && !placadecarro && !nomecondutor){
        alert("campo vazio ?");
    return false;
}
    var veiculo = {
        modelo: modelodecarro,
        placa: placadecarro,
        nome: nomecondutor,
        horas: horadeentrada.getHours(),
        minutos: horadeentrada.getMinutes(),
        

    }
   
    
  
    if(localStorage.getItem('area') === null){
        var carro  = [];
        carro.push(veiculo);
        localStorage.setItem('area',JSON.stringify(carro));
}else{
       var carro = JSON.parse(localStorage.getItem('area'));
        carro.push(veiculo);
        localStorage.setItem('area',JSON.stringify(carro));
    }

    //document.getElementById('formulario').reset();

    mostraarea();

    e.preventDefault();
}
function tirarveiculo(placa){
    var area = JSON.parse(localStorage.getItem('area'));
    console.log(area);
    
    for(var i = 0 ; i < area.length; i++){
        if(area[i].placa == placa){
            area.splice(i,1);
    }
       
        }
        localStorage.setItem('area',JSON.stringify(area));
        mostraarea();
}
function mostraarea(){
    var carro = JSON.parse(localStorage.getItem('area'));
    var carrosresultado = document.getElementById('resultados');

    carrosresultado.innerHTML = '';

    for(var i = 0; i < carro.length; i++){

            var modelo = carro[i].modelo;
            var placa = carro[i].placa;
            var horas = carro[i].horas;
            var minutos = carro[i].minutos;
            var nome = carro[i].nome;

                carrosresultado.innerHTML += '<tr><td>'+ modelo + 
                '</td>'+
                '<td>'+ placa + '</td>' +  
                '<td>'+ horas + ':' + minutos + '</td>'+
                '<td>'+ nome +'</td>' + 
                '<td><button onclick="tirarveiculo(\''+ placa +'\')"class="fff">remover</button></td>'+
            '</tr>';
    }
}


    
 


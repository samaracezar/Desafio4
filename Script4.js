function buscaCep(dadosCep){
    for(let campo in dadosCep){
        if(document.querySelector(`#${campo}`)){
            document.querySelector(`#${campo}`).value= dadosCep[campo]
        }
    }
}

let dadosCep = async function(cep){

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        let dadosFetch = await fetch(url);
        let dadosJson = await dadosFetch.json();
        buscaCep(dadosJson);
        } catch(error){
        alert(error);
    }
}
      
const btnBuscar = document.querySelector("#buscar");
const nCep = document.querySelector("#numeroCep");

btnBuscar.addEventListener('click',function(){
    dadosCep(nCep.value);
})    
   
export {buscaCep};
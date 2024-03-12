const box = document.querySelector(".container");

let contador = 0;

function slider()
{
    contador++;
    if(contador > 1)
    {
        contador=0;
    }
    box.style.transform = `translateX(${-contador * 80}vw)`;
}
setInterval(slider, 5000);
function clickDiferencial(){
    if( Diferencial.style.display == 'block'){
        Diferencial.style.display ='none'
    }
    else{
        Diferencial.style.display = "block"
    }
    
 }
 function clickObservações(){
    if( Observações.style.display == 'block'){
        Observações.style.display ='none'
    }
    else{
        Observações.style.display = "block"
    }
    
 }
 function clickMedidas(){
    if( Medidas.style.display == 'block'){
        Medidas.style.display ='none'
    }
    else{
        Medidas.style.display = "block"
    }
    
 }
 function clickMenu(){
    if( itens.style.display == 'block'){
    itens.style.display ='none'
    }
    else{
     itens.style.display = "block"
    }
 }
 
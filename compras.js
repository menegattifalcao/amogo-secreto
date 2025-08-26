let compras = []
document.getElementById('botao1').onclick = function(){
    let item = document.getElementById('text').ariaValueMax.trim();
    if(item){
        compras.push(item)
        document.getElementById('text').value= " ";
        document.getElementById('linha').innerHTML= " ";
        for(let i = 0; i< compras.length; i++){
            document.getElementById('linha').innerHTML += <li>${compras}</li>
        }
    }

}
document.getElementById('botao2').onclick=function
let sorteado = amigos[Math.floor(Math.random()* amigos.length)]
document.getElementById(linha2).innerHTML = 'o sorteado é'
function mudartema(mudartema){//função escolhida no input radio
    
    const body = document.getElementById('body'); //seleciona o elemnto body

    const tudo = document.getElementById('tudo');//seleciona o elemento 'tudo' das motos recomendadas

    const rodape = document.getElementById('rodape');//seleciona o rodape



    if(mudartema === 'black'){//condicinal para verificar a cor escolhida
        body.style.backgroundColor = "gray";//troca a cor do body para cinza 

        tudo.style.backgroundColor = "blue";//troca a cor do elemento 'tudo' para azul

        rodape.style.backgroundColor = "DimGray";//toca a cor do rodape para cinza mais escuro
        
    }else if(mudartema === 'white'){//condicinal para verificar a cor escolhida

        body.style.backgroundColor = "white";//troca a cor do body para branco

        tudo.style.backgroundColor = "lightblue";//troca a cor do elemento 'tudo' para azul claro

        rodape.style.backgroundColor = "gray";//toca a cor do rodape para cinza mais escuro
    }

}



    function idade(){
        let input = document.getElementById("input")
        let digitado=input.value
        
        if (!digitado){
            document.getElementById("mensagem").textContent="Você não Digitou Nada. Digite Algo e Tente Novamente"
        }
        else{
            if (digitado>=18){
            document.getElementById("mensagem").textContent="Você tem " + digitado +" anos, você é maior de Idade"
        }
        else{
            document.getElementById("mensagem").textContent="Você tem " + digitado +" anos, você é menor de Idade"

        }
        }
        input.value="";
    }

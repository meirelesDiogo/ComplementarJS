
        function calculaIMC(){
            let inputP = document.getElementById("peso");
            let peso = inputP.value

            let inputA = document.getElementById("altura");
            let altura = inputA.value
            

            let imc = peso / (altura * altura);

            if (imc <= 18.5) {
                document.getElementById("mensagem").textContent = "Cuidado! Você está abaixo do peso";
            } 
            else if (imc > 18.5 && imc <= 24.9) {
                document.getElementById("mensagem").textContent = "Peso Normal";
            } 
            else if (imc >= 25 && imc <= 29.9) {
                document.getElementById("mensagem").textContent = "Sobre Peso";
            } 
            else if (imc >= 30 && imc <= 34.9) {
                document.getElementById("mensagem").textContent = "Obesidade Grau 1";
            } 
            else if (imc >= 35 && imc <= 39.9) {
                document.getElementById("mensagem").textContent = "Obesidade Grau 2";
            } 
            else if (imc >= 40) {
                document.getElementById("mensagem").textContent = "Obesidade Grau 3 (Grave)";
            }
        }

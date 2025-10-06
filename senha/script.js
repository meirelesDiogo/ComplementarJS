document.getElementById("botao").addEventListener("click", login);


function login() {
        let senha = document.getElementById("senha").value;
        let tamanhoMinimo = senha.length >= 8; // Serve pra colocar o tamanho minimo exigido de caracteres
        let Maiuscula = /[A-Z]/.test(senha);
        let Minuscula = /[a-z]/.test(senha);
        let numero = /[0-9]/.test(senha);
        // const Especial = /[!@#$%^&*(),.?":{}|<>]/.test(senha); // Se quiser exigir caractere especial, descomente

        if (tamanhoMinimo && Maiuscula && Minuscula && numero) {
            document.getElementById("mensagem").textContent = "Senha Forte";
            document.getElementById("mensagem").style.color = "green";
            document.getElementById("senha").value=""
            document.getElementById("login").value=""
        }
        else {
            document.getElementById("mensagem").textContent = "Senha Fraca. Escreva uma Senha Mais forte";
            document.getElementById("mensagem").style.color = "red";

        }
    }
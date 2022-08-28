var dadosLogado = JSON.parse(localStorage.getItem(localStorage.getItem("id_login")));

if(dadosLogado.vzs == 1){
    alert("Essa é sua primeira tentativa")

}else if(dadosLogado.vzs == 2){
    alert("Essa é sua segunda tentativa")

}else if(dadosLogado.vzs == 3){
    alert("Essa é sua última tentativa")
}

function score(){

    var pontos  = 0;

    if(document.querySelector('input[name="quest1"]:checked').value == "C"){
        pontos++;
    }

    if(document.querySelector('input[name="quest2"]:checked').value == "C"){
        pontos++;
    }
    
    if(document.querySelector('input[name="quest3"]:checked').value == "D"){
        pontos++;
    }

    if(document.querySelector('input[name="quest4"]:checked').value == "A"){
        pontos++;
    }

    if(document.querySelector('input[name="quest5"]:checked').value == "B"){
        pontos++;
    }

    if(document.querySelector('input[name="quest6"]:checked').value == "C"){
        pontos++;
    }

    if(document.querySelector('input[name="quest7"]:checked').value == "D"){
        pontos++;
    }

    if(document.querySelector('input[name="quest8"]:checked').value == "D"){
        pontos++;
    }

    if(document.querySelector('input[name="quest9"]:checked').value == "B"){
        pontos++;
    }

    if(document.querySelector('input[name="quest10"]:checked').value == "A"){
        pontos++;
    }

    if(((document.getElementById("quest11").value).toUpperCase()).trim() ==  "CREATE TABLE"){
        pontos++;
    }

    if(((document.getElementById("quest12").value).toUpperCase()).trim() ==  "INSERT INTO"){
        pontos++;
    }

    dadosLogado.nota = pontos;
    localStorage.setItem(localStorage.getItem("id_login"), JSON.stringify(dadosLogado));

    if(dadosLogado.nota >= 8){
        window.location.href = "feedback.html";
        

    }else{
        alert("Você não foi aprovado, estude um pouco mais e tente novamente.")
        window.location.href = "aula.html";
    }
}
function profile_saver(){

    var pfp_saver = localStorage.getItem("profile_picture");

    if (pfp_saver == "1"){
        profile_change_01();
    } else if (pfp_saver == "2"){
        profile_change_02();
    } else if (pfp_saver == "3"){
        profile_change_03();
    }

}

   

function alterar_nome(){

var salvarnovonome = document.getElementById("novonome").value;
/* VO ESPERAR SAIR O UPDATE DE SENHA PRA FAZER ESSE */
}

var trocar_info_modify = "inativo";

function trocar_info(){

    
if (trocar_info_modify == "inativo"){
document.getElementById("sect_test").style.display = "block";
trocar_info_modify = "ativo";
    } else {
            document.getElementById("sect_test").style.display = "none";
            trocar_info_modify = "inativo";
            }
    



}

function profile_change_01(){

    document.getElementById("article_profile_mini_01").style.border = "3px solid #000";
    document.getElementById("article_profile_mini_02").style.border = "";
    document.getElementById("article_profile_mini_03").style.border = "";
    document.getElementById("user").style.backgroundImage = "url(img/kitsune.jpg)";
    localStorage.setItem('profile_picture', 1);

}


function profile_change_02(){

    document.getElementById("article_profile_mini_01").style.border = "";
    document.getElementById("article_profile_mini_02").style.border = "3px solid #000";
    document.getElementById("article_profile_mini_03").style.border = "";
    document.getElementById("user").style.backgroundImage = "url(img/dragon.png)";
    localStorage.setItem('profile_picture', 2);

}


function profile_change_03(){

    document.getElementById("article_profile_mini_01").style.border = "";
    document.getElementById("article_profile_mini_02").style.border = "";
    document.getElementById("article_profile_mini_03").style.border = "3px solid #000";
    document.getElementById("user").style.backgroundImage = "url(img/phoenix.png)";
    localStorage.setItem('profile_picture', 3);
}

var config_profile_modify = "inativo";
function exibir_config_perfil(){

    if (config_profile_modify == "inativo"){
        document.getElementById("nav_config").style.display = "block";
        config_profile_modify = "ativo";
        document.getElementById("invisible_on_config").style.display = "block";

            } else {
                    document.getElementById("nav_config").style.display = "none";
                    config_profile_modify = "inativo";

                    document.getElementById("sect_test").style.display = "none";
                    trocar_info_modify = "inativo";
                    document.getElementById("invisible_on_config").style.display = "none";
                    }

}
var dadosLogado = JSON.parse(localStorage.getItem(localStorage.getItem("id_login")));

function exibir_imprimir(){

    var comment = document.getElementById("feedback_comment").value;

    if (comment != ""){
        
        dadosLogado.feedback = 1;
        localStorage.setItem(localStorage.getItem("id_login"), JSON.stringify(dadosLogado));
        window.location.href = "aula.html";

        
        
    }else{
        alert("Por Favor, Escreva um feedback para liberar o download do seu diploma")
    }
}




function changeFace(notaId){

    var nota = document.getElementById(notaId).value;
    var faceId;
    var status;

    if(notaId == "nota1"){
        faceId = "face1";
        status = "status1"
        
    }else if(notaId == "nota2"){
        faceId = "face2";
        status = "status2"

    }else if(notaId == "nota3"){
        faceId = "face3";
        status = "status3"
    }

    if(nota == 1){
        document.getElementById(faceId).src = "img/angry-face.png";
        document.getElementById(status).innerHTML = "Péssimo";

    }else if(nota == 2){
        document.getElementById(faceId).src = "img/sad-face.png";
        document.getElementById(status).innerHTML = "Ruim";

    }else if(nota == 3){
        document.getElementById(faceId).src = "img/regular-face.png";
        document.getElementById(status).innerHTML = "Regular";

    }else if(nota == 4){
        document.getElementById(faceId).src = "img/happy-face.png";
        document.getElementById(status).innerHTML = "Bom";

    }else if(nota == 5){
        document.getElementById(faceId).src = "img/great-face.png";
        document.getElementById(status).innerHTML = "Ótimo";
    }
}




function jumpto_login(){

    window.location.href = "index.html";
    localStorage.setItem('profile_picture', 0);

}

function jumpto_inicio(){

    window.location.href = "inicio.html";
    
}

function jumpto_github(){
    window.location.href = "GitHub.html";
}


function jumpto_about(){
    window.location.href = "index.html";
}

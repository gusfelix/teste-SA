var dadosLogado = JSON.parse(localStorage.getItem(localStorage.getItem("id_login")));

function jumpto_test(){
    
    console.log(dadosLogado)

  

    if((dadosLogado.nota >= 8) && (dadosLogado.feedback == "1")){
        
        alert("Você já foi aprovado, acesse seu certificado no botão abaixo");

    }else if((dadosLogado.nota >= 8) && (dadosLogado.feedback == "0")){
        window.location.href = "feedback.html"

    }else if(dadosLogado.vzs >= 3){
        alert("Você esgotou suas tentativas! Tente novamente em uma semana.");
        
    }else{
        let ok = confirm("Deseja prosseguir? Isso contará como uma das três tentativa de fazer a prova");

        if(dadosLogado.vzs < 3 && ok){
        
            dadosLogado.vzs = dadosLogado.vzs + 1;
            localStorage.setItem(localStorage.getItem("id_login"), JSON.stringify(dadosLogado));
    
            console.log("opa")
            
            window.location.href = "teste.html";
            
        }
    }

    
}

function jumpto_certificado(){

    if(dadosLogado.nota >= 8){

        window.location.href = "certificado.html";

    }else{
        alert("Para acessar o certificado é necessário passar na avaliação");
    }
}


var aula1 = ["https://www.youtube.com/embed/1yDdvg90674", "material/Aula1.pdf"]
var aula2 = ["https://www.youtube.com/embed/MJ0xGJIY1SM", "material/Aula2.pdf"]
var aula3 = ["https://www.youtube.com/embed/hGyoAwbhnwo", "material/Aula3.pdf"]
var aula4 = ["https://www.youtube.com/embed/DAyYnd38DHc", "material/Aula4.pdf"]
var aula5 = ["https://www.youtube.com/embed/6qm4s05CYv4", "material/Aula5.pdf"]
var aula6 = ["https://www.youtube.com/embed/_JtCvkKDzPE", "material/Aula6.pdf"]


function changeSrc(aula){
    if(aula == "aula1"){
        document.getElementById("vd").src = aula1[0];
        document.getElementById("link_download").href = aula1[1];

    }else if(aula == "aula2"){
        document.getElementById("vd").src = aula2[0];
        document.getElementById("link_download").href = aula2[1];

    }else if(aula == "aula3"){
        document.getElementById("vd").src = aula3[0];
        document.getElementById("link_download").href = aula3[1];
        
    }else if(aula == "aula4"){
        document.getElementById("vd").src = aula4[0];
        document.getElementById("link_download").href = aula4[1];

    }else if(aula == "aula5"){
        document.getElementById("vd").src = aula5[0];
        document.getElementById("link_download").href = aula5[1];

    }else if(aula == "aula6"){
        document.getElementById("vd").src = aula6[0];
        document.getElementById("link_download").href = aula6[1];
   
    }

    aulaSelect(aula);
}

function aulaSelect(id_aula){

    var aulas = document.querySelectorAll(".aula");
    console.log(aulas);

    for (let i = 0; i < aulas.length; i++) {
        
        aulas[i].style.backgroundColor = "rgb(111, 111, 111)";
    }

    document.getElementById(id_aula).style.backgroundColor = "#ccc";
}


function logadasso(){

    let keyLogado = localStorage.getItem("id_login");

    let dadosLogado = localStorage.getItem(keyLogado);

    let dadosLogin = JSON.parse(dadosLogado);

    console.log(dadosLogin.nome_, dadosLogin.cpf_);
}

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

    let novo_nome = document.getElementById("novonome").value;

    dadosLogado.nome_ = novo_nome;

    localStorage.setItem(localStorage.getItem("id_login"), JSON.stringify(dadosLogado));
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
var backshadowprotect = "off";
function exibir_config_perfil(){


    if (config_profile_modify == "inativo"){
        document.getElementById("invisible_on_config").style.display = "block";
        document.getElementById("nav_config").style.display = "block";
        config_profile_modify = "ativo";
        
        

       
        
    
        backshadowprotect = "on";


        

            } else {
                document.getElementById("invisible_on_config").style.display = "none";
                    document.getElementById("nav_config").style.display = "none";
                    config_profile_modify = "inativo";
                    document.getElementById("sect_test").style.display = "none";
                    trocar_info_modify = "inativo";
                    
                    
                    backshadowprotect = "off";
                    }

}

function jumpto_login(){

    window.location.href = "index.html";
    localStorage.setItem('profile_picture', 0);

    

}

function jumpto_aula(){


    if (backshadowprotect == "on") {
        exibir_config_perfil();

    } else if (backshadowprotect == "off"){
        window.location.href = "aula.html";
        
    }
       
}

function cancelprotect(){
    if (backshadowprotect == "on") {
        exibir_config_perfil();

    } else {
        
    }
       
}

function jumpto_github(){
    window.location.href = "GitHub.html";
}

function jumpto_about(){
    window.location.href = "about_us.html";
}

function jumpto_inicio(){
    window.location.href = "inicio.html";
}

function jumpto_feedback(){
    window.location.href = "feedback.html";
}
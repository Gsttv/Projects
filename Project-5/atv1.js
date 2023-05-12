function cadastrarMenagems(){
    var nome = document.getElementById("iptNome").value;
    var email = document.getElementById("iptEmail").value;
    var mensgagem = document.getElementById("iptMensagem").value;

    var linha = document.createElement("tr");

    var colNomes = document.createElement("td");
    colNomes.innerHTML = nome;

    var colEmail = document.createElement("td");
    colEmail.innerHTML = email;

    var colMensagem = document.createElement("td");
    colMensagem.innerHTML = mensgagem

    linha.appendChild(colNomes);
    linha.appendChild(colEmail);
    linha.appendChild(colMensagem);

    var tabela = document.getElementById("table")
    tabela.appendChild(linha)

    estilizar();
}

function estilizar(){
    var linhas = document.getElementsByTagName("tr");

    var pintar = true;
    for(var i =1; i<linhas.length;i++){

        if(pintar==true){
            linhas[i].setAttribute("style","background-color:gray; color:white");
            pintar = false;
        }else{
            pintar = true;
        }
        
    }
}
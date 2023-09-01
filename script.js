function salvarDados() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
   
    var dados = {
        nome: nome,
        email: email
    };
   if (nome)
  


    // Verificar se já existem dados salvos
    var dadosAnteriores = sessionStorage.getItem("dadosFormulario");
    var listaDados = [];

    if (dadosAnteriores) {
        listaDados = JSON.parse(dadosAnteriores);
    }

    // Adicionar os novos dados à lista
    //listaDados.push(dados);//
    listaDados.unshift(dados);

    // Armazenar a lista atualizada no sessionStorage
    sessionStorage.setItem("dadosFormulario", JSON.stringify(listaDados));

    // Exibir mensagem de confirmação
    exibirPopup();

    // Limpar o formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    // Atualizar a lista na página
    exibirListaNaPagina();
}

function exibirPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function fecharPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function exibirListaNaPagina() {
    var tabelaDados = document.getElementById("listaDados");

    // Limpar a tabela
    tabelaDados.innerHTML = "";

    // Recuperar a lista de dados do sessionStorage
    var dadosAnteriores = sessionStorage.getItem("dadosFormulario");
    var listaArmazenada = JSON.parse(dadosAnteriores);

    // Criar a tabela e os títulos das colunas
    if (listaArmazenada) {
        var table = document.createElement("table");
        var thead = document.createElement("thead");
        var trHead = document.createElement("tr");
        var thNome = document.createElement("th");
        var thEmail = document.createElement("th");

        thNome.textContent = "Nome";
        thEmail.textContent = "E-mail";

        trHead.appendChild(thNome);
        trHead.appendChild(thEmail);
        thead.appendChild(trHead);
        table.appendChild(thead);

        var tbody = document.createElement("tbody");

        // Preencher a tabela com os dados
        listaArmazenada.forEach(function(dados) {
            var tr = document.createElement("tr");
            var tdNome = document.createElement("td");
            var tdEmail = document.createElement("td");

            tdNome.textContent = dados.nome;
            tdEmail.textContent = dados.email;

            tr.appendChild(tdNome);
            tr.appendChild(tdEmail);
            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        tabelaDados.appendChild(table);

        // Adicionar a totalização (número de linhas) antes da tabela
        var totalizacaoElement = document.createElement("p");
        totalizacaoElement.textContent = "Total de Dados: " + listaArmazenada.length;
        tabelaDados.insertBefore(totalizacaoElement, table);
    }
}
}

const API_URL = 'http://localhost:8000'

function atualizarLista () {
    tabela_contatos.innerHTML = ''
    fetch (API_URL + '/contatos', {method: 'GET'})
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(lista){
        lista.forEach(function(cadaItem){
            tabela_contatos.innerHTML += `
            <tr>
                <td>${cadaItem.id}</td>
                <td>${cadaItem.nome}</td>
                <td>${cadaItem.telefone}</td>
                <td>${cadaItem.cidade}</td>
                <td>
                    <button onclick="buscarParaEditar(${cadaItem.id})" data-bs-toggle="offcanvas" data-bs-target="#form_editar" class ="btn btn-warning btn-sm">Editar</button>
                    <button onclick="excluirContato(${cadaItem.id})" class="btn btn-danger btn-sm">Excluir</button>
                </td>
            </tr>
            `
        })
    })
}

function adicionarContato() {
    event.preventDefault();

    let informaçoes = {
        nome: input_nome.value,
        telefone: parseInt(input_telefone.value),
        cidade: input_cidade.value,
    }

    if(informaçoes.nome ==="" || informaçoes.telefone ==="" || informaçoes.cidade ===""){
        alert('Informações invalidas');
        return;
    }

    fetch(API_URL + '/contatos', {
        method: 'POST',
        body: JSON.stringify(informaçoes),
        headers: {
            'content-Type' : 'application/json'
        }
    })
    .then(resposta => resposta.json())
    .then(reposta => atualizarLista())
    alert('Adicionado com Sucesso')

    let x = document.querySelector('[data-bs-dismiss="offcanvas"]')

    x.dispatchEvent(new Event('click'));
}

async function excluirContato(id) {
    let resposta = confirm('Gostaria de deletar o contato?');

    if ( resposta !== true) {
        return;
    }

   await fetch(API_URL + '/contatos/' +id, {
        method: 'DELETE'
    })
    atualizarLista();
}

function buscarParaEditar(id) {
    fetch(API_URL + '/contatos/' +id)
    .then(res => res.json())
    .then(informaçoes => {
        input_editar_nome.value = informaçoes.nome;
        input_editar_telefone.value = informaçoes.telefone;
        input_editar_cidade.value = informaçoes.cidade;
        input_editar_id.value  = informaçoes.id
    });
}

async function editarContato() {
    event.preventDefault();

    let informaçoes = {
        nome: input_editar_nome.value,
        telefone: input_editar_telefone.value,
        cidade: input_editar_cidade.value,
        id: input_editar_id.value
    }
    await fetch(API_URL + '/contatos/' + input_editar_id.value, {
        method:'PATCH',
        body: JSON.stringify(informaçoes),
        headers: {
            'content-type' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(() => { 
        alert('Editado com Sucesso')
        atualizarLista() 
        bsOffcanvas.hide()
    })
    
}

function marcarTodos () {
    let todos = document.querySelectorAll('[data-check="acao"]')


    if (marcadortodos.checked === true) {
        todos.forEach((cadaCheck) => {
            cadaCheck.checked = true
        })
    }else { 
        todos.forEach((cadaCheck) => {
            cadaCheck.checked = false
        })

    }
}





atualizarLista()
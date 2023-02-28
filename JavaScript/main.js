const adicionarTarefa = document.getElementById('btnAddTarefa');
adicionarTarefa.addEventListener('click', cirarTarefa);


function cirarTarefa(){
    const novaTarefaInput = document.getElementById('novaTarefaInput');
    const listaTarefa = document.getElementById('listaTarefa');
    const novaTarefaTexto = novaTarefaInput.value.trim();

    if(novaTarefaTexto === ''){
        alert('Digite algo para ser adicionado a lista de tarefas.');
        return;
    };

    const novaTarefaItem = document.createElement('li');
    novaTarefaItem.classList.add('lista_Itens')
    novaTarefaItem.innerHTML = `${novaTarefaTexto} <button class="btn_Excluir" id="btnDeletarTarefa"> Excluir </button>`;
    listaTarefa.appendChild(novaTarefaItem);

    limparInput();

    const btnDeletar = novaTarefaItem.querySelector('.btn_Excluir');
    btnDeletar.addEventListener('click', () => {
        deletarTarefa(novaTarefaItem);
    });

};

function limparInput(){
    const novaTarefaInput = document.getElementById('novaTarefaInput');
    novaTarefaInput.value = '';
};

function deletarTarefa(li){
    const textoLi = li.textContent;
    const listaTarefa = document.getElementById('listaTarefa');
    const itensTarefa = listaTarefa.getElementsByTagName('li');

    for (let i = 0; i < itensTarefa.length; i++){
        if (itensTarefa[i].textContent === textoLi){
            listaTarefa.removeChild(itensTarefa[i]);
            break;
        };
    };
};

// function atualizarLista(){

// }
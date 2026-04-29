const containerAdicionar = document.querySelector('.adicionar');
const btnAdicionar = containerAdicionar.querySelector('button');
const inputAdicionar = containerAdicionar.querySelector('input')
const containertarefas = document.querySelector('.tarefas')
const templatetarefa = containertarefas.querySelector('template')

function CriarTarefa(texto) {
    const tarefa = templatetarefa.content.cloneNode(true);
    const btnExcluir = tarefa.querySelector('button');
    tarefa.querySelector('span').textContent = texto
    containertarefas.appendChild(tarefa);
    btnExcluir.onclick = () => btnExcluir.closest('.tarefa').remove()
}

btnAdicionar.onclick = function () {
    const texto = inputAdicionar.value.trim();
    CriarTarefa(texto);
    inputAdicionar.value = '';
}

CriarTarefa('testebolado do dunha');

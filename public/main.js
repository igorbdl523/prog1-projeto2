const containerAdicionar = document.querySelector('.adicionar');
const btnAdicionar = containerAdicionar.querySelector('button');
const inputAdicionar = containerAdicionar.querySelector('input')
const containertarefas = document.querySelector('.tarefas')
const templatetarefa = containertarefas.querySelector('template')

function SalvarTarefas(){
   const NodeListTarefas = containertarefas.querySelectorAll(':scope > .tarefa span')
   const arrayTarefas = Array.from(NodeListTarefas).map((el) => el.textContent)
   const stringTarefas = JSON.stringify(arrayTarefas)
   localStorage.setItem('tarefas', stringTarefas)
}

function carregarTarefas(){
const stringTarefas= localStorage.getItem('tarefas')
const arrayTarefas = JSON.parse(stringTarefas) || []
arrayTarefas.forEach(elTxt => CriarTarefa(elTxt));
}

function CriarTarefa(texto) {
    const tarefa = templatetarefa.content.cloneNode(true);
    const btnExcluir = tarefa.querySelector('button');
    tarefa.querySelector('span').textContent = texto
    btnExcluir.addEventListener('click', () => {
        btnExcluir.closest('.tarefa').remove()
        SalvarTarefas()
    })
    containertarefas.appendChild(tarefa);
    SalvarTarefas()
}

btnAdicionar.addEventListener('click', () => {
    const texto = inputAdicionar.value.trim();
    CriarTarefa(texto);
    inputAdicionar.value = '';
})

inputAdicionar.addEventListener('keypress', (evt) => {
    if (evt.key !== 'Enter') return
    btnAdicionar.click();
}
)

carregarTarefas()
function adicionarTarefa() {
   //mensagem de que deu certo
    let mensagem = "Task added with success!";

    //pegando o input e seu valor
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value 
    
    document.getElementById("mensagem").textContent = mensagem;

    //criando uma nova tarefa 
    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");

    novaTarefa.textContent = tarefa;

    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = "";

    //criando a condicional se nao colocar nada

    if (tarefa === ""){
        alert("Please, enter a task!");
    }else { 
        document.getElementById("mensagem").textContent = mensagem; 
    }
}

const textInput = document.getElementById("inputTarefa");


//função para colocar a primeira letra maiuscula

function PrimeiraLetra (value){
    return value
    .toLowerCase() //converte tudo para minúsculo
    .split(' ') //divide  o texto em palavras
    .map(word => word[0].toUpperCase() + word.slice(1)) // faz um mapa pra pegar a primeira
    .join(' ') // junta todas
}

//aqui faz a mudança no input

textInput.addEventListener('input', (event) => {
    const cursorPosition = textInput.selectionStart;
    textInput.value = PrimeiraLetra(event.target.value);
    textInput.setSelectionRange(cursorPosition, cursorPosition);
})

function removerTarefas(){
    let listaTarefas = document.getElementById("listaTarefas");
    let tarefas = listaTarefas.getElementsByTagName("li");
    for (let i = tarefas.length -1 ; i >= 0; i--) {
        listaTarefas.removeChild(tarefas[i]);
    }
}

    


   
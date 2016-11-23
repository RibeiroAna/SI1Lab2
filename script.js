function addTarefa() {
	var texto = document.getElementById('textoTarefa').value;
    window.alert(texto);
}

function excluirTarefa(tarefa) {
	tarefa.parentElement.parentElement.className += " excluido";
}

function fazerTarefa(tarefa) {
	tarefa.parentElement.parentElement.className += " feito";
}

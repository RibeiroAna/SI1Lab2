function addTarefa() {
	var texto = document.getElementById('textoTarefa').value;

	if(texto == "") {
		window.alert("Texto não pode ser vazio");
		return;
	}

	var item =  document.createElement('li');
	item.className = 'list-group-item';
	item.innerText = texto;

	item.appendChild(addLink('Feito','glyphicon glyphicon-ok', function () {fazerTarefa(this);}));
	item.appendChild(addLink('Excluir','glyphicon glyphicon-trash', function () {excluirTarefa(this);}));

	document.getElementById('listaDeTarefas').appendChild(item);
	document.getElementById('textoTarefa').value = "";
}

function addTarefasIniciais() {
	document.getElementById('textoTarefa').value = "Tarefa 1";
	addTarefa();

	document.getElementById('textoTarefa').value = "Tarefa 2";
	addTarefa();

	document.getElementById('textoTarefa').value = "Tarefa 3";
	addTarefa();

}

function addLink(texto, glyphicon, onClick) {
	var link= document.createElement('a');
	link.className = 'col-xs-1';
	link.href = '#';
	var span = document.createElement('span');
	span.className = glyphicon;
	span.innerText = texto;
	span.onclick = onClick;
	link.appendChild(span);
	return link;
}

function excluirTarefa(tarefa) {
	tarefa.parentElement.parentElement.className += " excluido";
}

function fazerTarefa(tarefa) {
	tarefa.className += " linkfeito";
	tarefa.parentElement.parentElement.className += " feito";
}

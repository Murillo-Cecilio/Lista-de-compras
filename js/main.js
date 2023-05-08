let listaDeItens = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");

//Criando interatividade com o botão da linha 24 do HTML, type submit
form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    salvarItem()
});

function salvarItem() {
    const comprasItem = itensInput.value;
    //toUpperCase funcionalidade para deixar resultado todo maiusculo,
    // não deixando duplicidade de palavras acontecer mesmo colocando minusculo.
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase())

    if (checarDuplicado) {
        alert("Item já cadastrado!")
    } else {
        //push para inserir e clonar objetos e colocar na lista
        listaDeItens.push({
            valor: comprasItem
        })
    }


    console.log(listaDeItens);
}
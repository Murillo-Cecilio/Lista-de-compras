let listaDeItens = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");

//Criando interatividade com o botão da linha 24 do HTML, type submit
form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    salvarItem();
    mostrarItem();
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
        });
    }


    console.log(listaDeItens);
}

function mostrarItem() {
    ulItens.innerHTML = '';
    listaDeItens.forEach((elemento, index) => {
        ulItens.innerHTML += `
    <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"></input>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
    `
    });

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]');

    inputsCheck.forEach(i => {
        i.addEventListener('click', (evento) => {
            console.log(evento.target.parentElement.parentElement.getAttribute('data-value'));
        });
    });
}
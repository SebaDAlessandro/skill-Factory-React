const url = "https://jsonplaceholder.typicode.com/todos"
fetch(url)
.then((respuesta) => respuesta.json())
.then((data) => mostrarData(data))

const mostrarData = (data) => {

    let card = ''
    data.map((element) => {
        card += `<div class=${element.completed ? 'cardTrue' : 'cardFalse'} id='tarjetaId'>
        <h3 class="id">${element.id}</h3>
        <div class="detail">
        <p class="userId">User-Id: ${element.userId}</p>
        <p class="title">Title: ${element.title}</p>
        <p class=${element.completed ? 'state' : 'stateF'}>Estate: ${element.completed}</p>
        </div>
        </div>`

        document.getElementById("containerCards").innerHTML = card
    })
}


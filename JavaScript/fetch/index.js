const url = "https://jsonplaceholder.typicode.com/todos"
fetch(url)
.then((respuesta) => respuesta.json())
.then((data) => mostrarData(data))

const mostrarData = (data) => {

    const divTitle = document.getElementById('title')
    const dashboard = document.createElement('div')
    dashboard.classList.add('dashboard')

    for (let i = 0; i < data.length; i++) {

        if(data[i].completed){
            dashboard.innerHTML += cardTrue(data[i])
        }else{
            dashboard.innerHTML += cardFalse(data[i])
        }

    }

    divTitle.appendChild(dashboard)

}

function cardTrue(element){

    const card = 
        `<div class="card">
            <h3 class="id">Id: ${element.id}</h3>
                <div class="detail">
                <p class="userId">User-Id: ${element.userId}</p>
                <p class="title">Title: ${element.title}</p>
                <p class="state">Estate: ${element.completed}</p>
            </div>
        </div>`

    return card

}

function cardFalse(element){

    const card = 
    `<div class="card2">
        <h3 class="id">Id: ${element.id}</h3>
            <div class="detail">
            <p class="userId">User-Id: ${element.userId}</p>
            <p class="title">Title: ${element.title}</p>
            <p class="state">Estate: ${element.completed}</p>
        </div>
    </div>`

return card

}
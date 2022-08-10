import { urlService } from '../services/url-services.js'

urlService.listUsers().then((data)=>{

    const usersParameters = document.querySelector('#usersParameters')

    let body = ``
    data.map(({name, id, email, phone, address, company}) =>{
        console.log(data)
        body +=`
        <ul class=${id%2===0 ? "users__list-parameters" : "users__list-parameters2"}>
            <li class="parameter__id">${id}</li>
            <li class="parameter__large">${name}</li>
            <li class="parameter__xlarge">${email}</li>
            <li class="parameter__large">${phone}</li>
            <li class="parameter__large">${address.city}</li>
            <li class="parameter__large">${company.name}</li>
        </ul>`
    })
    usersParameters.innerHTML = body
})
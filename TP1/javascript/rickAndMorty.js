import { characterService } from "../services/character-services.js";

characterService.listCharacters().then(data =>{

    const dashboardCharactersId = document.querySelector('#dashboardCharacters')
    let body = ``
    data.results.map(({name, image, gender, species, status})=>{
        body +=`
        <div class="card__character">
            <div class="initiation__character">
                <h1 class="name__character">${name}</h1>
                <img class="image__character" src="${image}" alt="img character">
            </div>
            <div class="details__character">
                <h2 class="gender__character">Género: ${gender}</h2>
                <h2 class="species__character">Especie: ${species}</h2>
                <h2 class="status__character">Status: ${status}</h2>
                </div>
                </div>
                `
/*                 <p class=${element.completed ? 'state' : 'stateF'}>Estate: ${element.completed}</p>
 */    })
    dashboardCharactersId.innerHTML=body
})
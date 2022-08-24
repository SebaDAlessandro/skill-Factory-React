import { urlService } from "../services/url-services.js";

function paintCard(status){

    if(status === 'unknown'){
        return "initiation__character"
    }else if(status === 'Alive'){
        return 'initiation__character-alive'
    }else{
        return 'initiation__character-dead'
    }

}

function printCards(iterador){

    try {
        
        urlService.listCharacters(iterador).then(data =>{
            const dashboardCards = document.querySelector('#dashboardCards')
            let body = ``
            data.results.map(({name, image, gender, species, status})=>{
                body +=`
                <div class="card__character">
                    <div class=${paintCard(status)}>
                        <h1 class="name__character">${name}</h1>
                        <img class="image__character" src="${image}" alt="img character">
                    </div>
                    <div class="details__character">
                        <h2 class="gender__character"><p class="date">Género:</p> ${gender}</h2>
                        <h2 class="species__character"><p class="date">Especie:</p> ${species}</h2>
                        <h2 class="status__character"><p class="date">Status:</p> ${status}</h2>
                    </div>
                </div>`
            })
    
        const nextPageBtn = document.querySelector('#nextPage')
    
        nextPageBtn.onclick= ()=>{
            counter++
            printCards(counter)
        }
    
        dashboardCards.innerHTML += body
    
        }).catch(err=>{
            console.log(err)
        })

    } catch (error) {
        console.log("Error", error);
        console.log("Error Name", error.name);
    }

}
var counter = 1
printCards(counter)


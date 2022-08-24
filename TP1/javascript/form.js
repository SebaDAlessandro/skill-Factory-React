const inputName = document.querySelector('#inputName')
const inputEmail = document.querySelector('#inputEmail')
const formMensaggeId = document.querySelector('#formMensaggeId')
const formBtn = document.querySelector('#formBtn')

formBtn.addEventListener('click', (e)=>{
    e.preventDefault() //IMPORTANTE: al utilizar este metodo no se ven los pattern generados en el HTML
    console.log('Name: ', inputName.value)
    console.log('Email: ', inputEmail.value)
    console.log('Mensagge: ', formMensaggeId.value)
})
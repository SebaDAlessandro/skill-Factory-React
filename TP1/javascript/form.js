const inputName = document.querySelector('#inputName')
const inputEmail = document.querySelector('#inputEmail')
const formMensaggeId = document.querySelector('#formMensaggeId')

inputName.oninvalid = function(event) {
    event.target.setCustomValidity('El input "Nombre" puede contener hasta 30 letras (omita número y símbolos)')
    setTimeout(() => {
        location. reload()
    }, 7000);
}

const formBtn = document.querySelector('#formBtn')

formBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('Name: ', inputName.value)
    console.log('Email: ', inputEmail.value)
    console.log('Mensagge: ', formMensaggeId.value)
})
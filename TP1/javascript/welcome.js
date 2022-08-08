const homepageWriteId = document.querySelector('#homepageWrite')

const printPresentation = ()=>{
    const presentation = `
    <p class="presentation__welcome">Bienvenidos a Skill Factory React by <span class="presentation__name">AVALITH</span><span class="presentation__point">.</span></p>
    `
    homepageWriteId.innerHTML = presentation
    setTimeout(() => {
        printPresentation()
    }, 6000)
};

printPresentation()
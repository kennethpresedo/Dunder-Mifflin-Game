////////////////////////////////////////////////////////////////////////////////
// Variables  //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const startEl = document.getElementById('start-btn-container');
const modalEl = document.getElementById('modal');
const startButtonJim = document.getElementById('jim');
const startButtonDwight = document.getElementById('dwight');
const h1El = document.getElementById('select');






///////////////////////////////////////////////////////////////////////////////
//Functions  //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const openModal = () => {
    startEl.style.display = 'none';
    modalEl.style.visibility = 'visible';
    
}

const instructionsJim = () => {
    startButtonDwight.style.display = 'none';
    h1El.innerHTML = ``;
    modalEl.style.height = '250px';
    modalEl.innerHTML = `
    <h2>Jim Halpert</h2>
     <h4>Born and raised in Scranton, Jim enjoys cycling, basketball, playing ping pong, eating soft-shell crab, and playing pranks on his friends, family and co-workers.</h4>
    `;

}

const instructionsDwight = () => {
    startButtonJim.style.display = 'none';
    h1El.innerHTML = ``;
    modalEl.style.height = '250px';
    modalEl.innerHTML = `
    <h2>Dwight Schrute</h2>
    <h4>Dwight Schrute began his career at Dunder Mifflin as a salesperson, but quickly rose through the ranks to assume the title of Assistant to the Regional Manager.</h4>
    `

}

// const nextSlide = () => {
//     modalEl.innerHTML = '';
//     modalEl.innerHTML = `
//     <h4>Instructions</h4>
//     `;
// }



/////////////////////////////////////////////////////////////////////////////////
//Event Listners  ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//modalEl.addEventListener('click', openModal)
// img.addEventListener('click', () => {
//     console.log('image clicked')
// })

startEl.addEventListener('click', openModal);
startButtonJim.addEventListener('click', instructionsJim);
startButtonDwight.addEventListener('click', instructionsDwight);
// modalEl.addEventListener('click', nextSlide);
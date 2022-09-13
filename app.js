////////////////////////////////////////////////////////////////////////////////
// Variables  //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const startEl = document.getElementById('start-btn-container');
const modalEl = document.getElementById('modal');
const startButtonJim = document.getElementById('jim');
const startButtonDwight = document.getElementById('dwight');
const h1El = document.getElementById('select');
const closeTagEl = document.querySelector('.close-tag');
const jimBoardEl = document.getElementById('jim-gameboard');
const dwightBoardEl = document.getElementById('dwight-gameboard');





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

const returnMain = () => {
    jimBoardEl.style.display = 'none';
    dwightBoardEl.style.display = 'none';
    startEl.style.display = 'visible';
}
const openJIm = () => {
    instructionsJim.style.display = 'none';
    jimBoardEl.style.display = 'visible';
};

const openDwight = () => {
    instructionsDwight.style.display = 'none';
    dwightBoardEl.style.display = 'visible';
};




/////////////////////////////////////////////////////////////////////////////////
//Event Listners  ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

startEl.addEventListener('click', openModal);
startButtonJim.addEventListener('click', instructionsJim);
startButtonDwight.addEventListener('click', instructionsDwight);
closeTagEl.addEventListener('click', returnMain);
jimBoardEl.addEventListener('click', openJIm);
dwightBoardEl.addEventListener('click', openDwight);
////////////////////////////////////////////////////////////////////////////////
// Variables  //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const startEl = document.getElementById('start-btn-container');
const modalEl = document.getElementById('modal');
const startButtonJim = document.getElementById('jim');
const startButtonDwight = document.getElementById('dwight');
const h1El = document.getElementById('select');
const jimBoardEl = document.getElementById('jim-gameboard');
const dwightBoardEl = document.getElementById('dwight-gameboard');
const nextTagJimEl = document.querySelector('.next-tag-jim');
const nextTagDwightEl = document.querySelector('.next-tag-dwight');
const startJimEl = document.querySelector('.start-jim');
const startDwightEl = document.querySelector('.start-dwight');
const closeTagJim = document.querySelector('.closetag-jim');
const closeTagDwight = document.querySelector('.closetag-dwight');
const jimBannerEl = document.getElementById('jim-banner');
const dwightBannerEl = document.getElementById('dwight-banner');


///////////////////////////////////////////////////////////////////////////////
//Functions  //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

closeTagJim.style.visibility = 'hidden';
closeTagDwight.style.visibility = 'hidden';

const openModal = () => {
    startEl.style.display = 'none';
    modalEl.style.visibility = 'visible';
    closeTagJim.style.visibility = 'visible';
    jimBoardEl.style.visibility = 'hidden';
    dwightBoardEl.style.visibility = 'hidden';
}

const instructionsJim = () => {
    startButtonDwight.style.display = 'none';
    h1El.innerHTML = ``;
    modalEl.style.height = '250px';
    modalEl.innerHTML = `
    <h2>Jim Halpert</h2>
     <h4>Born and raised in Scranton, Jim enjoys cycling, basketball, playing ping pong, eating soft-shell crab, and playing pranks on his friends, family and co-workers.</h4>
    `;
    nextTagJimEl.style.visibility = 'visible';
}

const instructionsDwight = () => {
    startButtonJim.style.display = 'none';
    h1El.innerHTML = ``;
    modalEl.style.height = '250px';
    modalEl.innerHTML = `
    <h2>Dwight Schrute</h2>
    <h4>Dwight Schrute began his career at Dunder Mifflin as a salesperson, but quickly rose through the ranks to assume the title of Assistant to the Regional Manager.</h4>
    `;
    nextTagDwightEl.style.visibility = 'visible';
}

const nextButtonJim = () => {
    modalEl.innerHTML = '';
    modalEl.innerHTML = 'klk';
    nextTagJimEl.style.visibility = 'hidden';
    startJimEl.style.visibility = 'visible';
}

const nextButtonDwight = () => {
    modalEl.innerHTML = '';
    modalEl.innerHTML = 'klk';
    nextTagDwightEl.style.visibility = 'hidden';
    startDwightEl.style.visibility = 'visible';
};

const startJim = () => {
    modalEl.style.visibility = 'hidden';
    startJimEl.style.visibility = 'hidden';
    jimBoardEl.style.visibility = 'visible';
    jimBannerEl.style.visibility = 'visible';
};

const startDwight = () => {
    modalEl.style.visibility = 'hidden';
    startDwightEl.style.visibility = 'hidden';
    dwightBoardEl.style.visibility = 'visible';
    dwightBannerEl.style.visibility = 'visible';
};

const returnMain = () => {
    location.reload()
};

/////////////////////////////////////////////////////////////////////////////////
//Event Listners  ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


startEl.addEventListener('click', openModal);
startButtonJim.addEventListener('click', instructionsJim);
startButtonDwight.addEventListener('click', instructionsDwight);
nextTagJimEl.addEventListener('click', nextButtonJim);
nextTagDwightEl.addEventListener('click', nextButtonDwight);
startJimEl.addEventListener('click', startJim);
startDwightEl.addEventListener('click', startDwight);
closeTagJim.addEventListener('click', returnMain);
closeTagDwight.addEventListener('click', returnMain);
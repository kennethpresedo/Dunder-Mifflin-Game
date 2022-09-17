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
const choiceJimAbuttonEl = document.getElementById('choiceJimA');
const choiceJimBbuttonEl = document.getElementById('choiceJimB');
const choiceDwightAbuttonEl = document.getElementById('choiceDwightA');
const choiceDwightBbuttonEl = document.getElementById('choiceDwightB');
const jimTrackerEl = document.getElementById('jim-score');
const dwightTrackerEl = document.getElementById('dwight-score');

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

const jimSelectionA = () => {
    jimTrackerEl.innerHTML = 'klk'
};

const jimSelectionB = () => {
    jimTrackerEl.innerHTML = 'klk'
};

const dwightSelectionA = () => {
    dwightTrackerEl.innerHTML = 'klk'
};

const dwightSelectionB = () => {
    dwightTrackerEl.innerHTML = 'klk'
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
choiceJimAbuttonEl.addEventListener('click', jimSelectionA);
choiceJimBbuttonEl.addEventListener('click', jimSelectionB);
choiceDwightAbuttonEl.addEventListener('click', dwightSelectionA);
choiceDwightBbuttonEl.addEventListener('click', dwightSelectionB);

const dwightsAdventures = {
    starting: 'What color shirt is Dwight wearing today?',
    mustard: {
        q: 'Micheal has put you in charge of selecting an insurance plan for the office. You can cut costs and make Micheals boss, Jan, happy but also upsetting your colleuges or pick a sweet plan and make your coworkers happy but uposet Jan',
        badPlan: {
                q: 'Your coworkers are now upset with you for picking such a barebones insurance plan, they all mde you feel guilty',
                leaveForStaples: {
                        q: 'You may now take revenge on Dunder Mifflin by stealing their clients',
                        stealClients: {
                            result: 'game-over, youll never become ARM',
                        },
                        dontStealClients: {
                            result: 'game-over, youll never become ARM',
                        }
                },
                makeItUpToEverone: {
                    q: 'Youre attempt at forgivness is buying everyone pizza, where are you ordering from?',
                    pizzaByAlfrado: {
                        result: 'game-over, youll never become ARM',
                    },
                    alfradosPizzaCafe: {
                        result: 'Congratulations!!! Youre now the offical ARM'
                    }
                },
        },
        goodPlan: {
            q: 'All of your coworkers are happy with you, but now Micheal is upset with you because Jan is yelling at him for not cutting costs',
            requestAPerformanceReview: {
                q: 'Micheal is still very annoyed with you and graded you pooprly, what can you do now?',
                mintChoclateChipIceCream: {
                    result: 'Congratulations!!! Youre now the offical ARM',
                },
                pizzaByAlfrado: {
                    result: 'game-over, youll never become ARM',
            },
            meetWithJanBehindMichealsBack: {
                q:  'Micheal found out you went behind his back to meet with his boss Jan, hes not happy with you, whats your next move?',
                doMichealsLaudry: {
                    result: 'Wasnt enough, hes still mad at you, youll never become ARM',
                },
                meatBallParmSub: {
                    result: 'its Alfrados worst sub, you did this to yourself, youll never become ARM',
                }
            },

        },
    },
    spicyBrown: {
        q: 'You have been selected to be the saftey officer or Dunder Mifflin Scranton, should you start a fire in sakes of teaching fire saftey in the office?',
        noSafetyMoment: {

        },
        yesSafteyMoment: {

        },

    },
},
}

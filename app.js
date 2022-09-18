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

}

const dwightSelectionB = () => {

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


/////////////////////////////////////////////////////////////////////////////////
//Game Logic      ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

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
            q: 'Good call, that wouldve been bad, however Micheal just burned his foot on his George Forman Grill whats your next move?',
            saveMicheal: {
                q: 'Attempting to rush him to the hospital, you have crashed into a post, your car is damaged, and your head isnt feeling that well, whats next',
                goToHospital: {
                    q: 'The doctor says you have a concussion,',
                    goHome: {
                        result: 'you blew it, youll never become ARM!',
                    },
                    continueWorking: {
                        result: 'You incorrectly shipped out 1500 reems of paper instead of 150, youre fired, youll never become ARM!',
                    },
                },
                dontGoToHospital: {
                    q: 'your vision is blurred and you cant see straight',
                    result: 'You incorrectly shipped out 1500 reems of paper instead of 150, youre fired, youll never become ARM!',
                },
            },
            dontSaveMicheal: {
                q: 'Micheal is upset nobody helped him with his burned foot, how can you make it up to him?',
                mintChoclateChipIceCream: {
                    result: 'Congratulations!!! Youre now the offical ARM',
                },
                meatBallParmSub: {
                    result: 'its Alfrados worst sub, you did this to yourself, youll never become ARM',
                },
            },
        },
        yesSafteyMoment: {
            q: 'beause of your demonstration, you caused fellow salesman Stanley Hudson to have a heart attack at work',
            issuePublicAppology: {
                q: 'This time evryone has forgiven you, do we push our luck or step down as saftey officer',
                forfeitSafteyOfficer: {
                    q: 'because youre on such this ice, what can you do to smooth things over',
                    buyEveryoneBeakfast: {
                        result: 'You made no advance in becoming ARM',
                    },
                    meetWithJanBehindMichealsBack: {
                        result: 'You have been fired for going behind Micheals back, its over, youll never become ARM',
                    },
                },
                planBombScare: {
                    result: 'You have been fired, youll never become ARM',
                },
            },
            dontAppologize: {
                q: 'You have been given a second chance, but youre on thin ice',
                meetWithAngela: {
                    q: 'meet at the warehouse on company time or after work at home?',
                    meetAtWarehouse: {
                        result: 'You have been caught by a warehouse worker, youre fired and will never become ARM',
                    },
                    meetAtHome: {   
                        result: 'You made no advance in becoming ARM',
                    },
                },
                sellPaper: {
                    result: 'You locked in a huge client from a large company, you made Dunder Mifflin $1M, welcome to management, congratulations Dwight!'
                },
            },
        },
    }
},
}

// 
// else (dwightSelectionB) {
//     dwightTrackerEl.innerHTML = 'You have been selected to be the saftey officer or Dunder Mifflin Scranton, should you start a fire in sakes of teaching fire saftey in the office?';
//     choiceDwightAbuttonEl.innerHTML = 'Teach the entire office a lesson at fire saftey by pulling the fire alarm and shouting instructions on how to exit the building';
//     choiceDwightBbuttonEl.innerHTML = 'Dont make an example with a fake fire.';
// };
// }
// }


//     // }else{
//     //     dwightTrackerEl.innerHTML = 'You have been selected to be the saftey officer or Dunder Mifflin Scranton, should you start a fire in sakes of teaching fire saftey in the office?';
//     //     if (dwightSelectionB) {
//     //         choiceDwightAbuttonEl.innerHTML = 'Teach the entire office a lesson at fire saftey by pulling the fire alarm and shouting instructions on how to exit the building';
//     //         choiceDwightBbuttonEl.innerHTML = 'Dont make an example with a fake fire.';
//     //     };
      
//     }
// if (dwightSelectionA){
//  
//     
//    }
//    if(dwightSelectionB){

//    }
// };
// }

// if (dwightSelectionA){
//     dwightTrackerEl.innerHTML = 'Your coworkers are now upset with you for picking such a barebones insurance plan, they all mde you feel guilty';
//     choiceDwightAbuttonEl.innerHTML = 'Quit and go work at Staples';
//     choiceDwightBbuttonEl.innerHTML = 'Make it up to everyone?';
// }

// if (dwightSelectionA){
//     dwightTrackerEl.innerHTML = 'Micheal has put you in charge of selecting an insurance plan for the office. You can cut costs and make Micheals boss, Jan, happy but also upsetting your colleuges or pick a sweet plan and make your coworkers happy but uposet Jan';
//     choiceDwightAbuttonEl.innerHTML = 'Pick a low budget plan that cuts costs but upset evryone';
//     choiceDwightBbuttonEl.innerHTML = 'Pick a high end plan thats expensive for the company but makes coworkers happy';
// }
//     if (dwightSelectionA){
//         dwightTrackerEl.innerHTML = 'Your coworkers are now upset with you for picking such a barebones insurance plan, they all mde you feel guilty';
//         choiceDwightAbuttonEl.innerHTML = 'Quit and go work at Staples';
//         choiceDwightBbuttonEl.innerHTML = 'Make it up to everyone?';
//    } else {
//     dwightTrackerEl.innerHTML = 'All of your coworkers are happy with you, but now Micheal is upset with you because Jan is yelling at him for not cutting costs';
//     choiceDwightAbuttonEl.innerHTML = 'You can ask for a preformance review';
//     choiceDwightBbuttonEl.innerHTML = 'You can meet with Jan (Micheals boss) behind his back to say you can run the branch better than Micheal';
//    };
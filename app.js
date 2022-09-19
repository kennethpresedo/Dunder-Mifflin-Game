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
// const choiceDwightAbuttonEl = document.getElementById('choiceDwightA');
// const choiceDwightBbuttonEl = document.getElementById('choiceDwightB');
const jimTrackerEl = document.getElementById('jim-score');
const dwightTrackerEl = document.getElementById('dwight-score');
const dwightModalEl = document.getElementById('dwight-modal');
const jimModalEl = document.getElementById('jim-modal');

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
    modalEl.innerHTML = '<h2>Instructions:</h2>';
    modalEl.innerHTML = 'Your goal as Jim Halbert is to live up to your prankster standard. Prank Dwight without getting caught and youll successfully keep your title. The wrong choice will get you fired. Good luck!';
    nextTagJimEl.style.visibility = 'hidden';
    startJimEl.style.visibility = 'visible';
}

const nextButtonDwight = () => {
    modalEl.innerHTML = '<h2>Instructions:</h2>';
    modalEl.innerHTML = 'Your goal as Dwight is to become Assistant Regional Manager. Make the right choices and youll love your dream, the wrong choice will get you fired. Good luck!';
    nextTagDwightEl.style.visibility = 'hidden';
    startDwightEl.style.visibility = 'visible';
};

const startJim = () => {
    modalEl.style.visibility = 'hidden';
    startJimEl.style.visibility = 'hidden';
    jimBoardEl.style.visibility = 'visible';
    jimBannerEl.style.visibility = 'visible';
    startGameJim();
};

const startDwight = () => {
    modalEl.style.visibility = 'hidden';
    startDwightEl.style.visibility = 'hidden';
    dwightBoardEl.style.visibility = 'visible';
    dwightBannerEl.style.visibility = 'visible';
    startGameDwight();
};

const returnMain = () => {
    location.reload()
};

/////////////////////////////////////////////////////////////////////////////
// Jim Functions ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

let currentJim = {};
function startGameJim() {
    currentJIm = {};
    showNextQuestion(1);
}

function showNextQuestion(questionsIndex) {
    const questions = jimAdventures1.find(jimAdventures1 => jimAdventures1.id === questionsIndex);
    jimTrackerEl.innerHTML = questions.text;
    while(jimModalEl.firstChild){
        jimModalEl.removeChild(jimModalEl.firstChild)
    }

    questions.options.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.classList.add('jimDwight');
            button.addEventListener('click', () => selectOption(choice))
        });
    };

function selectOption(choice) {
    const nextQuestionId = choice.nextText;
    if (nextQuestionId <= 0) {
        return startGameJim()
    }
    current = Object.assign(current, choice)
    showNextQuestion(nextQuestionId)
};

////////////////////////////////////////////////////////////////////////////////
// Dwight Functions ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let currentDwight = {};
function startGameDwight() {
    currentDwight = {};
    showNextQuestion(1);
}

function showNextQuestion(questionsIndex) {
    const questions = dwightsAdventures1.find(dwightsAdventures1 => dwightsAdventures1.id === questionsIndex);
    dwightTrackerEl.innerHTML = questions.text;
    while(dwightModalEl.firstChild){
        dwightModalEl.removeChild(dwightModalEl.firstChild)
    }

    questions.options.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.classList.add('choiceDwight');
            button.addEventListener('click', () => selectOption(choice))
        });
    };

function selectOption(choice) {
    const nextQuestionId = choice.nextText;
    if (nextQuestionId <= 0) {
        return startGameDwight()
    }
    current = Object.assign(current, choice)
    showNextQuestion(nextQuestionId)
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


///////////////////////////////////////////////////////////////////////////////////////
//Game Logic Jim        ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


const jimAdventures1 = [
    {
      id: 1,
      text: 'What Jim are you starting with',
      options: [
        {
          text: 'Identity theft JIm',
          nextText: 2,
        },
        {
          text: 'Co-manager Jim',
          nextText: 3,
        }
  
      ]
    },
    {
        id: 2,
        text: 'Which prank to pull on Dwight?',
        options: [
          {
            text: 'Put his desk items in the vending machine',
            nextText: 4,
          },
          {
            text: 'Relocate his entire desk to the bathroom',
            nextText: 5,
          }
    
        ]
      },
      {
        id: 3,
        text: 'Which prank to pull on Dwight?',
        options: [
          {
            text: 'Put his stapler in Jell-o',
            nextText: 6,
          },
          {
            text: 'Trick Dwight into thinking hes being recuited by the CIA',
            nextText: 7,
          }
    
        ]
      },
      {
        id: 4,
        text: 'You have been caught by Angela, shes treating to tell Micheal, how do you smooth it over?',
        options: [
          {
            text: 'Offer to buy treats for her cat Sprikles',
            nextText: 8,
          },
          {
            text: 'Threaten to make her private relationship with Dwight known to everyone in the office',
            nextText: 9,
          }
    
        ]
      },
      {
        id: 5,
        text: 'You have arrived 1 hour early and theres no handtruck to move desk, keep going?',
        options: [
          {
            text: 'Yes',
            nextText: 10,
          },
          {
            text: 'No',
            nextText: 11,
          }
    
        ]
      },
      {
        id: 6,
        text: 'Dwights desk is locked, the key is on Dwights keychain, risk getting the key from Dwight?',
        options: [
          {
            text: 'Yes',
            nextText: 12,
          },
          {
            text: 'No',
            nextText: 13,
          }
    
        ]
      },
      {
        id: 7,
        text: 'Send him a fax to prepare his belongings and wait on the roof of the building to be picked up via helecopter or bus',
        options: [
          {
            text: 'Helecopter',
            nextText: 14,
          },
          {
            text: 'Bus',
            nextText: 15,
          }
    
        ]
      },
      {
        id: 8,
        text: 'Shell allow it, but dont mess up which treat buy ',
        options: [
          {
            text: 'Fancy Feast',
            nextText: 16,
          },
          {
            text: 'Friskies',
            nextText: 17,
          }
    
        ]
      },
      {
        id: 9,
        text: 'Shes calling your bluff, she doesnt think youll really do it.',
        options: [
          {
            text: 'Announce it to everyone in the office',
            nextText: 18,
          },
          {
            text: 'Continue with vending machine prank',
            nextText: 18,
          }
    
        ]
      },
      {
        id: 10,
        text: 'Madge from warehouse is nearby, do you think she could help you move it?',
        options: [
          {
            text: 'Ask her for help',
            nextText: 19,
          },
          {
            text: 'Do it youself',
            nextText: 20,
          }
    
        ]
      },
      {
        id: 11,
        text: 'Please select new prank',
        options: [
          {
            text: 'click here',
            nextText: 2,
          },
          {
            text: 'click here',
            nextText: 2,
          }
    
        ]
      },
      {
        id: 12,
        text: 'Distract Dwight',
        options: [
          {
            text: 'Tell Dwight theres a thief in the parking lot breaking into cars',
            nextText: 21,
          },
          {
            text: 'Tell him Angela is looking for him in the breakroom',
            nextText: 21,
          }
    
        ]
      },
      {
        id: 13,
        text: 'Youve made no advance, please select new Jim',
        options: [
          {
            text: 'Co-manager Jim',
            nextText: 2,
          },
          {
            text: 'Quit',
            nextText: 22,
          }
    
        ]
      },
      {
        id: 14,
        text: 'Hes on the roof at midnight waiting to be picked up',
        options: [
          {
            text: 'Leave him up there until he gets tired of waiting',
            nextText: 17,
          },
          {
            text: 'Tell him to destroy his phone because his location has been compromised',
            nextText: 17,
          }
    
        ]
      },
      {
        id: 15,
        text: 'Youve been caught by Micheal sending the faxes, you lose.',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text: '',
            nextText: '',
          }
    
        ]
      },
      {
        id: 16,
        text: 'You lose, Angelas cat Sprinkles HATES Fancy Feast, she told Micheal on you',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text: '',
            nextText: '',
          }
    
        ]
      },
      {
        id: 17,
        text: 'You sucessfully pulled off the prank, you keep your title',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text: '',
            nextText: '',
          }
    
        ]
      },
      {
        id: 18,
        text: 'Youve been caught by Micheal, you lose',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text: '',
            nextText: '',
          }
    
        ]
      },
      {
        id: 19,
        text: 'She told on you, Micheal knows, game over',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text: '',
            nextText: '',
          }
    
        ]
      },
      {
        id: 20,
        text: 'You blew your back out, and now Dwight has spotted you, he tells Micheal, Game over',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text: '',
            nextText: '',
          }
    
        ]
      },
      {
        id: 21,
        text: 'Youve succesfully got him to leave his keys on his desk, congrats! You put his stuff in Jell-o',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text: '',
            nextText: '',
          }
    
        ]
      },
      {
        id: 22,
        text: 'Thanks for playing',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text: '',
            nextText: '',
          }
    
        ]
      },
  ];


///////////////////////////////////////////////////////////////////////////////////////
//Game Logic Dwight     ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const dwightsAdventures1 = [
    {
      id: 1,
      text: 'What color shirt is Dwight wearing today?',
      options: [
        {
          text: 'Mustard',
          nextText: 2
        },
        {
          text: 'Spicy Brown',
          nextText: 3
        }
  
      ]
    },
    {
      id: 2,
      text: 'Micheal has put you in charge of selecting an insurance plan for the office. You can cut costs and make Micheals boss, Jan, happy but also upsetting your colleuges or pick a sweet plan and make your coworkers happy but uposet Jan',
      options: [
        {
          text: 'Good Plan',
          nextText: 4
        },
        {
          text: 'Bad Plan',
          nextText: 5
        }
      ]
    },
    {
        id: 3, 
        text: 'You have been selected to be the saftey officer or Dunder Mifflin Scranton, should you start a fire in sakes of teaching fire saftey in the office?',
        options: [
          {
            text: 'Teach with a real-life fire',
            nextText: 6,
          },
          {
            text: 'Dont make an actaul fire for teaching purposes',
            nextText: 7,
          }
        ]
      },
      {
        id: 4,
        text: 'All of your coworkers are happy with you, but now Micheal is upset with you because Jan is yelling at him for not cutting costs',
        options: [
          {
            text: 'Request a performance review',
            nextText: 10,
          },
          {
            text: "Meet with Jan behind Micheals back",
            nextText: 11,
          }
        ]
      },
      {
        id: 5,
        text: 'Your coworkers are now upset with you for picking such a barebones insurance plan, they all mde you feel guilty',
        options: [
          {
            text: "Quit and work for competing Staples",
            nextText: 8,
          },
          {
            text: 'Make it up to everyone',
            nextText: 9,
          }
        ]
      },
      {
        id: 6,
        text: 'beause of your demonstration, you caused fellow salesman Stanley Hudson to have a heart attack at work',
        options: [
          {
            text: "Appologize and look weak",
            nextText: 12,
          },
          {
            text: "Dont applogize",
            nextText: 13,
          }
        ]
      },
      {
        id: 7,
        text: 'Good call, that wouldve been bad, however Micheal just burned his foot on his George Forman Grill whats your next move?',
        options: [
          {
            text: 'Rush over to save Micheals foot',
            nextText: 14,
          },
          {
            text: 'Dont rush to the rescue',
            nextText: 15,
          }
        ]
      },
      {
        id: 8,
        text: 'You may now take revenge on Dunder Mifflin by stealing their clients',
        options: [
          {
            text: 'Steal Dunder Mifflin clients',
            nextText: 16,
          },
          {
            text: 'Dont steal Dunder Mifflin clients',
            nextText: 16,
          }
        ]
      },
      {
        id: 9,
        text: 'Youre attempt at forgivness is buying everyone pizza, where are you ordering from?',
        options: [
          {
            text: 'Pizza By Alfrado',
            nextText: 16,
          },
          {
            text: 'Alfrados Pizza Cafe',
            nextText: 17,
          }
        ]
      },
      {
        id: 10,
        text: 'Micheal is still very annoyed with you and graded you pooprly, what can you do now?',
        options: [
          {
            text: 'Pizza By Alfrado',
            nextText: 16,
          },
          {
            text: 'Get Micheal mint chocolate chip ice cream',
            nextText: 17,
          }
        ]
      },
      {
        id: 11,
        text: 'Micheal found out you went behind his back to meet with his boss Jan, hes not happy with you, whats your next move?',
        options: [
          {
            text: 'Do Micheal laundry for a year',
            nextText: 16,
          },
          {
            text: 'Get him a meatball parm sandwich from Alfrados',
            nextText: 16,
          }
        ]
      },
      {
        id: 12,
        text: 'This time evryone has forgiven you, do we push our luck or step down as saftey officer',
        options: [
          {
            text: 'Foreit being Saftey Officer',
            nextText: 18,
          },
          {
            text: 'Plan a bomb scare that will really get the blood pumpin',
            nextText: 16,
          }
        ]
      },
      {
        id: 13,
        text: 'You have been given a second chance, but youre on thin ice',
        options: [
          {
            text: 'Meet with Angela',
            nextText: 19,
          },
          {
            text: 'Go back to Selling paper',
            nextText: 22,
          }
        ]
      },
      {
        id: 14,
        text: 'Attempting to rush him to the hospital, you have crashed into a post, your car is damaged, and your head isnt feeling that well, whats next',
        options: [
          {
            text: 'Go to hospital',
            nextText: 20,
          },
          {
            text: 'Dont go to hospital',
            nextText: 21,
          }
        ]
      },
      {
        id: 15,
        text: 'Micheal is upset nobody helped him with his burned foot, how can you make it up to him?',
        options: [
          {
            text: 'Get Micheal mint chocolate chip ice cream',
            nextText: 17,
          },
          {
            text: 'Get him a meatball parm sandwich from Alfrados',
            nextText: 16,
          }
        ]
      },
      {
        id: 16,
        text: 'game-over, youll never become ARM',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text: '',
            nextText: '',
          }
        ]
      },
      {
        id: 17,
        text: 'Congratulations!!! Youre now the offical ARM',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text:  '',
            nextText: '',
          }
        ]
      },
      {
        id: 18,
        text: 'Because youre on such this ice, what can you do to smooth things over',
        options: [
          {
            text: 'Buy everyone breakfast',
            nextText: 16,
          },
          {
            text: "Meet with Jan behind Micheals back",
            nextText: 16,
          }
        ]
      },
      {
        id: 19,
        text: 'You have been caught by a warehouse worker, youre fired and will never become ARM',
        options: [
          {
            text: '',
            nextText:'',
          },
          {
            text: '',
            nextText: '',
          }
        ]
      },
      {
        id: 20,
        text: 'Doctor says you have a concussion and have to go home, youll never become ARM.',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text: '',
            nextText: '',
          }
        ]
      },
      {
        id: 21,
        text: 'You incorrectly shipped out 1500 reems of paper instead of 150, youre fired, youll never become ARM!',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text:  '',
            nextText: '',
          }
        ]
      },
      {
        id: 22,
        text:  'You locked in a huge client from a large company, you made Dunder Mifflin $1M, welcome to management, congratulations Dwight!',
        options: [
          {
            text: '',
            nextText: '',
          },
          {
            text: '',
            nextText: '',
          }
        ]
      },
  ];



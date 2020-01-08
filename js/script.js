const app = (() => {

  //game
  const cache = {
    allSelections: document.querySelectorAll('.choice'),
    gameMenu: document.getElementById('game-menu'),
    game: document.getElementById('game'),
    compSelection: document.getElementById('comp'),
    userSelection: document.getElementById('user'),
    playerPick: "",
    compPick: "",
    resultDisplay: document.getElementById('resultDisplay'),
    result: document.getElementById('result'),
    scoreState: 0,
    keepScore: document.getElementById('keepScore'),
    rulesSection:document.querySelector('.rules-info'),
    rulesCta:document.getElementById('rules-cta'),
    closeRules:document.querySelector('.close-cross')

  }
  const reset = () => {

    cache.gameMenu.style.display = 'none'
    cache.game.style.display = 'block';
    cache.playerPick = ""
    cache.compPick = ""
    cache.userSelection.innerHTML = ""
    cache.compSelection.innerHTML = ""
    cache.resultDisplay.style.display = 'none'
    startGame()


  }

  const randomPick = () => {
    let rand = cache.allSelections[Math.floor(Math.random() * cache.allSelections.length)];
    cache.compSelection.innerHTML = `<img class=${rand.className} src=${rand.src}>`
    cache.compPick = rand.id;
    setTimeout(()=>{
      compare(cache.playerPick, cache.compPick);

},1000)

}

const addClass=(player)=>{
  document.querySelector(`.${player}`).classList.add('win')

}

  const compare = (player, comp) => {


    let result;

    if (player === 'paper') {

      if (comp == 'paper') {
        result = 'draw';


      }
      if (comp == 'scissors') {
        result = 'you lose'


      }
      if (comp == 'rock') {
        result = 'you win'

addClass(player)

      }

    }
    if (player === 'scissors') {
      if (comp == 'scissors') {
        result = 'draw'
      }
      if (comp == 'rock') {
        result = 'you lose'
      }
      if (comp == 'paper') {
        result = 'you won'
      }

    }

    if (player === 'rock') {
      if (comp == 'rock') {
        result = 'draw'
      }
      if (comp == 'scissors') {
        result = 'you win'
      }
      if (comp == 'paper') {
        result = 'you lose'
      }

    }
  cache.resultDisplay.style.display = 'block'
    cache.result.textContent = result.toUpperCase()
    if (result == "you win") {
      addClass(player)
      cache.scoreState += 1
    }

    if(result =='you lose'){
      addClass(comp)
    }

  }

  const play = (e) => {

    cache.gameMenu.style.display = 'flex'
    cache.game.style.display = 'none';
    cache.userSelection.innerHTML = "<img class=" + e.target.className + " src=" + e.target.src + ">"
    cache.playerPick = e.target.id
    setTimeout(randomPick, 1000);


  }

  const rules=()=>{
  cache.rulesSection.style.display='block'


  }
  // click option
  //html change - selection v comp picks

  const startGame = () => {
    cache.keepScore.textContent = cache.scoreState
    for (var i = 0; i < cache.allSelections.length; i++) {
      cache.allSelections[i].addEventListener('click', play)
    }
    
  }



const closeRules=()=>{
    cache.rulesSection.style.display='none'
}

  //comp random picks
  //compare
  //functions who beats who
  //winner
  //if winner add to score



  return {

    init: () => {

      startGame()
    },
    resetGame: () => {
      reset()

    },
    openRules:()=>{
      rules()
    },
    closeTheRules:()=>{
      closeRules()
    }


  }


})()

app.init()

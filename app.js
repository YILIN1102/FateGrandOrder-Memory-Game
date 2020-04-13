document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'Altera1',
      img: 'images/Altera1.png'
    },
    {
      name: 'Altera1',
      img: 'images/Altera1.png'
    },
    {
      name: 'Altera2',
      img: 'images/Altera2.png'
    },
    {
      name: 'Altera2',
      img: 'images/Altera2.png'
    },
    {
      name: 'AsagamiFujino',
      img: 'images/AsagamiFujino.png'
    },
    {
      name: 'AsagamiFujino',
      img: 'images/AsagamiFujino.png'
    },
    {
      name: 'Brynhild',
      img: 'images/Brynhild.png'
    },
    {
      name: 'Brynhild',
      img: 'images/Brynhild.png'
    },
    {
      name: 'Scáthach',
      img: 'images/Scáthach.png'
    },
    {
      name: 'Scáthach',
      img: 'images/Scáthach.png'
    },
    {
      name: 'Scáthach2',
      img: 'images/Scáthach2.png'
    },
    {
      name: 'Scáthach2',
      img: 'images/Scáthach2.png'
    },
    {
      name: 'Scáthach3',
      img: 'images/Scáthach3.png'
    },
    {
      name: 'Scáthach3',
      img: 'images/Scáthach3.png'
    },
    {
      name: 'MashKyrielight1',
      img: 'images/MashKyrielight1.png'
    },
    {
      name: 'MashKyrielight1',
      img: 'images/MashKyrielight1.png'
    },
    {
      name: 'MashKyrielight2',
      img: 'images/MashKyrielight2.png'
    },
    {
      name: 'MashKyrielight2',
      img: 'images/MashKyrielight2.png'
    },
    {
      name: 'Merlin',
      img: 'images/Merlin.png'
    },
    {
      name: 'Merlin',
      img: 'images/Merlin.png'
    },
    {
      name: 'MiyamotoMusashi',
      img: 'images/MiyamotoMusashi.png'
    },
    {
      name: 'MiyamotoMusashi',
      img: 'images/MiyamotoMusashi.png'
    },
    {
      name: 'MysteriousHeroineX',
      img: 'images/MysteriousHeroineX.png'
    },
    {
      name: 'MysteriousHeroineX',
      img: 'images/MysteriousHeroineX.png'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      // alert('You found a match')
      document.querySelector('h4').innerHTML = 'You found a match';
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      // alert('Sorry, try again')
      document.querySelector('h4').innerHTML = 'Sorry, try again';
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
      document.querySelector('h4').innerHTML = '------------------';
    }
  }

  // Seat click event


  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 100)
    }
  }

  createBoard()
})

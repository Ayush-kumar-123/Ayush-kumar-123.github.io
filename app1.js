document.addEventListener('DOMContentLoaded',() => {
    //card options
    const cardArray = [
        {
            name : 'burger',
            img :'images1/burger.png'
        },
        {
            name: 'burger',
            img:'images1/burger.png'
        },
        {
            name: 'cheeseburger',
            img:'images1/burger2.png'
        },
        {
            name: 'cheeseburger',
            img:'images1/burger2.png'
        },
        {
            name: 'pizza',
            img:'images1/pizza.png'
        },
        {
            name: 'pizza',
            img:'images1/pizza.png'
        },
        {
            name: 'cream',
            img:'images1/ice cream.png'
        },
        {
            name: 'cream',
            img:'images1/ice cream.png'
        },
        {
            name: 'plate',
            img:'images1/plate.png'
        },
        {
            name: 'plate',
            img:'images1/plate.png'
        },
        {
            name: 'piza',
            img:'images1/piza.png'
        },
        {
            name: 'piza',
            img:'images1/piza.png'
        },
        {
            name: 'akshar',
            img:'images1/akshar.png'
        },
        {
            name: 'akshar',
            img:'images1/akshar.png'
        },
        {
            name: 'games',
            img:'images1/games.png'
        },
        {
            name: 'games',
            img:'images1/games.png'
        },
        {
            name: 'pixabay',
            img:'images1/pixabay.png'
        },
        {
            name: 'pixabay',
            img:'images1/pixabay.png'
        },
        {
            name: 'red',
            img:'images1/red.png'
        },
        {
            name:  'red',
            img:'images1/red.png'
        },
        {
            name:  'player',
            img:'images1/player.png'
        },
        {
            name:  'player',
            img:'images1/player.png'
        },
        {
            name: 'heart',
            img: 'images1/heart.png'
        },
        {
            name: 'heart',
            img: 'images1/heart.png'
        },
        {
            name: 'albari',
            img: 'images1/albari.png'
        },
        {
            name: 'albari',
            img: 'images1/albari.png'
        },
        {
            name: 'chess',
            img: 'images1/chess.png'
        },
        {
            name: 'chess',
            img: 'images1/chess.png'
        },
        {
            name: 'blank1',
            img: 'images1/blank1.png'
        },
        {
            name: 'blank1',
            img: 'images1/blank1.png'
        },
        {
            name: 'blank2',
            img: 'images1/blank2.png'
        },
        {
            name: 'blank2',
            img: 'images1/blank2.png'
        },
        {
            name: 'foto',
            img: 'images1/foto.png'
        },
        {
            name: 'foto',
            img: 'images1/foto.png'
        },
        {
            name: 'river',
            img: 'images1/river.png'
        },
        {
            name: 'river',
            img: 'images1/river.png'
        },
        {
            name: 'sea',
            img: 'images1/sea.png'
        },
        {
            name: 'sea',
            img: 'images1/sea.png'
        },

        {
            name: 'soccer',
            img: 'images1/soccer.png'
        },
        {
            name: 'river',
            img: 'images1/soccer.png'
        },
    ]
     
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId =[]
    var cardsWon = []

    // create your board
    function createBoard(){
        for(let i = 0; i<cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','images1/door.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }

//check for matches
function checkForMatch(){
    var cards =document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
        alert('you found a match')
        cards[optionOneId].setAttribute('src','images1/yes.png')
        cards[optionTwoId].setAttribute('src','images1/yes.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','images1/error.png')
        cards[optionTwoId].setAttribute('src','images1/error.png')
        alert('sorry try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulation you found them all'
    }
}


// flip your card
function flipcard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}
    createBoard()
})
   




const box1 = document.querySelectorAll('.box')
const mole1 = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    box1.forEach(className =>{
        className.classList.remove('mole')
    })
    let randomPosition = box1[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

box1.forEach(id => {
    id.addEventListener('mouseup',() => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})
function moveMole() {
    let timerId = null 
    timerId = setInterval(randomSquare,400)
}
moveMole()
function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime === 0){
        clearInterval(timerId)
        alert('your score is' +result)
    }
}
let timerId = setInterval(countDown,1000)
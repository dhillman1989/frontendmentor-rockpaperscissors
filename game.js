const points = document.querySelector('.points');
const rules = document.querySelector('.rules');
const restart = document.querySelector('#playagain');
const selection = document.querySelector('.selection');
const game = document.querySelector('.activegame');
const result = document.querySelector('.result');
const youwin = document.querySelector('.result .youwin');
const youlose = document.querySelector('.result .youlose');
const player = document.querySelector('#player');
const house = document.querySelector('#house');

const options = document.querySelectorAll('.option');
let playerChoice;


// EVENT HANDLERS

for (option of options){
    let choice = option.classList[1];
    let choicehtml = option.innerHTML;
    option.addEventListener('click', ()=>{
        console.log(choice);
        playerChoice = choice;
        player.innerHTML = choicehtml;
        selection.classList.add('hidden');
        game.classList.remove('hidden');
        setTimeout(()=>{houseSelect()}, 1500);
        setTimeout(()=>{winlose(playerChoice, houseChoice)}, 2500);
    });
}

restart.addEventListener('click', ()=>{
    playerChoice = "";
    houseChoice = "";
    playerHTML = "";
    player.innerHTML ="";
    house.innerHTML = "";
    youlose.classList.add('hidden');
    youwin.classList.add('hidden');
    restart.classList.add('hidden');
    game.classList.add('hidden');
    selection.classList.remove('hidden');
})


//HOUSE CHOICE 
const houseSelect = () =>{
    let random = Math.floor(Math.random())*3;
    
    if(random > 2){
        houseChoice = "rock";
        house.innerHTML = '<img src="images/icon-rock.svg">';
    }
    else if(random > 1){
        houseChoice = "paper";
        house.innerHTML = '<img src="images/icon-paper.svg">';
    }
    else{
        houseChoice = "scissors";
        house.innerHTML = '<img src="images/icon-scissors.svg">';
    }
}


//CONFIRM AND DISPLAY RESULT 

const winlose = (pChoice, hChoice)=>{
    if (pChoice == hChoice){
        console.log("its a tie!");
    } 
    else if(pChoice == "rock" && hChoice == "paper"){
        youlose.classList.remove('hidden');
    }
    else if(pChoice == "rock" && hChoice == "scissors"){
        points.innerText = (parseInt(points.innerText) + 1); 
        youwin.classList.remove('hidden');
    }
    else if(pChoice =="scissors" && hChoice == "rock"){
        youlose.classList.remove('hidden');
    }
    else if(pChoice == "scissors" && hChoice == "paper"){
        points.innerText = (parseInt(points.innerText) + 1); 
        youwin.classList.remove('hidden');
    }
    else if(pChoice =="paper" && hChoice == "scissors"){
        youlose.classList.remove('hidden');
    }
    else if(pChoice == "paper" && hChoice == "rock"){
        points.innerText = (parseInt(points.innerText) + 1); 
        youwin.classList.remove('hidden');
    }   

    restart.classList.remove('hidden');
}
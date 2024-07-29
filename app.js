

// Game function
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];

    const choicesDict ={ 
    'rock':'👊', 
    'paper':'✋', 
    'scissors':'✌'
    };

    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
      document.getElementById("tie").play();
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')) {
      result = 'You win!';
      document.getElementById("win").play();
      triggerConfetti();
    }
    else {
      result = 'You lose!';
      document.getElementById("lose").play();
    }
    document.getElementById("result").textContent = result;
    document.getElementById("computer").textContent = "Computer's choice: " + choicesDict[computerChoice];
}

// Confetti
function triggerConfetti() {
  const canvas = document.getElementById('confetti_canvas');
  const jsConfetti = new JSConfetti({ canvas });
  jsConfetti.addConfetti({
    emojis: ['🏐', '🥇', '🎯', '🥈', '🏊', '🏸','🏀','⚽️','🤾‍♂️','⛹️‍♀️','💜'],
  });
}

//delay div #bg for 2 seconds to show the olympic background image uncovered
setTimeout(function(){
  document.getElementById('bg').style.visibility = "visible";
  },2000);



// Sound effect
// how to create element for SOUND EFFECT
//let heading = document.createElement("h1")
//heading.textContent = "Hello World!"
//document.body.appendChild(heading)
  

//picture size
// let pictureSize = "150pt";
// document.getElementById("button_rock").style.fontSize = pictureSize
// document.getElementById("button_paper").style.fontSize = pictureSize
// document.getElementById("button_scissors").style.fontSize = pictureSize
// document.getElementById("result").style.fontSize = "50pt"

//alignment
// document.body.style.display = "grid";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// document.body.style.textAlign = "center";






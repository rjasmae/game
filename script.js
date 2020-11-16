let   playerScore = 0;
let   computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const selection = document.querySelectorAll(".selection");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


        function getComputerSelection() {
            const selections = ['rock','paper','scissors'];
            const randomNumber = Math.floor(Math.random()* 3);
            return selections[randomNumber];
}

        function win(playerSelection , computerSelection) {
            playerScore++;
            playerScore_span.innerHTML = playerScore;
            computerScore_span.innerHTML = computerScore;
            result_p.innerHTML = playerSelection + " " + "beats" + " " + computerSelection + ",You win!";
    }

        function lose(playerSelection , computerSelection) {
            computerScore++;
            playerScore_span.innerHTML = playerScore;
            computerScore_span.innerHTML = computerScore;
            result_p.innerHTML =  computerSelection + " " + "beats" + " " + playerSelection + ",You lose!";
        }
        function draw(playerSelection , computerSelection) {
            result_p.innerHTML =  "it's a tie!";
            }

        function game(playerSelection) {
            const computerSelection = getComputerSelection();
            switch (playerSelection + computerSelection) {
               case "paperrock":
               case "rockscissors":
               case "scissorspaper":
                 win(playerSelection , computerSelection);   
                 break; 
               case "rockpaper":
               case "scissorsrock":
               case "paperscissors":
                 lose(playerSelection , computerSelection);
                 break; 
               case "paperpaper":
               case "scissorsscissors":
               case "rockrock":
                  draw(playerSelection , computerSelection);
                  break;
    }
}
   
      
      
function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })
    paper_div.addEventListener('click', function() {
        game("paper");
    })
    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}
main();
    
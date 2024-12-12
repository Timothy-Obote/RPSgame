let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0};

                 updateScoreElement();
                
                function playGame(playerMove) {
                const computerMove = pickComputerMove();
            
            
            let result = '';

            if (playerMove === 'scissors'){
                        if (computerMove === 'rock') {
                        result = 'You lose';
                    } else if (computerMove === 'paper') {
                        result = 'You win';
                    } else if (computerMove === 'scissors') {
                        result = 'Tie ';
                    } 
                
            } else if (playerMove === 'paper') {
                        if (computerMove === 'rock') {
                        result = 'You win';
                    } else if (computerMove === 'paper') {
                        result = 'Tie';
                    } else if (computerMove === 'scissors') {
                        result = 'You lose ';
                } 


            } else if (playerMove === 'rock') {
               
                    if (computerMove === 'rock') {
                        result = 'Tie';
                    } else if (computerMove === 'paper') {
                        result = 'You Lose';
                    } else if (computerMove === 'scissors') {
                        result = 'You win ';
                    } 

            }

            if(result === 'You win'){
                score.wins += 1;
            }else if (result === 'You Lose'){
                score.losses += 1;

            }else if (result === 'Tie') {
                score.ties += 1;
            }
               
            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-move').innerHTML = `You 

            <img src="images/${playerMove}-emoji.png" class="move-icon">
            <img src="images/${computerMove}-emoji.png" class="move-icon">
            Computer`;

                }


                function updateScoreElement() {
                    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses} , Ties: ${score.ties}`;
                
                }
                

    function pickComputerMove() {

    const randomNumber = Math.random();
    //var does not follow rules of scope 
    let  computerMove = '';
    
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 3/3) {
        computerMove = 'scissors';
    
    }

    return computerMove;
       
    }
    



    const product2 = {
        name: 'shirt',
        'delivery-time': '1 day',
        rating: {
            starts: 4.5,
            count: 87,
        },
        fun: function function1 () {
           console.log('function inside the object');

        }
    };
    console.log(product2);
    console.log(product2.name);
    console.log(product2['name']);
    console.log(product2['delivery-time']);

    console.log(product2.rating.count);
    product2.fun();

    console.log(JSON.stringify(product2));

    const jsonString = JSON.stringify(product2);
    console.log(JSON.parse(jsonString)); 
    
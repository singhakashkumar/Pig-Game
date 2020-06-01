/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,roundScore,currentPlayer,playing;
init();
function init()
{
    score=[0,0];roundScore=0;currentPlayer=0;playing=true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    // var docDOM=
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-'+currentPlayer+'-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    
    

    
}
function nextPlayer()
{
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        currentPlayer===0?currentPlayer=1:currentPlayer=0;
        document.querySelector('#current-'+currentPlayer).textContent=0;
        roundScore=0;
}
function roll()
{
    if(playing){

        var dice=Math.floor(Math.random()*6)+1;
        document.querySelector('.dice').style.display='block';
        document.querySelector('.dice').src='dice-'+dice+'.png';
        if(dice!=1)
        {
            roundScore+=dice;
            document.querySelector('#current-'+currentPlayer).textContent=roundScore;
        }
        else{
            nextPlayer();
        }
    }

}
function hold()
{
    if(playing){
        score[currentPlayer]+=roundScore;
        document.querySelector('#score-'+currentPlayer).textContent=score[currentPlayer];
        if(score[currentPlayer]>=50)
        {
            document.querySelector('.player-'+currentPlayer+'-panel').classList.add('winner');
            document.querySelector('#name-'+currentPlayer).textContent='Winner!!!';
            playing=false;
        }
        else{
        nextPlayer();
        }
    }
    
}

document.querySelector('.btn-roll').addEventListener('click',roll);
document.querySelector('.btn-hold').addEventListener('click',hold);
document.querySelector('.btn-new').addEventListener('click',init);

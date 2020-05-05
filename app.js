
var scores,roundScore,activePlayer,gamePlaying;

init();
//document.querySelector('#current-' + activePlayer).textContent = dice;
//this is used for setting text(setter)

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+dice+'</em> ';
//this is to change html

//var x=document.querySelector('#score-0').textContent;
//THis is to read content in variable(getter)
//console.log(x);


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying)
    {
        //1.we need random number 
    var dice = Math.floor(Math.random()*6)+1;

    //2.display result
    var diceDOM= document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src= 'dice-' + dice + '.png';

    //3. update the round score if num rolled is not 1
    if(dice!==1){
        //add score
        roundScore+=dice;
        document.querySelector('#current-' + activePlayer).textContent =roundScore;
    }
    else{
        //Next player
        nextPlayer();
    }
    }
    
});
   
document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying)
    {
        //add current score to glabal score
        scores[activePlayer]+=roundScore;
        
        //update ui
        document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];

        
        //check if any player won
        if(scores[activePlayer]>=100)
        {
            document.querySelector('#name-'+activePlayer).textContent='winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
            gamePlaying=false;
        }
        else{
            nextPlayer();
        }
    }
        
        
    });


function nextPlayer(){
        activePlayer===0?activePlayer=1 :activePlayer=0;
        roundScore=0;

        document.getElementById('current-0').textContent= '0';
        document.getElementById('current-1').textContent= '0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        document.querySelector('.dice').style.display = 'none';
}
//mdn(website) has diff type of events in it,checkout 

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores=[0,0]
    activePlayer=0;
    roundScore=0
    gamePlaying=true;
    document.querySelector('.dice').style.display = 'none';

//this works only for ids and it is faster then querySelector
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('#name-0').textContent='Player-1';
document.querySelector('#name-1').textContent='Player-2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');
}
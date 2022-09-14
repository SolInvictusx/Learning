function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random()* 6) +1;
        alert('You rolled ' + roll + '!');
        if (roll === 1) {
            alert('Game over, no more rolls');
            break;
        }
        if (roll < 5) {
            continue;
        
        goldCoins += roll;
        alert('Congratulations, you won ' + roll + ' gold coins!');
        alert('You have won ' + goldCoins + ' so far!');
        
    }
    alert('In total, you won ' + goldCoins + ' gold coins!');
}
}

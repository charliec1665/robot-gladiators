// Game States
// WIN - Player robot has defeated all enemy robots
// * Fight all enemy robots
// * Defeat each enemy robot
// LOSE - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and execute as long as the enemy is alive
    while(playerHealth > 0 && enemyHealth > 0) {

        // To fight or to skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player chooses to SKIP
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                // subtracting money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
             // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");

                //award player money for winning
                playerMoney = playerMoney + 20;
                //leave while loop since enemy is dead
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //remove player's health by subtracting amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } //end of while loop
    }; //end of fight function

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0){
            //let player know what round they're in
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
    
            //pick new enemy to fight based on index of enemyNames array
            var pickedEnemyName = enemyNames[i];
    
            //reset enemyHealth before starting new fight
            enemyHealth = 50;
    
            //use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;
    
            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();

    // play again
    //startGame();
};

//function to end the entire game
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle. May " + playerName + " rest in peace.");
    }

    //ask player if they want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
            //restart the game
            startGame();
        } else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
};

startGame();


// Wrap game logic in startGame() function
// When game ends call an endGame() function that: 
    // displays the player's score
    // THEN ask if player wants to play again
    //if yes THEN call startGame() function to restart the game

// After the player skips or defeats an enemy
    // Ask if they want to visit the store
    // if no continue as normal
    // if yes THEN call the shop() function 
    // in shop() function prompt with options to UPGRADE attack, REFILL health, or LEAVE the store.
    // if refill, subtract money points from player and increase attack power
    // if leave, alert goodbye and exit the function
    // if any other invalid option, call shop() again




//save as snippet 'for loop template'
/* var array = [1,2,3];
for (var i = 0; i < array.length; i++) {
    //start with console log and build from there
    console.log(array[i]);
} */
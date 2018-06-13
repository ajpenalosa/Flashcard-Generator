// Import the constructors
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

// Requiring the inquirer module
var inquirer = require('inquirer');

// Setting up the Basic Card questions in an array
var basicCards = [

    new BasicCard( 'While inside Stark Towers who did Hulk say "Puny god" to while throwing this person around like a rag doll?', 'Loki'),

    new BasicCard( 'When describing the Avengers to Loki, how did Tony describe Captain America?', 'A super soldier'),

    new BasicCard( 'What is Agent Coulson\'s first name?', 'Phil'),
    
    new BasicCard( 'When the military pilot yelled into his radio, "Target angry! Target angry!", to whom was he referring?', 'Hulk'),
    
    new BasicCard( 'When Loki is locked up in the S.H.I.E.L.D. helicarrier, who gets him to reveal that he is planning to get Banner to change into the Hulk and destroy the ship from within?', 'Black Widow'),
    
    new BasicCard( 'At the end of the credits, what Marvel character is shown putting on the Infinity Gauntlet and uttering, "Fine. I\'ll do it myself."?', 'Thanos'),
    
    new BasicCard( 'After the party at Tony Stark\'s place, who is the first Avenger to try lifting Thor\'s hammer?', 'Hawkeye'),
    
    new BasicCard( 'Before the epic fight in the woods, what did Iron Man refer to Thor as?', 'Tourist'),
    
    new BasicCard( 'What is the name of the blue glowing square that Loki uses as a weapon?', 'The Tesseract'),
    
    new BasicCard( 'When the Avengers are in the streets of New York Captain America starts issuing orders. What are his orders to the Hulk?', 'Smash')

];

// Setting up the Cloze Card questions in an array
var clozeCards = [

    new ClozeCard( "Nick Fury is responsible for bringing The Avengers together.", "Nick Fury"),
    
    new ClozeCard( "Chris Evans is not eating in the post credits scene because he's wearing a fake jaw", "Chris Evans"),
    
    new ClozeCard( "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir.", "Thor"),
    
    new ClozeCard( "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity.", "Tony Stark"),
    
    new ClozeCard( "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk.", "Hulk"),
    
    new ClozeCard( "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider.", "Peter Parker"),
    
    new ClozeCard( "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army.", "Steve Rogers"),
    
    new ClozeCard( "Like most sorcerers, Dr. Strange draws his power from three primary sources: the invocation of powerful mystic entities or objects, the manipulation of the universe's ambient magical energy, and his own psychic resources.", "Dr. Strange"),
    
    new ClozeCard( "Vision was an android who possessed a synthetic vibranium body created by Ultron and Helen Cho, along with the powerful gem known as the Mind Stone.", "Vision"),
    
    new ClozeCard( "Known for his use of the bow and arrow as his primary weapon, Hawkeye became one of S.H.I.E.L.D.'s best agents", "Hawkeye")
];

// Initializing game count and score
var count = 0;
var correct = 0;
var wrong = 0;

//----------------------------------------
// Basic Card Game
//----------------------------------------

function basicCardGame() {

    // Console logging an empty space for readability
    console.log(" ");

    inquirer.prompt([
        { // Ask a question from the array at the index of count
            name: "question",
            message: (count + 1) + ": " + basicCards[count].front
        }
    ]).then(answer => {

        // Setting answer and user answer to lower case and comparing them
        // If they match, then console.log "Correct!" and add 1 to the correct score
        if ( answer.question.toLowerCase() === basicCards[count].back.toLowerCase() ) {
            console.log("\r\nCorrect!");
            correct++;
        }
        else {
            // If the user answer is wrong, display the correct answer
            // Add 1 to the wrong answer score
            console.log("\r\nSorry! The correct answer was: " + basicCards[count].back );
            wrong++;
        }

        // Add 1 to the count
        count++;

        // If the count is less than the amount of questions, initialize the basicCardGame function again
        if ( count < basicCards.length ) {
            basicCardGame();
        }

        else {
            // When all questions have been asked, display "Game over" and score stats
            console.log("\r\nGame over!");
            console.log("You got " + correct + " correct and " + wrong + " wrong.\r\n");

            // Ask if player wants to play again
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to play again?",
                    name: "playAgain",
                    default: true
                }
            ]).then(playAgain => {

                if ( playAgain.playAgain ) {
                    console.log(" ");
                    chooseGame()
                }
                else {
                    console.log("\r\nThank you for playing! Bye!\r\n");
                }
            
            }); // End of inquirer

        } // End of else statement
    
    }); // End of inquirer

}; // End of basicCardGame()


//----------------------------------------
// Cloze Card Game
//----------------------------------------

function clozeCardGame() {

    // Console logging an empty space for readability
    console.log(" ");

    inquirer.prompt([
        { // Ask a question from the array at the index of count
            name: "question",
            message: (count + 1) + ": " + clozeCards[count].partial
        }
    ]).then(answer => {

        // Setting answer and user answer to lower case and comparing them
        // If they match, then console.log "Correct!" and add 1 to the correct score
        if ( answer.question.toLowerCase() === clozeCards[count].cloze.toLowerCase() ) {
            console.log("\r\nCorrect!");
            correct++;
        }
        else {
            // If the user answer is wrong, display the correct answer
            // Add 1 to the wrong answer score
            console.log("\r\nSorry! The correct answer was: " + clozeCards[count].cloze );
            wrong++;
        }

        // Add 1 to the count
        count++;

        // If the count is less than the amount of questions, initialize the clozeCards function again
        if ( count < clozeCards.length ) {
            clozeCardGame();
        }

        else {
            // When all questions have been asked, display "Game over" and score stats
            console.log("\r\nGame over!");
            console.log("You got " + correct + " correct and " + wrong + " wrong.\r\n");

            // Ask if player wants to play again
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to play again?",
                    name: "playAgain",
                    default: true
                }
            ]).then(playAgain => {

                if ( playAgain.playAgain ) {
                    console.log(" ");
                    chooseGame()
                }
                else {
                    console.log("\r\nThank you for playing! Bye!\r\n");
                }
            
            }); // End of inquirer

        } // End of else statement
    
    }); // End of inquirer

}

console.log(" ");

function chooseGame() {

    // Reset count and score to 0
    count = 0;
    correct = 0;
    wrong = 0;

    inquirer.prompt([
        {
            type: "list",
            message: "Which Flash Card Game would you like to play?",
            choices: ["Basic Cards", "Cloze Cards"],
            name: "game"
        }
    ]).then(chooseGame => {
    
        // If "Basic Cards" was chosen, start Basic Card game
        if ( chooseGame.game === "Basic Cards" ) {
            basicCardGame();
        }
        else {
            // Otherwise, start the Cloze Card game
            clozeCardGame();
        }
    
    });

}

chooseGame();

//when you run this on browser, reload once so the first set of texts will appear on console
let wordvault = ["store","nice","okay","toy","please","hello","stop","turn","account","university","loss","make"]
// database of the twelve preset words
let randomword = wordvault[Math.floor(Math.random()*12)]
//picks a word from the wordvault array with a random index integer from 0 to 11

let lettercount = 0
let unknownword = []     
//this is the array that will appear on user screen showing blanks of the random word
while(lettercount < randomword.length){
    unknownword.push("_")
    lettercount++
}  
//while loop adds a blank in "unknownword" array for every letter in random word
console.log(unknownword)

let userguesses = []
//this is where computer keeps track of all the guesses (shows user their total guesses)
let lives = 6
//this is where computer keeps count of number of lives
console.log("number of lives : " + lives)

while(true){   
    if(lives>0){
    //while loop that allows user to guess words. it only continues if lives are above 0
    
        let userinput = prompt("enter single letter from alphabet")
        userinput = userinput.toLowerCase()
        //asks for user input and process it so that it is not case sensitive
        let inputcheck = 0
        //variable to check if user input is correct (more info below)
        for(let i=0; i<randomword.length; i++){
            if(randomword[i] == userinput){
                //if the user input corresponds to any letters of the random word (if user input is correct)
                unknownword.splice(i,1,userinput)
                //fills in blank with the letter in the right place in "unknownword" variable
                inputcheck = 1
                //"inputcheck" variable turns 1 when user's guess is correct 
                //it runs everytime when user input corresponds to the random word (will run several times if theres a repeated letter)
                //but it dosent really matter if "inputcheck = 1" runs several times, the results are the same
            }   
            // if user input is incorrect, status of "inputcheck" stays 0
            //the "unknownword"(shows blanks on screen) variable  does not change (it stays blank)
        
        }

        console.log(unknownword)
        //prints "unknownword" variable
        userguesses.push(userinput)
        //adds user's input into the array of total guesses
        console.log("total guesses :" + userguesses)
        //prints user's total guesses
        
        if(inputcheck == 1){
        // if user guess is correct
            console.log("good, keep guessing")
            // words of encouragement
        }else{
            // if user guess in incorrect
            lives = lives -1
            //lives decrease by 1 
            console.log("incorrect guess, try again")
            //words of failure
        }
        console.log("number of lives left :" + lives)
        //show number of lives
        
        if(unknownword.indexOf("_")== -1){
            console.log("you have successfully guessed the word!!!")
            break
        }
        //if all the blanks are filled up, the game ends with a victory message
    }else{
        console.log("you have run out of lives")
        console.log("the correct word was : " + randomword)
        break
    // if user ran out of lives, game ends and tells user what the correct word was  
    }
}


    
 

  function round(playerSelection) {
    
  
    
    let computerChoice = Math.floor(Math.random() * 4);
    let computerElement;
    let message;
        if (computerChoice == 0) {
            
            computerElement = "WATER";
       
        }

        else if (computerChoice == 1) {
       
            computerElement = "EARTH";
        
        }
        
        else if (computerChoice == 2) {
                
            computerElement = "FIRE";
        
        }
        
        else if (computerChoice == 3) {
                       
            computerElement = "AIR";
                   
        }   
                
        if (computerElement == "WATER" && playerSelection == "WATER"  
        || computerElement == "EARTH" && playerSelection == "EARTH" 
        || computerElement == "FIRE" && playerSelection == "FIRE" 
        || computerElement == "AIR" && playerSelection == "AIR") { 
        
            return("Tie! Same element gives a tie")
        }

    else if (computerElement == "EARTH" && playerSelection == "AIR" 
            || computerElement == "AIR" && playerSelection == "EARTH") {
    
            return("Tie! Earth & Air are opposites so it gives a tie")
        
        
        }
    
    else if (computerElement == "WATER" && playerSelection == "FIRE" 
            || computerElement == "FIRE" && playerSelection == "WATER") {
    
            return("Tie! Water & Fire are opposites so it gives a tie")
            
        }

            else if  (computerElement == "WATER" && playerSelection == "EARTH") {
                           
                        
                        return("You lose, Water beats Earth")

            } 

            else if  (computerElement == "EARTH" && playerSelection == "WATER") {
                            
                        
                        return("You win! Water beats Earth")
            } 

            else if (computerElement == "EARTH" && playerSelection == "FIRE") {
                
                        
                        return("You lose, Earth beats Fire")

            }

            else if (computerElement == "FIRE" && playerSelection == "EARTH") {
                    
                        
                        return("You win! Earth beats Fire")
                        
                        
            }

            else if (computerElement == "FIRE" && playerSelection == "AIR") {
                        
                        
                        return("You lose, Fire beats Air")

            }
            
            else if (computerElement == "AIR" && playerSelection == "FIRE") {
                            
                        
                        return("You win! Fire beats Air")
            
                                
            }
                            
            else if (computerElement == "AIR" && playerSelection == "WATER") {
                                
                        
                        return("You lose, Air beats Water")
            
            }
    
            else if (computerElement == "WATER" && playerSelection == "AIR") {
                                    
                        
                        return("You win! Air beats Water")
                        
            }  

            else {
                        console.log("invalid element. this round will be a tie")
            
            }
                  
    
        }
                                                       
                                                            
                   
const waterGame = document.querySelector(`#WATER`)
    
    

    waterGame.addEventListener(`click`, () => {
        gamePoint = round(playerSelection = "WATER");
    
        if (gamePoint === "You win! Water beats Earth"){
            ++num;
            ++playerRounds;
            playerCount.innerHTML = num;
            eventsChanger.innerHTML = gamePoint;
            if (playerRounds === 5){
                alert("you won the 5 round battle!!")
                num = 0;
                num2 = 0;
                playerRounds = 0;
                pcRounds = 0;
                playerCount.innerHTML = num;
                pcCount.innerHTML = num2;
            }   
        }
            else if (gamePoint === "You lose, Air beats Water"){
                ++num2;
                ++pcRounds;
                pcCount.innerHTML = num2;
                eventsChanger.innerHTML = gamePoint;
                if (pcRounds === 5){
                    alert("you lost the 5 round battle")
                    num = 0;
                    num2 = 0;
                    playerRounds = 0;
                    pcRounds = 0;
                    playerCount.innerHTML = num;
                    pcCount.innerHTML = num2;
                }   
            }
                else if (gamePoint === "Tie! Same element gives a tie" 
                ||"Tie! Earth & Air are opposites so it gives a tie"
                ||"Tie! Water & Fire are opposites so it gives a tie") {
                    eventsChanger.innerHTML = gamePoint;
                }
              
            
                
    })

const earthGame = document.querySelector(`#EARTH`)

    earthGame.addEventListener(`click`, () => {
        gamePoint = round(playerSelection = "EARTH");
    
        if (gamePoint === "You win! Earth beats Fire"){
            ++num;
            ++playerRounds;
            playerCount.innerHTML = num;
            eventsChanger.innerHTML = gamePoint;
            if (playerRounds === 5){
                alert("you won the 5 round battle!!")
                num = 0;
                num2 = 0;
                playerRounds = 0;
                pcRounds = 0;
                playerCount.innerHTML = num;
                pcCount.innerHTML = num2;
            }   
        }
            else if (gamePoint === "You lose, Water beats Earth"){
                ++num2;
                ++pcRounds;
                pcCount.innerHTML = num2;
                eventsChanger.innerHTML = gamePoint;
                if (pcRounds === 5){
                    alert("you lost the 5 round battle")
                    num = 0;
                    num2 = 0;
                    playerRounds = 0;
                    pcRounds = 0;
                    playerCount.innerHTML = num;
                    pcCount.innerHTML = num2;
                }   
            }
                else if (gamePoint === "Tie! Same element gives a tie" 
                ||"Tie! Earth & Air are opposites so it gives a tie"
                ||"Tie! Water & Fire are opposites so it gives a tie") {
                    eventsChanger.innerHTML = gamePoint;
                }
              
            
    })

const fireGame = document.querySelector(`#FIRE`)

    fireGame.addEventListener(`click`, () => {
        gamePoint = round(playerSelection = "FIRE");
    
        if (gamePoint === "You win! Fire beats Air"){
            ++num;
            ++playerRounds;
            playerCount.innerHTML = num;
            eventsChanger.innerHTML = gamePoint;
            if (playerRounds === 5){
                alert("you won the 5 round battle!!")
                num = 0;
                num2 = 0;
                playerRounds = 0;
                pcRounds = 0;
                playerCount.innerHTML = num;
                pcCount.innerHTML = num2;
            }   
        }
            else if (gamePoint === "You lose, Earth beats Fire"){
                ++num2;
                ++pcRounds;
                pcCount.innerHTML = num2;
                eventsChanger.innerHTML = gamePoint;
                if (pcRounds === 5){
                    alert("you lost the 5 round battle")
                    num = 0;
                    num2 = 0;
                    playerRounds = 0;
                    pcRounds = 0;
                    playerCount.innerHTML = num;
                    pcCount.innerHTML = num2;
                }   
            }
                else if (gamePoint === "Tie! Same element gives a tie" 
                ||"Tie! Earth & Air are opposites so it gives a tie"
                ||"Tie! Water & Fire are opposites so it gives a tie") {
                    eventsChanger.innerHTML = gamePoint;
                   
                }
                    
              
              
                    
        
})

const airGame = document.querySelector(`#AIR`)
    
    airGame.addEventListener(`click`, () => {
        gamePoint = round(playerSelection = "AIR");
    
        if (gamePoint === "You win! Air beats Water"){
            ++num;
            ++playerRounds;
            playerCount.innerHTML = num;
            eventsChanger.innerHTML = gamePoint;
            if (playerRounds === 5){
                alert("you won the 5 round battle!!")
                num = 0;
                num2 = 0;
                playerRounds = 0;
                pcRounds = 0;
                playerCount.innerHTML = num;
                pcCount.innerHTML = num2;
            }      
                
                         
           
        }
            else if (gamePoint === "You lose, Fire beats Air"){
                ++num2;
                ++pcRounds;
                pcCount.innerHTML = num2;
                eventsChanger.innerHTML = gamePoint;
                if (pcRounds === 5){
                    alert("you lost the 5 round battle")
                    num = 0;
                    num2 = 0;
                    playerRounds = 0;
                    pcRounds = 0;
                    playerCount.innerHTML = num;
                    pcCount.innerHTML = num2;
                }      
                
                
            }

                else if (gamePoint === "Tie! Same element gives a tie" 
                        ||"Tie! Earth & Air are opposites so it gives a tie"
                        ||"Tie! Water & Fire are opposites so it gives a tie") {
                            eventsChanger.innerHTML = gamePoint;
                        }
                   
            
                        
        
})




let playerCount = document.querySelector(`.playerCounter`)
let num = 0;
playerCount.innerHTML = num;

let pcCount = document.querySelector(`.pcCounter`)
let num2 = 0;
pcCount.innerHTML = num2;

let eventsChanger = document.querySelector(`.events`)

let playerRounds = 0;
let pcRounds = 0;

     


  


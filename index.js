/* Avatar Fan Tribute:
    ATLA Rock Paper Scissors
    
    Pseudocode:
        0.1: Function that returns a random result between water earth     
            fire air called "getComputerChoice"
        0.2: Function that asks the user to enter a text for either w, e,
            f or a called "playerSelection".
        let massage.= "You lose";0.3: Function that compares the last two functions results and de
        console.log("massage.textContent();-
            -termines which one won with an output saying: "you win" or:computerCount 
            along with the reason why (i.e. "w beats e")
        0.2.2: Update the "playerSelection" function to be case unsensitive 
        1.0:    Create a loop that allows user play 5 round and determines who won
        based on who was victorious more times out of the 5 rounds.
    
    
    
    
*/

/* 0.1 
    function getComputerChoice() {
        let choice = Math.floor(Math.random()*4) + 1;
        let dope = "game";
        if (choice === 1) {
            dope = "WATER";
        }
         else if (choice === 2) {
            dope = "EARTH";
            }
                else if (choice === 3) {
                    dope = "FIRE";
                }
                    else if (choice === 4) {
                        dope = "AIR";
                    }
        return(dope)
        
  
    

    }

    console.log(getComputerChoice()) */

    /* 0.2 

    function playerSelection() {
        let dope = prompt("Pick your element: Water, Earth, Fire or Air");
  
        
        return(dope)
        
  
    

    }
    console.log(playerSelection()) */

    /* 0.3 

        function game() {
            let getComputerChoice = "Water";
           
        }

        game() */

    /* 0.2.2 */


        
  
     

    

    
/*   0.3 THE GAME! */

/*         function game() {
           
    let dope = prompt("Pick your element: Water, Earth, Fire or Air");
    let playerSelection = dope.toUpperCase();
  
    function getComputerChoice() {
        let choice = Math.floor(Math.random() * 4);
  
        if (choice == 0) {
            dont = "WATER";
        }
         else if (choice == 1) {
            dont = "FIRE";
            }
                else if (choice == 2) {
                    dont = "FIRE";
                }
                    else if (choice == 3) {
                        dont = "EARTH";
                    }
        console.log(dont)
        
  
    

    }
    

            if (dont == "WATER" && playerSelection == "WATER" || dont == "EARTH" && playerSelection == "EARTH" || dont == "FIRE" && playerSelection == "FIRE" || dont == "AIR" && playerSelection == "AIR") 
            { console.log("Tie!")
            console.log("Same element give tie")

            
        }
            else if (dont == "EARTH" && playerSelection == "AIR" || dont == "AIR" && playerSelection == "EARTH") {
                console.log("Tie!")
                console.log("Earth & Air are opposites so it gives a tie")
                
            }
                  else if (dont == "WATER" && playerSelection == "FIRE" || dont == "FIRE" && playerSelection == "WATER") {
                    console.log("Tie!")
                    console.log("Water & Fire are opposites so it gives a tie")
                }

                                else if  (dont == "WATER" && playerSelection == "EARTH") {
                                    let massage = "You lose";
                                    console.log(massage);
                                    
                                    console.log("Water beats Earth");
                                            
                                } 
                                else if  (dont == "EARTH" && playerSelection == "WATER") {
                                    
                                    console.log("You win!");
                                    
                                    console.log("Water beats Earth")
                                        return("win")
                                } 
                                        else if (dont == "EARTH" && playerSelection == "FIRE") {
                                            let massage = "You lose";
                                            console.log(massage);
                                            
                                            console.log("Earth beats Fire")
                                                
                                        }
                                            else if (dont == "FIRE" && playerSelection == "EARTH") {
                                                
                                                console.log("You win!");
                                                
                                                console.log("Earth beats Fire")
                                                    return("win")
                                            }
                                                

                                                else if (dont == "FIRE" && playerSelection == "AIR") {
                                                    let massage = "You lose";
                                                    console.log(massage);
                                                    
                                                    console.log("Fire beats Air")
                                                        
                                                }
                                                    else if (dont == "AIR" && playerSelection == "FIRE") {
                                                        
                                                        console.log("You win!");
                                                        
                                                        console.log("Fire beats Air")
                                                            return("win")
                                                    }
                                                        
                                                        else if (dont == "AIR" && playerSelection == "WATER") {
                                                            let massage = "You lose";
                                                            console.log(massage);
                                                            
                                                            console.log("Air beats Water")
                                                                
                                                        }
                                                            else if (dont == "WATER" && playerSelection == "AIR") {
                                                                
                                                                console.log("You win!");
                                                                
                                                                console.log("Air beats Water")
                                                                    return("win")
                                                            }   
                                                                
                                                                  
                                                                   
                                               
                                                                }
                                                
                                                            
                                                            
        

    
    


    
     } */
    
  function round() {
    let dope = prompt("Pick your element: Water, Earth, Fire or Air");
    let playerSelection = dope.toUpperCase();
    
      
   
       let choice = Math.floor(Math.random() * 4);
        let dont = "element";
       if (choice == 0) {
           dont = "WATER";
       }
        else if (choice == 1) {
           dont = "FIRE";
           }
               else if (choice == 2) {
                   dont = "FIRE";
               }
                   else if (choice == 3) {
                       dont = "EARTH";
                   }

       
                   if (dont == "WATER" && playerSelection == "WATER" || dont == "EARTH" && playerSelection == "EARTH" || dont == "FIRE" && playerSelection == "FIRE" || dont == "AIR" && playerSelection == "AIR") 
                   { console.log("Tie!")
                   console.log("Same element gives a tie")
       
                   
               }
                   else if (dont == "EARTH" && playerSelection == "AIR" || dont == "AIR" && playerSelection == "EARTH") {
                       console.log("Tie!")
                       console.log("Earth & Air are opposites so it gives a tie")
                       
                       
                   }
                         else if (dont == "WATER" && playerSelection == "FIRE" || dont == "FIRE" && playerSelection == "WATER") {
                           console.log("Tie!")
                           console.log("Water & Fire are opposites so it gives a tie")
                           
                       }
       
                                       else if  (dont == "WATER" && playerSelection == "EARTH") {
                                          
                                        console.log("You lose");
                                           
                                           console.log("Water beats Earth");
                                           return("lose")
                                       } 
                                       else if  (dont == "EARTH" && playerSelection == "WATER") {
                                           
                                        console.log("You win!");
                                           
                                           console.log("Water beats Earth")
                                           return("win")
                                          
                                               
                                       } 
                                               else if (dont == "EARTH" && playerSelection == "FIRE") {
                                                  
                                                console.log("You lose");
                                                   
                                                   console.log("Earth beats Fire")
                                                   return("lose")
                                               }
                                                   else if (dont == "FIRE" && playerSelection == "EARTH") {
                                                       
                                                    console.log("You win!");
                                                       
                                                       console.log("Earth beats Fire")
                                                       return("win")
                                                      
                                                           
                                                   }
                                                       
       
                                                       else if (dont == "FIRE" && playerSelection == "AIR") {
                                                          
                                                        console.log("You lose");
                                                           
                                                           console.log("Fire beats Air")
                                                           return("lose")
                                                       }
                                                           else if (dont == "AIR" && playerSelection == "FIRE") {
                                                               
                                                            console.log("You win!");
                                                               
                                                               console.log("Fire beats Air")
                                                               return("win")
                                                              
                                                                   
                                                           }
                                                               
                                                               else if (dont == "AIR" && playerSelection == "WATER") {
                                                                  
                                                                console.log("You lose");
                                                                   
                                                                   console.log("Air beats Water")
                                                                   return("lose")
                                                               }
                                                                   else if (dont == "WATER" && playerSelection == "AIR") {
                                                                       
                                                                    console.log("You win!");
                                                                       
                                                                       console.log("Air beats Water")
                                                                       return("win")
                                                                       
                                                                      
                                                                           
                                                                   }   
                                                                   else {
                                                                    console.log("invalid element. this round will be a tie")
                                                                   }
                                                                         
                                                                          
                                                      
                                                                       }
                                                       
                                                                   
 function WEFA() {
        console.log("Welcome to WEFA!")
    
   
    let pPoints = 0;
    let cPoints = 0;
     let startGame = prompt("Type 1 to start a 5 round game");
        if (startGame == 1) {
    for (i = 0; i < 5; i++) {
        let playerCount = round();
  
            if (playerCount === "win") {
                pPoints++
            }
              else if (playerCount === "lose")
                cPoints++               
    }
    console.log(pPoints)
    console.log(cPoints)
    if (pPoints > cPoints) {
        console.log("Habeis sido victorioso")
    }
        else if (pPoints < cPoints) {
            console.log("Habeis perdido")
        }
            else if (pPoints == cPoints) {
                console.log("TIE!")
            }
} 

            else {
                console.log("Not playing?")
            } 

 }
                   

   

   
   

   

   

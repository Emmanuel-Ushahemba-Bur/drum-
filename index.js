
var numberOfButtons = document.querySelectorAll(".gong").length;

for (var i = 0; i<numberOfButtons; i++){

    document.querySelectorAll(".gong")[i].addEventListener("click", function (){

        var audio= new Audio("sounds/tom-4.mp3");
        audio.play();
    
    

    });
}



 


        
    
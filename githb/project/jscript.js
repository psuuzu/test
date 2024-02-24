//set up initial dot position
let dotx = 30;
let doty = 40;

//set up new dot
const newDot = document.createElement("div");
newDot.className = "turtle";
newDot.style.left = dotx +"%";
newDot.style.top = doty + "%";
document.body.appendChild(newDot);

//changes in x axis of dot will by by an increment of 1% of width
//changes in y axis of dot will be by an increment of 2% of height
//this is to balance things out since computer screens are rectangular (width is much larger than height)
function up(){
    //change y coordinate of dot if dot coordinate is still on screen
    if(doty > 0){
        doty = doty - 2;
    }
    //set up new dot
    const newDot = document.createElement("div");
    newDot.className = "turtle";
    newDot.style.left = dotx +"%";
    newDot.style.top = doty +"%";
    document.body.appendChild(newDot);
}
    
function down(){
     //change y coordinate of dot if dot coordinate is still on screen
     //screen height = 100% and dot height is 2%
     //so the dot cannot go past 98% or it will go off screen
    if(doty < 98){
        doty = doty + 2;
    }
    //set up new dot
    const newDot = document.createElement("div");
    newDot.className = "turtle";
    newDot.style.left = dotx +"%";
    newDot.style.top = doty +"%";
    document.body.appendChild(newDot);
}
function left(){
    //change x coordinate of dot if dot coordinate is still on screen
    if(dotx > 0){
        dotx = dotx - 1;
    }
    //set up new dot
    const newDot = document.createElement("div");
    newDot.className = "turtle";
    newDot.style.left = dotx +"%";
    newDot.style.top = doty +"%";
    document.body.appendChild(newDot);
}
    
function right(){
    //change x coordinate of dot if dot coordinate is still on screen
    //Dot cannot go into column 2 
    //screen width - (column2 width + dot width)
    //100 - (15+2)
    //so the dot cannot go past 83% or it will go into the contents in column 2
    if(dotx < 83){
        dotx = dotx + 1;
    }
    //set up new dot
    const newDot = document.createElement("div");
    newDot.className = "turtle";
    newDot.style.left = dotx +"%";
    newDot.style.top = doty +"%";
    document.body.appendChild(newDot);
}

//define variables that will be used in function 'run'
let userinputfield = 0;
let userinputvalue = 0;

function run(){
    //get user input from <textarea> and retrieve its value
    userinputfield = document.getElementById("userinput");
    userinputvalue = userinput.value.toLowerCase();
    //user is instructed to input using initials (eg. "u" for up)
    //runs functions for every command made
    for (let i=0; i < userinputvalue.length; i++){
        if(userinputvalue[i] == "u"){
            up();
        }
        if(userinputvalue[i] == "d"){
            down();
        }
        if(userinputvalue[i] == "l"){
            left();
        }
        if(userinputvalue[i] == "r"){
            right();
        }
    }
        
}








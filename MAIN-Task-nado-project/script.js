//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton; 
let NextButton; 
let TaskOneButton; 
let TaskTwoButton; 
let TaskThreeButton; 
let BackButton; 
let screen = 0;
var one;
var two;
var three;
var four; 
var five;
var six;  
/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  //background("black");
  background(230,230,250);
  textFont('Rockwell'); 
  textSize(20);
  //fill("white");
  fill("black");
  text(
    "Welcome to Task-nado 🗯:", 
    width / 2,
    height / 2 -130
  );  
  text(
    "The Tumultuous To-Do Storm",
    width / 2,
    height / 2 - 100
  );  
  text("Click Enter to make a list of your six most important tasks!", width / 2 ,
    height / 2 - 70) 
    textSize(70);
    text("☑️🌪", width / 2 ,
    height / 2 +10)
  // Create buttons for all screens  
  textSize(20);
  enterButton = new Sprite(525, 300);  
  NextButton = new Sprite(525, 360);   
}

/* DRAW LOOP REPEATS */
function draw() { 
enterButton.w = 100; 
enterButton.h = 50; 
enterButton.collider = "k"; 
enterButton.color = "white";  
enterButton.text = "Enter 🖤";   
  textSize(15); 

  //Display Next button 
NextButton.w = 100; 
NextButton.h = 50; 
NextButton.collider = "k"; 
NextButton.color = "white";  
NextButton.text = "Next 🖤";   

  
  // Check enter button 
  if(enterButton.mouse.presses()){    
    Task();
    print("pressed Enter"); 
  }    
  
  if(NextButton.mouse.presses()) 
  {  
    print("pressed Next"); 
    showScreen1();  
    screen = 1;
  }    

  // CODE THAT I ADDED AND CHANGED HERE
  
  if (screen === 1) {
    if(TaskOneButton.mouse.presses()) 
    {
    //var TASKone = prompt("Choose a Task" + one + "or" + two);
    var TASKone = prompt("Choose a Task from your list that you believe would take you the most amount of time? ");
    } 
  
   if(TaskTwoButton.mouse.presses()) 
    {
      // var TASKtwo = prompt("Choose a Task " + three + "or" + four);
      var TASKtwo = prompt("Choose a Task from your list that you think is causing you the most anxiety currently? ");
    }
  
    if(TaskThreeButton.mouse.presses()) 
    {
      // var TASKthree = prompt("Choose a Task " + five + "or" + six); 
      var TASKthree = prompt("Choose a Task from your list that will take you the least amount of time to complete? "); 
    }
      fill("black");
      text("Your top 3️⃣ tasks for the day are:", 290, 280); 
      text(TASKone, 290, 310);  
      text(TASKtwo, 290, 340); 
      text(TASKthree, 290, 370);
      
  }
  
}   
//Task function 
 
function Task() 
{
  if(enterButton.mouse.presses()){  
    one = prompt("Enter a task that you need to finish today! "); 
     two = prompt("Enter a task that you need to finish today!"); 
    three = prompt("Enter a task that you need to finish today!"); 
     four = prompt("Enter a task that you need to finish today!");  
     five = prompt("Enter a task that you need to finish today!"); 
    six = prompt("Enter a task that you need to finish today!");  

    fill("black");
    textSize(15) 
    text("Your top 6️⃣ tasks for the day:" , width / 2, height / 2 + 60)
    text(one, width / 2,
    height / 2 + 80);  
    text(two, width / 2,
    height / 2 + 100); 
    text(three, width / 2,
    height / 2 + 120); 
    text(four, width / 2,
    height / 2 + 140); 
    text(five, width / 2,
    height / 2 + 160); 
    text(six, width / 2,
    height / 2 + 180); 
  } 
} 
/* FUNCTIONS TO DISPLAY SCREEN */
function showScreen1() 
{ 
  enterButton.pos = {x:706, y:35};  
  NextButton.pos = {x:700, y:30};  
  //background("black");  
  background(230,230,250);
  fill("black");
  text("This screen will help narrow down your options", width/2, height/2 - 80);  
  text("to your top three activites that you MUST finish first.", width/2, height/2 - 60);  

  // Task one 
  fill("black");
  text("Task One 📌: ", 68, 180 );   
  TaskOneButton = new Sprite(68, 220); 
  TaskOneButton.w = 120; 
  TaskOneButton.h = 50; 
  TaskOneButton.collider = "k"; 
  TaskOneButton.color = "white";  
  TaskOneButton.text = "Decider One";  

  // Task two   
  fill("black");
  text("Task Two 📌: ", 290, 180) 
  TaskTwoButton = new Sprite(290, 220); 
  TaskTwoButton.w = 120; 
  TaskTwoButton.h = 50; 
  TaskTwoButton.collider = "k"; 
  TaskTwoButton.color = "white";  
  TaskTwoButton.text = "Decider Two";  


  // Task three 
  fill("black")
  text("Task Three 📌: ", 500, 180)  
  TaskThreeButton = new Sprite(500, 220); 
  TaskThreeButton.w = 120; 
  TaskThreeButton.h = 50; 
  TaskThreeButton.collider = "k"; 
  TaskThreeButton.color = "white";  
  TaskThreeButton.text = "Decider Three";     

  text("Your top 6️⃣ tasks for the day:" , 300, 30);  
  fill("black");
  //text()
 //add the six tasks from the main page  
  text(one, 140, 55); 
  text(two , 290, 55); 
  text(three, 440, 55); 
  text(four, 140, 80); 
  text(five , 290, 80); 
  text(six, 440, 80);



  
} 



var readLineSync = require('readline-sync');

var score = 0;

function play(question,answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer === answer){
    console.log("You are right");
    score = score + 1;
  }else{
    console.log("You are wrong")
     score = score - 1;
  }

  console.log("current score,",score);
  console.log("-----------");
}


var questions = [{
  question: "Who is the Strongest Avenger? ",
  answer: "Captain America"
},
{
  question: "What is the nickname of Thor? ",
  answer: "Point Break"
},
{
  question: "Who is the Smartest Avenger? ",
  answer: "Tony Stark"
}
];

for(var i=0 ; i<questions.length; i++){
 var currentQuestion = questions[i];

 play(currentQuestion.question,currentQuestion.answer);

}
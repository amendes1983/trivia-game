$(document).ready(function(){
//variables
  var score = 0;
  var correctAnswers = 0;
  var incorrectAnswers= 0;
  var triviaQuestions = [
//Question 1
  {
    'answer': 'b',
    'question': 'Who created Dungeons and Dragons?',
    'options': ['Bill Gates', 'Gary Gygax', 'Monty Cook']

  },

//Question 2
  {
    'answer': 'a',
    'question': 'What is the most common die roll in D&D?',
    'options': ['d20', 'd6', 'd100']

  },

//Question 3
  {
    'answer': 'b',
    'question': 'What was the original publisher of D&D?',
    'options': ['Parker Bros.', 'TSR', 'MGM']

  },

//Question 4
{
  'answer': 'a',
  'question': 'What is the most popular edition of D&D?',
  'options': ['3rd', '1st', '4th']

},

//Question 5
{
  'answer': 'b',
  'question': 'What game company produced and made a success of home brewed 3rd edition rules?',
  'options': ['Wizards of the Coast', 'Paizo', 'Blizzard']

},

//Question 6
{
  'answer': 'c',
  'question': 'What is the name of the game system from question 5?',
  'options': ['Numenera', 'Dread', 'Pathfinder']

},

//Question 7
{
  'answer': 'c',
  'question': 'What is the leader of a gamming group called?',
  'options': ['Dungeoneer', 'Architect', 'Dungeon Master']

},

//Question 8
{
  'answer': 'b',
  'question': 'What is the most common place for a party to start their adventure?'


},

//Question 9
{
  'answer': 'b',
  'question': 'What is the most iconic adverture setiing in D&D?',
  'options': ['Ravenloft', 'The Forgotten Realms', 'Grey Hawk']

},

//Question 10
{
  'answer': 'b',
  'question': 'Who is the most iconic character from The Forgotten Realms?',
  'options': ['Gandalf', 'Drzzt', 'Artemis']

}

];
  //functions in app
  $("#start_button").click(function(){
  timer = setInterval(timer, 60000);
    });
    function timer(){
  timer--;

   $("#timer").html("<h3>Time remaining: " + timer + " secs</h3>");
 }

  for (var i = 0; i < triviaQuestions.length; i++) {
    console.log(triviaQuestions);
//    var random = Math.floor(Math.random() * 1) + 12;
//   scoreOptions = random + scoreOptions;
 //};
// console.log(scoreOptions); Couldn't get this to work :(

    var triviaQuestions = $("#trivia_questions");

    triviaQuestions.addClass("triviaQuestions");


    triviaQuestions.attr("triviaQuestions", correctAnswers[i]);

    $("#triviaQuestions").append();
  };

  $("#triviaQuestions").on("click", function() {




    score += correctAnsewers;
    console.log(correctAnswers);
    ;


    if (score === radioButton.values())  {
      correctAnsewers++
      consloe.log(correctAnswers);
    }

    else  {
      incorrectAnswers++;


    }
    //Update HTML fo user
$('#Wins').html('<h3>Score:' + correctAnswers +  '</h3>');
$('#losses').html('<h3>Wins:' + incorrectAnswers +  '</h3>');

  });
});

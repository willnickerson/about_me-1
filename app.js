'use strict';

function petQuestions() {
  var beginQuestionAnswer = prompt('Hello! You look like an animal lover. Do you have any pets?');

  if(beginQuestionAnswer.toLowerCase() === 'yes' || beginQuestionAnswer.toLowerCase() === 'y') {
    console.log('The user has a pet.');
    var dog = prompt('That\'s great! Is it a dog?');

    if(dog.toLowerCase() === 'yes' || dog.toLowerCase() === 'y') {
      console.log('The user\'s pet is a dog.');
      var dogBark = prompt('Dogs tend to be loud. Does your dog bark?');

      if (dogBark.toLowerCase() === 'yes' || dogBark.toLowerCase() === 'y') {
        console.log('Looks like their dog barks.');
        var yesDogBark = prompt('Oh, no! That\'s no good, now is it? Does your dog like treats?');

        if (yesDogBark.toLowerCase() === 'yes' || yesDogBark.toLowerCase() === 'y') {
          console.log('The dog also likes treats.');
          alert('Good, train that dog not to bark! It\'s all your fault, you know.');
        } else {
          console.log('The dog does not like treats.');
          alert('Well, I have no idea what to do then. Good luck.');
        };
      } else {
        console.log('Looks like the dog is pretty well-behaved.');
        alert('Sounds like you have a well-behaved dog! Congratulations!');
      };
    } else {
      console.log('Hmm...The user\'s pet is not a dog.');
      var notDog = prompt('Oh, okay. It must be a fish, right?');

      if (notDog.toLowerCase() === 'yes' || notDog.toLowerCase() === 'y') {
        console.log('It\'s a fish.');
        var yesFish = prompt('Is it a big fish?');

        if (yesFish.toLowerCase() === 'yes' || yesFish.toLowerCase() === 'y') {
          console.log('Wow. It\'s a big fish!');
          alert('You should sell it to an aquarium...or the ocean');
        } else {
          console.log('The have a small fish.');
          alert('Name it "Nemo."');
        };
      } else {
        console.log('It\'s not a fish or dog.');
        var noFish = prompt('Is it a rodent?');

        if (noFish.toLowerCase() === 'yes' || noFish.toLowerCase() === 'y') {
          console.log('Gross. They have a pet rodent.');
          alert('Yuck! I hate rodents. Take your filthy rodent hands and get out of here!');
        } else {
          console.log('Their pet is neither a dog, fish or rodent.');
          var catQuestion = prompt('Oh! Perhaps you have a cat too?');

          if (catQuestion.toLowerCase() === 'yes' || catQuestion.toLowerCase() === 'y') {
            console.log('The user has a cat! They are cool.');
            alert('That\'s great! Cat\'s are amazing. You seem like a cool person because you have one.');
          } else {
            console.log('They don\'t have a cat either. They are no fun.');
            alert('Well, I really don\'t want to know what kind of pet you have. Probably something disgusting. Goodbye.');
          }
        }
      };
    };
  } else {
    console.log('The user does not have any pets.');
    var noPet = prompt('You must not experience joy or happiness. Am I correct?');

    if (noPet.toLowerCase() === 'yes' || noPet.toLowerCase() === 'y') {
      console.log('The user\'s life sucks and I do not envy them.');
      var noJoy = prompt('I\'m sorry to hear that. You could try eating your feelings. Have you tried that?');

      if (noJoy.toLowerCase() === 'yes' || noJoy.toLowerCase() === 'y') {
        console.log('The user is unhappy and has tried eating their feelings.');
        var yesEatFeelings = prompt('Did it work?');

        if (yesEatFeelings.toLowerCase() === 'yes' || yesEatFeelings.toLowerCase() === 'y') {
          console.log('They eat to feel joy. I see a gastric bypass in their future.');
          alert('I\'m glad. Good luck with your life.');
        } else {
          console.log('They tried to eat their feelings, to no avail.');
          var noEatFeelings = prompt('Have you tried smoking cigarettes?');

          if (noEatFeelings.toLowerCase() === 'yes' || noEatFeelings.toLowerCase() === 'y') {
            console.log('The user smokes, so I hope that helps them, considering they have no pets.');
            alert('Perhaps stick with that and see what happens.');
          } else {
            console.log('The user has no pets, is unhappy, but has yet to take up smoking.');
            alert('Try smoking and see how you feel. Good luck.');
          }
        }
      } else {
        console.log('The user hasn\'t tried eating their feelings.');
        var doesntEatFeelings = prompt('Do you like Taco Bell?');
        if (doesntEatFeelings.toLowerCase() === 'yes' || doesntEatFeelings.toLowerCase() === 'y') {
          console.log('The user doesn\'t have pets and is unhappy, but hasn\'t tried eating their feelings. They do, however, like Taco Bell.');
          alert('You should spend $20 at Taco Bell, eat your feelings and see what happens from there.');
        } else {
          console.log('They could eat their feelings, but don\'t like Taco Bell, so I really don\'t know what to say.');
          alert('Well, there\'s no hope for you now.');
        }
      }
    } else {
      console.log('The user does not have any pets, but somehow experiences joy and happiness. Strange.');
      var mustDoDrugs = prompt('You must be doing drugs. Am I right?');

      if (mustDoDrugs.toLowerCase() === 'yes' || mustDoDrugs.toLowerCase() === 'y') {
        console.log('Hmmm...they find happiness in drugs. That\'s not healthy.');
        alert('I figured. I hope you find the help you need.');
      } else {
        console.log('The user has no pets, is drug-free and somehow happy. I have no idea how that makes any sense.');
        alert('I\'m glad to hear it. Do some soul searching perhaps?');
      }
    }
  }
}

petQuestions();

var correctCount = 0;

var randomNum = Math.floor(Math.random() * 10) + 1;
console.log('the number is:', randomNum);

alert('Let\'s move on. Let\'s play a game.');

var userName = prompt('First, I\'ll need your name.');

for (var i = 0; i < 4; i++) {
  var userGuess = prompt( 'Guess a number from 1-10' );
  userGuess = Number(userGuess);
  console.log('User guess is:', userGuess);

  if (randomNum === userGuess) {
    alert('You got it! Good job, ' + userName + '.');
    console.log('The user guessed correctly. Their total score on this game so far is 1.');
    i = 4;
    correctCount++;
  } else if (randomNum > userGuess) {
    alert('Too low.');
    console.log('The user\'s guess was too low.');
  } else {
    alert('Too high.');
    console.log('The user\'s guess was too high.');
  };
}

var pastResidence = 'Bellingham' || 'Pullman' || 'Honolulu' || 'Hawaii' || 'Naselle' || 'Chinook';
for (i = 0; i < 6; i++) {
  pastResidence = prompt('Where have I lived, besides Vancouver, WA?');
  if (pastResidence.toLowerCase() === 'bellingham' || 'pullman' || 'honolulu' || 'hawaii' || 'naselle' || 'chinook') {
    alert('Correct! Great job, ' + userName + '.');
    i = 6;
    correctCount++;
    console.log('The user guessed correctly. Their total score so far is ' + correctCount);
  } else {
    alert('Sorry, ' + userName + ', clearly you don\'t know me at all!');
    console.log('The user guessed: ' + pastResidence + '. This is NOT one of the correct answers.');
  }
};
alert('I\'ve lived in Bellingham, Pullman, Honolulu, Hawaii, Naselle, and Chinook.');

alert('Total correct: ' + correctCount + ' out of 2. Great job, ' + userName);

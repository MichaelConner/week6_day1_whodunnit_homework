// Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The code above will output 'The murderer is Mrs White'. Running the changeMurderer function automatically establishes and runs the plotTwist function and the plotTwist function sets the murderer variable to be 'Mrs White'. The verdict is then drawn from the declareMurderer function which looks to this newly changed variable. 

// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// the code above will output 'The murderer is Professor Plum'

// the if conditional changes the value of the murderer variable, but this does not hold outside of the if. When the declareMurderer function is called it picks up the variable value from the global declaration on line 3

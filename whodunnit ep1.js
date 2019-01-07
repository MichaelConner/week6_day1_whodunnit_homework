// Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


// Expecting outcome to be 'The Murderer is Miss Scarlet' - no funny business is going on, just a straight interrogation of the 'murderer' key's value

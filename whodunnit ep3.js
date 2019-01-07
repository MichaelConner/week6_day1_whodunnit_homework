// Episode 3


let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);


// The first verdict will be 'The murderer is Mrs Peacock' as the murderer variable is set to Mrs Peacock within the function and the function is being called for this verdict.

// The second verdict will be 'The murderer is 'Professor Plum' as it is refering to the murderer variable as it stands globally (or outwith any function) - this is set to Professor Plum, per line 4

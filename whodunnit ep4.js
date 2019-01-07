// Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


// running the above will give:

//'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard'

// and then:
// 'Suspect three is Mrs Peacock'

// The first line is drawn from the declareAllSuspects function. In this function the variable suspectThree is set to Colonel Mustard within the function, hence that being returned as the value for suspectThree. This does not carry over outside of the function though, so the second line still refers to the previous (global) declaration that suspectThree is Mrs Peacock.

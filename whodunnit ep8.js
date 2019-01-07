// Episode 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// the code above will output 'The weapon is Candle Stick'

// i) the changeScenario function changes the 'room' value to 'Dining Room' then executes plotTwist

// ii) plotTwist changes the 'murderer' to 'Colonel Mustard' if the room value is the same as the value passed in - in this case it is as we have just changed the value to 'Dining Room' in the step before and this is also the value passed in

// iii) unexpectedOutcome changes the 'weapon' to 'Candle Stick' if the murderer value is the same as the value passed in - in this case it is as we have just changed the value to 'Colonel Mustard' in the step before and this is also the value passed in

// iv) we have therefore changed the 'weapon' key's value in the scenario constant to 'Candle Stick'. Calling the declareWeapon function outputs this value.

// Episode 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

//the above code will return 'The weapon is the Revolver' - the const constraint doesn't hold for the individual particulars of the object, so the weapon can be changed from 'Candle Stick' to 'Revolver' and then output as such

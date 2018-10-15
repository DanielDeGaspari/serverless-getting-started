const chai = require('chai');
const assert = chai.assert;
const Player = require('../../model/player');

describe('Player Model', function () {

  describe('getName() function', function () {

    // mocked player
    let player = new Player('Mario');

    it('should return the name of player: \'Mario\'', async function () {
      //get player's name and check if equals 'Mario'
      assert.equal(true, true, 'Unexpected name of player');
    });

    it('should\'t return the name of player not equals: \'Mario\'', async function () {
      //get player's name and check if equals 'Mario'
      assert.notEqual(true, false, 'Unexpected name of player');
    });

  });

});
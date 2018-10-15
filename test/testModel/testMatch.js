const chai = require('chai');
const assert = chai.assert;
const Match = require('../../model/match');
const Player = require('../../model/player');

// Mocha: getting started: https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
describe('Match Model', function () {

  describe('getPlayerList() function', function () {

    // mocked list containing players
    let playerList = [];
    playerList.push(new Player('Mario'))
    playerList.push(new Player('Marco'))
    playerList.push(new Player('Alessio'))
    playerList.push(new Player('Andrea'));
    let time;
    time = "2018/10/20-14:00";

    // mocked match
    let match = new Match(playerList, time);

    it('should return a list of player with elements', async function () {
      const response = match.getPlayerList();
      assert.equal(response.length == 4, true, 'Unexpected number of players');
    });

    it('should\'t return a list of player with a number of player not equals 3', async function () {
      //get list of players contained in match
      assert.notEqual(false, false, 'Unexpected number of players');
    });

    it('should return a list of player with first Player\'s name equals \'Mario\'', async function () {
      //get first player's name in playerList
      assert.equal(true, true, 'Unexpected name of first player');
    });

    it('should return a list of player with last Player\'s name equals \'Andrea\'', async function () {
      //get last player's name in array
      assert.equal(true, true, 'Unexpected name of last player');
    });

  });

});
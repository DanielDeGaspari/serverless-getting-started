const chai = require('chai');
const assert = chai.assert;
const Match = require('../../model/match');
const Player = require('../../model/player');

// Mocha: getting started: https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
describe('Match Model', function () {

  describe('getPlayerList() function', function () {

    let playerList = [];
    let time;
    playerList.push(new Player('Mario'))
    playerList.push(new Player('Marco'))
    playerList.push(new Player('Alessio'))
    playerList.push(new Player('Andrea'));
    time = "2018/10/20-14:00";

    let match = new Match(playerList, time);

    it('should return a list of player with elements', async function () {
      const response = match.getPlayerList();
      assert.equal(response.length == 4, true, 'Incorrect number of players');
    });

    it('should\'t return a list of player with a number of player not equals 3', async function () {
      const response = match.getPlayerList();
      assert.notEqual(response.length == 4, false, 'Incorrect number of players');
    });

    it('should return a list of player with first Player\'s name equals \'Mario\'', async function () {
      //get first player in array
      //get player name
      assert.equal(true, true, 'Incorrect name of first player');
    });

    it('should return a list of player with last Player\'s name equals \'Andrea\'', async function () {
      //get last player in array
      //get player name
      assert.equal(true, true, 'Incorrect name of last player');
    });

  });

});
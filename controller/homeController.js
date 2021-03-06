'use strict';

const handlebars = require('handlebars');
const homeView = require('../view/homeView');
const axios = require('axios');
const fs = require('fs');

const Player = require('../model/player');
const Match = require('../model/match');

module.exports.home = async (event, context) => {

  let html = '';

  try {

    // Data retrieved by 3b-service
    let data = await getData(event);

    // HTML template
    const view = fs.readFileSync('view/homeView.hbs').toString('utf-8');

    // HTML ready
    html = getHTML(data, view);
  }
  catch (error) {
    console.log('Cannot generate html --> ' + error);
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: 'No data to show!',
  };

}

// Retrieve data from 3b service
async function getData(event) {

  let responseArray = await retrieveResponse();
  let matchList = getMatchList(responseArray[3].data || {});

  let result = {
    title: responseArray[1].data.title || {},
    containerClass: responseArray[0].data.navbarColor || {},
    bodyClass: responseArray[0].data.background || {},
    navBarElements: responseArray[1].data.navbar || {},
    featureflags: responseArray[2].data || {},
    match: matchList || {}, 
  };

  //console.log(result);
  return result;
}



// Retrieve responde array
async function retrieveResponse() {

  let url = getBaseURL();

  // URL for style configuration 
  let urlStyle = url + '/config/style';
  // URL for page contents
  let urlContent = url + '/config/content';
  // URL for feature-flags configuration
  let urlFeatures = url + '/config/featureflags';
  // URL for matches content
  let urlData = url + '/data';


  // async - await JavaScript: https://javascript.info/async-await
  const retrieveData = async () => {
    //console.log("Start loading configurations");

    /** Promise based HTTP client for the browser and node.js 
     * More info: https://github.com/axios/axios
    */
    return axios.all([
      /**
       * Insert here calls to getDataFromUrl() to retrieve promise and return data from a specific URL
       * return await axios.all([
       *   getDataFromUrl(url1), 
       *   getDataFromUrl(url2)
       */
      ]);
  };

  let responseArray = await retrieveData();
  //console.log("Configurations loaded");
  return responseArray;
}



/** -------------
 * 
 * Insert here function to retrieve data from a specific URL
 * 
 * Example code: 
 * function getDataFromUrl(myUrl) {
 *     let result = axios.get(myUrl);
 *     return result;
 * }
 * 
 * The above function will return a promise
 * 
 *///------------
function getDataFromUrl(url) {
}



// Boilerplate for rendering HTML with Handlebar from data and template
function getHTML(data, view) {
  let template = handlebars.compile(view, {
    strict: true
  });
  return template(data)
}

// Return URL of 3b-service
/**
 * 
 * Complete this method with the correct url API 
 * 
 */
function getBaseURL () {
  let url = 'PUT HERE YOUR API URL';
  if (process.env.IS_OFFLINE) {
    url = 'PUT HERE YOUR API URL';
  }
  return url;
}

// return an array of match in matchList
function getMatchList(matchList) {
  return matchList
    .map((element) => {
      const playerList = getPlayerList(element);
      return new Match(playerList, element.timestamp);
    });
}

// return an array Player in currentMatch
function getPlayerList(currentMatch) {
  return currentMatch.players
    .map((element) => {
      return new Player(element);
    }
  );
}
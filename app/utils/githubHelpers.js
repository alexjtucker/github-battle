var axios = require('axios');

var id = "alexjtucker";//"YOUR_CLIENT_ID";
var sec = "1459274601";//"YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username)//+ param) // if rate-limited
};

function getRepos (username) {
  // fetch user repos
}

function getTotalStars (stars) {
  // calculate all the stars for that user
}

function getPlayersData (player) {
  // get repos
  // getTotalStars
  // return obj w data
}

function calculateScores (players) {
  // return an array, after doing some fancy algorithms to determine winner
}

var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo', err)
    })
  },
  battle: function (players) {
    return 
  }
};

module.exports = helpers;
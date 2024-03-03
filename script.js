const team = {
    _players: [
      {firstName:'Princess', lastName: 'Dada', age: 39},
      {firstName:'Justin', lastName: 'Bieber', age: 43},
      {firstName:'John', lastName: 'Wick', age: 22},
    ],
    _games: [
      {opponent: 'Redbull', teamPoints:29, opponentPoints: 28},
      {opponent: 'ManU', teamPoints:31, opponentPoints: 22},
      {opponent: 'Lakers', teamPoints:41, opponentPoints: 45}
    ],
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player)
  
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game)
    }
  
  }
  team.addGame('Titans', 100, 98)
  team.addPlayer('Bugs', 'Bunny', 76)
  console.log(team)
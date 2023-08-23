//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(name,age,team,trophies){
    var managerDetails =[name,age,team,trophies];
    return managerDetails
};

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(f){
  if (f.length===0){
    return null;
  }
  else{
    var formationDetails = {
      defender : f[0],
      midfield : f[1],
      forward : f[2]
    }
    return formationDetails;
  }
};

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
  var yearFilter = players.filter((player)=>{
    return player.debut==year;
  });
  return yearFilter;
};

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  var positionFilter = players.filter((player) =>{
    return player.position===position;
  });
  return positionFilter;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName){
  return players.filter(player =>
    player.awards.some(award => award.name === awardName)
  );
};

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName,noOfTimes){
  return players.filter((p) =>{
    var awardCount = p.awards.filter(award => award.name===awardName).length;
    return awardCount==noOfTimes;
  });
};

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName,country){
  return players.filter(player => {
    var hasAward = player.awards.some(award => award.name===awardName);
    return hasAward && player.country===country;
  });
};

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age){
  return players.filter(player =>{
    var awardsCount = player.awards.length;
    return(awardsCount>=noOfAwards && player.team===team && player.age<age);
  });
};

//Progression 9 - Sort players in descending order of their age

function SortByAge(){
  return players.slice().sort((a,b)=>{
    if (a.age<b.age){
      return 1;
    }
    else if(b.age<a.age){
      return -1;
    }
    else{
      return 0;
    }
  });
};

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team){
  var teamFilter = players.filter(p =>{
    return p.team === team;
  })
  return teamFilter.slice().sort((a,b) => b.awards.length - a.awards.length)
};

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function SortByNamexAwardxTimes(awardName,noOfTimes,country){
  var matchingPlayers = players.filter(p => {
    var awardsCount = p.awards.filter(award => award.name===awardName).length;
    return awardsCount===noOfTimes && p.country===country;
  })
  return matchingPlayers.slice().sort((a,b) => b.name - a.name);
};

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age){
  var oldPlayers = players.filter(p => p.age>age);
  var sortedPlayers =[];
  for (let i=0; i<oldPlayers.length; i++){
    var pl = oldPlayers[i];
    var sortedAwards = pl.awards.slice().sort((a,b) => b.year - a.year)
    sortedPlayers.push({...p,awards:sortedAwards});
  }
  return sortedPlayers.sort((a,b) => {
    if (a.name > b.name){
      return 1;
    }
    else if (b.name > a.name){
      return -1;
    }
    else{
      return 0;
    }
  });
};

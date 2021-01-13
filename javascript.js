/*
START PAGE
*/

var teams = {
    "New York": {
        "mascot": "Pants"
    },
    "Los Angeles": {
        "mascot": "Rivers"
    },
    "Chicago": {
        "mascot": "Cows"
    },
    "Houston": {
        "mascot": "Shuttles"
    },
    "Phoenix": {
        "mascot": "Moons"
    },
    "Philadelphia": {
        "mascot": "Revolutions"
    },
    "San Antonio": {
        "mascot": "Boots"
    },
    "San Diego": {
        "mascot": "Anonymous"
    }
};

function populateTeamSelect(teams){
    var options = document.getElementById("select-user-team");
    for (var team in teams) {
        var option = document.createElement("option");
        option.value = team;
        option.innerHTML = team + " " + teams[team]["mascot"];
        options.appendChild(option);
    }
}

populateTeamSelect(teams); // run ASAP



/*
BACK END
*/

var settings = {
    "roster-size": 10,
    "num-recruits": Object.keys(teams).length * 5,
    "num-games": 14,
    "commit-interest-req": 100,
    "user-weekly-recruiting-time": 60,
}

var recruitingOptions = {
    "Email": {
        "interest-boost": 5,
        "time": 10
    },
    "Call": {
        "interest-boost": 20,
        "time": 30
    }
}

// will use gameData throughout game instance as parent object
var gameData = {
    "teams": teams,
    "current-week": 1,
    "current-season": 2020,
    "settings": settings,
    "recruiting-options": recruitingOptions,
    "user-current-week-recruiting-time": settings["user-weekly-recruiting-time"],
    "recruit-id-iterator": 0,
    "name-generator-list": []
};

function nameAPI(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data);
            gameData["name-generator-list"].concat(data);
        } else if (this.readyState == 4) {
            console.log(this.responseText);
            gameData["name-generator-list"].push("First Last");
        };
    }

    xhttp.open("GET", "http://names.drycodes.com/100?nameOptions=boy_names?separator=space", true);
    //xhttp.send();
}

function nameGenerator(){
    /*
    if (gameData["name-generator-list"].length == 0) {
        nameAPI(); // generate new names
        nameGenerator(); // then try this again - should always go to else
    } else {
        var name = gameData["name-generator-list"][gameData["name-generator-list"].length-1];
        gameData["name-generator-list"].pop();
        return name;
    };
    */
   return "*name*"
}

// generate one Player object instance
function generatePlayer(position=null){
    var name = nameGenerator();
    var year = Math.ceil(Math.random() * 4); // 1 thru 4
    if (position === null) {
        position = Math.ceil(Math.random() * 5); // 1 thru 5
    };
    var rating = Math.ceil(Math.random() * 10); // 1 thru 10

    var player = {
        "name": name,
        "year": year,
        "position": position,
        "rating": rating
    };
    return player;
}

// generate Roster for each team. Roster is array of Player objects
function generateStartingRosters(){
    for (team in gameData["teams"]) {
        var roster = [];
        for (i = 0; i < gameData["settings"]["roster-size"]; i++) {
            // ensure each team has one player at each position, then randomize player positions
            if (i < 5) {
                var position = i+1;
            } else {
                var position = null;
            };
            roster[i] = generatePlayer(position);
        }
        gameData["teams"][team]["roster"] = roster;
    }
}

// generate one Recruit object instance
function generateRecruit(){
    var name = nameGenerator();
    var position = Math.ceil(Math.random() * 5); // 1 thru 5
    var rating = Math.ceil(Math.random() * 8); // 1 thru 8

    var interest = {};
    for (team in gameData["teams"]) {
        interest[team] = Math.floor(Math.random() * 30);
    }

    var recruitId = gameData["recruit-id-iterator"];
    gameData["recruit-id-iterator"] += 1;

    var recruit = {
        "name": name,
        "year": 0,
        "position": position,
        "rating": rating,
        "interest": interest,
        "commit": false
    };

    gameData["recruiting-class"][recruitId] = recruit;
}

// generate recruiting class
function generateRecruitingClass(){
    gameData["recruiting-class"] = {}
    for (i = 0; i < gameData["settings"]["num-recruits"]; i++) {
        generateRecruit(); // edits gameData in place
    }
}

function generateStandings(){
    gameData["standings"] = {};
    for (team in gameData["teams"]) {
        gameData["standings"][team] = {
            "games-played": 0,
            "wins": 0,
            "losses": 0,
            "points-for": 0,
            "points-against": 0
        }
    }
}

// generate one Schedule object instance
function generateSchedule(){
    // gameData["settings"]["num-games"];

    // sample schedule:
    var schedule = {
        1: [{"home-team": "New York", "away-team": "Los Angeles"}, {"home-team": "Chicago", "away-team": "Houston"},
        {"home-team": "Phoenix", "away-team": "Philadelphia"}, {"home-team": "San Antonio", "away-team": "San Diego"}],
        2: [{"home-team": "New York", "away-team": "San Diego"}, {"home-team": "Chicago", "away-team": "Los Angeles"},
        {"home-team": "Phoenix", "away-team": "Houston"}, {"home-team": "San Antonio", "away-team": "Philadelphia"}],
        3: [{"home-team": "Philadelphia", "away-team": "New York"}, {"home-team": "San Diego", "away-team": "Chicago"},
        {"home-team": "Los Angeles", "away-team": "Phoenix"}, {"home-team": "Houston", "away-team": "San Antonio"}],
        4: [{"home-team": "Houston", "away-team": "New York"}, {"home-team": "Philadelphia", "away-team": "Chicago"},
        {"home-team": "San Diego", "away-team": "Phoenix"}, {"home-team": "Los Angeles", "away-team": "San Antonio"}],
        5: [{"home-team": "New York", "away-team": "Chicago"}, {"home-team": "Los Angeles", "away-team": "Houston"},
        {"home-team": "Phoenix", "away-team": "San Antonio"}, {"home-team": "Philadelphia", "away-team": "San Diego"}],
        6: [{"home-team": "New York", "away-team": "San Antonio"}, {"home-team": "Los Angeles", "away-team": "San Diego"},
        {"home-team": "Phoenix", "away-team": "Chicago"}, {"home-team": "Philadelphia", "away-team": "Houston"}],
        7: [{"home-team": "Chicago", "away-team": "San Antonio"}, {"home-team": "Houston", "away-team": "San Diego"},
        {"home-team": "Phoenix", "away-team": "New York"}, {"home-team": "Philadelphia", "away-team": "Los Angeles"}],
        8: [{"away-team": "New York", "home-team": "Los Angeles"}, {"away-team": "Chicago", "home-team": "Houston"},
        {"away-team": "Phoenix", "home-team": "Philadelphia"}, {"away-team": "San Antonio", "home-team": "San Diego"}],
        9: [{"away-team": "New York", "home-team": "San Diego"}, {"away-team": "Chicago", "home-team": "Los Angeles"},
        {"away-team": "Phoenix", "home-team": "Houston"}, {"away-team": "San Antonio", "home-team": "Philadelphia"}],
        10: [{"away-team": "Philadelphia", "home-team": "New York"}, {"away-team": "San Diego", "home-team": "Chicago"},
        {"away-team": "Los Angeles", "home-team": "Phoenix"}, {"away-team": "Houston", "home-team": "San Antonio"}],
        11: [{"away-team": "Houston", "home-team": "New York"}, {"away-team": "Philadelphia", "home-team": "Chicago"},
        {"away-team": "San Diego", "home-team": "Phoenix"}, {"away-team": "Los Angeles", "home-team": "San Antonio"}],
        12: [{"away-team": "New York", "home-team": "Chicago"}, {"away-team": "Los Angeles", "home-team": "Houston"},
        {"away-team": "Phoenix", "home-team": "San Antonio"}, {"away-team": "Philadelphia", "home-team": "San Diego"}],
        13: [{"away-team": "New York", "home-team": "San Antonio"}, {"away-team": "Los Angeles", "home-team": "San Diego"},
        {"away-team": "Phoenix", "home-team": "Chicago"}, {"away-team": "Philadelphia", "home-team": "Houston"}],
        14: [{"away-team": "Chicago", "home-team": "San Antonio"}, {"away-team": "Houston", "home-team": "San Diego"},
        {"away-team": "Phoenix", "home-team": "New York"}, {"away-team": "Philadelphia", "home-team": "Los Angeles"}]
    };
    gameData["schedule"] = schedule;
}

function initializeGame(){
    // initialize game instance
    var name = document.getElementById("select-user-name").value;
    var team = document.getElementById("select-user-team").value;
    gameData["user-name"] = name;
    gameData["user-team"] = team;

    // add loading screen if this is time-consuming
    generateStartingRosters(); // updates gameData in place
    generateRecruitingClass(); // updates gameData in place
    generateStandings(); // updates gameData in place
    generateSchedule(gameData["settings"]["num-games"]); // updates gameData in place
    console.log(gameData);

    // change display
    var startScreen = document.getElementById("start-screen");
    startScreen.classList.add("hide");
    var gameBox = document.getElementById("game-box");
    gameBox.classList.remove("hide");
    updateActionButton();
    loadHomePage();

    console.log("Game started!");
}

// simulate a match between two teams
function simulateMatch(homeTeam, awayTeam){
    var winningTeam = homeTeam;
    var losingTeam = awayTeam;

    var winningScore = 80;
    var losingScore = 70;
    
    var result = {
        "winning-team": winningTeam,
        "winning-score": winningScore,
        "losing-team": losingTeam,
        "losing-score": losingScore
    };
    return result;
}

// update standings based on single match result
function updateStandings(matchResult){
    var winningTeam = matchResult["winning-team"];
    var losingTeam = matchResult["losing-team"];
    var winningScore = matchResult["winning-score"];
    var losingScore = matchResult["losing-score"];

    gameData["standings"][winningTeam]["games-played"] += 1;
    gameData["standings"][winningTeam]["wins"] += 1;
    gameData["standings"][winningTeam]["points-for"] += winningScore;
    gameData["standings"][winningTeam]["points-against"] += losingScore;

    gameData["standings"][losingTeam]["games-played"] += 1;
    gameData["standings"][losingTeam]["losses"] += 1;
    gameData["standings"][losingTeam]["points-for"] += losingScore;
    gameData["standings"][losingTeam]["points-against"] += winningScore;
}

// advance from one week to the next within a season
function advanceWeek(currentWeek){
    console.log("Advancing week...");
    var news = "Simulating week " + gameData["current-week"] + "."
    updateNewsFeed(news);

    // simulate all matches
    var matches = gameData["schedule"][currentWeek];
    for (match in matches) {
        var matchResult = simulateMatch(matches[match]["home-team"], matches[match]["away-team"]);
        console.log(matchResult);
        var news = matchResult["winning-team"] + " beats " + matchResult["losing-team"] + " " + matchResult["winning-score"] + "-" + matchResult["losing-score"] + ".";
        updateNewsFeed(news);
        updateStandings(matchResult);
    }

    // simulate non-user controlled teams recruiting
    // !!!

    gameData["current-week"] += 1;
    gameData["user-current-week-recruiting-time"] = gameData["settings"]["user-weekly-recruiting-time"];

    var news = "Advancing to week " + gameData["current-week"] + "."
    updateNewsFeed(news);
}

function resetStandings(){
    for (team in gameData["standings"]) {
        gameData["standings"][team]["games-played"] = 0;
        gameData["standings"][team]["wins"] = 0;
        gameData["standings"][team]["losses"] = 0;
        gameData["standings"][team]["points-for"] = 0;
        gameData["standings"][team]["points-against"] = 0;
    }
}

function addRecruitsToRosters(){
    // age recruits
    for (recruit in gameData["recruiting-class"]) {
        gameData["recruiting-class"][recruit]["year"] += 1;
    }

    // add committed recruits
    for (recruit in gameData["recruiting-class"]) {
        if (gameData["recruiting-class"][recruit]["commit"] === true) {
            var team = gameData["recruiting-class"][recruit]["commit-to"];
            gameData["teams"][team]["roster"].push(gameData["recruiting-class"][recruit]);
            delete gameData["recruiting-class"][recruit];
        };
    }

    // fill incomplete rosters with remaining recruits randomly
    for (team in gameData["teams"]) {
        console.log(team);
        var numEmptyRosterSpots = gameData["settings"]["roster-size"] - gameData["teams"][team]["roster"].length;
        console.log(numEmptyRosterSpots);
        for (i = 0; i < numEmptyRosterSpots; i++) {
            var recruitsArray = Object.keys(gameData["recruiting-class"]); // need to recreate array everytime a recruit is deleted from it
            var index = Math.floor(Math.random() * recruitsArray.length);
            gameData["teams"][team]["roster"].push(gameData["recruiting-class"][recruitsArray[index]]);
            console.log(gameData["recruiting-class"][recruitsArray[index]]);
            recruitsArray.splice(index,1);
            delete gameData["recruiting-class"][recruitsArray[index]];
        }
    }
}

// advanced from one season to the next within the game
function advanceSeason(){
    console.log("Advancing season...");
    // age and graduate players
    for (team in gameData["teams"]) {
        for (i = gameData["teams"][team]["roster"].length-1; i >= 0; i--) {
            if (gameData["teams"][team]["roster"][i]["year"] == 4) {
                gameData["teams"][team]["roster"].splice(i,1);
            } else {
                gameData["teams"][team]["roster"][i]["year"] += 1;
            };
        }
    }

    // add recruits to rosters
    addRecruitsToRosters();  // updates gameData in place

    // progress player ratings
    // progressPlayers();  // updates gameData in place

    // create new recruiting class
    generateRecruitingClass();  // updates gameData in place

    // create new schedule
    generateSchedule(); // updates gameData in place

    // reset standings [and stats once implemented]
    resetStandings(); // updates gameData in place

    // reset current week and increment current season
    gameData["current-week"] = 1;
    gameData["current-season"] += 1;
    gameData["user-current-week-recruiting-time"] = gameData["settings"]["user-weekly-recruiting-time"];

    var news = "Starting the " + gameData["current-season"] + " season!"
    updateNewsFeed("-------------------------------");
    updateNewsFeed(news);
    updateNewsFeed("-------------------------------");
}

function userRecruitingAction(recruit, option){
    var time = gameData["recruiting-options"][option]["time"];
    var interestBoost = gameData["recruiting-options"][option]["interest-boost"];
    var news = "Recruited " + gameData["recruiting-class"][recruit]["name"] + " for " + time + " minutes, increasing his interest in " + gameData["user-team"] + " by " + interestBoost + ".";

    gameData["recruiting-class"][recruit]["interest"][gameData["user-team"]] += interestBoost;
    if (gameData["recruiting-class"][recruit]["interest"][gameData["user-team"]] >= gameData["settings"]["commit-interest-req"]) {
        gameData["recruiting-class"][recruit]["commit"] = true;
        gameData["recruiting-class"][recruit]["commit-to"] = gameData["user-team"];
        news += " " + gameData["recruiting-class"][recruit]["name"] + " has commit to " + gameData["user-team"] + "!";
    };
    gameData["user-current-week-recruiting-time"] -= time;

    updateNewsFeed(news);
    reloadActivePage();
}



/*
FRONT END
*/

// load home page
var menuHomeButton = document.getElementById("menu-home");
menuHomeButton.addEventListener("click", function(){
    loadHomePage();
});
function loadHomePage(){
    console.log("Load home page.");

    // update active-page in menu
    var prevActivePage = document.getElementsByClassName("active-page")[0];
    prevActivePage.classList.remove("active-page");
    menuHomeButton.classList.add("active-page");

    // generate home page content
    var container = document.getElementById("dynamic-box");
    container.innerHTML = "";
    container.classList.remove(...container.classList); // clear current classList
    container.classList.add("home-page-active");

    var titleDiv = document.getElementById("page-title");
    titleDiv.innerHTML = "";
    var title = document.createElement("h1");
    title.innerHTML = "Home - UNDER CONSTRUCTION";
    titleDiv.appendChild(title);
}

// load roster page
var menuRosterButton = document.getElementById("menu-roster");
menuRosterButton.addEventListener("click", function(){
    loadRosterPage();
});
function loadRosterPage(team=gameData["user-team"]){
    console.log("Load roster page.");
    
    // update active-page in menu
    var prevActivePage = document.getElementsByClassName("active-page")[0];
    prevActivePage.classList.remove("active-page");
    menuRosterButton.classList.add("active-page");

    // generate roster page content
    var container = document.getElementById("dynamic-box");
    container.innerHTML = "";
    container.classList.remove(...container.classList); // clear current classList
    container.classList.add("roster-page-active");

    var titleDiv = document.getElementById("page-title");
    titleDiv.innerHTML = "";
    var title = document.createElement("h1");
    title.innerHTML = team + " " + gameData["teams"][team]["mascot"] + " Roster";
    titleDiv.appendChild(title);

    var teamToggleForm = document.createElement("form");
    teamToggleForm.classList.add("team-toggle-form");
    teamToggleForm.action = "javascript:loadRosterPagePlayers(document.getElementById('team-toggle-select').value);";
    var teamToggleSelect = document.createElement("select");
    teamToggleSelect.id = "team-toggle-select"
    teamToggleSelect.setAttribute("onchange", "this.form.submit()");
    for (iterTeam in gameData["teams"]) {
        var option = document.createElement("option");
        option.value = iterTeam;
        option.innerHTML = iterTeam;
        if (iterTeam === team) { // currently displayed roster
            option.selected = "selected";
        };
        teamToggleSelect.appendChild(option);
    }
    teamToggleForm.appendChild(teamToggleSelect);
    container.appendChild(teamToggleForm);

    var playerTable = document.createElement("table");
    playerTable.id = "player-table";
    container.appendChild(playerTable);
    loadRosterPagePlayers(team);
}

// load roster page players list -- seperate from loadRosterPage to improve efficiency when toggling between teams within roster page
function loadRosterPagePlayers(team) {
    console.log("Load " + team + " player list.");

    var titleDiv = document.getElementById("page-title");
    titleDiv.innerHTML = "";
    var title = document.createElement("h1");
    title.innerHTML = team + " " + gameData["teams"][team]["mascot"] + " Roster";
    titleDiv.appendChild(title);
    
    var playerTable = document.getElementById("player-table");
    playerTable.innerHTML = "";

    var tableHead = document.createElement("tr");
    var thName = document.createElement("th");
    thName.innerHTML = "Name";
    var thPos = document.createElement("th");
    thPos.innerHTML = "Position";
    var thRating = document.createElement("th");
    thRating.innerHTML = "Rating";
    var thYear = document.createElement("th");
    thYear.innerHTML = "Year";

    tableHead.appendChild(thName);
    tableHead.appendChild(thPos);
    tableHead.appendChild(thRating);
    tableHead.appendChild(thYear);
    playerTable.appendChild(tableHead);

    var rosterArray = gameData["teams"][team]["roster"];
    for (player in rosterArray) {
        var playerRow = document.createElement("tr");
        playerRow.classList.add("player-instance");
        
        var tdName = document.createElement("td");
        tdName.classList.add("name");
        tdName.innerHTML = rosterArray[player]["name"];
        
        var tdPos = document.createElement("td");
        tdPos.classList.add("position");
        tdPos.innerHTML = rosterArray[player]["position"];
        
        var tdRating = document.createElement("td");
        tdRating.classList.add("rating");
        tdRating.innerHTML = rosterArray[player]["rating"];
        
        var tdYear = document.createElement("td");
        tdYear.classList.add("year");
        tdYear.innerHTML = rosterArray[player]["year"];

        playerRow.appendChild(tdName);
        playerRow.appendChild(tdPos);
        playerRow.appendChild(tdRating);
        playerRow.appendChild(tdYear);
        playerTable.appendChild(playerRow);
    }
}

// load schedule page
var menuScheduleButton = document.getElementById("menu-schedule");
menuScheduleButton.addEventListener("click", function(){
    loadSchedulePage();
});
function loadSchedulePage(){
    console.log("Load schedule page.");

    // update active-page in menu
    var prevActivePage = document.getElementsByClassName("active-page")[0];
    prevActivePage.classList.remove("active-page");
    menuScheduleButton.classList.add("active-page");

    // generate schedule page content
    var container = document.getElementById("dynamic-box");
    container.innerHTML = "";
    container.classList.remove(...container.classList); // clear current classList
    container.classList.add("schedule-page-active");

    var titleDiv = document.getElementById("page-title");
    titleDiv.innerHTML = "";
    var title = document.createElement("h1");
    title.innerHTML = "Schedule - UNDER CONSTRUCTION";
    titleDiv.appendChild(title);
}

// load standings page
var menuStandingsButton = document.getElementById("menu-standings");
menuStandingsButton.addEventListener("click", function(){
    loadStandingsPage();
});
function loadStandingsPage(){
    console.log("Load standings page.");

    // update active-page in menu
    var prevActivePage = document.getElementsByClassName("active-page")[0];
    prevActivePage.classList.remove("active-page");
    menuStandingsButton.classList.add("active-page");

    // generate standings page content
    var container = document.getElementById("dynamic-box");
    container.innerHTML = "";
    container.classList.remove(...container.classList); // clear current classList
    container.classList.add("standings-page-active");

    var titleDiv = document.getElementById("page-title");
    titleDiv.innerHTML = "";
    var title = document.createElement("h1");
    title.innerHTML = "Standings";
    titleDiv.appendChild(title);

    var standingsTable = document.createElement("table");
    standingsTable.id = "standings-table";
    container.appendChild(standingsTable);

    var tableHead = document.createElement("tr");
    var thName = document.createElement("th");
    thName.innerHTML = "Name";
    var thGames = document.createElement("th");
    thGames.innerHTML = "Games Played";
    var thWins = document.createElement("th");
    thWins.innerHTML = "Wins";
    var thLosses = document.createElement("th");
    thLosses.innerHTML = "Losses";
    var thWinPct = document.createElement("th");
    thWinPct.innerHTML = "Win Percentage";
    var thPtsF = document.createElement("th");
    thPtsF.innerHTML = "Points For";
    var thPtsA = document.createElement("th");
    thPtsA.innerHTML = "Points Against";
    var thPtsDiff = document.createElement("th");
    thPtsDiff.innerHTML = "Point Differential";
    tableHead.appendChild(thName);
    tableHead.appendChild(thGames);
    tableHead.appendChild(thWinPct);
    tableHead.appendChild(thWins);
    tableHead.appendChild(thLosses);
    tableHead.appendChild(thPtsF);
    tableHead.appendChild(thPtsA);
    tableHead.appendChild(thPtsDiff);
    standingsTable.appendChild(tableHead);

    for (iterTeam in gameData["standings"]) {
        var teamRow = document.createElement("tr");
        teamRow.classList.add("team-instance");
        
        var tdName = document.createElement("td");
        tdName.classList.add("name");
        tdName.innerHTML = iterTeam;
        
        var tdGames = document.createElement("td");
        tdGames.classList.add("games-played");
        tdGames.innerHTML = gameData["standings"][iterTeam]["games-played"];
        
        var tdWins = document.createElement("td");
        tdWins.classList.add("wins");
        var wins = gameData["standings"][iterTeam]["wins"];
        tdWins.innerHTML = wins;
        
        var tdLosses = document.createElement("td");
        tdLosses.classList.add("losses");
        var losses = gameData["standings"][iterTeam]["losses"];
        tdLosses.innerHTML = losses;
        
        var tdWinPct = document.createElement("td");
        tdWinPct.classList.add("win-pct");
        if (wins + losses > 0) {
            tdWinPct.innerHTML = (wins / (wins + losses)).toFixed(3);
        } else {
            tdWinPct.innerHTML = (0).toFixed(3);
        };

        var tdPtsF = document.createElement("td");
        tdPtsF.classList.add("points-for");
        var ptsF = gameData["standings"][iterTeam]["points-for"];
        tdPtsF.innerHTML = ptsF;
        
        var tdPtsA = document.createElement("td");
        tdPtsA.classList.add("points-against");
        var ptsA = gameData["standings"][iterTeam]["points-against"];
        tdPtsA.innerHTML = ptsA;
        
        var tdPtsDiff = document.createElement("td");
        tdPtsDiff.classList.add("points-diff");
        tdPtsDiff.innerHTML = ptsF - ptsA;

        teamRow.appendChild(tdName);
        teamRow.appendChild(tdGames);
        teamRow.appendChild(tdWinPct);
        teamRow.appendChild(tdWins);
        teamRow.appendChild(tdLosses);
        teamRow.appendChild(tdPtsF);
        teamRow.appendChild(tdPtsA);
        teamRow.appendChild(tdPtsDiff);
        standingsTable.appendChild(teamRow);
    }
}

// load recruits page
var menuRecruitsButton = document.getElementById("menu-recruits");
menuRecruitsButton.addEventListener("click", function(){
    loadRecruitsPage();
});
function loadRecruitsPage(){
    console.log("Load recruits page.");

    // update active-page in menu
    var prevActivePage = document.getElementsByClassName("active-page")[0];
    prevActivePage.classList.remove("active-page");
    menuRecruitsButton.classList.add("active-page");

    // generate recruits page content
    var container = document.getElementById("dynamic-box");
    container.innerHTML = "";
    container.classList.remove(...container.classList); // clear current classList
    container.classList.add("recruits-page-active");

    var titleDiv = document.getElementById("page-title");
    titleDiv.innerHTML = "";
    var title = document.createElement("h1");
    title.innerHTML = "Recruits (" + gameData["user-current-week-recruiting-time"] + " min. remaining this week)";
    titleDiv.appendChild(title);
    
    var recruitsTable = document.createElement("table");
    recruitsTable.id = "recruits-table";
    container.appendChild(recruitsTable);

    var tableHead = document.createElement("tr");
    var thName = document.createElement("th");
    thName.innerHTML = "Name";
    var thPos = document.createElement("th");
    thPos.innerHTML = "Position";
    var thRating = document.createElement("th");
    thRating.innerHTML = "Rating";
    var thCommit = document.createElement("th");
    thCommit.innerHTML = "Commit To";
    var thUserInterest = document.createElement("th");
    thUserInterest.innerHTML = "Interest in " + gameData["user-team"];
    var thRecruitingActions = document.createElement("th");
    thRecruitingActions.innerHTML = "Available Actions";

    tableHead.appendChild(thName);
    tableHead.appendChild(thPos);
    tableHead.appendChild(thRating);
    tableHead.appendChild(thCommit);
    tableHead.appendChild(thUserInterest);
    tableHead.appendChild(thRecruitingActions);
    recruitsTable.appendChild(tableHead);

    for (recruit in gameData["recruiting-class"]) {
        var playerRow = document.createElement("tr");
        playerRow.classList.add("player-instance");
        playerRow.id = "recruit-" + recruit;
        
        var tdName = document.createElement("td");
        tdName.classList.add("name");
        tdName.innerHTML = gameData["recruiting-class"][recruit]["name"];
        
        var tdPos = document.createElement("td");
        tdPos.classList.add("position");
        tdPos.innerHTML = gameData["recruiting-class"][recruit]["position"];
        
        var tdRating = document.createElement("td");
        tdRating.classList.add("rating");
        tdRating.innerHTML = gameData["recruiting-class"][recruit]["rating"];

        var tdCommit = document.createElement("td");
        tdCommit.classList.add("commit");
        if (gameData["recruiting-class"][recruit]["commit"] === false) {
            tdCommit.innerHTML = "-";
        } else {
            tdCommit.innerHTML = gameData["recruiting-class"][recruit]["commit-to"];
        };

        var tdUserInterest = document.createElement("td");
        tdUserInterest.classList.add("interest");
        var userInterest = gameData["recruiting-class"][recruit]["interest"][gameData["user-team"]];
        // tdUserInterest.innerHTML = userInterest;
        var userInterestBarContainer = document.createElement("div");
        userInterestBarContainer.classList.add("interest-bar-container");
        tdUserInterest.appendChild(userInterestBarContainer);
        var userInterestBarProgress = document.createElement("div");
        userInterestBarProgress.setAttribute("style", "width:" + Math.min(Math.floor((userInterest/gameData["settings"]["commit-interest-req"])*100), 100) + "%");
        userInterestBarProgress.classList.add("interest-bar-progress");
        userInterestBarContainer.appendChild(userInterestBarProgress);

        var tdRecruitingActions = document.createElement("td");
        tdRecruitingActions.classList.add("recruiting-options");
        for (option in gameData["recruiting-options"]) {
            var recruitingActionButton = document.createElement("button");
            recruitingActionButton.classList.add("recruiting-action-button");
            recruitingActionButton.innerHTML = option + " (" + gameData["recruiting-options"][option]["time"] + " min.)";
            if (gameData["recruiting-class"][recruit]["commit"] === true || gameData["recruiting-options"][option]["time"] > gameData["user-current-week-recruiting-time"]) {
                recruitingActionButton.classList.add("recruiting-action-unavailable");
            } else {
                recruitingActionButton.addEventListener("click", (function(recruit, option) {
                    return function() {
                        console.log(recruit, option);
                        userRecruitingAction(recruit, option);
                    }
                })(recruit, option));
            };
            tdRecruitingActions.appendChild(recruitingActionButton);
        }

        playerRow.appendChild(tdName);
        playerRow.appendChild(tdPos);
        playerRow.appendChild(tdRating);
        playerRow.appendChild(tdCommit);
        playerRow.appendChild(tdUserInterest);
        playerRow.appendChild(tdRecruitingActions);
        recruitsTable.appendChild(playerRow);
    }
}

// updates contents of active page
// meant to be called upon game-state change (ex. advancing a week)
function reloadActivePage(){
    var activePage = document.getElementsByClassName("active-page")[0]; // should only ever be one "active-page"
    // this utilizes active-page class set within menu to distinquish one active page
    if (activePage.id == "menu-home") {
        loadHomePage();
    } else if (activePage.id == "menu-roster") {
        loadRosterPage();
    } else if (activePage.id == "menu-schedule") {
        loadSchedulePage();
    } else if (activePage.id == "menu-standings") {
        loadStandingsPage();
    } else if (activePage.id == "menu-recruits") {
        loadRecruitsPage();
    };
    updateActionButton();
}

/* ACTION BOX */
function updateActionButton(){
    console.log("Updating available actions...");
    var advanceButton = document.getElementById("advance-button");
    if (gameData["current-week"] <= gameData["settings"]["num-games"]) {
        var newAdvanceButton = advanceButton.cloneNode(true);
        advanceButton.parentNode.replaceChild(newAdvanceButton, advanceButton); // removes old event listeners
        newAdvanceButton.addEventListener("click", function(){
            advanceWeek(gameData["current-week"]);
            reloadActivePage(); // calls updateActionButton, so updateActionButton is recurrsive/repeating function
        });
        newAdvanceButton.innerHTML = "Advance Week";
    } else {
        var newAdvanceButton = advanceButton.cloneNode(true);
        advanceButton.parentNode.replaceChild(newAdvanceButton, advanceButton); // removes old event listeners
        newAdvanceButton.addEventListener("click", function(){
            advanceSeason();
            reloadActivePage();
        });
        newAdvanceButton.innerHTML = "Advance Season";
    }
}

function updateNewsFeed(news){
    var newsFeed = document.getElementById("news-feed");
    var li = document.createElement("li");
    li.classList.add("news-item");
    li.innerHTML = news;
    newsFeed.prepend(li);
}
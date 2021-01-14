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
};

var recruitingOptions = {
    "Email": {
        "interest-boost": 5,
        "time": 10
    },
    "Call": {
        "interest-boost": 20,
        "time": 30
    }
};

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

function nameGenerator(){
    // https://gist.githubusercontent.com/BenjaminAdams/4f6175e7ede6af50e9ee/raw/85e7868a87116e27998cd845540d199907061cfe/maleNames.js
    var firstNames = ["Jacob","Michael","Matthew","Joshua","Christopher","Nicholas","Andrew","Joseph","Daniel","Tyler","William","Brandon","Ryan","John","Zachary","David","Anthony","James","Justin","Alexander","Jonathan","Christian","Austin","Dylan","Ethan","Benjamin","Noah","Samuel","Robert","Nathan","Cameron","Kevin","Thomas","Jose","Hunter","Jordan","Kyle","Caleb","Jason","Logan","Aaron","Eric","Brian","Gabriel","Adam","Jack","Isaiah","Juan","Luis","Connor","Charles","Elijah","Isaac","Steven","Evan","Jared","Sean","Timothy","Luke","Cody","Nathaniel","Alex","Seth","Mason","Richard","Carlos","Angel","Patrick","Devin","Bryan","Cole","Jackson","Ian","Garrett","Trevor","Jesus","Chase","Adrian","Mark","Blake","Sebastian","Antonio","Lucas","Jeremy","Gavin","Miguel","Julian","Dakota","Alejandro","Jesse","Dalton","Bryce","Tanner","Kenneth","Stephen","Jake","Victor","Spencer","Marcus","Paul","Brendan","Jeremiah","Xavier","Jeffrey","Tristan","Jalen","Jorge","Edward","Riley","Wyatt","Colton","Joel","Maxwell","Aidan","Travis","Shane","Colin","Dominic","Carson","Vincent","Derek","Oscar","Grant","Eduardo","Peter","Henry","Parker","Hayden","Collin","George","Bradley","Mitchell","Devon","Ricardo","Shawn","Taylor","Nicolas","Francisco","Gregory","Liam","Kaleb","Preston","Erik","Alexis","Owen","Omar","Diego","Dustin","Corey","Fernando","Clayton","Carter","Ivan","Jaden","Javier","Alec","Johnathan","Scott","Manuel","Cristian","Alan","Raymond","Brett","Max","Andres","Gage","Mario","Dawson","Dillon","Cesar","Wesley","Levi","Jakob","Chandler","Martin","Malik","Edgar","Trenton","Sergio","Josiah","Nolan","Marco","Peyton","Harrison","Hector","Micah","Roberto","Drew","Brady","Erick","Conner","Jonah","Casey","Jayden","Emmanuel","Edwin","Andre","Phillip","Brayden","Landon","Giovanni","Bailey","Ronald","Braden","Damian","Donovan","Ruben","Frank","Pedro","Gerardo","Andy","Chance","Abraham","Calvin","Trey","Cade","Donald","Derrick","Payton","Darius","Enrique","Keith","Raul","Jaylen","Troy","Jonathon","Cory","Marc","Skyler","Rafael","Trent","Griffin","Colby","Johnny","Eli","Chad","Armando","Kobe","Caden","Cooper","Marcos","Elias","Brenden","Israel","Avery","Zane","Dante","Josue","Zackary","Allen","Mathew","Dennis","Leonardo","Ashton","Philip","Julio","Miles","Damien","Ty","Gustavo","Drake","Jaime","Simon","Jerry","Curtis","Kameron","Lance","Brock","Bryson","Alberto","Dominick","Jimmy","Kaden","Douglas","Gary","Brennan","Zachery","Randy","Louis","Larry","Nickolas","Tony","Albert","Fabian","Keegan","Saul","Danny","Tucker","Damon","Myles","Arturo","Corbin","Deandre","Ricky","Kristopher","Lane","Pablo","Darren","Zion","Jarrett","Alfredo","Micheal","Angelo","Carl","Oliver","Kyler","Tommy","Walter","Dallas","Jace","Quinn","Theodore","Grayson","Lorenzo","Joe","Arthur","Bryant","Brent","Roman","Russell","Ramon","Lawrence","Moises","Aiden","Quentin","Tyrese","Jay","Tristen","Emanuel","Salvador","Terry","Morgan","Jeffery","Esteban","Tyson","Braxton","Branden","Brody","Craig","Marvin","Ismael","Rodney","Isiah","Maurice","Marshall","Ernesto","Emilio","Brendon","Kody","Eddie","Malachi","Abel","Keaton","Jon","Shaun","Skylar","Nikolas","Ezekiel","Santiago","Kendall","Axel","Camden","Trevon","Bobby","Conor","Jamal","Lukas","Malcolm","Zackery","Jayson","Javon","Reginald","Zachariah","Desmond","Roger","Felix","Dean","Johnathon","Quinton","Ali","Davis","Gerald","Demetrius","Rodrigo","Billy","Rene","Reece","Justice","Kelvin","Leo","Guillermo","Chris","Kevon","Steve","Frederick","Clay","Weston","Dorian","Hugo","Orlando","Roy","Terrance","Kai","Khalil","Graham","Noel","Nathanael","Willie","Terrell","Tyrone","Camron","Mauricio","Amir","Darian","Jarod","Nelson","Kade","Reese","Kristian","Garret","Marquis","Rodolfo","Dane","Felipe","Todd","Elian","Walker","Mateo","Jaylon","Kenny","Bruce","Ezra","Ross","Damion","Francis","Tate","Byron","Reid","Warren","Randall","Bennett","Jermaine","Triston","Jaquan","Harley","Jessie","Franklin","Duncan","Charlie","Reed","Blaine","Braeden","Holden","Ahmad","Issac","Kendrick","Melvin","Sawyer","Solomon","Moses","Jaylin","Sam","Cedric","Mohammad","Alvin","Beau","Jordon","Elliot","Lee","Darrell","Jarred","Mohamed","Davion","Wade","Tomas","Jaxon","Uriel","Deven","Maximilian","Rogelio","Gilberto","Ronnie","Julius","Allan","Brayan","Deshawn","Joey","Terrence","Noe","Alfonso","Ahmed","Tyree","Tyrell","Jerome","Devan","Neil","Ramiro","Pierce","Davon","Devonte","Jamie","Leon","Adan","Eugene","Stanley","Marlon","Quincy","Leonard","Wayne","Will","Alvaro","Ernest","Harry","Addison","Ray","Alonzo","Jadon","Jonas","Keyshawn","Rolando","Mohammed","Tristin","Donte","Dominique","Leonel","Wilson","Gilbert","Coby","Dangelo","Kieran","Colten","Keenan","Koby","Jarrod","Dale","Harold","Toby","Dwayne","Elliott","Osvaldo","Cyrus","Kolby","Sage","Coleman","Declan","Adolfo","Ariel","Brennen","Darryl","Trace","Orion","Shamar","Efrain","Keshawn","Rudy","Ulises","Darien","Braydon","Ben","Vicente","Nasir","Dayton","Joaquin","Karl","Dandre","Isaias","Rylan","Sterling","Cullen","Quintin","Stefan","Brice","Lewis","Gunnar","Humberto","Nigel","Alfred","Agustin","Asher","Daquan","Easton","Salvatore","Jaron","Nathanial","Ralph","Everett","Hudson","Marquise","Tobias","Glenn","Antoine","Jasper","Elvis","Kane","Sidney","Ezequiel","Tylor","Aron","Dashawn","Devyn","Mike","Silas","Jaiden","Jayce","Deonte","Romeo","Deon","Cristopher","Freddy","Kurt","Kolton","River","August","Roderick","Clarence","Derick","Jamar","Raphael","Rohan","Kareem","Muhammad","Demarcus","Sheldon","Markus","Cayden","Luca","Tre","Jamison","Jean","Rory","Brad","Clinton","Jaylan","Titus","Emiliano","Jevon","Julien","Alonso","Lamar","Cordell","Gordon","Ignacio","Jett","Keon","Baby","Cruz","Rashad","Tariq","Armani","Deangelo","Milton","Geoffrey","Elisha","Moshe","Bernard","Asa","Bret","Darion","Darnell","Izaiah","Irvin","Jairo","Howard","Aldo","Zechariah","Ayden","Garrison","Norman","Stuart","Kellen","Travon","Shemar","Dillan","Junior","Darrius","Rhett","Barry","Kamron","Jude","Rigoberto","Amari","Jovan","Octavio","Perry","Kole","Misael","Hassan","Jaren","Latrell","Roland","Quinten","Ibrahim","Justus","German","Gonzalo","Nehemiah","Forrest","Mackenzie","Anton","Chaz","Talon","Guadalupe","Austen","Brooks","Conrad","Greyson","Winston","Antwan","Dion","Lincoln","Leroy","Earl","Jaydon","Landen","Gunner","Brenton","Jefferson","Fredrick","Kurtis","Maximillian","Stephan","Stone","Shannon","Shayne","Karson","Stephon","Nestor","Frankie","Gianni","Keagan","Tristian","Dimitri","Kory","Zakary","Donavan","Draven","Jameson","Clifton","Daryl","Emmett","Cortez","Destin","Jamari","Dallin","Estevan","Grady","Davin","Santos","Marcel","Carlton","Dylon","Mitchel","Clifford","Syed","Adonis","Dexter","Keyon","Reynaldo","Devante","Arnold","Clark","Kasey","Sammy","Thaddeus","Glen","Jarvis","Garett","Infant","Keanu","Kenyon","Nick","Ulysses","Dwight","Kent","Denzel","Lamont","Houston","Layne","Darin","Jorden","Anderson","Kayden","Khalid","Antony","Deondre","Ellis","Marquez","Ari","Cornelius","Austyn","Brycen","Abram","Remington","Braedon","Reuben","Hamza","Ryder","Zaire","Terence","Guy","Jamel","Tevin","Alexandro","Jordy","Kelly","Porter","Trever","Dario","Jackie","Judah","Keven","Raymundo","Cristobal","Josef","Paris","Colt","Giancarlo","Rahul","Savion","Deshaun","Josh","Korey","Gerard","Jacoby","Lonnie","Reilly","Seamus","Don","Giovanny","Jamil","Kristofer","Samir","Benny","Dominik","Finn","Jan","Cale","Irving","Jaxson","Kaiden","Marcelo","Nico","Rashawn","Vernon","Aubrey","Gaven","Jabari","Sincere","Kirk","Maximus","Mikel","Davonte","Heath","Justyn","Kadin","Alden","Kelton","Brandan","Courtney","Camren","Dewayne","Darrin","Darrion","Duane","Elmer","Maverick","Nikhil","Sonny","Abdullah","Chaim","Nathen","Bronson","Xzavier","Efren","Jovani","Phoenix","Reagan","Blaze","Luciano","Royce","Tyrek","Tyshawn","Deontae","Fidel","Gaige","Aden","Neal","Ronaldo","Gideon","Prince","Rickey","Deion","Denver","Benito","London","Matteo","Samson","Bernardo","Raven","Simeon","Turner","Carlo","Gino","Johan","Ryley","Domenic","Hugh","Rocky","Trystan","Emerson","Trevion","Heriberto","Joan","Marques","Raheem","Tyreek","Vaughn","Clint","Nash","Mariano","Myron","Ladarius","Lloyd","Omari","Keshaun","Pierre","Rick","Xander","Eliseo","Jeff","Bradly","Freddie","Kavon","Mekhi","Sabastian","Shea","Dan","Adrien","Alessandro","Isai","Kian","Maximiliano","Paxton","Rasheed","Blaise","Brodie","Donnie","Isidro","Jaeden","Javion","Jimmie","Johnnie","Kennedy","Tyrique","Andreas","Augustus","Jalon","Jamir","Valentin","Korbin","Lawson","Maxim","Fred","Herbert","Amos","Bruno","Donavon","Javonte","Ean","Kamren","Rowan","Alek","Brandyn","Demarco","Hernan","Alexzander","Bo","Branson","Brennon","Genaro","Jamarcus","Aric","Barrett","Rey","Braiden","Brant","Dontae","Harvey","Jovany","Kale","Nicklaus","Zander","Dillion","Donnell","Kylan","Treyvon","Vincenzo","Dayne","Francesco","Isaak","Jaleel","Lionel","Tracy","Giovani","Tavian","Alexandre","Darwin","Tyron","Dequan"]
    // https://gist.githubusercontent.com/subodhghulaxe/8148971/raw/fd0075f640f32589788989423ed90e95cb5f1ed7/last_names.php
    var lastNames = ["Abbott","Acevedo","Acosta","Adams","Adkins","Aguilar","Aguirre","Albert","Alexander","Alford","Allen","Allison","Alston","Alvarado","Alvarez","Anderson","Andrews","Anthony","Armstrong","Arnold","Ashley","Atkins","Atkinson","Austin","Avery","Avila","Ayala","Ayers","Bailey","Baird","Baker","Baldwin","Ball","Ballard","Banks","Barber","Barker","Barlow","Barnes","Barnett","Barr","Barrera","Barrett","Barron","Barry","Bartlett","Barton","Bass","Bates","Battle","Bauer","Baxter","Beach","Bean","Beard","Beasley","Beck","Becker","Bell","Bender","Benjamin","Bennett","Benson","Bentley","Benton","Berg","Berger","Bernard","Berry","Best","Bird","Bishop","Black","Blackburn","Blackwell","Blair","Blake","Blanchard","Blankenship","Blevins","Bolton","Bond","Bonner","Booker","Boone","Booth","Bowen","Bowers","Bowman","Boyd","Boyer","Boyle","Bradford","Bradley","Bradshaw","Brady","Branch","Bray","Brennan","Brewer","Bridges","Briggs","Bright","Britt","Brock","Brooks","Brown","Browning","Bruce","Bryan","Bryant","Buchanan","Buck","Buckley","Buckner","Bullock","Burch","Burgess","Burke","Burks","Burnett","Burns","Burris","Burt","Burton","Bush","Butler","Byers","Byrd","Cabrera","Cain","Calderon","Caldwell","Calhoun","Callahan","Camacho","Cameron","Campbell","Campos","Cannon","Cantrell","Cantu","Cardenas","Carey","Carlson","Carney","Carpenter","Carr","Carrillo","Carroll","Carson","Carter","Carver","Case","Casey","Cash","Castaneda","Castillo","Castro","Cervantes","Chambers","Chan","Chandler","Chaney","Chang","Chapman","Charles","Chase","Chavez","Chen","Cherry","Christensen","Christian","Church","Clark","Clarke","Clay","Clayton","Clements","Clemons","Cleveland","Cline","Cobb","Cochran","Coffey","Cohen","Cole","Coleman","Collier","Collins","Colon","Combs","Compton","Conley","Conner","Conrad","Contreras","Conway","Cook","Cooke","Cooley","Cooper","Copeland","Cortez","Cote","Cotton","Cox","Craft","Craig","Crane","Crawford","Crosby","Cross","Cruz","Cummings","Cunningham","Curry","Curtis","Dale","Dalton","Daniel","Daniels","Daugherty","Davenport","David","Davidson","Davis","Dawson","Day","Dean","Decker","Dejesus","Delacruz","Delaney","Deleon","Delgado","Dennis","Diaz","Dickerson","Dickson","Dillard","Dillon","Dixon","Dodson","Dominguez","Donaldson","Donovan","Dorsey","Dotson","Douglas","Downs","Doyle","Drake","Dudley","Duffy","Duke","Duncan","Dunlap","Dunn","Duran","Durham","Dyer","Eaton","Edwards","Elliott","Ellis","Ellison","Emerson","England","English","Erickson","Espinoza","Estes","Estrada","Evans","Everett","Ewing","Farley","Farmer","Farrell","Faulkner","Ferguson","Fernandez","Ferrell","Fields","Figueroa","Finch","Finley","Fischer","Fisher","Fitzgerald","Fitzpatrick","Fleming","Fletcher","Flores","Flowers","Floyd","Flynn","Foley","Forbes","Ford","Foreman","Foster","Fowler","Fox","Francis","Franco","Frank","Franklin","Franks","Frazier","Frederick","Freeman","French","Frost","Fry","Frye","Fuentes","Fuller","Fulton","Gaines","Gallagher","Gallegos","Galloway","Gamble","Garcia","Gardner","Garner","Garrett","Garrison","Garza","Gates","Gay","Gentry","George","Gibbs","Gibson","Gilbert","Giles","Gill","Gillespie","Gilliam","Gilmore","Glass","Glenn","Glover","Goff","Golden","Gomez","Gonzales","Gonzalez","Good","Goodman","Goodwin","Gordon","Gould","Graham","Grant","Graves","Gray","Green","Greene","Greer","Gregory","Griffin","Griffith","Grimes","Gross","Guerra","Guerrero","Guthrie","Gutierrez","Guy","Guzman","Hahn","Hale","Haley","Hall","Hamilton","Hammond","Hampton","Hancock","Haney","Hansen","Hanson","Hardin","Harding","Hardy","Harmon","Harper","Harrell","Harrington","Harris","Harrison","Hart","Hartman","Harvey","Hatfield","Hawkins","Hayden","Hayes","Haynes","Hays","Head","Heath","Hebert","Henderson","Hendricks","Hendrix","Henry","Hensley","Henson","Herman","Hernandez","Herrera","Herring","Hess","Hester","Hewitt","Hickman","Hicks","Higgins","Hill","Hines","Hinton","Hobbs","Hodge","Hodges","Hoffman","Hogan","Holcomb","Holden","Holder","Holland","Holloway","Holman","Holmes","Holt","Hood","Hooper","Hoover","Hopkins","Hopper","Horn","Horne","Horton","House","Houston","Howard","Howe","Howell","Hubbard","Huber","Hudson","Huff","Huffman","Hughes","Hull","Humphrey","Hunt","Hunter","Hurley","Hurst","Hutchinson","Hyde","Ingram","Irwin","Jackson","Jacobs","Jacobson","James","Jarvis","Jefferson","Jenkins","Jennings","Jensen","Jimenez","Johns","Johnson","Johnston","Jones","Jordan","Joseph","Joyce","Joyner","Juarez","Justice","Kane","Kaufman","Keith","Keller","Kelley","Kelly","Kemp","Kennedy","Kent","Kerr","Key","Kidd","Kim","King","Kinney","Kirby","Kirk","Kirkland","Klein","Kline","Knapp","Knight","Knowles","Knox","Koch","Kramer","Lamb","Lambert","Lancaster","Landry","Lane","Lang","Langley","Lara","Larsen","Larson","Lawrence","Lawson","Le","Leach","Leblanc","Lee","Leon","Leonard","Lester","Levine","Levy","Lewis","Lindsay","Lindsey","Little","Livingston","Lloyd","Logan","Long","Lopez","Lott","Love","Lowe","Lowery","Lucas","Luna","Lynch","Lynn","Lyons","Macdonald","Macias","Mack","Madden","Maddox","Maldonado","Malone","Mann","Manning","Marks","Marquez","Marsh","Marshall","Martin","Martinez","Mason","Massey","Mathews","Mathis","Matthews","Maxwell","May","Mayer","Maynard","Mayo","Mays","Mcbride","Mccall","Mccarthy","Mccarty","Mcclain","Mcclure","Mcconnell","Mccormick","Mccoy","Mccray","Mccullough","Mcdaniel","Mcdonald","Mcdowell","Mcfadden","Mcfarland","Mcgee","Mcgowan","Mcguire","Mcintosh","Mcintyre","Mckay","Mckee","Mckenzie","Mckinney","Mcknight","Mclaughlin","Mclean","Mcleod","Mcmahon","Mcmillan","Mcneil","Mcpherson","Meadows","Medina","Mejia","Melendez","Melton","Mendez","Mendoza","Mercado","Mercer","Merrill","Merritt","Meyer","Meyers","Michael","Middleton","Miles","Miller","Mills","Miranda","Mitchell","Molina","Monroe","Montgomery","Montoya","Moody","Moon","Mooney","Moore","Morales","Moran","Moreno","Morgan","Morin","Morris","Morrison","Morrow","Morse","Morton","Moses","Mosley","Moss","Mueller","Mullen","Mullins","Munoz","Murphy","Murray","Myers","Nash","Navarro","Neal","Nelson","Newman","Newton","Nguyen","Nichols","Nicholson","Nielsen","Nieves","Nixon","Noble","Noel","Nolan","Norman","Norris","Norton","Nunez","Obrien","Ochoa","Oconnor","Odom","Odonnell","Oliver","Olsen","Olson","Oneal","Oneil","Oneill","Orr","Ortega","Ortiz","Osborn","Osborne","Owen","Owens","Pace","Pacheco","Padilla","Page","Palmer","Park","Parker","Parks","Parrish","Parsons","Pate","Patel","Patrick","Patterson","Patton","Paul","Payne","Pearson","Peck","Pena","Pennington","Perez","Perkins","Perry","Peters","Petersen","Peterson","Petty","Phelps","Phillips","Pickett","Pierce","Pittman","Pitts","Pollard","Poole","Pope","Porter","Potter","Potts","Powell","Powers","Pratt","Preston","Price","Prince","Pruitt","Puckett","Pugh","Quinn","Ramirez","Ramos","Ramsey","Randall","Randolph","Rasmussen","Ratliff","Ray","Raymond","Reed","Reese","Reeves","Reid","Reilly","Reyes","Reynolds","Rhodes","Rice","Rich","Richard","Richards","Richardson","Richmond","Riddle","Riggs","Riley","Rios","Rivas","Rivera","Rivers","Roach","Robbins","Roberson","Roberts","Robertson","Robinson","Robles","Rocha","Rodgers","Rodriguez","Rodriquez","Rogers","Rojas","Rollins","Roman","Romero","Rosa","Rosales","Rosario","Rose","Ross","Roth","Rowe","Rowland","Roy","Ruiz","Rush","Russell","Russo","Rutledge","Ryan","Salas","Salazar","Salinas","Sampson","Sanchez","Sanders","Sandoval","Sanford","Santana","Santiago","Santos","Sargent","Saunders","Savage","Sawyer","Schmidt","Schneider","Schroeder","Schultz","Schwartz","Scott","Sears","Sellers","Serrano","Sexton","Shaffer","Shannon","Sharp","Sharpe","Shaw","Shelton","Shepard","Shepherd","Sheppard","Sherman","Shields","Short","Silva","Simmons","Simon","Simpson","Sims","Singleton","Skinner","Slater","Sloan","Small","Smith","Snider","Snow","Snyder","Solis","Solomon","Sosa","Soto","Sparks","Spears","Spence","Spencer","Stafford","Stanley","Stanton","Stark","Steele","Stein","Stephens","Stephenson","Stevens","Stevenson","Stewart","Stokes","Stone","Stout","Strickland","Strong","Stuart","Suarez","Sullivan","Summers","Sutton","Swanson","Sweeney","Sweet","Sykes","Talley","Tanner","Tate","Taylor","Terrell","Terry","Thomas","Thompson","Thornton","Tillman","Todd","Torres","Townsend","Tran","Travis","Trevino","Trujillo","Tucker","Turner","Tyler","Tyson","Underwood","Valdez","Valencia","Valentine","Valenzuela","Vance","Vang","Vargas","Vasquez","Vaughan","Vaughn","Vazquez","Vega","Velasquez","Velazquez","Velez","Villarreal","Vincent","Vinson","Wade","Wagner","Walker","Wall","Wallace","Waller","Walls","Walsh","Walter","Walters","Walton","Ward","Ware","Warner","Warren","Washington","Waters","Watkins","Watson","Watts","Weaver","Webb","Weber","Webster","Weeks","Weiss","Welch","Wells","West","Wheeler","Whitaker","White","Whitehead","Whitfield","Whitley","Whitney","Wiggins","Wilcox","Wilder","Wiley","Wilkerson","Wilkins","Wilkinson","William","Williams","Williamson","Willis","Wilson","Winters","Wise","Witt","Wolf","Wolfe","Wong","Wood","Woodard","Woods","Woodward","Wooten","Workman","Wright","Wyatt","Wynn","Yang","Yates","York","Young","Zamora","Zimmerman"]
    
    return firstNames[Math.floor(Math.random() * firstNames.length)] + " " + lastNames[Math.floor(Math.random() * lastNames.length)]
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
        gameData["teams"][team]["overall-rating"] = roster.reduce((accum,item) => accum + item["rating"], 0) / roster.length;
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
        "id": recruitId,
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
    setComputerRecruiting(); // updates gameData in place
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

// https://stackoverflow.com/a/39187274/9580322
function gaussianRand() {
    var rand = 0;
    var sampleSize = 10;
    for (var i = 0; i < sampleSize; i += 1) {
      rand += Math.random();
    }
    return rand / sampleSize;
}

function gaussianRandom(start, end) {
    return Math.floor(start + gaussianRand() * (end - start + 1));
}

// simulate a match between two teams
function simulateMatch(homeTeam, awayTeam){
    var homeTeamRating = gameData["teams"][homeTeam]["overall-rating"];
    var awayTeamRating = gameData["teams"][awayTeam]["overall-rating"];
    console.log(homeTeam + ": " + homeTeamRating + ", " + awayTeam + ": " + awayTeamRating);
    var homeTeamAdj = 2*(homeTeamRating - awayTeamRating);
    var awayTeamAdj = 2*(awayTeamRating - homeTeamRating);
    var homeTeamScore = gaussianRandom(50+homeTeamAdj, 100+homeTeamAdj);
    var awayTeamScore = gaussianRandom(50+awayTeamAdj, 100+awayTeamAdj);

    // for now simulation is very simple, and if they're tied just give the home team the winning point - call it home court advantage
    if (homeTeamScore == awayTeamScore) {
        homeTeamScore += 1;
    };

    if (homeTeamScore > awayTeamScore) {
        var winningTeam = homeTeam;
        var losingTeam = awayTeam;
        var winningScore = homeTeamScore;
        var losingScore = awayTeamScore;
    } else {
        var winningTeam = awayTeam;
        var losingTeam = homeTeam;
        var winningScore = awayTeamScore;
        var losingScore = homeTeamScore;
    };
    
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

// simulate computer-controlled teams recruiting activity
function weeklyComputerRecruiting(team){
    var remainingTime = gameData["settings"]["user-weekly-recruiting-time"];
    var targets = gameData["teams"][team]["recruiting-targets"];
    for (i = targets.length-1; i >= 0; i--) {
        if (remainingTime > 0) {
            var recruit = targets[i]["id"];
            if (gameData["recruiting-class"][recruit]["commit"] == true) {
                gameData["teams"][team]["recruiting-targets"].splice(i,1);
            } else {
                var availableOptions = Object.fromEntries(
                    Object.entries(gameData["recruiting-options"]).filter(
                        ([key, value]) => value["time"] <= remainingTime
                    )
                );
                // for random object selection: https://stackoverflow.com/a/15106541/9580322
                var keys = Object.keys(availableOptions);
                var option = availableOptions[keys[ keys.length * Math.random() << 0]];
                
                var time = option["time"];
                var interestBoost = option["interest-boost"];
                gameData["recruiting-class"][recruit]["interest"][team] += interestBoost;
                if (gameData["recruiting-class"][recruit]["interest"][team] >= gameData["settings"]["commit-interest-req"]) {
                    gameData["recruiting-class"][recruit]["commit"] = true;
                    gameData["recruiting-class"][recruit]["commit-to"] = team;
                };
                remainingTime -= time;
            };
        } else {
            break;
        }
    }
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
    for (team in gameData["teams"]) {
        if (team != gameData["user-team"]) {
            weeklyComputerRecruiting(team);
        };
    }

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
        for (i = 0; i < numEmptyRosterSpots; i++) {
            var recruitsArray = Object.keys(gameData["recruiting-class"]); // need to recreate array everytime a recruit is deleted from it
            var index = Math.floor(Math.random() * recruitsArray.length);
            gameData["teams"][team]["roster"].push(gameData["recruiting-class"][recruitsArray[index]]);
            console.log(gameData["recruiting-class"][recruitsArray[index]]);
            recruitsArray.splice(index,1);
            delete gameData["recruiting-class"][recruitsArray[index]];
        }
        gameData["teams"][team]["overall-rating"] = gameData["teams"][team]["roster"].reduce((accum,item) => accum + item["rating"], 0) / gameData["teams"][team]["roster"].length;
    }
}

// utilized by setComputerRecruiting *for now* to randomize each school's targets
function shuffleArray(array) {
    var shuffled = array;
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function setComputerRecruiting(){
    for (team in gameData["teams"]) {
        gameData["teams"][team]["recruiting-targets"] = [];
        var recruitsArray = Object.values(gameData["recruiting-class"]);
        gameData["teams"][team]["recruiting-targets"] = shuffleArray(recruitsArray);
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
    setComputerRecruiting();

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

    // STANDINGS PREVIEW
    var standingsPreview = document.createElement("div");
    standingsPreview.id = "standings-preview";
    container.appendChild(standingsPreview);

    var standingsTable = document.createElement("table");
    standingsTable.id = "standings-preview-table";
    standingsPreview.appendChild(standingsTable);

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
    tableHead.appendChild(thName);
    tableHead.appendChild(thGames);
    tableHead.appendChild(thWinPct);
    tableHead.appendChild(thWins);
    tableHead.appendChild(thLosses);
    standingsTable.appendChild(tableHead);

    var teamRow = document.createElement("tr");
    teamRow.classList.add("team-instance");
    
    var tdName = document.createElement("td");
    tdName.classList.add("name");
    tdName.innerHTML = gameData["user-team"];
    
    var tdGames = document.createElement("td");
    tdGames.classList.add("games-played");
    tdGames.innerHTML = gameData["standings"][gameData["user-team"]]["games-played"];
    
    var tdWins = document.createElement("td");
    tdWins.classList.add("wins");
    var wins = gameData["standings"][gameData["user-team"]]["wins"];
    tdWins.innerHTML = wins;
    
    var tdLosses = document.createElement("td");
    tdLosses.classList.add("losses");
    var losses = gameData["standings"][gameData["user-team"]]["losses"];
    tdLosses.innerHTML = losses;
    
    var tdWinPct = document.createElement("td");
    tdWinPct.classList.add("win-pct");
    if (wins + losses > 0) {
        tdWinPct.innerHTML = (wins / (wins + losses)).toFixed(3);
    } else {
        tdWinPct.innerHTML = (0).toFixed(3);
    };

    teamRow.appendChild(tdName);
    teamRow.appendChild(tdGames);
    teamRow.appendChild(tdWinPct);
    teamRow.appendChild(tdWins);
    teamRow.appendChild(tdLosses);
    standingsTable.appendChild(teamRow);

    // RECRUITS PREVIEW
    var recruitsPreview = document.createElement("div");
    recruitsPreview.id = "recruits-preview";
    container.appendChild(recruitsPreview);
    recruitsPreview.innerHTML = "Recruits preview under construction"

    // SCHEDULE PREVIEW
    var schedulePreview = document.createElement("div");
    schedulePreview.id = "schedule-preview";
    container.appendChild(schedulePreview);

    var scheduleTable = document.createElement("table");
    scheduleTable.id = "schedule-preview-table";
    schedulePreview.appendChild(scheduleTable);

    var tableHead = document.createElement("tr");
    var th = document.createElement("th");
    tableHead.appendChild(th);
    for (week = 1; week <= gameData["settings"]["num-games"]; week++) {
        th = document.createElement("th");
        th.innerHTML = "Week " + week;
        tableHead.appendChild(th);
    }
    scheduleTable.appendChild(tableHead);

    var homeTeamRow = document.createElement("tr");
    var awayTeamRow = document.createElement("tr");
    var homeScoreRow = document.createElement("tr");
    var awayScoreRow = document.createElement("tr");
    var tdHomeTeam = document.createElement("td");
    tdHomeTeam.innerHTML = "Home Team";
    var tdAwayTeam = document.createElement("td");
    tdAwayTeam.innerHTML = "Away Team";
    var tdHomeScore = document.createElement("td");
    tdHomeScore.innerHTML = "Home Score";
    var tdAwayScore = document.createElement("td");
    tdAwayScore.innerHTML = "Away Score";
    homeTeamRow.appendChild(tdHomeTeam);
    awayTeamRow.appendChild(tdAwayTeam);
    homeScoreRow.appendChild(tdHomeScore);
    awayScoreRow.appendChild(tdAwayScore);

    for (week = 1; week <= gameData["settings"]["num-games"]; week++) {
        for (match in gameData["schedule"][week]) {
            if (gameData["schedule"][week][match]["home-team"] == gameData["user-team"] || gameData["schedule"][week][match]["away-team"] == gameData["user-team"]) {
                tdHomeTeam = document.createElement("td");
                tdHomeTeam.innerHTML = gameData["schedule"][week][match]["home-team"];
                tdAwayTeam = document.createElement("td");
                tdAwayTeam.innerHTML = gameData["schedule"][week][match]["away-team"];
                // !! scores from match results not added to schedule !!
                tdHomeScore = document.createElement("td");
                // tdHomeScore.innerHTML = gameData["schedule"][week][match]["home-score"];
                tdHomeScore.innerHTML =  "-";
                tdAwayScore = document.createElement("td");
                // tdAwayScore.innerHTML = gameData["schedule"][week][match]["away-team"];
                tdAwayScore.innerHTML = "-";

                homeTeamRow.appendChild(tdHomeTeam);
                awayTeamRow.appendChild(tdAwayTeam);
                homeScoreRow.appendChild(tdHomeScore);
                awayScoreRow.appendChild(tdAwayScore);
            };
        }
    }
    scheduleTable.appendChild(homeTeamRow);
    scheduleTable.appendChild(homeScoreRow);
    scheduleTable.appendChild(awayTeamRow);
    scheduleTable.appendChild(awayScoreRow);
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
    teamToggleSelect.id = "team-toggle-select";
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
function loadRosterPagePlayers(team=null) {
    if (team === null) {
        var teamToggleSelect = document.getElementById("team-toggle-select");
        team = teamToggleSelect.value;
    };

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

    for (week in gameData["schedule"]) {
        var weekHeader = document.createElement("h2");
        weekHeader.classList.add("schedule-week-header");
        weekHeader.innerHTML = "Week " + week;
        container.appendChild(weekHeader);

        var weekTable = document.createElement("table");
        weekTable.classList.add("schedule-week-table");
        container.appendChild(weekTable);

        var tableHead = document.createElement("tr");
        var thHomeTeam = document.createElement("th");
        thHomeTeam.innerHTML = "Home Team";
        var thAwayTeam = document.createElement("th");
        thAwayTeam.innerHTML = "Away Team";
        var thHomeScore = document.createElement("th");
        thHomeScore.innerHTML = "Home Score";
        var thAwayScore = document.createElement("th");
        thAwayScore.innerHTML = "Away Score";
        tableHead.appendChild(thHomeTeam);
        tableHead.appendChild(thAwayTeam);
        tableHead.appendChild(thHomeScore);
        tableHead.appendChild(thAwayScore);
        weekTable.appendChild(tableHead);

        for (match in gameData["schedule"][week]) {
            var matchRow = document.createElement("tr");
            matchRow.classList.add("match-instance");
            
            var tdHomeTeam = document.createElement("td");
            tdHomeTeam.classList.add("home-team");
            tdHomeTeam.innerHTML = gameData["schedule"][week][match]["home-team"];
            
            var tdAwayTeam = document.createElement("td");
            tdAwayTeam.classList.add("home-team");
            tdAwayTeam.innerHTML = gameData["schedule"][week][match]["away-team"];

            // !! scores from match results not added to schedule !!
            var tdHomeScore = document.createElement("td");
            tdHomeScore.classList.add("home-score");
            // tdHomeScore.innerHTML = gameData["schedule"][week][match]["home-score"];
            tdHomeScore.innerHTML =  "-";
            
            var tdAwayScore = document.createElement("td");
            tdAwayScore.classList.add("away-score");
            // tdAwayScore.innerHTML = gameData["schedule"][week][match]["away-team"];
            tdAwayScore.innerHTML = "-";

            matchRow.appendChild(tdHomeTeam);
            matchRow.appendChild(tdAwayTeam);
            matchRow.appendChild(tdHomeScore);
            matchRow.appendChild(tdAwayScore);
            weekTable.appendChild(matchRow);
        }
    }
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
        loadRosterPagePlayers();
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
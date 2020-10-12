//
// Lab 5
//

// Create a script that creates 5 teams of 4 people
// and assigns a unique identifier to each team member.
// The script should display the team number,
// person number, and identifier for that person/team.
// Avoid displaying zeros for a better user experience.
//

var id = 1;

for (var team = 1; team <= 5; team++) {

    for (var person = 1; person <= 4; person++) {

        gs.info('team=' + team + ' person=' + person + ' id=' + id);

        ++id;
    }
}

/*
*** Script: team=1 person=1 id=1
*** Script: team=1 person=2 id=2
*** Script: team=1 person=3 id=3
*** Script: team=1 person=4 id=4
*** Script: team=2 person=1 id=5
*** Script: team=2 person=2 id=6
*** Script: team=2 person=3 id=7
*** Script: team=2 person=4 id=8
*** Script: team=3 person=1 id=9
*** Script: team=3 person=2 id=10
*** Script: team=3 person=3 id=11
*** Script: team=3 person=4 id=12
*** Script: team=4 person=1 id=13
*** Script: team=4 person=2 id=14
*** Script: team=4 person=3 id=15
*** Script: team=4 person=4 id=16
*** Script: team=5 person=1 id=17
*** Script: team=5 person=2 id=18
*** Script: team=5 person=3 id=19
*** Script: team=5 person=4 id=20
*/


// Rosa's code
var k = 1;

for (var i = 1; i <= 5; i++) {

    for (var j = 1; j <= 4; j++) {

        gs.info('Team nr. = ' + i + ' | Person nr. = ' + k + ' | Person/Team = T' + i + 'P' + j);

        k++;
    }
}

/*
*** Script: Team nr. = 1 | Person nr. = 1 | Person/Team = T1P1
*** Script: Team nr. = 1 | Person nr. = 2 | Person/Team = T1P2
*** Script: Team nr. = 1 | Person nr. = 3 | Person/Team = T1P3
*** Script: Team nr. = 1 | Person nr. = 4 | Person/Team = T1P4
*** Script: Team nr. = 2 | Person nr. = 5 | Person/Team = T2P1
*** Script: Team nr. = 2 | Person nr. = 6 | Person/Team = T2P2
*** Script: Team nr. = 2 | Person nr. = 7 | Person/Team = T2P3
*** Script: Team nr. = 2 | Person nr. = 8 | Person/Team = T2P4
*** Script: Team nr. = 3 | Person nr. = 9 | Person/Team = T3P1
*** Script: Team nr. = 3 | Person nr. = 10 | Person/Team = T3P2
*** Script: Team nr. = 3 | Person nr. = 11 | Person/Team = T3P3
*** Script: Team nr. = 3 | Person nr. = 12 | Person/Team = T3P4
*** Script: Team nr. = 4 | Person nr. = 13 | Person/Team = T4P1
*** Script: Team nr. = 4 | Person nr. = 14 | Person/Team = T4P2
*** Script: Team nr. = 4 | Person nr. = 15 | Person/Team = T4P3
*** Script: Team nr. = 4 | Person nr. = 16 | Person/Team = T4P4
*** Script: Team nr. = 5 | Person nr. = 17 | Person/Team = T5P1
*** Script: Team nr. = 5 | Person nr. = 18 | Person/Team = T5P2
*** Script: Team nr. = 5 | Person nr. = 19 | Person/Team = T5P3
*** Script: Team nr. = 5 | Person nr. = 20 | Person/Team = T5P4
*/
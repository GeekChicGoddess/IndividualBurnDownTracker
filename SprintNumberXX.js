// make a copy of this file for each sprint.  My naming convention is SprintNumberXX
// replace the src="SprintNumberXX" to include the script in BurnTracker.html
// Set-up the sprintStart variable with the start date and time of the current sprint (in current SprintNumberXX file)
// set up the estimateTime array with your sprint activities and estimated times
// copy that data into the actualTime and personalTime arrays
// update personalTime array to include things like code reviews you do for other projects and remove items in personalTime that you don't do yourself for your story
// I made the colors something I can specifically designate, so when I add, lets say,  afterHours time, and simul time and no break time for FixingBugs, they can all be the same color as each other and as Fixing bugs listed in estimate/actual time grids so I can easily see how much time total I am spending on that one item
//
 
 
var sprintStart = new Date();
sprintStart.setMonth(10);
sprintStart.setDate(23);
sprintStart.setHours(7); // I start at 7am local, you set your start time to when you normally start
sprintStart.setMinutes(0);
 
 
var estimateTime = [ // this is what you estimate at the beginning of the sprint. Includes time spent by other people to see if project(s) will be on time
  {
    item: "Thanksgiving",
    time: 6,
    color: "#CC99FF"
    },
  {
    item: "techDesign",
    time: 8,
    color: "#6666FF"
    },
  {
    item: "DesignUpdates",
    time: 3,
    color: "#33FFFF"
    },
  {
    item: "CodeBuild",
    time: 13,
    color: "#00FF99"
    },
  {
    item: "ComponentTesting",
    time: 5,
    color: "#CCFF00"
    },
  {
    item: "CodeReview",
    time: 2,
    color: "#FFCC00"
    },
  {
    item: "CRUpdates",
    time: 3,
    color: "#FF9966"
    },
  {
    item: "LeadScenario",
    time: .75,
    color: "#FF6699"
    },
  {
    item: "LSUpdates",
    time: 1,
    color: "#CCCCFF"
    },
  {
    item: "Testing",
    time: 1.75,
    color: "#99FFCC"
    },
  {
    item: "UpdatesAftTst",
    time: 4,
    color: "#FFFF33"
    },
  {
    item: "MOREUpdates",
    time: 1,
    color: "#FFFF33"
    },
  {
    item: "DemoPrep",
    time: 1,
    color: "#74fafd"
    }
  ]
 
var actualTime = [ // this starts the same as estimateTime and gets changes as you go along/
    // when I need to update a time, I add a duplicate line and comment out the original.  This lets me see how often and how much I am updates each item
  {
    item: "Thanksgiving",
    time: 6,
    color: "#CC99FF"
    },
  {
    item: "techDesign",
    time: 8,
    color: "#6666FF"
    },
  {
    item: "DesignUpdates",
    time: 3,
    color: "#33FFFF"
    },
  {
    item: "CodeBuild",
    //      time: 13,
    time: 13.75,
    color: "#00FF99"
    },
  {
    item: "ComponentTesting",
    time: 5,
    color: "#CCFF00"
    },
  {
    item: "CodeReview",
    //      time: 2,
    time: 3,
    color: "#FFCC00"
    },
  {
    item: "CRUpdates",
    //      time: 3,
    time: 3.25,
    color: "#FF9966"
    },
  {
    item: "LeadScenario",
    time: .75,
    color: "#FF6699"
    },
  {
    item: "LSUpdates",
    time: 1,
    color: "#CCCCFF"
    },
  {
    item: "Testing",
    time: 1.75,
    color: "#99FFCC"
    },
  {
    item: "UpdatesAftTst",
    //      time: 4,
    //      time: 5, move some of the time to after hours
    time: 2.75,
    color: "#FFFF33"
    },
  {
    item: "WaitBrianServer",
    time: 1,
    color: "lightblue"
    },
  {
    item: "MOREUpdates",
    //      time: 1,
    //      time: 3,
    time: 4,
    color: "#FFFF33"
    },
  {
    item: "DemoPrep",
    time: 1,
    color: "#74fafd"
    }
  ]
 
 
var personalTime = [ // time you personally spend on your stories and other people's stories
  {
    item: "Thanksgiving",
    time: 6,
    color: "#CC99FF"
    },
  {
    item: "techDesign",
    time: 8,
    color: "#6666FF"
    },
  {
    item: "DesignUpdates",
    time: 3,
    color: "#33FFFF"
    },
  { //    CodeBuild: 13,
    item: "CodeBuild",
    time: 13.75,
    color: "#00FF99"
    },
  {
    item: "ComponentTesting",
    time: 5,
    color: "#CCFF00"
    },
  {
    item: "CodeReview",
    time: 1,
    color: "#FFCC00"
    },
  {
    item: "WaitCodeReview",
    time: 2,
    color: "lightblue"
    },
  {
    item: "CRUpdates",
    //      time: 3,
    time: 3.25,
    color: "#FF9966"
    },
  {
    item: "WaitLS",
    time: .75,
    color: "pink"
    },
  {
    item: "WaitLSU",
    time: 1,
    color: "lightblue"
    },
  {
    item: "WaitPrductTst",
    time: 1.75,
    color: "pink"
    },
  {
    item: "UpdatesAftTst",
    //      time: 4,
    //      time: 5, move some of the time to after hours
    time: 2.75,
    color: "#FFFF33"
    },
  {
    item: "WaitBrianServer",
    time: 1,
    color: "lightblue"
    },
  {
    item: "MOREUpdates",
    //      time: 1,
    //      time: 3,
    time: 4,
    color: "#FFFF33"
    }
  ]
 
var afterHours = [ // time worked in addition to the normal work hours of a day
  {
    day: 5500, // each day is 500 pixels long, so first day of sprint is 0, 3rd is 1000, etc
    hours: {
      UpdatesAftTst: 2.32
    },
    color: "#FFFF33"
    },
  {
    day: 6400,
    hours: {
      //        Example1: 1,
      //        Example2: .75
      WedUpdates: .4
    },
    color: "#FFFF33"
    }
  ]
var simultaneous = [ // time worked by others on your stories at the same time as you are working on your stories
  {
    day: 5500,
    hours: {
      Testing: 2,
    },
    color: "#99FFCC"
    },
  {
    day: 6000,
    hours: {
      StphnTestHlp: 1.5
    },
    color: "#FFFF33"
    }
]
var noBreaks = [ // add additional time if you are not taking a lunch (I usually work through lunch and take a couple long breaks for walks)
//    {
//      day: 5500,
//      hours: {
//        Testing: 2,
//      }
//    },
  {
    day: 6220,
    hours: {
      UpdatesAftTst: .75
    },
    color: "#FFFF33"
    }
  ]
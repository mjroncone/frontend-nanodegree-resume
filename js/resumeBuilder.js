// All hard-coded biographical information
var bio = {
  "name" : "Mike Roncone",
  "role" : "Front End Web Developer",
  "contactInfo" : {
    "mobile" : "630-674-1586",
    "email" : "mjroncone@gmail.com",
    "github" : "mjroncone",
    "linkedIn" : "linkedin.com/in/mjroncone",
    "twitter" : "@MikeRoncone",
    "location" : "Chicago"
  },
  "welcomeMessage" : "Howdy! Welcome to my interactive resume.",
  "skills" : ["HTML, ", "HTML5 Canvas", "CSS, ", "JavaScript, ", "jQuery, ",
              "Git, ", "Github, ", "KnockoutJS, " , "Bootstrap, ",
              "Chrome Developer Tools, ", "Atom IDE, ", "Sublime Text IDE, ",
              "GulpJS, ", "GruntJS, ", "User Interface, ", "User Experience, ",
              "Web Develpment"],
  "bioPic" : "images/face.jpg"
};

// All hard-coded work history information
var work = {
  "jobs" : [
    {
      "title" : "Trader Trainee",
      "employer" : "Liquid Capital Markets",
      "url" : "http://www.liquidcapital.com/",
      "dates" : "December 2014 - Present",
      "location" : "Chicago, Illinois",
      "description" : "<li>Navigated an extremely high pressure environment with great accuracy.</li>" +
                      "<li>Processed, filtered, and propagated inputs from many sources at once out to the team.</li>" +
                      "<li>Reconciled trades and total book day to day in order to keep position accurate and eliminate errors.</li>"
    },
    {
      "title" : "Treasury Options Clerk",
      "employer" : "AHJ & R Brokerage",
      "url" : "http://www.cmegroup.com/",
      "dates" : "April 2013 - December 2014",
      "location" : "Chicago, Illinois",
      "description" : "<li>Aligned customers and brokers by relaying quotes and orders from phones to brokers in pit for execution.</li>" +
                      "<li>Reconciled trades to insure proper filling of orders, fixed errors, sent customer confirmations.</li>" +
                      "<li>Overhauled monthly and daily tracking spreadsheets in Excel to automate repetitive tasks & reduce errors</li>"
    },
    {
      "title" : "Cryptocurrency Market Maker",
      "employer" : "Independent",
      "url" : "https://ripple.com/",
      "dates" : "January 2013 - February 2014",
      "location" : "Chicago, Illinois",
      "description" : "<li>Created bids and offers for Bitcoin (BTC) and Ripple (XRP) against the US dollar based on a combination of synthetic pricing using inter-market spreads, historical volatility, and order flow.</li>" +
                      "<li>Arbitraged inter-exchange spreads due to a lack of emerging market efficiency and the presence of a multitude of independent exchanges.</li>" +
                      "<li>Provided essential liquidity in virtually non-existent markets.</li>"
    },
    {
      "title" : "Client Service Assistant",
      "employer" : "Altair Advisers",
      "url" : "https://www.altairadvisers.com/",
      "dates" : "April 2013 - December 2014",
      "location" : "Chicago, Illinois",
      "description" : "<li>Managed recurring and ad-hoc client projects & automated processes or created templates where possible.</li>" +
                      "<li>Monitored and updated monthly and quarterly performance documents to ensure accuracy and integrity of data.</li>" +
                      "<li>Contributed to forming strategies to organize and utilize a more effective database, automating numerous processes saving time, costs, and creating better client management/engagement.</li>" +
                      "<li>Conducted ad-hoc research and analysis for consultants.</li>"
    },
    {
      "title" : "Shift Supervisor",
      "employer" : "Panera Bread",
      "url" : "https://www.panerabread.com/en-us/home.html",
      "dates" : "August 2008 - January 2012",
      "location" : "Streamwood, Illinois",
      "description" : "<li>Managed labor flows to accommodate for constantly changing needs of the store during shifts.</li>" +
                      "<li>Analyzed labor costs and coordinated schedules to lower variance between needed and actual labor hours.</li>" +
                      "<li>Analyzed food costs and prepared estimates for needed bakery pan-ups/food preparation per day.</li>"
    }
  ]
};

// All hard-coded project information
var projects = {
  "projects" : [
    {
      "title" : "Portfolio Website",
      "url" : "https://github.com/mjroncone/portfolio-website",
      "dates" : "2015",
      "description" : "<li>Programmed a portfolio website with HTML, CSS and the Bootstrap framework.</li>" +
                      "<li>Integrated code and Photoshop template to produce a prototype which became the finished product.</li>",
      "image" : "images/portfolio-website/portfolio-thumb-960-485.png"
    },
    {
      "title" : "Neighborhood Map",
      "url" : "https://mjroncone.github.io/fend-neighborhood-map",
      "dates" : "2015",
      "description" : "<li>Explored the Model-View-ViewModel design pattern via KnockoutJS and AJAX requests via JavaScript.</li>" +
                      "<li>Authored a web app which uses the Google Maps API and Four Square API to map the Lincoln Park neighborhood" +
                        "in Chicago IL complete with map markers for Restaurants and Coffee shops.</li>" +
                      "<li>Identified ways to make map markers searchable, clickable, and also populate in an interactive list view.</li>",
      "image" : "images/neighborhood-map/map-thumb-960-485.png"
    },
    {
      "title" : "Website Performance Optimization",
      "url" : "https://mjroncone.github.io/fend-perf-opt",
      "dates" : "2015",
      "description" : "<li>Optimized a site ensuring a smooth, uninterrupted 60 frames per second user experience.</li>" +
                      "<li>Explored build automation tools to optimize images/code, removed critical rendering path blocks," +
                      " refactored JavaScript to remove forced synchronous layouts, minimized rendering on scroll with layer management.",
      "image" : "images/performance-optimization/perf-thumb-960-485.png"
    },
  ]
};

// All hard-coded education information
var education = {
  "schools" : [
    {
      "name" : "Depaul University",
      "url" : "http://www.depaul.edu/Pages/default.aspx",
      "dates" : "September 2010 - June 2014",
      "degree" : "Bachelors of Science",
      "major" : "Finance",
      "location" : "Chicago, Illinois"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Nanodegree in Front End Web Development",
      "school" : "Udacity",
      "dates" : "June 2015 - August 2015",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

// Biographical formatting & pushing to page
bio.display = function() {
   // first two vars and jQuery calls format and prepend name and role on top
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);


  // next set establishes formatting for contact details and appends to both contact locations (top and bottom)
  var formattedMobile = HTMLmobile.replace('%data%', bio.contactInfo.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contactInfo.email);
  var formattedLinkedIn = HTMLlinkedIn.replace('%data%', bio.contactInfo.linkedIn);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contactInfo.github);
  var formattedTwitter = HTMLtwitter.replace('%data%', bio.contactInfo.twitter);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contactInfo.location);

  var contactElements = [formattedMobile, formattedEmail, formattedLinkedIn,
                        formattedGithub, formattedTwitter, formattedLocation ];

  for (var index = 0; index < contactElements.length; index++) {
    $('#topContacts').append(contactElements[index]);
    $('#footerContacts').append(contactElements[index]);
  }

  // last set appends the rest of the "header" information after contactdetails
  var formattedPicture = HTMLbioPic.replace('%data%', bio.bioPic);
  var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

  $('#header').append(formattedPicture);
  $('#header').append(formattedWelcome);

  // formats and appends the skillset one by one
  $('#header').append(HTMLskillsStart);

  for (var skill = 0; skill < bio.skills.length; skill++) {
    var formattedSkills = HTMLskills.replace('%data%', bio.skills[skill]);

    $('#skills').append(formattedSkills);
  }

};

// Work experience formatting and pushing to page
work.display = function() {
  for (var job in work.jobs) {
    if (work.jobs[job] !== 0) {
      // opens a div to contain all work info
      $('#workExperience').append(HTMLworkStart);

      // Format and concatenate Employer and title
      var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
      formattedEmployerTitle = formattedEmployerTitle.replace('#', work.jobs[job].url);

      $('.work-entry:last').append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);

      $('.work-entry:last').append(formattedDates);
      $('.work-entry:last').append(formattedLocation);
      $('.work-entry:last').append(formattedDescription);
    }
  }
};

// Projects formatting and pushing to page
projects.display = function() {
  for (var project in projects.projects) {
  	if (projects.projects[project] !== 0) {
      // opens a div to contain all project info
      $('#projects').append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
      formattedTitle = formattedTitle.replace('#', projects.projects[project].url);
      var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
      var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].image);

      $('.project-entry:last').append(formattedTitle);
      $('.project-entry:last').append(formattedDates);
      $('.project-entry:last').append(formattedDescription);
      $('.project-entry:last').append(formattedImage);
    }
  }
};

// Function declaration for education formatting and pushing to page
education.display = function() {
  // opens a div to contain official school info
  $('#education').append(HTMLschoolStart);

  for (var school in education.schools) {
    if (education.schools[school] !== 0) {
      var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
      formattedName = formattedName.replace('#', education.schools[school].url);
      var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
      formattedNameDegree = formattedName + " " + formattedDegree;
      var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
      var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
      var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);

      $('.education-entry:last').append(formattedLocation);
      $('.education-entry:last').append(formattedNameDegree);
      $('.education-entry:last').append(formattedDates);
      $('.education-entry:last').append(formattedMajor);
    }
  }

  // opens a new div specifically for online classes
  $("#education").append(HTMLonlineClassStart);

  for (var course in education.onlineCourses) {
    if (education.onlineCourses[course] !== 0) {
      var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
      formattedTitle = formattedTitle.replace('#', education.onlineCourses[course].url);
      var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
      var formattedTitleSchool = formattedTitle + " " + formattedSchool;
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
      var formattedURLText = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
      var formattedURL = formattedURLText.replace('#', education.onlineCourses[course].url)

      $('.online-entry:last').append(formattedTitleSchool);
      $('.online-entry:last').append(formattedOnlineDates);
      $('.online-entry:last').append(formattedURL);
  	}
  }
};

// google map integration
$('#mapDiv').append(googleMap);


/*
Internationalize button just in case

function inName() {
  var name = bio.name.split(" ");

  intlName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() +
            " " + name[1].toUpperCase();

  return intlName;
};
*/


// All four functions are called in one after the other to assemble the page.
bio.display();
work.display();
projects.display();
education.display();

// Click location identifier (at the bottom because it runs live)
$(document).click(function(loc) {
  logClicks(event.pageX, event.pageY);
});

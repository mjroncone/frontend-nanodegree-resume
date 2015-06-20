// All hard-coded biographical information
var bio = {
   "name" : "Mike Roncone",
   "role" : "Front End Web Developer in Progress",
   "contactInfo" : {
      "mobile" : "630-674-1586",
      "email" : "mjroncone@gmail.com",
      "github" : "https://github.com/mjroncone",
      "twitter" : "https://twitter.com/MikeRoncone",
      "location" : "Chicago"
   },
   "bioPic" : "images/face.jpg",
   "welcomeMessage" : "Howdy! Welcome to my interactive resume.",
   "skills" : ["HTML", " CSS", " JavaScript", " jQuery"]
}

// All hard-coded work history information
var work = {
   "jobs" : [
      {
         "workTitle" : "Trader Trainee",
         "workEmployer" : "Liquid Capital Markets",
         "workDates" : "December 2014 - Present",
         "workLocation" : "Chicago, Illinois",
         "workDescription" : "Filter any information relevant to the desk and ensure all traders have been informed quickly and accurately. Reconcile Profit and Loss prints while traders adjust our pricing models. Act with extreme accuracy in a high pressure environment while processing inputs from many sources at once. Recognize and follow pricing trends over numerous different product expirations in terms of both intraday and macro order flow to assess the level of risk associated with different terms."
      },
      {
         "workTitle" : "Treasury Options Clerk",
         "workEmployer" : "AHJ & R Brokerage",
         "workDates" : "April 2013 - December 2014",
         "workLocation" : "Chicago, Illinois",
         "workDescription" : "Relayed quotes and orders from customers over the phone to brokers in the pit for execution. Reconciled trades to insure proper filling of brokerage orders, reconciled out trades, sent customer fill alerts, and delivered order tickets to customer representatives on the floor. Learned options theories to aid in the understanding, checking, and execution of trades. Redesigned monthly and daily tracking Excel spreadsheets to automate repetitive tasks & reduce errors"
      },
      {
         "workTitle" : "Cryptocurrency Market Maker",
         "workEmployer" : "Inependent",
         "workDates" : "January 2013 - February 2014",
         "workLocation" : "Chicago, Illinois",
         "workDescription" : "Created bids and offers for Bitcoin (BTC) and Ripple (XRP) against the US dollar based on a combination of synthetic pricing using inter-market spreads, historical volatility, and order flow. Arbitraged inter-exchange spreads due to a lack of emerging market efficiency and the presence of a multitude of independent exchanges. Provided essential liquidity in virtually non-existent markets."
      },
      {
         "workTitle" : "Client Service Assistant",
         "workEmployer" : "Altair Advisers",
         "workDates" : "April 2013 - December 2014",
         "workLocation" : "Chicago, Illinois",
         "workDescription" : "Managed recurring and ad-hoc client projects & automated processes or created templates where possible. Monitored and updated monthly and quarterly performance documents to ensure accuracy and integrity of data. Helped form strategies to organize and utilize a more effective database, automating numerous processes saving time, costs, and creating better client management/engagement. Sharpened Microsoft Excel skills, learning numerous new functions in order to speed up processing time. Conducted ad-hoc research and analysis for consultants."
      },
      {
         "workTitle" : "Shift Supervisor",
         "workEmployer" : "Panera Bread",
         "workDates" : "August 2008 - January 2012",
         "workLocation" : "Schaumburg, Illinois",
         "workDescription" : "Managed labor flows to accommodate for constantly changing needs of the store during shifts. Analyzed labor costs and coordinated schedules to lower variance between needed and actual labor hours. Analyzed food costs and prepared estimates for needed bakery pan-ups/food preparation per day."
      }
   ]
}

// All hard-coded project information
var projects = {
   "projects" : [
      {
         "projectTitle" : "Portfolio Website",
         "projectDates" : "2015",
         "projectDescription" : "Built anonline portfolio using HTML, CSS, and some javascript.",
         "projectImage" : "images/gwscompass.svg"
      }
   ]
}

// All hard-coded education information
var education = {
   "schools" : [
      {
      "schoolName" : "Depaul University",
      "schoolDates" : "September 2010 - June 2014",
      "schoolDegree" : "Bachelors of Science",
      "schoolMajor" : "Finance",
      "schoolLocation" : "Chicago, Illinois"
   }
],
   "onlineClasses" : [
      {
      "onlineTitle" : "Nanodegree in Front End Web Development",
      "onlineSchool" : "Udacity",
      "onlineDates" : "June 2015 - July 2015",
      "onlineURL" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
   }
]
}

// Biographical formatting & pushing to page
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var formattedMobile = HTMLmobile.replace('%data%', bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contactInfo.email);
var formattedGithub = HTMLgithub.replace('%data%', bio.contactInfo.github);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contactInfo.twitter);
var formattedLocation = HTMLlocation.replace('%data%', bio.contactInfo.location);

$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formattedTwitter);
$('#topContacts').append(formattedLocation);

var formattedPicture = HTMLbioPic.replace('%data%', bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
var formattedSkills = HTMLskills.replace('%data%', bio.skills);

$('#header').append(formattedWelcome);
$('#header').append(formattedPicture);
$('#header').append(HTMLskillsStart);
$('#header').append(formattedSkills);

// Work experience formatting and pushing to page
work.display = function() {
   for (job in work.jobs) {
      $('#workExperience').append(HTMLworkStart);

      // Format and concatenate Employer and title
      var formattedWorkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].workEmployer);
      var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].workTitle);
      var formattedEmployerTitle = formattedWorkEmployer + " " + formattedWorkTitle

      $('.work-entry:last').append(formattedEmployerTitle);

      var formattedWorkDates = HTMLworkDates.replace('%data%',work.jobs[job].workDates);
      var formattedWorkLocation = HTMLworkLocation.replace('%data%',work.jobs[job].workLocation);
      var formattedWorkDescription = HTMLworkDescription.replace('%data%',work.jobs[job].workDescription);

      $('.work-entry:last').append(formattedWorkDates);
      $('.work-entry:last').append(formattedWorkLocation);
      $('.work-entry:last').append(formattedWorkDescription);
   }
}

work.display();

// Projects formatting and pushing to page
projects.display = function() {
   for (project in projects.projects) {
      $('#projects').append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].projectTitle);
      var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].projectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].projectDescription);
      var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].projectImage);

      $('.project-entry:last').append(formattedProjectTitle);
      $('.project-entry:last').append(formattedProjectDates);
      $('.project-entry:last').append(formattedProjectDescription);
      $('.project-entry:last').append(formattedProjectImage);
   }
}

projects.display();

// Education formatting and pushing to page

education.display = function() {
   $('#education').append(HTMLschoolStart);

   for (school in education.schools) {
      var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].schoolName);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].schoolDates);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].schoolDegree);
      var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].schoolMajor);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].schoolLocation);

      $('.education-entry:last').append(formattedSchoolName);
      $('.education-entry:last').append(formattedSchoolDates);
      $('.education-entry:last').append(formattedSchoolDegree);
      $('.education-entry:last').append(formattedSchoolMajor);
      $('.education-entry:last').append(formattedSchoolLocation);
   }

   // $('#education').append(HTMLonlineClasses);
   $("#education").append(HTMLonlineClassStart);

   $(".online-entry").append(HTMLonlineClasses);

   for (course in education.onlineClasses) {
      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineClasses[course].onlineTitle);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineClasses[course].onlineSchool);
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineClasses[course].onlineDates);
      var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineClasses[course].onlineURL);

      $('.online-entry').append(formattedOnlineTitle);
      $('.online-entry').append(formattedOnlineSchool);
      $('.online-entry').append(formattedOnlineDates);
      $('.online-entry').append(formattedOnlineURL);
   }
}

education.display();

// Click location identifier
$(document).click(function(loc) {
   logClicks(event.pageX, event.pageY);
});

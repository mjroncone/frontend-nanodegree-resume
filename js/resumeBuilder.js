// All hard-coded biographical information
var bio = {
   "name" : "Mike Roncone",
   "role" : "Front End Web Developer in Progress",
   "contactInfo" : {
      "mobile" : "630-674-1586",
      "email" : "mjroncone@gmail.com",
      "github" : "https://github.com/mjroncone",
      "linkedIn" : "https://www.linkedin.com/in/mjroncone",
      "twitter" : "https://twitter.com/MikeRoncone",
      "location" : "Chicago"
   },
   "welcomeMessage" : "Howdy! Welcome to my interactive resume.",
   "skills" : ["HTML", " CSS", " JavaScript", " jQuery"],
   "bioPic" : "images/face.jpg",
}

// All hard-coded work history information
var work = {
   "jobs" : [
      {
         "title" : "Trader Trainee",
         "employer" : "Liquid Capital Markets",
         "url" : "http://www.liquidcapital.com/",
         "dates" : "December 2014 - Present",
         "location" : "Chicago, Illinois",
         "description" : "Filter any information relevant to the desk and ensure all traders have been informed quickly and accurately. Reconcile Profit and Loss prints while traders adjust our pricing models. Act with extreme accuracy in a high pressure environment while processing inputs from many sources at once. Recognize and follow pricing trends over numerous different product expirations in terms of both intraday and macro order flow to assess the level of risk associated with different terms."
      },
      {
         "title" : "Treasury Options Clerk",
         "employer" : "AHJ & R Brokerage",
         "url" : "http://www.cmegroup.com/",
         "dates" : "April 2013 - December 2014",
         "location" : "Chicago, Illinois",
         "description" : "Relayed quotes and orders from customers over the phone to brokers in the pit for execution. Reconciled trades to insure proper filling of brokerage orders, reconciled out trades, sent customer fill alerts, and delivered order tickets to customer representatives on the floor. Learned options theories to aid in the understanding, checking, and execution of trades. Redesigned monthly and daily tracking Excel spreadsheets to automate repetitive tasks & reduce errors"
      },
      {
         "title" : "Cryptocurrency Market Maker",
         "employer" : "Inependent",
         "url" : "https://ripple.com/",
         "dates" : "January 2013 - February 2014",
         "location" : "Chicago, Illinois",
         "description" : "Created bids and offers for Bitcoin (BTC) and Ripple (XRP) against the US dollar based on a combination of synthetic pricing using inter-market spreads, historical volatility, and order flow. Arbitraged inter-exchange spreads due to a lack of emerging market efficiency and the presence of a multitude of independent exchanges. Provided essential liquidity in virtually non-existent markets."
      },
      {
         "title" : "Client Service Assistant",
         "employer" : "Altair Advisers",
         "url" : "https://www.altairadvisers.com/",
         "dates" : "April 2013 - December 2014",
         "location" : "Chicago, Illinois",
         "description" : "Managed recurring and ad-hoc client projects & automated processes or created templates where possible. Monitored and updated monthly and quarterly performance documents to ensure accuracy and integrity of data. Helped form strategies to organize and utilize a more effective database, automating numerous processes saving time, costs, and creating better client management/engagement. Sharpened Microsoft Excel skills, learning numerous new functions in order to speed up processing time. Conducted ad-hoc research and analysis for consultants."
      },
      {
         "title" : "Shift Supervisor",
         "employer" : "Panera Bread",
         "url" : "https://www.panerabread.com/en-us/home.html",
         "dates" : "August 2008 - January 2012",
         "location" : "Streamwood, Illinois",
         "description" : "Managed labor flows to accommodate for constantly changing needs of the store during shifts. Analyzed labor costs and coordinated schedules to lower variance between needed and actual labor hours. Analyzed food costs and prepared estimates for needed bakery pan-ups/food preparation per day."
      }
   ]
}

// All hard-coded project information
var projects = {
   "projects" : [
      {
         "title" : "Portfolio Website",
         "url" : "https://github.com/mjroncone/portfolio-website",
         "dates" : "2015",
         "description" : "Built anonline portfolio using HTML, CSS, and some javascript.",
         "image" : "images/gwscompass.svg"
      }
   ]
}

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
      "dates" : "June 2015 - July 2015",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
   }
]
}

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
   var formattedSkills = HTMLskills.replace('%data%', bio.skills);

   var subHeadElements = [formattedWelcome, formattedPicture, HTMLskillsStart, formattedSkills];

   for (var index = 0; index < subHeadElements.length; index++) {
      $('#header').append(subHeadElements[index]);
   }

}

// Work experience formatting and pushing to page
work.display = function() {
   for (job in work.jobs) {
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

// Projects formatting and pushing to page
projects.display = function() {
   for (project in projects.projects) {
      // opens a div to contain all project info
      $('#projects').append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
      var formattedTitle = formattedTitle.replace('#', projects.projects[project].url);
      var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
      var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].image);

      $('.project-entry:last').append(formattedTitle);
      $('.project-entry:last').append(formattedDates);
      $('.project-entry:last').append(formattedDescription);
      $('.project-entry:last').append(formattedImage);
   }
}

// Function declaration for education formatting and pushing to page
education.display = function() {
   // opens a div to contain official school info
   $('#education').append(HTMLschoolStart);

   for (school in education.schools) {
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

   // opens a new div specifically for online classes
   $("#education").append(HTMLonlineClassStart);

   for (course in education.onlineCourses) {
      var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
      formattedTitle = formattedTitle.replace('#', education.onlineCourses[course].url);
      var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
      var formattedTitleSchool = formattedTitle + " " + formattedSchool;
      var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
      var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);

      $('.online-entry:last').append(formattedTitleSchool);
      $('.online-entry:last').append(formattedDates);
      $('.online-entry:last').append(formattedURL);
   }
}

// google map integration
$('#mapDiv').append(googleMap);


// Internationalize button just in case
//function inName() {
//   var name = bio.name.split(" ");
//
//   intlName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase()
//      + " " + name[1].toUpperCase();
//
//   return intlName;
//}


// All four functions are called in one after the other to assemble the page.
bio.display();
work.display();
projects.display();
education.display();

// Click location identifier (at the bottom because it runs live)
$(document).click(function(loc) {
   logClicks(event.pageX, event.pageY);
});

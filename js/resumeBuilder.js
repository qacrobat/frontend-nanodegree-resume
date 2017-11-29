/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "David"
 var role = "QA Engineer"
 var formattedName = HTMLheaderName.replace("%data%", name)
 var formattedRole = HTMLheaderRole.replace("%data%", role)

 var bio = {
   "name" : "David Braun",
   "role" : "QA Engineer",
   "contacts" : {
     "mobile" : "+49345398349",
     "email"  : "david.braun@immonet.de",
     "github" : "johndoe",
     "location" : "Hamburg"
   },
   "welcomeMessage" : "I am awesome",
   "skills" : [
     "awesomness", "delivering things", "saving the universe"
   ],
   "bioPic" : "images/fry.jpg"
 }

 var education = {
   "schools" : [
     {
       "name" : "August-Bebel-Schule",
       "city" : "Zschopau"
     },
     {
       "name" : "Berufschule",
       "city" : "Zschopau"
     }
   ],
    "onlineCourses" : [
      {
        "title" : "Javascript Crash Course",
        "school" : "Udacity",
        "dates" : "2014"
      }
   ]
 }

 var work = {
   "jobs" : [
     {
       "employer" : "wlw",
       "title" : "QA",
       "dates" : "January",
       "description" : "This is a description"
     },
     {
       "employer" : "IW",
       "title" : "QA",
       "dates" : "December",
       "description" : "This is another description"
     }
   ]
 }

 var projects = {
   "projects" : [
     {
       "title" : "Sample Project I",
       "dates" : "2014",
       "description" : "This is a description for the project",
       "images" : [
           "URL",
           "URL"
       ]
     }
   ]
 }

 $("#header").append(formattedName, formattedRole);

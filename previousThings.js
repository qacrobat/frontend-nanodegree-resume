var awesomeThoughts = "I am David and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
var email = "david.braun@immonet.de";
var newEmail = email.replace("immonet", "gmail");
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

var education_json = {
  "schools" : [
    {
      "name" : "August-Bebel-Schule",
      "stadt" : "Zschopau:"
    },
    {
      "name" : "Berufschule",
      "stadt" : "Zschopau"
    }
  ]
}

var work = {};

work.position = "QA Engineer";
work.employer =  "Immowelt Hamburg GmbH";

var education = {};

education.name = "Neisse University";
education.year = 2009;

console.log(awesomeThoughts);
console.log(funThoughts);

$("#main").append(work.position + "attended" + education["name"]);

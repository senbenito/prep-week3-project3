/*
=======================================================

** Week 6 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Create an object called "me" that describes you with your name, city, and job title.
//    Display the content of the object in the HTML page.

var me = {
  firstName: 'Shannon',
  lastName: 'Rivers',
  city: 'Boulder',
  jobTitle: 'dad',
};

document.getElementById('q1').innerHTML = "Here's me: "
+ me.firstName + ', '
+ me.lastName + ', '
+ me.city + ', '
+ me.jobTitle;

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members and display in the HTML page.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

me.family = ['Rachel', 'Caleb', 'Leonard'];
document.getElementById('q2').innerHTML = "Here's us: "
+ me.firstName + ', '
+ me.lastName + ', '
+ me.city + ', '
+ me.jobTitle + ', '
+ me.family.join(', ');

// 3. Using the "me" object, use dot notation and bracket notation to access the value of your city and display the results in the HTML page.

document.getElementById('q3a').innerHTML = me.city;
document.getElementById('q3b').innerHTML = me['city'];






// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };


// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)
document.getElementById('q4').innerHTML = 'This is Penny\'s dinner choice: ' + invitees.adults[0].dinnerChoice[1];

// 5. Access Pablo's table number.
document.getElementById('q5').innerHTML = 'This is Pablo\'s table number: ' + invitees.children[1].table;

// 6. Access Lauren's seating specialConsideration.
document.getElementById('q6').innerHTML = 'This is Lauren\'s special seating consideration: ' + invitees.adults[2].specialConsiderations.seating;
// document.getElementById('q6').innerHTML = 'This is Lauren\'s special seating consideration: ' + invitees.adults[name['Lauren']].specialConsiderations.seating;


// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)
document.getElementById('q7').innerHTML = 'This is Billy\'s dessert choice: ' + invitees.adults[1].dinnerChoice[2];


// 8. Access Ada's allergies.
document.getElementById('q8').innerHTML = 'This is Ada\'s allergy: ' + invitees.children[2].allergies;


// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."
document.getElementById('q9').innerHTML = `Lauren's appetizer is ${invitees.adults[2].dinnerChoice[0]}. She will be eating ${invitees.adults[2].dinnerChoice[1]} for dinner
and has selected ${invitees.adults[2].dinnerChoice[2]} as her dessert.`






// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
var jsWorkshop = {};
document.getElementById('q10').innerHTML = `var jsWorkshop = {};`


// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
jsWorkshop.classmates = ['Peter', 'Paul', 'Mary', 'Jesus', 'Judas'];
// jsWorkshop['classmates'] = ['Peter', 'Paul', 'Mary', 'Jesus', 'Judas'];
document.getElementById('q11').innerHTML = `These are my classmates: ${jsWorkshop.classmates.join(', ')}`;


// 12. Get the length of the fourth classmate's name.
document.getElementById('q12').innerHTML = `My fourth classmate\'s name, ${jsWorkshop.classmates[3]}, is ${jsWorkshop.classmates[3].length} characters long.`;


// 13. Clear the classmates value.

jsWorkshop.classmates = [];
document.getElementById('q13').innerHTML = `These are my classmates now: ${jsWorkshop.classmates}`;





// ADVANCED TRACK
// A. Create an empty object called "books".
var books = {};
document.getElementById('qa').innerHTML = `var books = {};`;

// B. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" object.
books.ISBN22222 = {
  title: "You Had Me at Woof",
  author: "Julie Klum",
  pages: 207
}

books.ISBN33333 = {
  title: "The Catcher in the Rye",
  author: "JD Salinger",
  pages: 214
}

books.ISBN44444 =  {
  title: "Bangkok Haunts",
  author: "John Burdett",
  pages: 569,
}
document.getElementById('qb').innerHTML = `These are the books: ${Object.keys(books).join(', ')}`;

// Final desired result:
    // var books = {ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             }

// C. Access the author of the first book.
// document.getElementById('qc').innerHTML = `This is the author of the third book, ${Object.valueOf(books[0])}: ${books[0].author}`
document.getElementById('qc').innerHTML = `This is the author of the third book: ${books.ISBN22222.author}.`;

// D. Get the length of the author the the third book.
document.getElementById('qd').innerHTML = `This is how many characters long the author of the third book\'s name is: ${books.ISBN44444.author.length}.`;

// E. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)
books.ISBN22222.dateRead = 'October 14, 1983';
books.ISBN33333.dateRead = 'December 5, 1994';
books.ISBN44444.dateRead = 'January 22, 2017';

document.getElementById('qe').innerHTML = `This is the date I read the second book: ${books.ISBN33333.dateRead}.`


// F. Remove the second book from the books object.

delete books.ISBN33333;
document.getElementById('qf').innerHTML = `These are the books now: ${Object.keys(books).join(', ')}`;

// G. Explain, in your own words, the difference between Literal Notation and Constructor Notation.
document.getElementById('qg').innerHTML = 'Literal Notation declares the object key-value pairs with in the initial declaration brackets. Constructor Notation adds key-value pairs to an object that is declared empty, letting you customize once you know what you want.'

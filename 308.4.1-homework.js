// Jacqueline LaFontaine
// Homework Assignment for: 308.4.1
// https://www.canva.com/design/DAFxumk-vR0/VYKb17-6iKqVOD5NOVsidA/edit

// I tend to make a lot of comments as I code to make sure I understand what I am doing at each step
// so please be prepared for many many MANY comments as I'm learning 

// ✨ PART 1: Refactoring Old Code (starting fresh for reference, will go back to the earlier lab at a later time)

// storing the CSV data in a string
const originalCSV = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// creating a rows variable to split the string at the delimiter "\n"
// splitting the string converts it into an array
let rows = originalCSV.split("\n");
// console.log(rows);
// verifying it's splitting correctly, printing out each row separately 
// console.log(rows[0], rows[1], rows[2], rows[3], rows[4]);

// to have a visual of what rows looks like:

[ "ID,Name,Occupation,Age",
  "42,Bruce,Knight,41",
  "57,Bob,Fry Cook,19",
  "63,Blaine,Quiz Master,58",
  "98,Bill,Doctor’s Assistant,26" ];

// ✨ PART 2: EXPANDING FUNCTIONALITY

// creating a variable to find out the number of columns per row 
const numberOfColumns = rows[0].split(",").length; // checking from the titles row (ie. ID, Name, Occupation, Age)
console.log(numberOfColumns); // logs as 4 so I know there is 4 elements in each row when it splits
// the variable numberOfColumns output will also change if someone adds more data to the titles (ie. Favorite Color, Height, etc.)

// visual of what the title column looks like: 

["ID", "Name", "Occupation", "Age"];

// reassigning colArr to an empty array to be able to push() an array into it later?
let colArr = [];
console.log(`this is what an empty array looks like: ${colArr}`); // logs as empty

// trying again since I know I want to make a 2D array so I'll declare and assign one here
const csvTable = [];

// now that each row is split I can loop through the rows to split them again at ","
// starting at index [0], end at 5 bc of 5 rows, then increment onto the next row once it is split
for (let i = 0; i < rows.length; i++) {
   // new variable for columns
   // starting at i (which is set to 0 index), loop through each row and split at "," 
   // the i in row gets the position of each row in the array
  let colArr = rows[i].split(",");
//   console.log(colArr);
  // testing to see if I can index through cols
 // console.log(`This is the data store at index 2 of the colArr: ${colArr[2]}.`)
 // the log below checks that each row has the correct column (ie. index 0 is all the titles of the table)
    console.log(`This is row ${i}:`, colArr);

    // I want to push each row array into my csvTable empty array
    // to do that I can use the push() function
    // so I grab the empty array and use the .push method
    // my csvTable is a method I created so I start with it
    // and I am pushing the new colArr into the table for everytime it splits at "," in the for loop
    csvTable.push(colArr);

}

// To check if I have a 2d array, I am going to console log it out
console.log(csvTable);

// Now that I know it works, I am going to store the 2D array into a variable
let twoDimensionalTable = csvTable;
console.log(twoDimensionalTable); // checking I've stored the variable correctly
// I want to log out the name "Blaine" to make sure it is working
console.log(`${twoDimensionalTable[3][1]} is the absolute best at Marvel Rivals!`);
// had to get a little silly with it and to see if I could index data in the 2D array correctly

// visual representation of my two dimensional array: 

[ ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"] ];

// PART 3: Transforming Data

// convert each array of data into an object per person basically
// and have the titles be the keys for each value
// ie. { id: "42", name: "Bruce", occupation: "Knight", age: "41" }

// separating the titles into a variable since I know I want these titles to be my keys
let titles = twoDimensionalTable[0];
// console.log(titles); // making sure I'm only grabbing the titles with this variable

// creating a new EMPTY array to hold the objects
const tableAsObjects = [];

    // starting at index 1 to skip the header row, loop only through the data arrays, i++ means going row by row
for (let i = 1; i < twoDimensionalTable.length; i++) {
    let currentRow = twoDimensionalTable[i]; //starts at 1
    // setting a variable to create a new object for each row it loops through
    let rowAsObject = {};


    
}

// me testing something from MDN
// let objData = Object.fromEntries(twoDimensionalTable);
// console.log(objData);



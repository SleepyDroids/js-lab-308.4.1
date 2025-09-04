// Jacqueline LaFontaine
// Homework Assignment for: 308.4.1
// https://www.canva.com/design/DAFxumk-vR0/VYKb17-6iKqVOD5NOVsidA/edit

// I tend to make a lot of comments as I code to make sure I understand what I am doing at each step
// so please be prepared for many many comments as I'm learning 

// PART 1: Refactoring Old Code (starting fresh for reference, will go back to the earlier lab at a later time)

// storing the CSV data in a string
const originalCSV = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// creating a rows variable to split the string at the delimiter "\n"
// splitting the string converts it into an array
const rows = originalCSV.split("\n");
// verifying it's splitting correctly, printing out each row separately 
// console.log(rows[0], rows[1], rows[2], rows[3], rows[4]);

// to have a visual of what rows looks like:

[ "ID,Name,Occupation,Age",
  "42,Bruce,Knight,41",
  "57,Bob,Fry Cook,19",
  "63,Blaine,Quiz Master,58",
  "98,Bill,Doctor’s Assistant,26" ]

// PART 2: EXPANDING FUNCTIONALITY

// creating a variable to find out the number of columns per row 
const numberOfColumns = rows[0].split(",").length; // checking from the titles row (ie. ID, Name, Occupation, Age)
console.log(numberOfColumns); // logs as 4 so I know there is 4 elements in each row when it splits
// the variable numberOfColumns output will also change if someone adds more data to the titles

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
    console.log(`This is row ${i}:`, colArr);

}



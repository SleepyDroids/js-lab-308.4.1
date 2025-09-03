// Jacqueline LaFontaine
// Homework Assignment for: 308.4.1
// https://www.canva.com/design/DAFxumk-vR0/VYKb17-6iKqVOD5NOVsidA/edit

// I tend to make a lot of comments as I code to make sure I understand what I am doing at each step
// so please be prepared for many many comments as I'm learning 

// Part 1: Refactoring Old Code (starting fresh for reference, will go back to the earlier lab at a later time)

// storing the CSV data in a string
let originalCSV = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// creating a rows variable to split the string at the delimiter "\n"
// splitting the string converts it into an array
let rows = originalCSV.split("\n");
// verifying it's splitting correctly
console.log(rows);

// now that each row is split I can loop through the rows to split them again at ","
// starting at index [0], end at 5 bc of 5 rows, then increment onto the next row once it is split
for (let i = 0; i < rows.length; i++) {
   // new variable for columns
   // starting at i (which is set to 0 index), loop through each row and split at "," 
   // the i in row get the position of each row in the array
  let cols = rows[i].split(",");
  console.log(cols);
}

// for (i = 0; i < originalCSV.length; i++) {
//     // logging out the entire index for the string
//     // console.log(i);
//     let cell = [""];

//     // cell.push(rows);
//     // console.log(rows);
// }
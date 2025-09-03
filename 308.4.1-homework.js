// Jacqueline LaFontaine
// Homework Assignment for: 308.4.1
// https://www.canva.com/design/DAFxumk-vR0/VYKb17-6iKqVOD5NOVsidA/edit

// Part 1: Refactoring Old Code

// storing the CSV data in a string
let originalCSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// creating a rows variable to split the string at the delimiter \n
// let rows = originalCSV.split("\n");
// // verifying it's splitting correctly
// console.log(rows);

// Loop through the characters of a given CSV string

for (i = 0; i < originalCSV.length; i++) {
    // logging out the entire index for the string
    console.log(i);
}
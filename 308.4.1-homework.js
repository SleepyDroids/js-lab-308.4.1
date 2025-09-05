// Jacqueline LaFontaine
// Homework Assignment for: 308.4.1
// https://www.canva.com/design/DAFxumk-vR0/VYKb17-6iKqVOD5NOVsidA/edit

// I tend to make a lot of comments as I code to make sure I understand what I am doing at each step aka rubber duck debugging
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
// console.log(`${twoDimensionalTable[3][1]} is the absolute best at Marvel Rivals!`);
// had to get a little silly with it and to see if I could index data in the 2D array correctly

// visual representation of my two dimensional array: 

[ ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"] ];

// ✨ PART 3: Transforming Data

// convert each array of data into an object per person basically
// and have the titles be the keys for each value
// ie. { id: "42", name: "Bruce", occupation: "Knight", age: "41" }

// separating the titles into a variable since I know I want these titles to be my keys
let titles = twoDimensionalTable[0];
// console.log(titles); // making sure I'm only grabbing the titles with this variable

// creating a new EMPTY array to hold the objects once they're converted
const tableAsObjects = [];

    // starting at index 1 to skip the header row, loop only through the row arrays, i++ means going row by row
for (let i = 1; i < twoDimensionalTable.length; i++) {
    let currentRow = twoDimensionalTable[i]; //starts at 1
    // setting a variable to create a new object for each row it loops through
    let rowAsObject = {};

    // now I think I need to go through the columns so a new inner loop ?? 
    for (let j = 0; j < titles.length; j++) {
        // title[j] refers to the titles for reach column so it is my KEYs name (pulls from my titles variable since it's an array)
        // currentRow[j] refers to the value of each column (all the data after the titles)
        // setting up the titles as keys and the rows [each array] as values
        // console.log(currentRow[j]);
        rowAsObject[titles[j]] = currentRow[j];
        // making sure it's grabbing only the data and not the titles
        // console.log(rowAsObject[titles[j]]);
        // to clarify the for loop is iterating through each header and each row
        // so it makes each object one piece at at time (ie. at the start it is {ID: "42"} and then {ID: "42", Name: "Bruce"} etc.)
        // it is printing out each key (the titles) and pairing it with the value
        // then I think once one full NEW object is printed it goes back to the outer loop
        // which is then creating a new object for the new row of data and repeating the process over again
    }

    // i need to add the objects to the array I defined earlier 
    // use the push() method since tableAsObjects is an array
    // I pass the rowAsObjects from the outer loop as an argument since each object should be printed at this point bc of the inner loop
    // and this is the final step of the outer loop once the inner loop is completely done going through the .length
    // and therefore registerting as false
    tableAsObjects.push(rowAsObject);

}

console.log(tableAsObjects);
// friendly reminder to myself that tableAsObjects in an array filled with objects

// ✨ PART 4: Sorting and Manipulating Data

// Remove the last element from the sorted array
// pop() removes an element at the end of an array so it should remove an entire object
// in this case I need to Kill Bill (don't sue me Tarantino)
let killBill = tableAsObjects.pop();
console.log(killBill);

// verifying I've killed Bill 
// console.log(tableAsObjects);

// Insert the following at index 1: { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// using splice() to add the new object at index 1, indicated by 1, 0 (nothing to be deleted), {object to be added goes here} inside the splice() method
tableAsObjects.splice(1, 0, { ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" });

// console.log(tableAsObjects);

// Add the following object to the end of the array: { id: "7", name: "Bilbo", occupation: "None", age: "111" }
let backToTheShire = { ID: "7", Name: "Bilbo", Occupation: "None", Age: "111" };
tableAsObjects.push(backToTheShire);

console.log(tableAsObjects);

// Calculate the average age of the group 

// Making a for loop to loop through all the ages
// testing how to target a certain key value inside of an object that is inside of a loop
// ie. in this example, age of 111 from Biblo's object inside the index array of 4
// console.log(tableAsObjects[4].Age);

// making an empty array to store all the ages 
// let allAges = [];

// // basic set up for the loop
// for (let i = 0; i < tableAsObjects.length; i++) {
//     // prints out all the rows again
//     let rows = tableAsObjects[i];
//     console.log(rows);

//     // Number() should convert all the strings values into integers
//     let numAge = Number(rows[3]);
//     // verifying the row was converted inot a number value 
//     console.log(typeof numAge);

//     allAges.push(numAge);
// }

// console.log(allAges); // kept returning as NaN -- will figure out after completing part 5

// ✨ PART 5: Full circle 

// As a final task, transform the final set of data back into CSV format:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

// Going to grab my keys or titles since I want them to be converted back into a string 

                                    // this is the array where the titles at index 0 are stored
const titlesToString = Object.keys(tableAsObjects[0]);
// console.log(titlesToString);

// using the array method join() that creates and RETURNS a new string, separating the elements by ","
let ogString = titlesToString.join(",");
// console.log(ogString);

// now I need to grab the data from the objects aka iterate over them using a for loop 
for (let i = 0; i < tableAsObjects.length; i++) {
    // placing all the objects inside a tableObj variable since I need to loop through each one
    let tableObj = tableAsObjects[i];
    // going to need to push the objects (each row) so should declare and assign a variable to an empty array
    let rowArr = [];

    // I need to go through the titles again to get the values attached to the keys? 
    // so another inner loop to retrieve the value from tableObj and store it in empty array above (outer loop)
    // bc the inner loop retrieves the values in the order of the titles 
    // visual example of how it should loop: ["42", "Bruce", "Knight", "41"] (title order from left to right)
                                            // ID.  Name.   Occupation.  Age. 

    for (let j = 0; j < titlesToString.length; j++) {
        // titlesToString.length refers to the titles variable above that is holding all my keys
        let keys = titlesToString[j]; // using j to rummage through my keys
        // I want to push to my rowArr
        rowArr.push(tableObj[keys]);

    }

    // this is where I need to concatenate my titles and my row data together from the two loops (+=)
    // using the .join() method again on the array (rowArr) that is holding all the object data as the now new arrays
    // so it's adding each one to ogString variable
    ogString += rowArr.join(",");

}
console.log(`This is the original string, kind of: 
${ogString}`);




// pseudocode
// build a grid that scales in proportion to the largest number of the week 
// needs to pull data from the data.json file 
// first get it to display the numbers
// then get it to visually display/render the numbers


// variables
let spreadsheetData
// functions
//api call to fetch data from json file
fetch('../data.json')
.then(response => {
  return response.json();
})
.then(data => displayData(data))

// display the data
function displayData(data) {
  for (let i=0; i < data.length; i++) {
    console.log(data[i].amount)
  }
}

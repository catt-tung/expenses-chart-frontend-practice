// pseudocode
// build a grid that scales in proportion to the largest number of the week 
// needs to pull data from the data.json file 
// first get it to display the numbers
// then get it to visually display/render the numbers


// variables

// functions
//api call to fetch data from json file
fetch('../data.json')
.then(response => {
  return response.json();
})
.then(data => console.log(data))

//

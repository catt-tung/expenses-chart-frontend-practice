// pseudocode
// build a grid that scales in proportion to the largest number of the week 
// needs to pull data from the data.json file 
// first get it to display the numbers
// then get it to visually display/render the numbers

//cached element references
// const mon = document.getElementById("mon")
const tue = document.getElementById("tue")
const wed = document.getElementById("wed")

// variables
let days = document.getElementsByClassName('day')
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
    if (data[i].day === days[i].innerHTML) {
      console.log(data[i].amount + data[i].day)
      days[i].innerHTML = data[i].amount + " " + days[i].innerHTML
    }
  }
}
function displayDays() {
  for (let i=0; i< days.length; i++) {
    console.log(days[i].innerHTML)
  }
}
displayDays()
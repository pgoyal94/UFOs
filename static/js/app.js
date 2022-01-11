// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//Create the table
function buildTable(data) {
    //Clear the existing data in the table
    tbody.html("");
    
    //Loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");
    
        //Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
        );
    });
}

//Handle input from user
function handleClick() {
    //Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     //Check to see if a date was entered and filter the data using that date.
    if (date) {
      //Apply filter to the table according to user input of datetime
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     //Rebuild the table using the filtered data
    buildTable(filteredData);
  };

//Listen for the click event
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);
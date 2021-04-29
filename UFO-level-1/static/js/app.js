// from data.js
var tableData = data;
console.log(data);

var tbody=d3.select("tbody");

// Loop Through data and print each data report 
data.forEach(function(alienReport) {
console.log(alienReport);
});


// Nested loop to go through all the rows, append 1 cell per report value and then populate each column using the keys (Date, City, State, Country, Shape, Duration, Comments)
data.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");

    Object.entries(alienReport).forEach(function([key, value]) {
       console.log(key, value);
    // Append a cell to the row for each value in the  report object
        var cell = row.append("td");
        cell.text(value);
  });
});

// Select the Filter Table action link

var button = d3.select("#filter-btn");
button.on("click", function() {

    // this clears the screen
    tbody.html("");


    var dateColumn = d3.select("#datetime");

    var date = dateColumn.property("value");
    
    console.log(dateColumn);

//     filtering the data on those dates when the observation is greater than dateValue
    var filtered = tableData.filter(x => x.datetime === date);

    console.log(filtered);
    

    // Chaining the filtered function with a loop for all the elements
    filtered.forEach(function(selections) {

      console.log(selections);

      // Append row tr in the table for all elements
      var row = tbody.append("tr");

      // Use `Object.entries` to console.log each value
      Object.entries(selections).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
      });
  });
  });









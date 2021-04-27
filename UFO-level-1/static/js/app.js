// from data.js
var tableData = data;
console.log(data);

var tbody=d3.select("tbody");

// Loop Through `data` and console.log each data report object
data.forEach(function(alienReport) {
console.log(alienReport);
});


// Use d3 to append 1 cell per report value and use the keys (Date, City, State, Country, Shape, Duration, Comments)
data.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");

    Object.entries(alienReport).forEach(function([key, value]) {
       console.log(key, value);
    // Append a cell to the row for each value in the weather report object
        var cell = row.append("td");
        cell.text(value);
  });
});











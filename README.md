### javascript-challenge

## Section 1
In this section to filter by data, the first part was to construct the table. 
For this, we use a loop to append table rows (tr) and table data (td)

Then the table is populated looping through the report using "key" and "value" as parameters. 

## Filtering by date
First the button is selected and we create a function when the button link is clicked using button.on('click', function () ).
The input value entered in the search field is read and is assigned to the date column in the dataset. 
Using the filter function on the column datetime, the filter is applied on the condition datetime greater than the input. 

## Section 2

In this section, additional filters are added and the html file has to be modified to account for it. 
* Drop down menu replaces the <div class="form-group"> originally in the html file  for a <div class="input-group"> and the link between 
the html code and js is obtained through "input". 
* The dropdown menu contains the dataset keys.
* A boiler plate code for the dropdown menu is used:
select type="button" class="form-control btn btn-success" data-toggle="dropdown">
                              <option href="#" class="dropdown-item">Date</option>
                              <option href="#" class="dropdown-item">City</option>
                              <option href="#" class="dropdown-item">State</option>
                              <option href="#" class="dropdown-item">Country</option>
                              <option href="#" class="dropdown-item">Shape</option> 

* In the app.js file, the filter function is expanded with "OR" conditions for each 'input'

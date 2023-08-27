
// Todays date
var rightNow = moment().format('dddd' + ', ' + "MMM Do YYYY");
$("#currentDay").append(rightNow);


var checkEvent = function() {

    // Todays time In 24 hour time
    var hour = moment().hour();
    console.log(hour);
    
    // background color of time blocks automatically changes according to its time
    setInterval(function() {
      
      // Define the working hours
      var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

      // Get the current hour
      var currentHour = new Date().getHours();
      
      // Loop through each hour
      for (var i = 0; i < hours.length; i++) {
        var hour = hours[i];
        
        if (hour > currentHour) {
          $("#" + hour + "am").addClass("future");
         } else if (hour < currentHour) {
          $("#" + hour + "am").addClass("past");
        } else {
          $("#" + hour + "am").addClass("present");
        }
      }
    // if 60 second check
    }, (1000 * 60));
    };

    var events = {}; // Define an empty object to store events

$(document).ready(function() {

  // Load events from local storage on page load
  loadEvents();

  // Display the events on the page
  displayEventsOnPage(); 

  // Click event for all "Save" buttons with the class "saveButton"
  $(".saveBtn").click(function() {

    // Get the key from the data attribute of the button
    var key = $(this).data("key");

    // Get the value from the corresponding textarea
    var eventText = $("#" + key).val();

    // Check if the key is valid (not null)
    if (key && events.hasOwnProperty(key)) {

      // Add the event to the events object
      events[key].push(eventText);

      // Save the updated events to local storage
      saveEventsToLocalStorage();

      // Clear the textarea
      $("#" + key).val("");

      // Update the displayed events on the page after saving
      displayEventsOnPage();
    } else {
      alert("Invalid time to save events.");
    }
  });
});

function loadEvents() {

  // Load events from local storage or initialize with an empty object
  events = JSON.parse(localStorage.getItem("events"));
  if (!events) {
    events = {
      "9am": [],
      "10am": [],
      "11am": [],
      "12pm": [],
      "1pm": [],
      "2pm": [],
      "3pm": [],
      "4pm": [],
      "5pm": []
    };
  }
}

function saveEventsToLocalStorage() {
    
  // Save events to local storage
  localStorage.setItem("events", JSON.stringify(events));
}

function displayEventsOnPage() {

  // Loop through each key in events object
  for (var key in events) {

    // Get the value (array of events) for each key
    var eventList = events[key];

    // Get the corresponding textarea by ID
    var $textarea = $("#" + key);

     // Clear the textarea before setting the new events
     $textarea.val('');

    // Set the value of the textarea with events separated by new lines
    $textarea.val(eventList.join("\n"));
  }
}
    

// Todays date
var rightNow = moment().format('dddd' + ', ' + "MMM Do YYYY");
$("#currentDay").append(rightNow);


var checkEvent = function() {

    // Todays time In 24 hour time
    var hour = moment().hour();
    console.log(hour);
    
    // background color of time blocks automatically changes according to its time
    setInterval(function() {

    // 9am conditions
    if (9 > hour) {
      $("#9am").addClass("future");  
   
    }if (9 < hour) {
        $("#9am").addClass("past"); 

    }if (9 == hour) {
        $("#9am").addClass("present");
    };
    
    // 10am conditions
    if (10 > hour) {
        $("#10am").addClass("future");  
      
        }if (10 < hour) {
          $("#10am").addClass("past");  

        }if (10 == hour) {
          $("#10am").addClass("present");

      };
    
      // 11am conditions
    if (11 > hour) {
        $("#11am").addClass("future");  
    
        }if (11 < hour) {
          $("#11am").addClass("past");  

        }if (11 == hour) {
          $("#11am").addClass("present");

      };
    
      // 12am conditions
      if (12 > hour) {
        $("#12am").addClass("future");  
    
        }if (12 < hour) {
          $("#12am").addClass("past");  

        }if (12 == hour) {

          $("#12am").addClass("present");
      };
    
      // 1pm conditions
      if (13 > hour) {
        $("#1pm").addClass("future");  
   
        }if (13 < hour) {
          $("#1pm").addClass("past"); 

        }if (13 == hour) {
          $("#1pm").addClass("present");
          };
    
     // 2pm conditions
     if (14 > hour) {
        $("#2pm").addClass("future");  
   
        }if (14 < hour) {
          $("#2pm").addClass("past"); 
        }if (14 == hour) {

          $("#2pm").addClass("present");
          };
    
      // 3pm conditions
      if (15 > hour) {
        $("#3pm").addClass("future");  
   
        }if (15 < hour) {
          $("#3pm").addClass("past"); 

        }if (15 == hour) {
          $("#3pm").addClass("present");
          };
      
      // 4pm conditions
      if (16 > hour) {
        $("#4pm").addClass("future");  
   
        }if (16 < hour) {
          $("#4pm").addClass("past");     
          
        }if (16 == hour) {
          $("#4pm").addClass("present");
          };
      
      // 5pm conditions
      if (17 > hour) {
        $("#5pm").addClass("future");  
   
      }if (17 < hour) {
          $("#5pm").addClass("past");
          
      }if (17 == hour) {
          $("#5pm").addClass("present");
          
      };
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
    
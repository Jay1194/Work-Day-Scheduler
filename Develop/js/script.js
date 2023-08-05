
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
    }, (1000 * 60) * 5);
    };
    


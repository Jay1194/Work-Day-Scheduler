
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
  console.log("9am is in the " + "future ");

}if (9 < hour) {
    $("#9am").addClass("past");
    console.log("9am is in the " + "past ");

}if (9 == hour) {
    $("#9am").addClass("present");
    console.log("9am is in the " + "present ");
};

// 10am conditions
if (10 > hour) {
    $("#10am").addClass("future");  
    console.log("10am is in the " + "future ");
  
    }if (10 < hour) {
      $("#10am").addClass("past");
      console.log("10am is in the " + "past ");

    }if (10 == hour) {
      $("#10am").addClass("present");
      console.log("10am is in the " + "present ");
  };

  // 11am conditions
if (11 > hour) {
    $("#11am").addClass("future");  
    console.log("11am is in the " + "future ");

    }if (11 < hour) {
      $("#11am").addClass("past");
      console.log("11am is in the " + "past ");

    }if (11 == hour) {
      $("#11am").addClass("present");
      console.log("11am is in the " + "present ");
  };

  // 12am conditions
  if (12 > hour) {
    $("#12am").addClass("future");  
    console.log("12am is in the " + "future ");

    }if (12 < hour) {
      $("#12am").addClass("past");
      console.log("12am is in the " + "past ");

    }if (12 == hour) {
      $("#12am").addClass("present");
      console.log("12am is in the " + "present ");
  };

  // 1pm conditions
  if (13 > hour) {
    $("#1pm").addClass("future");  
    console.log("1pm is in the " + "future ");

    }if (13 < hour) {
      $("#1pm").addClass("past");
      console.log("1pm is in the " + "past ");

    }if (13 == hour) {
      $("#1pm").addClass("present");
      console.log("1pm is in the " + "present ");
  };

 // 2pm conditions
 if (14 > hour) {
    $("#2pm").addClass("future");  
    console.log("2pm is in the " + "future ");

    }if (14 < hour) {
      $("#2pm").addClass("past");
      console.log("2pm is in the " + "past ");

    }if (14 == hour) {
      $("#2pm").addClass("present");
      console.log("2pm is in the " + "present ");
  };

  // 3pm conditions
  if (15 > hour) {
    $("#3pm").addClass("future");  
    console.log("3pm is in the " + "future ");

    }if (15 < hour) {
      $("#3pm").addClass("past");
      console.log("3pm is in the " + "past ");

    }if (15 == hour) {
      $("#3pm").addClass("present");
      console.log("3pm is in the " + "present ");
  };
  
  // 4pm conditions
  if (16 > hour) {
    $("#4pm").addClass("future");  
    console.log("4pm is in the " + "future ");

    }if (16 < hour) {
      $("#4pm").addClass("past");
      console.log("4pm is in the " + "past ");
    
    }if (16 == hour) {
      $("#4pm").addClass("present");
      console.log("4pm is in the " + "present ");
  };
  
  // 5pm conditions
  if (17 > hour) {
    $("#5pm").addClass("future");  
    console.log("5pm is in the " + "future ");

  }if (17 < hour) {
      $("#5pm").addClass("past");
      console.log("5pm is in the " + "past ");

  }if (17 == hour) {
      $("#5pm").addClass("present");
      console.log("5pm is in the " + "present ");
  };

// if 60 second check
}, (1000 * 60) * 20);
};

checkEvent();


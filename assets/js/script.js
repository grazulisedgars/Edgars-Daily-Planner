var dayDisplayEL = $("#currentDay");
var timeBlocksEl = $(".container");

// Display the current day at the top of the calendar when a user opens the planner

function currentDay() {
    var day = dayjs().format("dddd Do, MMMM YYYY");
    $(dayDisplayEL).text(day);
}
currentDay()

// Present timeblocks for standard business hours when the user scrolls down

    function generateTimeblocks () {
        const timeBlocksEl = $(".container");

        for (var i = 9; i <= 17; i++) {
            var timeblock = $("<div>");
            timeblock.addClass("time-block row hour")
            timeblock.attr("id", "hour-" + i);
            if (i <12) {
                timeblock.html('<div class = "col-2 col-md-1 hour text-center py-3">'+ (i) + "AM" + '</div>');
            } 
             else if(i === 12)
            {
             timeblock.html('<div class = "col-2 col-md-1 hour text-center py-3">'+ (i) + "PM" + '</div>');
            }
            //  This part provided with ask BCS Learning Assistant
            else {
                timeblock.html('<div class = "col-2 col-md-1 hour text-center py-3">'+ (i-12) + "PM" + '</div>');
            }
            //-----------------------------------------------------
            timeblock.append(createInputField());
            timeblock.append(saveBtn());
            timeBlocksEl.append(timeblock);
        }
        return timeblock;
    } 
    const timeblocks = generateTimeblocks();

    timeBlocksEl.append(timeblocks);


// Each timeblock contains input field and save button

function createInputField () {
    var inputField = $("<input>");
    inputField.attr("type", "text");
    inputField.attr ("id", "inputField")
    inputField.addClass("col-8 col-md-10 description")
    return inputField;
}

function saveBtn () {
    var saveBtn = $("<button>");
    saveBtn.addClass("btn saveBtn col-2 col-md-1");
    saveBtn.text("Save");
    return saveBtn;
}

// Color-code each timeblock based on past, present and future when the timeblock is viewed

// Function colorCode was created together with Samuel Cordova
function colorCode () {
 var currentHour =dayjs().hour();

 $(".time-block").each(function () {
var rowHour = parseInt($(this).attr("id").split("-")[1]);

if(rowHour < currentHour) {
    $(this).addClass("past");
} else if (rowHour === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
} else { 
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
}

 })
};

colorCode()
// ---------------------------------------------------------

// Save the event in local storage when the save button is clicked in that time block

var inputFieldEl = $('#inputField');

$('.saveBtn').click(function() {
    var inputFieldValue = inputFieldEl.val();  
    localStorage.setItem('timeblock-' + inputFieldEl.attr('id'), inputFieldValue);
});

// Load the saved result from local storage and set the value of the input field
$(window).ready(function() {
  // Get the saved result from local storage
  var savedResult = localStorage.getItem('timeblock-' + inputFieldEl.attr('id'));

  // If there is a saved result, set the value of the input field to the saved result
  if (savedResult) {
    inputFieldEl.val(savedResult);
  }
});

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
        timeblock.text(i);
        timeBlocksEl.append(timeblock);
    }
    return timeblock;
} 
const timeblocks = generateTimeblocks();

timeBlocksEl.append(timeblocks);

// Color-code each timeblock based on past, present and future when the timeblock is viewed


// Allow user to enter an event when they click a timeblock (look at the example day1)


// Save the event in local storage when the save button is clicked in that time block


// Persist events between refreshes of the page (could it be prevent.default?)
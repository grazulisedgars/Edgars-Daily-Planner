console.log ("This JS is linked")

// Display the current day at the top of the calendar when a user opens the planner
var day = dayjs().format("dddd Do, MMMM YYYY");
$("#currentDay").text(day);

// Present timeblocks for standard business hours when the user scrolls down


// Color-code each timeblock based on past, present and future when the timeblock is viewed


// Allow user to enter an event when they click a timeblock (look at the example day1)


// Save the event in local storagewhen the save button is clicked in that time block


// Persist events between refreshes of the page (could it be prevent.default?)
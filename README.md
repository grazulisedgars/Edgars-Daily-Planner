# Edgars-Daily-Planner

## Description 

This code creates a daily planner application that allows users to schedule events for each hour of the workday. The planner displays the current day and time, and it presents timeblocks for standard business hours. Each timeblock contains an input field for entering an event description and a save button to save the event to local storage. The timeblocks are color-coded based on whether they are in the past, present, or future.

Here is a more detailed explanation of what each function does:

currentDay() - This function displays the current day and date at the top of the calendar.

generateTimeblocks() - This function creates the timeblocks for the workday. It loops through the hours from 9 to 5 and creates a timeblock for each hour. Each timeblock contains a label for the hour and an input field for entering an event description.

createInputField() - This function creates an input field for entering an event description. The input field is given an ID so that it can be easily referenced later.

saveBtn() - This function creates a save button that saves the event description to local storage. The save button is given a data-hour attribute so that it can be associated with the correct timeblock.

colorCode() - This function color-codes the timeblocks based on whether they are in the past, present, or future. The timeblocks are given classes of "past", "present", or "future" based on the current time.

loadSavedResults() - This function loads the saved event descriptions from local storage and sets the values of the input fields. The function loops through the timeblocks and retrieves the saved event description for each timeblock.

## Link
https://grazulisedgars.github.io/Edgars-Daily-Planner/

# Screenshot 
![Alt text](<assets/images/Screenshot 2023-11-11 at 13.12.48.png>)

# License 
MIT
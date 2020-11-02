# Redux Feedback Loop

## Description

_Duration: Weekend Sprint_

The app is designed to have the functionality of feedback 
### Prerequisites

- [react.js](https://reactjs.org/);
- [Postico](https://eggerapps.at/postico/);
- [Node.js](https://nodejs.org/en/);

## Installation

1. Ensure that react is installed
2. Open up your editor of choice and run an `npm install --yes` in the terminal
3. Run `npm run server` in one terminal
4. Run `npm run client` in another terminal
5. Create a database in Postico called "prime_feedback" (See SQL file for details)
6. Proceed to your preferred browser and open `localhost:3000` this will be your HomeBase for the project!

## Usage

1. Upon page load you will be presented with the Feeling page.  Please pick a number 1-5 to rate how you are  feeling on the day about subjects learned.  Then click next to proceed to the next page.
2. You will now arrive at the Understanding page.  Pick a number 1-5 to describe your understanding of the material of the day.  Then click next to proceed to the next page.
3. You will now arrive at the Support page.  Pick a number 1-5 to describe your support with staff on the material of the day.  Then click next to proceed to the next page.
4. You will now arrive at the Comment page.  Please input any additional comments that you would want the staff to see that could help express exactly how you are feeling on the material/staff (Note you cannot exceed 250 characters).  Then click next to proceed to the next page.
5. You will now arrive at the Review page.  Please look over all the information provided and ensure that it is accurate.  If anything looks amiss you can use the go back button on any of the pages to return to that page and update/fix your response.  If everything looks accurate hit the submit button and the info will be uploaded to the database and you will be navigated to the next page
6. You will now arrive at the final page the success page.  This will provide you with a brief thank you for your time and a button that on click will return you to the start of the process.  This would be the end of the standard user experience

7.  To access admin functionality type in localhost:3000/#/admin.  This will bring you to the admin page.
8. The admin will display all feedback info in a table format where the admin can review the numbers as well as comments.
9. Hitting the delete button will clear that input from the database which can be used when the info is no longer needed

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [tbrookshaw13@gmail.com]

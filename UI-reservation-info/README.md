#UI-reservation-info exercise

## Instructions
* Using any UI framework (or none), create a component that uses the data.json file provided to view a user's hotel reservations
* Provide notes on your code, including how to run it in the Candidate Notes section below.

## Requirements
* Component should use the data.json file to retrieve data
* Component should display the following information
    * Primary Guest
    * Room Name
    * Dates
    * Total Price
    * Amenity Names
* Component should allow user to filter previous or future reservations
* Clicking the price should allow user to view a breakdown of price into each day and the breakdown of room/tax/fees

## Candidate Notes

* Navigate inside reservation-info directory and pull code
* Run npm install
* Then npm start and the app should launch on http://localhost:3000/

*. Application is build with React v16
*. Main App component is split into 3 smaller components
	- Calendar component
	- Home component
	- PriceBreakDown component
* Refresh button is added to reload and refresh the application state.
   
   

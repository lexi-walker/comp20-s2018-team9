# Update: Friday, April 6, 2018

### Tasks Accomplished
* We are using the [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro#GeocodingRequests) to extract latitude and longitude from a string-formatted location. Borrowing content from Assignment 2 (NotUber), we then plot these coordinates on a map, and display them.
* We began experimenting with D3 and other tools in order to create visualizations of the data. Pictures were also drawn by hand to plan more specifically what types of graphics could be interesting to make.
* We began exploring how to create a heatmap using the Google Maps API for the app's main visualization.
* Worked on the ability to pull different data from someone's google calendar profile.

### Challenges Faced
* More work must be done to come up with useful, interesting visualizations based on the data available.
* Lots of small issues with parsing the google calendar data (such as converting the location strings to coordinates) into usable data have to be solved. Namely, we anticipated being able to process a list of locations with one function call. However, we realized it was necessary to implement a recusive system to process the list locations one-by-one, due to the callback functions used by the request-response model.

### Goals for Next Week
* Work on formatting the data pulled from Google Calendar so that it can be fed into the visualizations.
* Make more of the simple, basic visualizations.
* Keep exploring the creation of a heatmap with Google Maps API.

# Comments by Ming
* "parsing the google calendar data (such as converting the location strings to coordinates) into usable data have to be solved." => Ho boy, don't aim for perfection.
* "a recusive system to process the list locations one-by-one, due to the callback functions used by the request-response model." => ew.  Definitely a royal pain to do with Node.js, I would do this using Python + Flask. 

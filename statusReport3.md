# Update: Friday, April 20, 2018

### Tasks Accomplished
* Added basic front-end interface for time-based data selection.
* Added d3 data visualization to show hourly heatmap during the course of a week. Currently bound to random data, but will be linked later with Pi-hole internet activity to show internet usage during each day of the week.
* Used Google's heatmap visualization library to show time spent at different locations. Can now plot data onto a Google Maps view to create the app's main visualization.

### Challenges Faced
* Struggled with weighting different heatmap points (for Google Maps location heatmap).
* Initially the weekly heatmap visualization failed to load in the browser due to the same-origin policy limitations. Had to run a webserver in order to test the program.

### Goals for Next Week
* Front-end needs to have a lot of work done.
* Need to implement a back-end server to store past data and host visualizations.
* Need to tie all of the visualizations to the data from Google calendar rather than random data.

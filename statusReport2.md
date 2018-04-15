# Update: Friday, April 13, 2018

### Tasks Accomplished
* Developed a time based selection system for the Google Calendar data which will allow datapoints within a period of time to be selected.
* Reviewed Pi-hole API (as suggested by Ming) and plan to emulate the data provided by the "overTimeData10mins" method to produce visualizations for computer usage. Additionally, it may be possible to infer sleep cycles from this data if the user is a heavy technology user.
* Developed a method for using the Google Maps API heatmap functionality to produced a time-weighted heat map.
* Continued progress with visualizations using D3. Began experimenting with producing different basic line graphs and worked on aesthetics and finer details for the aesthetics of the sleep schedule bar graph.

### Challenges Faced
* Making different types of visualizations in D3 is not nearly as simple as just calling a new function. Various efforts still must be made to create additional visualizations with more variety. In particular, we are trying to get a calendar view visualization similar to a heatmap working.
* Descovered that the Google Maps API heat map functionally is not natively capable of making time-weighted heat maps. It was necessary to preprocess the input to it further to produce the desired result. 

### Goals for Next Week
* Fully functioning heat map
* Begin work on front end
* Finalize line graph visualization, continue progress on calendar-view visualization

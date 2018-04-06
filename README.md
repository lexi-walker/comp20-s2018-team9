# LifeMap

## Table of Contents
- [Problem Statement](#problem-statement)
- [Solving the Problem](#solving-the-problem)
- [Features](#features)
- [Data](#data)
- [Algorithms and Techniques](#algorithms-and-techniques)
- [Wireframes](#wireframes)

### Problem Statement
College is a period of huge growth, change, and excitement. Amidst all the chaos of classes, club meetings, and exams, students tend to get wrapped up in the now, forgetting how looking at the past can influence and improve the future. Having some sort of mechanism to reflect back on their past few weeks, months, or even years would be something that could benefit the lives of all college students. Traditional calendars provide a one-dimensional view of an ordered sequence of events, which may be useful for day-to-day planning. Unfornately, traditional calendars prevent the user from viewing the data holistically to draw larger conclusions about their lifestyle that are necessary for self-improvement.

### Solving the Problem
Infomation about how and where the user spends their time on a macro level is important to assessing and asjusting their lifestyle. In the context of Tufts (though it translates to any college or beyond), statistics on how much time a user spends walking, eating, in class, or even sleeping provides vital insight in how the user distributes their time. Each week, data will be collected, analyzed, and finally displayed, allowing for intriguing comparisons to be made between different days, weeks, semesters, or even school years.

### Features
We plan to display the data in two main ways. First, specific visualizations will be created on different interesting activies such as weekly sleep schedule (both duration and consistency), meals (location and duration), studying (location and duration), and social activities (duration and location). Then, a heatmap showing how much time was spent at different locations on the campus ties all of the visualizations and data together into a high-level overview on one's week.

### Data
This project will predominantly collect data from a user's Google Calendar. The date, time, and location of all events that they have recorded provide various statistics and allow for interesting visualizations to be created.

### Algorithms and Techniques
We will use the Google Calendar API in order to collect the data for this project and the Google Maps API in order to display it neatly on the heatmap.

### Wireframes

#### Desktop

![SignInView](https://github.com/tuftsdev/comp20-s2018-team9/blob/master/wireframes/desktop/SignIn.png)


![DashboardView](https://github.com/tuftsdev/comp20-s2018-team9/blob/master/wireframes/desktop/DashboardView.png)

#### Mobile
![ConnecttoGoogleAccount](https://github.com/tuftsdev/comp20-s2018-team9/blob/master/wireframes/mobile/ConnecttoGoogleAccount.png)

![ConnectCalendars](https://github.com/tuftsdev/comp20-s2018-team9/blob/master/wireframes/mobile/ConnectCalendars.png)

![SelectWeeks](https://github.com/tuftsdev/comp20-s2018-team9/blob/master/wireframes/mobile/SelectWeeks.png)

![MapView](https://github.com/tuftsdev/comp20-s2018-team9/blob/master/wireframes/mobile/MapView.png)

![GraphView](https://github.com/tuftsdev/comp20-s2018-team9/blob/master/wireframes/mobile/GraphView.png)

![MenuView](https://github.com/tuftsdev/comp20-s2018-team9/blob/master/wireframes/mobile/MenuView.png)

### Comments by Ming 
* Yes please.
* For two summers (2014 and 2015), I actually had to track my time and what I was doing.  I did this personally --because wasting time and not accomplishing anything is a terrible thing and something no one is proud of.
* I have an idea: also plug in data from my Pi-Hole (networkwide ad blocker) to infer when I'm working, when I'm sleeping, etc. 

### Update: Friday, April 6, 2018
* We are using the [Google Maps Geocoding API] (https://developers.google.com/maps/documentation/geocoding/intro#GeocodingRequests) to extract latitude and longitude from a string-formatted location. 
* Borrowing content from Assignment 2 (NotUber), we then plot these coordinates on a map, and display them.

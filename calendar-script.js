var CLIENT_ID = '149020516136-fakiuatlt3r0te6n4lk02lqafe0l7pis.apps.googleusercontent.com';
   var API_KEY = 'AIzaSyBXyzKlmSZKd_R3le8xjYbtvO236NS5L2w';

   var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

   var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

   var authorizeButton = document.getElementById('authorize-button');
   var signoutButton = document.getElementById('signout-button');

   function handleClientLoad() {
     gapi.load('client:auth2', initClient);
   }

   function initClient() {
     gapi.client.init({
       apiKey: API_KEY,
       clientId: CLIENT_ID,
       discoveryDocs: DISCOVERY_DOCS,
       scope: SCOPES
     }).then(function () {

       gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

       updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
       authorizeButton.onclick = handleAuthClick;
       signoutButton.onclick = handleSignoutClick;
     });
   }

   function updateSigninStatus(isSignedIn) {
     if (isSignedIn) {
       authorizeButton.style.display = 'none';
       signoutButton.style.display = 'block';
       listUpcomingEvents();
     } else {
       authorizeButton.style.display = 'block';
       signoutButton.style.display = 'none';
     }
   }

   function handleAuthClick(event) {
     gapi.auth2.getAuthInstance().signIn();
   }

   function handleSignoutClick(event) {
     gapi.auth2.getAuthInstance().signOut();
   }

   function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

function listUpcomingEvents() {
  var datemin = new Date();
  datemin.setDate(datemin.getDate() - 8);
  var datemax = new Date();
  datemax.setDate(datemax.getDate() + 3);
  gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (datemin).toISOString(),
    'timeMax': (datemax).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  }).then(function(response) {
          console.log(response);
    var events = response.result.items;
    console.log(response);
    appendPre('Upcoming events:');

    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        var event = events[i];
        var when = event.start.dateTime;
        if (!when) {
          when = event.start.date;
        }
        appendPre(event.summary + ' (' + when + ')')
      }
    } else {
      appendPre('No upcoming events found.');
    }
  });
}

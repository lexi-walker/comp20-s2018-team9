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
       console.log("change state");
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

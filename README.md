# DartBot - The Tour guide
DartBot the virtual tour guide provides the experience of a Dartmouth tour when an official tour is not available. DartBot operates through three main points: a Facebook Messenger Bot, a user-side Web App and and an admin-side Web App.

The Facebook Messenger bot provides an interactive tour experience. Its functions are using location to determine the closest tour landmark, answering inquiries about Dartmouth by intelligently determining the intent of an inquiry and prompting a user for feedback.

The User-side of the Web App offers information related to Dartmouth tours to the user. The homepage simulates the tour experience by providing a map of interactive pins at notable landmarks across Dartmouth campus. An additional page provides updated profiles of Dartmouth Tour Guides. The Web App links to the Facebook Messenger bot through an iframe.

An admin link on the Web App requires signing in to access and provides capabilities to edit all content that the Messenger bot and Web App provide the user. This includes editing landmark/locations on the tour, tour guide profiles, responses to queries, survey questions and adding new administrator accounts.

## Architecture

DartBot is separated into three different repositories: the Frontend, the Server and the Bot. The Frontend repo contains code for the web application aspect of the project. The Server repo creates the RESTFUL API database using MongoDB and is used by both the Frontend and Bot. The Bot repo uses Botkit and wit.ai to create a conversational Messenger bot.

The Frontend Web Application uses the React-Redux flow that maintains a state with reducers for admin (authentication), analytic data, tour guide bios/profiles, errors (if any exist), queries/intents (to update responses) and the tour locations.

## User-Side components
The user-side of DartBot involves a map homepage, an about page, tour guide profiles and page for the Facebook Messenger Bot.

### Rudimentary Mockup

<img src="https://raw.githubusercontent.com/dartmouth-cs52/dartbot-frontend/master/imgs/home.png" height="350">
<img src="https://raw.githubusercontent.com/dartmouth-cs52/dartbot-frontend/master/imgs/bio.png" height="350">
<img src="https://raw.githubusercontent.com/dartmouth-cs52/dartbot-frontend/master/imgs/bot.png" height="350">
<img src="https://raw.githubusercontent.com/dartmouth-cs52/dartbot-frontend/master/imgs/admin.png" height="350">

### Nav Bar
A basic navigation bar provides links to different components on the Web App.

### Map
The homepage of the Web App is an interactive map component created using a node module adapting the Google Maps API. Each pin is a location retrieved from the tour landmark locations obtained from the backend. Hovering over a pin displays a box containing content about the location.

![Map Homepage](/imgs/Map-Homepage.png)

### Tour Guide Profiles
Profiles of the Tour Guides are displayed on the Tour Guide Profiles tab on the user aspect of the site. Upon signing in, administrators may add new tour guides using the forms in the New Tour Guide Profiles tab on the administration-side of the site. Images are stored and retrieved from Amazon S3. For the user profiles, we had to configure the backend to handle the CRUD actions of the user profiles and also getting a signed URL request for each profile when a user uploads a photo. Then the front-end receives this signed URL as a response from the server, which conveniently contains the profile's id in the URL, and the front-end is the one who actually posts the image to Amazon S3's API.

![Tour Guide Profiles](/imgs/TourGuideProfiles.png)

### Bot iframe
The Bot page in the Web App provides an iframe to allows the user to sign in an send the bot a message. In order to see the answer or ask additional questions the user must open up Facebook Messenger bot to continue the conversation.

#### Homescreen
Right now our homescreen displays an interactive map with an example pin of one of tour sites. There are also three tabs on our navbar which shows the three main components of our dev site: a link to the bios of all of our tour guides, a link to an iframe of the conversation with our bot, and also a link for admins to sign in to view their analytics and also upload and edit any tour guide profiles. Our admin and bio components and containers are configured to hit the API endpoints; however, we are still working on authentication for the bot and making requests to the bots api.

## Admin-side Components
Accessing the Admin portion of the website requires authentication validation after a sign in page. The admin components include analytics, updating tour guide profiles, updating query responses, updating tour locations, adding new survey questions and adding new administrators.

### Analytics
Using data obtained from the Facebook Messenger Bot's interactions with users, that analytics page plots frequency charts for location, queries and survey responses using D3 based graphs. The Location Hits graph plots the amount of times a user sends a location that is closest to a particular landmark. The Query Hits graph plots the number of time a user inquires about a particular topic. The Survey Question graphs plot the number of times users have answered a particular survey question and the mean answer give.

![Analytics](/imgs/Analytics.png)

### Tour Guide Profiles
Tour Guide Profiles can be added or updated in the admin side of the Web App. To add a new user click on the first item titled New. A animated collapsible container will open and enable the admin to put in information. The existing tour guide profiles  Add or set a new a profile picture for the tour guide by double clicking on the Upload button. The image is uploaded to Amazon S3.


### Tour Locations
Add or update tour locations in the same manner as adding a tour guide profile. The app enables the admin to choose the GPS coordinates of the location by clicking on a point on a map, using a Google Maps API React Component. To select the GPS coordinates for a new location on the tour, the admin simply clicks on the desired location on the map and a pin appears at the selected location. To edit an existing location the admin can either manually change the latitude and longitude or click "Edit Location" which enables GPS selection by clicking. Otherwise the clicking on the map has no effect on editing the tour location. To stop editing a location by editing the admin should click "Stop Edit Location". The changes to the location only occur on the local state and will only be saved after the user clicks "Update".

![Edit Tour Locations](/imgs/Locations.png)

### Queries/Responses
An admin can add new queries that the bot can respond to or update the responses the bot has through the Web App. To add a new query the admin would open the update/add box and fill out the 'Query' and 'Response' fields. (NOTE: DartBot uses Wit.ai language processing so additional "training" work is required for queries added through the web app). To update a response the admin clicks on the query they want to update. This automatically changes the fields in the top box. By modifying the response field and clicking update, the new response replaces the previous response for a given query.

![Queries](/imgs/Queries.png)

### New Surveys
Currently the bot only supports survey questions that can be answered on a scale from 1 to 5. The admin is able to type out a question and click 'Add Survey Question' to add to the list of questions the bot is able to ask.

### Add New Admin
In order to maintain limited access to the admin section of the website, new admin users can only be added by a signed in admin.

## Deployment

The Frontend Web App portion is deployed via surge onto cs52-dartbot.surge.sh using travis to enable automatic deployment from GitHub.
The Server of the project uses mongoose to maintain a MongoDB provided by Heroku. The server is deployed on Heroku.
The Bot for the project uses Botkit as the primary means of operating a Facebook Messenger bot and Wit AI for natural language processing of user queries. The bot is also deployed on Heroku.

## Authors

Alma Wang, Ahsan Azim, Larissa Chen, Ian Bateman, Robin Jayaswal

## Acknowledgement

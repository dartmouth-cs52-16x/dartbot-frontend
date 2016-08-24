# DartBot - The Tour guide
DartBot the virtual tour guide provides the experience of a Dartmouth tour when an official tour is not available. DartBot operates through two main facets: a web application and a Facebook Messenger bot.

The Facebook Messenger bot responds to a user sending a location to the bot with information and links about that location that would be explained on a tour. The bot then prompts the user for feedback about the information provide. Additionally the bot will be able to respond to general inquiries about Dartmouth by determining the intent of the question and searching its database for an appropriate answer.

The Web App aspect of DartBot simulates the tour experience by providing a map of clickable pins across the Dartmouth campus that would be noted on the tour. Clicking the pin opens information about the location discussed on the tour. The Web App also includes a page the provides profiles of Dartmouth Tour Guides.

On the Admin side, an administrator that logs in has access to analytics about the tour: i.e. type of question frequency, locations visited frequency, typical answers for feedback surveys.

### Rudimentary Mockup

<img src="https://raw.githubusercontent.com/dartmouth-cs52/dartbot-frontend/master/imgs/home.png" height="350">

<img src="https://raw.githubusercontent.com/dartmouth-cs52/dartbot-frontend/master/imgs/bio.png" height="350">

<img src="https://raw.githubusercontent.com/dartmouth-cs52/dartbot-frontend/master/imgs/bot.png" height="350">

<img src="https://raw.githubusercontent.com/dartmouth-cs52/dartbot-frontend/master/imgs/admin.png" height="350">


### Progress...
Our home screen.
<img src="https://raw.githubusercontent.com/dartmouth-cs52/dartbot-frontend/master/imgs/dartbot-homescreen.png" height="350">

#### Homescreen
Right now our homescreen displays an interactive map with an example pin of one of tour sites. There are also three tabs on our navbar which shows the three main components of our dev site: a link to the bios of all of our tour guides, a link to an iframe of the conversation with our bot, and also a link for admins to sign in to view their analytics and also upload and edit any tour guide profiles. Our admin and bio components and containers are configured to hit the API endpoints; however, we are still working on authentication for the bot and making requests to the bots api.

## Architecture

DartBot is separated into three different repositories: the Frontend, the Server and the Bot. The Frontend repo contains code for the web application aspect of the project. The Server repo creates the RESTFUL API databased using MongoDB used by both the Frontend and Bot. The Bot repo uses Botkit to create a conversational bot.

The Frontend Web Application uses the React-Redux flow to maintain a state updated by actions.

## Deployment

The Frontend of the project will be deployed onto a surge.sh website.
The Server of the project uses mongoose to maintain a MongoDB provided by heroku. The server is deployed on Heroku.
The Bot for the project uses Botkit as the primary means of operating a Facebook Messenger bot and Wit AI to increase the bot's ability to understand queries when parsing for a question's intent. It will also be deployed on heroku.

## Final Web App Components
### Tour Guide Profiles
Profiles of the Tour Guides are disaplayed on the Tour Guide Profiles tab on the user aspect of the site. Upon signing in, administrators may add new tour guides using the forms in the New Tour Guide Profiles tab on the administration-side of the site. Images are stored and retrieved from Amazon S3. For the user profiles, we had to configure the backend to handle the CRUD actions of the user profiles and also getting a signed URL request for each profile when a user uploads a photo. Then the front-end receives this signed URL as a response from the server, which conveniently contains the profile's id in the URL, and the front-end is the one who actually posts the image to Amazon S3's API. 

## Authors

Alma Wang, Ahsan Azim, Larissa Chen, Ian Bateman, Robin Jayaswal

## Acknowledgement

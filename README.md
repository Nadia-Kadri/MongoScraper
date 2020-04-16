# MongoScraper

As fears around the coronavirus spread across the global economy, the U.S. stock market has responded with worrying volatility. Whether you follow the market closely or not, the uncertainty of it all raises many questions. Are we heading into a recession? How will this impact the average worker? And above all, when will it get better? Your greatest tactic for navigating this volatile market is to stay informed... MongoScraper will help you do just that!

MongoScraper is a full-stack ReactJS web application that uses NPM packages axios and cheerio to scrape the Wall Street Journal website, allowing users to view a summary of the latest WSJ articles with a link to read the article in full. After registering an account, users can save articles to their profile page that they can access at anytime. Users can then manage their articles in a variety of ways - by adding or deleting any notes to specific articles as well as deleting any articles they no longer need. MongoScraper utilizes an express server and a MongoDB Database.

Access the live webapp: [MongoScraper](https://mongo-scraper-wsj.herokuapp.com/)

<!-- ![Homepage](https://media.giphy.com/media/Sw00jEgoSKOuwcRjrb/giphy.gif "Homepage") -->
## Contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Features](#features)
- [About the Developer](#aboutthedeveloper)

---

### Technologies
| Backend | Frontend |
| -------- | ------------------ |
| Node | Javascript 6 |
| MongoDB | React 16.2 |
| Mongoose | CSS3 |
| Express | Bootstrap |
| Axios | React Router Dom|
| Cheerio | HTML5 |
| Moment | jQuery 3.4.1 |
| Passport | 
| Nodemon | 

---

### Installation
#### Prerequisites
You must have the following installed to run MongoScraper:
- [Node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [.env](https://www.npmjs.com/package/dotenv)
#### Run MongoScraper on your local computer
Download Compass GUI from [MongoDB Compass](https://www.mongodb.com/products/compass) or the Robo3t GUI from [Robomongo](https://robomongo.org/)
> Both Compass and Robo 3t allow you to view the data that is being persisted to your database locally. Gives you the ability to modify, insert, and delete data manually in the GUI.

Clone or fork repository: <br>
    $ git clone git@github.com:Nadia-Kadri/MongoScraper.git
    <br>
Create environment inside your root directory:
```
$ touch .env
```
Inside of .env file insert:
```
PASSPORT_SECRET=developer
```
You may change the word 'developer' to whatever you like. This word is used when encrypting and decrypting the user's password for Passport.js
Install dependencies:
```
$ npm install
```
Run the app from the command line
```
$ npm start
```

---

### Features
Access the live webapp: [MongoScraper](https://mongo-scraper-wsj.herokuapp.com/)
#### Scrape WSJ
Click to scrape the latest articles from the WSJ
#### Login/Sign Up
Login / Sign-Up in order to save an article.
<!-- ![Login/SignUp](https://media.giphy.com/media/LpiJu4eJ58FU3nhs9w/giphy.gif "Login / Sign Up") -->
#### Save Article
After sigining in user can select which articles they would like to save.
<!-- ![Schedule Class](https://media.giphy.com/media/TEu9ggTRGAvW9t01LP/giphy.gif "Schedule Class") -->
#### User Profile
When user save an article they can go to their profile and view their profile information and view the articles they saved.
<!-- ![User Profile](https://media.giphy.com/media/YnNdsXf5rwqWbpM7aV/giphy.gif "User Profile") -->
#### Article Notes
Users can create and delete notes on their saved articles.
#### Delete Article
Users can delete articles they no longer need.

---

### <a name="aboutthedeveloper"></a> About the Developer
MongoScraper creator and designer:<br>
[<img src="https://media-exp1.licdn.com/dms/image/C4D03AQH9bImUzEztVQ/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=8Q89ixVklNYqqmnkjXeBlcBBSphqYJct9FD0dVa22Jw" height="70px" width="70px">](https://github.com/Nadia-Kadri)<br>
[Nadia Kadri](https://github.com/Nadia-Kadri) is a Financial Analyst at Lockheed Martin pursuing a career in software engineering. She can be found on [LinkedIn](https://www.linkedin.com/in/nadia-kadri-334415b3/) and [Github](https://github.com/Nadia-Kadri).<br>
# Arrowine-Cahier

Do you have a favorite wine/cheese/beer/specialty food retailer but can never remember what you bought last time? Overwhelmed by all the choices and looking for a better way to keep track of what you loved (and what you hated)? 

Mon Cahier is a simple web app to help track favorite purchases at any retailer. This app can be customized for and specific business use or left generic for general usage. 

## Usage

![alt text](https://github.com/PrairieWaltz/Arrowine-Cahier/blob/master/views/img/2022-05-26-4.png?raw=false)

A clean landing page will allow sign-up or sign-in buttons and a small nav with a "How it Works" section. 

![alt text](https://github.com/PrairieWaltz/Arrowine-Cahier/blob/master/views/img/2022-05-26-3.png?raw=true)

A condensed "My Favorites" section to list all items in user db history. Items will cascade from top with highest rating first. In the event of duplicate ratings sort will default to date added with earlier sorting higher. 
The nav bar will swap to offer only needed items. "How it Works", "Sign-In" and "Sign-Up" are replaced by "Home", "All Favorites" and "Add a New Favorite". 

![alt text](https://github.com/PrairieWaltz/Arrowine-Cahier/blob/master/views/img/2022-05-26-8.png?raw=true)

Each item on the Favorites list will contain a single button which navigates to a larger details page. Only addition to details page will be price at time of purchase (can be left blank by user) and an "Edit" and "Delete" button for further action. 

![alt text](https://github.com/PrairieWaltz/Arrowine-Cahier/blob/master/views/img/2022-05-26-6.png?raw=true)

## Configuration

Mon Cahier uses Node.js, Express and Mongoose for primary function. 

### Dependencies
- express (4.18.1)
- ejs (3.1.8)
- ejs-mate (4.0.0)
- method-override (3.0.0)
- mongoose (6.3.4)

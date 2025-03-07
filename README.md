AUCTION SYSTEM PROJECT

This is a simple auction system where users can:

1- Register and log in.
2- Manage their user profiles (update or delete their accounts).
3- Bid on auction items.
4- Add, edit, and delete auction items.
5- Simulate item purchases using Stripe.
6- Download a text file containing the auction item description.
7- The project is built with:

Backend: Express.js with MongoDB
Frontend: EJS and plain JavaScript

For more detailes about what else is used you can check the package.json  dependencies. 

INSTALLATION & SETUP:

You need to have MongoDB setup in your computer since the system uses database for everthing.

Clone the repository :
git clone https://github.com/EFEOZTRK/REST.git
,
Change directory to REST folder : 
cd REST
,
Fill in the .env file with your mongoDB connection string 
and fill the Stripe Publishable/Secret Keys with yours.(You need to open a Stripe account if you dont have already).
,
After these steps You can finally enter the webpage. To do this while inside the REST directory enter this on your command line:

nodemon express

After that you should get a message that server is running on port 3000 and the link to webpage.(You might need to use another port if your port 3000 is occupied.)
The link there will take you to Register page. and from there you can navigate your way.
Also finally YOU MUST PRESS THE LOGIN/REGISTER BUTTONS NOT (ENTER on your keyboard) SINCE I forgot to code it that way :D .




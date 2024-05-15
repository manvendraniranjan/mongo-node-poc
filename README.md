# mongo-node-poc

## About:
This POC is for educational purposes only to learn node.js and mongodb and should not be used in production environments due to security concerns. Consider implementing robust security measures (e.g., session management, input validation) before deploying a real-world application.

## How to setup
- To Initialize a Node.js project and Install Express.js, Mongoose, and bcrypt for password hashing, Run the setup.sh file
```
source setup.sh
```
### Set Up MongoDB:
If you don't have a MongoDB instance running locally, Install the MogoDB database.
- For MacOS
``` 
brew tap mongodb/brew
brew update
brew install mongodb-community@7.0
which mongod
```
MongoDB is Install sucessfully.
- For GUI, Install MongoDB Compass from the website:
https://www.mongodb.com/products/tools/compass

- Update the db.js file with your MongoDB connection details (URI, username, password).

## Installing Dependencies:

When collaborators clone your repository, they can install the required dependencies using the `npm install` command:
```
npm install
OR
yarn install
```

## Use the code or Run the code
- Run the MongoDB database
```
mongod --dbpath /Users/manvendra/data/db
```

### Start the Development Server:
```
node index.js
```
This will start the Node.js server and connect to the MongoDB database (if configured).

# Author: 
- Manvendra S. Niranjan
- manvendraniranjan528@gmail.com

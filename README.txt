Setup Instructions 
* To run server (backend)
1. Install nodeJS, npm, nodemon, express, cors
2. Install all dependency packages refering to package.lock and nodemodules 
3. npm install <package name>
4. cd demo-project
5. npm run app

Note: The backend will run on port 8082

(Should get MongoDB successfully connected message, can test backend query paths)
// If any errors, run following
$ npm install
$ npm run app

* To run frontend (client)
1. Install basic packages first
	$ npm install --save react-router-dom
	$ npm install --save axios
	$ npm install cors
2. Install all dependency packages refering to package.json and node modules
	use npm install <package-name> syntax

3. Finally, cd amazon-frontend
5. npm start

localhost must open with app if success!
(Should get MongoDB successfully connected message)

// If any errors, run following
$ npm install
$ npm run app


Please note: Your network IP must be added and validated tp access out dB 
as per privacy rules from Mongo Atlas Cloud!
As an alternative, a shorter dataset is included as CSV file which users
may use by configuring it to cloud service using their own secure key to test app.
This is for retaining privacy.


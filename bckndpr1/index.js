const express = require('express');
// const { exec } = require('child_process');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render("index");
});
app.get('/profile/:username/:age',(req,res)=>{
    res.send(`welcome,${req.params.username} of age ${req.params.age}`);
});


 
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
    // exec('start http://localhost:3000'); 
});


/*

// 1. IMPORTING CORE MODULES & DEPENDENCIES
const express = require('express'); // Imports the Express framework to help build our web server
const { exec } = require('child_process'); // Imports a feature from Node.js that lets us run terminal/system commands via code
const app = express(); // Initializes the Express application so we can use its methods (like app.get, app.use, etc.)
const path = require('path'); // Imports Node's built-in utility module for handling and formatting file system paths securely

// 2. CONFIGURING MIDDLEWARE & SETTINGS
app.use(express.json()); // Middleware: Parses incoming requests containing JSON payloads (makes req.body accessible for JSON data)
app.use(express.urlencoded({extended: true})); // Middleware: Parses incoming requests from HTML form submissions so you can read them in req.body
app.set('view engine', 'ejs'); // Configuration: Tells Express to use EJS (Embedded JavaScript) as the template/html engine for rendering views
app.use(express.static(path.join(__dirname, 'public'))); // Middleware: Tells Express to serve static files (like images, CSS, frontend JS) directly from the 'public' folder

// 3. DEFINE ROUTES
app.get('/', (req, res) => {
    // This route listens for HTTP GET requests coming to the root URL ("/") of your website
    res.render("index"); // Looks inside your 'views' folder for a file named "index.ejs" and compiles it into HTML to send to the browser
});

// 4. START THE SERVER
app.listen(3000, () => {
    // Starts the web server and makes it listen for incoming connections on port 3000
    console.log('Server is running on port 3000'); // Prints a confirmation message in your terminal so you know it started successfully
    exec('start http://localhost:3000'); // Run a terminal command to automatically open your default web browser to your local website (Windows specific)
});



*/




/*

// Import the Express framework
const express = require('express');

// Import exec() from child_process module
// Used to execute system commands from Node.js
const { exec } = require('child_process');

// Create an Express application
const app = express();

// Import path module
// Helps work with file and folder paths safely
const path = require('path');


// ================= MIDDLEWARE =================

// Middleware to parse JSON data coming from requests
// Example:
// {
//   "name": "Mohit"
// }
app.use(express.json());

// Middleware to parse form data submitted from HTML forms
// extended: true allows nested objects in form data
app.use(express.urlencoded({ extended: true }));


// ================= VIEW ENGINE =================

// Set EJS as the template engine
// This allows rendering .ejs files
app.set('view engine', 'ejs');


// ================= STATIC FILES =================

// Serve static files from the "public" folder
// Example:
// public/style.css
// public/script.js
// public/images/logo.png
//
// Accessible in browser directly as:
// /style.css
// /script.js
app.use(express.static(path.join(__dirname, 'public')));


// ================= ROUTES =================

// GET request for homepage
// URL: http://localhost:3000/
app.get('/', (req, res) => {

    // Render views/index.ejs
    // No need to write .ejs extension
    res.render('index');

});


// ================= SERVER =================

// Start server on port 3000
app.listen(3000, () => {

    console.log('Server is running on port 3000');

    // Automatically open browser when server starts
    // "start" is a Windows command
    exec('start http://localhost:3000');

});


*/
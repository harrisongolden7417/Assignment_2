
let express = require('express');
let router = express.Router();

// Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// About Me page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Contact Me page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});


/* Handle contact form submissions */
router.post('/contact', function(req, res, next) {

    // Retrieve information submitted through the form
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let message = req.body.message;

    // Display a confirmation page
    res.render('contact-success', {
        title: 'Message Received',
        name: name
    });

});


module.exports = router;

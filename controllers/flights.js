const Flight = require('../models/flight')

module.exports = {
    newFlight,
    create,
    index,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) return res.redirect('/');
        res.render('flights/index', {flights});
    });
}

function create(req, res) {
    req.body.departs = req.body.departs || undefined;
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }

function newFlight(req, res) {
    res.render('flights/new');
}












// const Flight = require('../models/flight')


// module.exports = {
//     create,
// }

// function create(req, res) {
//     flight.findById(req.params.id, function(err, flight) {
// //we can push subdocs into Mongoose arrays
//         flight.reviews.push(req.body);
// //save any changes made to the flight doc
//         flight.save(function(err) {
// //Step 5 respond to the request, redirect if data is changed
//             res.redirect(`/flights/${flight._id}`);
//         });
//     }); 
// }
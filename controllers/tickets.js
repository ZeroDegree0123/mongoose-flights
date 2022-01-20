
const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    newTicket,
    create
}

function create(req, res) {
    const ticket = new ticket(req.body)
    res.redirect('/flights')
}

function newTicket(req, res) {
    res.render('tickets/new', { Flight})

}
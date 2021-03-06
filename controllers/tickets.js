const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    res.render("tickets/new", {title: "", flightID: req.params.id})
}

function create(req, res) {
    let ticketObj = {
        flight: req.params.id,
        seat: req.body.seat,
        price: req.body.price,
    };
    const ticket = new Ticket(ticketObj);
    ticket.save(function (err) {
       if(err) {
           console.log(err)
        res.render('tickets/new', {title: "Tickets", flightID: req.params.id })}
        res.redirect(`/flights/${req.params.id}`);
    });
}
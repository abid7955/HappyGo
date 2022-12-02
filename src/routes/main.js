const express = require('express');
const { route } = require('express/lib/application');
const routes = express.Router();
routes.get("/", (req, res) => {
    res.render("introjson")
})
routes.get('/Homepage', (req, res) => {
    res.render("Homepage")
})
routes.get('/card', (req, res) => {
    res.render("card")
})
routes.get('/common-disorders', (req, res) => {
    res.render("common-disorders")
})
routes.get('/login', (req, res) => {
    res.render("login")
})
routes.get('/signup', (req, res) => {
    res.render("signup")
})
routes.get('/survey1', (req, res) => {
    res.render("survey1")
})
module.exports = routes
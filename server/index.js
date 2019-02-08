require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cr = require('./controller')
const session = require('express-session')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express();

app.use(express.json());
app.use(
    session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false 
})
)
//login stuff
app.post('/api/register', cr.register)
app.post('/api/login', cr.login)


//post filters
app.get('/api/post/:user/:search')

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => console.log(`Now arriving at ${SERVER_PORT}`));
})

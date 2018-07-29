const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register.js');
const signin = require('./controllers/signin.js');
const profile = require('./controllers/profile.js');
const image = require('./controllers/image.js');

const db = knex({
	client: 'pg',
  	connection: {
    host : '127.0.0.1',
    port: '5433',
    user : 'postgres',
    password : '159preprepre',
    database : 'smartbrain'
  }
});

// db.select('*').from('users').then(data => {
// 	console.log(data);
// });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{
	db.select('*').from('users')
	.then(data =>{
		res.json(data)				//TODO sort in ascending order
	})
})

app.post('/signin', (req,res) => {signin.signinHandler(req, res, db, bcrypt)})	//check user email and check password against hashed password

app.post('/register', (req,res) => {register.registerHandler(req, res, db, bcrypt)})	//register user info

app.get('/profile/:id',(req,res) => {profile.profileHandler(req, res, db)}) ///get username

app.put('/image', (req,res) => {image.imageHandler(req, res, db)})	//increment entriy count for each image

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
	console.log(`app is running on port ${PORT}`);
})

/*
res -> thisis working
/signIn -> POST = success/fail
/register -> POST = new user
/profile/:userId -> GET = user
/image -> PUT = user's score 
*/


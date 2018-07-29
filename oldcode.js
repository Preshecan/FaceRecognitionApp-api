// // bcrypt.compare(database.users[2].password, database.login.hash, function(err, res) { //compare encrypted password to stored hash, test by registering a user then loging in with same info
	// // 	console.log(res);//true/false
	// // 	console.log(database.login.hash);//hashed password
	// // });
	// if(req.body.email === database.users[0].email &&
	// 	req.body.password === database.users[0].password){
	// 	res.json(database.users[0]);
	// }else{
	// 	res.status(400).json('error signing in');
	// }

// 	const database = {
// 	users: [
// 		{
// 			id:'123',
// 			name:'John',
// 			email: 'john@gmail.com',
// 			password: '123',
// 			entries: 0,
// 			joined: new Date()
// 		},
// 		{
// 			id:'1234',
// 			name:'Sally',
// 			email: 'sally@gmail.com',
// 			password: '1234',
// 			entries: 0,
// 			joined: new Date()
// 		}
// 	],
// 	login: [
// 		{
// 			id: '365',
// 			hash: '',
// 			email:'john@gmail.com'
// 		}
// 	]
// }

// app.get('/', (req,res)=>{
// 	res.send(database.users);
// })

//- /profile/:id
// database.users.forEach(user =>{
	// 	if(user.id === id){
	// 		found = true;
	// 		return res.json(user);
	// 	}
	// })
	// if(!found){
	// 	res.status(400).json('user not found');
	// }	

//- /image
	// let found = false;

	// database.users.forEach(user =>{
	// 	if(user.id === id){
	// 		found = true;
	// 		user.entries++;
	// 		return res.json(user.entries);
	// 	}
	// })
	// if(!found){
	// 	res.status(400).json('user not found');
	// }
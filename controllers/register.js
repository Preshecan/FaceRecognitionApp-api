const registerHandler = (req,res, db, bcrypt) => {
	const {email, name, password} = req.body;

	if(!email || !password || !name){
		return res.status(400).json('Numpty alert! Form incomplete!');
	}

	const hash = bcrypt.hashSync(password);			//syncronous hash password encryption
		db.transaction(trx => {			//transaction is used to do more than 1 thing at once, here we apply data to both the login and user table, 
			trx.insert({				//trx is now the same as db object
				hash: hash,
				email: email
			})
			.into('login')
			.returning('email')
			.then(loginEmail => {
				return trx('users')
				.returning('*')			//returns all data for that user
				.insert({
				email: loginEmail[0],
				name: name,
				joined: new Date()
				}).then(user =>{
					res.json(user[0]);		//knex returns array so only output the user being delt with
				})
			})
			.then(trx.commit)
			.catch(trx.rollback)
		})
		
	.catch(error => res.status(400).json('unable to register'))
}

module.exports = {
	registerHandler: registerHandler
}
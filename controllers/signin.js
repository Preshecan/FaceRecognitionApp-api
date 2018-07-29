const signinHandler = (req,res, db, bcrypt) => {
	const {email, password} = req.body;

	if(!email || !password){
		return res.status(400).json('Numpty alert! Form incomplete!');
	}

	db.select('email', 'hash').from('login')		//take login data to be compared
	.where('email', '=' , email)			//transaction not used here as the credentials are only being checked, not modified
	.then(data => {
		const isValid = bcrypt.compareSync(password, data[0].hash);		//compare password with hash
		if(isValid){
			return db.select('*').from('users')
			.where('email', '=', email)
			.then(user =>{
				res.json(user[0])
			})
			.catch(err => res.status(400).json('unable to get user'))
		}else{
			res.status(400).json('wrong credentials')
		}
	})
	.catch(err => res.status(400).json('wrong credentials'))
}

module.exports = {
	signinHandler: signinHandler
}
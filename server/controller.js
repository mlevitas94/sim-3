module.exports = {
    register: async (req,res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        const newUser = await db.register([username, password])

        if(newUser){
            res.status(201).send('youre acount has been created, ' + username + '!')
        }else {
            res.status(418).send('something went wrong out here mang')
        }

        
    },

    login: async (req,res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        let logedUser = await db.login_check({user: username, pass: password})
        logedUser = logedUser[0]

        if(!logedUser){
            res.status(418).send('incorrect username or password broh')
        }else{
            delete logedUser.password;
            delete logedUser.extra_two;
            res.status(200).send(logedUser)
        }
    }
}
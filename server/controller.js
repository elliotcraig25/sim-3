const bcrypt = require('bcryptjs');

module.exports ={
    register: async (req, res)=>{
        // console.log(req.body)
        const {username, password} = req.body;
        // console.log({username}, {password})
        const {session} = req;
        const db = req.app.get('db');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.user.register(
            {user: username, pass: hash}
        );
        newUser = newUser[0];
        // console.log({newUser});  
        // console.log({session}); 
        session.user = {...newUser};
        // console.log({session});  
        res.status(201).send(session.user);
    }
}
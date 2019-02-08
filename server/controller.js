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
    },
    login: async (req, res)=>{
        const {username, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let user = await db.user.login(
            {user: username}
        );
        user = user[0];
        // console.log({user})
        if(!user){
            return res.sendStatus(401);
        };
        const foundUser = bcrypt.compareSync(
            password, user.password
        );
        if(foundUser){
            delete user.password;
            session.user = user;
            res.status(200).send(session);
        }else{
            res.sendStatus(401);
        };
    }, 
    logout: (req, res)=>{
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res)=>{
        const {user} = req.session;
        console.log('the user', {user});
        if(user){
            res.status(200).send(user);
        }else{
            res.sendStatus(401);
        };
    },
    postPost: (req, res)=>{
        const {title, img, content} = req.body;
        console.log({title}, {img}, {content});
    }
}
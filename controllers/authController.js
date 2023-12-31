
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const sendMail = require('../sendMail')
const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = await User.findOne({username:user}).exec();
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        // Saving refreshToken with current user
       foundUser.refreshToken=refreshToken;
       const result=await foundUser.save();
       console.log(result);
       
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}

const handleRegister= async (req, res) => {
    const { instituteName, firstName ,lastName , designation, address, email ,contactNumber } = req.body;
    // 
    console.log(`registering ${firstName}`)
    if (!firstName || !email || !contactNumber) return res.status(400).json({ 'message': 'Some fields are missing.' });
     // check for duplicate usernames in the db
    // const duplicate = await User.findOne({username:user}).exec();
    // if (duplicate) return res.sendStatus(409); //Conflict
    try {
        const newUser = await prisma.User.create({
            data: {
                firstName,
                lastName,
                address,
                designation,
                email,
                contactNumber,
            }
        });
        await sendMail(email,"Login Credentials",
        `Welcome to AICTE WEB PORTAL \n 
         Following are your login credentials : 
         Username = ${firstName + lastName}
         password = ${newUser.id}
        `);
        res.status(201).json({ 'success': `New user ${firstName} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message  });
    }
}


module.exports = { handleLogin,handleRegister };
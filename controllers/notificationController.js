const sendMail = require('../sendMail');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const handleScrutinyNotification = async (req,res)=>{
    const { userId} = req.body;
    try{
        const user = await prisma.user.findUnique({
            where: {
              id: userId,
            },
         })
        await sendMail(user.email,"APPLICATION SCRUTINY COMPLETED ",
         `Dear ${user.firstName} ${user.lastName} \n
          Your Approval Process has been succesfully scrutinized by the government \n
          Kindly check the dashboard for further steps
         `);
        res.status(201).json({ 'success': `New user ${user.firstName} created!` });
    }
    catch (err) {
        res.status(500).json({ 'message': err.message  });
    }
    
    
}
module.exports = { handleScrutinyNotification };
require('dotenv').config();
const multer = require('multer');
const fs = require('fs')
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const createpdf = require("./index")
const PORT = process.env.PORT || 3500;  
const { TogetherAI } = require("@langchain/community/llms/togetherai");
const { PromptTemplate } = require("langchain/prompts");

// custom middleware logger
// app.use(logger);
// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
// app.use(credentials);

// const llm = new TogetherAI({
//     modelName: "togethercomputer/llama-2-70b-chat",
//     apiKey:"d8ec7106bd0c268bf4672dba83272b86054fbe849eba82f3f75ceb17e6d57eb0"
//   });
//   const prompt = PromptTemplate.fromTemplate(`System: You are a helpful assistant. The next input you get cotains strings 
//   each of which are in between <s_nm> and </s_nm>, return those strings by separating them with a comma.
//   User: {input}.
//   Assistant:`);
// Cross Origin Resource Sharing
app.use(cors(corsOptions));
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

async function query(filename) {
    const data = fs.readFileSync(filename);
    const response = await fetch(
        "https://api-inference.huggingface.co/models/jinhybr/OCR-Donut-CORD",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: data,
        }
    );
    
    const result = await response.json();
    console.log("result",result)
    
}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads'); // Specify the directory where you want to save the uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
    },
  });
  const upload = multer({storage: storage});
  
  app.post('/upload', upload.single('image'), async(req, res) => {
    // Handle the uploaded image here
    console.log("reached")
    const result = await query('./uploads/1703036025046.jpg');
    res.status(201).json({ 'message': 'Document recieved' });
    // query("cats.jpg").then((response) => {
    //     console.log(JSON.stringify(response));
    // });
  });
// app.use(verifyJWT);
app.get('/templateGeneration',async (req,res)=>{
    console.log("reached")
    try {
        await createpdf("pdf/form5.pdf", "result.pdf");
        res.status(201).json({ 'message': 'Document Uploaded to firebase' });
    } catch (error) {
        console.error('Error creating Template:', error);
        res.status(500).json({ 'error': 'Error creating template' });
    }
})
app.use('/projects', require('./routes/api/projects'));
app.use('/auth',require('./routes/auth/auth'))
app.use('/users', require('./routes/getUser'));
app.use('/notification',require('./routes/notifcation'));
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// })

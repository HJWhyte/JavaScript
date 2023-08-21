import * as dotenv from 'dotenv';           // Allows access to env variables
dotenv.config();                        

import { Configuration, OpenAIApi } from 'openai';                 // Import config and required API

const configuration = new Configuration ({
    apiKey: process.env.OPENAI,                       // Authorize via API Key
}); 

const openai = new OpenAIApi(configuration);   // Initialize OpenAI API SDK

import express from 'express';
import cors from 'cors';

const app = express();                    // Create express app
app.use(cors());                        // Cross-Origin Resource Sharing - Middleware (Research!)
app.use(express.json());              // App accepts JSON format

app.post("/dream", async (req, res) => {

    const prompt = req.body.prompt;   // Read request body prompt 

    const aiResponse = await openai.createImage({         // Create 1 image based off the prompt of selected size
        prompt,                  
        n: 1,
        size: '1024x1024',
    });

    const image = aiResponse.data.data[0].url;  // Image URL response object
    res.send({ image });  // Send image in response 
})


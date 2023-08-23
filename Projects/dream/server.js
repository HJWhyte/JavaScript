import * as dotenv from 'dotenv';           // Allows access to env variables
dotenv.config();                        

import OpenAI from "openai";                 // Import config and required API

const openai = new OpenAI({
    apiKey: process.env.OPENAI
});                                                    // Initialize OpenAI API SDK

import express from 'express';
import cors from 'cors';

const app = express();                    // Create express app
app.use(cors());                        // Cross-Origin Resource Sharing - Middleware (Research!)
app.use(express.json());              // App accepts JSON format

app.post("/dream", async (req, res) => {

    const prompt = req.body.prompt;   // Read request body prompt 

    const aiResponse = await openai.images.generate({         // Create 1 image based off the prompt of selected size
        prompt,                  
        n: 1,
        size: '512x512',
    });

    const image = aiResponse.data[0].url;  // Image URL response object
    res.send({ image });  // Send image in response 
})

app.listen(8080, () => console.log('View the app: http://localhost:8080/dream'));
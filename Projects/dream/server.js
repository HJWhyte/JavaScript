import * as dotenv from 'dotenv';           // Allows access to env variables
dotenv.config();                        

import { Configuration, OpenAIApi } from 'openai';                 // Import config and required API

const configuration = new Configuration ({
    apiKey: process.env.OPENAI,                       // Authorize via API Key
}); 

const openai = new OpenAIApi(configuration);   // Initialize OpenAI API SDK            
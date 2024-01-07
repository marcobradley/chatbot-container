const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');


const app = express();
const port = 3000;
const api_key = process.env.OPENAI_API_KEY 

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});
// Define a route to handle user prompts
app.post('/getChatResponse', async (req, res) => {
    const userPrompt = req.body.userPrompt;

    try {
        // Make a request to OpenAI API (replace 'YOUR_OPENAI_API_KEY' with your actual API key)
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            messages: [{ role: 'user', content: userPrompt }],
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': api_key,
            },
        });

        const chatResponse = response.data.choices[0].message.content;
        res.json({ chatResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
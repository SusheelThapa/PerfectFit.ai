// server.js

const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const cors = require('cors'); // Import cors
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const mindsdbApiUrl = process.env.MINDSDB_API_URL;

// Use morgan middleware for logging requests
app.use(morgan('dev'));

// Use cors middleware to allow requests from all origins
app.use(cors());

app.use(express.json());

// POST endpoint for predicting cloth sizes
app.post('/predict', async (req, res) => {
    try {
        console.log(req.body)
        const { weight, age, height } = req.body;

        const response = await axios.post(mindsdbApiUrl, {
            data: [
                { weight, age, height }
            ]
        });

        console.log('Response:', response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
            const responseData = response.data[0];

            if (responseData.size_explain) {
                const sizeExplain = JSON.parse(responseData.size_explain);
                const predictedValue = sizeExplain.predicted_value;

                res.json({ predicted_value: predictedValue });
            } else {
                throw new Error('size_explain not found in response');
            }
        } else {
            throw new Error('Empty or unexpected response format');
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

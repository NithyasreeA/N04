const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const authenticateToken = authRouter.authenticateToken;

// Generative AI adoption by industry data
router.get('/ai-adoption', authenticateToken, (req, res) => {
    const data = [
        { year: 2020, healthcare: 15, finance: 10, retail: 8 },
        { year: 2021, healthcare: 20, finance: 15, retail: 12 },
        { year: 2022, healthcare: 25, finance: 20, retail: 18 },
        { year: 2023, healthcare: 30, finance: 25, retail: 22 },
        { year: 2024, healthcare: 35, finance: 30, retail: 28 }
    ];
    res.json(data);
});

// Generative AI model efficiency data
router.get('/ai-efficiency', authenticateToken, (req, res) => {
    console.log('Authorization Header:', req.headers['authorization']);
    const data = [
        { year: 2020, gpt2: 75, gpt3: 85, gpt4: 90 },
        { year: 2021, gpt2: 80, gpt3: 88, gpt4: 92 },
        { year: 2022, gpt2: 85, gpt3: 91, gpt4: 95 },
        { year: 2023, gpt2: 90, gpt3: 94, gpt4: 97 },
        { year: 2024, gpt2: 90, gpt3: 96, gpt4: 98 }
    ];
    res.json(data);
});

module.exports = router;
const express = require('express');
const router = express.Router();

// Sample Data
let users = [
    {
        "id": 1,
        "name": "Osborn",
    },
    {
        "id": 2,
        "name": "Cay"
    },
    {
        "id": 3,
        "name": "Alfred"
    },
    {
        "id": 4,
        "name": "Godfred"
    }
];

router.get('/users', (req, res) => {
    res.json(users);
});

router.post('/users', (req, res) => {
    const user = {
        id: user.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.status(201).json(user);
});

module.exports = router;
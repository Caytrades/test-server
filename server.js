const express = require('express');
const server = express();
const port = 8080;

const useRoutes = require('./routes/user');

server.use('/api', useRoutes);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
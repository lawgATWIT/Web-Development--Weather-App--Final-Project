const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const BASE_PORT = process.env.PORT || 3000;
let server;

function startServer(port) {
    server = app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${port} is in use, trying ${port + 1}...`);
            startServer(port + 1); // Try the next port
        } else {
            console.error('Server error:', err);
        }
    });
}

// Start the server with the base port
startServer(BASE_PORT);

// Handle Ctrl + C (SIGINT) to close the server gracefully
process.on('SIGINT', () => {
    console.log('\nReceived SIGINT. Closing server...');
    if (server) {
        server.close(() => {
            console.log('Server closed successfully.');
            process.exit(0); // Exit with success code
        });
    } else {
        process.exit(0); // Exit if server wasn't started yet
    }
});
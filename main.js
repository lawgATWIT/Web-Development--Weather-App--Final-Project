const { app, BrowserWindow } = require('electron');
const path = require('path');
const { exec } = require('child_process');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1280, // Increased width for better layout
        height: 850, // Increased height for better layout
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        },
        frame: false, // Custom titlebar for the close button
        transparent: false, // Disable transparency for better UI stability
        roundedCorners: true, // Enable rounded corners
        backgroundColor: '#ffffff' // Ensure no scrollbar visibility issue
    });

    // Load the local server
    mainWindow.loadURL('http://localhost:3000'); // Ensure the server is running

    // Inject CSS to hide the scrollbar while allowing scrolling
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.insertCSS(`
            ::-webkit-scrollbar {
                display: none;
            }
            body {
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */
            }
        `);

        mainWindow.webContents.executeJavaScript(`
            document.getElementById('exit-button').addEventListener('click', () => {
                fetch('http://localhost:3000/exit').then(() => {
                    window.close();
                });
            });
        `);
    });

    // Remove the dev tools for production
    // mainWindow.webContents.openDevTools(); // Comment this line to disable dev tools
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

## Tray

### In main.js:

        const { app, BrowserWindow, Menu, Tray } = require('electron');

        let tray;

        const createWindow = () => {
            const win = new BrowserWindow({
                width: 800,
                height: 600,
                backgroundColor: '#F7C136',
                icon: 'browser-icon.png',
            });

            win.loadFile('index.html')

            tray = new Tray('browser-icon.png')
            tray.setToolTip('Tray for electron')
        }

### setToolTip() - Sets the hover text for this tray icon.

### ty
// module imports
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        // frame: false,
        backgroundColor: '#F7C136',
        // alwaysOnTop: true,
        title: 'Electron App',
        webPreferences: {
            nodeIntegration: true
        },
        // resizable: false,
        icon: 'browser-icon.png',
    })

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow()
})
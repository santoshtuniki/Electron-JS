const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        backgroundColor: '#F7C136'
    });

    const child = new BrowserWindow({
        parent: win,
        backgroundColor: '#CAFF33',
        show: true
    });
    child.loadFile('child.html');

    win.loadFile('index.html');
    // win.webContents.openDevTools();
};

app.whenReady().then(() => {
    createWindow()
});
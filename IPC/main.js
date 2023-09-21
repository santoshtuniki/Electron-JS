const { app, BrowserWindow, ipcMain } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + '/preload.js',
        },
        backgroundColor: '#F7C136'
    });

    ipcMain.on('msg', (event, data) => {
        console.log(data)
    });

    win.loadFile('index.html')
    // win.webContents.openDevTools()

};

app.whenReady().then(() => {
    createWindow()
});
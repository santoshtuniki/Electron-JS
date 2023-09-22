const { app, BrowserWindow, ipcMain } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + '/preload.js',
            contextIsolation: true,
        },
        backgroundColor: '#F7C136',
        icon: 'browser-icon.png',
    });

    ipcMain.on('msg', (event, data) => {
        console.log(data)
        event.reply('reply', 'Thanks for the data')
    });

    win.loadFile('index.html')
    win.webContents.openDevTools()

};

app.whenReady().then(() => {
    createWindow()
});
// module imports
const { app, BrowserWindow } = require('electron');

console.warn('Main Process');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html');

    win.webContents.openDevTools();

}

app.whenReady().then(() => {
    createWindow()
})
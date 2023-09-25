const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#F7C136',
        icon: 'browser-icon.png',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html')
    win.webContents.openDevTools()
}

// console.warn(process)

console.warn("type", process.type)

console.warn("platform", process.platform)

console.warn("versions", process.versions)

app.on('ready', () => {
    console.warn(app.isReady())
    createWindow()
})
const { app, BrowserWindow, Menu } = require('electron');

let template = [
    {label: 'Blog'}
]

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#F7C136',
        icon: 'browser-icon.png',
    });

    win.loadFile('index.html')
}

app.on('ready', () => {
    console.warn(app.isReady())
    createWindow()
})
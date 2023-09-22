const { app, BrowserWindow, globalShortcut } = require('electron');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#F7C136',
        icon: 'browser-icon.png',
    });

    win.loadFile('index.html')
}

app.on('ready', () => {
    createWindow()
    globalShortcut.register('Shift+K', () => {
        // win.loadFile('other.html')
        console.warn('K + shift is pressed')
    })
})
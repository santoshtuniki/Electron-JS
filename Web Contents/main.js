const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#F7C136',
        icon: 'browser-icon.png',
    });

    win.loadFile('index.html')

    let wc = win.webContents;

    wc.on('dom-ready', () => {
        console.warn('app is ready now')
    })

    wc.on('did-finish-load', () => {
        console.warn('app loading is finished')
    })

    wc.on('new-window', () => {
        console.warn('new window is open')
    })

    wc.on('before-input-event', (event) => {
        console.warn('some event input is called', event)
    })
}

app.on('ready', () => {
    createWindow()
})
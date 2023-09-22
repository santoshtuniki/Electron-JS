const { app, BrowserWindow, dialog, globalShortcut } = require('electron');

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
    createWindow()

    globalShortcut.register('Shift + K', () => {
        dialog.showOpenDialog({
            defaultPath: app.getPath('desktop'),
            buttonLabel: 'Select any File',
        }).then((result) => {
            console.log('result', result)
        })
    })
})
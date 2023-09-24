const { app, BrowserWindow, Menu } = require('electron');

const template = [
    {label: 'item 1'},
    {label: 'item 2'},
    {label: 'Close', role: 'quit'},
    {label: 'Minimize', role: 'minimize'}
]

const contextMenu = Menu.buildFromTemplate(template);

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#F7C136',
        icon: 'browser-icon.png',
    });

    win.loadFile('index.html')
    
    win.webContents.on('context-menu', () => {
        contextMenu.popup()
    })
}

app.on('ready', () => {
    console.warn(app.isReady())
    createWindow()
})
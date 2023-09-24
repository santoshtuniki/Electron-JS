const { app, BrowserWindow, Menu, Tray } = require('electron');

let tray;

const template = [
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true }
]

const contextMenu = Menu.buildFromTemplate(template)

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#F7C136',
        icon: 'browser-icon.png',
    });

    win.loadFile('index.html')

    tray = new Tray('browser-icon.png')

    tray.setToolTip('Tray for electron')

    tray.setContextMenu(contextMenu)

    // tray.on('click', () => {
    //     win.isVisible() ? win.hide() : win.show()
    // })

}

app.on('ready', () => {
    console.warn(app.isReady())
    createWindow()
})
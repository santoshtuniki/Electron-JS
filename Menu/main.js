const { app, BrowserWindow, Menu } = require('electron');

const isMac = (process.platform === 'darwin');

const template = [
    // Menu-1
    ...isMac ? {
        label: 'Blog',
        submenu: [
            { label: 'About' },
            { label: 'Help' }
        ]
    } : [],
    // Menu-2
    {
        label: 'File',
    },
    // Menu-3
    {
        label: 'Operation',
        submenu: [
            isMac ? { label: 'Quit', role: 'close' } : { label: 'Quit', role: 'quit' },
            { label: 'Zoom' }
        ]
    },
]

const menu = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(menu)

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
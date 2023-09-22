const { app, BrowserWindow, ipcMain } = require('electron');
const windowStateKeeper = require('electron-window-state');

let win;

const createWindow = () => {
    // Load the previous state with fallback to defaults
    const mainWindowState = windowStateKeeper({
        defaultWidth: 900,
        defaultHeight: 600
    });

    // Create the window using the state information
    win = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        backgroundColor: '#F7C136',
        icon: 'browser-icon.png',
    });

    win.loadFile('index.html')

    /*
        Let us register listeners on the window, so we can update the state
        automatically (the listeners will be removed when the window is closed)
        and restore the maximized or full screen state
    */
    mainWindowState.manage(win);
}

app.on('ready', () => {
    console.warn(app.isReady())
    createWindow()
})
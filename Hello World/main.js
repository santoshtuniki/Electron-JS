/*
    Opening your web page in a browser window
    Now that you have a web page, load it into an application window. 

    To do so, you'll need two Electron modules:
    1)  The "app" module, which controls your application's event lifecycle.
    2)  The "BrowserWindow" module, which creates and manages application windows.
*/

// module imports   ( Common JS )
const { app, BrowserWindow } = require('electron');

// createWindow() function that loads index.html into a new BrowserWindow instance.
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}

// In Electron, browser windows can only be created after the app module's ready event is fired. 
// You can wait for this event by using the app.whenReady() API. 
app.whenReady().then(() => {
    createWindow()
})
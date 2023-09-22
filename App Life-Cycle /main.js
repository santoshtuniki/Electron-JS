const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#F7C136',
        icon: 'browser-icon.png',
    });

    win.loadFile('index.html')
}

// app.whenReady().then(() => {
//     createWindow()
// });

app.on('ready', () => {
    console.warn(app.isReady())
    createWindow()
})

/*
app.on('before-quit', (e) => {
    console.warn('called before quit')
    e.preventDefault()  // prevents File/Quit option
})
*/

/*
app.on('will-quit', (e) => {
    console.warn('called will quit')
    e.preventDefault()  // prevents fails
})
*/

/*
app.on('browser-window-focus', () => {
    console.warn('you are currently using this app')
})
*/

/*
app.on('browser-window-blur', () => {
    console.warn('you are not using this app')
})
*/
## webContents

### Render and control web pages.

### webContents is an EventEmitter.

### It is responsible for rendering and controlling a web page and is a property of the BrowserWindow object

### In main.js:

    let wc = win.webContents;

    wc.on('dom-ready', () => {
        console.warn('app is ready now')    // only dom is ready
    })

    wc.on('did-finish-load', () => {
        console.warn('app loading is finished')     // dom + html is ready
    })

    wc.on('new-window', () => {
        console.warn('new window is open')      // new child window is opened
    })

    wc.on('before-input-event', (event) => {
        console.warn('some event input is called', event)   // some event is called (keyDown, keyUp)
    })
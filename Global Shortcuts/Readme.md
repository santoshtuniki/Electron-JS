## globalShortcut

### Detect keyboard events when the application does not have keyboard focus.

### The shortcut is global. 

### It will work even if the app does not have the keyboard focus. 

### This module cannot be used before the ready event of the app module is emitted.

### Add in main.js:
        const { app, BrowserWindow, globalShortcut } = require('electron');
        
        app.on('ready', () => {
            createWindow()
            globalShortcut.register('Shift+K', () => {
                // win.loadFile('other.html')
                console.warn('K + shift is pressed')
            })
        })
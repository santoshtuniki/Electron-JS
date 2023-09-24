## Context Menu

### In main.js:

        const { app, BrowserWindow, Menu } = require('electron');

        const template = [
            {label: 'item 1'},
            {label: 'item 2'},
            {label: 'Close', role: 'quit'},
            {label: 'Minimize', role: 'minimize'}
        ]

        const contextMenu = Menu.buildFromTemplate(template);

        win.webContents.on('context-menu', () => {
            contextMenu.popup()
        })


### popup() - Pops up this menu as a context menu in the BrowserWindow.
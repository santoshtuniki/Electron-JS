## Tray

### Add icons and context menus to the system's notification area.

### In main.js:

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
        }

### setToolTip() - Sets the hover text for this tray icon.

### type - A string indicating the type of the item. Can be normal, separator, submenu, checkbox or radio.

### setContextMenu - Sets the context menu for this icon.

##  Menu

### Create native application menus and context menus.

### In main.js:

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

### template - An array of options for constructing a MenuItem. 

### buildFromTemplate - 'template' will become properties of the constructed menu items.

### setApplicationMenu - Sets 'menu' as the application menu on macOS. On Windows and Linux, the menu will be set as each window's top menu.

### label - A string indicating the item's visible label.

### submenu - A Menu containing the menu item's 'submenu', if present.

### role - A string indicating the item's role, if set. Can be undo, redo, cut, etc...

### process.platform - Returns a string identifying the operating system platform for which the Node.js binary was compiled.
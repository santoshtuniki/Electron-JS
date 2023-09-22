## dialog

### Display native system dialogs for opening and saving files, alerting, etc.

### In main.js:

    const { app, BrowserWindow, dialog, globalShortcut } = require('electron');

    globalShortcut.register('Shift + K', () => {
        dialog.showOpenDialog({
            defaultPath: app.getPath('desktop'),
            buttonLabel: 'Select any File'.
            // properties: ['openFile', 'multiSelections'],
        })
    })


### defaultPath - Where should the file browser open in default

### buttonLabel - Custom label for the confirmation button, when left empty the default label will be used.


## properties - Contains which features the dialog should use. Such as:

### openFile - Allow files to be selected.

### openDirectory - Allow directories to be selected.

### multiSelections - Allow multiple paths to be selected.
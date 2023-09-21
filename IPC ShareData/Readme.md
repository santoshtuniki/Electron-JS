# PASSING DATA FROM RENDERER TO MAIN USING ipcRenderer & ipcMain from ELECTRON

#### RENDERER    --->    MAIN


##  <--------------------MAIN.JS--------------------->

### Preload scripts contain code that executes in a renderer process before its web content begins loading. 

### These scripts run within the renderer context, but are granted more privileges by having "access to Node.js" APIs.

### To add preload.js to main.js:
        const createWindow = () => {
            const win = new BrowserWindow({
                width: 800,
                height: 600,
                webPreferences: {
                    preload: __dirname + '/preload.js',
                    contextIsolation: true,
                },
                backgroundColor: '#F7C136'
            });
        
            ipcMain.on('msg', (event, data) => {
                console.log(data)
                event.reply('reply', 'Thanks for the data')
            });
        
            win.loadFile('index.html')
            win.webContents.openDevTools()
        
        }

### "contextIsolation" is a security feature that isolates the JavaScript context of the renderer process from the Node.js context. 

### It helps prevent direct access to Node.js modules and APIs from the renderer process, which can be a security risk. 

### Instead, it encourages you to communicate between the main process (Node.js) and the renderer process using IPC (Inter-Process Communication).


##  <--------------------PRELOAD.JS--------------------->

###  In preload.js file, use the "contextBridge" to safely expose specific Node.js modules or functions to the renderer process:

### Add to preload.js:

    const { contextBridge, ipcRenderer } = require('electron')

    contextBridge.exposeInMainWorld('electronAPI', {
        dataToMain: () => ipcRenderer.send('msg', 'hello from renderer process'),
        dataToRender: () => ipcRenderer.on('reply', (event, data) => {
            console.log(data)
        })
    })


##  <--------------------RENDERER.JS--------------------->

### Now, in renderer.js file, we can access the "ipcRenderer" module via "window.electron.render".

### Add to renderer.js:

    function shareData() {
        window.electronAPI.dataToMain()
        window.electronAPI.dataToRender()
    }


##  <--------------------INDEX.HTML--------------------->

## Now using <script src="./renderer.js"></script> we can access the shareData() function.

## Use in onClick event:

    <button onclick="shareData()">Share Data</button>

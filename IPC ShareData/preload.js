const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    dataToMain: () => ipcRenderer.send('msg', 'hello from renderer process'),
    dataToRender: () => ipcRenderer.on('reply', (event, data) => {
        console.log(data)
    })
})
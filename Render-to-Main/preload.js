const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    render: () => ipcRenderer.send('msg', 'hello from renderer process')
})
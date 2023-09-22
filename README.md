### Electron-JS

		npm install --save-dev electron@15

### main.js:
		const { app, BrowserWindow, ipcMain } = require('electron');
		
		const createWindow = () => {
			const win = new BrowserWindow({
				width: 800,
				height: 600,
			});
				
			win.loadFile('index.html')
			win.webContents.openDevTools()
        }

		app.whenReady().then(() => {
			createWindow()
		});

### package.json:

		{
			"scripts": {
				"start": "electron ."
			}
		}

### Run command

		npm start
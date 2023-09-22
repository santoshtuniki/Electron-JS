## LINUX ELECTRON BUILD

    	npm install --save-dev electron@15 electron-builder

### Add in package.json:

    	"scripts": {
    		"start": "electron .",
    		"build": "electron-builder"
    	},

### Run in terminal:

    	npm run build

### This creates a folder 'dist' which is our build folder

### You can see the build software with extension ".AppImage"

### dist can't be uploaded due to it's size
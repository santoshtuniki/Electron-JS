### To make app frameless, in main.js:

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
    });

### To make app draggable, in index.html:

    <body style="user-select: none; -webkit-app-region: drag">
        <p>This is html body</p>
    </body>

### To avoid drag issues:

    <input type="range" style="-webkit-app-region: no-drag" />

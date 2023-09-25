## webFrame

### Customize the rendering of the current web page.

### In renderer.js:

        const { webFrame } = require('electron');

        function zoomIn() {
            webFrame.setZoomFactor(webFrame.getZoomFactor() + 1)
        }

        function zoomOut() {
            webFrame.setZoomFactor(webFrame.getZoomFactor() - 1)
        }

### In index.html:

        <head>
            <script src="renderer.js"></script>
        </head>

### setZoomFactor(factor) - Changes the zoom factor to the specified factor.

### getZoomFactor() - The current zoom factor.
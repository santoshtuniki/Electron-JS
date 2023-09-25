const { webFrame } = require('electron');

function zoomIn() {
    webFrame.setZoomFactor(webFrame.getZoomFactor() + 1)
}

function zoomOut() {
    webFrame.setZoomFactor(webFrame.getZoomFactor() - 1)
}
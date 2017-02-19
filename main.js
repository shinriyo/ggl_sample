const { app, BrowserWindow, ipcMain, crashReporter } = require('electron');
crashReporter.start({
    productName: 'YourName',
    companyName: 'YourCompany',
    submitURL: 'https://your-domain.com/url-to-submit',
    autoSubmit: true
})

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        resizable: true
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.focus();
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
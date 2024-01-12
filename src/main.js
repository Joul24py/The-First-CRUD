const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        icon: 'icon.png',
        autoHideMenuBar: true,
        width: 800,
        height: 600
    });
    
    win.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
    {
        app.quit();
    }
});
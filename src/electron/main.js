const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
const notifier = require("node-notifier");

let mainWindow

let window_options = {
  width: 800,
  height: 600,
  icon: path.join(__dirname, 'assets/icon/icon.png')
};

function createWindow () {
  mainWindow = new BrowserWindow(window_options)
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    // Dereference all windows
    mainWindow = null
  })
}

app.on('ready', createWindow)
// Quit when all windows are closed.
// Keep app alive in OS X ( right click -> quit in dock is preffered.)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// dock clicks
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

// let's disable that ugly menubar
app.on('browser-window-created',function(e,window) {
      window.setMenu(null);
});


ipcMain.on('sayhi', (event, arg) => {
  console.log("Message received: broadcasting...");

  notifier.notify({
    message: arg.body,
    title: arg.title,
    sound: true,
    icon: "",
    wait:true
  });

  notifier.on('click', function(notifierObject, options){
    console.log("clicked!");
    notifier.notify("Woah! Stop clicking on the notifications!");
  })
})

ipcMain.on('devtools', (event, arg) => {
  if(arg.command == "open"){
    mainWindow.webContents.openDevTools();
  }
})

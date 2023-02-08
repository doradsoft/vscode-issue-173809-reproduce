const { app, BrowserWindow } = require("electron");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 280,
    height: 140,
  });
  win.loadURL(`data:text/html,${encodeURIComponent(`<h1>Hello World!</h1>`)}`);
};
app.whenReady().then(() => {
  createWindow();
});

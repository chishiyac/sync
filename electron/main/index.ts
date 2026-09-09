import { join } from 'node:path'

import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import {
  app,
  BrowserWindow,
  ipcMain,
  nativeImage,
  shell
} from 'electron'

const PRELOAD_FILE_PATH = '../preload/index.mjs'
const SOURCE_FOLDER_PATH = '../renderer/index.html'

app.setName('Sync')

function getAppIcon() {
  // Resolve from the app root so the same file works in dev and in the packaged app.
  return nativeImage.createFromPath(
    join(app.getAppPath(), 'public', 'icon.png')
  )
}

function createWindow(): void {
  // Create the browser window.
  const appIcon = getAppIcon()
  const mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    center: true,
    fullscreen: true,
    height: 900,
    icon: appIcon,
    minHeight: 640,
    minWidth: 1024,
    resizable: true,
    show: false,
    title: 'Sync',
    webPreferences: {
      preload: join(import.meta.dirname, PRELOAD_FILE_PATH),
      sandbox: false
    },
    width: 1440
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.maximize()
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
  } else {
    mainWindow.loadFile(join(import.meta.dirname, SOURCE_FOLDER_PATH))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
async function bootstrap() {
  await app.whenReady()

  const appIcon = getAppIcon()

  // Set app user model id for windows
  electronApp.setAppUserModelId('com.sync.app')
  if (process.platform === 'darwin') {
    app.dock?.setIcon(appIcon)
  }

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
}

void bootstrap()

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

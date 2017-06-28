let createMenuClickHandler = require('./createMenuClickHandler')

module.exports = function fileMenu(appState) {
  let fileMenu = {
    label: 'File',
    submenu: [
      {
        label: 'Save',
        accelerator: 'CommandOrControl+S',
        enabled: appState.hasPendingChanges,
        click: createMenuClickHandler('save:requested')
      },{
        label: 'Export',
        enabled: appState.hasPendingChanges,
        click: createMenuClickHandler('export:requested')
      }
    ]
  }
  return fileMenu
}

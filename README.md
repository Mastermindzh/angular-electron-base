# angular-electron-base
This repo provides an elegant base for modern electron app development with Angular.
It includes all the commands necessary to take the app from development straight into release.

*An example which sends native system notifications by calling an Angular method is included as well.*

## Quickstart
To run the entire project in dev mode for the first time use:

- `npm install`
- `npm run dev`

## Theming
This branch includes angular material.

## npm run commands
This project includes several useful (required) npm commands, all of these can be run with: `npm run command`

**note**: Windows users can't run all of these commands (dev / build), append -windows to those commands and then they will work :).

| Command         | Function                                                                          |
|-----------------|-----------------------------------------------------------------------------------|
| dev             | Build and run (dev) app                                                           |
| webdev          | Run the angular app (without electron)                                            |
| build           | Build the production ready app (this also prepares for packaging)                 |
| start           | Runs the previous build command and starts the generated app                      |
| package         | Packages Linux, Mac and Windows apps and puts them into the release-builds folder |
| package-linux   | Packages the Linux app and puts it into the release-builds folder                 |
| package-mac     | Packages the Mac OS X app and puts it into the release-builds folder              |
| package-windows | Packages the Windows app and puts it into the release-builds folder               |

### Additional ("internal") commands called by previous commands
These commands ***can*** be called by the user but are mainly used by the commands above.

| Command         | Function                                                                          |
|-----------------|-----------------------------------------------------------------------------------|
| add-electron         | Runs a script which will create a package.json and copy all electron sources to the dist folder              |
| add-electron-windows | Exactly the same as the "add-electron" command but for Windows                                               |
| electron-run         | Runs electron with logging enabled                                                                           |
| package-prep         | Goes into the dist folder and runs an "npm install". When it's done it will go back to the working directory |
| ng-build             | Calls ng-build (with arguments)                                                                              |
| ng-build-prod        | Calls ng-build with the --prod flag                                                                          |

## Package explanation
The paragraphs below outline the most import packages in this repo/app. These packages should be checked out in order to work with them efficiently.

### node-notifier
Node-notifier provides an easy way to send cross-platform notifications.

Check out the [Github page](https://github.com/mikaelbr/node-notifier) for this project to learn more.

### ngx-electron
ngx-electron provides an Angular wrapper for Electron's APIs exposed as part of the renderer process.

Besides taking away the pain of correctly loading the APIs, it's also providing strongly typed APIs using @types/electron as a dependency.

Check out the [Github page](https://github.com/ThorstenHans/ngx-electron) for this project to learn more.


# Potential issues

## "node" command required
The `node` command is required, some (Ubuntu) distros use nodejs instead of node.
Use the following command to fix that:

`update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10`

## add-electron-Windows
`(robocopy .\\src\\electron\\ .\\dist\\  *.*) ^& IF %ERRORLEVEL% LEQ 1 exit 0`

This command looks weird and might require an explanation...

"Robocopy" is the "[Robust copy tool](https://technet.microsoft.com/en-us/library/cc733145(v=ws.11).aspx)" in Windows. (copy and xcopy apparantly perform abysmal)

The `^& IF %ERRORLEVEL% LEQ 1 exit 0` transforms the [unorthodox robocopy return code](https://ss64.com/nt/robocopy-exit.html) into a regular return code.

So... nothing to fear, just Windows being Windows again :).


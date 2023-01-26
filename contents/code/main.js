var desktopState = {
    ourChange: false
}

var dynamicDesktopName = " ";

function createDesktop(i, string) {
    desktopState.ourChange = true;
    workspace.createDesktop(i, string);
    desktopState.ourChange = false;
}

function removeDesktop(i) {
    desktopState.ourChange = true;
    workspace.removeDesktop(i)
    desktopState.ourChange = false;
}

function moveAllWindows(source, destination) {
    var windows = workspace.clientList();
	for (var i = 0; i < windows.length; ++i) {
		if (windows[i].desktop == source) {
            windows[i].desktop = destination;
        }
    }
}

function renameDesktop(i, string) {
    desktopState.ourChange = true;
    createDesktop(i+1, string);
    moveAllWindows(i, i+1);
    removeDesktop(i);
    desktopState.ourChange = false;
}

function getNextUserDesktopNumber() {
    count = 0;
    for (i = 0; i < workspace.desktops; i++) {
        if (workspace.desktopName(i) != dynamicDesktopName) {
            count++;
        }
    }
    return count;
}

function numberDesktopsChanged(old_number)
{
    // If the user has changed the number of desktops
    if (!desktopState.ourChange) {
        if (workspace.desktops > old_number) {
            name = "Desktop " + getNextUserDesktopNumber();
            renameDesktop(workspace.desktops-1, name);
        }
    }
}

function installDynamicDesktop(){
    createDesktop(workspace.desktops, dynamicDesktopName);

    // Changing the number of desktops will call a function
    workspace.numberDesktopsChanged.connect(numberDesktopsChanged);
}

installDynamicDesktop();

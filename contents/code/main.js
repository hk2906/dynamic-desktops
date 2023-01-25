var desktopState = {
    ourChange: false
}

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

function renameDesktop(i, string) {
    desktopState.ourChange = true;
    createDesktop(i+1, string);
    removeDesktop(i);
    desktopState.ourChange = false;
}


function numberDesktopsChanged(old_number)
{
    // If the user has changed the number of desktops
    if (!desktopState.ourChange) {

        }
    }
}

function installDynamicDesktop(){
    // Changing the number of desktops will call a function
    workspace.numberDesktopsChanged.connect(numberDesktopsChanged);
}

installDynamicDesktop();

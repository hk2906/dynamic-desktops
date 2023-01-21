var desktopState = {
    ourChange: false
}

function createDesktop(i, string) {
    desktopState.ourChange = true;
    workspace.createDesktop(i, string);
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

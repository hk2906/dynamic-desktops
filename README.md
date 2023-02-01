# dynamic-desktops
KWin script to automatically add &amp; remove additional virtual desktops.  Includes the option to maximize windows to their own virtual desktops.  Currently a work in progress.

Current state:
- When the user creates a new desktop manually, its name (Desktop n) is based on the number of static desktops, not the total number of desktops
- Any desktop can be renamed by the user to " " in order to become dynamic

Next steps:
- Creating a new dynamic desktop when the rightmost dynamic desktop is not empty
- Removing any empty dynamic desktops that are not the rightmost one
- Logic for maximized windows

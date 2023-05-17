# KWin Dynamic Desktops
KWin script to automatically add &amp; remove additional virtual desktops.  Includes the option to maximize windows to their own virtual desktops.  Work on this project is currently on pause whilst I complete my final university assessments.

Due to the incredibly sparse documentation for the KWin scripting API, and debugging being very awkward, I don't see a minimum viable product based on my current work being possible.  I'm about to start work combining two scripts that have the features required for a MVP into one script, such that they are compatible with each other.  Once that is complete, I will resume attempts to improve the features.

Current state:
- When the user creates a new desktop manually, its name (Desktop n) is based on the number of static desktops, not the total number of desktops
- Any desktop can be renamed by the user to " " in order to become dynamic
- Creates new dynamic desktop when the rightmost desktop is not empty
- Removes *some* empty dynamic desktops that are not the current or rightmost one

Future steps (on hold):
- Creating a new dynamic desktop when the rightmost *dynamic* desktop is not empty
- Removing *any* empty dynamic desktops that are not the rightmost one
- Logic for maximized windows

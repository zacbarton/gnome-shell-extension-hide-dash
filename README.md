Hide Dash
=========

The gnome-shell-extension hide-dash is a simple extension that hides the dash
from the activities overview. 

If you find you don't use the dash or have a smaller screen you can use this
extension to hide the dash and allow the windows and application tabs to have a
close to full-screen area.

Setup
-----

1. To install the extension, clone this repository using

    git clone git://github.com/zacbarton/gnome-shell-extension-hide-dash.git '~/.local/share/gnome-shell/extensions/hide-dash@zacbarton.com'

2. Load the extension by restarting the gnome-shell (&lt;Alt&gt; + F2 and enter "r") or log out and in again.

3. enable the extension by opening `gnome-tweak-tool` and selecting it under `extensions` or

    gsettings set org.gnome.shell enabled-extensions "$(gsettings get org.gnome.shell enabled-extensions | sed -e 's/.\{1\}$//'), 'hide-dash@zacbarton.com']"

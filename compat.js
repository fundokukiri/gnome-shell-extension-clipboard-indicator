import Clutter from 'gi://Clutter';
import * as Config from 'resource:///org/gnome/shell/misc/config.js';

const SHELL_MAJOR_VERSION = Number.parseInt(Config.PACKAGE_VERSION.split('.')[0], 10);

/**
 * GNOME Shell 51 removed the deprecated St.BoxLayout:vertical property in
 * favour of the inherited Clutter.BoxLayout:orientation property.
 *
 * @param {boolean} vertical whether the box should lay out its children vertically
 * @returns {object} constructor properties valid for the running Shell version
 */
export function boxLayoutProps(vertical = true) {
    if (SHELL_MAJOR_VERSION >= 51) {
        return {
            orientation: vertical
                ? Clutter.Orientation.VERTICAL
                : Clutter.Orientation.HORIZONTAL,
        };
    }

    return { vertical };
}

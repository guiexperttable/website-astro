import { ActionId } from "./action-id.type";
/**
 * Class representing a mapping of Windows shortcut keys to action IDs.
 */
export declare class WindowsShortcutActionIdMapping {
    get(): {
        [key: string]: ActionId;
    };
}

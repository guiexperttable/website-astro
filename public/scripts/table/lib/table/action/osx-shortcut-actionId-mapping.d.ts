import { ActionId } from "./action-id.type";
/**
 * Class representing the mapping of OS X shortcut actions to action IDs.
 *
 * @class OsxShortcutActionIdMapping
 */
export declare class OsxShortcutActionIdMapping {
    get(): {
        [key: string]: ActionId;
    };
}

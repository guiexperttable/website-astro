import { AreaIdent } from "../tablemodel/area-ident.type";
import { AreaModelIf } from "../tablemodel/areamodel/area-model.if";
import { TableScope } from "../../table-scope";
/**
 * Represents data about a mouse target. It's a helper class to extract all information from the target HTMLElement.
 */
export declare class MouseTargetData {
    rowIdx: number;
    colIdx: number;
    areaIdent?: AreaIdent;
    areaModel?: AreaModelIf;
    row?: any;
    value?: any;
    action: string | null;
    inputType: string | null;
    className: string;
    constructor(eventTarget: EventTarget | null, tableScope: TableScope);
}

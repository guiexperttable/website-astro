import { TableCellUpdateEventIf } from "./table-cell-update-event.if";
import { AreaIdent } from "../../../tablemodel/area-ident.type";
export declare class TableCellUpdateEvent implements TableCellUpdateEventIf {
    area: AreaIdent;
    rowIndex: number;
    columnIndex: number;
    value: any;
    cssClasses: {
        [key: string]: boolean;
    };
    constructor(area: AreaIdent, rowIndex: number, columnIndex: number, value: any, cssClasses?: {
        [key: string]: boolean;
    });
}

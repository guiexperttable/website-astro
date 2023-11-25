import { CellRange } from "../../common/cell-range";
import { AreaModelIf } from "./area-model.if";
import { TableModelIf } from "../table-model.if";
export declare class ColAndRowspanModel {
    protected tableModel: TableModelIf;
    protected areaModel: AreaModelIf;
    protected colAndRowspanRanges: CellRange[] | undefined;
    constructor(tableModel: TableModelIf, areaModel: AreaModelIf);
    init(): void;
    getRanges(): CellRange[];
    isInRange(rowIndex: number, columnIndex: number): boolean;
}

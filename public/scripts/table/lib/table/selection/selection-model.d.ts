import { CellRange } from "../data/common/cell-range";
import { ExtendedSelectionType, SelectionMode } from './selection.type';
import { SelectionModelIf } from "./selection-model.if";
export declare class SelectionModel implements SelectionModelIf {
    selectionType: ExtendedSelectionType;
    selectionMode: SelectionMode;
    protected ranges: CellRange[];
    protected negativeRanges: CellRange[];
    protected allSelected: boolean;
    constructor(selectionType?: ExtendedSelectionType, selectionMode?: SelectionMode);
    firstClick(rowIndex: number, columnIndex: number): void;
    getSelectionCount(rowIndex: number, columnIndex: number): number;
    isInNegativeRange(rowIndex: number, columnIndex: number): boolean;
    getRanges(): CellRange[];
    clear(): void;
    hasSelection(): boolean;
    selectAll(): void;
    addSelection(range: CellRange): void;
    removeSelection(range: CellRange): void;
    togglePoint(row: number, col: number): void;
    isSelected(row: number, col: number): boolean;
    private addRange;
}

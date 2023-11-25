import { CellRange } from "../data/common/cell-range";
export interface SelectionModelIf {
    togglePoint(row: number, col: number): void;
    getRanges(): CellRange[];
    clear(): void;
    hasSelection(): boolean;
    addSelection(range: CellRange): void;
    removeSelection(range: CellRange): void;
    getSelectionCount(rowIndex: number, columnIndex: number): number;
    selectAll(): void;
}

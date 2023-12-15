import { AreaModel, TableModelAndOptionsIf } from '../../../table/src/index.ts';
export declare function createLargeModelAndOptions(rowcount?: number): TableModelAndOptionsIf;
export declare class LargeBodyModel extends AreaModel {
    private rowcount;
    private readonly nf;
    constructor(rowcount?: number);
    getRowCount(): number;
    getRowHeight(_rowIndex: number): number;
    getValueAt(rowIndex: number, columnIndex: number): number | string;
}

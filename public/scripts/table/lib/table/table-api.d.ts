import { TableScope } from "./table-scope";
import { ColumnDefIf } from "./data/tablemodel/column/column-def.if";
import { TableCellUpdateEventIf } from "./data/common/event/input/table-cell-update-event.if";
export declare class TableApi {
    private readonly tableScope;
    constructor(tableScope: TableScope);
    /**
     * Updates the cells in the table based on the provided events.
     *
     * @param {TableCellUpdateEventIf[]} events - The array of events representing the updates to perform on the cells.
     * @param {boolean} [repaintAll=false] - Optional parameter indicating whether to repaint all cells or not. Default value is false. If true, the full table will be rendered. If false, the table cell will be rendered immediately.
     *
     * @return {void} - This method doesn't return anything.
     */
    updateCells(events: TableCellUpdateEventIf[], repaintAll?: boolean): void;
    /**
     * Notifies that the external filter has changed.
     *
     * @return {void}
     */
    externalFilterChanged(): void;
    /**
     * Scrolls the table body to the specified pixel coordinates.
     *
     * @param {number} px - The horizontal pixel coordinate to scroll to. Defaults to 0.
     * @param {number} py - The vertical pixel coordinate to scroll to. Defaults to 0.
     * @return {void}
     */
    scrollToPixel(px?: number, py?: number): void;
    /**
     * Scrolls to the specified index in both horizontal and vertical directions.
     *
     * @param {number} indexX - The index of the column to scroll to in the horizontal direction. Default is 0.
     * @param {number} indexY - The index of the row to scroll to in the vertical direction. Default is 0.
     *
     * @return undefined
     */
    scrollToIndex(indexX?: number, indexY?: number): void;
    /**
     * Sets whether the header is visible or not.
     *
     * @param _visible - A boolean value indicating whether the header should be visible. Default value is true.
     *
     * @return undefined
     */
    setHeaderVisible(_visible?: boolean): void;
    /**
     * Sets the visibility of a column in the table.
     *
     * @param {_column} - The column index or column definition to set visibility for.
     * @param {_visible=true} - The flag to set visibility to. true for visible, false for hidden.
     *
     * @return {void} - There is no return value.
     */
    setColumnVisible(_column: number | ColumnDefIf, _visible?: boolean): void;
    /**
     * Returns whether a column is visible or not.
     *
     * @param {number | ColumnDefIf} _column - The column index or the column definition.
     * @return {boolean} - True if the column is visible, false otherwise.
     */
    isColumnVisible(_column: number | ColumnDefIf): boolean;
    /**
     * Checks if the header is visible.
     *
     * @return {boolean} - Returns true if the header is visible, otherwise returns false.
     */
    isHeaderVisible(): boolean;
    /**
     * Sets the visibility of the footer.
     *
     * @param {boolean} _visible - Indicates whether the footer should be visible or not. Default value is true.
     *
     * @return {void} - This method does not return any value.
     */
    setFooterVisible(_visible?: boolean): void;
    /**
     * Determines if the footer is visible.
     *
     * @returns {boolean} True if the footer is visible, false otherwise.
     */
    isFooterVisible(): boolean;
    /**
     * Repaints the table.
     *
     * This method calls the repaint method of the tableScope object
     * to update and redraw the table based on the latest data.
     */
    repaint(): void;
}

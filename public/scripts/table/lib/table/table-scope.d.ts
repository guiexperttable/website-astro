import { TableModelIf } from "./data/tablemodel/table-model.if";
import { AreaIdent } from "./data/tablemodel/area-ident.type";
import { GeMouseEvent } from "./data/common/event/ge-mouse-event";
import { DomServiceIf } from "./service/dom-service.if";
import { TableOptionsIf } from "./data/options/table-options.if";
import { MouseHandler } from "./mouse-handler";
import { EventListenerIf } from "./event-listener.if";
import { TableApi } from "./table-api";
import { StoreStateCollapsedExpandService } from "./service/store-state-collapsed-expand.service";
import { StoreStateSortingService } from "./service/store-state-sorting.service";
import { RenderScope } from "./render-scope";
import { InputHandler } from "./input-handler";
import { SelectionService } from "./selection/selection-service";
import { GeKeyEvent } from "./data/common/event/ge-key-event";
import { OnActionTriggeredIf } from "./action/on-action-triggered.if";
import { ActionId } from "./action/action-id.type";
import { ShortcutService } from "./action/shortcut.service";
import { LicenseManager } from './license-manager';
/**
 * Creates a TableScope instance.
 * @param {HTMLDivElement} hostElement - The host element.
 * @param {TableModelIf} tableModel - The table model object.
 * @param {TableOptionsIf} [tableOptions=new TableOptions()] - Optional table options object.
 * @param {EventListenerIf} [eventListener=new EventAdapter()] - Optional event listener object.
 * @param {DomServiceIf} [domService=new SimpleDomService()] - Optional DOM service object.
 */
export declare class TableScope extends RenderScope implements OnActionTriggeredIf {
    protected readonly eventListener: EventListenerIf;
    licenseManager: LicenseManager;
    mouseHandler: MouseHandler;
    inputHandler: InputHandler;
    shortcutService: ShortcutService;
    storeStateCollapsedExpandService?: StoreStateCollapsedExpandService;
    storeSortingService?: StoreStateSortingService;
    protected selectionService: SelectionService;
    protected keyEvent?: GeKeyEvent;
    private api;
    private mouseStartAction;
    private mouseStartWidth;
    private mouseStartColumnIndex;
    private dragFrom;
    private dragTo;
    /**
     * Creates a TableScope instance.
     *
     * @param {HTMLDivElement} hostElement - The HTML div element that will contain the table.
     * @param {TableModelIf} tableModel - The table model object.
     * @param {TableOptionsIf} [tableOptions=new TableOptions()] - The optional table options object.
     * @param {EventListenerIf} [eventListener=new EventAdapter()] - The optional event listener object.
     * @param {DomServiceIf} [domService=new SimpleDomService()] - The optional DOM service object.
     *
     * @return {TableScope} - The newly created TableScope instance.
     */
    static create(hostElement: HTMLDivElement, tableModel: TableModelIf, tableOptions?: TableOptionsIf, eventListener?: EventListenerIf, domService?: DomServiceIf): TableScope;
    constructor(hostElement: HTMLDivElement, tableModel: TableModelIf, domService: DomServiceIf, tableOptions: TableOptionsIf, eventListener: EventListenerIf);
    onActionTriggered(actionId: ActionId): boolean;
    updateModelValueAfterEdit(areaIdent: AreaIdent, rowIndex: number, columnIndex: number, value: string): void;
    /**
     * Retrieves the TableApi object.
     *
     * @return {TableApi} The TableApi object.
     */
    getApi(): TableApi;
    /**
     * Initializes the table. Called by the table component.
     *
     * @function firstInit
     * @memberof TableScope
     *
     * @returns {TableScope} This instance of the table scope.
     */
    firstInit(): TableScope;
    /**
     * Creates a GeMouseEvent object based on a MouseEvent.
     *
     * @param {MouseEvent} mouseEvent - The MouseEvent object to create the GeMouseEvent from.
     * @return {GeMouseEvent} - The created GeMouseEvent object.
     */
    createGeMouseEvent(mouseEvent: MouseEvent): GeMouseEvent;
    /**
     * Handles the mouse down event.
     *
     * @param {GeMouseEvent} mouseEvent - The mouse event object.
     * @return {void}
     */
    onMouseDown(mouseEvent: GeMouseEvent): void;
    /**
     * Handles mouse dragging on the frame.
     *
     * @param {GeMouseEvent} mouseEvent - The mouse event object.
     */
    mouseDraggingOnFrame(mouseEvent: GeMouseEvent): void;
    /**
     * Handles the end of mouse dragging event on a frame.
     *
     * @param {GeMouseEvent} mouseEvent - The mouse event object.
     *
     * @returns {void}
     */
    mouseDraggingEndOnFrame(mouseEvent: GeMouseEvent): void;
    /**
     * Handles the mouse move event.
     *
     * @param {GeMouseEvent} mouseMoveEvent - The mouse move event object.
     * @return {void}
     */
    mouseMove(mouseMoveEvent: GeMouseEvent): void;
    /**
     * Triggers the context menu event based on the mouse move event.
     *
     * @param {GeMouseEvent} mouseMoveEvent - The mouse move event object.
     * @return {void}
     */
    contextmenu(mouseMoveEvent: GeMouseEvent): void;
    /**
     * Toggles the expand or collapse state of all items in the body area model.
     *
     * @param {boolean} [expand=true] - Whether to expand or collapse all items. Default is true.
     *
     * @return {void}
     */
    toggleExpandCollapseAll(expand?: boolean): void;
    /**
     * Toggles the checkbox state of a specific row in a table.
     *
     * @param {number} rowIdx - The index of the row to toggle the checkbox state.
     * @param {number} _colIdx - The index of the column. This parameter is unused.
     * @param {AreaIdent} areaIdent - The identifier of the table area.
     *
     * @return {void} - This method does not return anything.
     */
    toggleRowCheckbox(rowIdx: number, _colIdx: number, areaIdent: AreaIdent): void;
    /**
     * Handle mouse click events.
     *
     * @param {GeMouseEvent} evt - The mouse click event.
     * @param {GeMouseEvent | undefined} previousEvt - The previous mouse click event, if any.
     * @returns {void}
     */
    onMouseClicked(evt: GeMouseEvent, previousEvt: GeMouseEvent | undefined): void;
    /**
     * Updates the table (repaint) when an external filter is changed.
     *
     * @param {boolean} clearSelection - Indicates whether to clear the selection model or not. Default value is true.
     * @return {void}
     */
    externalFilterChanged(clearSelection?: boolean): void;
    /**
     * Handle the double click event on the table header.
     *
     * @param {MouseEvent} event - The mouse event that triggered the double click.
     * @param {number} _rowIdx - The row index of the header.
     * @param {number} colIdx - The column index of the header.
     *
     * @return {void}
     */
    onHeaderDblClicked(event: MouseEvent, _rowIdx: number, colIdx: number): void;
    /**
     * Changes the focus cell using the specified deltas.
     *
     * @param {number} dx - The delta for the column index.
     * @param {number} dy - The delta for the row index.
     * @return {boolean} - True if the focus cell was changed, false otherwise.
     */
    private changeFocusCell;
    /**
     * Resizes the column based on the mouse event.
     *
     * @param {GeMouseEvent} mouseEvent - The mouse event that triggered the resize.
     */
    private resizeColumn;
    /**
     * Clears the selection model, if available.
     *
     * @return {void}
     */
    private clearSelectionModel;
    private debugOnce;
    /**
     * Restores the scroll position of the table if auto restore options are enabled.
     *
     * @private
     * @memberof ClassName
     *
     * @returns {void}
     */
    private autoRestoreScrollPosition;
    /**
     * Automatically restores the sorting state of the table.
     *
     * @private
     * @function autoRestoreSortingState
     * @memberof ClassName
     *
     * @description
     * This method checks if the autoRestoreSortingState option is enabled in the tableOptions.
     * If enabled, it uses the storeSortingService to retrieve the sort items array.
     * If there are sort items present, it applies them to the table's body model using the doSort method.
     *
     * @returns {void}
     */
    private autoRestoreSortingState;
    /**
     * Restores the collapsed/expanded state of the rows in the table based on the autoRestoreOptions
     * specified in the tableOptions. This method is private and should not be called directly.
     *
     * @private
     */
    private autoRestoreCollapsedExpandedState;
    /**
     * Scrolls the viewport to the specified pixel coordinates.
     *
     * @param {number} px - The horizontal pixel coordinate to scroll to.
     * @param {number} py - The vertical pixel coordinate to scroll to.
     *
     * @return {void}
     */
    scrollToPixel(px: number, py: number): void;
    /**
     * Scrolls to the specified index in the table.
     *
     * @param {number} _indexX - The horizontal index of the table where scrolling is needed.
     * @param {number} indexY - The vertical index of the table where scrolling is needed.
     * @return {void}
     */
    scrollToIndex(_indexX: number, indexY: number): void;
}

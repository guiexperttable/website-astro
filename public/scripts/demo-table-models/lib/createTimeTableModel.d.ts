import { TableModelIf } from '../../../table/src/index.ts';
export interface TeamIf {
    name: string;
    active: boolean;
}
export interface TeamDataIf {
    id?: number;
    city?: string;
    location?: string;
    team?: TeamIf;
    data?: [number, number, number, number, number, number, number, number, number, number, number, number];
    updatedAt?: Date;
}
export declare const data: TeamDataIf[];
export declare const COL_IDX_UPDATED_AT: number;
export declare const tableOptions: {
    hoverRowVisible: boolean;
    hoverColumnVisible: boolean;
    defaultRowHeights: {
        header: number;
        body: number;
        footer: number;
    };
    columnsDraggable: boolean;
    columnsResizable: boolean;
    overflowX: "auto" | "scroll";
    overflowY: "auto" | "scroll";
    horizontalBorderVisible: boolean;
    verticalBorderVisible: boolean;
    footerSeparatorBorderVisible: boolean;
    headerSeparatorBorderVisible: boolean;
    fixedEastSeparatorBorderVisible: boolean;
    fixedWestSeparatorBorderVisible: boolean;
    tableTopBorderVisible: boolean;
    tableBottomBorderVisible: boolean;
    columnResizeHandleWidthInPx: number;
    footerVerticalSeparator: boolean;
    headerToggleExpandCollapseIcons: boolean;
    headerVerticalSeparator: boolean;
    treeOptions: import('../../../table/src/index.ts').TreeOptions;
    showCheckboxWihoutExtraColumn: boolean;
    externalFilterFunction: import('../../../table/src/index.ts').FilterFunction<any> | undefined;
    sortedOptions: import('../../../table/src/index.ts').SortedOptions;
    sortOrder: import('../../../table/src/index.ts').SortState[];
    shortcutActionIdMapping?: import('../../../table/src/index.ts').ShortcutActionIdMapping | undefined;
    getEditRenderer?: import('../../../table/src/index.ts').GetEditRenderer | undefined;
    getSelectionModel?: import('../../../table/src/index.ts').GetT<import('../../../table/src/index.ts').SelectionModelIf> | undefined;
    getFocusModel?: import('../../../table/src/index.ts').GetT<import('../../../table/src/index.ts').FocusModelIf> | undefined;
};
export declare function createTimeTableModel(): TableModelIf;

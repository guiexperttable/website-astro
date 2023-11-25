import { ColumnDefIf, SelectionModel, TableModelAndOptionsIf, TreeRow } from '../../../../table/src/index.ts';
import { PersonIf } from "./person.if";
export declare const selectionModel: SelectionModel;
export declare function createTreePeopleTableOptions(): {
    hoverColumnVisible: boolean;
    defaultRowHeights: {
        header: number;
        body: number;
        footer: number;
    };
    autoRestoreOptions: {
        getStorageKeyFn: () => string;
        autoRestoreCollapsedExpandedState: boolean;
        autoRestoreScrollPosition: boolean;
        autoRestoreSortingState: boolean;
        autoRestoreCheckedState: boolean;
        autoRestoreSelectedState: boolean;
        isSame: (r1: PersonIf, r2: PersonIf, options: import('../../../../table/src/index.ts').AutoRestoreOptionsIf<PersonIf>) => boolean;
        getRowId: (row: PersonIf) => string | number;
    };
    externalFilterFunction: (_value: TreeRow<PersonIf>, _index: number, _array: PersonIf[]) => boolean;
    getSelectionModel: () => SelectionModel;
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
    hoverRowVisible: boolean;
    columnsResizable: boolean;
    columnsDraggable: boolean;
    columnResizeHandleWidthInPx: number;
    footerVerticalSeparator: boolean;
    headerToggleExpandCollapseIcons: boolean;
    headerVerticalSeparator: boolean;
    treeOptions: import('../../../../table/src/index.ts').TreeOptions;
    showCheckboxWihoutExtraColumn: boolean;
    sortedOptions: import('../../../../table/src/index.ts').SortedOptions;
    sortOrder: import('../../../../table/src/index.ts').SortState[];
    shortcutActionIdMapping?: import('../../../../table/src/index.ts').ShortcutActionIdMapping | undefined;
    getEditRenderer?: import('../../../../table/src/index.ts').GetEditRenderer | undefined;
    getFocusModel?: import('../../../../table/src/index.ts').GetT<import('../../../../table/src/index.ts').FocusModelIf> | undefined;
};
export declare function createcreateTreePeopleColumnDefs(): ColumnDefIf[];
export declare function createTreePeopleModelAndOptions(): TableModelAndOptionsIf;

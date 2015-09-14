declare module angular.uiGrid {
    interface IGrid {
        constructor(options: IGridOptions);

        addRowHeaderColumn(column: IColumnDef): void;
        assignTypes(): void;
        buildColumnDefsFromData(rowBuilder: (colDef: IColumnDef, col: IGridColumn, gridOptions: IGridOptions) => void): void;
        buildColumns(options: any): IPromise<any>;
        buildStyles(): void;
        callDataChangeCallbacks(type: number): void;
        clearAllFilters(refreshRows: boolean, clearConditions: boolean, clearFlags: boolean): IPromise<any>;
        columnRefreshCallback(name: string): void;
        createLeftContainer(): void;
        createRightContainer(): void;
        flagScrollingHorizontally(): void;
        flagScrollingVertically(): void;
        getCellDisplayValue(row: IGridRow, col: IGridColumn): string;
        getCellValue(row: IGridRow, col: IGridColumn): any;
        getColDef(name: string): IColumnDef;
        getColumn(name: string): IGridColumn;
        getColumnSorting(): IGridColumn[];
        getGridQualifiedColField(col: IGridColumn): any;
        getOnlyDataColumns(): IGridColumn[];
        getRow(rowEntity: any, rows?: IGridRow): IGridRow;
        handleWindowResize(): void;
        hasLeftContainer(): boolean;
        hasLeftContainerColumns(): boolean;
        hasRightContainer(): boolean;
        hasRightContainerColumns(): boolean;
        isRTL(): boolean;
        isRowHeaderColumn(column: IGridColumn): boolean;
        modifyRows(): void;
        notifyDataChange(type: string): void;
        preCompileCellTemplates(): void;
        processRowBuilders(gridRow: IGridRow): IGridRow;
        processRowsCallback(name: string): void;
        queueGridRefresh(): void;
        queueRefresh(): void;
        redrawCanvas(rowsAdded?: boolean): void;
        refresh(rowsAltered?: boolean): void;
        refreshCanvas(buildStyles: any): IPromise<any>;
        refreshRows(): IPromise<any>;
        registerColumnBuilder(columnBuilder: (colDef: IColumnDef, col: IGridColumn, gridOptions: IGridOptions) => void): void;
        registerColumnsProcessor(columnProcessor: (renderedColumnsToProcess, rows) => void, priority: number): void;
        registerDataChangeCallback(callback: (grid: IGrid) => void, types: any[]): ()=> void;
        registerRowBuilder(rowBuilder: (row: IGridRow, gridOptions: IGridOptions) => void): void;
        registerRowsProcessor(processorFunction: (renderedRowsToProcess, columns) => void, priority: number): void;
        registerStyleComputation(styleComputation: (scope: any) => void): void;
        removeRowsProcessor(rows: (renderableRows: IGridRow[]) => void): void;
        resetColumnSorting(excludedColumn?: IGridColumn): IGridColumn;
        scrollTo(rowEntity: any, colDef: IColumnDef): IPromise<any>;
        scrollToIfNecessary(gridRow: IGridRow, gridCol: IGridColumn): IPromise<any>;
        sortColumn(column: IGridColumn, direction?: any, add?: boolean): IPromise<any>;
        updateCanvasHeight(): void;
        updateFooterHeightCallback(name: string): void;
        
        appScope: any;
        columnFooterHeight: number;
        footerHeight: number;
        isScrollingHorizontally: boolean;
        isScrollingVertically: boolean;
        scrollDirection: any;
    }

    interface IGridApi {
        cellNav: CellNav.IGridApi;
        core: Core.IGridApi;
        edit: Edit.IGridApi;
        expandable: Expandable.IGridApi;
        exporter: Exporter.IGridApi;
        grouping: Grouping.IGridApi;
        importer: Importer.IGridApi;
        infiniteScroll: InfiniteScroll.IGridApi;
        moveColumns: MoveColumns.IGridApi;
        pagination: Pagination.IGridApi;
        pinning: Pinning.IGridApi;
        resizeColumns: ResizeColumns.IGridApi;
        rowEdit: RowEdit.IGridApi;
        saveState: SaveState.IGridApi;
        selection: Selection.IGridApi;
        treeBase: TreeBase.IGridApi;
        treeView: TreeView.IGridApi;
    }

    interface IGridOptions extends
        CellNav.IGridOptions,
        Edit.IGridOptions,
        Expandable.IGridOptions,
        Exporter.IGridOptions,
        Grouping.IGridOptions,
        Importer.IGridOptions,
        InfiniteScroll.IGridOptions,
        MoveColumns.IGridOptions,
        Pagination.IGridOptions,
        Pinning.IGridOptions,
        ResizeColumns.IGridOptions,
        RowEdit.IGridOptions,
        SaveState.IGridOptions,
        Selection.IGridOptions,
        TreeBase.IGridOptions,
        TreeView.IGridOptions {
        aggregationCalcThrottle: number;
        appScopeProvider: any;
        columnDefs: IColumnDef[];
        columnFooterHeight: number;
        columnVirtualizationThreshold: number;
        data: any[];
        enableColumnMenus: boolean;
        enableFiltering: boolean;
        enableGridMenu: boolean;
        enableHorizontalScrollbar: any;
        enableMinHeightCheck: boolean;
        enableRowHashing: boolean;
        enableSorting: boolean;
        enableVerticalScrollbar: any;
        excessColumns: number;
        excessRows: number;
        excludeProperties: string[];
        flatEntityAccess: boolean;
        footerTemplate: string;
        gridFooterTemplate: string;
        gridMenuCustomItems: IMenuCustomItem[];
        gridMenuShowHideColumns: boolean;
        gridMenuTitleFilter: (dislpayName) => string | IPromise<any>;
        headerTemplate: string;
        horizontalScrollThreshold: number;
        infiniteScrollDown: boolean;
        infiniteScrollRowsFromEnd: number;
        infiniteScrollUp: boolean;
        maxVisibleColumnCount: number;
        minRowsToShow: number;
        minimumColumnSize: number;
        onRegisterApi: (gridApi: IGridApi) => void;
        rowHeight: number;
        rowTemplate: string;
        scrollDebounce: number;
        scrollThreshold: number;
        showColumnFooter: boolean;
        showGridFooter: boolean;
        showHeader: boolean;
        useExternalFiltering: boolean;
        useExternalSorting: boolean;
        virtualizationThreshold: number;
        wheelScrollThrottle: number;
    }

    interface IColumnDef extends
        CellNav.IColumnDef,
        Edit.IColumnDef,
        Exporter.IColumnDef,
        Grouping.IColumnDef,
        MoveColumns.IColumnDef,
        Pinning.IColumnDef,
        ResizeColumns.IColumnDef,
        TreeBase.IColumnDef{
        aggregationHideLabel: boolean;
        aggregationType: any;
        cellClass: string;
        cellFilter: string;
        cellTemplate: string;
        cellTooltip: boolean;
        displayName: string;
        enableColumnMenu: boolean;
        enableColumnMenus: boolean;
        enableFiltering: boolean;
        enableHiding: boolean;
        enableSorting: boolean;
        field: string;
        filter: any;
        filterCellFiltered: boolean;
        filterHeaderTemplate: boolean;
        filters: any;
        footerCellClass: string;
        footerCellFilter: string;
        footerCellTemplate: string;
        headerCellClass: string;
        headerCellFilter: string;
        headerCellTemplate: string;
        headerTooltip: boolean;
        maxWidth: number;
        menuItems: any;
        minWidth: number;
        name: string;
        sort: any;
        sortCellFiltered: boolean;
        sortingAlgorithm: (a, b) => void;
        suppressRemoveSort: boolean;
        type: string;
        visible: boolean;
        width: any;
    }

    interface IMenuCustomItem {
        shown: () => boolean;
        title: string;
        icon: string;
        action: () => void;
        active: () => boolean;
        context: any;
        leaveOpen: boolean;
        order: number;
    }

    interface IGridRow extends CellNav.IGridRow, Edit.IGridRow, Exporter.IGridRow, Selection.IGridRow {
        constructor(entity, index, reference);

        entity: any;
        grid: IGrid;
        height: number;
        uid: string;
        visible: boolean;

        clearRowInvisible(row): void;
        clearRowInvisible(reason: string, fromRowsProcessor: boolean): void;
        evaluateRowVisibility(fromRowProcessor: boolean): void;
        getEntityQualifiedColField(col: IGridColumn): string;
        getQualifiedColField(col: IGridColumn): string;
        setRowInvisible(row: IGridRow): void;
        setThisRowInvisible(reason: string, fromRowsProcessor: boolean): void;
    }

    interface IGridColumn {
        constructor(colDef: IColumnDef, uid: string, grid: IGrid);

        displayName: string;
        field: string;
        filter: any;
        filters: any[];
        name: string;
        sortingAlgorithm: Function;

        getAggregationText(label: string): string;
        getAggregationValue(): any;
        getColClass(prefixDot: boolean): string;
        getColClassDefinition(): string;
        getRenderContainer(): any;
        hideColumn(): void;
        isPinnedLeft(): boolean;
        isPinnedRight(): boolean;
        setPropertyOrDefault(colDef: IColumnDef, propName: string, defaultValue: any);
        showColumn(): void;
        updateColumnDef(colDef: IColumnDef, isNew: boolean): void;
    }

    module CellNav {
        interface IGridApi {
            getCurrentSelection(): any[];
            getFocusedCell(): any;
            rowColSelectIndex(rowCol: any): number;
            scrollToFocus(rowEntity: any, colDef: IColumnDef): IPromise<any>;

            on: {
                navigate(scope, callBack: (newRowcol, oldRowCol) => void): void;
                viewPortKeyDown(callBack: (event, rowCol) => void): void;
                viewPortKeyPress(callBack: (event, rowCol) => void): void;
            }
        }

        interface IGridOptions {
            modifierKeysToMultiSelectCells: boolean;
        }

        interface IColumnDef {
            allowCellFocus: boolean;
        }

        interface IGridRow {
            allowCellFocus: boolean;
        }
    }

    module Core {
        interface IGridApi {
            addRowHeaderColumn(column: IColumnDef): void;
            addToGridMenu(grid: IGrid, items: IMenuCustomItem[]): void;
            clearAllFilters(refreshRows: boolean, clearConditions: boolean, clearFlags: boolean): IPromise<any>;
            clearRowInvisible(rowEntity: any): void;
            getVisibleRows(grid: IGrid): IGridRow[];
            handleWindowResize(): IPromise<any>;
            notifyDataChange(type: string): void;
            queueGridRefresh(): IPromise<any>;
            refresh(): IPromise<any>;
            refreshRows(): IPromise<any>;
            registerColumnsProcessor(processorFunction: (renderedColumnsToProcess, rows) => IColumnDef[], priority: number): void;
            registerRowsProcessor(processorFunction: (renderedRowsToProcess, columns) => IGridRow[], priority: number): void;
            removeFromGridMenu(grid: IGridOptions, id: any);
            scrollTo(rowEntity: any, colDef: IColumnDef): IPromise<any>;
            scrollToIfNecessary(gridRow: IGridRow, gridCol: IColumnDef): IPromise<any>;
            setRowInvisible(rowEntity: any): void;
            sortHandleNulls(a: any, b: any): any;

            on: {
                canvasHeightChanged(oldHeight: number, newHeight: number): void
                columnVisibilityChanged(scope: any, callBack: (column: IColumnDef) => void): void;
                filterChanged(): void;
                renderingComplete(gridApi): void;
                rowsRendered(): void;
                rowsVisibleChanged(): void;
                sortChanged(scope: any, callBack: (grid: IGrid, sortColumns: IColumnDef[]) => void): void;
                scrollBegin(): void;
                scrollEnd(): void;
            }
        }
    }

    module Edit {
        interface IGridApi {
            afterCellEdit(scope, callBack: (rowEntity: any, colDef: IColumnDef) => void): void;
            beginCellEdit(scope, callBack: (rowEntity: any, colDef: IColumnDef) => void): void;
            cancelCellEdit(scope, callBack: (rowEntity: any, colDef: IColumnDef) => void): void;
        }

        interface IGridOptions {
            cellEditableCondition: ($scope) => boolean;
            editableCellTemplate: string;
            enableCellEdit: boolean;
            enableCellEditOnFocus: boolean;
        }

        interface IColumnDef {
            cellEditableCondition: ($scope) => boolean;
            editDropdownFilter: string;
            editDropdownIdLabel: string;
            editDropdownOptionsArray: { id: any, value: any }[];
            editDropdownRowEntityOptionsArrayPath: string;
            editDropdownValueLabel: string;
            editFileChooserCallback: (gridRow, gridCol, files) => void;
            editModelField: string;
            editableCellTemplate: string;
            enableCellEdit: boolean;
            enableCellEditOnFocus: boolean;
        }

        interface IGridRow {
            enableCellEdit: boolean;
        }
    }

    module Expandable {
        interface IGridApi {
            collapseAllRows(): void;
            expandAllRows(): void;
            toggleAllRows(): void;
            toggleRowExpansion(rowEntity: any): void;

            on: {
                rowExpandedStateChanged(scope: any, callBack: (row: IGridRow)=> void): void
            }
        }

        interface IGridOptions {
            expandableRowHeaderWidth: number;
            enableExpandable: boolean;
            enableExpandableRowHeader: boolean;
            expandableRowHeight: number;
            expandableRowTemplate: string;
        }
    }

    module Exporter {
        interface IGridApi {
            csvExport(rowTypes: string, colTypes: string): void;
            pdfExport(rowTypes: string, colTypes: string): void;
        }

        interface IGridOptions {
            exporterAllDataFn: () => IPromise<any>;
            exporterCsvColumnSeparator: string;
            exporterCsvFilename: string;
            exporterFieldCallback: (grid: IGrid, row: IGridRow, col: IGridColumn, value: any) => any;
            exporterHeaderFilter: (displayName: string) => string;
            exporterHeaderFilterUseName: boolean;
            exporterMenuCsv: boolean;
            exporterMenuAllData: boolean;
            exporterMenuLabel: string;
            exporterMenuPdf: boolean;
            exporterOlderExcelCompatibility: boolean;
            exporterPdfCustomFormatter: (docDefinition: any) => any;
            exporterPdfDefaultStyle: any;
            exporterPdfFilename: string;
            exporterPdfFooter: string | IColumnDef[];
            exporterPdfHeader: string | IColumnDef[];
            exporterPdfMaxGridWidth: number;
            exporterPdfOrientation: string;
            exporterPdfPageSize: string;
            exporterPdfTableHeaderStyle: any;
            exporterPdfTableLayout: any;
            exporterPdfTableStyle: any;
            exporterSuppressColumns: string[];
            exporterSuppressMenu: boolean;
        }

        interface IColumnDef {
            exporterPdfAlign: string;
            exporterSuppressExport: boolean;
        }

        interface IGridRow {
            exporterEnableExporting: boolean;
        }
    }

    module Grouping {
        interface IGridApi {
            aggregateColumn(columnName: string, or: string, aggregationLabel: string): void;
            clearGrouping(): void;
            getGrouping(getExpanded: boolean): IGroupingConfig;
            groupColumn(columnName: string): void;
            setGrouping(config: IGroupingConfig): void;
            ungroupColumn(columnName: string): void;

            on: {
                aggregationChanged(scope, callBack: (col: IGridColumn) => void): void;
                groupingChanged(scope, callBack: (col: IGridColumn) => void): void;
            }
        }

        interface IGridOptions {
            enableGroupHeaderSelection: boolean;
            enableGrouping: boolean;
            groupingNullLabel: string;
            groupingShowCounts: boolean;
        }

        interface IColumnDef {
            enableGrouping: boolean;
            grouping: { groupPriority: number };
            groupingShowAggregationMenu: boolean;
            groupingShowGroupingMenu: boolean;
        }

        interface IGroupingConfig {
            grouping: { field: string, colName: string, groupPriority: number };
            treeAggregations: { field: string, colName: string, aggregation: any };
            expandedState: string;
        }
    }

    module Importer {
        interface IGridApi {
            importFile(fileObject: File): void;
        }

        interface IGridOptions {
            importerDataAddCallback: (grid: IGrid, newObjects: any[]) => void;
            importerErrorCallback: (grid: IGrid, errorKey: string, consoleMessage: string, context: any) => void;
            importerHeaderFilter: (displayName: string) => void;
            importerObjectCallback: (grid: IGrid, newObject: any) => void;
            importerProcessHeaders: (grid: IGrid, headerArray: string[]) => void;
            enableImporter: boolean;
            importerNewObject: any;
            importerShowMenu: boolean;
        }
    }

    module InfiniteScroll {
        interface IGridApi {
            dataLoaded(scrollUp: boolean, scrollDown: boolean): IPromise<any>;
            dataRemovedBottom(scrollUp: boolean, scrollDown: boolean): IPromise<any>;
            dataRemovedBottom(grid: IGrid, scrollUp: boolean, scrollDown: boolean): IPromise<any>;
            dataRemovedTop(scrollUp: boolean, scrollDown: boolean): IPromise<any>;
            dataRemovedTop(grid: IGrid, scrollUp: boolean, scrollDown: boolean): IPromise<any>;
            resetScroll(scrollUp: boolean, scrollDown: boolean): IPromise<any>;
            saveScrollPercentage(): void;

            on: {
                needLoadMoreData(scope, getDataDownPromise: (data: any[]) => IPromise<any>): void;
                needLoadMoreDataTop(scope, getDataDownPromise: (data: any[]) => IPromise<any>): void;
            }
        }

        interface IGridOptions {
            enableInfiniteScroll: boolean;
        }
    }

    module MoveColumns {
        interface IGridApi {
            moveColumn(originalPosition: number, finalPosition: number): void;

            on: {
                columnPositionChanged(scope: any, callBack: (colDef: IColumnDef, originalPosition: number, newPosition: number) => void): void;
            }
        }

        interface IGridOptions {
            enableColumnMoving: boolean;
        }

        interface IColumnDef {
            enableColumnMoving: boolean;
        }
    }

    module Pagination {
        interface IGridApi {
            getPage(): number;
            getTotalPages(): number;
            nextPage(): void;
            previousPage(): void;
            seek(page: number): void;

            on: {
                paginationChanged(scope, callBack: (currentPage: number, pageSize: number)=> void): void;
            }
        }

        interface IGridOptions {
            enablePagination: boolean;
            enablePaginationControls: boolean;
            paginationCurrentPage: number;
            paginationPageSize: number;
            paginationPageSizes: number[];
            paginationTemplate: string;
            totalItems: number;
            useExternalPagination: boolean;
        }
    }

    module Pinning {
        interface IGridApi {
            on: {
                columnSizeChanged(scope: any, callBack: (colDef: IColumnDef, deltaChange: number) => void): void;
            }
        }

        interface IGridOptions {
            enablePinning: boolean;
        }

        interface IColumnDef {
            enablePinning: boolean;
            pinnedLeft: boolean;
            pinnedRight: boolean;
        }
    }

    module ResizeColumns {
        interface IGridApi {
            on: {
                columnSizeChanged(scope: any, callBack: (colDef: IColumnDef, deltaChange: number) => void): void;
            }
        }

        interface IGridOptions {
            enableColumnResizing: boolean;
        }

        interface IColumnDef {
            enableColumnResizing: boolean;
        }
    }

    module RowEdit {
        interface IGridApi {
            flushDirtyRows(): IPromise<any>;
            getDirtyRows(): IGridRow[];
            getErrorRows(): IGridRow[];
            setRowsClean(dataRows: IGridRow[]): void;
            setRowsDirty(dataRows: IGridRow[]): void;
            setSavePromise(rowEntity: any, savePromise: IPromise<any>): void;

            on: {
                saveRow(scope, callBack: (rowEntity: any)=> void): void;
            }
        }

        interface IGridOptions {
            rowEditWaitInterval: number;
        }
    }

    module SaveState {
        interface IGridApi {
            restore($scope: any, state: any): void;
            save(): any;
        }

        interface IGridOptions {
            saveFilter: boolean;
            saveFocus: boolean;
            saveGrouping: boolean;
            saveGroupingExpandedStates: boolean;
            saveOrder: boolean;
            savePinning: boolean;
            saveRowIdentity: any;
            saveScroll: boolean;
            saveSelection: boolean;
            saveSort: boolean;
            saveTreeView: boolean;
            saveVisible: boolean;
            saveWidths: boolean;
        }
    }

    module Selection {
        interface IGridApi {
            clearSelectedRows(event: Event): void;
            getSelectAllState(): boolean;
            getSelectedGridRows(): IGridRow[];
            getSelectedRows(): any[];
            selectAllRows(event: Event): void;
            selectAllVisibleRows(event: Event): void;
            selectRow(rowEntity: any, event: Event): void;
            selectRowByVisibleIndex(index: number, event: Event): void;
            setModifierKeysToMultiSelect(modifierKeysToMultiSelect: boolean): void;
            setMultiSelect(multiSelect: boolean): void;
            toggleRowSelection(rowEntity: any, event: Event): void;
            unSelectRow(rowEntity: any, event: Event): void;

            on: {
                rowSelectionChanged(scope, callBack: (row: IGridRow, event: Event) => void): void;
                rowSelectionChangedBatch(scope, callBack: (rows: IGridRow[], event: Event) => void): void;
            }
        }

        interface IGridOptions {
            enableFooterTotalSelected: boolean;
            enableFullRowSelection: boolean;
            enableRowHeaderSelection: boolean;
            enableRowSelection: boolean;
            enableSelectAll: boolean;
            enableSelectionBatchEvent: boolean;
            isRowSelectable: boolean;
            modifierKeysToMultiSelect: boolean;
            multiSelect: boolean;
            noUnselect: boolean;
            selectionRowHeaderWidth: string;
        }

        interface IGridRow {
            setSelected(selected: boolean): void;
            enableSelection: boolean;
            isSelected: boolean;
        }
    }

    module TreeBase {
        interface IGridApi {
            collapseAllRows(): void;
            collapseRow(row: IGridRow): void;
            collapseRowChildren(row: IGridRow): void;
            expandAllRows(): void;
            expandRow(row: IGridRow): void;
            expandRowChildren(row: IGridRow): void;
            getRowChildren(row: IGridRow): IGridRow[];
            getTreeState(): any;
            setTreeState(config: any): void;
            toggleRowTreeState(row: IGridRow): void;

            on: {
                rowCollapsed(scope, callBack: (row: IGridRow) => void): void;
                rowExpanded(scope, callBack: (row: IGridRow) => void): void;
            }
        }

        interface IGridOptions {
            showTreeExpandNoChildren: boolean;
            showTreeRowHeader: boolean;
            treeCustomAggregations: any;
            treeIndent: number;
            treeRowHeaderAlwaysVisible: boolean;
            treeRowHeaderBaseWidth: number;
        }

        interface IColumnDef {
            customTreeAggregationFinalizerFn: (aggregation: any) => void;
            customTreeAggregationFn: (aggregation: any, fieldValue: any, numValue: any, row: IGridRow) => void;
            treeAggregationLabel: string;
            treeAggregationType: any;
            treeAggregationUpdateEntity: boolean;
        }
    }

    module TreeView {
        interface IGridApi {
            
        }

        interface IGridOptions {
            enableTreeView: boolean;
        }
    }
}

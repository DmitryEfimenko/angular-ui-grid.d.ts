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
        grid: IGrid;
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
        Core.IGridOptions,
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
    }

    interface IColumnDef extends
        CellNav.IColumnDef,
        Edit.IColumnDef,
        Exporter.IColumnDef,
        Grouping.IColumnDef,
        MoveColumns.IColumnDef,
        Pinning.IColumnDef,
        ResizeColumns.IColumnDef,
        TreeBase.IColumnDef {
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

    interface IGridRowColumn {
        constructor(row: IGridRow, column: IGridColumn);

        col: IGridColumn;
        row: IGridRow;

        getIntersectionValueFiltered(): string | number | Object;
        getIntersectionValueRaw(): string | number | Object;
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
        interface IGridApi extends IGridApiMethods {
            on: IGridApiEvents;
            raise: IGridApiEventsCallBacks
        }

        interface IGridApiMethods {
            getCurrentSelection(): any[];
            getFocusedCell(): any;
            rowColSelectIndex(rowCol: IGridRowColumn): number;
            scrollToFocus(rowEntity: any, colDef: IColumnDef): IPromise<any>;
        }

        type navigateCb = (newRowcol: IGridRowColumn, oldRowCol: IGridRowColumn) => void;
        type viewPortKeyDownCb = (event, rowCol: IGridRowColumn) => void;
        type viewPortKeyPressCb = (event, rowCol: IGridRowColumn) => void;

        interface IGridApiEvents {
            navigate(scope: any, callBack: navigateCb): void;
            viewPortKeyDown(scope: any, callBack: viewPortKeyDownCb): void;
            viewPortKeyPress(scope: any, callBack: viewPortKeyPressCb): void;
        }

        interface IGridApiEventsCallBacks {
            navigate: navigateCb,
            viewPortKeyDown: viewPortKeyDownCb,
            viewPortKeyPress: viewPortKeyPressCb
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
        interface IGridApi extends IGridApiMethods {
            on: IGridApiEvents;
            raise: IGridApiEventsCallBacks;
        }

        interface IGridApiMethods {
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
        }

        type canvasHeightChangedCb = (oldHeight: number, newHeight: number) => void;
        type columnVisibilityChangedCb = (column: IColumnDef) => void;
        type filterChangedCb = () => void;
        type renderingCompleteCb = (gridApi: IGridApi) => void;
        type rowsRenderedCb = () => void;
        type rowsVisibleChangedCb = () => void;
        type sortChangedCb = (grid: IGrid, sortColumns: IColumnDef[]) => void;
        type scrollBeginCb = () => void;
        type scrollEndCb = () => void;

        interface IGridApiEvents {
            canvasHeightChanged(scope: any, callBack: canvasHeightChangedCb): void
            columnVisibilityChanged(scope: any, callBack: columnVisibilityChangedCb): void;
            filterChanged(scope, callBack: filterChangedCb): void;
            renderingComplete(scope, callBack: renderingCompleteCb): void;
            rowsRendered(scope, callBack: rowsRenderedCb): void;
            rowsVisibleChanged(scope, callBack: rowsVisibleChangedCb): void;
            sortChanged(scope: any, callBack: sortChangedCb): void;
            scrollBegin(scope, callBack: scrollBeginCb): void;
            scrollEnd(scope, callBack: scrollEndCb): void;
        }

        interface IGridApiEventsCallBacks {
            canvasHeightChanged: canvasHeightChangedCb,
            columnVisibilityChanged: columnVisibilityChangedCb,
            filterChanged: filterChangedCb,
            renderingComplete: renderingCompleteCb,
            rowsRendered: rowsRenderedCb,
            rowsVisibleChanged: rowsVisibleChangedCb,
            sortChanged: sortChangedCb,
            scrollBegin: scrollBeginCb,
            scrollEnd: scrollEndCb
        }

        interface IGridOptions {
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
    }

    module Edit {
        interface IGridApi {
            on: IGridApiEvents;
            raise: IGridApiEventsCallBacks;
        }

        type afterCellEditCb = (rowEntity: any, colDef: IColumnDef) => void;
        type beginCellEditCb = (rowEntity: any, colDef: IColumnDef) => void;
        type cancelCellEditCb = (rowEntity: any, colDef: IColumnDef) => void;

        interface IGridApiEvents {
            afterCellEdit(scope, callBack: afterCellEditCb): void;
            beginCellEdit(scope, callBack: beginCellEditCb): void;
            cancelCellEdit(scope, callBack: cancelCellEditCb): void;
        }

        interface IGridApiEventsCallBacks {
            afterCellEdit: afterCellEditCb,
            beginCellEdit: beginCellEditCb,
            cancelCellEdit: cancelCellEditCb
        }

        interface IGridOptions {
            cellEditableCondition: ($scope) => boolean;
            editableCellTemplate: string;
            enableCellEdit: boolean;
            enableCellEditOnFocus: boolean;
        }

        interface IColumnDef {
            cellEditableCondition: boolean | (($scope) => boolean) ;
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
        interface IGridApi extends IGridApiMethods {
            on: IGridApiEvents;
            raise: IGridApiEventsCallBacks;
        }

        interface IGridApiMethods {
            collapseAllRows(): void;
            expandAllRows(): void;
            toggleAllRows(): void;
            toggleRowExpansion(rowEntity: any): void;
        }

        type rowExpandedStateChangedCb = (row: IGridRow) => void;

        interface IGridApiEvents {
            rowExpandedStateChanged(scope: any, callBack: rowExpandedStateChangedCb): void
        }

        interface IGridApiEventsCallBacks {
            rowExpandedStateChanged: rowExpandedStateChangedCb
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
        interface IGridApi extends IGridApiMethods {
            
        }

        interface IGridApiMethods {
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
        interface IGridApi extends IGridApiMethods {
            on: IGridApiEvents;
            raise: IGridApiEventsCallBacks;
        }

        interface IGridApiMethods {
            aggregateColumn(columnName: string, or: string, aggregationLabel: string): void;
            clearGrouping(): void;
            getGrouping(getExpanded: boolean): IGroupingConfig;
            groupColumn(columnName: string): void;
            setGrouping(config: IGroupingConfig): void;
            ungroupColumn(columnName: string): void;
        }

        type aggregationChangedCb = (col: IGridColumn) => void;
        type groupingChangedCb = (col: IGridColumn) => void;

        interface IGridApiEvents {
            aggregationChanged(scope: any, callBack: aggregationChangedCb): void;
            groupingChanged(scope: any, callBack: groupingChangedCb): void;
        }

        interface IGridApiEventsCallBacks {
            aggregationChanged: aggregationChangedCb,
            groupingChanged: groupingChangedCb
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
        interface IGridApi extends IGridApiMethods {
            
        }

        interface IGridApiMethods {
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
        interface IGridApi extends IGridApiMethods {
            on: IGridApiEvents;
            raise: IGridApiEventsCallBacks;
        }

        interface IGridApiMethods {
            dataLoaded(scrollUp?: boolean, scrollDown?: boolean): IPromise<any>;
            dataRemovedBottom(scrollUp: boolean, scrollDown: boolean): IPromise<any>;
            dataRemovedBottom(grid: IGrid, scrollUp: boolean, scrollDown: boolean): IPromise<any>;
            dataRemovedTop(scrollUp: boolean, scrollDown: boolean): IPromise<any>;
            dataRemovedTop(grid: IGrid, scrollUp: boolean, scrollDown: boolean): IPromise<any>;
            resetScroll(scrollUp: boolean, scrollDown: boolean): IPromise<any>;
            saveScrollPercentage(): void;
        }

        type needLoadMoreDataCb = (data: any[]) => IPromise<any>;
        type needLoadMoreDataTopCb = (data: any[]) => IPromise<any>;

        interface IGridApiEvents {
            needLoadMoreData(scope, getDataDownPromise: needLoadMoreDataCb): void;
            needLoadMoreDataTop(scope, getDataDownPromise: needLoadMoreDataTopCb): void;
        }

        interface IGridApiEventsCallBacks {
            needLoadMoreData: needLoadMoreDataCb,
            needLoadMoreDataTop: needLoadMoreDataTopCb
        }

        interface IGridOptions {
            enableInfiniteScroll: boolean;
        }
    }

    module MoveColumns {
        interface IGridApi extends IGridApiMethods {
            on: IGridApiEvents;
            raise: IGridApiEventsCallBacks;
        }

        interface IGridApiMethods {
            moveColumn(originalPosition: number, finalPosition: number): void;
        }

        type columnPositionChangedCb = (colDef: IColumnDef, originalPosition: number, newPosition: number) => void;

        interface IGridApiEvents {
            columnPositionChanged(scope: any, callBack: columnPositionChangedCb): void;
        }

        interface IGridApiEventsCallBacks {
            columnPositionChanged: columnPositionChangedCb
        }

        interface IGridOptions {
            enableColumnMoving: boolean;
        }

        interface IColumnDef {
            enableColumnMoving: boolean;
        }
    }

    module Pagination {
        interface IGridApi extends IGridApiMethods {
            on: IGridApiEvents;
            raise: IGridApiEventsCallbacks;
        }

        interface IGridApiMethods {
            getPage(): number;
            getTotalPages(): number;
            nextPage(): void;
            previousPage(): void;
            seek(page: number): void;
        }

        type paginationChangedCb = (currentPage: number, pageSize: number) => void;

        interface IGridApiEvents {
            paginationChanged(scope, callBack: paginationChangedCb): void;
        }

        interface IGridApiEventsCallbacks {
            paginationChanged: paginationChangedCb;
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
            on: IGridApiEvents;
            raise: IGridApiEventsCallbacks;
        }

        type columnSizeChangedCb = (colDef: IColumnDef, deltaChange: number) => void;

        interface IGridApiEvents {
            columnSizeChanged(scope: any, callBack: columnSizeChangedCb): void;
        }

        interface IGridApiEventsCallbacks {
            columnSizeChanged: columnSizeChangedCb
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
            on: IGridApiEvents;
            raise: IGridApiEventsCallbacks;
        }

        type columnSizeChangedCb = (colDef: IColumnDef, deltaChange: number) => void;

        interface IGridApiEvents {
            columnSizeChanged(scope: any, callBack: columnSizeChangedCb): void;
        }

        interface IGridApiEventsCallbacks {
            columnSizeChanged: columnSizeChangedCb
        }

        interface IGridOptions {
            enableColumnResizing: boolean;
        }

        interface IColumnDef {
            enableColumnResizing: boolean;
        }
    }

    module RowEdit {
        interface IGridApi extends IGridApiMethods {
            on: IGridApiEvents;
            raise: IGridApiEventsCallbacks;
        }

        interface IGridApiMethods {
            flushDirtyRows(): IPromise<any>;
            getDirtyRows(): IGridRow[];
            getErrorRows(): IGridRow[];
            setRowsClean(dataRows: IGridRow[]): void;
            setRowsDirty(dataRows: IGridRow[]): void;
            setSavePromise(rowEntity: any, savePromise: IPromise<any>): void;
        }

        type saveRowCb = (rowEntity: any) => void;

        interface IGridApiEvents {
            saveRow(scope, callBack: saveRowCb): void;
        }

        interface IGridApiEventsCallbacks {
            saveRow: saveRowCb
        }

        interface IGridOptions {
            rowEditWaitInterval: number;
        }
    }

    module SaveState {
        interface IGridApi extends IGridApiMethods {
        }

        interface IGridApiMethods {
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
        interface IGridApi extends IGridApiMethods {
            on: IGridApiEvents;
            raise: IGridApiEventsCallbacks;
        }

        interface IGridApiMethods {
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
        }

        type rowSelectionChangedCb = (row: uiGrid.IGridRow, event: Event) => void;
        type rowSelectionChangedBatchCb = (rows: uiGrid.IGridRow[], event: Event) => void;
        
        interface IGridApiEvents {
            rowSelectionChanged(scope, callBack: rowSelectionChangedCb): void;
            rowSelectionChangedBatch(scope, callBack: rowSelectionChangedBatchCb): void;
        }

        interface IGridApiEventsCallbacks {
            rowSelectionChanged: rowSelectionChangedCb,
            rowSelectionChangedBatch: rowSelectionChangedBatchCb
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
        interface IGridApi extends IGridApiMethods {
            on: IGridApiEvents;
            raise: IGridApiEventsCallbacks;
        }

        interface IGridApiMethods {
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
        }

        type rowCollapsedCb = (row: IGridRow) => void;
        type rowExpandedCb = (row: IGridRow) => void;

        interface IGridApiEvents {
            rowCollapsed(scope, callBack: rowCollapsedCb): void;
            rowExpanded(scope, callBack: rowExpandedCb): void;
        }

        interface IGridApiEventsCallbacks {
            rowCollapsed: rowCollapsedCb,
            rowExpanded: rowExpandedCb
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
        interface IGridApi extends IGridApiMethods {
            
        }

        interface IGridApiMethods {
        }

        interface IGridOptions {
            enableTreeView: boolean;
        }
    }
}

import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from '../../../../../table/src/index.ts';
export declare class UsdRenderer implements CellRendererIf {
    private formatter;
    render(cellDiv: HTMLDivElement, _rowIndex: number, _columnIndex: number, _areaIdent: AreaIdent, _areaModel: AreaModelIf, cellValue: any, domService: DomServiceIf): RendererCleanupFnType | undefined;
}

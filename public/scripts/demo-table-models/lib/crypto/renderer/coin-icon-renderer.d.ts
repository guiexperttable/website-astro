import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from '../../../../../table/src/index.ts';
export declare class CoinIconRenderer implements CellRendererIf {
    render(cellDiv: HTMLDivElement, rowIndex: number, _columnIndex: number, _areaIdent: AreaIdent, areaModel: AreaModelIf, _cellValue: any, _domService: DomServiceIf): RendererCleanupFnType | undefined;
}

import { AreaIdent, AreaModelIf, CellRendererIf, DomServiceIf, RendererCleanupFnType } from '../../../../../table/src/index.ts';
export declare class CoinIconRenderer implements CellRendererIf {
    private readonly maxWidth;
    private formatterUsd;
    private formatter;
    constructor(maxWidth?: number);
    render(cellDiv: HTMLDivElement, rowIndex: number, _columnIndex: number, _areaIdent: AreaIdent, areaModel: AreaModelIf, _cellValue: any, domService: DomServiceIf): RendererCleanupFnType | undefined;
}

import { ConvenienceDomService } from "./service/convenience-dom.service";
import { DivScope } from "./data/div-scope.type";
import { TableModelIf } from "./data/tablemodel/table-model.if";
import { TableOptionsIf } from "./data/options/table-options.if";
import { GeoData } from "./data/geo-data";
/**
 * Represents an store for HTML elements.
 * @class
 */
export declare class EleScope {
    readonly hostElement: HTMLDivElement;
    readonly tableModel: TableModelIf;
    protected readonly dom: ConvenienceDomService;
    readonly tableOptions: TableOptionsIf;
    scrollViewport: HTMLDivElement;
    protected contentWrapperDiv: HTMLDivElement;
    protected contentDiv: HTMLDivElement;
    protected areaHeaderCenter: DivScope;
    protected areaHeaderWest: DivScope;
    protected areaHeaderEast: DivScope;
    protected areaBodyCenter: DivScope;
    protected areaBodyWest: DivScope;
    protected areaBodyEast: DivScope;
    protected areaFooterCenter: DivScope;
    protected areaFooterWest: DivScope;
    protected areaFooterEast: DivScope;
    protected borderHeaderBottom: HTMLDivElement;
    protected borderFooterTop: HTMLDivElement;
    protected borderFixedWest: HTMLDivElement;
    protected borderFixedEast: HTMLDivElement;
    protected hoverRow: HTMLDivElement;
    protected hoverColumn: HTMLDivElement;
    protected scrollTop: number;
    protected areaBodyWestGeo: GeoData;
    protected areaBodyCenterGeo: GeoData;
    protected areaBodyEastGeo: GeoData;
    constructor(hostElement: HTMLDivElement, tableModel: TableModelIf, dom: ConvenienceDomService, tableOptions: TableOptionsIf);
    adjustContainersAndRows(): void;
    adjustAfterScrolling(): void;
    protected resetSizeOfWrapperDiv(): void;
}

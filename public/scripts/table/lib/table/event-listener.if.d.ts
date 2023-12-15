import { GeMouseEvent } from "./data/common/event/ge-mouse-event";
import { GeModelChangeEvent } from "./data/common/event/ge-model-change-event";
/**
 * Interface representing an event listener.
 *
 * @interface
 */
export interface EventListenerIf {
    onContextmenu(evt: GeMouseEvent): void;
    onMouseMoved(evt: GeMouseEvent): void;
    onMouseDraggingEnd(evt: GeMouseEvent): void;
    onMouseDragging(evt: GeMouseEvent): void;
    onMouseClicked(evt: GeMouseEvent): void;
    onCheckboxChanged(evt: any[]): void;
    onModelChanged(evt: GeModelChangeEvent): void;
}

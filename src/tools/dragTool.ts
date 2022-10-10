import { Tool, view, project } from "paper";

export default class DragTool extends Tool {
  private hitOptions = {
    segments: true,
    stroke: true,
    curves: true,
    handles: true,
    fill: true,
    guide: false,
    tolerance: 3 / view.zoom,
  };
  private hoverItem: any = undefined;
  private targetItem: any = undefined;

  constructor() {
    super();
  }

  public onMouseMove = (event: any) => {
    this.handleHoveredItem(this.hitOptions, event.point);
  };

  public handleHoveredItem = (hitOptions: any, point: any): void => {
    const hitResult = project.hitTest(point, hitOptions);
    this.hoverItem = hitResult?.item;
  };

  public onMouseDown = (event: any) => {
    this.targetItem = this.hoverItem;
  };

  public onMouseUp = (event: any) => {
    this.targetItem = undefined;
  };

  public onMouseDrag = (event: any) => {
    // 不建议直接将 event.delta 赋值给 targetItem.position
    // event.point 是 Point 类型
    this.targetItem.position.x += event.delta.x;
    this.targetItem.position.y += event.delta.y;
  };
}

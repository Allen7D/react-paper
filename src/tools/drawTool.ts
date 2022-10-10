import { Tool } from "paper";

export default class DrawTool extends Tool {
  private drawPath: any = undefined;

  constructor() {
    super();
  }

  public onMouseMove = (event: any) => {};

  public onMouseDown = (event: any) => {
    this.drawPath = new paper.Path();
    this.drawPath.strokeColor = "red";
    this.drawPath.add(event.point);
  };

  public onMouseUp = (event: any) => {
    this.drawPath = undefined;
  };

  public onMouseDrag = (event: any) => {
    this.drawPath.add(event.point);
  };
}

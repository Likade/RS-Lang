import { headerContent } from "./header-content";

export class Header {
  private container : HTMLElement;

  constructor() {}

  render(): string {
    return headerContent();
  }
};
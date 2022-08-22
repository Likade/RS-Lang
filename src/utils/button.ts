import './button.scss';
import { Component } from './component';

export class UIButton extends Component {
  constructor(
    parentNode: HTMLElement,
    styles: string[] = [],
    content: string,
  ) {
    super(parentNode, 'button', ['btn'], content);
    this.element.classList.add(...styles);
  }
}

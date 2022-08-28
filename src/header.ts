import { Component } from "./utils/component";

export class Header extends Component {
    public print: Component;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['head']);
        this.print = new Component(this.element, 'div', []);
        this.changeText();
    }
    private changeText() {

    }
}

//Это потом замените на что-нибудь. Это тестовый кусок
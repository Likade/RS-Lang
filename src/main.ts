import { Component } from "./utils/component";
export class Main extends Component {
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['page']);
        const print = new Component(this.element, 'div', [], 'hello');
    }
}

//Это потом замените на что-нибудь. Это тестовый кусок
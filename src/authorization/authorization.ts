import { Component } from "../utils/component";
import { Login } from "./login";
import { Register } from "./register";
import './authorization.scss'

export class Authorization extends Component {
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['page']);
        const logo = new Component(this.element, 'div', ['logo']);
        const login = new Login(this.element);
        const register = new Register(this.element);
        logo.element.innerHTML ='<img src="./assets/1d81baaef45fdc778085.svg" alt="лого">';
        login.linkLog.element.addEventListener("click", () => {
            login.container.className = 'container-hidden';
            register.container.className = 'container';
        });
        register.linkReg.element.addEventListener("click", () => {
            login.container.className = 'container';
            register.container.className = 'container-hidden';
        })
    }
}
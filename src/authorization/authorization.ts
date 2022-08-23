import { Component } from "../utils/component";
import { UIButton } from "../utils/button";
import { UIInput } from "../utils/input";

export class Authorization extends Component {
    private authorizeBtn: UIButton;
    private regiserBtn: UIButton;
    private email: Component;
    private inputEmail: Component;
    private password: Component;
    private inputPassword: Component;
    private name: Component;
    private inputName:Component;
    private avatar: Component;
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['container']);
        const inputWrapper = new Component(this.element, 'div', ['garage-input']);
        this.email = new Component(inputWrapper.element, 'div', []);
        this.inputEmail = new UIInput(inputWrapper.element, 'text', ['garage-input']);
        this.password = new Component(inputWrapper.element, 'div', []);
        this.inputPassword = new UIInput(inputWrapper.element, 'text', ['garage-input']);
        this.name = new Component(inputWrapper.element, 'div', []);
        this.inputName = new UIInput(inputWrapper.element, 'text', ['garage-input']);
        this.avatar = new Component(inputWrapper.element, 'div', []);
        this.authorizeBtn = new UIButton(this.element, ['garage-button'], 'Вход');
        this.regiserBtn = new UIButton(this.element, [], 'Зарегестрироваться');

        this.email.element.innerHTML = 'Логин или E-mail';
        this.password.element.innerHTML = 'Пароль';
        this.name.element.innerHTML = 'Имя';
    }
}
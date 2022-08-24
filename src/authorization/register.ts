import { Component } from "../utils/component";
import { UIInput } from "../utils/input";
import { UIButton } from "../utils/button";
export class Register extends Component {
    private inputEmail: Component;
    private inputPassword: Component;
    private inputName: Component;
    private button: UIButton;
    public linkReg: Component;
    public container: HTMLElement;
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['container-hidden']);
        this.container = this.element;
        const title = new Component(this.element, 'div', [])
        const topTitle = new Component(title.element, 'h2', ['title-top'], 'Ещё не зарегестрированы?');
        const bottomTitle = new Component(title.element, 'h3', ['title-bottom'], 'Сойздайте аккаунт и найчните изучать английский');
        this.inputName = new UIInput(this.element, 'text', [], 'Введите имя');
        this.inputEmail = new UIInput(this.element, 'text', [], "Введите почту");
        this.inputPassword = new UIInput(this.element, 'text', [], "Введите пароль");
        this.button= new UIButton(this.element, [], 'Зарегестрироваться');
        const after = new Component(this.element, 'span', []);
        after.element.innerHTML = 'Уже зарегестрированы?';
        this.linkReg = new Component(this.element, 'span', [], 'Войдите');
    }
}
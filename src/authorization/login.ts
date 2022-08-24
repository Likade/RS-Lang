import { Component } from "../utils/component";
import { UIInput } from "../utils/input";
import { UIButton } from "../utils/button";
export class Login extends Component {
    private inputEmail: Component;
    private inputPassword: Component;
    private button: UIButton;
    public linkLog: Component;
    public container: HTMLElement;
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['container']);
        this.container = this.element;
        const title = new Component(this.element, 'div', [])
        const topTitle = new Component(title.element, 'h2', ['title-top'], 'Уже зарегестрированы?');
        const bottomTitle = new Component(title.element, 'h3', ['title-bottom'], 'Войдите в свой аккаунт');
        this.inputEmail = new UIInput(this.element, 'text', [], "Введите почту");
        this.inputPassword = new UIInput(this.element, 'text', [], "Введите пароль");
        this.button= new UIButton(this.element, [], 'Войти');
        const after = new Component(this.element, 'span', []);
        after.element.innerHTML = 'Ещё не зарегестрированы?';
        this.linkLog = new Component(this.element, 'span', [], "Зарегестрируйтесь");

        // this.linkLog.element.addEventListener("click", () => {
        //     this.element.className = ('container-hidden');
            
        // })
    }
}
import { Component } from "../utils/component";
import { UIInput } from "../utils/input";
import { UIButton } from "../utils/button";
import { loginUser, dataUser } from "./api";
import { Authorization } from "./authorization";

export class Login extends Component {
    private inputEmail: Component;
    private inputPassword: Component;
    private button: UIButton;
    public linkLog: Component;
    public container: HTMLElement;
    public isAutorised: boolean = false;
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

        const errMessage = new Component(this.element);

              //кнопка входа
        this.button.element.addEventListener('click', () => {
        const email = (this.inputEmail.element as HTMLInputElement).value;;
        const password = (this.inputPassword.element as HTMLInputElement).value;
  
        loginUser({ 'email': email, 'password': password }).then(() => {
          if (dataUser.errCode != '') {
            errMessage.element.textContent = 'Неверный адрес электронной почты или пароль!';
            dataUser.errCode = '';
          } else {
            this.isAutorised = true;
            //   changeBtnEntry(); сделать кнопку выхода
            const authorization = new Authorization(this.element);
            authorization.linkToMain.element.click();
            //  linkToHomePage.click(); ссылка на мэйн страницу
          }
        });
      });
    }
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
import { Component } from "../utils/component";
import { UIInput } from "../utils/input";
import { UIButton } from "../utils/button";
import { createUser, dataUser, loginUser } from "./api";
import { Authorization } from "./authorization";

export class Register extends Component {
    private inputEmail: Component;
    private inputPassword: Component;
    private inputName: Component;
    private button: UIButton;
    public linkReg: Component;
    public container: HTMLElement;
    public isAutorised: boolean = false;

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

        const errMessage = new Component(this.element);

        //кнопка регистрации
        this.button.element.addEventListener('click', async () => {
            const email = (this.inputEmail.element as HTMLInputElement).value;
            const name = (this.inputName.element as HTMLInputElement).value;
            const password = (this.inputPassword.element as HTMLInputElement).value;
            // const wordPerDay = {
            //   learnedWords: 0,
            //   optional: {
            //     wordsPerDay: 0,
            //     audiocallwordsPerDay: 0,
            //     audiocallRounds: 0,
            //     audiocallPercent: 0,
            //     allRounds: 0,
            //     totalPercent: 0,
            //     audiocallSeries: 0,
            //     sprintwordsPerDay: 0,
            //     sprintRounds: 0,
            //     sprintPercent: 0,
            //     sprintSeries: 0,
            //     wordInGames: {
            //       wordId: ''
            //     },
            //     wordInAudiocall: {
            //       wordId: ''
            //     }
            //   }
            // }
            
            createUser({ 'name': name, 'email': email, 'password': password }).then(async () => {
              if (dataUser.errCode != '') {
                errMessage.element.textContent = 'Проверьте корректность введенных Вами данных!';
                dataUser.errCode == '417' ? errMessage.element.textContent = 'Пользователь с указанной электронной почтой уже зарегистрирован!' : false;
                dataUser.errCode = '';
                
              } else {
                loginUser({ 'email': email, 'password': password }).then(async () => {
                  errMessage.element.textContent = '';
                //   changeBtnEntry(); сделать кнопку выхода
                  this.isAutorised = true;
                //  linkToHomePage.click(); ссылка на мэйн страницу
                const authorization = new Authorization(this.element);
                authorization.linkToMain.element.click();

                //  await updateUserStatistic(dataUser.userId, wordPerDay);
                });
              }
            });
          });
    }
}
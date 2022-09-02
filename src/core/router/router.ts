import { IRoute } from '../components/interfaces/interface';
import { Main } from '../../pages/main'; // сюда подключите мэйн страницу !!!ОБЯЗАТЕЛЬНО!!!
<<<<<<< HEAD
import { Authentication } from '../../pages/authentication'; 
=======
import { Authentication } from '../../pages/authentication';
>>>>>>> book
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { authScr } from '../../pages/authentication/script';
import { headerScript } from '../components/header/script';
import { AudioCall } from '../../pages/audiocall/audiocall';
import { sprintScript } from '../../pages/sprint/app';
<<<<<<< HEAD
=======
import { Book } from '../../pages/book/index';
>>>>>>> book

const headerInst = new Header();
const footerInst = new Footer();
const mainInst = new Main();
const authenticationInst = new Authentication();
const audioCall = new AudioCall();

export class Router {
  private readonly routes: Array<IRoute>;

  private defaultRoute: IRoute;

  constructor(private rootElement: HTMLElement) {

    this.routes = [ // тут аналогично в пути задаём другие страницы
      {
        name: '/',
        component: () => {
          const header = document.createElement('div');
          this.rootElement.append(header);
          header.outerHTML = headerInst.render();
					if (localStorage.getItem('nameUser')) headerScript();

          const main = document.createElement('div');
          this.rootElement.append(main);
          main.outerHTML = mainInst.render();
<<<<<<< HEAD
          
=======

>>>>>>> book
          const footer = document.createElement('div');
          this.rootElement.append(footer);
          footer.outerHTML = footerInst.render();

          document.body.style.overflow = '';
        },
      },
      {
        name: '/authentication',
        component: () => {
					if (localStorage.getItem('nameUser')) {location.href = '#/'; return};

          const header = document.createElement('div');
          this.rootElement.append(header);
          header.outerHTML = headerInst.render();
					if (localStorage.getItem('nameUser')) headerScript();

          const authentication = document.createElement('div');
          this.rootElement.append(authentication);
          authentication.outerHTML = authenticationInst.render();

          authScr();

          document.body.style.overflow = 'hidden';
        },
      },
      {
        name: '/audiocall',
        component: () => {
          const header = document.createElement('div');
          this.rootElement.append(header);
          header.outerHTML = headerInst.render();

          const audioGame = document.createElement('div');
          this.rootElement.append(audioGame);
          const getLink = async () => {
            audioGame.outerHTML = await audioCall.render();
            await audioCall.page_scripts();
          }
          getLink();

          document.body.style.overflow = '';
        },
      },
      {
        name: '/sprint',
        component: () => {
          const header = document.createElement('div');
          this.rootElement.append(header);
          header.outerHTML = headerInst.render();

          const app = document.createElement('div');
          app.classList.add('app');
          this.rootElement.appendChild(app);
<<<<<<< HEAD
          
=======

>>>>>>> book
          sprintScript();

          document.body.style.overflow = '';
        },
      },
<<<<<<< HEAD
=======
      {
        name: '/book',
        component: () => {
          const header = document.createElement('div');
          this.rootElement.append(header);
          header.outerHTML = headerInst.render();

          const app = document.createElement('div');
          app.classList.add('app');
          this.rootElement.appendChild(app);

          Book();

          document.body.style.overflow = '';
        },
      },
>>>>>>> book
    ];

    this.defaultRoute = {
      name: 'Default router',
      component: () => {
        this.rootElement.innerHTML = 'Default Page';
      },
    };
  }

  updateRouter(): void {
    this.rootElement.innerHTML = '';
    const currentRouteName = window.location.hash.slice(1);
    const currentRoute = this.routes.find(
      (page) => page.name === currentRouteName,
    );
    (currentRoute || this.defaultRoute).component();
  }

  initRouter(): void {
    if (window.location.hash === '') {
      window.location.hash = '#/';
    }

    window.onpopstate = () => this.updateRouter();
    this.updateRouter();
  }
}

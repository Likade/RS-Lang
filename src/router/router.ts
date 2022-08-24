import { IRoute } from "../interfaces/interface";
import { Component } from "../utils/component";
import { Authorization } from "../authorization/authorization";
import { Main } from "../main"; //сюда подключите мэйн страницу !!!ОБЯЗАТЕЛЬНО!!!

export class Router {
    private readonly routes: Array<IRoute>;
    private defaultRoute: IRoute;
  
    // Pages
    authorization: Component | undefined;
    mainPage: Component; //Тут перечисляем все страницы

    constructor(private rootElement: HTMLElement) {
        this.mainPage = new Main(this.rootElement);
    
        this.routes = [ //тут аналогично в пути задаём другие страницы
          {
            name: '/',
            component: () => {
               this.rootElement.append(this.mainPage.element);
            },
          },
          {
            name: '/authorization',
            component: () => {
              this.authorization = new Authorization(this.rootElement);
              this.rootElement.append(this.authorization.element);
            },
          },
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
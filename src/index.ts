import { Router } from './router/router';
import {  Component } from './utils/component';
import { Header } from './header';
import './index.scss';
class App {
    private main;
    private router;
  
    constructor(private rootElement: HTMLElement) {
    //   const header = new Header(this.rootElement); //тут хедер
      const header = new Header(this.rootElement);

      this.main = new Component(this.rootElement, 'main', ['main']);
  
      this.router = new Router(this.main.element);
      //сюда потом можно будет футер пихнуть
    }

    init(): void {
      this.router.initRouter();
    }
  }

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.body;
    const app = new App(rootElement);
  
    app.init();
  });

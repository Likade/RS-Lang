import { Router } from './router/router';
import {  Component } from './utils/component'
import './index.scss';
class App {
    private main;
    private router;
  
    constructor(private rootElement: HTMLElement) {
    //   const header = new Header(this.rootElement); //тут хедер
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

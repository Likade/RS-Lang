import './style.scss';
import { Authorization } from './authorization/authorization'
import {  Component } from './utils/component'

class App {
    private main;
    // private router;
  
    constructor(private rootElement: HTMLElement) {
    //   const header = new Header(this.rootElement);
      this.main = new Component(this.rootElement, 'main', ['main']);
      //const authirize = new Authorization(this.main.element); ТУТ зачаток страницы авторизации, попрошу пока не трогать
  
    //   this.router = new Router(this.main.element);
    }
  
    // init(): void {
    //   this.router.initRouter();
    // }
  }

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.body;
    const app = new App(rootElement);
  
    // app.init();
  });

import { Router } from "../router/router";

const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.append(wrapper);

export class App {
  private container : HTMLElement;
  private router : Router;

  constructor(){
    this.container = document.querySelector('.wrapper');
		this.router = new Router(this.container);
  }

	init(): void {
    this.router.initRouter();
  }
  
  // run() {
  //   const header = document.createElement('div');
  //   this.container.append(header);
  //   header.outerHTML = headerInst.render();

  //   const main = document.createElement('div');
  //   this.container.append(main);
  //   main.outerHTML = mainInst.render();
    
  //   const footer = document.createElement('div');
  //   this.container.append(footer);
  //   footer.outerHTML = footerInst.render();
  // }
};
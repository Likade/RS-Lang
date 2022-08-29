import {
  getWords, getUserWords, createBook, createItem,
} from './render';

export function showGroup():void {
  const parent = <HTMLElement>document.querySelector('.nav_group-list');
  const parentItem = parent.querySelectorAll('.nav_group-list-title');
  parent.addEventListener('click', (event) => {
    event.preventDefault();
    const itemClear = document.getElementById('main_word-container') as HTMLElement;
    itemClear.innerHTML = '';

    const target = event.target as HTMLElement;
    const idGroup: string = target.id;

    if (target.classList.contains('nav_group-list-title')) {
      for (let i = 0; i < parentItem.length; i++) {
        parentItem[i].classList.remove('active_group');
      }
      target.classList.add('active_group');
      createBook(+idGroup);
    }
  });
}

// showGroup();

export function showItem():void {
  document.body.addEventListener('click', (event) => {
    event.preventDefault();
    const itemClear = document.getElementById('main_word-review') as HTMLElement;
    itemClear.innerHTML = '';
    const target = event.target as HTMLElement;
    if (target.classList.contains('main_word-items')) {
      const idShow = target.id;
      createItem(idShow);
    }
  });
}
// showItem();

export function showPaginationGroup():void {
  const pag = document.getElementById('pagination') as HTMLElement;
  pag.addEventListener('click', (event) => {
    event.preventDefault();
    const itemClear = document.getElementById('main_word-container') as HTMLElement;
    itemClear.innerHTML = '';
    const activeGroup = <HTMLElement>document.querySelector('.active_group');
    const groupActive = activeGroup.getAttribute('id') as string;
    // console.log(typeof groupActive);
    const target = event.target as HTMLElement;
    if (target.classList.contains('page')) {
      const page = +target.id - 1;
      getWords(+groupActive, page);
    }
  });
}
// showPaginationGroup();
const userId = '6308cda29b13ae0016217e97';

export function showHardWordGroup():void {
  const parent = document.querySelector('.group-range') as HTMLElement;
  const parentItem = parent.querySelectorAll('.group-range-title');
  parent.addEventListener('click', (event) => {
    event.preventDefault();
    const itemClear = document.getElementById('main_word-container') as HTMLElement;
    itemClear.innerHTML = '';
    const target = event.target as HTMLElement;
    if (target.classList.contains('group-range-title')) {
      // let idGroup = event.target.id;
      // console.log(idGroup);
      for (let i = 0; i < parentItem.length; i++) {
        parentItem[i].classList.remove('active_group');
      }
      target.classList.add('active_group');
      getUserWords(userId);
    }
  });
}
// showHardWordGroup();

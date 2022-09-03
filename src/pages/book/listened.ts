import {
  createItemHardWord, createBookHardWord, createBook, createItem,
} from './render';
import {createUserWord, deleteUserWord} from '../../core/components/api/api';
import { dataUser, DayStatistic  } from "../../core/components/interfaces/interface";
//
// const userId = '6308cda29b13ae0016217e97';
createItem('5e9f5ee35eb9e72bc21af4b1');
//

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
      // как получить 1ую карточку выбранной группы?
      // createItem('5e9f5ee35eb9e72bc21af4b1');
    }
  });
}

export function showItem():void {
    const el =   document.getElementById('main_word-container') as HTMLElement;
    el.addEventListener('click', (event) => {
    event.preventDefault();
    const itemClear = document.getElementById('main_word-review') as HTMLElement;
    itemClear.innerHTML = '';
    const target = event.target as HTMLElement;
    const idShow = target.id;
    if ((target.classList.contains('main_word-items')) && (target.nodeName === 'LI')) {
      createItem(idShow);
    } else {
      createItemHardWord(idShow);
    }
  });
}

export function showPaginationGroup():void {
  const pag = document.getElementById('pagination') as HTMLElement;
  pag.addEventListener('click', (event) => {
    event.preventDefault();
    const containerClear = document.getElementById('main_word-container') as HTMLElement;
    containerClear.innerHTML = '';
    // const reviewClear = document.getElementById('main_word-review') as HTMLElement;
    // reviewClear.innerHTML = '';
    const activeGroup = <HTMLElement>document.querySelector('.active_group');
    const groupActive = activeGroup.getAttribute('id') as string;
    const target = event.target as HTMLElement;
    if (target.classList.contains('page')) {
      const page = +target.innerHTML - 1;
      createBook(page, +groupActive);
      // карточка при пагинации пуста, при включении createItem дублируется
      // createItem('5e9f5ee35eb9e72bc21af4b1');
    }
  });
}

export function showHardWordGroup():void {
  const parent = document.querySelector('.group-range') as HTMLElement;
  const parentItem = parent.querySelectorAll('.group-range-title');
  parent.addEventListener('click', (event) => {
    event.preventDefault();
    const itemClear = document.getElementById('main_word-container') as HTMLElement;
    itemClear.innerHTML = '';
    const target = event.target as HTMLElement;
    if (target.classList.contains('group-range-title')) {
      for (let i = 0; i < parentItem.length; i++) {
        parentItem[i].classList.remove('active_group');
      }
      target.classList.add('active_group');
      createBookHardWord(dataUser.userId);
    }
  });
}

export function addHardWord():void {
  const elBtn = document.getElementById('btn_repeat') as HTMLElement;
  elBtn.addEventListener('click', (event) => {
    const elem = event.target as HTMLElement;
    const idCurrentWord = <string>elem.dataset.hard;
    const idCurrentUser = dataUser.userId;
    const currentWord = { difficulty: 'hard' };

    if (elem.classList.contains('btn-hard')) {
      createUserWord(idCurrentUser, idCurrentWord, currentWord);
    }
  });
}

export function removeHardWord():void {
  const elBtn = document.getElementById('btn_repeat') as HTMLElement;
  elBtn.addEventListener('click', (event) => {
    const elem = event.target as HTMLElement;

    if (elem.classList.contains('btn-learned')) {
      const idCurrentWord = <string>elem.dataset.learned;
      const idCurrentUser = dataUser.userId;

      deleteUserWord(idCurrentUser, idCurrentWord);
      createBook();
    }
  });
}

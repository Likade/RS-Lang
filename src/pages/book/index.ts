import { bookBody } from './book-model';
import './style.scss';
import './';
import { createBook } from './render';
import {
  showGroup, showItem, showPaginationGroup, showHardWordGroup,
} from './listened';
import { Pagination } from './pagination';
import { infoBook } from '../audiocall/utils/utils';


export const Book = () => {
bookBody();
createBook();
// createItem('5e9f5ee35eb9e72bc21af4b1');
Pagination();
showGroup();
showItem();
showPaginationGroup();
showHardWordGroup();

document.addEventListener('click', event=>{
  if((event.target as HTMLElement).classList.contains('audiocall-btn')) {
    infoBook.isFromBook = true;
  }
})
}

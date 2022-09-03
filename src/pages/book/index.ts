import { bookBody } from './book-model';
//import '../../style.scss';
import './style.scss';
import './';
import { createBook } from './render';
import {
  showGroup, showItem, showPaginationGroup, showHardWordGroup,
} from './listened';
import { Pagination } from './pagination';



export const Book = () => {
bookBody();
createBook();
// createItem('5e9f5ee35eb9e72bc21af4b1');
Pagination();
showGroup();
showItem();
showPaginationGroup();
showHardWordGroup();
}

import { bookBody } from './book-model';
import './style.scss';
import { createBook, createItem } from './render';
import {
  showGroup, showItem, showPaginationGroup, showHardWordGroup,
} from './listened';
// import {Pagination} from './pagination';

bookBody();

// createUserWord({ userId, wordId, word }:any);
// getUserWord();
createBook();
createItem('5e9f5ee35eb9e72bc21af4b1');

// Pagination();
showGroup();
showItem();
showPaginationGroup();
showHardWordGroup();

function showGroup() {
let parent = document.querySelector('.nav_group-list');
let parentItem = parent.querySelectorAll('.nav_group-list-title');
parent.addEventListener('click', (event) => {
    event.preventDefault();
    let itemClear = document.getElementById('main_word-container');
    itemClear.innerHTML = '';
  if(event.target.classList.contains('nav_group-list-title')) {
    let idGroup = event.target.id;
    for(let i = 0; i < parentItem.length; i++) {
      parentItem[i].classList.remove('active_group');
    }
    event.target.classList.add('active_group');
    getWords(idGroup);
  }
});
}
showGroup();

function showItem() {
  document.body.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('main_word-items')) {
      let idShow = event.target.id;
      // console.log(idShow);
      getWord(idShow);
    }
  })
};
showItem();

function showPaginationGroup() {
  let pag = document.getElementById('pagination');
  pag.addEventListener('click', (event) => {

    event.preventDefault();
    let itemClear = document.getElementById('main_word-container');
    itemClear.innerHTML = '';

    const groupActive = +document.querySelector(".active_group").getAttribute("id");
    // console.log(typeof groupActive);

    if (event.target.classList.contains('page')) {
      let page = event.target.id;
      console.log(page);
      getWords(page,groupActive);
    }
  })
};
showPaginationGroup();


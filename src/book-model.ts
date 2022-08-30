export const bookBody = () => {
  const body = document.body as HTMLElement;
  body.innerHTML = `<div class="wrapper">
<div class="header">
  <div class="header-container container">
    <img src="./assets/svg/logo.svg" alt="logo" class="logo">
    <img src="./assets/svg/Vector.svg" alt="logo" class="logo">
  </div>
</div>

<main class="main">
<div class="container">
  <div class="main-inner">
    <div class="nav">
      <div class="nav-title">Выберите раздел</div>
      <div class="nav_group">
        <ul class="nav_group-list" id="nav_group-list">
          <li class="nav_group-list-title active_group" id="0">A1</li>
          <li class="nav_group-list-title" id="1">A2</li>
          <li class="nav_group-list-title" id="2">B1</li>
          <li class="nav_group-list-title" id="3">B2</li>
          <li class="nav_group-list-title" id="4">C1</li>
          <li class="nav_group-list-title" id="5">C2</li>
          <!-- <li class="nav_group-list-title" id="6">Hard</li> -->
        </ul>
        <div class="group-range">
          <div class="group-range-title">Begginer</div>
          <div class="group-range-title">Intermediate</div>
          <div class="group-range-title">Advanced</div>
          <div class="group-range-title" id="hard-word">Сложные слова</div>
        </div>
      </div>
    </div>
    <div class="main-word-block">
      <div class="main-word-block-title">Слова</div>
      <div id="main_word-container" class="main_word-container"></div>
      <div id="main_word-review" class="main_word-review"></div>
    </div>
    <ul id="pagination" class="pagination"></ul>
  </div>
</div>
</main>

<div class="footer">
<div class="footer-container container">
  <div class="github">
    <div class="zixail github-li">
      <img class="github-logo" src="./assets/svg/github.svg" alt="zixail">
      <p class="nickname">Zixail</p>
    </div>
    <div class="likade github-li">
      <img class="github-logo" src="./assets/svg/github.svg" alt="likade">
      <p class="nickname">Likade</p>
    </div>
    <div class="varenik40000 github-li">
      <img class="github-logo" src="./assets/svg/github.svg" alt="varenik40000">
      <p class="nickname">varenik4000</p>
    </div>
  </div>
  <img class="rsslogo" src="./assets/svg/rsschool-logo.svg" alt="RSSLogo">
</div>
</div>
</div>`;
};

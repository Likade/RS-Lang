export const authScr = () => {
let isLogin : boolean = true;

function changePage(bool : boolean = isLogin) {
  const authenticationBox = document.querySelector('.authentication-box');
  let spanChange = document.querySelector('.span-change');

  if (bool === false) {
    authenticationBox.innerHTML = `<p class="auth-title">Ещё не зарегестрированы?</p>
    <p class="auth-subtitle">Создайте аккаунт и начните</br>изучать английский</p>
    <form class="auth-form" action="./">
      <input type="name" name="name" id="name" placeholder="имя">
      <input type="email" name="email" id="email" placeholder="email">
      <input type="password" name="password" id="password" placeholder="password">
    <button class="btn login-btn">Зарегистрироваться</button>
    </form>
    <p class="text-above-login-btn">Уже зарегестрированы? 
    <span class="span-change">Войдите</span>
    </p>`;
    isLogin = !isLogin;
    spanChange = document.querySelector('.span-change');
    spanChange.addEventListener('click', () => {
      changePage(isLogin);
    });
  }
  if (bool === true) {
    authenticationBox.innerHTML = `<p class="auth-title">Уже зарегестрированы?</p>
    <p class="auth-subtitle">Войдите в свой аккаунт</p>
    <form class="auth-form" action="./">
      <input type="email" name="email" id="email" placeholder="email">
      <input type="password" name="password" id="password" placeholder="password">
      <button class="btn login-btn">Войти</button>
    </form>
    <p class="text-above-login-btn">Ещё не зарегестрированы? 
    <span class="span-change">Зарегестрируйтесь</span>
    </p>`;
    isLogin = !isLogin;
    spanChange = document.querySelector('.span-change');
    spanChange.addEventListener('click', () => {
      changePage(isLogin);
    });
  }
}

changePage(isLogin);
}
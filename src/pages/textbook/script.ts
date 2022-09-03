export const textbookScript = () => {
	
var Pagination = {

  code: '',
	size: 30,
	page: 1,
	step: 3,
	e: HTMLElement,

  Extend: function(data: object) {
      data = data || {};
      Pagination.size = data.size || 30;
      Pagination.page = data.page || 1;
      Pagination.step = data.step || 3;
  },


  Add: function(s: number, f: number) {
      for (var i = s; i < f; i++) {
          Pagination.code += `<a id=${i} class="page">${i}</a>`;
      }
  },


  Last: function() {
      Pagination.code += '<i>...</i><a id="30" class="page">' + Pagination.size + '</a>';
  },

  First: function() {
      Pagination.code += '<a id="1" class="page">1</a><i>...</i>';
  },

  Click: function(i: number) {
      Pagination.page = i;
      Pagination.Start();
  },


  Prev: function() {
      Pagination.page--;
      if (Pagination.page < 1) {
          Pagination.page = 1;
      }
      Pagination.Start();
  },


  Next: function() {
      Pagination.page++;
      if (Pagination.page > Pagination.size) {
          Pagination.page = Pagination.size;
      }
      Pagination.Start(e);
  },

  Bind: function(e: HTMLElement) {
      var a = e.getElementsByTagName('a');
      for (var i = 0; i < a.length; i++) {
          if (+a[i].innerHTML === Pagination.page) a[i].className = 'page current';
          a[i].addEventListener('click', Pagination.Click(i: number), false);
      }
  },


  Finish: function(e: HTMLElement) {
      e.innerHTML = Pagination.code;
      Pagination.code = '';
      Pagination.Bind(e);
  },


  Start: function(e: HTMLElement) {
      if (Pagination.size < Pagination.step * 2 + 6) {
          Pagination.Add(1, Pagination.size + 1);
      }
      else if (Pagination.page < Pagination.step * 2 + 1) {
          Pagination.Add(1, Pagination.step * 2 + 4);
          Pagination.Last();
      }
      else if (Pagination.page > Pagination.size - Pagination.step * 2) {
          Pagination.First();
          Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
      }
      else {
          Pagination.First();
          Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
          Pagination.Last();
      }
      Pagination.Finish(e);
  },



  Buttons: function(e: HTMLElement) {
      var nav = e.getElementsByTagName('a');
      nav[0].addEventListener('click', Pagination.Prev, false);
      nav[1].addEventListener('click', Pagination.Next, false);
  },

  Create: function(e: HTMLElement) {

      var html = [
          `<a><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
					<g clip-path="url(#clip0_51_324)">
					<path d="M22.2758 0.952038C23.2078 1.74304 23.6848 2.86904 23.6848 4.00404C23.6848 4.91704 23.3728 5.83804 22.7358 6.59104L15.5838 15.011L22.7348 23.431C24.1648 25.114 23.9598 27.639 22.2758 29.07C20.5898 30.5 18.0678 30.294 16.6358 28.61L7.28476 17.6C6.01576 16.107 6.01576 13.914 7.28476 12.422L16.6358 1.41104C18.0678 -0.272963 20.5908 -0.477962 22.2758 0.952038Z" fill="white"/>
					</g>
					<defs>
					<clipPath id="clip0_51_324">
					<rect width="30.021" height="30.021" fill="white" transform="translate(0 30.021) rotate(-90)"/>
					</clipPath>
					</defs>
					</svg></a>`, // previous button
          '<span></span>',  // pagination container
          `<a><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" style="transform: rotate(180deg)">
					<g clip-path="url(#clip0_51_324)">
					<path d="M22.2758 0.952038C23.2078 1.74304 23.6848 2.86904 23.6848 4.00404C23.6848 4.91704 23.3728 5.83804 22.7358 6.59104L15.5838 15.011L22.7348 23.431C24.1648 25.114 23.9598 27.639 22.2758 29.07C20.5898 30.5 18.0678 30.294 16.6358 28.61L7.28476 17.6C6.01576 16.107 6.01576 13.914 7.28476 12.422L16.6358 1.41104C18.0678 -0.272963 20.5908 -0.477962 22.2758 0.952038Z" fill="white"/>
					</g>
					<defs>
					<clipPath id="clip0_51_324">
					<rect width="30.021" height="30.021" fill="white" transform="translate(0 30.021) rotate(-90)"/>
					</clipPath>
					</defs>
					</svg></a>`  // next button
      ];

      e.innerHTML = html.join('');
      //Pagination.e = e.querySelector('span');
      Pagination.Buttons(e);
  },


  Init: function(e: HTMLElement, data: object) {
      Pagination.Extend(data);
      Pagination.Create(e);
      Pagination.Start(e);
  }
};


var init = function() {
  Pagination.Init(document.getElementById('pagination'), {
      size: 30, // pages size
      page: 1,  // selected page
      step: 1   // pages before and after current
  });
};

document.addEventListener('DOMContentLoaded', init, false);


}
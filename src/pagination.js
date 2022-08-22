let pagination = document.querySelector('#pagination');

let items = [];
for (let i = 1; i <= 30; i++) {
	let li = document.createElement('li');
	li.innerHTML = i;
	pagination.appendChild(li);
	items.push(li);
}



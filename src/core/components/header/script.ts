export const headerScript = () => {
	document.querySelector('.login-auth-btn').addEventListener('mouseup', (e) => {
		document.querySelector('.nav').classList.toggle('ds-none');
		console.log('click on btn');
		document.body.addEventListener('mousedown', closeNavWindow);
	});
	
	document.querySelectorAll('.nav path, .nav-items, .nav-item').forEach(e => {
		e.addEventListener('mouseup', closeNavWindow);
	})
	
	function closeNavWindow() {
		document.body.addEventListener('click', (e) => {
			console.log((e.target as HTMLElement).classList.contains('main-text-title'), (e.target as HTMLElement).tagName)
			if(!(e.target as HTMLElement).classList.contains('nav') && !(e.target as HTMLElement).classList.contains('login-auth-btn') && (e.target as HTMLElement).tagName !== 'path' && !(e.target as HTMLElement).classList.contains('.nav-item') && !(e.target as HTMLElement).classList.contains('.nav-items')) document.querySelector('.nav').classList.add('ds-none');
		},{once: true})
	}

	document.querySelector('.logout-btn').addEventListener('click', () => {
		localStorage.setItem('token', '');
		localStorage.setItem('userId', '');
		localStorage.setItem('nameUser', '');
		document.location.href = '#/';
	})
}
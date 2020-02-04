import 'https://cdn.kernvalley.us/js/std-js/deprefixer.js';
import 'https://cdn.kernvalley.us/js/std-js/shims.js';
import 'https://cdn.kernvalley.us/components/share-button.js';
import 'https://cdn.kernvalley.us/components/current-year.js';
import 'https://cdn.kernvalley.us/components/bacon-ipsum.js';
import 'https://cdn.kernvalley.us/components/toast-message.js';
import 'https://cdn.kernvalley.us/components/gravatar-img.js';
import { $, ready } from 'https://cdn.kernvalley.us/js/std-js/functions.js';

document.documentElement.classList.toggle('no-dialog', document.createElement('dialog') instanceof HTMLUnknownElement);

ready().then(async () => {
	$(':root').toggleClass('no-js', 'js');

	$('#layout-picker').input(({ target }) => {
		if (target.value === '') {
			delete document.documentElement.dataset.layout;
		} else {
			document.documentElement.dataset.layout = target.value;
		}
	}, { passive: true });

	$('#paras').input(({ target }) => {
		if (target.validity.valid) {
			$('bacon-ipsum').attr({ paras: target.value });
		}
	}, { passive: true });

	$('#theme-picker').input(({ target }) => {
		if (target.value === '') {
			delete document.documentElement.dataset.theme;
		} else {
			document.documentElement.dataset.theme = target.value;
		}
	}, { passive: true });
});

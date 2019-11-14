import 'https://cdn.kernvalley.us/js/std-js/deprefixer.js';
import 'https://cdn.kernvalley.us/js/std-js/shims.js';
import 'https://cdn.kernvalley.us/components/share-button.js';
import 'https://cdn.kernvalley.us/components/current-year.js';
import 'https://cdn.kernvalley.us/components/bacon-ipsum.js';
import 'https://cdn.kernvalley.us/components/toast-message.js';
import 'https://cdn.kernvalley.us/components/gravatar-img.js';
import {$, ready} from 'https://cdn.kernvalley.us/js/std-js/functions.js';

document.documentElement.classList.toggle('no-dialog', document.createElement('dialog') instanceof HTMLUnknownElement);

ready().then(async () => {
	$(':root').toggleClass('no-js', 'js');

	$('select[name="layout"]').change(event => {
		if (event.target.value === '') {
			delete document.documentElement.dataset.layout;
		} else {
			document.documentElement.dataset.layout = event.target.value;
		}
	}, {passive: true});

	$('select[name="theme"]').change(event => {
		if (event.target.value === '') {
			delete document.documentElement.dataset.theme;
		} else {
			document.documentElement.dataset.theme = event.target.value;
		}
	}, {passive: true});
});

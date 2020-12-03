import 'https://cdn.kernvalley.us/js/std-js/deprefixer.js';
import 'https://cdn.kernvalley.us/js/std-js/shims.js';
import 'https://cdn.kernvalley.us/components/share-button.js';
import 'https://cdn.kernvalley.us/components/current-year.js';
import 'https://cdn.kernvalley.us/components/bacon-ipsum.js';
import 'https://cdn.kernvalley.us/components/toast-message.js';
import 'https://cdn.kernvalley.us/components/gravatar-img.js';
import 'https://cdn.kernvalley.us/components/github/user.js';
import { toggleClass } from 'https://cdn.kernvalley.us/js/std-js/data-handlers.js';
import { $, ready } from 'https://cdn.kernvalley.us/js/std-js/functions.js';

$(document.documentElement).toggleClass({
	'no-dialog': document.createElement('dialog') instanceof HTMLUnknownElement,
	'no-details': document.createElement('details') instanceof HTMLUnknownElement,
	'no-js': false,
	'jsj': true,
});

ready().then(async () => {
	document.documentElement.dataset.layout = document.getElementById('layout-picker').value;

	$('[data-toggle-class]').click(toggleClass);

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
		$('[data-theme]').data({ theme: target.value });
	}, { passive: true });
});

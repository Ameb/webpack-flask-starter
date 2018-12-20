import Vue from 'vue';
import jQuery from 'jquery';
import HomeApp from '@/apps/HomeApp.vue';

window.jQuery = jQuery;

// eslint-disable-next-line
console.log('hello home!');

const app = new Vue({
	el: '.app-mount',
	components: {
		homeApp: HomeApp,
	},
});

export default app;

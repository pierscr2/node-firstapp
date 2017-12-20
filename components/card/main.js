const vue=require('vue/dist/vue.js');
const tpl=require('html-loader!./template.html');

vue.component('food-card',{
	template:tpl
});

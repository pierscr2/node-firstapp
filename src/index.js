const Vue=require('vue/dist/vue.js');
const uploader=require('../components/uploader/main.js');
const foodcard=require('../components/card/main.js');


new Vue({
	el:"#app",
	component:[uploader,foodcard]
});

const path=require('path');

module.exports={
	entry:{
		index:'./src/index.js',
		azienda:'./src/azienda.js'
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].js'
	}
};

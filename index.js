const unistyle = require('unistyle');

module.exports = function(source, map) {
	if(this.cacheable) this.cacheable();
	const callback = this.async();
	try{
		unistyle((typeof source === 'string') ? this.exec(source) : source).then(result => {
			callback(null, result);
		}).catch(reason => {
			callback(reason);
		});
	}catch(e){
		callback(reason);
	}
};
const unistyle = require('unistyle');

module.exports = function(source, map) {
	if(this.cacheable) this.cacheable();
	const callback = this.async();
	unistyle(this.exec(source)).then(result => {
		callback(null, result);
	}).catch(reason => {
		callback(reason);
	});
};
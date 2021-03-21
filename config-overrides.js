const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@assets': 'src/assets',
		'@components': 'src/components',
		'@context': 'src/context',
		'@i18n': 'src/i18n',
		'@router': 'src/router',
		'@services': 'src/services',
		'@utils': 'src/utils'
	})(config);

	return config;
};

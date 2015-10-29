console.log(__filename);

module.exports = [
	{
		method	: 'GET',
		path	: '/public/{path*}',
		config	: {
			handler	: {
				directory	: {
					path	: 'public',
					listing	: false,
					index	: true
				}
			}
		}
	}
];